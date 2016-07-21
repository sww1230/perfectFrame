import Immutable from 'immutable'

localStorage.fetch = 'false'; //关闭ajax请求，'true'打开请求


const DefaultData = Immutable.List([{



    //---参与的开发人员姓名，请注意书写规范，格式如下---//

    //开发人员姓名：xxx
    //前端pOST、get...数据

    isLogin: {
        ret: 0,
        data: 'ssdsdsd'
    }

}]);

module.exports = DefaultData