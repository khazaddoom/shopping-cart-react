const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = require('graphql')

const app = express()

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: GraphQLInt,
        user_name: GraphQLString
    })
})


// create a schema

const users = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Users",
        fields: () => ({
            message: {
                type: new GraphQLList(UserType),
                resolve: () => []
            }
        })
    })
})


app.use('/graphql', graphqlHTTP({
    schema: users,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Server running at PORT 3000...')
})