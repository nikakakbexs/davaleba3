import "./App.css";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { cards } from "./data";

function App() {
  const handleClick = () => {
    window.open("https://www.youtube.com/watch?v=ZQUw4AsBh-4", "_blank");
  };
  return (
    <div>
      <Header />
      <div className="nika">
        <button className="click" onClick={handleClick}>
          დამაჭირე არ ინანებ
        </button>
      </div>
      <div className="cards">
        {cards.map((el) => (
          <Card name={el.name} img={el.img} key={el.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
