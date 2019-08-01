import firebase from 'react-native-firebase'

// BEGIN OF TESTING PURPOSES
export const ref = () => {
    const posts = []
    firebase.firestore().collection('test').onSnapshot((snapshot) => {
        snapshot.forEach((doc) =>{ 
            posts.push(doc._data)
        })
    console.log(posts)
    })
    return posts
}
// END OF TESTING PURPOSES
