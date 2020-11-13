import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'

export class services extends Component {
    render() {
        return (
            <div className="services">
                <AppBar style={AppStyle}>Wave Software Services</AppBar>
                <br/><br/>
                <div className="temps">
                <a href="/">
                <div style={cardStyle}>
                    <p style={labelStyle}> Website Development</p>
                </div>
                </a>
                <div style={cardStyle}>
                    <p style={labelStyle}> Web-App Development</p>
                </div>
                <div style={cardStyle}>
                    <p style={labelStyle}> Software Installation</p>
                </div>
                <div style={cardStyle}>
                    <p style={labelStyle} className="ph"> Phone Tracking</p>
                </div>
                <div style={cardStyle}>
                    <p style={labelStyle}> Phone Software Update</p>
                </div>
                <div style={cardStyle}>
                    <p style={labelStyle}> Developing</p>
                </div>
                </div>
                <br/>
                <div className="infoStyle">
                    <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                </Typography>
                <br/>
            </div>
            </div>
        )
    }
}
const AppStyle = {
    paddingTop: "12px",
    paddingBottom: "12px",
    marginBottom: "10px"
}
const  cardStyle = {
    marginTop: "20px",
    marginLeft: "20px",
    height: "200px",
    width: "150px",
    padding: "0",
    textAlign: "center",
    backgroundColor: "orange",
    WebkitFilter: "drop-shadow(0px 0px 5px #666)",
    filter: "drop-shadow(0px 0px 5px #666)",
};
const labelStyle = {
    textStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    padding: "13px",
    margin: "0",
}

export default services
