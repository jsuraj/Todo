
const intitalState = {
  todos : [],
  activeButton : 0
}

function todoApp(state = intitalState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
            {
              text: action.text,
              completed: false
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
    case 'SET_ACTIVE':
      return Object.assign({}, state, {
        activeButton : action.index
      })
    default:
      return state
  }
}

export default todoApp
