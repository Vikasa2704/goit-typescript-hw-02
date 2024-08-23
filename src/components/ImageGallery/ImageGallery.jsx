import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ gallery, openModal, updateModalStateData }) => {
	return (
		<ul className={css.itemsContainer}>
			{gallery.map(({ id, alt_description, urls }) => (
				<li className={css.cardItem} key={id} onClick={openModal}>
					<ImageCard
						urls={urls}
						alt_description={alt_description}
						updateModalStateData={updateModalStateData}
					/>
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;