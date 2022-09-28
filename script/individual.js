let x=localStorage.getItem('id');
// console.log(x);
async function getData(x){
    let res=await fetch(`https://api.openbrewerydb.org/breweries/${x}`);
    let data=await res.json();
    // console.log(data)
    // return data
    displayData(data)
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
    // th5.innerText='More Details';
    tr.append(th1,th2,th3,th4)
    thead.append(tr)
    table.append(thead)
    
    // trMain.innerHTML='';
        
         let idPage=data.id;
         tr=document.createElement('TR');
         th1=document.createElement('TH');
         th2=document.createElement('TH');
         th3=document.createElement('TH');
         th4=document.createElement('TH');
        //  th5=document.createElement('TH');
            th1.innerText=data.name;
            
                // console.log("All")
                th2.innerText=data.brewery_type;
            
            th3.innerText=data.city;
            th4.innerText=data.state;
            
            // th5.innerHTML=`<button id=${idPage} onclick="singlePage(this.id)">More Details</button>`;
            
            tr.append(th1,th2,th3,th4);
        table.append(tr);
    

}
// displayData()
getData(x)