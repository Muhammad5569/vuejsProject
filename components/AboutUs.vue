<template>
   <div>
    <!-- <header>
    <h1>Hotel Paradise</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header> -->
  <main>
    <section id="about">
      <h2>About Us</h2>
      <p>Welcome to Hotel Paradise, where luxury and comfort meet. Our hotel is located in a prime location with breathtaking views and top-notch amenities.</p>
      <p>At Hotel Paradise, we strive to provide our guests with an unforgettable experience. Whether you're traveling for business or pleasure, our dedicated staff is here to cater to all your needs.</p>
      <p>With spacious and elegantly furnished rooms, a state-of-the-art fitness center, and an exquisite restaurant offering a variety of cuisines, we ensure that your stay with us is nothing short of exceptional.</p>
    </section>
    <section id="mission">
      <h2>Our Mission</h2>
      <p>Our mission is to create a welcoming and relaxing environment for our guests. We aim to exceed their expectations by offering exceptional service, comfortable accommodations, and a memorable stay.</p>
      <p>We believe that every guest should feel valued and cared for during their time with us. Our dedicated team of professionals is committed to delivering personalized experiences and ensuring utmost satisfaction.</p>
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
body, h1, h2, p, nav {
  margin: 0;
  padding: 0;
}

/* Global styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

/* header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

header h1 {
  font-size: 28px;
} */

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

section p {
  line-height: 1.5;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}
  </style>