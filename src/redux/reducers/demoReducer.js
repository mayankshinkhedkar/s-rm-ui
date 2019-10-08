
const UPDATE_TEXT = 'UPDATE_TEXT'

const initialStateDemo = {
  textdemo: 'hello'
}

export default function textdemoClass (state = initialStateDemo, action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        textdemo: action.text
      }
    default:
      return state
  }
}