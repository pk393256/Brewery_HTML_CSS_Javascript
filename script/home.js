let option=document.getElementsByTagName('select');
let value='';
fetch('https://api.openbrewerydb.org/breweries?per_page=9')
.then((res)=>res.json())
.then((data)=>{
    displayData(data,'')
})
option[0].addEventListener('change',()=>{
    // console.log(option[0].value)

    value=option[0].value;
    
    getData(value)
    
    

})
// console.log(option[0]);
async function getData(value){
    if(value==''){
        const response=await fetch(`https://api.openbrewerydb.org/breweries?per_page=9`);
        const data=await response.json();
        console.log(data);
        displayData(data,value)
        
    }else{
        const response=await fetch(`https://api.openbrewerydb.org/breweries?by_type=${value}&per_page=9`);
        const data=await response.json();
        console.log(data)
       
        displayData(data,value)
    }
}   

function displayData(data,value){
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
        let idPage=data[i].id;
        let tr=document.createElement('TR');
        let th1=document.createElement('TH');
        let th2=document.createElement('TH');
        let th3=document.createElement('TH');
        let th4=document.createElement('TH');
        let th5=document.createElement('TH');
            th1.innerText=data[i].name;
            if(value==''){
                console.log("All")
                th2.innerText=data[i].brewery_type;
            }else{
                console.log(value)
                th2.innerText=value;
            }
            th3.innerText=data[i].city;
            th4.innerText=data[i].state;
            th5.innerHTML=`<button id=${idPage} onclick="singlePage(this.id)">More Details</button>`;
        tr.append(th1,th2,th3,th4,th5);
        table.append(tr);
    }

}
function singlePage(id){
    // console.log(id)
    localStorage.setItem('id',id);
    window.location.href='./individual.html';
}