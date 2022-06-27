const fs = require('fs');
import { NextApiRequest, NextApiResponse} from "next";

export default async function writeDB(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST'){
    fs.writeFileSync('./data/delights.json', JSON.stringify(req.body))
    return res.status(200).json({});
  }
}