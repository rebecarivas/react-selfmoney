import {GlobalStyle} from '../src/styles/global';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { createServer} from 'miragejs';

createServer({
  routes(){
    this.namespace = 'api'
    this.get('/transaction', () => {
      return[
        {
          id: 1,
          title: 'Transaction 1',
          amoutn: 400,
          type: 'deposit',
          category: 'food',
          date: new Date()
        }
      ]
    } )
  }
})

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
