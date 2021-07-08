import React from 'react'

class ChatCard extends React.Component {
  render() {
    return (
        <div className="bg-red-200 to bg-yellow-300 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img src="/images/chat_logo.svg" className="h-12 w-12" alt="Chat Logo"/>
          </div>
          <div>
            <div className="text-xl font-size-[50px] text-black">Chat app</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
    )
  }
}

export default ChatCard;
