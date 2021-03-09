import React, { useEffect } from "react";
import request from "../../utils/request";
import { Tabs } from "antd";
import "../../App.css";
import ManageToDos from "./ManageToDos";
import SearchToDos from "./SearchToDos";

const { TabPane } = Tabs;

export function Dashboard() {
  useEffect(async () => {
    request
      .get("/secret")
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="card-container-dashboard">
      <Tabs type="card">
        <TabPane className="dashboardCard" tab="Manage ToDos" key="1">
          <ManageToDos />
        </TabPane>
        <TabPane className="dashboardCard" tab="Search" key="2">
          <SearchToDos />
        </TabPane>
      </Tabs>
      <div>
        <button className="logout" onClick={() => request.logout()}>
          logout
        </button>
      </div>
    </div>
  );
}
