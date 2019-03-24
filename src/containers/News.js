import React, { Component } from 'react';
import Article from '../components/Article';
import { baseURL } from '../constants';

class News extends Component {

  state = {
    articles: []
  }

  componentDidMount () {
    const searchBy = new URL(document.location.href).searchParams.get('searchBy')
    if(searchBy) {
      this.getNews(searchBy)
    }
  }

  getNews = (searchText) => {
    fetch(`${baseURL}/news?searchBy=${searchText}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => this.setState({
      articles: response.data.articles
    }))
    .catch(error => console.error('Error:', error));
  }
  
  renderArticles = () => {
    const { articles } = this.state;

    return articles.map(article => <Article article={article}/> )
  }

  render() {
    return (
        <ul className="cards">
            {this.renderArticles()}
        </ul>
    );
  }
}

export default News;
