import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))

export default function ContainedButtons({
    type,
    text,
    click,
    autoFocus,
    ...props
}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Button
                {...props}
                autoFocus={autoFocus}
                variant="contained"
                color={type}
                onClick={click}
            >
                {text}
            </Button>
        </div>
    )
}

Button.defaultProps = {
    color: 'primary',
    size: 'medium',
    onClick: undefined,
}
