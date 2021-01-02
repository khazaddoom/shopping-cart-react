let firebaseLibrary = [];


firebaseLibrary.initialize = (firebase) => {
     return firebase.initializeApp({
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        // messagingSenderId: process.env.REACT_APP_messagingSenderId,
        // appId: process.env.REACT_APP_appId,
        databaseUrl: "https://react-web-projects-default-rtdb.firebaseio.com"
     });

     
}

firebaseLibrary.getProducts = async (firebase) => {
    const snapshot = await firebase.database().ref('products/').once('value')
    console.log(snapshot.val())
    return snapshot && snapshot.val()
}

export default firebaseLibrary
