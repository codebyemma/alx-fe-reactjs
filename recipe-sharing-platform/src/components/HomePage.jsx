// HomePage.jsx
import React, { useState, useEffect } from 'react';
import recipesData from '../data.json'; // Import the data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate async loading (e.g., like a real API)
    const loadRecipes = async () => {
      try {
        // Optional: add a small delay to simulate network wait
        await new Promise(resolve => setTimeout(resolve, 500));

        // Since the import is synchronous, we can just set it
        setRecipes(recipesData);
      } catch (err) {
        setError('Failed to load recipes');
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []); // Empty dependency array = runs once on mount

  if (loading) return <p className="text-center text-lg">Loading recipes...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Delicious Recipes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-700 mt-2">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
