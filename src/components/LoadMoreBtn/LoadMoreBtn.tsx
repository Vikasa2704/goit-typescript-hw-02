import css from './LoadMoreBtn.module.css'

type Props ={
	handleLoadMore: () => void,
    isActive: boolean,  
}

const LoadMoreBtn: React.FC<Props> = ({ handleLoadMore, isActive }) => {
	return (
		<div className={css.load__wrapper}>
		<button className={css.btn} onClick={handleLoadMore} type='button' disabled={isActive}>
			Load more
		</button>
		</div>
	);
};

export default LoadMoreBtn;