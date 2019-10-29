import React from "react";

import { List, Datagrid, TextField, DateField, EmailField, EditButton, DeleteButton, SelectField } from 'react-admin';
import { Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, SelectInput } from 'react-admin';

export const VoucherList = props => (
    <List {...props}>
        <Datagrid>
            //id, dt_registration, dt_expiration, user_id, events_id, user_registrant_id
            <TextField source="id" />
            <DateField source="dt_registration" />
            <DateField source="dt_expiration" />
            <TextField source="user_id" />
            <TextField source="events_id" />
            <TextField source="user_registrant_id" />
            <EditButton undoable={false} />
            <DeleteButton undoable={false} />
        </Datagrid>
    </List>
);