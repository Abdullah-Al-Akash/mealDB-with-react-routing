import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
        const [searchText, setSearchText] = useState('');
        const [meals, setMeals] = useState([]);

        // Load Date:
        useEffect(() => {
                const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
                fetch(url)
                        .then(res => res.json())
                        .then(data => setMeals(data.meals))
        }, [searchText])

        const handleSearch = (e) => {
                const searchTextValue = e.target.value;
                setSearchText(searchTextValue);
        }
        return (
                <div className="container">
                        <h2>This is Meals</h2>
                        <div className="input-group mb-3 w-50 mx-auto">
                                <input onChange={handleSearch} type="text" className="form-control" placeholder="Search Meal" />
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                                {
                                        meals.map(meal => <Meal
                                                key={meal.idMeal}
                                                meal={meal}
                                        ></Meal>)
                                }
                        </div>
                </div>
        );
};

export default Meals;