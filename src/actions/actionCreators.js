
export function addTodo(text) {
  console.log('addTodo called');
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
