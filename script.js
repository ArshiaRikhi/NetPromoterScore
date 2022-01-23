let rating = document.querySelectorAll('.rating');
let showRate = document.querySelector('.rating-value');

for(let v = 0; v < rating.length; v++){
  rating[v].addEventListener('click', function(){
    const myJSON = [v]
    const myArray = JSON.parse(myJSON);
    newval = myArray / myArray.length;
  });
  return newval;
}

//We were unable to figure out how to actually calculate the NPS
//with javascript and with limited time we put more of our focus into
//the html and css but we genuinely like this idea so we think we will try
//and figure out how to code this properly even after the hackathon ends
