import React from 'react'
import { Link } from 'react-router'
import * as Service from '../services/api-service'

class Comics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      character: '',
      series: '',
      data: []
    }
  }
  characterChange(event)  {
      this.setState({character: event.target.value});
  }
  seriesChange(event)  {
      this.setState({series: event.target.value});
  }
  componentDidMount() {
    Service.findAllComics()
        .then(results => {
            this.setState({data: results.data.results });
        })
        .catch(error=> console.log(error));
  }
  render() {
    let filteredComics = this.state.data.filter((comic)=> {
      if (this.state.character !== '') {
          return comic.title.toLowerCase().indexOf(this.state.character.toLowerCase()) !== -1;
      } else if (this.state.series !== '') {
          return comic.series.name.toLowerCase().indexOf(this.state.series.toLowerCase()) !== -1;
      } else {
          return comic.title.toLowerCase().indexOf(this.state.character.toLowerCase()) !== -1;      
      }

    });
    return (
      <div className="container comicListView">
        <h3>Available Comics</h3>
          <div className="row">
            <p>Search makes life a lot easier</p>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input value={this.state.character} onChange={this.characterChange.bind(this)} type="text" className="form-control" placeholder="Search by Character"/>
              </div>
            </form>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input value={this.state.series} onChange={this.seriesChange.bind(this)} type="text" className="form-control" placeholder="Search by Series" />
              </div>
            </form>
          </div>
          <div className="row">
        {
          filteredComics.map(function(item, key) {
            return (
                <div className="col-sm-4" key={item.id}>
                  <a href={'/comics/'+ item.id} >
                 <img src={item.thumbnail.path + '.' + item.thumbnail.extension} className="img-responsive img-thumbnail" alt="Responsive image"/>
                 <h3>{item.title}</h3>
                 </a>
                </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default Comics;
