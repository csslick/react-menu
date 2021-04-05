import { useState } from 'react';
import './App.css';
import items from './data';
import Categories from './components/Categories';
import Menu from './components/Menu';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return;
    }

    const newItems = items.filter(item => {
      return item.category === category;
    })
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu">
        <header>
          <h1>Our menu</h1>
        </header>
        <Categories filterItems={filterItems} items={items} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
