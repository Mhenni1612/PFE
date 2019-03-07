import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'


import '../css/headerStyles.css'
import Search from './search';
import Account from './account';
import Cart from './cart';



const Header = () => (
    <div className={"header"} >
        <Segment inverted vertical style={{ padding: "1em 0px 0px 0px", height:"5em"}}>
            
                <Grid  columns={3} style={{margin:"0em 0em"}}>
                    <Grid.Row divided inverted stackable>
                        <Grid.Column width={4}>
                            
                        </Grid.Column>

                        <Grid.Column width={7} style ={{ padding :"0em"}}>
                            <Search/>
                        </Grid.Column>

                        <Grid.Column width={5} style={{padding: "0px 0px 0px 3em"}}>
                            <Account/>
                            <Cart/>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            
        </Segment>
    </div>
)
        

export default Header;