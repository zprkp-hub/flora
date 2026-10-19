function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="logo" href="#">Флора</a>
        <nav className="nav">
          <a className="nav__link nav__link--active" href="#">Главная</a>
          <a className="nav__link" href="#">Каталог</a>
          <a className="nav__link" href="#">Корзина</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
