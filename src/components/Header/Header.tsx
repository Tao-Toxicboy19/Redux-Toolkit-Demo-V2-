
type Props = {};

export default function Header({}: Props) {
  return (
    <nav className="bg-green-300 h-10 flex justify-center items-center">
      <div className="container mx-auto">
        <ul className="flex justify-center gap-x-3">
          <li>Home</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </nav>
  );
}
