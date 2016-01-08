'use strict';

var poems = {
	'a-prayer': {
		title: 'A Prayer',
		text: 'Write Thy will upon my heart<br/>Though from Thy precepts I depart<br/>Make Thy law a blissful chase<br/>Striving so to win the race<br/>Narrow make my vision now<br/>With one purpose my mind confound<br/><br/>Closer I long to draw to Thee<br/>To know Thee more my only plea<br/>In Thy presence, Light of Light<br/>Dispeller of the gloomy night<br/>Give me rest and bind me near<br/>Afford me joy but make me fear<br/><br/>Thy greatness fills the ocean wide<br/>The storm and waves, Thy word subsides<br/>From Thy hand the sparrow receives<br/>Bounteous gifts to fill its needs<br/>God of mercy, God of grace!<br/>Thy provision floods this blessed place<br/><br/>And here I stand, in raiment rough<br/>Cleanse, purge, refine! Thy grace, enough<br/>To restore Thy fragile vessel here<br/>And scrub the filth so rays appear<br/>Reflecting the beauty of Thy Son,<br/>Until, at last, the victory won.',
		index: 0
	},
	'azalea-blooming': {
		title: 'Azalea Blooming',
		text: 'Azalea blooming<br/>radiant white petals<br/>open wide<br/><br/>Long, thin<br/>beige tipped tongues<br/>reaching afar<br/><br/>Found among<br/>vibrant green leaves<br/>pointing skyward<br/><br/>Pearls unopened<br/>expectant, emerging blossoms<br/>unawakened beauty<br/><br/>Fallen stars<br/>a local constellation<br/>beaming bright<br/><br/>Azalea blooming<br/>all is glory<br/>yet unseen',
		index: 1
	},
	'cirrus': {
		title: 'Cirrus',
		text: 'Cirrus: wispy thoughts<br/>feathered dreams unincarnate<br/>highest heights of bliss<br/><br/>I, yet on the earth<br/>gaze and imagine, flinging<br/>these cirrus on high<br/><br/>My clouds are lifeboats<br/>if the sky is an ocean<br/>roaring, churning, vast<br/><br/>Seeking direction<br/>with scarce a compass to guide<br/>only faith and trust<br/><br/>Sometimes to paddle,<br/>others to drown, but be drowned<br/>in heaven\'s sunshine\u2013<br/><br/>The reason for the sky<br/>my clouds are but steps in faith<br/>guided by His will<br/><br/>Neither eye nor ear<br/>yet beholds what He hath wrought<br/>for those who love Him',
		index: 2
	},
	'coram-deo': {
		title: 'Coram Deo',
		text: 'Through a glass dimly we behold<br/>a God we claim to know<br/><br/>We know Him, describe Him,<br/>speak of His attributes<br/><br/>Yet discontent and accusation<br/>on our lips and in our heart<br/><br/>Prosecute the God we know<br/>the saints cry out \"Why?\"<br/><br/>But if we stood before His face<br/>all blasphemous speech would cease<br/><br/>Hollow complaints uttered<br/>from unclean lips shatter<br/><br/>Swallowed in His overwhelming presence<br/>all but praise and awe melt<br/><br/>Away and before His face<br/>we know who we are<br/><br/>And we shall see Him<br/>for Who He is',
		index: 3
	},
	'forgotten-flowers': {
		title: 'Forgotten Flowers',
		text: 'Forgotten flowers<br/>hidden from view<br/>passed by many<br/>seen by few<br/><br/>Closely listen<br/>your eyes train<br/>forgotten flowers<br/>and I are the same<br/><br/>All treasures of wisdom<br/>in Me are hidden<br/>truth truly beheld<br/>with luster unbidden<br/><br/>The foolish things<br/>now shame the wise<br/>open now<br/>this sinner\'s eyes!<br/><br/>The mind of Christ<br/>reveals all things<br/>from truth it sprouts<br/>uncag\u00E9d wings<br/><br/>I weep for joy<br/>at the mercy I\'ve found<br/>grace is like showers<br/>pouring all around<br/><br/>Watering<br/>forgotten flowers<br/>truth blossoms still<br/>in these last hours<br/><br/>Then we\'ll know<br/>just as we\'re known<br/>until then<br/>this mystery own:<br/><br/>Gaze at what<br/>you cannot see<br/>know the truth<br/>thus be set free<br/><br/>Forgotten flowers<br/>forget no more-<br/>I am the Truth,<br/>the Light, the Door',
		index: 4
	},
	'free-at-last': {
		title: 'Free at Last',
		text: 'Your pain runs deep<br/><br/>Years have not voided<br/>this agonizing grief<br/><br/>I stand with you<br/>in the splintering rain<br/>wrap my arms around<br/><br/>Words are never enough<br/><br/>Save the still small voice<br/>closer than your breath<br/><br/>Death be not proud<br/>swallowed in victory<br/>overcome with a Word<br/><br/>Yet here we stand<br/><br/>Hearts and beings<br/>darkly shrouded<br/><br/>Until free at last<br/>from death we rise<br/>truly awake, truly alive',
		index: 5
	},
	'glorious-things-escape-us': {
		title: 'Glorious Things Escape Us',
		text: 'glorious things escape us<br/>our Utopian vision<br/>unattainable<br/>beyond our reach<br/><br/>glorious things escape us<br/>dreams of another life<br/>peace and happiness<br/>that could be ours<br/><br/>glorious things escape us<br/>known but rarely perceived<br/>excommunicated<br/>by lofty ideals<br/><br/>glorious things escape us<br/>her smile, her eyes<br/>the bird\'s morning fanfare<br/>tunes sweet and free, but soft<br/><br/>glorious things escape us<br/>Lord, that we might live<br/>before Your face<br/>imbibing your presense<br/><br/>glorious things escape us<br/>clear the scales<br/>from our eyes!<br/>that we might see You<br/><br/>glorious things escape us<br/>too deep and wonderful<br/>beheld, but never grasped<br/>glory resounding to eternity',
		index: 6
	},
	'listen': {
		title: 'Listen',
		text: 'Listen<br/>and you will hear a thousand bells tolling<br/>Tolling<br/>all this time that you\'ve been hurrying<br/>Hurrying<br/>and missing what really matters<br/>Matters<br/>are out of your hands anyway<br/>Anyway<br/>maybe we ought to listen',
		index: 7
	},
	'lord-of-the-balance': {
		title: 'Lord of the Balance',
		text: 'Lord of the balance, the scale<br/>too large for me to see- all<br/>is now suspended, set on<br/>the tipping point, the fulcrum.<br/><br/>My life is here determined,<br/>counted out and weighed, its path<br/>set forth. Teach me to number<br/>my days, each one is precious.<br/><br/>All is known to You, my Lord,<br/>and may Your truth direct me<br/>as I wander in this land.<br/>My prayers ascend to Your throne.<br/><br/>My vision is dim and coarse,<br/>Yours vivid and eternal.<br/>Yet I must wager, I<br/>must step into the vast unknown.<br/><br/>There I seek that rich treasure<br/>which You have prepared for me,<br/>its measure and form hidden,<br/>made manifest to the wise.<br/><br/>Lord of the balance, I pray<br/>Your peace and wisdom, that I<br/>may weigh this treasure on Your<br/>scale, and arise joyously.',
		index: 8
	},
	'meditation-on-john-14-6': {
		title: 'Meditation on John 14:6',
		text: 'Thine is the way everlasting<br/>In Thee is met all truth<br/>Life is alive only in Thee<br/><br/>Set my feet upon Thy path<br/>Teach my heart Thy unerring truth<br/>Grant me life abundantly<br/><br/>Thy path is narrow, straight<br/>Eternal, unchanging Thy truth<br/>Thy love is better than life<br/><br/>My feet, keep from turning<br/>My mind, the mind of Christ<br/>My life, Christ- Him crucified<br/><br/>Following with Thy hand to guide<br/>Knowing one all-sufficient Truth<br/>So let me live in Thee alone',
		index: 9
	},
	'my-birds-they-sing-for-glory': {
		title: 'My Birds, they Sing for Glory',
		text: 'I met a man who told me<br/>the birds don\'t sing for glory<br/>it\'s only explainable, natural<br/>it\'s all very factual<br/><br/>Maybe what we hear<br/>in our insolent lack of fear<br/>isn\'t what is real and true<br/>isn\'t what is due<br/><br/>My birds, they sing for glory<br/>their song a wonderful story<br/>their breath is His<br/>each joyous pitch<br/><br/>If I could be such a vessel<br/>a bird on a greeny trestle<br/>His breathe my own<br/>what mysteries known<br/><br/>The wise man did not err<br/>his words rightly declare:<br/>fear the Lord, then wisdom know<br/>knowing Him, understanding grows<br/><br/>Now judge aright, if you can<br/>the world is His, in His hand<br/>sing His song, His breath breathe<br/>His glory know, to Him cleave',
		index: 10
	},
	'noon': {
		title: 'Noon',
		text: 'Noon<br/>All is silent<br/>But there\'s a timeless ringing<br/>Growing louder in my ears.<br/>Wedged between morning and evening<br/>An instant and an eternity.<br/>Looking down from his zenith<br/>The sun himself drives this great wedge<br/>Between the hemispheres.<br/>Looking back, looking ahead<br/>On the brim of something glorious<br/>Illumination begetting direction.<br/>And here we find ourselves<br/>Lost in the median, the in-between<br/>The transcendant moment<br/>That defines those to come.<br/>\tNoon',
		index: 11
	},
	'peace-my-soul': {
		title: 'Peace, My Soul',
		text: 'The rivers thunder<br/>The cedars shake<br/>Peace, my soul.<br/><br/>The mountains thrown<br/>Into the heart of the sea<br/>Peace, my soul.<br/><br/>All once familiar<br/>Slipping away<br/>Peace, my soul.<br/><br/>Betrayed, abandoned,<br/>Forlorn, destitute<br/>Peace, my soul.<br/><br/>Full of questions<br/>And nagging uncertainty<br/>Peace, my soul.<br/><br/>Wavering faith<br/>Staggering hope<br/>Peace, my soul.<br/><br/>Men cry \"Peace, peace\"<br/>But there is no peace<br/>Peace, my soul.<br/><br/>Only in Chrst risen<br/>Christ reigning forever<br/>Peace, my soul!',
		index: 12
	},
	'seasons': {
		title: 'Seasons',
		text: 'A snowflake lands on the arm<br/>Of my jacket and suddenly melts<br/>Into a dew-drop of spring.<br/>Soon blinded by golden rays<br/>Of blissful sunbeam, and then the wonderful<br/>Tingle of autumn breeze carrying leaves afar.<br/>Melter of cold hearts, true source<br/>Of light and life, how creation sings<br/>Your song of redemption! The seasons,<br/>Your beautiful canvas of death and rebirth,<br/>Inspire this, my rhapsody of praise.',
		index: 13
	},
	'some-moments': {
		title: 'Some Moments',
		text: 'It occurs to me<br/>control is mostly an illusion<br/>Some moments<br/>are an elusive allusion<br/>Reminders<br/>of my finity<br/><br/>They say<br/>forge your own path<br/>Your destiny<br/>is in your own hands<br/>Make yourself<br/>transcend your circumstance<br/><br/>But perhaps<br/>circumstance is providence<br/>All the best<br/>things happened as tangents<br/>Divergences<br/>from my fine-grained plan<br/><br/>Our attempts<br/>to arrange, to order, falter<br/>Only betraying<br/>that we are powerless<br/>Our consciousness<br/>is a grasping at shadows<br/><br/>I abdicate<br/>my throne, my fate, my life<br/>Instead bowing<br/>to a profound sense of reality<br/>What is man<br/>that You are mindful of him<br/><br/>Each day<br/>is a gift given anew<br/>Both mysterious<br/>and tragic and wonderful<br/>Glory unseen<br/>a design beyond my own making<br/><br/>All is well<br/>and all shall be well<br/>Some moments<br/>are an elusive allusion<br/>Reminders<br/>of our infinity',
		index: 14
	},
	'the-last-song-of-the-tuckerbird': {
		title: 'The Last Song of the Tuckerbird',
		text: 'The night breeze blows gently<br/>under a sky clear and cold<br/>whispering through the trees<br/>waiting to behold<br/><br/>High in a willow-top<br/>a bird, old, tattered and frail<br/>perches, and staggers<br/>her wings cannot take sail<br/><br/>The time is come<br/>with but a moment left<br/>one song to sing<br/>this parting breath<br/><br/>O anthem of anthems!<br/>what ecstatic praise-<br/>a rhapsody, an ode of joy<br/>to her Maker, Lifegiver of her days<br/><br/>He whose eye never left her<br/>now hears her last hymn<br/>grieves in her parting<br/>in this world full of sin<br/><br/>How creation doth groan<br/>but praises Him best<br/>trusting, never doubting<br/>for He watches her nest<br/><br/>So may my faith<br/>a song, a testament be<br/>to the One Whose eye<br/>will never leave me<br/><br/>And when death is nigh<br/>let my lips sustain<br/>one final utterance<br/>though spoken through pain:<br/><br/>\"My Lord and my God,<br/>to Thee be all praise!<br/>In Thee do I trust,<br/>now and always!\"',
		index: 15
	},
	'the-light-before-the-dawn': {
		title: 'The Light before the Dawn',
		text: 'Someday I\'ll no longer be<br/>The already, the not yet<br/>Trans-fixed between realities<br/>United in a forever moment<br/><br/>This evanescent juxtaposition<br/>Eclipsed by eternity<br/>This temporary condition<br/>Abandoned with alacrity<br/><br/>Our life is no dream<br/>But perhaps it should become one<br/>Things aren\'t always as they seem<br/>Nor like they will become<br/><br/>Even now, with unveiled faces<br/>We glimpse this abundant glory<br/>This world is full of traces<br/>Unfolding the grandest story<br/><br/>Like stars breaking through<br/>The dome of the night<br/>This glory, known anew<br/>Grows ever more bright<br/><br/>So now we wait<br/>And see the light before the dawn<br/>This is no mere fate<br/>But the most beautiful song',
		index: 16
	},
	'this-chasm-of-unknowing': {
		title: 'This Chasm of Unknowing',
		text: 'This chasm of unknowing<br/>Runs deep through my soul<br/>My thoughts tumble in<br/>And I wonder if I\'ll ever<br/>See them again<br/><br/>The black abyss<br/>Painful and riveting<br/>Who knows when I fell in<br/>Where I\'m going<br/>Or if I\'ll get back again<br/><br/>What do I do?<br/>And what do I say?<br/>Where is the light<br/>In this empty place?<br/>Lord, show me the way<br/><br/>If you won\'t open my eyes<br/>Then take my hand<br/>Or call to me<br/>Call this poor lost wretch<br/>And make him trust<br/><br/>Because maybe I\'ll never know<br/>And maybe I don\'t need to<br/>The chasm? A mirage<br/>In this desert of self<br/>A desert with but one stream<br/><br/>Bring me again<br/>To that cold clear stream<br/>Of Your loving-kindness<br/>Drown me<br/>And teach me to trust, until<br/><br/>A mountain of faith<br/>Swells from my soul<br/>And every gift is good<br/>My unbelief, purged<br/>My eyes on You',
		index: 17
	},
	'this-path-ive-tread': {
		title: 'This Path I\'ve Tread',
		text: 'This path I\'ve tread<br/>for many a year<br/>has not yet lead<br/>to somewhere clear-<br/><br/>Some mountaintop<br/>where I may see<br/>the journey\'s stop<br/>my destiny<br/><br/>The sun will be<br/>my help and stay<br/>the stars guide me<br/>ere breaks the day<br/><br/>To where I go<br/>and what\'s in store<br/>I do not know<br/>but I will soar<br/><br/>One day upon<br/>an eagle\'s wings<br/>my travels done<br/>my heart will sing<br/><br/>And fully view<br/>this path I\'ve tread<br/>now knowing true<br/>these words You\'ve said:<br/><br/>\"From first to last<br/>your steps I knew<br/>each day that passed<br/>I walked with you<br/><br/>Your burden, mine-<br/>for mine is light<br/>insist not on<br/>walk not by sight<br/><br/>Call now my name<br/>for I am near<br/>your cry, your pain<br/>my heart will hear\"<br/><br/>So with each breath<br/>my weary soul<br/>eclipses death<br/>and is made whole<br/><br/>Not by my deeds<br/>but by His words<br/>this is my creed:<br/>His promise heard',
		index: 18
	},
	'to-a-friend': {
		title: 'To a Friend',
		text: 'I\'m not sure if you\'ve been loved before, truly loved<br/>It\'s quite unlike anything else, unmistakable<br/><br/>You are desperate, as are we all<br/>To be loved, to be truly known<br/><br/>And perhaps I\'ve been a vessel of sorts for love<br/>A listener, a companion in an uncertain time<br/><br/>With me you need no veneer, no facade<br/>To mask yourself, no proof of your worth<br/><br/>For I love you as you are<br/>My love penetrates your facade<br/><br/>And flows about your downcast spirit<br/>Chanting a song of hope<br/><br/>That your heart might also be a fount<br/>flowing with a love free and pure<br/><br/>For we cannot love unless we are loved first<br/>And my love is but a meager offering<br/><br/>A drop from a waterfall which drowned me<br/>And now flows from within me<br/><br/>A love not of my own device-<br/>Nay, it is too glorious and unconditional<br/><br/>My friend, you have not won my love<br/>Nor can you ever win or lose it<br/><br/>You can but receive it, but never<br/>Can you receive it without giving it again<br/><br/>Love is not a stagnant pond, but a flowing stream<br/>That fills the sea, and is itself filled by the sky<br/><br/>Oh that you would know this love!<br/>Come and taste my Master\'s water<br/><br/>Thirst never more! Be filled<br/>And plunged in the life-giving stream<br/><br/>Drowned and raised again by a love imperishable<br/>A love that knows neither beginning nor end',
		index: 19
	},
	'twelve-eleven': {
		title: 'Twelve Eleven',
		text: 'Twelve eleven<br/>all this imperfection<br/>all these burdens<br/><br/>Lost inside myself<br/>unable to imagine<br/>the great and wonderful<br/><br/>When did I lose sight<br/>and stop noticing<br/>what makes life worth living<br/><br/>Hollow, blind,<br/>consumed by the urgent<br/>sinking in the maelstrom<br/><br/>Banish my empty strivings<br/>chasings after the wind<br/>all but holy pursuit<br/><br/>Grant a moment raptured<br/>freed from myself<br/>a simple sparrow<br/><br/>Until, overwhelmed<br/>and still in Your presence<br/>all is joy<br/><br/>Joy, unspeakable joy<br/>Bring me, a child <br/>to Your feet<br/><br/>Search me, know my heart<br/>cleanse and fill me<br/>lead me in the way everlasting',
		index: 20
	},
	'waiting': {
		title: 'Waiting',
		text: 'Waiting<br/>Sitting<br/>Counting<br/>Wondering<br/>Musing<br/>Hoping<br/>Dreaming<br/>Fretting<br/>Counting again<br/>Wishing<br/>Questioning<br/>Pondering<br/>Throwing hands up<br/>Surrendering<br/>End of Self<br/>Trusting',
		index: 21
	},
	'waking': {
		title: 'Waking',
		text: 'I woke in a field<br/>one summer\'s day<br/>to find that it all<br/>had gone away<br/><br/>I climbed in a tree<br/>one sunny afternoon<br/>whistled with the birds<br/>and knit a cocoon<br/><br/>I slept in a trance<br/>one dark summer\'s night<br/>dreamed of home as<br/>the stars shone bright<br/><br/>I woke once again<br/>one shining morn<br/>to find that I<br/>had been reborn',
		index: 22
	},
	'winter-sun': {
		title: 'Winter Sun',
		text: 'The shadows, long<br/>inside my soul<br/>dark guilt, despair<br/>this shattered whole<br/><br/>This hollow heart<br/>I dare not sound<br/>for fear of what<br/>may thus be found<br/><br/>I hide my deeds<br/>I\'m not hidden<br/>winter sun gives<br/>light unbidden<br/><br/>Exposing what<br/>my heart does fill<br/>a sinner once<br/>a sinner still<br/><br/>Then deep a voice<br/>resounding strong:<br/>look not upon<br/>yourself too long<br/><br/>But gaze at Him<br/>who knew no sin<br/>humble yourself<br/>and enter in<br/><br/>The prodigal<br/>is now a son<br/>the battle is<br/>already won<br/><br/>Speak not of sin<br/>without His name<br/>shun not His grace<br/>your essence claim<br/><br/>Rejoice in Him<br/>Who knows you well<br/>when shadows cast<br/>His mercy tell<br/><br/>In Christ, the Son<br/>we fearless stand<br/>the night, far gone<br/>the day, at hand',
		index: 23
	}
};

