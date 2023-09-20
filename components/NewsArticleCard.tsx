import { NewsArticle } from "@/models/NewsArticles";
import { validateImageUrl } from "@/utils/Image";
import Image from "next/image";
import { Card } from "react-bootstrap";
import placeholderImage from '@/assets/images/newsarticle_placeholder.jpg'
import styles from '@/styles/NewsArticleCard.module.css'

interface NewsArticleCardProps {
    article: NewsArticle,
}

const NewsArticleCard = ({ article }: NewsArticleCardProps) => {
    const validImageUrl = validateImageUrl(article.urlToImage)
    return (
        <a href={article.url}>
            <Card className="h-100">
                {/* <Card.Img
                    variant="top"
                    src={validImageUrl ?? placeholderImage.src}
                    alt={'News article image'}
                    width={500}
                    height={200}
                    as={Image}
                    className={`${styles.image}`}
                /> */}
                <Image
                    src={validImageUrl ?? placeholderImage}
                    alt={'News article image'}
                    width={500}
                    height={200}
                    className={`card-img-top ${styles.image}`}
                />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
}

export default NewsArticleCard;