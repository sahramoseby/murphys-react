import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';

class TopMenu extends React.Component {

  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
          <Menu.Item>
            <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"/>
          </Menu.Item>
            <Menu.Item position='right' as='a'>Home</Menu.Item>
            <Dropdown item text="About Us">
              <Dropdown.Menu>
                <Dropdown.Item>Getting here/Parking</Dropdown.Item>
                <Dropdown.Item>Catering</Dropdown.Item>
                <Dropdown.Item>Upcoming Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as='a'>St. Patrick's Day</Menu.Item>
            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>Getting here/Parking</Dropdown.Item>
                <Dropdown.Item>Catering</Dropdown.Item>
                <Dropdown.Item>Upcoming Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as='a'>Bar</Menu.Item>
            <Menu.Item><Icon name='search'/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class Middle extends React.Component {
  render() {
    const gridStyle= {height: '500px'};

    return(
        <div className='murphys-background'>
          <Grid container vericalAlign='middle' style={gridStyle}>
            <Grid.Row columns='two'>
              <Grid.Column>
                <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png'/>
              </Grid.Column>
              <Grid.Column>
                <p style = {{textAlign: 'center'}}>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

    )
  }
}
class Murphys extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <Middle/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
