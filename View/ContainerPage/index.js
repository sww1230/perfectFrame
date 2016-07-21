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


  componentDidMount() {}

  componentWillMount() {

    //接口返回错误信息的展示形式，必须包含在willMount下，勿动。该方法不可改变！！
    tipper.setHandler('ServerError', (msg) => {
      Modal.error({
        title: '错误信息',
        content: msg
      });
    });

    //获取页面所需数据，全部罗列在此，完成数据初始化
    this.isLogin = this.props.data.FetchData[0].isLogin;

    //进行请求，真假调试可更改Config/defaultData下localStorage.fetch的值，是否调试 string类型，值'true'||'false'
    const {
      ajaxData,
      ajaxSucceed
    } = this.props;

    ajaxData({
      url: 'isLogin',
      method: 'post',
      succeed: ajaxSucceed,
      beforeCallback: () => {

        //调试时可改变数据的值进行调试，真请求时删除该数据的更改
        this.isLogin.ret = 0;
        this.isLogin.msg = 'error';
        this.isLogin.data = 12121212;

      },
      afterCallback: () => {
        console.log(this.props.data.FetchData[0].isLogin);
      }
    })

  }

  render() {

    if (!this.isLogin.ret) { //条件不具备时
      return <div></div>
    } else {
      return (
        <h1 className="text-center">Welcome to you !</h1>
      )
    }

  }
}


const mapStateToProps = state => ({
  data: state
});
const mapDispatchToProps = dispatch => bindActionCreators(CounterActions, dispatch)

module.exports = connect(mapStateToProps, mapDispatchToProps)(Index);