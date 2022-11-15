import React from 'react';
import Route from './src/config/route';

export default class RootApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 渲染页面
    return <Route />;
  }
}
