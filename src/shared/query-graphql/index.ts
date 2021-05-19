import { ExecutionResult, graphql, Source } from 'graphql'

import { schema } from '@/pages/api/graphql'

export default async function queryGraphql(
  query: Source | string,
  variableValues = {}
): Promise<ExecutionResult> {
  const { data } = await graphql({ schema, source: query, variableValues })
  return data || {}
}
