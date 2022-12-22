import React from 'react'
import { Button } from 'react-bootstrap'
export const AppDownload = () => {
  return (
    <div class="container-fluid navigation">
    <div className="row" style={{margin:"0px"}}>
      <div className="col-sm-auto col-md-auto" style={{margin:"100px"}}>
        <h1 style={{textAlign:"center"}}> Download the app now!</h1>
        <h5 tyle={{textAlign:"center"}}>Create team, join contest and win exiciting prizes</h5>
      <div><Button> <img src="images/Google-Play-Store.jpg" alt="" width={"150px"} height={"80px"}/></Button> &nbsp;
       <Button> <img src="images/app-store.jpg" width={"150px"} height={"80px"}/> </Button></div> 
    </div>
    <div className="col-sm-auto col-md-auto" style={{margin:"100px"}}>
    <img src="images/gamezy-banner.png" alt="" />
    </div>
    </div>
    </div>
  )
}
