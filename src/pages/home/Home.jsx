import React, { useState } from 'react';
// import './App.css';
// import { firestore } from './firebase';

function Home() {
  const [items, setItems] = useState([{id:1,name:"Dress",purchased:false},{id:2, name:"Dressing Table",purchased:true},{id:3, name:"Makeup",purchased:false}]);
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    // if (itemName.trim() !== '') {
    //   firestore.collection('items').add({
    //     name: itemName,
    //     purchased: false
    //   });
    //   setItemName('');
    // }
    console.log(itemName)
  };

  const handleMarkAsPurchased = (itemId) => {
    // firestore.collection('items').doc(itemId).update({
    //   purchased: true
    // });
    console.log(itemId)
  };

  const handleChange = (e) => {
    setItemName(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4 mt-8">Shopping List</h1>
      <div className="w-80 border-2 solid red m-auto">
        {items.map(item => (
          <div key={item.id} className="w-full border-2 solid red m-auto">
            <span>{item.name} {" "} </span>
            {!item.purchased && (
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleMarkAsPurchased(item.id)}>Mark as Purchased</button>
            )}
          </div>
        ))}
      </div>
      <div className="add-item">
        <input type="text" value={itemName} onChange={handleChange} placeholder="Enter item name" />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

export {Home};
