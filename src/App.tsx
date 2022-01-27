import {GlobalStyle} from './styles/global';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <GlobalStyle/>
    </>
  );
}

export default App;