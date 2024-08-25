import ImageCard from '../ImageCard/ImageCard';
import { Photo } from '../App/App.types';
import css from './ImageGallery.module.css';


type Props = {
	gallery: Photo[];
	openModal: () => void;
	updateModalStateData: (url: string, alt_description: string) => void;}

const ImageGallery: React.FC<Props> = ({ gallery, openModal, updateModalStateData }) => {
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