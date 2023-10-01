// ==UserScript==
// @name        livemcq.com
// @namespace   qutebrowser
// @match       https://livemcq.com/*archive-question-show/*
// @match       https://livemcq.com/*archive-answer-view/*
// @match       https://livemcq.com/question-view/*
// @match       https://livemcq.com/*answer-show/*
// @match       https://livemcq.com/*wrong-show/*
// @match       https://livemcq.com/central-favorite/*
// @version     1
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_xmlhttpRequest
// ==/UserScript==
var qhc=document.getElementsByClassName("col-md-6")
for (i=0;i<qhc.length;i++){qhc[i].style.position='absolute';
    //if(i==0){qhc[i].style.left="0px";}
    //else{qhc[i].style.right="0px";}}
    if(i==0){qhc[i].style.right="0px";}
    else{qhc[i].style.left="0px"; qhc[i].style.minWidth="98vw"}}
		//if(i==0){qhc[i].style.bottom="0px";}
   // else{qhc[i].style.top="0px";}}

//document.getElementById("myModal").style.height="50vh"
document.getElementById("myModal").style.width="50vw"
//document.getElementById("myModal").style.marginTop="50vh"
//document.getElementById("myModal").style.marginRight="50vw"
document.getElementById("myModal").style.marginLeft="50vw"
document.getElementById("myModal").style.position="fixed"

//document.getElementsByClassName("navbar-fixed-top")[0].style.marginTop="90vh"
//document.getElementsByClassName("navbar-fixed-top")[0].style.marginLeft="70vw";
//document.getElementsByClassName("col-sm-12")[0].style.marginLeft="90vw";
document.getElementsByClassName("col-sm-12")[0].style.width="50px";
document.getElementsByClassName("col-sm-12")[0].style.height="1vh";
document.getElementsByClassName("col-sm-12")[0].style.top="-70px";

(function() {
    'use strict';

    const scrollAmount = window.innerHeight / 2; // Half of the window height
    // Create scroll buttons
    const scrollDownButton = document.createElement('div');
    scrollDownButton.textContent = 'down';
    scrollDownButton.style.position = 'fixed';
    //scrollDownButton.style.bottom = '20px';
  	scrollDownButton.style.bottom = '0px';
    //scrollDownButton.style.right = '70px';
  	scrollDownButton.style.right = '0vw';
    scrollDownButton.style.padding = '0px';
    scrollDownButton.style.background = 'crimson';
    scrollDownButton.style.color = 'white';
    scrollDownButton.style.cursor = 'pointer';

    scrollDownButton.style.zIndex = 2147483647;
    document.body.appendChild(scrollDownButton);

    const scrollUpButton = document.createElement('div');
    scrollUpButton.textContent = '^ up';
    scrollUpButton.style.position = 'fixed';
    //scrollUpButton.style.bottom = '20px';
  	scrollUpButton.style.top = '15vh';
    //scrollUpButton.style.right = '130px';
  	scrollUpButton.style.right = '0vw';
    //scrollUpButton.style.padding = '0px';
    scrollUpButton.style.background = 'green';
    scrollUpButton.style.color = 'white';
    scrollUpButton.style.cursor = 'pointer';

    //scrollUpButton.style.transform = 'rotate(-90deg)'; // Rotate 90 degrees
    scrollUpButton.style.zIndex = 2147483647;
    document.body.appendChild(scrollUpButton);

    // Scroll functions
    const pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
    const halfPageHeight = pageHeight / 2;

    scrollDownButton.addEventListener('mouseover', () => {
        window.scrollBy(0, scrollAmount);
    });

    scrollUpButton.addEventListener('mouseover', () => {
        window.scrollBy(0, -scrollAmount);
    });

})();


/*(function() {
    'use strict';

    const scrollAmount = window.innerHeight / 2; // Half of the window height

    const modal = document.getElementById("myModal");
    if (!modal) return;

    const scrollUpButton = document.createElement("button");
    scrollUpButton.textContent = "Scroll Back";
    scrollUpButton.style.position = "fixed";
    scrollUpButton.style.top = "0px"; // Adjust as needed
    scrollUpButton.style.left = "91vw"; // Adjust as needed
    scrollUpButton.style.zIndex = 2147483647;
    document.body.appendChild(scrollUpButton);

    const scrollDownButton = document.createElement("button");
    scrollDownButton.textContent = "Scroll Down";
    scrollDownButton.style.position = "fixed";
    scrollDownButton.style.bottom = "0px"; // Adjust as needed
    scrollDownButton.style.left = "90vw"; // Adjust as needed
    scrollDownButton.style.zIndex = 2147483647;
    document.body.appendChild(scrollDownButton);

    scrollUpButton.addEventListener("mouseenter", function() {
        modal.scrollBy(0, -scrollAmount);
    });

    scrollDownButton.addEventListener("mouseenter", function() {
        modal.scrollBy(0, scrollAmount);
    });
})();
*/
(function() {
    'use strict';

    // Create the back button
    var backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.style.position = 'fixed';
    backButton.style.top = '40vh';
    backButton.style.right = '0px';
    backButton.style.marginRight = '-15px';
    backButton.style.zIndex = '9999';
    backButton.style.transform = 'rotate(-90deg)'; // Rotate 90 degrees

    // Add click event to go back
    backButton.addEventListener('click', function() {
        history.back();
    });

    // Append the button to the body
    document.body.appendChild(backButton);
})();


