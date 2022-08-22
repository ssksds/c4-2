import { Button } from "@chakra-ui/react";

function Pagination({ total, current, setPage }) {
  const page = new Array(total).fill(0).map((el, i) => {
    return (
      <Button disabled={current === i + 1} onClick={() => setPage(i + 1)}>
        {i + 1}
      </Button>
    );
  });
  return page;
}
export default Pagination;
