import css from './ImageCard.module.css';
import { PhotoUrls } from '../App/App.types';

type Props ={
    urls: PhotoUrls;
    alt_description: string;
    updateModalStateData: (url: string, alt_description: string) => void;}

const ImageCard: React.FC<Props> = ({ alt_description, urls, updateModalStateData }) => {
    return (
        <div>
            <img
                className={css.ImageCard}
                src={urls.small}
                alt={alt_description}
                onClick={() => updateModalStateData(urls.regular, alt_description)}
            />
            <p className={css.cardDescription}>{alt_description}</p>
        </div>
    );
};

export default ImageCard;
