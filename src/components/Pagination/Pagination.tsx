import { Button } from "@chakra-ui/react";

interface Props {
  setPageNumber: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination = ({ setPageNumber, currentPage }: Props) => {
  const nextPage = () => {
    setPageNumber(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setPageNumber(currentPage - 1);
    }
  };

  return (
    <>
      <Button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </Button>
      <Button onClick={nextPage}>Next</Button>
    </>
  );
};

export default Pagination;
