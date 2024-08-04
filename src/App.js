import "./App.scss";
import "./assets/styles/general.scss";
import countryCard from "./assets/views/countryCard/countryCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {countryCard({
          imgSrc: "https://picsum.photos/200/300",
          name: "Country",
          population: 23,
          buttonText: "Click me",
          callback: null,
        })}
      </header>
    </div>
  );
}

export default App;
