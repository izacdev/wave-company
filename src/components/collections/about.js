import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Location from '@material-ui/icons/LocationCityRounded'
import Map from '@material-ui/icons/MapRounded';
import Typography from '@material-ui/core/Typography'

export class about extends Component {
    render() {
        return (
            <div>
                <AppBar>About Wave</AppBar>
                <br/>
                <Location/>
                <Map/>
                <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
            </div>
        )
    }
}

export default about
