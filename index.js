var randomnumber1 = Math.floor(Math.random()* 6)+1;

var randomimagessource = "images/dice" + randomnumber1 + ".png" ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagessource);


var randomnumber2 = Math.floor(Math.random()* 6)+1;

var randomimagessource2 = "images/dice" + randomnumber2 + ".png" ;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimagessource2);

if(randomimagessource>randomimagessource2)
{
    document.querySelector("h1").innerHTML="<em>PLAY 1 WINS <em>"
}

else if(randomimagessource2>randomimagessource)
{
    document.querySelector("h1").innerHTML="<em>PLAY 2 WINS <em>"
}

else
{document.querySelector("h1").innerHTML="<em>MATCH DRAW <em>"}