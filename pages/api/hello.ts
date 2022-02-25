// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Any file inside the folder pages/api is mapped to /api/ and
// will be treated as an API endpoint instead of a page.

import { GraphQLClient, gql } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from 'next';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPGCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

type Data = {
  name: string
}

//export a default for API route to work
export default async function hello(req: NextApiRequest, res: NextApiResponse<Data>) {

  const grahpQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $comment: String!, $slug: String!) {
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug} } }) { id }
    }
  `

  const result = await graphQLClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    slug: req.body.slug,
  });

  return res.status(200).send(result);
}