import React from 'react';
import { store } from '~/store';
import { Provider } from 'react-redux';

// import routes
import Routes from '~/routes'

// import global styles and fonts
import '~/assets/fonts/fontawesome'
import '~/assets/styles/globalStyles.scss'

export default function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}