window.onload = function(){
    $("#search").click(search)
    $("#getFeetInMile").click(getFeetInMile)
    $("#calculateFeetFromMiles").click(calculateFeetFromMiles)
    $("#calculateCircumference").click(calculateCircumference)
}

$(document).ready(function() { 'use strict';
});

function search() {
    console.log('search')
}
function getFeetInMile() {
    console.log('Miles')
    const userMiles = document.getElementById('userInput').value;
    fetch('/getFeetInMile' + '?miles=' + userMiles)
        .then((response) => response.json())
        .then((response) => {
            const displayArea = document.getElementById('displayArea');
            displayArea.innerHTML = JSON.stringify(response, null, 4);
        })
        .catch(ex => {
            console.log(ex);
        });

}
function calculateFeetFromMiles() {
    console.log('Feet')
    const userMiles = document.getElementById('userInput').value;
    fetch('/calculateFeetFromMiles' + '?miles=' + userMiles)
        .then((response) => response.json())
        .then((response) => {
            const displayArea = document.getElementById('displayArea');
            displayArea.innerHTML = JSON.stringify(response, null, 4);
        })
        .catch(ex => {
            console.log(ex);
        });
}
    function calculateCircumference() {
        const calculateCircumference = document.getElementById('userInput').value;
        fetch('/calculateCircumference' + + '?circumference=' + calculateCircumference)
            .then((response) => response.json())
            .then((response) => {
                const displayArea = document.getElementById('displayArea');
                displayArea.innerHTML = JSON.stringify(response, null, 4);
            })
            .catch(ex => {
                console.log(ex);
            });
    }





