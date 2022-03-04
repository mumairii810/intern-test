import { useEffect, useState } from 'react';
import { Launcher } from 'react-chat-window';

export default () => {

  let [messageList, setMessageList] = useState([]);
  
  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem('messages'));
    
    setMessageList(data)

  },[])
  
  useEffect(()=>{
    if(messageList.length){

      localStorage.setItem('messages', JSON.stringify(messageList));
    }
    
  },[messageList])

  

  const _onMessageWasSent = (message) => {
    setMessageList([...messageList, message]);
  }
  const _sendMessage = (text) => {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  const messageClick = ()=>{
    
    let userKaMessage = prompt("enter your message")
      
    let message = {
      author: 'them',
      type: 'text',
      data: { text: userKaMessage }
    }
    
    setMessageList([...messageList, message]);
    
  }


  return <div>

    <button onClick={messageClick}>Second User</button>
    <Launcher
      agentProfile={{
        teamName: 'internShip Test',
        imageUrl: 'https://www.gamicacloud.com/images/right-img.png'
      }}
      onMessageWasSent={_onMessageWasSent}
      messageList={messageList}
      showEmoji
      />
  </div>;

}