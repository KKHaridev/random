import { Navbar } from './components';
import { Element } from "react-scroll";
import { Main } from './Sections';

function App() {

  return (
    <Element name="Home">
      <Navbar />
      <Main />
    </Element>
  )
}

export default App
