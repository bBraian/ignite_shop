import { styled } from "..";

export const ProductContainer = styled('main', {
    variants: {
        gridTemplateColumns: {
          full: {gridTemplateColumns:'1fr 1fr'},
          hd: {gridTemplateColumns:'1fr'},
        },
      },
    maxWidth: 1180,
    margin: '0 auto',
    height: '88vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 656,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }
})

export const ProductBox = styled('div', {
    display: 'flex',
    gap: '4rem',
    maxWidth: 1180
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300'
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green300'
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300',
    },

    button: {
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.5rem',
        cursor: 'pointer',
        fontSize: '$md',
        transition: 'all 0.15s',

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        },

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        }
    },

})