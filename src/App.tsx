import { useDispatch, useSelector } from "react-redux";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { RootState } from "./store/store";
import { login, logout } from "./store/slices/loginSlice";
import Header from "./components/Header/Header";
import MoviesPage from "./components/Pages/MoviePage/MoviePage";
import HomePage from "./components/Pages/HomePage/HomePage";
import RegisterPage from "./components/Pages/RegisterPage/RegisterPage";
import LoginPage from "./components/Pages/LoginPage/LoginPage";

type Props = {};

export default function App({}: Props) {
  const dispatch = useDispatch();
  const logins = useSelector((state: RootState) => state.chlogin.checkLogin);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

{
  /* <h1>{logins.toString()}</h1> */
}
{
  /* <button onClick={() => dispatch(login())}>login</button>
<hr />
<button onClick={() => dispatch(logout())}>logout</button> */
}
{
  /* <hr /> */
}
