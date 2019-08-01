// If your app needs it, use combineReducer : https://redux.js.org/api/combinereducers
// Too big reducers, with too many logic tend to be less maintainable

// BEGIN OF TESTING PURPOSES
const initialState = { bestFilm: 'Batman' }
// END OF TESTING PURPOSES

function mainReducer(state = initialState, action) {
    let nextState

    switch (action.type) {

// BEGIN OF TESTING PURPOSES
        case 'TOGGLE_FAVORITE':
        console.log(action)
            console.log(action.value)
            if (action.value !== -1) {
                const favoriteFilm = action.value
                nextState = {
                ...state,
                bestFilm: favoriteFilm
            }
            }
            else {
                nextState = {
                    ...state
                }
            }
            return nextState || state
// END OF TESTING PURPOSES



        default:
            return state
    }
}

export default mainReducer