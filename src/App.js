import "./App.scss";
import Container from "./components/Container";

import Header from "./components/Header";
import ContainerCard from "./components/ContainerCard";

// import config file
import { config } from "./config";

// react router dom
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        {config &&
          config.map((c, i) => {
            return (
              <ContainerCard
                title={c.title}
                component={c.component}
                slug={c.slug}
                author={c.author}
                gh_handle={c.github_handle}
                key={i}
              />
            );
          })}

          <Routes>
          <Route path={`/`} element={<>HI</>} ></Route>
            {config.map((r, i) => {
              return <Route path={`/${r.slug}-by-${r.github_handle}`} element={r.component} key={i}></Route>;
            })}
          </Routes>
      </Container>
    </div>
  );
}

export default App;
