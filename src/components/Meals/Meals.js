import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
        const [searchText, setSearchText] = useState('');
        const [meals, setMeals] = useState([]);
        console.log(meals);

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
                <div className="container mt-5">
                        <div className="input-group mb-3 w-50 mx-auto">
                                <input onChange={handleSearch} type="text" className="form-control" placeholder="Search Meal" />
                        </div>
                        {
                                meals ?
                                        <div>
                                                {
                                                        searchText ? <h4>Results of  <span class="text-success"> '{searchText}'</span></h4> : ''
                                                }
                                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                                        {
                                                                meals.map(meal => <Meal
                                                                        key={meal.idMeal}
                                                                        meal={meal}
                                                                ></Meal>)
                                                        }
                                                </div>
                                        </div> :
                                        <div>
                                                <h2 className="text-center pt-5">'{searchText}' <span className="text-danger">Not Found</span></h2>
                                        </div>
                        }
                </div>
        );
};

export default Meals;