import './App.scss';
import Container from './components/Container';

import Header from './components/Header'
import ContainerCard from './components/ContainerCard';

// import config file

import { config } from './config';

function App() {

  

  return (
    <div className="App">
      <Header/>
      <Container>
        {
          config && config.map((c , i)=>{
            return  <ContainerCard title={c.title} component={c.component} slug={c.slug} author={c.author} gh_handle={c.github_handle}/>
          })
        }
         
      </Container>
    </div>
  );
}

export default App;
