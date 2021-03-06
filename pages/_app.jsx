import React from 'react';
// styles
import { LocaleProvider } from '../components/locale/LocaleContext';
import 'normalize.css';
import '../styles/basic.css';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => (
  <LocaleProvider>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </LocaleProvider>
);

export default App;
