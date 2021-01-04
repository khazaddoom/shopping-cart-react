let firebaseLibrary = [];

const data = [{
    id: Math.random()*100000000000000000,
    title: 'ADIDAS',
    shortDescription: 'Newest Range in Stores', 
    imageUrl: '',
    unitPrice: 12,
    currencyCode: '$'
},
{
    id: Math.random()*100000000000000000,
    title: 'REEBOK',
    shortDescription: 'Newest Range in Stores', 
    imageUrl: '',
    unitPrice: 12.5,
    currencyCode: '$'
}]


firebaseLibrary.initialize = async (firebase) => {

     firebase.initializeApp({
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        // messagingSenderId: process.env.REACT_APP_messagingSenderId,
        // appId: process.env.REACT_APP_appId,
        databaseUrl: "https://react-web-projects-default-rtdb.firebaseio.com"
     }); 
     
    //  await firebaseLibrary.dataLoad(firebase)
}

firebaseLibrary.dataLoad = async (firebase) => {
     // initial data load
     data.forEach(async product => {
        await firebase.database().ref('products/').push({
         ...product
        })
     })  
}

// List of Products for Homepage or Dashboard

firebaseLibrary.getProducts = async (firebase) => {
    const ref = await firebase.database().ref('products/')
    const products = await ref.once('value')
    // Firebase Realtime Database stores a product as a Key value pair under the root
    if(products.val())
        return Object.values(products.val());
    else
        return []

}

firebaseLibrary.listen = (firebase, callback) => {
    firebase.database().ref('products/').on('value', (products) => {
        if(products.val()) {
            callback(Object.values(products.val()))
        }
    })
}

export default firebaseLibrary
