let dataArr = document.getElementById("userContainer");
let Btnrep = document.getElementById("repBtn");


Btnrep.addEventListener('click', changeText);

async function fetchData() {

    let url = 'http://localhost:3000/dataObj'
    let res = await fetch(url);
    let data = await res.json()
    data.map((val) => {

        dataArr.innerHTML += `
       <div class="arrData">
         <p>${val.search}</p>
         <p>${val.replace}</p>
       </div>`

       

    });
    let setData=localStorage.setItem('localData' , JSON.stringify(data));

    return data;

};

fetchData();

// console.log(fetchData());


function changeText() {

    let params = {
        active: true,
        currentWindow: true,
    };

    chrome.tabs.query(params, gotTab)

        function gotTab(tabs) {

     let   getData=JSON.parse(localStorage.getItem('localData'));

     console.log("stroage data =>" , getData);  
    
        let msg = {
            fetchArray: getData,
        }

        chrome.tabs.sendMessage(tabs[0].id, msg)

    }


}





