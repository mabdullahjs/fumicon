import React from "react";

function Gurantee() {
    return (
        <div id="main-div"  className="d-flex p-5">
            <div id="first" style={{ width:'100%' ,  backgroundColor:'rgb(12, 63, 23)' , color:'white' , textAlign:'center' , paddingTop:'4%' , paddingBottom:'4%' , paddingLeft:'2%', paddingRight:'2%'}}>
                <h3 style={{ fontSize: "100%" }}>THE FUMICON GUARANTEE</h3>
                <br />
                <h1 style={{ fontSize: "200%" }}>
                    WE’RE NOT HAPPY, UNTIL YOU’RE HAPPY.
                </h1>
                <br />
                <p>With off-schedule return visits and a 30-day money back guarantee,partnering with Orkin means pest free peace of mind. </p>
            </div>
            <div id="second" style={{backgroundColor:'#efeff0' , paddingLeft:'5%' ,width:'100%',  paddingTop:'3%'}}>
                <h1 style={{ fontSize: "200%", color: "rgb(12, 63, 23)" }}>10K+</h1>
                <h1 style={{ fontSize: "100%" }}>Industrial</h1>
                <br />
                <h1 style={{ fontSize: "200%", color: "rgb(12, 63, 23)" }}>50K+</h1>
                <h1 style={{ fontSize: "100%" }}>Commercial</h1>
                <br />
                <h1 style={{ fontSize: "200%", color: "rgb(12, 63, 23)" }}>1M </h1>
                <h1 style={{ fontSize: "100%" }}>Domestic</h1>
                <br />
            </div>
        </div>
    );
}

export default Gurantee;
