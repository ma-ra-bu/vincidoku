  var show_sudoku=false;
  var leeren = function(input){
    input = [];
    document.querySelector('#field11').value='';
    document.querySelector('#field12').value='';
    document.querySelector('#field13').value='';
    document.querySelector('#field14').value='';
    document.querySelector('#field15').value='';
    document.querySelector('#field16').value='';
    document.querySelector('#field17').value='';
    document.querySelector('#field18').value='';
    document.querySelector('#field19').value='';
    document.querySelector('#field21').value='';
    document.querySelector('#field22').value='';
    document.querySelector('#field23').value='';
    document.querySelector('#field24').value=''; 
    document.querySelector('#field25').value=''; 
    document.querySelector('#field26').value=''; 
    document.querySelector('#field27').value=''; 
    document.querySelector('#field28').value=''; 
    document.querySelector('#field29').value=''; 
    document.querySelector('#field31').value=''; 
    document.querySelector('#field32').value=''; 
    document.querySelector('#field33').value=''; 
    document.querySelector('#field34').value=''; 
    document.querySelector('#field35').value=''; 
    document.querySelector('#field36').value=''; 
    document.querySelector('#field37').value='';
    document.querySelector('#field38').value=''; 
    document.querySelector('#field39').value=''; 
    document.querySelector('#field41').value=''; 
    document.querySelector('#field42').value=''; 
    document.querySelector('#field43').value=''; 
    document.querySelector('#field44').value=''; 
    document.querySelector('#field45').value=''; 
    document.querySelector('#field46').value=''; 
    document.querySelector('#field47').value=''; 
    document.querySelector('#field48').value=''; 
    document.querySelector('#field49').value=''; 
    document.querySelector('#field51').value=''; 
    document.querySelector('#field52').value=''; 
    document.querySelector('#field53').value=''; 
    document.querySelector('#field54').value=''; 
    document.querySelector('#field55').value='';         
    document.querySelector('#field56').value=''; 
    document.querySelector('#field57').value=''; 
    document.querySelector('#field58').value=''; 
    document.querySelector('#field59').value=''; 
    document.querySelector('#field61').value=''; 
    document.querySelector('#field62').value=''; 
    document.querySelector('#field63').value=''; 
    document.querySelector('#field64').value=''; 
    document.querySelector('#field65').value='';
    document.querySelector('#field66').value=''; 
    document.querySelector('#field67').value=''; 
    document.querySelector('#field68').value=''; 
    document.querySelector('#field69').value=''; 
    document.querySelector('#field71').value=''; 
    document.querySelector('#field72').value=''; 
    document.querySelector('#field73').value=''; 
    document.querySelector('#field74').value=''; 
    document.querySelector('#field75').value=''; 
    document.querySelector('#field76').value=''; 
    document.querySelector('#field77').value=''; 
    document.querySelector('#field78').value=''; 
    document.querySelector('#field79').value=''; 
    document.querySelector('#field81').value=''; 
    document.querySelector('#field82').value=''; 
    document.querySelector('#field83').value=''; 
    document.querySelector('#field84').value=''; 
    document.querySelector('#field85').value=''; 
    document.querySelector('#field86').value=''; 
    document.querySelector('#field87').value=''; 
    document.querySelector('#field88').value=''; 
    document.querySelector('#field89').value=''; 
    document.querySelector('#field91').value=''; 
    document.querySelector('#field92').value=''; 
    document.querySelector('#field93').value=''; 
    document.querySelector('#field94').value=''; 
    document.querySelector('#field95').value=''; 
    document.querySelector('#field96').value=''; 
    document.querySelector('#field97').value=''; 
    document.querySelector('#field98').value=''; 
    document.querySelector('#field99').value='';
  }

  var print_sudoku = function(input){
    document.querySelector('#field11').value=input[0][0];        
    document.querySelector('#field12').value=input[0][1];
    document.querySelector('#field13').value=input[0][2];
    document.querySelector('#field14').value=input[0][3];
    document.querySelector('#field15').value=input[0][4];
    document.querySelector('#field16').value=input[0][5];
    document.querySelector('#field17').value=input[0][6];
    document.querySelector('#field18').value=input[0][7];
    document.querySelector('#field19').value=input[0][8];
    document.querySelector('#field21').value=input[1][0];
    document.querySelector('#field22').value=input[1][1];
    document.querySelector('#field23').value=input[1][2];
    document.querySelector('#field24').value=input[1][3];
    document.querySelector('#field25').value=input[1][4];
    document.querySelector('#field26').value=input[1][5];
    document.querySelector('#field27').value=input[1][6];
    document.querySelector('#field28').value=input[1][7];
    document.querySelector('#field29').value=input[1][8];
    document.querySelector('#field31').value=input[2][0];
    document.querySelector('#field32').value=input[2][1];
    document.querySelector('#field33').value=input[2][2];
    document.querySelector('#field34').value=input[2][3];
    document.querySelector('#field35').value=input[2][4];
    document.querySelector('#field36').value=input[2][5];
    document.querySelector('#field37').value=input[2][6];
    document.querySelector('#field38').value=input[2][7];
    document.querySelector('#field39').value=input[2][8];
    document.querySelector('#field41').value=input[3][0];
    document.querySelector('#field42').value=input[3][1];
    document.querySelector('#field43').value=input[3][2];
    document.querySelector('#field44').value=input[3][3];
    document.querySelector('#field45').value=input[3][4];
    document.querySelector('#field46').value=input[3][5];
    document.querySelector('#field47').value=input[3][6];
    document.querySelector('#field48').value=input[3][7];
    document.querySelector('#field49').value=input[3][8];
    document.querySelector('#field51').value=input[4][0];
    document.querySelector('#field52').value=input[4][1];
    document.querySelector('#field53').value=input[4][2];
    document.querySelector('#field54').value=input[4][3];
    document.querySelector('#field55').value=input[4][4];
    document.querySelector('#field56').value=input[4][5];
    document.querySelector('#field57').value=input[4][6];
    document.querySelector('#field58').value=input[4][7];
    document.querySelector('#field59').value=input[4][8];
    document.querySelector('#field61').value=input[5][0];
    document.querySelector('#field62').value=input[5][1];
    document.querySelector('#field63').value=input[5][2];
    document.querySelector('#field64').value=input[5][3];
    document.querySelector('#field65').value=input[5][4];
    document.querySelector('#field66').value=input[5][5];
    document.querySelector('#field67').value=input[5][6];
    document.querySelector('#field68').value=input[5][7];
    document.querySelector('#field69').value=input[5][8];
    document.querySelector('#field71').value=input[6][0];
    document.querySelector('#field72').value=input[6][1];
    document.querySelector('#field73').value=input[6][2];
    document.querySelector('#field74').value=input[6][3];
    document.querySelector('#field75').value=input[6][4];
    document.querySelector('#field76').value=input[6][5];
    document.querySelector('#field77').value=input[6][6];
    document.querySelector('#field78').value=input[6][7];
    document.querySelector('#field79').value=input[6][8];
    document.querySelector('#field81').value=input[7][0];
    document.querySelector('#field82').value=input[7][1];
    document.querySelector('#field83').value=input[7][2];
    document.querySelector('#field84').value=input[7][3];
    document.querySelector('#field85').value=input[7][4];
    document.querySelector('#field86').value=input[7][5];
    document.querySelector('#field87').value=input[7][6];
    document.querySelector('#field88').value=input[7][7];
    document.querySelector('#field89').value=input[7][8];
    document.querySelector('#field91').value=input[8][0];
    document.querySelector('#field92').value=input[8][1];
    document.querySelector('#field93').value=input[8][2];
    document.querySelector('#field94').value=input[8][3];
    document.querySelector('#field95').value=input[8][4];
    document.querySelector('#field96').value=input[8][5];
    document.querySelector('#field97').value=input[8][6];
    document.querySelector('#field98').value=input[8][7];
    document.querySelector('#field99').value=input[8][8];
  }    

  var double_entries = function(a){
    // Gibt es in einem Array doppelte Eintraege der Zahlen 1 bis 9?
    var zurueck = false;
    var i = 1;
      while ((zurueck==false) && (i<=9)){
        var x = a.indexOf(i);
        if (x>=0){
          var y = a.lastIndexOf(i);
          zurueck = (x!=y);
        }
        i=i+1;
      }
    return zurueck;
  }

  var sudoku_test = function(input,i,j){
    //Ist der Eintrag in (i,j) gueltig?
    var sudoku_ok = false;
    // horizontal
    sudoku_ok = !double_entries(input[i]);
    
    //vertikal
    if (sudoku_ok){
      sudoku_ok=!double_entries([input[0][j],input[1][j],input[2][j],input[3][j],input[4][j],input[5][j],input[6][j],input[7][j],input[8][j]]);
    }
    
    //in Quadrant
    if (sudoku_ok){
      var i0, i1, i2, j0, j1, j2
      var ii=(i)%3;
      if (ii == 0){ // i:0,3,6
        i0=i;
        i1=i+1;
        i2=i+2;
      }        
      if (ii == 1){  //  i:1,4,7
        i0=i-1;
        i1=i;
        i2=i+1;
      }
      if (ii == 2){  // i:2,5,8
        i0=i-2;
        i1=i-1;
        i2=i;
      }
      var jj=(j)%3
      if (jj == 0){  // j:0,3,6
        j0=j;
        j1=j+1;
        j2=j+2;        
      }
      if (jj == 1){  // j:1,4,7
        j0=j-1;
        j1=j;
        j2=j+1;
      }
      if (jj == 2){  // j:2,5,8
        j0=j-2;
        j1=j-1;
        j2=j;
      }
      sudoku_ok=!double_entries([input[i0][j0],input[i0][j1],input[i0][j2],input[i1][j0],input[i1][j1],input[i1][j2],input[i2][j0],input[i2][j1],input[i2][j2]])
    }
    
    return sudoku_ok;
  }

  var isZero = function(text){
    // Prueft einen String-Eintrag (text). Ist es ein Eintrag ['1'..'9'],
    // so gibt er die entsprechende Integerzahl zurueck, 
    // andernfalls wird eine 0 (Leerstelle) zurueckgegeben.
    var num = parseInt(text)
    var checkNum = [1,2,3,4,5,6,7,8,9]
    if (checkNum.indexOf(num)>=0){
      return num}
    else {
      return 0}
  }
  var plus = function() {
    input = []
    var line = []
    var e=[]
    
        // Backtracking
        var count_solutions = 0
        var bt = function(i){
          if (i<e.length && count_solutions <=1){ 
            for (var j=1;j<=9;j++){
              input[e[i][0]][e[i][1]]=j;
              if (sudoku_test(input,e[i][0],e[i][1])){
                bt(i+1)
              }
              input[e[i][0]][e[i][1]]=0 // Muss wieder auf 0 gesetzt werden
            }
          }
          else {
            if (count_solutions ==1){
              window.alert('Mehr als eine Lösung!');
              count_solutions+=1
            }
            if (count_solutions == 0){
              var qcheck = document.getElementById("qcheck");
              if (qcheck.checked){
                print_sudoku(input);
              }
              else {
                window.alert('Lösung möglich!');
              }
              count_solutions+=1;
            }
          }
        }
        // Backtracking
    
    line.push(isZero(document.querySelector('#field11').value));
    line.push(isZero(document.querySelector('#field12').value));
    line.push(isZero(document.querySelector('#field13').value));
    line.push(isZero(document.querySelector('#field14').value));
    line.push(isZero(document.querySelector('#field15').value));
    line.push(isZero(document.querySelector('#field16').value));
    line.push(isZero(document.querySelector('#field17').value));
    line.push(isZero(document.querySelector('#field18').value));
    line.push(isZero(document.querySelector('#field19').value));
    input.push(line)
    line = []
    line.push(isZero(document.querySelector('#field21').value));
    line.push(isZero(document.querySelector('#field22').value));
    line.push(isZero(document.querySelector('#field23').value));
    line.push(isZero(document.querySelector('#field24').value));
    line.push(isZero(document.querySelector('#field25').value));
    line.push(isZero(document.querySelector('#field26').value));
    line.push(isZero(document.querySelector('#field27').value));
    line.push(isZero(document.querySelector('#field28').value));
    line.push(isZero(document.querySelector('#field29').value));
    input.push(line)
    line = []
    line.push(isZero(document.querySelector('#field31').value));
    line.push(isZero(document.querySelector('#field32').value));
    line.push(isZero(document.querySelector('#field33').value));
    line.push(isZero(document.querySelector('#field34').value));
    line.push(isZero(document.querySelector('#field35').value));
    line.push(isZero(document.querySelector('#field36').value));
    line.push(isZero(document.querySelector('#field37').value));
    line.push(isZero(document.querySelector('#field38').value));
    line.push(isZero(document.querySelector('#field39').value));
    input.push(line)
    line = []
    line.push(isZero(document.querySelector('#field41').value));
    line.push(isZero(document.querySelector('#field42').value));
    line.push(isZero(document.querySelector('#field43').value));
    line.push(isZero(document.querySelector('#field44').value));
    line.push(isZero(document.querySelector('#field45').value));
    line.push(isZero(document.querySelector('#field46').value));
    line.push(isZero(document.querySelector('#field47').value));
    line.push(isZero(document.querySelector('#field48').value));
    line.push(isZero(document.querySelector('#field49').value));
    input.push(line)
    line = []
    line.push(isZero(document.querySelector('#field51').value));
    line.push(isZero(document.querySelector('#field52').value));
    line.push(isZero(document.querySelector('#field53').value));
    line.push(isZero(document.querySelector('#field54').value));
    line.push(isZero(document.querySelector('#field55').value));
    line.push(isZero(document.querySelector('#field56').value));
    line.push(isZero(document.querySelector('#field57').value));
    line.push(isZero(document.querySelector('#field58').value));
    line.push(isZero(document.querySelector('#field59').value));
    input.push(line)
    line = []
    line.push(isZero(document.querySelector('#field61').value));
    line.push(isZero(document.querySelector('#field62').value));
    line.push(isZero(document.querySelector('#field63').value));
    line.push(isZero(document.querySelector('#field64').value));
    line.push(isZero(document.querySelector('#field65').value));
    line.push(isZero(document.querySelector('#field66').value));
    line.push(isZero(document.querySelector('#field67').value));
    line.push(isZero(document.querySelector('#field68').value));
    line.push(isZero(document.querySelector('#field69').value));
    input.push(line)
    line = []
    line.push(isZero(document.querySelector('#field71').value));
    line.push(isZero(document.querySelector('#field72').value));
    line.push(isZero(document.querySelector('#field73').value));
    line.push(isZero(document.querySelector('#field74').value));
    line.push(isZero(document.querySelector('#field75').value));
    line.push(isZero(document.querySelector('#field76').value));
    line.push(isZero(document.querySelector('#field77').value));
    line.push(isZero(document.querySelector('#field78').value));
    line.push(isZero(document.querySelector('#field79').value));
    input.push(line)
    line = []
    line.push(isZero(document.querySelector('#field81').value));
    line.push(isZero(document.querySelector('#field82').value));
    line.push(isZero(document.querySelector('#field83').value));
    line.push(isZero(document.querySelector('#field84').value));
    line.push(isZero(document.querySelector('#field85').value));
    line.push(isZero(document.querySelector('#field86').value));
    line.push(isZero(document.querySelector('#field87').value));
    line.push(isZero(document.querySelector('#field88').value));
    line.push(isZero(document.querySelector('#field89').value));
    input.push(line)
    line = []
    line.push(isZero(document.querySelector('#field91').value));
    line.push(isZero(document.querySelector('#field92').value));
    line.push(isZero(document.querySelector('#field93').value));
    line.push(isZero(document.querySelector('#field94').value));
    line.push(isZero(document.querySelector('#field95').value));
    line.push(isZero(document.querySelector('#field96').value));
    line.push(isZero(document.querySelector('#field97').value));
    line.push(isZero(document.querySelector('#field98').value));
    line.push(isZero(document.querySelector('#field99').value));
    input.push(line)
    
    for (var i = 0; i < input.length; i++) {
      for (var j = 0; j < input[i].length; j++) {
        if (input[i][j] == 0) {
          e.push([i,j])
        }
      }
    }
    if (e.length>0){
      bt(0)
    }
    else {
      if((sudoku_test(input,0,0)) && (sudoku_test(input,2,2)) && (sudoku_test(input,3,3)) && (sudoku_test(input,4,4)) && (sudoku_test(input,5,5)) && (sudoku_test(input,6,6)) && (sudoku_test(input,7,7)) && (sudoku_test(input,8,8))){
        window.alert('Gelöst!');
      } 
      else {
        window.alert('Falsche Lösung!');
      }
      count_solutions = 1;
    }
    if (count_solutions == 0){
      window.alert('Lösung unmöglich!')
    }
    
  };

  var xbutton = document.querySelector('#xbutton');
  xbutton.addEventListener('click',function(){
    plus();
  });
  var ybutton = document.querySelector('#ybutton');
  ybutton.addEventListener('click',function(){
    leeren();
  });
    
