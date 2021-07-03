const dogYearOfBirth = 2015;
const dogYearFuture = 2045;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const inHumanYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture)
} else {
    console.log("Your dog will be " + inHumanYear + " human years old in " + dogYearFuture)
}