var counter = 0;

// init
$(document).ready(function() {
	init();

	console.log(words);
	// $("#rainbowList").rainbow();
});

function init() {
	$("#menu").css("display", "block");
	$("#game").css("display", "none");
	$("#word-list").empty();
	$.each(words, function(key, val) {
		$("#word-list").append("<li>" + val + "</li>");
	});
}

// start
$(document).on("click", "#start", function(e) {
	e.preventDefault();
	$("#menu").css("display", "none");
	$("#game").css("display", "block");
	$("#word").text(words[counter]);
	$("#counter").text(counter + 1 + " of " + words.length);
});

// next
$(document).on("click", "#next", function(e) {
	e.preventDefault();
	counter++;
	console.log({ counter });
	$("#word").text(words[counter]);
	$("#counter").text(counter + 1 + " of " + words.length);
});

$(document).on("click", "#start", function(e) {
	e.preventDefault();
	$("#menu").css("display", "none");
	$("#game").css("display", "block");
});

// restart
$(document).on("click", "#restart", function(e) {
	e.preventDefault();
	init();
});

var words = [
	"aardvark",
	"darkens",
	"flamingo",
	"inspire",
	"nodded",
	"abnormal",
	"decided",
	"flashcards",
	"interest",
	"oilier",
	"accident",
	"decomposer",
	"flexible",
	"invented",
	"onion",
	"accurate",
	"decorate",
	"flicks",
	"iron",
	"otters",
	"adorable",
	"definition",
	"forced",
	"irrigate",
	"outraged",
	"aerospace",
	"derive",
	"fraction",
	"island",
	"oxygen",
	"alliances",
	"desert",
	"freezing",
	"issues",
	"pageant",
	"aluminum",
	"develop",
	"frequently",
	"jackal",
	"particle",
	"ambulance",
	"dictionary",
	"furnaces",
	"jeans",
	"peaceful",
	"announcer",
	"digging",
	"gallon",
	"jelly",
	"peeked",
	"applause",
	"discussion",
	"gasoline",
	"joyful",
	"pigeon",
	"argument",
	"dishwasher",
	"gathered",
	"judge",
	"pioneers",
	"arteries",
	"distracted",
	"generous",
	"kicked",
	"pleasure",
	"artichoke",
	"downstairs",
	"genius",
	"knead",
	"populate",
	"Australia",
	"dragged",
	"geologic",
	"knight",
	"portable",
	"avalanche",
	"drawers",
	"glory",
	"laugh",
	"positive",
	"careful",
	"earthquake",
	"gloves",
	"lawyer",
	"possible",
	"cavity",
	"eclipse",
	"gorge",
	"legacy",
	"pounding",
	"celery",
	"economical",
	"grateful",
	"level",
	"precedes",
	"century",
	"elementary",
	"grave",
	"lifted",
	"precious",
	"cereal",
	"empire",
	"growling",
	"liquid",
	"producer",
	"chance",
	"endless",
	"hammer",
	"little",
	"punished",
	"choice",
	"equality",
	"handsome",
	"louder",
	"quaint",
	"chopped",
	"erupting",
	"hardiest",
	"mammal",
	"quantity",
	"college",
	"eucalyptus",
	"hedgehog",
	"marble",
	"raincoat",
	"complex",
	"European",
	"helmet",
	"marvel",
	"rarest",
	"consent",
	"eventually",
	"herds",
	"medium",
	"recess",
	"convict",
	"excavation",
	"hidden",
	"melody",
	"refusing",
	"cookies",
	"expedition",
	"humble",
	"metal",
	"reliable",
	"courageous",
	"facilities",
	"hungrily",
	"might",
	"replaced",
	"courier",
	"February",
	"hygiene",
	"minute",
	"souvenir",
	"crooner",
	"festival",
	"hymns",
	"modern",
	"speeches",
	"cruelty",
	"fiercely",
	"imported",
	"museum",
	"squabble",
	"cushion",
	"figure",
	"improve",
	"nickel",
	"squirrel",
	"daffodil",
	"filled",
	"increase",
	"night",
	"stallion",
	"sticking",
	"sunlight",
	"thinking",
	"unicycle",
	"wrinkles",
	"straggly",
	"sunset",
	"treasure",
	"vacation",
	"yourself",
	"strategy",
	"superb",
	"trespass",
	"valuable",
	"strike",
	"survival",
	"trinkets",
	"variable",
	"string",
	"taught",
	"truthful",
	"whenever",
	"suddenly",
	"thankful",
	"unfairly",
	"wildlife"
];
