<template>
    <div >
     
     <main>
     <section id="banner">
      <h2>Welcome to Hotel Paradise</h2>
      <p>Experience luxury and comfort at its finest. Book your stay today and make unforgettable memories.</p>
      <a href="rooms.html" class="btn">View Rooms</a>
     </section>
     <div class="container">
      <div v-for="photo in outSidePhotos" >
        <div class="container-fluid" v-show="num==photo.turn">
          <img class="container-carousel  carousel"  :src="require(`../src/assets/${photo.img}.jpg`)" alt="unjn">
        </div> 
      </div>
      <div class="container">
        <div class="row" style="width: 500px;">
          <button class="col" @click="CarouselSubtract"> -</button>
          <button class="col" @click="CarouselAdd"> +</button>
        </div>

      </div>
     </div>
     <section id="features">
      <div class="feature">
        <img src="feature1.jpg" alt="Feature 1">
        <h3>Stunning Views</h3>
        <p>Enjoy breathtaking views of the city skyline, mountains, or ocean from our premium rooms.</p>
      </div>
      <div class="feature">
        <img src="feature2.jpg" alt="Feature 2">
        <h3>World-Class Dining</h3>
        <p>Indulge in a culinary journey with our renowned chefs, offering a diverse range of exquisite dishes.</p>
      </div>
      <div class="feature">
        <img src="feature3.jpg" alt="Feature 3">
        <h3>Luxurious Amenities</h3>
        <p>Relax and unwind with our state-of-the-art spa, swimming pool, fitness center, and more.</p>
      </div>
     </section>
     <section id="testimonial">
      <h2>What Our Guests Say</h2>
      <div class="quote">
        <p>"The stay at Hotel Paradise was absolutely amazing. The staff was friendly, the room was spacious and comfortable, and the food was divine. Highly recommended!"</p>
        <cite>John Doe</cite>
      </div>
     </section>
     </main>
    </div>
  </template>
  
  <script>
  export default {
    
    data () {
      return {
        num:0,
        outSidePhotos:[
         {turn:0, alt:'img1',  img:'img1'},
         {turn:1, alt:'img2',  img:'img2'},
         {turn:2, alt:'img3',  img:'img3'},
         
        ]
      }
    },
    methods:{
      CarouselAdd: function(num){
        if(this.num>=2){
          this.num=0;
        }else{this.num++};
        console.log(this.num);     
      },
      CarouselSubtract: function(num){
        if(this.num<=0){
          this.num=2;
        }else{this.num--};
        console.log(this.num);     
      }
    }
  }
  </script>
  
  <style>
  .carousel{
    width: 500px;
    height: 500px;
  }

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

#banner {
  text-align: center;
  padding: 40px 0;
}

#banner h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

#banner p {
  font-size: 18px;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
}

#features {
  display: flex;
  justify-content: space-between;
}

.feature {
  flex: 1;
  text-align: center;
  padding: 20px;
}

.feature img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.feature h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.feature p {
  line-height: 1.5;
}

#testimonial {
  text-align: center;
  padding: 40px 0;
}

.quote {
  max-width: 600px;
  margin: 0 auto;
}

.quote p {
  font-size: 18px;
  margin-bottom: 10px;
}

.quote cite {
  font-style: italic;
}

 </style>
  