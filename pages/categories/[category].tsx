import NewsArticlesGrid from "@/components/NewsArticlesGrid"
import { NewsArticle, NewsResponse } from "@/models/NewsArticles"
import { categorySlugs } from "@/services/api/article"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { Alert } from "react-bootstrap"
import * as ArticleServiceApi from '@/services/api/article'

interface CategoryNewsPageProps {
    newsArticles: NewsArticle[],
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = categorySlugs.map(slug => (
        {
            params: {
                category: slug
            }
        }
    ))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({ params }) => {
    const category = params?.category?.toString()

    const articles = await ArticleServiceApi.getTopHeadLinesByCategory(category ?? '')

    // Will not happen
    if (articles === null) {
        return {
            props: { newsArticles: [] }
        }
    }

    return {
        props: { newsArticles: articles },
        revalidate: 5 * 60,
    }
}

const CategoryNewsPage = ({ newsArticles }: CategoryNewsPageProps) => {
    const router = useRouter()
    const categoryName = router.query.category?.toString()

    const title = `Category: ${categoryName}`
    return (
        <>
        <Head>
            <title key='title'>{`${title} Page`}</title>
        </Head>
            <main>
                <h1>{title}</h1>
                <Alert>
                    This page use <strong>getStaticProps</strong> for very high page loading speed and <strong>incremental static generation</strong> to show data not older than 5 mintues
                </Alert>
                <NewsArticlesGrid articles={newsArticles} />
            </main>
        </>
    )
}

export default CategoryNewsPage