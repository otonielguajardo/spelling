var counter = 0;

// init
$(document).ready(function () {
	init();
	// console.log(words);
	// $("#rainbowList").rainbow();
});

function init() {
	counter = 0;
	$("#menu").css("display", "block");
	$("#game").css("display", "none");
	$("#word-list").empty();
	$.each(words, function (key, val) {
		$("#word-list").append("<li>" + val + "</li>");
	});
}

// start
$(document).on("click", "#start", function (e) {
	e.preventDefault();
	$("#menu").css("display", "none");
	$("#game").css("display", "block");
	$("#word").text(words[counter]);
	$("#counter").text(counter + 1 + " of " + words.length);
});

// next
$(document).on("click", "#next", function (e) {
	e.preventDefault();
	counter++;
	console.log({ counter });
	$("#word").text(words[counter]);
	$("#counter").text(counter + 1 + " of " + words.length);
});

// prev
$(document).on("click", "#prev", function (e) {
	e.preventDefault();
	counter--;
	console.log({ counter });
	$("#word").text(words[counter]);
	$("#counter").text(counter + 1 + " of " + words.length);
});

$(document).on("click", "#start", function (e) {
	e.preventDefault();
	$("#menu").css("display", "none");
	$("#game").css("display", "block");
});

// restart
$(document).on("click", "#restart", function (e) {
	e.preventDefault();
	init();
});

var words = [
	"abalone",
	"cocoa",
	"eclipse",
	"giant",
	"memorandum",
	"accurate",
	"collection",
	"educate",
	"glance",
	"meteorite",
	"actually",
	"comments",
	"element",
	"global",
	"microscope",
	"adapt",
	"completely",
	"elusive",
	"goose",
	"mimic",
	"adequate",
	"conditions",
	"emerged",
	"graph",
	"monitored",
	"anteater",
	"confiscate",
	"emperor",
	"gulped",
	"moral",
	"armor",
	"connective",
	"empower",
	"harmonious",
	"myths",
	"attic",
	"conquering",
	"enamel",
	"Hawaii",
	"narrative",
	"audience",
	"conserve",
	"encouraged",
	"hemisphere",
	"newspaper",
	"audition",
	"constant",
	"engaged",
	"herbivores",
	"nineteenth",
	"bacteria",
	"continue",
	"enigma",
	"heroes",
	"noticeably",
	"bakeries",
	"continuous",
	"equally",
	"hikers",
	"obedience",
	"banquets",
	"contrary",
	"equivalent",
	"hisses",
	"obligatory",
	"barefoot",
	"contribute",
	"erosion",
	"hollow",
	"occurrence",
	"barriers",
	"coral",
	"eucalyptus",
	"humid",
	"ocean",
	"behavior",
	"correspond",
	"everywhere",
	"hyphen",
	"oddly",
	"believed",
	"crust",
	"exchanging",
	"icicle",
	"omnivores",
	"botanist",
	"cuddly",
	"exhale",
	"ideals",
	"operation",
	"bowed",
	"curled",
	"exhaustion",
	"impact",
	"owner",
	"brook",
	"daffodil",
	"explore",
	"impossible",
	"parliament",
	"building",
	"daylight",
	"extinction",
	"individual",
	"passengers",
	"bungalow",
	"decade",
	"extra",
	"instrument",
	"rumor",
	"business",
	"defender",
	"fairer",
	"intimidate",
	"rural",
	"campfire",
	"delicate",
	"famine",
	"irrigation",
	"safety",
	"canoe",
	"delightful",
	"fanaticism",
	"island",
	"saying",
	"capillaries",
	"depths",
	"fictitious",
	"koalas",
	"scientific",
	"captured",
	"detail",
	"flint",
	"larynx",
	"scribe",
	"carousel",
	"digest",
	"foreground",
	"laundromat",
	"sense",
	"cells",
	"disastrous",
	"fundraiser",
	"league",
	"sickle",
	"cerebellum",
	"discovered",
	"future",
	"legend",
	"source",
	"ceremonial",
	"disguising",
	"gallon",
	"lively",
	"speed",
	"chandelier",
	"disgusting",
	"generosity",
	"loose",
	"spherical",
	"climbing",
	"diverse",
	"geographer",
	"magnetism",
	"squawk",
	"clucking",
	"earthquake",
	"geothermal",
	"manipulate",
	"steady",
	"coast",
	"echoes",
	"geyser",
	"marsupial",
	"strapping",
	"strawberry",
	"successor",
	"though",
	"Venice",
	"wisdom",
	"struck",
	"suffix",
	"throne",
	"virtue",
	"wooing",
	"structure",
	"suggested",
	"tissue",
	"waddle",
	"struggling",
	"sunken",
	"tuxedo",
	"wallet",
	"submarine",
	"supply",
	"unkind",
	"warmer",
	"substance",
	"survey",
	"values",
	"weight"
];
