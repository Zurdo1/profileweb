/*
<li>Home</li>
<li>About</li>
<li>Skills</li>
<li>Work</li>
<li>Contact</li>
*/


$(document).ready(function () {
    $('.toggle').click(function () {
        $('.toggle').toggleClass('active')
        $('.overlay').toggleClass('active')
        $('.menu').toggleClass('active')
    })
})



