class testimonial {
  constructor(author, image, job, description) {
    this.author = author;
    this.job = job;
    this.description = description;
    this.image = image;
  }
}

const testimonialObject = [
  new testimonial(
    "James",
    "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Software Engineer",
    "I'm an Software Enginner and I'am graduate of vocational high school. Always trying to be honest and kind to others. Have a very optimistic goal which is to grow at what i can do and always looking for something new to learn and improve."
  ),
  new testimonial(
    "Slage",
    "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Fullstack developer",
    "Good job Syahri, don't give up and keep learning will be a righteous person"
  ),
];

const testimonialElement = document.getElementById("testimoni");

for (let i = 0; i < testimonialObject.length; i++) {
  let currentHtml = testimonialObject[i];
  let html = `
    
       <li class="content-li-testimoni">
                <div class="testimoni-header">
                  <img
                    src="${currentHtml.image}"
                    alt="${currentHtml.author}"
                    class="testimoni-img"
                  />
      
                 
                </div>
      
                <div style="margin-top: 20px">
                  <p class="testimoni-description">
                   " ${currentHtml.description}"
                  </p>
                  <div class="testimoni-name">
                  <h5 class="header-name">- ${currentHtml.author}</h5>
                  <p class="header-job">${currentHtml.job}</p>
                </div>
                </div>
              </li>
      `;

  testimonialElement.innerHTML += html;
}

console.log(testimonialObject);
