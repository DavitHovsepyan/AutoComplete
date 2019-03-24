import React from 'react';

const Article = ({article}) => (
    <li className="cards__item" key={article.title}>
        <div className="card">
        <div className="card__image" style={{ backgroundImage: `url(${article.urlToImage})`}} />
            <div className="card__title">{article.title}</div>
            <div className="card__content">
            <div className="card__text">{article.content}</div>
            </div>
        </div>
    </li>
);

export default Article;