// Impose an order on the poems object
var poemKeyIndexMap = [
	'a-prayer',
	'azalea-blooming',
	'cirrus',
	'coram-deo',
	'forgotten-flowers',
	'free-at-last',
	'glorious-things-escape-us',
	'listen',
	'lord-of-the-balance',
	'meditation-on-john-14-6',
	'my-birds-they-sing-for-glory',
	'noon',
	'peace-my-soul',
	'seasons',
	'some-moments',
	'the-last-song-of-the-tuckerbird',
	'the-light-before-the-dawn',
	'this-chasm-of-unknowing',
	'this-path-ive-tread',
	'to-a-friend',
	'twelve-eleven',
	'waiting',
	'waking',
	'winter-sun'
];

var activePoemIndex = null;

function getParameterByName(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

$(function() {
	var switchActive = function(poemKey) {
		// Hide home content if it was visible
		$('#homeContent').fadeOut(600);

		// Fade out old poem text, fade in new poem text
		$('#poemContent').fadeOut(600, function() {
			$('#poemTitle').html(poems[poemKey].title);
			$('#poemText').html(poems[poemKey].text);

			$('#poemContent').fadeIn(1000);
		});

		activePoemIndex = poems[poemKey].index;

		// Update url so this poem can be linked to
		history.pushState({}, '', '?poem=' + poemKey);
	};

	// On load, switch to poem key in parameter if one present
	var poemUrlParameter = getParameterByName('poem');
	if(poems.hasOwnProperty(poemUrlParameter)) {
		setTimeout(function() { // Counteract fade in switchActive so #homeContent doesn't flash on the screen right before we switch
			$('#homeContent').css('visibility', 'visible');
		}, 600);
		switchActive(poemUrlParameter);
	} else {
		$('#homeContent').css('visibility', 'visible');
	}

	// On click of title "UNSEEN GLORY", show home content and hide poem content
	$('#unseenGloryTextContainer').click(function() {
		$('#poemContent').fadeOut(600, function() {
			$('#homeContent').fadeIn(1000);

			activePoemIndex = null;

			// Update url to homepage
			history.pushState({}, '', '/');
		});
	});

	var colorClasses = [
		'#ff6600',
		'#00aa00',
		'#2E9AFE'
	];

	// Random color on hover; wish could do this with css class rather than having the colors hard-coded above, but wasn't working
    $('.poem-link, #poemListIcon').hover(function(event){ // Mouse in change to random of three theme colors
		// Choose a random color
		var colorClassIndex = Math.floor(Math.random() * colorClasses.length);

		// Apply it to the link
		$(event.target).css('color', colorClasses[colorClassIndex]);
	},
	function(event) { // Mouse out change back to white
		$(event.target).css('color', '#FFF');
	});

	// On click of poem link switch to that poem
	$('.poem-link').click(function(event) {
		// Get the poem key
		var poemKey = $(event.target).attr('data-key');

		switchActive(poemKey);

		// Hide the table of contents and scroll to the top
		$('#tableOfContents').collapse('hide');
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});

	// Left arrow navigation - switch to previous poem
	$('#leftArrow').click(function() {
		if(activePoemIndex === null || activePoemIndex === 0) {
			switchActive(poemKeyIndexMap[poemKeyIndexMap.length - 1]);
		} else {
			switchActive(poemKeyIndexMap[activePoemIndex - 1]);
		}
	});

	// Right arrow navigation - switch to next poem
	$('#rightArrow').click(function() {
		if(activePoemIndex === null || activePoemIndex === poemKeyIndexMap.length - 1) {
			switchActive(poemKeyIndexMap[0]);
		} else {
			switchActive(poemKeyIndexMap[activePoemIndex + 1]);
		}
	});
});
