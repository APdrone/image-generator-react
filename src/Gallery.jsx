import React from 'react';
import { useSearch } from './reactQueryCustomHooks';
import { useGlobalContext } from './context';

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  console.log('gallery--', searchTerm);
  const { data, isLoading, isError } = useSearch({ query: searchTerm, page: 1, searchTerm });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }
  const results = data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return <img src={url} key={item.id} alt={item.alt_description} className="img" />;
      })}
    </section>
  );
};

export default Gallery;
