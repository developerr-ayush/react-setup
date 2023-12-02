import logo from "../assets/img/logo.svg";

export const Header = () => {
  return (
    <header>
      <a href="/" className="logo-wrap">
        <img src={logo} alt="aoinix" />
        <h1 className="logo" hidden>
          Aonix
        </h1>
      </a>
      
    </header>
  );
};
