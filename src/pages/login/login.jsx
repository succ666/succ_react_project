import React,{Component} from "react"
import {Form,Input,Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import log from './imgs/logo.png'
import './css/login.less'

export default class Login extends Component{

  onFinish = values => {
    alert("发送登录请求")
    console.log('Received values of form: ', values);
  };
 
  render(){
    let {Item} = Form
    return(
      <div className="log">
        <header>
          <img src={log} alt="log"/>
          <h1>商品管理系统</h1>
        </header>
        <section>
          <p className="title">用户登录</p>
          {/* <Form onFinish={this.onFinish} className="login-form">
            <Item name="username">
              <Input prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}} />} placeholder="用户名"/>
            </Item>
            <Item name="password">
              <Input prefix={<LockOutlined style={{color:'rgba(0,0,0,.25)'}} />} type="password" placeholder="密码"/>
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button" block>
                登录
              </Button>
            </Item>
          </Form> */}
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
          >
            <Item
              name="username"
              /*
              用户名/密码的的合法性要求
                1). 必须输入
                2). 必须大于等于4位
                3). 必须小于等于12位
                4). 必须是英文、数字或下划线组成
              */
              rules={[
                {required: true,message:"用户名必须输入！"},
                {max:12,message:"用户名必须小于等于12位"},
                {min:4,message:"用户名必须大于等于4位"},
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Item>
            <Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '密码必须输入！',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    const pwdReg = /^[a-zA-Z0-9_]+$/
                    if (!value || getFieldValue('password') === value) {
                      if (value.length < 4 && value.length > 0) {
                        return Promise.reject('密码必须大于等于4位')
                      } else if (value.length > 12) {
                        return Promise.reject('密码必须小于等于12位')
                      } else if (!pwdReg.test(value) && value.length > 0) {
                        return Promise.reject('密码必须是英文、数组或下划线组成')
                      }else{
                        return Promise.resolve();
                      }
                      
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button" block>
                登录
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    )
  }
}