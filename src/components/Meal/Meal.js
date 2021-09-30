import React from 'react';
import { useHistory } from 'react-router';
import './Meal.css';

const Meal = (props) => {
        const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;
        const history = useHistory();
        // See Ingredients:
        const mealDetails = () => {
                history.push(`/meal/${idMeal}`)
        }

        return (
                <div className="col">
                        <div className="card h-100">
                                <div className="image-section">
                                        <img src={strMealThumb} className="img-fluid p-4" alt="..." />
                                </div>
                                <div className="card-body">
                                        <h5 className="card-title">{strMeal}</h5>
                                        <p className="card-text">{strInstructions.slice(0, 150)}</p>
                                </div>
                                <div className="card-footer">
                                        <div className="d-grid gap-2">
                                                <button onClick={mealDetails} className="btn btn-success fw-bold">See Ingredients</button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Meal;