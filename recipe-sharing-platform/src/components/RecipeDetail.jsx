import recipes from '../data.json';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // ✅ Fixed: useParams (not usrParams)

const RecipeDetail = () => {
  const { id } = useParams(); // ✅ Removed argument: useParams()
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ ingredients, setIngredients ] = useState("");
  const [ instructions, setInstructions ] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Option 1: Use imported data (recommended for static files)
        await new Promise(resolve => setTimeout(resolve, 300)); // Simulate network delay
        const found = recipes.find(item => item.id === parseInt(id));

        if (!found) {
          throw new Error('Recipe not found');
        }

        setData(found);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // ✅ Call inside useEffect
  }, [id]); // ✅ Add id as dependency: re-run when URL param changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found</p>;

  return (
    <div className="flex flex-col bg-gray-500 shadow-lg items-center rounded-lg max-w-sm max-h-fit mx-auto mt-20">
      <h2 className="text-xl font-semibold py-8 text-blue-500">{data.title}</h2>
      <img className="w-40 h-40 object-cover rounded-full shadow-lg mx-auto my-auto" src={data.image} alt="recipe image" />
      <p className="text-base my-4">{data.summary}</p>
      <p>{ingredients}</p>
      <p>{instructions}</p>
    </div>
  );
};

export default RecipeDetail;
