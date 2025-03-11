// react
import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { usePokemonStore } from '../../model/store/pokemonStore';

interface PokemonPaginateProps {}

export const PokemonPaginate: FC<PokemonPaginateProps> = ({}) => {
  const { currentPage, totalPages, setPage } = usePokemonStore();

  return (
    <ReactPaginate
      previousLabel={'←'}
      nextLabel={'→'}
      breakLabel={'...'}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      containerClassName={'flex space-x-2 '}
      activeClassName={'bg-blue-500 text-white cursor-pointer'}
      pageClassName={'px-3 py-1 border rounded'}
      previousClassName={'px-3 py-1 border rounded cursor-pointer'}
      nextClassName={'px-3 py-1 border rounded cursor-pointer'}
      breakClassName={'px-3 py-1 border rounded'}
      pageLinkClassName={'cursor-pointer'}
      disabledClassName={'text-gray-200'}
      onPageChange={(data) => setPage(data.selected + 1)}
      forcePage={currentPage === 1 ? 0 : currentPage - 1}
    />
  );
};
