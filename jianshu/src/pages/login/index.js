import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, InputBox, Button } from './style';
import { actionCreator } from './store';
import { Redirect } from  'react-router-dom';

class login extends PureComponent {
    render() {
        const { login, loginFunc } = this.props;
        if (!login) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <InputBox placeholder='账号' ref={(input) => {this.account = input}}/>
                        <InputBox placeholder='密码'  type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={() => loginFunc(this.account, this.password)}>
                            登陆
                        </Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = (state) =>  ({
    login: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    
    loginFunc(account, password) {
        dispatch(actionCreator.login(account.value, password.value))
    }
});

export default connect(mapStateToProps, mapDispatch)(login);