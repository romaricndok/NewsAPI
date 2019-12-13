const initialState = { categories : [] }

function toggleCategorie(state = initialState, action){
    let nextState
    switch (action.type) {
        case 'TOOGLE_CATEGORIE_SELECTED':
            const categorieSelectedIndex = state.categories.findIndex(item => item.id === action.value.id)
            if (categorieSelectedIndex !== -1){
                nextState = {
                    ...state,
                    categories: state.categories.filter( (item, index ) => index !== categorieSelectedIndex)
                }
            } else{
                nextState = {
                    ...state,
                    categories: [...state.categories, action.value]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default toggleCategorie