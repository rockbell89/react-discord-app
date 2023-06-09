import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import "./App.css";
import Login from "./components/Login";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "./store/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

function App() {
  // const user = useSelector((state) => state.user.user);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            photo: user.photoURL,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  // 로그인 전
  if (!user.user) {
    return <Login />;
  }

  // 로그인 후
  return (
    <div className="App">
      <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Sidebar />
        </ErrorBoundary>
        <Chat />
      </>
    </div>
  );
}

export default App;
