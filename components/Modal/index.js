import React from 'react'
import Button from '../FormElements/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useTheme } from '@material-ui/core/styles'

export default function UseDialog({
    openModal,
    closeModal,
    title,
    description,
}) {
    const theme = useTheme()
    return (
        <Dialog
            open={openModal}
            onClose={closeModal}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{description}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    click={() => (closeModal = true)}
                    type="primary"
                    text="Kapat"
                />
                <Button
                    click={() => (closeModal = true)}
                    type="primary"
                    autoFocus
                    text="Tamam"
                />
            </DialogActions>
        </Dialog>
    )
}
