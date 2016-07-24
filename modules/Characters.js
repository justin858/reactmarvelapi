import React from 'react'
import { Link } from 'react-router'
import * as Service from '../services/api-service'

class Characters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    Service.findAll()
        .then(results => {
            this.setState({data: results.data.results });
        })
        .catch(error=> console.log(error));
  }
  render() {

    return (
      <div className="container characterListView">
        <h3>Character List</h3>
        <div  className="row">
          {
            this.state.data.map(function(item, key) {
              return (
                  <div className="col-sm-4" key={item.id}>
                  <a href={'/characters/'+ item.id} >
                   <img src={item.thumbnail.path + '.' + item.thumbnail.extension} className="img-responsive img-thumbnail" alt="Responsive image"/>
                   <h3>{item.name}</h3>
                  </a>
                  </div>

              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Characters;
