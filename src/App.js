import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <h1 className="text-center m-5 display-1">
            Welcome to the Dictionary
          </h1>
        </header>

        <main>
          <Dictionary defaultkeyword="smile" />
        </main>
        <footer className="text-center m-5">
          This project was coded by Araceli Medina and it's{" "}
          <a
            href="https://github.com/Chelysita/react-dictionary-project.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
