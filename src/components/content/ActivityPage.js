import { Edit } from '@mui/icons-material'
import { Box, Card, CardActions, CardContent, CardMedia, CircularProgress, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { CircularProgressWithLabel } from './utility'


export const ActivityPage = () => {
  return (
    <>
        <Grid container columnSpacing={1} rowSpacing={3}>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="60"
                        image="https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Sport Image"
                    />
                    <CardContent>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Saut à la corde</Typography>
                        <Typography variant='body2'>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton>
                            <Edit />
                        </IconButton>
                        <CircularProgressWithLabel value={67} />
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="60"
                        image="https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Sport Image"
                    />
                    <CardContent>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Saut à la corde</Typography>
                        <Typography variant='body2'>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton>
                            <Edit />
                        </IconButton>
                        <CircularProgressWithLabel value={80} />
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="60"
                        image="https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Sport Image"
                    />
                    <CardContent>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Saut à la corde</Typography>
                        <Typography variant='body2'>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton>
                            <Edit />
                        </IconButton>
                        <CircularProgressWithLabel value={22} color="error" />
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="60"
                        image="https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Sport Image"
                    />
                    <CardContent>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Saut à la corde</Typography>
                        <Typography variant='body2'>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton>
                            <Edit />
                        </IconButton>
                        <CircularProgressWithLabel value={100} color="success" />
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </>
  )
}
