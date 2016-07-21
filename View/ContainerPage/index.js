import React from 'react'

import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import * as CounterActions from '../Action';
import {
  Link,
  IndexLink
} from 'react-router'

import Menu from '../Components/menu';
import Icon from '../Components/icon';

import tipper from '../Reducers/tipper.js'
import Modal from '../Components/modal'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }


  componentDidMount() {

    //接口返回错误信息的展示形式
    tipper.setHandler('ServerError', (msg) => {
      Modal.error({
        title: '错误信息',
        content: msg
      });
    });

  }

  componentWillMount() {

  }

  render() {

    return (
      <h1 className="text-center">Welcome to you !</h1>
    )

  }
}


const mapStateToProps = state => ({
  data: state
});
const mapDispatchToProps = dispatch => bindActionCreators(CounterActions, dispatch)

module.exports = connect(mapStateToProps, mapDispatchToProps)(Index);