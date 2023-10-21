function Header({ title, count }) {

  return (
    <>
      <header className="container-fluid text-center">

        <h1 style={
          {
            color: (count > 5) ? `red`
              : `black`
          }
        } className="mt-5" >{title}</h1>

      </header>
    </>
  );
}

export default Header;
