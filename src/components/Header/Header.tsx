import "./Header.scss"

const Header = () => {
    return (
        <div className="navbar">
            <img src="../src/assets/Lallar_pizza.png" alt="Logo" className="Pizzalogo"/>
            <h1 className="Title">La<span className="green">ll</span>arPi<span className="green">zz</span>a</h1>
        </div>
    );
};


export default Header;