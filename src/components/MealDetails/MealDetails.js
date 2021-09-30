import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {
        const { mealId } = useParams();
        const [meal, setMeal] = useState({});
        useEffect(() => {
                const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
                fetch(url)
                        .then(res => res.json())
                        .then(data => setMeal(data.meals[0]))
        }, [])
        const { strMeal, strCategory, strArea, strMealThumb, strYoutube, strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = meal;
        return (
                <div>
                        <h2>Hello Meal Details {mealId}</h2>
                        <div className="card mx-auto" style={{ 'width': '18rem' }}>
                                <img src={strMealThumb} className="card-img-top" alt="..." />
                                <div className="card-body">
                                        <h5 className="card-title">{strMeal}</h5>
                                        <h6>Category: {strCategory}</h6>
                                        <p className="card-text">Area: {strArea}</p>
                                        <hr />
                                        <h4 className="text-start text-success">Ingredients</h4>
                                        <div class="text-start">
                                                {
                                                        strIngredient1 ? <li>{strIngredient1}</li> : ''
                                                }
                                                {

                                                        strIngredient2 ? <li>{strIngredient2}</li> : ''
                                                }
                                                {

                                                        strIngredient3 ? <li>{strIngredient3}</li> : ''
                                                }
                                                {

                                                        strIngredient4 ? <li>{strIngredient4}</li> : ''
                                                }
                                        </div>
                                        <a href={strYoutube} className="btn btn-danger">See in Youtube</a>
                                </div>
                        </div>
                </div>
        );
};

export default MealDetails;