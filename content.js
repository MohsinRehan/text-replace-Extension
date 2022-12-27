let paragraphs = document.getElementsByTagName("p");
let h1tag = document.getElementsByTagName("h1");
let ancher = document.getElementsByTagName("a");


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {

  console.log(message);


  for (para of paragraphs) {

    console.log(para);

    if (paragraphs.length > 0) {
      message.fetchArray.map((item,) => {
        para.innerText = para.innerText.replace(item.search, item.replace);
        para.style.color = "red";
        if(para < 4){
          para.style.backgroundColor = "red";
        }

      });

    }
  }

  for (heading of h1tag) {
    if (h1tag.length > 0) {
      message.fetchArray.map((item) => {
        heading.innerText = heading.innerText.replace(item.search, item.replace);

      });
    }
  }

  for (a of ancher) {
    if (ancher.length > 0) {
      message.fetchArray.map((item) => {
        a.innerText = a.innerText.replace(item.search, item.replace);   

      });
    }
  }
}





