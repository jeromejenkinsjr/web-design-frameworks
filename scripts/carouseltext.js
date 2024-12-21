const captions = [
	{
		title: "First lide label",
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

const carousel = document.getElementById("carouselExampleCaptions");
const captionTitle = document.querySelector("#carouselCaptionsText h5");
const captionDescription = document.querySelector("#carouselCaptionsText p");

carousel.addEventListener("slide.bs.carousel", (e) => {
	const nextIndex = e.to;
	captionTitle.textContent = captions[nextIndex].title;
	captionDescription.textContent = captions[nextIndex].description;
});
