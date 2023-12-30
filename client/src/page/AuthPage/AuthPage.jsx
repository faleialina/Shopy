import { Input } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { List } from '@mantine/core';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

import style from './style.module.scss'



function AuthPage() {


    return (
        <div className={style.wrapper}>
            <h1>Sign in</h1>
            <h2>Email Address</h2>
            <Input variant="filled" radius="md" placeholder="Email Address" />
            <h2>Password</h2>
            <PasswordInput variant="filled" radius="md" placeholder="Password" />
            <List withPadding>
                <List.Item>Must be at least 8 characters</List.Item>
                <List.Item>Must contain at least 1 number</List.Item>
                <List.Item>Must contain lover case and capital letters</List.Item>
            </List>
            <Link to={'/shopy'}> <Button fullWidth
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            >
                Create Account
            </Button></Link>
            <div className={style.flex}>
                <p>Have an account?</p>
                <Link to={'/'}><Button variant="subtle">Sign up</Button></Link>
            </div>



        </div>


    )
}

export default AuthPage;