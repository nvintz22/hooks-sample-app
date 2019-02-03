import React, { useState, useEffect, Fragment } from 'react'
import styled from '@emotion/styled'
import { GalleryAssets } from '../../constants/gallery';
import { Photos, Overlay, ArrowStyle } from '../../resources/emotions/gallery';
import Arrow from '../../assets/images/arrow.png';


const Gallery = () => {
  const [ isActive, setIsActive ] = useState(false)
  const [ activeImage, setActiveImage ] = useState(null)
  const [ activeIndex, setActiveIndex] = useState(-1)
  const [images, setImages] = useState([])
  

  useEffect(() => {
    setImages(GalleryAssets)
    document.addEventListener('keydown', keyListener)
    return () => {
      document.removeEventListener('keydown', keyListener)
    }
  }, [images, activeIndex])
                
  const keyListener = e => {
    switch(e.key) {
      case "Escape": return setIsActive(false)
      case "ArrowRight": return moveNext(e)
      case "ArrowLeft": return moveNext(e)
      default: return;
    }
  }
  const setImage = (image, index) => {
    setActiveImage(image)
    setIsActive(true)
    setActiveIndex(index)
  }

  const moveNext = e => {
    e.stopPropagation();
    const nextIndex = (activeIndex + 1) % images.length
    setActiveIndex(nextIndex)
    setActiveImage(images[nextIndex].url)
  }

  const moveBack = e => {
    e.stopPropagation();
    const prevIndex = (activeIndex - 1 + images.length) % images.length
    setActiveIndex(prevIndex)
    setActiveImage(images[prevIndex].url)
  }

  const toggleActive = () => {
    setIsActive(!isActive)
  }


  return (
    <Fragment>
        <Photos>
        <ul id="photo-gallery">
          {
            images.map((image, index) => (
              <li onClick={() => setImage(image.url, index)}>
                <img src={image.url} title={image.name}/>
              </li>
            ))
          }
        </ul>
      </Photos>
      <Overlay isActive={isActive} onClick={toggleActive}>
        <div>
          <img src={activeImage} onClick={moveNext}/>
          <ArrowStyle src={Arrow} onClick={moveBack}/>
          <ArrowStyle src={Arrow} dir="right" onClick={moveNext}/>
        </div>
      </Overlay>
    </Fragment>
  )
}

// class Gallery extends Component {
//     constructor() {
//         super()
//         this.state = {
//           isActive: false,
//           activeImage: null,
//           activeIndex: -1,
//           images: []
//         }
//     }

//     componentDidMount () {
//       this.setState({
//         images: GalleryAssets
//       })

//       document.addEventListener('keydown', this.keyListener)
//     }

//     componentWillUnmount () {
//       window.removeEventListener('keydown', this.keyListener)
//     }

//     keyListener = e => {
//       switch(e.key) {
//         case "Escape": return this.setState({ isActive: false })
//         case "ArrowRight": return this.moveNext(e)
//         case "ArrowLeft": return this.moveNext(e)
//         default: return;
//       }
//     }

//     componentWillUpdate(nextProps) {}

//     setActiveImage = (image, index) => {
//       this.setState({
//         activeImage: image,
//         isActive: true,
//         activeIndex: index
//       })
//     }

//     moveNext = e => {
//       e.stopPropagation();
//       const { activeIndex, images } = this.state
//       const nextIndex = (activeIndex + 1) % images.length
//       this.setState({
//         activeIndex: nextIndex,
//         activeImage: images[nextIndex].url
//       })
//     }

//     moveBack = e => {
//       e.stopPropagation();
//       const { activeIndex, images } = this.state;
//       const prevIndex = (activeIndex - 1 + images.length) % images.length
//       this.setState({
//         activeIndex: prevIndex,
//         activeImage: images[prevIndex].url
//       }) 
//     }

//     toggleActive = () => {
//       this.setState({
//         isActive: !this.state.isActive
//       })
//     }

//     render () {
//         const { images } = this.state;
//         return (
//           <Fragment>
//               <Photos>
//               <ul id="photo-gallery">
//                 {
//                   images.map((image, index) => (
//                     <li onClick={() => this.setActiveImage(image.url, index)}>
//                       <img src={image.url} title={image.name}/>
//                     </li>
//                   ))
//                 }
//               </ul>
//             </Photos>
//             <Overlay isActive={this.state.isActive} onClick={this.toggleActive}>
//               <div>
//                 <img src={this.state.activeImage} onClick={this.moveNext}/>
//                 <ArrowStyle src={Arrow} onClick={this.moveBack}/>
//                 <ArrowStyle src={Arrow} dir="right" onClick={this.moveNext}/>
//               </div>
//             </Overlay>
//           </Fragment>
//         )
//     }
// }

export default Gallery