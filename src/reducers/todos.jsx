const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        return {
            id: action.id,
            text: action.text,
            completed: false
        }
        case 'COMPLETE_TODO':
        if (state.id !== action.id) {
            return state
        }

        return Object.assign({}, state, {
            completed: !state.completed
        })

        default:
        return state;
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
        return [
            ...state,
            todo(undefined, action)
        ]
        default:
        return state
    }
}

export default todos;
