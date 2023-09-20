import { NewsArticle, NewsResponse } from "@/models/NewsArticles"

// This is for front end only

// Hardcoded
export const categorySlugs = [
    'general',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
]

const newsApiBaseUrl = 'https://newsapi.org/v2'

export async function getTopHeadlines() {
    const response = await fetch(`${newsApiBaseUrl}/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`)
    const newsResponse: NewsResponse = await response.json()
    return newsResponse.articles
}

export async function getTopHeadLinesByCategory(category: string) {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}&category=${category}`)
    const newsResponse: NewsResponse = await response.json()
    return newsResponse.articles
}

export async function search(searchQuery: string) {
    const response = await fetch(`/api/searchNews?q=${searchQuery}`)
    const articles: NewsArticle[] = await response.json()
    return articles
}