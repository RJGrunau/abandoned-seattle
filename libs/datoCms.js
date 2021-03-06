import { GraphQLClient } from 'graphql-request'
export function request ({query, variables, preview, server}) {
    const endpoint = preview ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`
    try {
        const client = new GraphQLClient(endpoint, {
            headers: {
                authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`
            }
        })
        return client.request(query, variables)
        
    } catch (error) {
        console.log('request error: ',error);
    }
   

    
}