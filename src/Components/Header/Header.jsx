import headerLogo from '../../../src/images/logo.svg';
import headerIcon from '../../../src/images/search.svg';
import headerProfileImg from '../../../src/images/profile.svg';

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="logo"
      />
      <button className="header__profile_btn"></button>
      <form className="header-form">
        <fieldset className="header-form__fieldset">
          <img
            className="header-form__icon"
            src={headerIcon}
            alt="icon"
          />
          <input
            className="header-form__input"
            type="text"
            id="search"
            name="search"
            placeholder="Найти..."
          />
        </fieldset>
      </form>
      <div className="header__profile">
        <h2 className="header__title">
          Константин
        </h2>
        <img
          className="header__profile_image"
          src={headerProfileImg}
          alt="profile"
        />
      </div>
    </header>
  )
}

export default Header;
