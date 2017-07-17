
const intitalState = {
  todos : []
}

function todoApp(state = intitalState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
            {
              text: action.text,
              completes: false
            }
        ]
      })
    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if(index === action.index) {
            return Object.assign({}, todo, {
              completed : !todo.completed
            })
          }
          return todo;
        })
      })
    default:
      return state
  }
}

export default todoApp
