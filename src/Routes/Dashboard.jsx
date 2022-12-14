import { Box, Text, Image, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Components/Pagination";
import { GetData } from "./api";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(null);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    GetData({ page })
      .then((res) => {
        setData(res.data.data);
        setTotal(res.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return (
    <Box>
      {data.map((el) => (
        <Box key={el.id} border="1px" py="5px">
          <Text>{el.brand}</Text>
          <Text>{el.title}</Text>
          <Image m="auto" boxSize="150px" src={el.image} alt="Dan Abramov" />
          <Text> {el.category}</Text>
          <Text>{el.price}</Text>
        </Box>
      ))}
      <Button>{page}</Button>
      <br />

      <Pagination total={total} current={page} setPage={setPage} />
    </Box>
  );
}
