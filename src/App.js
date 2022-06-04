import { ChatEngine } from 'react-chat-engine'; 

import ChatFeed from './components/ChatFeed'

import './App.css';

const App = () => {
    return (
        <ChatEngine height = "100vh"
        projectID ="b173c794-1e62-418a-b35d-416b7beaebfe" 
        userName = "javascriptmastery"
        userSecret = "123123 " 
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps } />}
        />
    );
}

export default App;