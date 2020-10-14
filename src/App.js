import React, { useEffect } from "react";
import Imessage from "./components/Imessage";
import Login from "./components/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { selectUser, login, logout } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase/firebase";

library.add(fab, fas, far);

function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="App">
      {/* Create a single component that holds everything */}
      {user ? <Imessage /> : <Login />}
    </div>
  );
}

export default App;
