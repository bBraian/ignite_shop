import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    marginLeft: 'auto',
    minHeight: 656,
})

export const Overflow = styled('div', {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    zIndex: 1,
    justifyContent: 'center',
    background: 'linear-gradient(90deg, rgba(18,18,20,1) 0%, rgba(45,45,45,0) 5%, rgba(45,45,45,0) 95%, rgba(18,18,20,1) 100%)',
    alignItems: 'center'
})

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden',

    img: {
        objectFit: 'cover'
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        strong: {
            fontSize: '$lg',
            color: '$gray100'
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300'
        }
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
})