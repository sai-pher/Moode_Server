import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EmotionalStateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Emotional States"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
