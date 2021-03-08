import React, { useEffect } from 'react'
import request from '../../utils/request'
import { Tabs } from 'antd';

import '../../App.css'


const { TabPane } = Tabs;


export function Dashboard() {
    useEffect(async () => {
        request.get('/secret')
        .then(r => console.log(r))
        .catch(e => console.log(e))
    }, [])
    return <div className="card-container-dashboard">
        <Tabs type="card">
        <TabPane className="dashboardCard" tab="Manage ToDos" key="1">
            <p>Enter Todo placeholder</p>
            <p>Description placeholder</p>
            <div><button onClick={() => request.logout()}>logout</button></div>
        </TabPane>
        <TabPane className="dashboardCard" tab="Search" key="2">
            <p></p>
            <p>Description placeholder</p>
            <div><button nameClass="logout" onClick={() => request.logout()}>logout</button></div>
        </TabPane>
        </Tabs>
    </div>
}
