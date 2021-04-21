import React from 'react'
import CapsuleLeft from '../../components/Capsule Left/CapsuleLeft'

const Mission = () => {
  const description = `Retechgen aims to deliver innovative development &amp; support solutions with speed and agility. Our
    technology independence, combined with a broad ecosystem of partners and leading technology
    talent enables us to deliver maximum value to our customers across their enterprise technology
    investments.`
  return (<CapsuleLeft title="Mission" description={description}/>)
}

export default Mission
