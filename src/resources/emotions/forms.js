import styled from '@emotion/styled';

export const Group = styled('div')({
    position: 'relative',
    marginBottom: '3em'
})

export const Input = styled('input')({
    fontSize: 18,
    padding: '0.625em 0.625em 0.625em 0.3125em',
    display: 'block',
    width: '18.75em',
    border: 'none',
    borderBottom: '1px solid #757575',
    backgroundColor: '#282c34',
    color: '#00ff0c',
    '&:focus': {
        outline: 'none'
    },
    '&:focus ~ label, &:valid ~ label': {
        top: -20,
        left: -2,
        fontSize: 14,
        color: '#00ff0c'
    },
    '&:focus ~ .bar: before, &:focus ~.bar:after': {
        width: '50%'
    }
})

export const Label = styled('label')({
    color: '#999999',
    fontSize: 18,
    fontWeight: 'normal',
    position: 'absolute',
    pointerEvents: 'none',
    left: '.3125em',
    top: '.625em',
    transition: '0.2s ease all'
})

export const Bar = styled('div')({
    position: 'relative',
    display: 'block',
    '&:before, &:after': {
        content: '""',
        height: 2,
        width: 0,
        bottom: 1,
        position: 'absolute',
        background: '#00ff0c',
        transition: '0.2s ease all'
    },
    '&:before': {
        left: '50%'
    },
    '&:after': {
        right: '50%'
    }
})
