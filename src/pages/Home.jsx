import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tabs from '../components/Tabs';
import MealCard from '../components/MealCard';
import Navbar from '../components/Navbar';

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Beef');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCategories();
    fetchMealsByCategory(activeCategory);
  }, []);

  const fetchMealsByCategory = async (category) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      setMeals(response.data.meals || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    fetchMealsByCategory(category);
  };

  if (error) {
    return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Navbar />

      <div className="lg:ml-64 w-full p-4 lg:p-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-start my-4 lg:my-6 text-secondary">
        Learn, Cook, Eat Your Food
        </h1>
        
        <Tabs 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />

        {loading ? (
          <div className="text-center mt-8 text-text-secondary">Loading meals...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {meals.length > 0 ? (
              meals.map(meal => <MealCard key={meal.idMeal} meal={meal} />)
            ) : (
              <div className="col-span-full text-center text-text-secondary py-8">
                No meals found in this category 😞
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;