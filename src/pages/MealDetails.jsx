import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiUsers } from 'react-icons/fi';
import axios from 'axios';

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  // ... (نفس منطق جلب البيانات السابق)
  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setMeal(response.data.meals?.[0]);
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, [id]);

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push({
          ingredient: meal[`strIngredient${i}`],
          measure: meal[`strMeasure${i}`]
        });
      }
    }
    return ingredients;
  };

  if (loading) {
    return <div className="ml-60 p-8 text-center">Loading...</div>;
  }

  if (!meal) {
    return (
      <div className="ml-60 p-8 text-center">
        <h2 className="text-2xl text-red-600">Meal Not Found!</h2>
        <Link 
          to="/" 
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }


return (
    <div className="min-h-screen bg-background lg:ml-64">
      <div className="p-4 lg:p-8 max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-secondary hover:text-secondary/80 mb-6 lg:mb-8"
        >
          <FiArrowLeft className="mr-2" />
          <span className="text-lg">Back to Home</span>
        </Link>

        {/* Meal Content */}
        {meal && (
          <div className="bg-surface rounded-2xl shadow-lg p-6 lg:p-10">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              {/* Image */}
              <div className="lg:w-1/2">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-md"
                />
              </div>

              {/* Basic Info */}
              <div className="lg:w-1/2 space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-text-primary">
                  {meal.strMeal}
                </h1>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center bg-secondary/10 px-4 py-2 rounded-full">
                    <FiClock className="mr-2 text-secondary" />
                    <span className="text-text-secondary">30 mins</span>
                  </div>
                  <div className="flex items-center bg-success/10 px-4 py-2 rounded-full">
                    <FiUsers className="mr-2 text-success" />
                    <span className="text-text-secondary">4 servings</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="bg-warning/10 text-warning px-3 py-1 rounded-full text-sm">
                    {meal.strCategory}
                  </span>
                  <span className="bg-error/10 text-error px-3 py-1 rounded-full text-sm">
                    {meal.strArea}
                  </span>
                </div>
              </div>
            </div>

            {/* Ingredients & Instructions */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-text-primary">Ingredients</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {getIngredients().map((item, index) => (
                    <li
                      key={index}
                      className="bg-background p-3 rounded-lg flex justify-between items-center"
                    >
                      <span className="text-text-secondary">{item.ingredient}</span>
                      <span className="text-secondary font-medium">{item.measure}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-text-primary">Instructions</h2>
                <div className="prose max-w-none text-text-secondary">
                  {meal.strInstructions.split('\n').map((para, index) => (
                    <p key={index} className="mb-4">{para}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Embed */}
            {meal.strYoutube && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-text-primary">Video Tutorial</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
                    className="w-full h-64 lg:h-96 rounded-xl shadow"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

};

export default MealDetails;