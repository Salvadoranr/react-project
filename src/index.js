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
            "title": "Let it be",
            "type": "pop",
            "language": "English",
            "year": 1968,
            "cover": "https://images-na.ssl-images-amazon.com/images/I/51F-JrWga3L._SY355_.jpg",
            "source": "https://www.youtube.com/embed/QDYfEBY9NM4"
        },
        {
            "id": 3,
            "title": "Let it be",
            "type": "pop",
            "language": "English",
            "year": 1968,
            "cover": "http://dummyimage.com/800x600.png/99118E/ffffff",
            "source": "https://www.youtube.com/embed/QDYfEBY9NM4"
        },
        {
            "id": 4,
            "title": "Let it be",
            "type": "pop",
            "language": "English",
            "year": 1968,
            "cover": "http://dummyimage.com/800x600.png/99118E/ffffff",
            "source": "https://www.youtube.com/embed/QDYfEBY9NM4"
        },
        {
            "id": 5,
            "title": "Let it be",
            "type": "pop",
            "language": "English",
            "year": 1968,
            "cover": "http://dummyimage.com/800x600.png/99118E/ffffff",
            "source": "https://www.youtube.com/embed/QDYfEBY9NM4"
        },
    ],
    "originals": [
        {
            "id": 6,
            "title": "Let it be",
            "type": "pop",
            "language": "English",
            "year": 1968,
            "cover": "https://images-na.ssl-images-amazon.com/images/I/51F-JrWga3L._SY355_.jpg",
            "source": "https://www.youtube.com/embed/QDYfEBY9NM4"
        },
        {
            "id": 7,
            "title": "Let it be",
            "type": "pop",
            "language": "English",
            "year": 1968,
            "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
            "source": "https://www.youtube.com/embed/QDYfEBY9NM4"
        },
        {
            "id": 8,
            "title": "Let it be",
            "type": "pop",
            "language": "English",
            "year": 1968,
            "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
            "source": "https://www.youtube.com/embed/QDYfEBY9NM4"
        },
        {
            "id": 9,
            "title": "Let it be",
            "type": "pop",
            "language": "English",
            "year": 1968,
            "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
            "source": "https://www.youtube.com/embed/QDYfEBY9NM4"
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