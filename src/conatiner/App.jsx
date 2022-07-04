import React, { useEffect, useState } from 'react'
// import { robotsArray } from "./robots";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';

function App() {
    const [robots, setRobots] = useState([])
    const [searchfeild, setSearchfeild] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            }).then(users => setRobots(users))
    }, [])

    const onSearchChange = (event) => {
        setSearchfeild(event.target.value)
    }

    const filteredRobots = robots.filter((receivedRobots) =>
        receivedRobots.name.toLowerCase().includes(
            searchfeild.toLocaleLowerCase()
        )
    )

    return (
        !robots.length ? <h1>Loading</h1> : (
            <div className='tc'>
                <h1 className='f1'>RoboFriends </h1>
                <SearchBox searchfeild={searchfeild} onSearchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    )

}

export default App