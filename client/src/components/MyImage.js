/* eslint-disable react/destructuring-assignment */
import React from 'react'
import Header from './Header'
import InfoPanel from './InfoPanel'

const MyImage = (props) => {
  const arrayBufferToBase64 = (buffer) => {
    let binary = ''
    const bytes = [].slice.call(new Uint8Array(buffer))
    // eslint-disable-next-line no-return-assign
    bytes.forEach((b) => binary += String.fromCharCode(b))
    return window.btoa(binary)
  }

  const pic = new Image()
  pic.src = `data:${props.picture.contentType};`
        + `base64,${arrayBufferToBase64(props.picture.data.data)}`
  // pic.onload = () => console.log('onload:', props.name, pic)

  return (
    <div style={{
      width: 'fit-content',
      textAlign: 'center',
      height: 'calc(100vh/3 - 1em/3)',
      margin: '0 1em 0 0',
    }}
    >
      <Header title={props.name} />
      <img src={pic.src} alt={props.name} style={{ borderRadius: '0 1em 0 0', height: 'calc(100vh/3 - 4em/3 - 1.7em)' }} />
      <InfoPanel {...props} />
    </div>
  )
}

export default MyImage
