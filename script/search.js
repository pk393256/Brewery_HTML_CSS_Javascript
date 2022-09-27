let input=document.getElementById('input');
let timer=0;

    function debounce(d){
        
         let input = document.getElementById('input');
         let element=input.value;
      if (timer>0) {clearTimeout(timer)}
      
        timer=setTimeout(()=>{
            fetchDetails(element)
        },d)
        
      
    }

input.addEventListener('onchange',()=>{
    debounce(600)
})
function fetchDetails(element){
    fetch(`https://api.openbrewerydb.org/breweries?by_name=${element}&per_page=9`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        displayData(data);
    })
}
function displayData(data){
    // console.log(value)
    let table=document.getElementById('table');
    table.innerHTML='';
    let thead=document.createElement('THEAD')
    let tr=document.createElement('TR');
    let th1=document.createElement('TH');
    let th2=document.createElement('TH');
    let th3=document.createElement('TH');
    let th5=document.createElement('TH');
    let th4=document.createElement('TH');
    th1.innerText='name';
    th2.innerText='Brewery Type';
    th3.innerText='City';
    th4.innerText='State';
    th5.innerText='More Details';
    tr.append(th1,th2,th3,th4,th5)
    thead.append(tr)
    table.append(thead)
    
    // trMain.innerHTML='';
    for(let i=0;i<data.length;i++){
        let tr=document.createElement('TR');
        let th1=document.createElement('TH');
        let th2=document.createElement('TH');
        let th3=document.createElement('TH');
        let th4=document.createElement('TH');
        let th5=document.createElement('TH');
            th1.innerText=data[i].name;
            
                // console.log("All")
                th2.innerText=data[i].brewery_type;
            
            th3.innerText=data[i].city;
            th4.innerText=data[i].state;
            th5.innerHTML='<button>More Details</button>';
        tr.append(th1,th2,th3,th4,th5);
        table.append(tr);
    }

}