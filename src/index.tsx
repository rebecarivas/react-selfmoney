import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import App from './App';

createServer({
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          type: 'deposit',
          category: 'Desenvolviemnto',
          amount: 1200,
          createAt: new Date ('2022-01-12 09:00:00')
        },
      ]
    })

  },

  routes(){
    this.namespace = 'api'
    this.get('transaction', () => {
      return this.schema.all('transaction')
    })

    this.post('transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    } )
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

