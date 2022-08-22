import { Box, Img, Text } from "@chakra-ui/react";

function Card({ id, title, image, price }) {
  return (
    <Box key={id}>
      <Img boxSize="10rem" src={image} />
      <Text> {title} </Text>
      <Text> {price} </Text>
    </Box>
  );
}
export default Card;
// id: 22
// brand: "Wish Karo"
// title: "Printed Straight Kurti"
// image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11985624/2020/6/25/2f2e3507-09e0-4330-a9c0-818583f0cdac1593065483501WishKaroGirlsMaroonSolidFitandFlareDress1.jpg"
// category: "kids"
// price: 399
