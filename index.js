const quoteText = document.querySelector('.quote'),
authorName = document.querySelector('.author .name'),
quoteBtn = document.querySelector('button');
facebookBtn = document.querySelector('.facebook');
twitterBtn = document.querySelector('.twitter');
instagramBtn = document.querySelector('.instagram');
soundBtn = document.querySelector('.sound');
copyBtn = document.querySelector('.copy');


function randomQuote(){
quoteBtn.classList.add( "Loading");
quoteBtn.innerText = "Loading Quote...";

fetch("https://api.quotable.io/random").then(response => response.json()).then(result =>{
  
 quoteText.innerText = result.content;
 authorName.innerText = result.author;
 quoteBtn.innerText = "New Quote";
 quoteBtn.classList.remove( "Loading");
});
}

twitterBtn.addEventListener("click",() =>{
   let tweetUrl = `https://twitter.com/intent/tweet?=${quoteText.innerText}`;
   window.open(tweetUrl, "_blank");
});

facebookBtn.addEventListener("click",() =>{
  let postUrl = `https://facebook.com/intent/post?=${quoteText.innerText}`;
  window.open(postUrl, "_blank");
});

instagramBtn.addEventListener("click",() =>{
  let postUrl = `https://instagram.com/intent/post?=${quoteText.innerText}`;
  window.open(postUrl, "_blank");
});

soundBtn.addEventListener("click", () =>{
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () =>{
  navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtn.addEventListener('click', randomQuote);