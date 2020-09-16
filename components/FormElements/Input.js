import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
    root: {
        borderRadius: 3,
        border: 0,
        backgroundColor: '#fff',
    },
})
function SimpleInput({ label, ...props }) {
    const classes = useStyles()
    return (
        <React.Fragment>
            <TextField
                {...props}
                label={label}
                style={{ width: '100%' }}
                variant="outlined"
                classes={{
                    root: classes.root,
                }}
            />
        </React.Fragment>
    )
}
export default SimpleInput
