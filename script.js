document.getElementById("reload").addEventListener("click",app)

let conf = location.href.split("#")
let lang = (conf[1]) ?  conf[1] : "fr";
let topic = (conf[2]) ?  conf[2] : "Screenplay";
let dataURL =  `l18n/${topic}/strings_${lang}.json`;

app()


function app() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let slotsData = JSON.parse(this.responseText)
        let slot1 = new RoundArray(slotsData.slot1)
        let slot2 = new RoundArray(slotsData.slot2)
        let slot3 = new RoundArray(slotsData.slot3)
        let slot4 = new RoundArray(slotsData.slot4)
        let slot5 = new RoundArray(slotsData.slot5)

        anime({
          round: 1,
          easing: 'easeInCubic',
          backgroundColor: [
            {value: '#FFF'}, // Or #FFFFFF
            {value: 'rgb(255, 0, 0)'},
            {value: 'hsl(100, 60%, 60%)'}
          ],
          update: function() {
            let el = document.querySelector('#slot1');
            el.innerHTML = "<span>"+slot1.next() + "</span>";
          }
        });

        anime({
            round: 1,
            easing: 'easeInCubic',
            delay:1000,
            update: function() {
              let el = document.querySelector('#slot2');
              el.innerHTML = "<span>"+slot2.next()+"</span>";
            }
          });
          
        anime({
            round: 1,
            easing: 'easeInCubic',
            delay:1000,
            update: function() {
              let el = document.querySelector('#slot3');
              el.innerHTML = "<span>"+slot3.next()+"</span>";
            }
          });
                  
          anime({
            round: 1,
            easing: 'easeInCubic',
            delay:1000,
            update: function() {
              let el = document.querySelector('#slot4');
              el.innerHTML = "<span>"+slot4.next()+"</span>";
            }
          });

        anime({
            round: 1,
            easing: 'easeInCubic',
            delay:1800,
            update: function() {
              let el = document.querySelector('#slot5');
              el.innerHTML = "<span>"+slot5.next()+"</span>";
            }
        });

      }
    };
    xhttp.open("GET", dataURL, true);
    xhttp.send();
  }


class RoundArray {
    constructor(arr){
        this.array =  arr
        this.index = 0
        this.setStart()
    }

    next(){
        this.index++
        if(this.index == this.array.length){
            this.index = 0
        }
        
        return this.array[this.index]

    }

    setStart(){
        this.index = randomInt(0, this.array.length-1)
    }
}



randomInt = (min, max) => Math.round(Math.random() * (max - min) + min);
