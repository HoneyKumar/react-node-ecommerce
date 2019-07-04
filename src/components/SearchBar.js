import React from 'react';

class SearchBar extends React.Component{
    state={searchBar : ''};
    handleChange=(e)=>{
            this.setState({searchBar : e.target.value})
    }
    render(){
        return(
            <form>
              <div className="input-group no-border">
                <input type="text" value={this.state.searchBar} className="form-control" placeholder="Search..." onChange={this.handleChange }  name="serachBar"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <i className="now-ui-icons ui-1_zoom-bold"></i>
                  </div>
                </div>
              </div>
            </form>
        )
    }
}

export default SearchBar;
