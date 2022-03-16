import React from 'react'
// import { Map, GoogleApiWrapper } from "google-maps-react";

const Division1 = () => {

  // const mapStyles = {
  //   width: '100%',
  //   height: '100%'
  // };

  return (
    <div className='Division1'>
      <h2>Division 1 - 2023</h2>
      <p>Defending Champs: Davison</p>
      {/* Division 1 Map */}
      <h4>Projected</h4>
      <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1czZ7fTnfV02ybe3KRzWs_Xmyl88ufxq6&ehbc=2E312F" width="640" height="480"></iframe>
      <h4>Actual</h4>
      <p>TBD</p>
      <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1vHJblA0GAkNlEGGwCE96PsjzWzNaanw5&ehbc=2E312F" width="640" height="480"></iframe>
    </div>
  )
}

export default Division1
