const captions = [
	{
		title: "First slide label",
		description: "Some representative placeholder content for the first slide.",
	},
	{
		title: "Second slide label",
		description:
			"Some representative placeholder content for the second slide.",
	},
	{
		title: "Third slide label",
		description: "Some representative placeholder content for the third slide.",
	},
];

const carousel = document.getElementById("carouselExampleCaptions4");
const captionTitle = document.querySelector("#carouselCaptionsText4 h5");
const captionDescription = document.querySelector("#carouselCaptionsText4 p");

carousel.addEventListener("slide.bs.carousel", (e) => {
	const nextIndex = e.to;
	captionTitle.textContent = captions[nextIndex].title;
	captionDescription.textContent = captions[nextIndex].description;
});
