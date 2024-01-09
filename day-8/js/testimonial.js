class testimonial {
  constructor(author, image, job, description, rating) {
    this.author = author;
    this.job = job;
    this.description = description;
    this.image = image;
    this.rating = rating;
  }
}

const testimonialObject = [
  new testimonial(
    "James",
    "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Software Engineer",
    "I am truly impressed by the outstanding service provided. The team's dedication and professionalism made my experience exceptionally satisfying.",
    "3"
  ),
  new testimonial(
    "Haldane",
    "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Software Engineer",
    "The service was exemplary, and I was pleasantly surprised by the promptness and efficiency. I highly commend the team for their exceptional work ethic.",
    "2"
  ),
  new testimonial(
    "Kusidi",
    "https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Fullstack developer",
    "Good job Syahri, don't give up and keep learning will be a righteous person.",
    "4"
  ),
  new testimonial(
    "Slage",
    "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Fullstack developer",
    "Your dedication and hard work are truly admirable. You consistently strive for excellence in everything you do.",
    "5"
  ),
  new testimonial(
    "Anjani",
    "https://media.istockphoto.com/id/1278979696/id/foto/senang-tersenyum-gadis-perguruan-tinggi-belajar-di-laptop.jpg?b=1&s=612x612&w=0&k=20&c=k-Xy-bbDb83u95YQQUNsQT5S-gktuEEg6LdnzjeDPAg=",
    "Fullstack developer",
    "Your positive attitude is infectious. Your optimism and encouragement uplift those around you.",
    "2"
  ),
  new testimonial(
    "Burgine",
    "https://images.pexels.com/photos/19605384/pexels-photo-19605384/free-photo-of-pria-kacamata-hitam-jalan-model.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Fullstack developer",
    "Your creativity knows no bounds. Your innovative ideas and solutions have greatly contributed to our success.",
    "1"
  ),
];

const testimonialElement = document.getElementById("testimoni");

function buttonRatingTestimonial(rating) {
  const filteredRating = testimonialObject.filter(
    (value) => value.rating === rating
  );

  const filteredHTML = filteredRating.map((value) => {
    return `<li class="content-li-testimoni">
    <div class="testimoni-header">
      <img
        src="${value.image}"
        alt="${value.author}"
        class="testimoni-img"
      />
    </div>

    <div style="margin-top: 20px">
      <p class="testimoni-description">" ${value.description}"</p>
      <div class="testimoni-name">
        <h5 class="header-name">- ${value.author}</h5>
        <p class="header-job">${value.job}</p>
      </div>
    </div>
  </li>`;
  });
  testimonialElement.innerHTML = filteredHTML.join(" ");
  console.log(filteredRating);
}

function allTestimonial() {
  const testimonialHTML = testimonialObject.map((value) => {
    return `<li class="content-li-testimoni">
    <div class="testimoni-header">
      <img
        src="${value.image}"
        alt="${value.author}"
        class="testimoni-img"
      />
    </div>

    <div style="margin-top: 20px">
      <p class="testimoni-description">" ${value.description}"</p>
      <div class="testimoni-name">
        <h5 class="header-name">- ${value.author}</h5>
        <p class="header-job">${value.job}</p>
      </div>
    </div>
  </li>`;
  });

  testimonialElement.innerHTML = testimonialHTML.join(" ")
  console.log(testimonialObject)
}
// console.log(allTestimonial);

allTestimonial()

