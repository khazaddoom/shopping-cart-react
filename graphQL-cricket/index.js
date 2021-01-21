const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = require('graphql')

const app = express()

const InventoryType = new GraphQLObjectType({
    name: 'Inventory',
    description: 'An Inventory item',
    fields: () => ({
        id: { type: GraphQLInt},
        name: {type: GraphQLString},
        qty: { type: GraphQLInt},
    })
})

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'A User',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        level: { type: GraphQLInt },
        inventories: {
            type: GraphQLList(InventoryType)
        }
    })
})

// create a RootQuery Type

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        users: {
            type: GraphQLList(UserType),
            description: 'List of Books',
            resolve: () => [{
                id: 1,
                name: 'Ganesh',
                level: 1,
                inventories: [{
                    id: 1,
                    name: 'Coints',
                    qty: 100
                }]
            }, {
                id: 2,
                name: 'Saurav',
                level: 5,
                inventories: [{
                    id: 1,
                    name: 'Coints',
                    qty: 100
                }]
            }, {
                id: 3,
                name: 'Avinash',
                level: 6,
                inventories: [{
                    id: 1,
                    name: 'Coints',
                    qty: 100
                }]
            }]
        },
        inventories: {
            type: GraphQLList(InventoryType),
            description: 'List of Inventory Items',
            resolve: () => [{
            }]
        }
    })
})

// Root Query
const RootQuery = new GraphQLSchema({
    query: RootQueryType
})


app.use('/graphql', graphqlHTTP({
    schema: RootQuery,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Server running at PORT 3000...')
})