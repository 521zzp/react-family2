import React from 'react'
import ReactDom from 'react-dom'
import GetRouter from './router/router'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store/store'

/*初始化*/
renderWithHotReload(GetRouter());
/*模块热替换*/
if (module.hot) {
  module.hot.accept('./router/router', () => {
    const GetRouter = require('./router/router').default;
    renderWithHotReload(GetRouter());
  });
}


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
