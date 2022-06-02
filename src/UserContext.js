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
        getNews();
    }, []);

    return (
        <userContext.Provider value={{ userData, curr, setCurr, salam, setSalam, news }}>
            {children}
        </userContext.Provider>
    )
}