(function() {
    'use strict';

    // Load jQuery from a CDN
    function addJQuery(callback) {
        var script = document.createElement("script");
        script.setAttribute("src", "https://code.jquery.com/jquery-3.6.0.min.js"); // Change version as needed
        script.addEventListener('load', function() {
            var script = document.createElement("script");
            script.textContent = "(" + callback.toString() + ")();";
            document.body.appendChild(script);
        }, false);
        document.body.appendChild(script);
    }

    // Your main code
    function main() {

        // Modify the existing function to create and show the modal div
        function show_modal_div(data, button) {
            var modalDiv = $('<div class="custom-modal">').html(data);
            //button.after(modalDiv);
            //modalDiv.insertBefore(button.closest('div'))
            modalDiv.appendTo(button.closest('div'))
            modalDiv.click(function(){
               // modalDiv.hide();
            });
        }

        // Loop through all buttons and show modal divs after each button
        $('.explain_btn').each(function() {
            var slug = $(this).attr('get_id');
            var button = $(this);
            $.get("/get_explain/"+slug+"/", function(data, status){
                show_modal_div(data, button);
            });
        });
    }

    // Load jQuery and execute main code
    addJQuery(main);

})();

GM_addStyle('.custom-modal { font-size: 22px; min-width:91vw; background:white; overflow-wrap: normal;padding:1vw; max-width:100vw;} img {max-width:95vw;} .submit{background-color:#ff7777!important;} .answer.submit{background-color:#71AD3D!important;} .question_bar {right:0vw!important;margin-right:-10px!important;margin-top:10px!important;max-width:100px!important;}.div-toggle option{text-align:left;}');  // Change font-size as needed

(function() {
    'use strict';

    // Create Page Up Button
    const pageUpButton = document.createElement('button');
    pageUpButton.textContent = 'Page Up';
    pageUpButton.style.position = 'fixed';
    pageUpButton.style.top = '60vh';
    pageUpButton.style.right = '0px';
    pageUpButton.style.marginRight = '-30px';
    pageUpButton.style.zIndex = '9999';
    pageUpButton.style.transform = 'rotate(-90deg)'; // Rotate 90 degrees
    pageUpButton.addEventListener('click', function() {
        window.scrollBy(0, -window.innerHeight);
    });

    // Create Page Down Button
    const pageDownButton = document.createElement('button');
    pageDownButton.textContent = 'Page Down';
    pageDownButton.style.position = 'fixed';
    pageDownButton.style.bottom = '10vh';
    pageDownButton.style.right = '0px';
    pageDownButton.style.marginRight = '-35px';
    pageDownButton.style.zIndex = '9999';
    pageDownButton.style.transform = 'rotate(-90deg)'; // Rotate -90 degrees
    pageDownButton.addEventListener('click', function() {
        window.scrollBy(0, window.innerHeight);
    });

    // Add buttons to the document body
    document.body.appendChild(pageUpButton);
    document.body.appendChild(pageDownButton);
})();

(function() {
    'use strict';

    // Function to hide elements with a specific class and criteria
    function hideElements() {
        for(var i=1;i<=20;i++){
        $('div.'+i).each(function() {
            if ($(this).find('p.answer.submit').length > 0) {
                $(this).hide();
            }
        });
    }
    $('#hide-button').hide()
    $('#unhide-button').show()
    }

    // Function to unhide elements with a specific class
    function unhideElements() {

        for(var i=1;i<=20;i++){
        $('div.'+i).show();
    }
    $('#hide-button').show()
    $('#unhide-button').hide()
    }

    // Create a "Hide" button
    const hideButton = $('<button>', {
        text: 'hid',
        click: hideElements
    });

    // Create an "Unhide" button
    const unhideButton = $('<button>', {
        text: 'sh',
        click: unhideElements
    });

    // Style the buttons to position them at the top left and set a higher z-index
    GM_addStyle(`
        #hide-button {
            position: fixed;
            top: 25vh;
            right: 0vw;
            z-index: 9999;
        }

        #unhide-button {
            position: fixed;
            top: 25vh;
            right: 0vw;
            z-index: 9998;
        }
    `);

    // Add IDs to the buttons
    hideButton.attr('id', 'hide-button');
    unhideButton.attr('id', 'unhide-button');

    // Add the buttons to the page
    $('body').prepend(hideButton, unhideButton);
})();
