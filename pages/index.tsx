import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { NewsArticle, NewsResponse } from '@/models/NewsArticles'
import NewsArticlesGrid from '@/components/NewsArticlesGrid'
import { Alert } from 'react-bootstrap'
import * as ArticleServiceApi from '@/services/api/article'

interface NewsPageProps {
  newsArticles: NewsArticle[]
}

export const getServerSideProps: GetServerSideProps<NewsPageProps> = async () => {
  const articles = await ArticleServiceApi.getTopHeadlines()
  if (articles === null) {
    return {
      props: { newsArticles: [] }
    }
  }

  return {
    props: { newsArticles: articles }
  }
}

export default function Home({ newsArticles }: NewsPageProps) {
  return (
    <>
      <Head>
        <title key='title'>News</title>
      </Head>
      <main className={`${styles.main}`}>
        <h1>News App</h1>
        <Alert>
          This page use <strong>getServerSideProps</strong> to fetch data server-side on every request. <strong>Improved SEO</strong>
        </Alert>
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  )
}
