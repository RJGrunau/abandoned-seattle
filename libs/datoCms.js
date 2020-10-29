export function request ({query, variables, preview}) {
    const endpoint = preview ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`

    const client = new GraphQlClient(endpoint, {
        headers: {
            authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`
        }
    })
    return client.request(query, variables)
}