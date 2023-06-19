import Board from "./layout/board";
import Navbar from "./layout/navbar";
import SideBar from "./layout/sidebar";
import "./style/app.scss";

function App() {
  return (
    <div className="App">
      <div className="layout-wrapper flex">
        <div className="sidebar-wrapper hide-for-mobile">
          <SideBar />
        </div>
        <main className="main-wrapper">
          <header className="navbar-wrapper">
            <Navbar />
          </header>
          <section className="board-wrapper">
            <Board />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
