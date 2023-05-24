import * as React from "react";
import { memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import {
  Currency1,
  Currency2,
  Internal_price_info,
  Order_book_info,
} from "../../types";

interface props {
  title: string;
  currency1: Currency1;
  currency2: Currency2;
  priceInfo: Internal_price_info;
  orderBook: Order_book_info;
}
const Cart = ({ title, currency1, currency2, priceInfo, orderBook }: props) => {
  return (
    <Card sx={{ width: 250, height: 300, margin: "10px" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        display="flex"
        justifyContent="space-around"
      >
        {title}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        display="flex"
        justifyContent="space-around"
      >
        <Box sx={{ fontSize: "14px" }}>
          <CardMedia
            sx={{ height: 30, width: 30 }}
            image={currency1.image}
            title={currency1.title}
          />

          <Box sx={{ marginTop: "4px" }}>Code : {currency1.code}</Box>
        </Box>
        <Box sx={{ fontSize: "14px" }}>
          <CardMedia
            sx={{ height: 30, width: 30 }}
            image={currency2.image}
            title={currency2.title}
          />
          <Box sx={{ marginTop: "4px" }}>Code : {currency2.code}</Box>
        </Box>
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          display="flex"
          flexDirection="column"
        >
          <span> Price : {priceInfo.price}</span>
          <span> Min : {priceInfo.min}</span>
          <span> Max : {priceInfo.max}</span>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display="flex"
          flexDirection="column"
        >
          <span> Amount : {orderBook.amount}</span>
          <span> Min : {orderBook.min}</span>
          <span> Max : {orderBook.max}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default memo(Cart);
