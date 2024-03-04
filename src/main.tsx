import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  createHttpLink 
} from "@apollo/client";
import { AuthProvider } from './contexts/AuthContext.tsx';
import { setContext } from '@apollo/client/link/context'
import App from './App.tsx'
import './reset.css'

const link = createHttpLink({
  uri: 'http://localhost:3000/'
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authrization: localStorage.getItem("token") || ""
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link)
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AuthProvider>
  </React.StrictMode>,
)
