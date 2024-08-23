import { useEffect, useMemo, useRef, useState } from 'react';
import fetchData from "../../api/photos-api";
import { Toaster } from 'react-hot-toast';


import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';


const App = () => {
  const [queryValue, setQueryValue] = useState('');
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  
  const [modalIsOpen, setIsOpen] = useState(false);
	const [modalImage, setModalImage] = useState('');
	const [altDescription, setAltDescription] = useState('');
  

  const ref = useRef();

useEffect(()=>{
  if (queryValue ==='') {
    return;
}

const handleSearch = async () => {
setIsLoading(true);
setIsError(false);

try {
const data = await fetchData(queryValue, page);
if (data.total === 0) return;
    setGallery((prev)=> {
      return [...prev,...data.results];
    });
    setTotalPages(data.total_pages);
}catch (error) {
    setIsError(true);
}finally {
  setIsLoading(false);
}}
handleSearch();
}, [page, queryValue]);


useEffect(() => {
  if (page === 1) return;

  ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
}, [page, gallery]);

const handleQuery = (newQuery) => {
  setQueryValue(newQuery);
  setGallery([]);
  setPage(1);
};
const handleLoadMore = () => {
  setPage(page + 1);
};

const isActive = useMemo(() => page === totalPages, [page, totalPages]);
  
const openModal = () => {
  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};

const updateModalStateData = (src, alt) => {
  setModalImage(src);
  setAltDescription(alt);
};


return (
  <div ref={ref}>
    <SearchBar onSubmit={handleQuery} />
    {gallery.length > 0 && (
        
      <ImageGallery
        gallery={gallery}
        openModal={openModal}
        updateModalStateData={updateModalStateData}
      />
    )}
    
    {gallery.length > 0 && !isLoading && !isError && (
      <LoadMoreBtn handleLoadMore={handleLoadMore} isActive={isActive} />
    )}
    <ImageModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      src={modalImage}
      alt={altDescription}
    />
    {isLoading && <Loader />}
    {isError && <ErrorMessage />}
    <Toaster position='top-right' reverseOrder={true} />
  </div>
);
};

export default App