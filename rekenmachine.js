
        function plust()
        {
            alert("plus functie gestart");
            var wx = parseFloat(document.getElementById('X').value);
            var wy = parseFloat(document.getElementById('Y').value);
            var uit = wx + wy;

            alert("Functie Plus werkt. wx="+wx+" wy="+wy+" uit ="+uit);
            if(!isNaN(wx)&& !isNaN(wy)) {
              document.getElementById('uitkomst').innerHTML='Uitkomst is: ' + uit;
              alert("resultaat getoond");
            }
            else {

              alert("U moet X en Y invullen");
            }
          }

        function min() {
            var wx = parseFloat(document.getElementById('X').value);
            var wy = parseFloat(document.getElementById('Y').value);
            var uit = wx - wy;
            if(!Isnan(wx)&& !Isnan(wy))
            document.getElementById('uitkomst').innerHTML='Uitkomst is: ' + uit;
        }
        else {
      alert ("Je moet X en Y invullen") ;
        }


        function deel() {
            var wx = parseFloat(document.getElementById('X').value);
            var wy = parseFloat(document.getElementById('Y').value);
            if (wy == 0){
                alert ("niet door nul delen");

            }

            else{
                var uit = wx / wy;
                document.getElementById('uitkomst').innerHTML='Uitkomst is:' + uit;
            }


        }


        function keer() {
            var wx = parseFloat(document.getElementById('X').value);
            var wy = parseFloat(document.getElementById('Y').value);
            var uit = wx * wy;
            document.getElementById('uitkomst').innerHTML='Uitkomst is:' + uit;
        }


        function wortel() {
            var wx = parseFloat(document.getElementById('X').value);
            var uit = Math.sqrt(wx);
            document.getElementById('uitkomst').innerHTML='Uitkomst is:' + uit;
        }


        function macht() {
            var wx = parseFloat(document.getElementById('X').value);
            var wy = parseFloat(document.getElementById('Y').value);
            var uit = Math.pow(wx,wy);
            document.getElementById('uitkomst').innerHTML='Uitkomst is:' + uit;
        }


        function kwadraat() {
            var wx = parseFloat(document.getElementById('X').value);
            var wy = parseFloat(document.getElementById('Y').value);
            var uit = wx*wx;
            document.getElementById('uitkomst').innerHTML='Uitkomst is:' + uit;
        }


       function tafel(){

           var wx = parseFloat(document.getElementById('X').value)
           for(var teller = wx; teller <=10; teller++) {
               document.getElementById('uitkomst').innerHTML +=
                   teller + 'maal' + getal + ' = ' + teller * getal + '<br/>';
           }
       }
