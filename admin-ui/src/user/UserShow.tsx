import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Doctor" target="UserId" label="Doctors">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user id" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmotionalState"
          target="UserId"
          label="Emotional States"
        >
          <Datagrid rowClick="show">
            <TextField label="Anxiety" source="anxiety" />
            <TextField label="Coping" source="coping" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Feeling" source="feeling" />
            <TextField label="Harm" source="harm" />
            <TextField label="ID" source="id" />
            <TextField label="Medication" source="medication" />
            <TextField label="Productivity" source="productivity" />
            <TextField label="Sleep" source="sleep" />
            <TextField label="Stress" source="stress" />
            <TextField label="Suicide" source="suicide" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="UpTo" source="upTo" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
