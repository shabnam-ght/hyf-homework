const dogYearOfBirth = 2015;
let dogYearFuture = 2045;
let dogYear = (dogYearFuture - dogYearOfBirth) * 7;
let inHumanYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture)
} else {
    console.log("Your dog will be " + inHumanYear + " human years old in " + dogYearFuture)
}