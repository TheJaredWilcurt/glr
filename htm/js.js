function toggle5(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
		imageEle.innerHTML = '<img src="../img/share+glr.gif" border="0" alt="" />';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="../img/share-glr.gif" border="0" alt="" />';
        }
}

function toggle6(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
		imageEle.innerHTML = '<img src="../img/embed+glr.gif" border="0" alt="" />';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="../img/embed-glr.gif" border="0" alt="" />';
        }
}