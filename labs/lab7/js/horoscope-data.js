// Variable initialization
var myZodiacSign = "Aquarius";
var myBirthMonth = "February";
var myBirthDay = 14;
var myLuckyNumber = 8.0;
var myHoroscopeDesc = "I'm an Aquarius, an Air sign known for being independent, having fun with friends, and being aloof";
var believeAstrology = false;
var myMoodRating = 4.3;
var benjiMoodRating = 4.25;
var angelMoodRating = 3.4;
var averageMoodRating = (myMoodRating + benjiMoodRating + angelMoodRating) / 2
var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var mySignAccess = signs[1];
var benjiSign = signs[9];
var angelSign = signs[7];
var horoscopeDescriptions = ["Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
];
var myNewHoroDesc = horoscopeDescriptions[6];
horoscopeDescriptions[11] = "I'm gonna be Hookage ya'know! Believe it!"

// DOM methods
document.getElementById('sign').innerHTML = myZodiacSign;

var birthday = document.getElementsByClassName('birthday');
birthday[0].textContent += myBirthMonth + " " + myBirthDay + "th";

var luckyNumber = document.getElementsByClassName('luckyNum');
luckyNumber[0].textContent += myLuckyNumber;

var paragraphs = document.getElementsByTagName('p');
paragraphs[0].textContent = myHoroscopeDesc;
paragraphs[1].innerHTML += '<strong>'+believeAstrology+'</strong>';
paragraphs[2].textContent = "Today's mood rating for Aquarius: " + myMoodRating + " out of 5. The average mood rating of Aquarius, Leo, and Libra is: " + averageMoodRating;

paragraphs[3].textContent = "My zodiac sign is: " + mySignAccess + "\n";
paragraphs[3].textContent += "Aquarius Horoscope: " + myNewHoroDesc;

paragraphs[4].textContent = "Benji's zodiac sign is: " + benjiSign + "\n";
paragraphs[4].textContent += "Libra Horoscope: " + horoscopeDescriptions[11];

paragraphs[5].textContent = "Angel's zodiac sign is: " + angelSign + "\n";
paragraphs[5].textContent += "Leo Horoscope: " + horoscopeDescriptions[4];