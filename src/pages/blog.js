import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
const BlogPage = ({data}) => {
    console.log(data)
    return (
        <div>
            <Layout pageTitle="Blog Posts">
                <ul>
                    {
                        data.allFile.nodes.map(node => (
                            <li key={node.name}>
                                {node.name}
                            </li>
                        ))
                    }
                </ul>
            </Layout>
        </div>
    )
}
export const query = graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
              nodes {
                name
              }
            }
          }
    `
export default BlogPage
