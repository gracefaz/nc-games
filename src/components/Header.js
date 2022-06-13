import { Nav } from "./Nav";

export const Header = () => {
  return (
    <>
      <Nav />
      <header>
        <h1>Games of Grace</h1>
        <p id="greeting">Hello, user! 👋 </p>
      </header>
    </>
  );
};