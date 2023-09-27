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
    <section id="card">
      <h2>Card Details</h2>
      <div class="card">
        <img src="card1.jpg" alt="Card 1">
        <h3>Gold Card</h3>
        <p>Enjoy exclusive benefits and discounts with our Gold Card. Get access to premium amenities, complimentary breakfast, and priority check-in.</p>
        <p class="price">$99 per year</p>
      </div>
      <div class="card">
        <img src="card2.jpg" alt="Card 2">
        <h3>Silver Card</h3>
        <p>Upgrade your stay with our Silver Card. Receive discounted room rates, complimentary Wi-Fi, and late check-out.</p>
        <p class="price">$49 per year</p>
      </div>
      <div class="card">
        <img src="card3.jpg" alt="Card 3">
        <h3>Bronze Card</h3>
        <p>Get rewarded for your loyalty with our Bronze Card. Earn points for every stay and redeem them for free nights and hotel vouchers.</p>
        <p class="price">$19 per year</p>
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

.card {
  margin-bottom: 20px;
}

.card img {
  width: 100%;
  height: auto;
}

.card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.card p {
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