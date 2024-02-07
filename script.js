
document.addEventListener('DOMContentLoaded', function() {
    // Your toggle menu code here
    
// firstly i am using Ajax request to fetch the json data
//  I create a new xmlhttp-request object

let http = new XMLHttpRequest();
// I prepare the request with the open method
http.open('GET', 'data.json', true);
// i will send the request
http.send();
// i have to catch the response.
// i need to check the readystate and status properties
http.onload = function() {
    if(this.readyState == 4 && this.status == 200){
        //if the request is successful and status is ok i will parse the data and convert them to js array
        let theCountryData = JSON.parse(this.responseText);
        // i have to loop through the javascript array and in every iteration i add the html template to the output variable.
        populateCountryCards(theCountryData);

    }
};

function populateCountryCards(theCountryData) {
    let output = "";
    for (let country of theCountryData) {
        output += `
            <div class="country-card">
                <div class="images">
                    <img src="${country.flags.png}" alt="">
                </div>
                <div class="content">
                    <h2 class="country-name">${country.name}</h2>
                    <p><span>Population:</span> ${country.population}</p>
                    <p><span>Region:</span> ${country.region}</p>
                    <p><span>Capital:</span> ${country.capital}</p>
                </div>
            </div>
        `;
    }
    document.querySelector('.country-container').innerHTML = output;
    const countryCards = document.querySelectorAll('.country-card');
    console.log("Adding click listener to card:");
    countryCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log("Card clicked:");
            displayCountryInfo(card);
        });
    });
    function displayCountryInfo(card) {
        const countryName = card.querySelector('.country-name').textContent;
        const selectedCountry = theCountryData.find(country => country.name === countryName);
        const borderCountries = Array.isArray(selectedCountry.borders) && selectedCountry.borders.length > 0 ? selectedCountry.borders.join(', ') : 'None';
        let detailedInfoContainer = `
            <div class="card-cont">
                <div class="country-card-cont">
                    <div class="images">
                        <img src="${selectedCountry.flags.png}" alt="">
                    </div>
                    <div class="content content-cont">
                        <div class="cont">
                            <div class="cont-1">
                                <h2 class="country-name">${selectedCountry.name}</h2>
                                <p><span>Native Name:</span> ${selectedCountry.nativeName}</p>
                                <p><span>Population:</span> ${selectedCountry.population}</p>
                                <p><span>Region:</span> ${selectedCountry.region}</p>
                                <p><span>Sub-Region:</span> ${selectedCountry.subregion}</p>
                                <p><span>Capital:</span> ${selectedCountry.capital}</p>
                            </div>
                            <div class="cont-2">
                                <p><span>Top level Domain:</span> ${selectedCountry.topLevelDomain}</p>
                                <p><span>Currencies:</span> ${selectedCountry.currencies.map(currency => currency.name).join(', ')}</p>
                                <p><span>Languages:</span> ${selectedCountry.languages.map(language => language.name).join(', ')}</p>
                            </div>
                        </div>
                        <div class='border-cont'>
                            <p><span>Border Countries:</span> ${borderCountries}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.querySelector('.country-container').style.display = 'none';
        document.querySelector('.country-overall-container').style.display = 'none';
        document.querySelector('.card-container').style.display = 'block';
        document.querySelector('.card-each-cont').innerHTML = detailedInfoContainer;
    };
    function populateCountryCardsByContinent(theCountryData, continent) {
        let filteredCountries;
        if (continent === 'all') {
            filteredCountries = theCountryData;
            
        } else {
            filteredCountries = theCountryData.filter(country => country.region === continent); // If "all" is selected, show all countries
        }
        // console.log(filteredCountries); 
        populateCountryCards(filteredCountries);
    }
    
    
    // Event listener for continent select
    document.getElementById('continent-select').addEventListener('change', function(e) {
        console.log(e);
        const selectedContinent = this.value; 
        // console.log('it is working:', e)
        populateCountryCardsByContinent(theCountryData, selectedContinent);
    });
};   
    // code to show each card content which clicked
    


// Function to display detailed information for the selected country


  



// function to select the cards based on the continent


});
     













// MODE MENU
const navImage = document.querySelector('.mode-menu');
const allElement = document.querySelectorAll('*');

    navImage.addEventListener('click', (e) => {
        console.log(e);
        if (document.body.classList.toggle('light')) {
            console.log(e);
            document.querySelector('.nav-container').style.setProperty('background', 'black');
            document.body.style.setProperty('color', '#0F0F0F');
            document.body.style.setProperty('BackgroundColor', '#0F0F0F');
            document.querySelector('.nav-image img').src ='./images.png';
            document.querySelector('.mode-text').textContent = 'Light mode';
            allElement.forEach(element => {
                element.style.backgroundColor = '#0F0F0F';
                element.style.color = '#fff';
            });
            console.log(e);
        } else {
            document.querySelector('.nav-container').style.backgroundColor = '#FFF';
            document.body.style.setProperty('color', 'black');
            document.querySelector('.nav-image img').src ='./light-mode-10979.png';
            document.querySelector('.mode-text').textContent= 'Dark mode';
            allElement.forEach(element => {
                element.style.backgroundColor = '#FFF';
                element.style.color = '#0F0F0F';
            });
        console.log(e);
        }
    });


    document.querySelector('.button-cont').addEventListener('click', () =>{
        document.querySelector(' .country-container').style.display = 'grid';
        document.querySelector(' .country-overall-container').style.display = 'block';
        document.querySelector('.card-container').style.display = 'none';
    });


















