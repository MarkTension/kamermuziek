$('document').ready(function(){
	$("#fadein").delay(1000).animate({ opacity: 1 }, 700)});


// highlight icons when hovered over
function hover0(element) {
    element.setAttribute('src', 'images/tuinx2.jpg');
}


function hover1(element) {
    element.setAttribute('src', 'images/detuininx2.jpg');
}


function hover2(element) {
    element.setAttribute('src', 'images/bootx2.jpg');
}


function hover3(element) {
    element.setAttribute('src', 'images/wiezijnwex2.jpg');
}

function hover4(element) {
    element.setAttribute('src', 'images/programmax2.jpg');
}

function hover5(element) {
    element.setAttribute('src', 'images/kaartx2.jpg');
}

function hover6(element) {
    element.setAttribute('src', 'images/ticketsx2.png');
}

function scrollDown(element) {
	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
}