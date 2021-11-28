import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
<!DOCTYPE html>
<html>
<head>

<link rel="stylesheet" href="styles.css">
<title> Hack'sBack - Official </title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500&display=swap" rel="stylesheet">
<meta name=viewport content="width=device-width, initial-scale=1.0"/>
<link rel="icon" href="HacksBackLogo.jpg" type="image/x-icon">
<!-- Secular One -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">
<!-- font-family: 'Secular One', sans-serif; -->
<!--Secular One End-->
<!-- Flow Circular - Lines - Unloaded Text -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Flow+Circular&display=swap" rel="stylesheet">
<!-- font-family: 'Flow Circular', cursive; -->
<!-- Flow Circular End -->
<!-- Balsamiq Sans -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
<!-- font-family: 'Balsamiq Sans', cursive; -->
<!-- Balsamiq Sans End -->

</head>



<body>
<div class="WelcomeTitlr"><br><br><br/><div class="title1">Hack'sBack</div><br><br><br><br></div>


<div class="WhoAreWe">Who Are We?</div>
<div class="WhoAreWeText">We Are A Team That Create/Store's Game Scripts, Injector, Glitch's etc. For Game's</div><br/>

<a href="#" download><button type="button" class="button1">Download Archive</button></a>

<a href="https://discord.gg/j6GDbs3nXE"><button type="button" class="button2">Discord Server</button></a>


</body>

<style>

        .WhoAreWeText {
                margin-left: 28.3%;  

        }
        .WhoAreWe { 
                margin-bottom: 35px;
                margin-left: 43.5%;
                font-size: 1.5em;  
        }
        .WelcomeTitlr {
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
background-image: url("hackerwallpaper.jpg");
color: white;
text-align: center;
font-size: 2.5em;
        }
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500&display=swap');
body {
font-family: 'Outfit', sans-serif;
background-color: #000000;
color: white;
}

.button1:hover {
color: white;
background-color: black;
}
.button2:hover {
color: white;
background-color: black;
}
.button2 { 
position: absolute;
border-radius: 5px;
margin-left: 42.24%;
border: solid 1px black;
width: 12%;
height: 3%; 
margin-top: 38px;
padding: 0%;
position: absolute;
background-color: white;
font-family: 'Balsamiq Sans', cursive;
}
.button1 {
position: absolute;
border-radius: 5px;
margin-left: 41.8%; 
margin-top: 15px;
border: solid 1px black;
width: 13%; 
height: 3%;
padding: 0%;
position: absolute; 
background-color: white;
font-family: 'Balsamiq Sans', cursive;  
}

.title1:hover{
animation-name: title1bg;
animation-iteration-count: infinite; 
animation-duration: 3.5s;
}
.title1 {
background-color: black;
font-family: 'Secular One', sans-serif; 
padding: 0%;
font-size: 1em;
color: white;
text-align: center;
border: solid 1px black;
width: 16%; 
text-align: center; 
margin-left: 40%;
margin-top: 10px; 
}
@keyframes title1bg{
0% { color: black; background-color: black; }
10% { color: gray; background-color: ; } 
15% { color: pink; background-color: black; }
20% { color: #FF0000; background-color: black; }
35% { color: #FF8000; background-color: black; }
40% { color: ; background-color: black; }
45% { color: ; background-color: black; }
50% { color: ; background-color: black; }
55% { color: ; background-color: black; }
60% { color: ; background-color: black; }
65% { color: ; background-color: black; }
70% { color: ; background-color: black; }
75% { color: ; background-color: black; }
80% { color: #FF8000; background-color: black; }
85% { color: #FF0000; background-color: black; }
90% { color: pink; background-color: black; }
95% { color: gray; background-color: ; }
100% { color: black; background-color: black; }
}




</style>

</html>
  )
}
