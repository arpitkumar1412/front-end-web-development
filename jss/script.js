document.addEventListener("DOMContentLoaded",
  function (event){
    function sayhello(event){
      this.textContent = "Said it";
      var name = document.getElementById("name").value;

      var x = document.querySelector("#title").textContent;
      x += "&loving it";
      if(name === "arpit"){
        document.querySelector("#title").textContent = x;
      };
    };
  }
);
