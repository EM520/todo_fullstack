import React, { useEffect } from 'react'
import Page from '../common/Page'
import { useHistory } from 'react-router-dom'
import request from '../../utils/request'
import useForm from '../../hooks/useForm'
import { Input, Button, Tabs } from 'antd';

import '../../App.css';


const { TabPane } = Tabs;

export function LoginSignup() {
    const history = useHistory()
    const [form, setField] = useForm({username: '', password: ''})
    function handleSubmit(e) {
        e.preventDefault()
        console.log(form, 'form')
        const { username, password } = form
        request.login(username, password)
        .then(resp => {
            history.push('/dashboard')
        })
    }

    useEffect(async () => {
        request.get('/secret')
        .then(r => console.log(r))
        .catch(e => console.log(e))
    }, [])
    return <div className="card-container-login">
    <Tabs type="card">
    <TabPane   tab="Login" key="1">
    <Page>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username"></label>
                <Input id="username" type="text" value={form.username} className="input" name="username" onChange={setField} placeholder="Input username please" />
            </div>
            <div className="form-group">
                <label htmlFor="password"></label>
                <Input id="password" type="password" value={form.password} className="input" name="password" onChange={setField} placeholder="Input password please" />
            </div>
            <Button className="subBtn" type="primary" htmlType="submit">Submit</Button>
        </form>
    </Page>
    </TabPane>
    <TabPane  tab="Signup" key="2">
    <Page>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username"></label>
                <Input id="username" type="text" value={form.username} className="input" name="username" onChange={setField} placeholder="Input username please"/>
            </div>
            <div className="form-group">
                <label htmlFor="password"></label>
                <Input id="password" type="password" value={form.password} className="input" name="password" onChange={setField} placeholder="Input password please" />
            </div>
            <Button className="subBtn" type="primary" htmlType="submit">Submit</Button>
        </form>
    </Page>
    </TabPane>
    </Tabs>
</div>
}
