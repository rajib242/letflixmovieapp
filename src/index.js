import React from "react";
import ReactDOM from "react-dom";
import Card from './Card'
import './index.css'

ReactDOM.render(
<>

  <h1 className="heading_style"> Letflix Top Movies List </h1>

  <Card 
    imgsrc="https://wallpapercave.com/dwp1x/wp12315791.jpg"
    title="A Netflix Original Series"
    sname="Tu Jhoothi Main Makkaar"
    link="https://www.netflix.com/in/title/81382254?source=35"
  />
  <Card
      imgsrc="https://wallpapercave.com/dwp1x/wp11866960.jpg"
      title="A Netflix Original Series"
      sname="Mission Majnu"
      link="https://ww16.watchmovierulz.to/mission-majnu-2023-hindi/full-movie-watch-online-free-5832.html"

  />
  <Card
      imgsrc="https://wallpapercave.com/dwp1x/wp8328157.jpg"
      title="A Netflix Original Series"
      sname="RRR"
      link="https://www.netflix.com/in/title/81476453?source=35"
  />

  <Card
      imgsrc="https://wallpapercave.com/dwp1x/wp6188503.jpg"
      title="A Netflix Original Series"
      sname="Extraaction"
      link="https://www.netflix.com/in/title/80230399?source=35"
  />

</>  
  ,document.getElementById("root"));

