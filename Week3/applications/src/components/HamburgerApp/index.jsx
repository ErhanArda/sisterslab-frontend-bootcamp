import { useState } from 'react';
import ingredientsToAdd from '../../constants/ingredientsToAdd.js';
import './style.css';
const HamburgerApp = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    const isAdded = selectedIngredients.find(
      (item) => item.id === ingredient.id
    );

    if (isAdded) {
      setSelectedIngredients(
        selectedIngredients.map((item) => {
          if (item.id === ingredient.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        })
      );
    } else {
      setSelectedIngredients([
        ...selectedIngredients,
        {
          ...ingredient,
          count: 1,
          //   count:
          //     ingredient.name === 'Köfte'
          //       ? 2
          //       : ingredient.name === 'Domates'
          //       ? 4
          //       : 1,
          // nested ternary ler kullanimi kolay ama okumasi zordur
        },
      ]);
    }
  };
  const removeIngredient = (ingredient) => {
    const addedIngredient = selectedIngredients.find(
      (item) => item.id === ingredient.id
    );
    if (addedIngredient.count > 1) {
      setSelectedIngredients(
        selectedIngredients.map((item) => {
          if (item.id === ingredient.id) {
            return {
              ...item,
              count: item.count - 1,
            };
          }
          return item;
        })
      );
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item.id !== ingredient.id)
      );
    }
  };
  return (
    <div>
      <h1>Hamburger App</h1>
      <div>
        <h2>Malzemeler</h2>
        <ul>
          {selectedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name} x {ingredient.count}
            </li>
          ))}
        </ul>

        <h2>Eklenecek Malzemeler</h2>
        <ul>
          {ingredientsToAdd.map((ingredient) => (
            <li key={ingredient.id}>
              <p>
                {ingredient.name} <b />
                <button
                  onClick={() => addIngredient(ingredient)}
                  className="add-ingredient"
                >
                  Ekle
                </button>
                <button
                  onClick={() => removeIngredient(ingredient)}
                  className={
                    selectedIngredients.find(
                      (item) => item.id === ingredient.id
                    )
                      ? 'remove-ingredient'
                      : 'remove-ingredient disabled'
                  }
                >
                  Cikar
                </button>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerApp;
