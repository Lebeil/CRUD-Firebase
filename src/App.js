import '../src/styles/index.scss'
import ConnectModal from './components/ConnectModal';
import {useState} from "react";
import { onAuthStateChanged } from "firebase/auth"
import {auth} from "./utils/firebase.config";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  })

  return (
    <div className="App">
      <div className='app-header'>
          {user && (
            <div className="user-infos">
                <span>{user?.displayName[0]}</span>
                <h4>{user?.displayName}</h4>
                <button>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
            </div>
          )}
          {user ? <CreatePost/> : <ConnectModal/>}
      </div>
      <div className='posts-container'>

      </div>
    </div>
  );
}

export default App;
