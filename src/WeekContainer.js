
import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import { Card, Button, TextField, makeStyles, CardContent, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    form: {
        margin: "10px",
    },
    root: {
        Width: '50%',
        margin: "0px 500px",
    },
    button: {
        background: "#7579E7",
        margin: "10px"
    },
    title: {
        margin: "20px",
        fontWeight: "bold"
    }
});


const WeekContainer = () => {
    const [input, setInput] = useState('');

    const [data, setData] = useState(null);

    const API_KEY = 'fe4ba52326b56a7369ea73badde4f9bb';

    function getLocationWeather(location) {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        getLocationWeather(input)
        console.log(data)
        setInput('')
    }

    const classes = useStyles();
    return (
        <div className="weatherapp">
            <Typography variant="h2" component="h2" className={classes.title} gutterBottom>
                Weathery
            </Typography>
            <form onSubmit={handleSubmit} className="form">
                <TextField className={classes.form} size="small" id="outlined-basic" label="Enter a City Name" variant="outlined" onChange={(e) => { setInput(e.target.value) }} value={input} />
                <Button className={classes.button} size="medium" variant="contained" color="primary" type='submit' >Submit</Button>
            </form>
            { data === null ? <Card className={classes.root}><CardContent>"Enter a value"</CardContent></Card> : <WeatherCard data={data} />}
        </div >
    )
}

export default WeekContainer
