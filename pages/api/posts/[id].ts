import { NextApiRequest, NextApiResponse } from 'next'
import { IPost } from 'types'
import { posts } from '../mockData'

type ResponseError = {
  message: string
}

export default function recipeHandler(
  req: NextApiRequest,
  res: NextApiResponse<IPost | ResponseError>
) {
  const { query } = req
  const { id } = query
  const filtered = posts.filter((p) => String(p.id) === id)

  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Blog with id: ${id} not found.` })
}