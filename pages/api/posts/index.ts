import { NextApiRequest, NextApiResponse } from 'next'
import { IPost } from 'types'
import { posts } from '../mockData'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IPost[]>
) {
  return res.status(200).json(posts)
}
