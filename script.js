var sound = new Howl({
  src: ["https://upload.wikimedia.org/wikipedia/en/3/39/Metallica_-_Enter_Sandman.ogg"]
})

$(".myGrid div").each((index, element) => {
    index += 1; //1 indexed
    element = $(element);
    element.css("grid-row", index);
    if(index % 2 == 0){
      element.css("grid-column", 1);
    }
    else {
      element.css("grid-column", 2);
    }
  });

  let x = false;

  $(document).ready(function(){
    $(".myGrid div").click(function(){
      if (x == false) {
        sound.play();
        x = true;
      }
      else if (x == true) {
        sound.stop();
        x = false;
      }

    });
  });


  AOS.init();