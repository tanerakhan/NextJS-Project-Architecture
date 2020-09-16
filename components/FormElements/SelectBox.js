import React from 'react'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))

export default function SelectBox({
    message,
    val,
    onhandleChange,
    items,
    helper,
}) {
    const classes = useStyles()
    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
                {message}
            </InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={val}
                onChange={onhandleChange}
            >
                {items &&
                    items.length > 0 &&
                    items.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
            </Select>
            {helper && <FormHelperText>{helper}</FormHelperText>}
        </FormControl>
    )
}
