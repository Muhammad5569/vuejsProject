<template>
   <div>
    <header>
    <h1>Hotel Paradise</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="rooms.html">Rooms</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
  <main>
    <section id="rooms">
      <h2>Our Rooms</h2>
      <div class="room">
        <img src="room1.jpg" alt="Room 1">
        <h3>Deluxe Room</h3>
        <p>Enjoy a comfortable stay in our spacious Deluxe Room. The room features a king-sized bed, high-speed internet access, and a mini-bar.</p>
        <p class="price">$200 per night</p>
      </div>
      <div class="room">
        <img src="room2.jpg" alt="Room 2">
        <h3>Suite</h3>
        <p>Indulge in luxury with our exquisite Suite. It offers a separate living area, a private balcony, and a luxurious bathroom with a Jacuzzi.</p>
        <p class="price">$400 per night</p>
      </div>
      <div class="room">
        <img src="room3.jpg" alt="Room 3">
        <h3>Family Room</h3>
        <p>Perfect for families, our Family Room provides ample space and comfort. It includes two double beds, a flat-screen TV, and a work desk.</p>
        <p class="price">$250 per night</p>
      </div>
    </section>
  </main>
  <footer>
    <p>&copy; 2023 Hotel Paradise. All rights reserved.</p>
  </footer>
   </div>
</template>
  
<script>  
  export default {    
    data () {
      return {      
      }
    }
  }
  </script>

  <style scoped>
    /* Reset default browser styles */
body, h1, h2, h3, p, img, nav {
  margin: 0;
  padding: 0;
}

/* Global styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

header h1 {
  font-size: 28px;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}

nav a:hover {
  text-decoration: underline;
}

main {
  width: 800px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

section {
  margin-bottom: 20px;
}

section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.room {
  margin-bottom: 20px;
}

.room img {
  width: 100%;
  height: auto;
}

.room h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.room p {
  line-height: 1.5;
}

.price {
  font-weight: bold;
  color: #333;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}

  </style>