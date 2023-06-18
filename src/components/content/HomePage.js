import { Box, Card, CardActions, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgressWithLabel } from './utility'

export const HomePage = ({setPlanId}) => {
    const { id } = useParams();
    setPlanId(id);
  return (
    <>
        <Typography variant='h5'>Acceuil</Typography>
        <Stack spacing={2}>
            <Card
            sx={{
                display: {
                    md: 'flex',
                    xs: 'block'
                },
            }}
            >
                <CardMedia
                sx={{ flex: 1}}
                component="img"
                height='190'
                image='https://source.unsplash.com/random'
                alt="unsplash image"
                />
                <Box>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            React
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            React is a Javascript library for building user interfaces. React
                            can be used as a base in the development of single-page or mobile
                            applications
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Rating value={3} />
                        <CircularProgressWithLabel value={45} color='primary' />
                    </CardActions>
                </Box>
            </Card>

            <Card
            sx={{
                display: {
                    md: 'flex',
                    xs: 'block'
                },
            }}
            >
                <CardMedia
                sx={{ flex: 1}}
                component="img"
                height='190'
                image='https://source.unsplash.com/random'
                alt="unsplash image"
                />
                <Box>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            React
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            React is a Javascript library for building user interfaces. React
                            can be used as a base in the development of single-page or mobile
                            applications
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Rating value={3} />
                        <CircularProgressWithLabel value={75} color='error' />
                    </CardActions>
                </Box>
            </Card>
        </Stack>
    </>
  )
}
