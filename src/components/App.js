import React from 'react';
import { Route,Switch} from 'react-router-dom';


import Dashboard from './Dashboard';
import CustomerList from './CustomerList';
import OrdersList from './OrdersList';
import UserProfile from './UserProfile';
import ProductList from './ProductList';

class App extends React.Component{

    render(){
        return (
           

           
            
                        <Switch>
                            <Route exact path='/' component={Dashboard}/>
                            <Route  path='/dashboard' component={Dashboard}/>
                            <Route  path='/customers' component={CustomerList}/>
                            <Route  path='/orders' component={OrdersList}/>
                            <Route  path='/user-profile' component={UserProfile}/>
                            <Route  path='/products' component={ProductList}/>
                            
                        </Switch> 
                        
          

        )
    }
}

export default App;