import './App.css';
import app from './firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log('Error', error);
      })

  }
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }
  return (
    <div className="App">


      <h2>Simple Firebase Authentication</h2>
      {
        user.email ?  <button onClick={handleGoogleSignOut}>Sign out</button> :
         
          <button onClick={handleGoogleSignIn}>Googlr Sign in</button>
      }

      <h2>{user.displayName}</h2>
    </div>
  );
}

export default App;
