const captions = [
	{
	  title: "First slide label",
	  description: "Some representative placeholder content for the first slide.",
	},
	{
	  title: "Second slide label",
	  description: "Some representative placeholder content for the second slide.",
	},
	{
	  title: "Third slide label",
	  description: "Some representative placeholder content for the third slide.",
	},
  ];
  
  const carousel = document.getElementById("carouselExampleCaptions2");
  const captionTitle = document.querySelector("#carouselCaptionsText2 h5");
  const captionDescription = document.querySelector("#carouselCaptionsText2 p");
  
  if (carousel) {
	carousel.addEventListener("slide.bs.carousel", (e) => {
	  const nextIndex = e.to;
	  if (captions[nextIndex]) {
		captionTitle.textContent = captions[nextIndex].title;
		captionDescription.textContent = captions[nextIndex].description;
	  }
	});
  } else {
	console.error("Carousel with ID 'carouselExampleCaptions2' not found.");
  }
  