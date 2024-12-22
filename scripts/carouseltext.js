const captions = [
	{
		title: "Key Pages Designed by Jeremi",
		description: "English and Arabic modes and extensive learning pages.",
	},
	{
		title: "Course Content",
		description:
			"See your course content, and get in touch with your mentor.",
	},
	{
		title: "From Communities, to You.",
		description: "Jump from your Circles to your Profile and change it to your preference.",
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
