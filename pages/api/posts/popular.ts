import { NextApiRequest, NextApiResponse } from 'next'
import { IPost } from 'types'
import { posts } from '../mockData'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPost[]>
) {
  const {
    query: { size },
  } = req;
  let data = posts.sort((a, b) => b.views - a.views)
  if(size) data = data.slice(0, Number(size))
  return res.status(200).json(data)
}
