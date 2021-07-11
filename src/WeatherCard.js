import React from 'react'
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        Width: '50%',
        margin: "100px",
        background: "#9AB3F5",
        color: "white"
    }
});

const WeatherCard = ({ data }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h1" component="h2" gutterBottom>
                    {data.name}
                </Typography>
                <Typography variant="h2" gutterBottom>
                    {data.main.temp}&deg;
                </Typography>
                <h3>{data.main.temp_max}&deg; / {data.main.temp_min}&deg;</h3>
                <h3>{data.weather[0].main}</h3>
                <h3><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].main} /></h3>
                <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>Sunrise: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                <p>WindSpeed: {data.wind.speed} m/s</p>
            </CardContent>
        </Card>
    )
}

export default WeatherCard;