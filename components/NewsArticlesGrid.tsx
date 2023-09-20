import { NewsArticle } from "@/models/NewsArticles";
import { Col, Row } from "react-bootstrap";
import NewsArticleCard from "./NewsArticleCard";

interface NewsArticlesGridProps {
    articles: NewsArticle[]
}
const NewsArticlesGrid = ({articles}: NewsArticlesGridProps) => {
    return ( 
        <Row xs={1} sm={2} xl={3} className="g-4">
            {articles.map(article => (
                // Not sure if a column is needed
                <Col key={article.url}>
                    <NewsArticleCard article={article} />
                </Col>
            ))}
        </Row>
     );
}
 
export default NewsArticlesGrid;