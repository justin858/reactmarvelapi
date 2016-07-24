import React from 'react'
import * as Service from '../services/api-service'

class Comic extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    let path = this.props.location.pathname;
    Service.findOne(path)
        .then(results => {
            this.setState({data: results.data.results });
        })
        .catch(error=> console.log(error));
  }
  render() {
    return (
      <div className="container singleComicView">
        <h2>Comic Details</h2>
          {
            this.state.data.map(function(item, key) {
              let urls = item.urls.map(function(url, key) {
                return (
                  <div key={key}>
                  <p>{url.type}</p>
                  <a href={url.url} target="_blank">{url.url}</a>
                  </div>
                )
              })
              return (
                  <div className="row">
                  <div className="col-sm-4" key={item.id}>
                  <a href={'/comics/'+ item.id} >
                   <img src={item.thumbnail.path + '.' + item.thumbnail.extension} className="img-responsive img-thumbnail" alt="Responsive image"/>
                  </a>
                  </div>
                  <div className="col-sm-8">
                    <h3>{item.title}</h3>
                  {urls}
                  </div>
                  </div>
              )
            })
          }
      </div>
    )
  }
}

export default Comic;
