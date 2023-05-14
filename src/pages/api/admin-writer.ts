// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  first_name: string
  last_name: string
  email: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    
  res.status(200)
}
