const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = require('graphql')

const app = express()

const usersData = [{
    id: 1,
    name: 'Ganesh',
    level: 1,
    my_inventories: [{
        id: 1,
        name: 'Coins',
        qty: 100
    }]
}, {
    id: 2,
    name: 'Saurav',
    level: 5,
    my_inventories: [{
        id: 1,
        name: 'Coins',
        qty: 100
    }]
}, {
    id: 3,
    name: 'Avinash',
    level: 6,
    my_inventories: [{
        id: 1,
        name: 'Coins',
        qty: 100
    }]
}]

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
        my_inventories: {
            type: GraphQLList(InventoryType)
        }
    })
})

// create a RootQuery Type

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        user: {
            type: UserType,
            description: 'A single user by ID',
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: (parent, args) => usersData.find(user => user.id == args.id)
        },
        users: {
            type: GraphQLList(UserType),
            description: 'List of Books',
            resolve: () => usersData
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