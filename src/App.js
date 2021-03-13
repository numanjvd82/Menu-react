import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = [
  'all',
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const filteredItems = items.filter((item) => category === item.category);
    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
