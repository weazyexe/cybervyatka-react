import React, { FormEvent} from 'react';
import {inject, observer} from "mobx-react";
import AuthState from "../../stores/Admin/AuthState";
import {Redirect} from "react-router";
import {Button, TextField} from "@material-ui/core";
import {Container} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css'
import logo from '../../assets/logo_colored_blue.png';

@inject("authState")
@observer
export default class Auth extends React.Component<AuthProps, AuthPageState>{

    constructor(props : AuthProps) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange(e: any) {
        this.setState({
            email: e.target.value
        });
    }

    onPasswordChange(e: any) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.authState.signIn(this.state.email, this.state.password);
    }

    render() {
        if (this.props.authState.isLoading) {
            return(
                <div>
                    loading...
                </div>
            );
        }

        if (this.props.authState.isSignedIn) {
            return <Redirect to='/admin/main'/>;
        }

        return(
            <div>
                <div className='text-center'>
                    <img src={logo} alt='cv logo' className='mt-5 mb-3 logo'/>
                </div>
                <form onSubmit={(e) => this.onSubmit(e)} noValidate autoComplete="off">
                    <Container fluid>
                        <div className='text-center m-2'>
                            <TextField
                                onChange={(e) => this.onEmailChange(e)}
                                label="E-mail"
                                variant="outlined"
                                type='email' />
                        </div>
                        <div className='text-center m-2'>
                            <TextField
                                onChange={(e) => this.onPasswordChange(e)}
                                label="Password"
                                variant="outlined"
                                type='password' />
                        </div>
                        <div className='text-center m-2'>
                            <Button variant="contained" color="primary" type='submit'>
                                Sign in
                            </Button>
                        </div>
                    </Container>
                </form>
            </div>
        );
    }
}

interface AuthProps {
    authState: AuthState
}

interface AuthPageState {
    email: string;
    password: string;
}
