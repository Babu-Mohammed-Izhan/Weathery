import React from 'react'
import { Card, CardContent, makeStyles } from '@material-ui/core'


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
                <h1>{data.name}</h1>
                <h3>{data.main.temp}&deg;</h3>
                <h3>{data.weather[0].main}</h3>
                <h3><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].main} /></h3>
                <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>Sunrise: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                <p>WindSpeed: {data.wind.speed} meters/s</p>
            </CardContent>
        </Card>
    )
}

export default WeatherCard;