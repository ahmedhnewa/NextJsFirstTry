import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { NewsArticle } from "@/models/NewsArticles";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import * as ArticleServiceApi from '@/services/api/article'

const SearchNewsPage = () => {
    const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const searchQuery = formData.get('searchQueryInput')?.toString().trim() ?? ''

        if (searchQuery) {
            try {
                setSearchResults(null)
                setErrorMessage(null)
                setIsLoading(true)
                const articles = await ArticleServiceApi.search(searchQuery)
                setSearchResults(articles)
            } catch (error) {
                console.error(error)
                setErrorMessage((error as Error).message)
            } finally {
                setIsLoading(false)
            }
        }
    }

    return (
        <main>
            <Head>
                <title key='title'>Search News</title>
            </Head>
            <h1>Search news</h1>
            <Alert>
                This page use <strong>client-side data fetching</strong> to show data on every search, requests are handled by our embeded backend
            </Alert>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="searchInput">
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        name="searchQueryInput"
                        placeholder="Enter a search query..."
                    />
                </Form.Group>
                <Button type="submit" className="mb-3" disabled={isLoading}>
                    Search
                </Button>
            </Form>
            <div className="d-flex flex-column align-items-center">
                {isLoading &&
                    <Spinner animation="border" />
                }
                {errorMessage &&
                    <p>Error: {errorMessage}</p>
                }
                {searchResults?.length === 0 &&
                    <p>Nothing found, please try a different query.</p>
                }
                {searchResults &&
                    <NewsArticlesGrid articles={searchResults} />
                }
            </div>
        </main>
    );
}

export default SearchNewsPage;