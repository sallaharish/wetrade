import React from 'react';
import './ArticleSection.css';

interface Article {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
}

interface SectionProps {
  heading: string;
  articles: Article[];
}

const ArticleSection: React.FC<SectionProps> = ({ heading, articles }) => {
  return (
    <section className="article-section">
      <div className="section-header">
        <h2>{heading}</h2>
        {/* <a href="#" className="view-all">View All →</a> */}
      </div>
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.imageUrl} alt={article.title} className="article-img" />
            <div className="article-meta">
              <span className="category">{article.category}</span>
              <h3>{article.title}</h3>
              <p className="author-date">
                By <strong>{article.author}</strong> • {article.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
