import Container from '../Layout/Container';
import './Header.css';

const Header = () => {
  return <header className="header">
    <Container className="container header__wrapper">
        <h1>ExpenseTracker</h1>
        <div className="header__actions">
          <div className="avatar">
            <span className="avatar__name">AZ</span>
          </div>
        </div>
    </Container>
  </header>
}

export default Header;