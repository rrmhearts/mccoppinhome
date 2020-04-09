function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("topbar").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("topbar").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
  
  function toggle() {
    let side = document.getElementById("mySidenav");
    let style = window.getComputedStyle(side);
    let width = style.getPropertyValue('width');
    console.log("toggle: ", width);
    if (width === "0px") 
        openNav();
    else
        closeNav();
  }