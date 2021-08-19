import React from 'react';
import { useSelector } from 'react-redux'
import {Redirect, Route, Switch, useLocation} from 'react-router-dom'
import './App.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {IRootState} from "./helpers/interface.global";
import { SinginPage } from './page/auth-page';
import { appConstants } from './constans';

const { navigation } = appConstants;
const isAuthenticated = () => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  try {
    if(token){
      return true;
    }
    else{
      return false;
    }
  } catch (error) {
    return false;
  }
}

function PrivateRoute({ component: Component, path, ...rest }:{component: any, path: string}) {
  return (
      <Route
          {...rest}
          render={props =>
              isAuthenticated() ? (
                  <Component {...props} />
              ) : (
                  <Redirect
                      to={{
                        pathname: navigation.singin,
                      }}
                  />
              )
          }
      />
  );
}
function App() {
  const location = useLocation();
  const {filterPanel} = useSelector((state: IRootState) => state.app);
  const { token } = useSelector((state: IRootState ) => state.auth);
  const parseLocation = location.pathname.split('/').filter(item => item);
  const client = new ApolloClient({
    uri: "http://0.0.0.0:9000/graphql",
    cache: new InMemoryCache()
  });
  return (
      <ApolloProvider client={client}>
        <div className={`min-w-default text-center relative ${parseLocation.length === 1 && parseLocation[0] === 'main' && filterPanel? 'bg-gr-content' : ''}`}>
          <Switch>
            <Route path={navigation.singin} component={SinginPage} />
          </Switch>
        </div>
      </ApolloProvider>
  );
}

export default App;
