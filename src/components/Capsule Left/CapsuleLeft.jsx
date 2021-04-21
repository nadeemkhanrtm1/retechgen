import React from 'react'

const CapsuleLeft = ({title, description}) => {
  return (
    <div className="retechgen-capsule-left">
      <div className="capsule-left-row">
        {description}
      </div>
      <div className="capsule-left-title">
        {title}
      </div>
    </div>
  )
}

export default CapsuleLeft
