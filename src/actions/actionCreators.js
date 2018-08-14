
export function addTodo(text) {
  // console.log('addTodo called');
  return {
    type : 'ADD_TODO',
    text
  }
}

export function toggleTodo(index) {
  return {
    type : 'TOGGLE_TODO',
    index
  }
}

export function setActiveButton(index) {
  return {
    type : 'SET_ACTIVE',
    index
  }
}

export function deleteTodo(index) {
  return {
    type: 'DELETE_TODO',
    index
  }
}
