let rate=0;
let rated=0;
let ref=0;
let TR={"JPY":0.008,"USD":0,"EUR":0.033,"GBP":0.036,"CNY":0.036};

function GetCurrency(){
    var val= document.getElementById("api-select").value;
    var Currency = (document.getElementById('Currency').value).replace(/,/g, '');
    var checkbox = document.getElementById('checkbox');
    var CommaAdder=Currency;

    CommaAdder = CommaAdder.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('Currency').value = CommaAdder;
    
    fetch("https://open.er-api.com/v6/latest/THB", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          rate = res.rates[val];
          rated=1/rate;
          if(val!="Country?"){
          document.getElementById('Suffix').innerText = val;
          }
          if(Currency!="" && val!="Country?"){
            if(checkbox.checked){
              document.getElementById('Baht').value = `${(((Currency * rated) - (Currency * rated * TR[val])).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} (${((Currency * rated * TR[val]).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Refunded)`;
            }
            else{
              document.getElementById('Baht').value = `${(((Currency * rated)).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
            }
          }
          else if(Currency==""){
            document.getElementById('Baht').value="";
          }
        })
        .catch((err) => {
          console.log(err, "Please Contact Developer");
          rate = ERROR;
        });
}
