function Header({ title, count }) {

  return (
    <>
      <header>

        <h1 style={
          {
            color: (count > 5) ? `red`
              : `black`
          }
        }>{title}</h1>

      </header>
    </>
  );
}

export default Header;
