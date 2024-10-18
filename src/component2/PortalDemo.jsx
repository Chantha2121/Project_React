import React from 'react';
import ReactDom from 'react-dom'
function PortalDemo() {
  return ReactDom.createPortal (
    <div style={{textAlign:'center'}}>
      <button>Click</button>
    </div>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo
