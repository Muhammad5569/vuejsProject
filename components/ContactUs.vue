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
    <section id="contact">
      <h2>Contact Us</h2>
      <p>Have a question or want to make a reservation? Get in touch with us using the contact details below or fill out the form.</p>
      <div class="contact-details">
        <p><strong>Address:</strong> 123 Main Street, Paradise City</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> info@hotelparadise.com</p>
      </div>
      <form action="submit_form.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <input type="submit" value="Submit">
      </form>
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
body, h1, h2, p, strong, label, input, textarea, form, nav {
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

.contact-details p {
  margin-bottom: 10px;
}

form label {
  display: block;
  margin-bottom: 5px;
}

form input,
form textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
}

form input[type="submit"] {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

form input[type="submit"]:hover {
  background-color: #555;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}
  </style>