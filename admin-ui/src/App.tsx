import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ConditionList } from "./condition/ConditionList";
import { ConditionCreate } from "./condition/ConditionCreate";
import { ConditionEdit } from "./condition/ConditionEdit";
import { ConditionShow } from "./condition/ConditionShow";
import { EmotionalStateList } from "./emotionalState/EmotionalStateList";
import { EmotionalStateCreate } from "./emotionalState/EmotionalStateCreate";
import { EmotionalStateEdit } from "./emotionalState/EmotionalStateEdit";
import { EmotionalStateShow } from "./emotionalState/EmotionalStateShow";
import { DoctorList } from "./doctor/DoctorList";
import { DoctorCreate } from "./doctor/DoctorCreate";
import { DoctorEdit } from "./doctor/DoctorEdit";
import { DoctorShow } from "./doctor/DoctorShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Moode"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Condition"
          list={ConditionList}
          edit={ConditionEdit}
          create={ConditionCreate}
          show={ConditionShow}
        />
        <Resource
          name="EmotionalState"
          list={EmotionalStateList}
          edit={EmotionalStateEdit}
          create={EmotionalStateCreate}
          show={EmotionalStateShow}
        />
        <Resource
          name="Doctor"
          list={DoctorList}
          edit={DoctorEdit}
          create={DoctorCreate}
          show={DoctorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
