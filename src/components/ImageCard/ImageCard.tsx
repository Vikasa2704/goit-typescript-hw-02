import css from './ImageCard.module.css';

const ImageCard = ({ alt_description, urls, updateModalStateData }) => {
    return (
        <div className={css.cardWrapper}>
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
