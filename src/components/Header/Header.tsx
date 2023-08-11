import { Link } from "react-router-dom";

type Props = {};

export default function Header({}: Props) {
  return (
    <nav className="bg-green-300 h-10 flex justify-center items-center">
      <div className="container mx-auto">
        <ul className="flex justify-center gap-x-3">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/movie"}>Movie</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
