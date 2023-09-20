// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NewsArticle, NewsResponse } from '@/models/NewsArticles'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  error?: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | NewsArticle[]>
) {
  const searchQuery = req.query.q?.toString()

  if (!searchQuery) {
    return res.status(400).json({error: 'Please enter the search query.'})
  }

  // Also this but I don't plan to work on this project further
  const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEWS_API_KEY}`)
  const newsResponse: NewsResponse = await response.json()

  res.status(200).json(newsResponse.articles)
}
