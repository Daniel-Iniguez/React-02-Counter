import React from 'react'
import CounterApp from '../../components/counter/Counter'
import { Box, Container, Grid, Typography } from '@mui/material'

const products = [
  {
    sku: 1234,
    title: "Product",
    img: "www.image.com",
    price: 23.56
  },
  {
    sku: 1235,
    title: "Product2",
    img: "www.image.com",
    price: 56.56
  },
  {
    sku: 1236,
    title: "Product3",
    img: "www.image.com",
    price: 3333.56
  },
  {
    sku: 1240,
    title: "Product4",
    img: "www.image.com",
    price: 789.56
  }
]


export const Products = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {products.map((/*Desestructuracion */{ title, img, price, sku }, index) =>
          <Grid key={sku} xs={12} md={2} lg={3}>
            <Typography variant='h3'>{title}</Typography>
            <Typography variant='h4'>{price}</Typography>
            <CounterApp />
          </Grid>)}
      </Grid>

    </Container>
  )
}
