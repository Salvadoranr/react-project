import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import reducer from './reducers';
import App from './routes/App'; 

const initialState = {
    "user":{},
    "playing":{},
    "myList": [],
    "trends": [
        {
            "id": 2,
            "title": "High hopes",
            "type": "pop-rock",
            "language": "English",
            "year": 2018,
            "cover": "http://naciongrita.com.mx/wp-content/uploads/2018/03/PATD.jpg",
            "source": "https://www.youtube.com/embed/IPXIgEAGe4U"
        },
        {
            "id": 3,
            "title": "Memories", 
            "type": "pop", 
            "language": "English",
            "year": 2019, 
            "cover": "http://dummyimage.com/800x600.png/99118E/ffffff",
            "source": "https://www.youtube.com/embed/SlPhMPnQ58k"
        },
        {
            "id": 4,
            "title": "Don't Start Now",
            "type": "pop",
            "language": "English",
            "year": 2019,
            "cover": "http://dummyimage.com/800x600.png/99118E/ffffff",
            "source": "https://www.youtube.com/embed/oygrmJFKYZY"
        },
        {
            "id": 5,
            "title": "Yummy",
            "type": "pop",
            "language": "English",
            "year": 2020,
            "cover": "http://dummyimage.com/800x600.png/99118E/ffffff",
            "source": "https://www.youtube.com/embed/8EJ3zbKTWQ8"
        },
    ],
    "originals": [
        {
            "id": 6,
            "title": "Put it all on me",
            "type": "pop",
            "language": "English",
            "year": 2019,
            "cover": "http://dummyimage.com/800x600.png/99118E/ffffff",
            "source": "https://www.youtube.com/embed/ryJgDL9jzKk"
        },
        {
            "id": 7,
            "title": "Tutu",
            "type": "pop",
            "language": "English",
            "year": 2019,
            "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
            "source": "https://www.youtube.com/embed/5AkDqm-cEgg"
        },
        {
            "id": 8,
            "title": "Through it all",
            "type": "pop",
            "language": "English",
            "year": 2018,
            "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
            "source": "https://www.youtube.com/embed/t62zPl44H4I"
        },
        {
            "id": 9,
            "title": "I'ts my life",
            "type": "pop",
            "language": "English",
            "year": 2000,
            "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
            "source": "https://www.youtube.com/embed/vx2u5uUu3DE"
        },
    ]
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState,composeEnhancers())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))