import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ meal }) => {
  return (
    <div className="bg-surface rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-3">
      <Link 
        to={`/meal/${meal.idMeal}`} 
        className="block group relative overflow-hidden"
      >
        {/* Image Container */}
        <div className="relative pb-[100%] rounded-xl overflow-hidden">
          <img 
            src={meal.strMealThumb} 
            alt={meal.strMeal} 
            className="absolute w-full h-full object-cover transform group-hover:scale-105 transition-transform"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        </div>

        {/* Meal Name */}
        <h3 className="mt-3 text-center font-medium text-text-primary line-clamp-1">
          {meal.strMeal}
        </h3>
      </Link>
    </div>
  );
};

export default MealCard;