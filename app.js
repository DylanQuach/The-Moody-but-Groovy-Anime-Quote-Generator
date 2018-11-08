var quotes = [
  "Nico Nico Ni!", "BAKA BAKA!", "I'll break your Nico Nico Kneecaps.", "Oh. Watashi Kokoro. Watshi Tamashii.", "Life is not Daijobou", 
  "Nani the heck",
  "I'm Ramen-Sexual", "SASAGEYO SASAGEYO!", "BAKA MONA GA!", "SEKAI ICHI!", "SONO CHI NO SADAME!", "SORE WA CHI GAU YO!",
  "SHIZAAAAAAAAA", "Right in the Kokoro...", "To be Continued..."
]


function newquote() {
  var randNum = Math.floor(Math.random() * (quotes.length))
  document.getElementById('quotedisplay').innerHTML = quotes[randNum]
}