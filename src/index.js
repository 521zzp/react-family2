import React from 'react'
import ReactDom from 'react-dom'
import GetRouter from './router/router'
import App from '@/components/App'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store/store'

/*初始化*/
/*renderWithHotReload(App());
/!*模块热替换*!/
if (module.hot) {
  module.hot.accept('./components/App', () => {
    console.log('模块热替换————————————————————————————————————————')
    const App = require('./components/App').default;
    renderWithHotReload(App());
  });
}*/

/*初始化*/
/*renderWithHotReload(GetRouter());
if (module.hot) {
  module.hot.accept('./router/router', () => {
    const GetRouter = require('./router/router').default;
    renderWithHotReload(GetRouter());
  });
}*/


function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={ store }>
        { RootElement }
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

ReactDom.render(
  <AppContainer>
    <Provider store={ store }>
      <App/>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)
