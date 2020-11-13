import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import FaceBook from '@material-ui/icons/Facebook'
import WhatsApp from '@material-ui/icons/WhatsApp'
import Instagram from '@material-ui/icons/Instagram'
import Youtube from '@material-ui/icons/YouTube'
import Call from '@material-ui/icons/Call'

export class contact extends Component {
    render() {
        return (
            <div className="hundles">
                <AppBar>Our Wave Hundles</AppBar>
                <br/>
                <div>
                <FaceBook style={facebookStyle}>
                </FaceBook>
                <br/>
                <WhatsApp style={whatsappStyle}/>
                <br/>
                <Instagram style={instaStyle}/>
                <br/>
                <Youtube style={youtubeStyle}/>
                <br/>
                <Call style={callStyle}/>
                </div>
            </div>
        )
    }
}
const facebookStyle = {
    backgroundColor: "#3f51b5",
    borderRadius: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px"
}
const whatsappStyle = {
    backgroundColor: "green",
    borderRadius: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px"
}
const instaStyle = {
    backgroundColor: "rgb(109, 23, 23)",
    borderRadius: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px"
}
const youtubeStyle = {
    backgroundColor: "red",
    borderRadius: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px"
}
const callStyle = {
    backgroundColor: "#ccc",
    borderRadius: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px"
}

export default contact
