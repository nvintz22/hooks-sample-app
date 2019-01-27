import styled from '@emotion/styled'
import Arrow from '../../assets/images/arrow.png';

export const Photos = styled('div')({
    opacity: .88,
    width: '100%',
    '> ul': {
      listStyleType: 'none',
      margin: '0px auto',
      padding: 10,
      display: 'block',
      maxWidth: 780,
      textAlign: 'center'
    },
    '> ul li img': {
      width: '30%',
      float: 'left',
      display: 'block',
      margin: 3,
      cursor: 'pointer'
    }
  })

  export const Overlay = styled('div')(({ isActive }) => ({
    background: 'rgba(0,0,0, .8)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    display: isActive ? 'block': 'none',
    textAlign: 'center',
    '> div': {
      margin: '10% auto 0',
      position: 'relative',
    },
    '> div img': {
      width: 550,
      borderRadius: 5
    }
  }))

  export const ArrowStyle = styled('img')(({ dir = 'left'}) => ({
    width: '60px !important',
    top: '48%',
    left: dir === 'right' ? '65%': '31%',
    position: 'absolute',
    transform: dir === 'left' ? 'rotate(180deg)' : '',
    cursor: 'pointer'
  }))
