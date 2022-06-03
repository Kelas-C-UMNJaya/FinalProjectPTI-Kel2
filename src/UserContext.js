import React, { useState, useEffect } from "react";
import axios from "axios";
export const userContext = React.createContext();

const userData = {
    name: "",
    jurusan: ""
};

export function UserProvider({ children }) {
    const [curr, setCurr] = useState(0);
    const [salam, setSalam] = useState("");
    const [news, setNews] = useState([]);
    const [cuaca, setCuaca] = useState({});

    const cuacaUrl = "http://api.openweathermap.org/data/2.5/weather?q=Serpong&units=metric&appid=c9f9daaff151b689d11eefc65b1c4c1f";

    const cuacaData = (e) => {
        axios.get(cuacaUrl).then((res) => {
            setCuaca(res.data);
            console.log(res.data);
        });
    };

    const url = 'https://newsapi.org/v2/everything?' +
        'q=Indonesia&' +
        'from=2022-06-02&' +
        'to=2022-06-02&' +
        'language=id&' +
        'pageSize=10&' +
        'sortBy=publishedAt&' +
        'apiKey=1fa5a9321a6d48949329f80f19c1a06b';

    function getNews() {
        axios.get(url).then((response) => {
            setNews(response.data.articles);
            console.log(response.data.articles);
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            cuacaData();
        }, 300000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        cuacaData();
        getNews();
    }, []);

    return (
        <userContext.Provider value={{ userData, curr, setCurr, salam, setSalam, news, cuaca }}>
            {children}
        </userContext.Provider>
    )
}