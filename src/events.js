import React from "react";

import { List, Datagrid, TextField, DateField, EmailField, EditButton, DeleteButton, ReferenceField } from 'react-admin';
import { Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, SelectInput } from 'react-admin';

export const EventList = props => (
    <List {...props}>
        <Datagrid>
            //id, name, description, dt_registration, dt_begin, dt_end, user_id
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="dt_registration" />
            <DateField source="dt_begin" />
            <DateField source="dt_end" />
            <ReferenceField source="user_id" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <EditButton undoable={false} />
            <DeleteButton undoable={false} />
        </Datagrid>
    </List>
);