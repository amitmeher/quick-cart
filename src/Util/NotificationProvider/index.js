import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';
import EventEmitter from 'event-emitter';

const emitter = new EventEmitter();

const Snackbar = ({ children }) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const action = key => (
        <>
            <Button onClick={() => { alert(`I belong to snackbar with key ${key}`); }}>
                'Alert'
            </Button>
            <Button onClick={() => { closeSnackbar(key) }}>
                'Dismiss'
            </Button>
        </>
    );

    emitter.on('notify', (message, variant) => {
        enqueueSnackbar(message, {
            variant,
            // action
        });
    });

    return <>{children}</>
}

export const Notify = (message, variant) => {
    emitter.emit('notify', message, variant);
}

const NotificationProvider = ({ children }) =>
    <SnackbarProvider
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        preventDuplicate={true}
        autoHideDuration={1500}>
        <Snackbar>{children}</Snackbar>
    </SnackbarProvider>

export default NotificationProvider;

