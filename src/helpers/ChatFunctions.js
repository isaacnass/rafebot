const ChatFunctions = {
  BasicAddRandom: () => {
    const newChat = {
      text: 'You added a chat',
      self: Math.floor(Math.random() + 0.5),
    }
    return newChat
  },
}

export default ChatFunctions
