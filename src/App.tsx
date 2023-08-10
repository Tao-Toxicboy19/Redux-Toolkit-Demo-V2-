import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { login, logout } from "./store/slices/loginSlice";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";

type Props = {};

export default function App({}: Props) {
  const dispatch = useDispatch();
  const logins = useSelector((state: RootState) => state.chlogin.checkLogin);
  return (
    <>
      <Header />
      {/* <button onClick={() => dispatch(login())}>login</button>
      <hr />
      <button onClick={() => dispatch(logout())}>logout</button> */}
      {/* <hr /> */}
      <h1>{logins.toString()}</h1>
      <Home/>
    </>
  );
}
