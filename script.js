const testimonials = [
    { text: "TGP University changed my life! The professors truly care about students' success, and the campus is vibrant and welcoming.", author: "- Emily R." },
    { text: "I love the hands-on learning approach here. The career support helped me land my dream job before graduation!", author: "- Jason M." },
    { text: "The friendships and experiences I've gained at TGP are invaluable. I wouldn't trade it for anything!", author: "- Sarah L." }
  ];
  
  let index = 0;
  function changeTestimonial() {
    index = (index + 1) % testimonials.length;
    document.getElementById("testimonial-text").textContent = testimonials[index].text;
    document.getElementById("testimonial-author").textContent = testimonials[index].author;
  }
  
  setInterval(changeTestimonial, 5000);