//Başlangıç Değeri Olmayan Durum (Initial State Olmadan): İlk durumu belirtmeksizin basit bir sayacı uygulaması.

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Artır</button>
    </div>
  );
}
//String Durum (String State): Bir metin girişi kutusunu yöneten ve başlangıç değeri olarak boş bir dize kullanılan bir örnek.
import { useState } from 'react';

function TextInput() {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Girilen Metin: {text}</p>
    </div>
  );
}

//Boolean Durum (Boolean State): Bir onay kutusunu (checkbox) kontrol eden ve başlangıç değeri olarak false kullanan bir örnek.
import { useState } from 'react';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
      <p>Seçili mi? {isChecked ? 'Evet' : 'Hayır'}</p>
    </div>
  );
}

//Objeleri Durum Olarak Kullanma: Durumu bir obje olarak kullanarak öğrenci bilgilerini güncelleyen bir örnek.
import React, { useState } from 'react';

function StudentInfo() {
  const [student, setStudent] = useState({ name: '', age: 0 });

  const updateInfo = () => {
    setStudent({ name: 'John', age: 25 });
  };

  return (
    <div>
      <p>İsim: {student.name}</p>
      <p>Yaş: {student.age}</p>
      <button onClick={updateInfo}>Bilgiyi Güncelle</button>
    </div>
  );
}

//Dizileri Durum Olarak Kullanma: Bir dizi durumu kullanarak bir görev listesi yöneten bir örnek.
import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Görev Ekle</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

//ShoppingCart
//Kullanıcılar ürünleri sepete ekleyebilir ve sepeti temizleyebilirler.
//Sepetin güncel durumu ve toplam fiyat, useState kullanılarak yönetilir.
import { useState } from 'react';

function ShoppingCart() {
  // Ürünlerin listesi
  const initialProducts = [
    { id: 1, name: 'Ürün 1', price: 10 },
    { id: 2, name: 'Ürün 2', price: 15 },
    { id: 3, name: 'Ürün 3', price: 20 },
  ];

  // Sepet ve toplam fiyat durumları
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Ürünü sepete ekleme işlemi
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    const updatedTotalPrice = totalPrice + product.price;
    setCart(updatedCart);
    setTotalPrice(updatedTotalPrice);
  };

  // Sepeti temizleme işlemi
  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
  };

  return (
    <div>
      <h2>Alışveriş Sepeti</h2>
      <ul>
        {initialProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Sepete Ekle</button>
          </li>
        ))}
      </ul>
      <h3>Sepet</h3>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <p>Toplam Fiyat: ${totalPrice}</p>
      <button onClick={clearCart}>Sepeti Temizle</button>
    </div>
  );
}

export default ShoppingCart;
