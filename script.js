$(function(){
	// $("#story").typed({
	// 	strings: ["Well, here we are.^2000 \nJust you Jorge and I - secret API^2000 \nWe both know you missed me.^2000 I have something very special for you^2000 \nAre you ready?^4000\n\n10 REM 'A rearranged guessing game'^1000 \n20 INPUT a: CLS^1000 \n30 INPUT 'Guess the number ',b^1000 \n40 IF a=b THEN PRINT 'Correct': STOP^1000 \n50 IF a<B THENGO SUB 100^1000 \n60 IF A>b THEN GO SUB 100^1000 \n70 GO TO 30^1000 \n100 PRINT 'Try again'^1000 \n110 RETURN^1000 \n"],
	// 	// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
	// 	stringsElement: null,
	// 	// typing speed
	// 	typeSpeed: 30,
	// 	// time before typing starts
	// 	startDelay: 1200,
	// 	// backspacing speed
	// 	backSpeed: 20,
	// 	// time before backspacing
	// 	backDelay: 500,
	// 	// loop
	// 	loop: true,
	// 	// false = infinite
	// 	loopCount: 5,
	// 	// show cursor
	// 	showCursor: false,
	// 	// character for cursor
	// 	cursorChar: "|",
	// 	// attribute to type (null == text)
	// 	attr: null,
	// 	// either html or text
	// 	contentType: 'html',
	// 	// call when done callback function
	// 	callback: function() {},
	// 	// starting callback function before each string
	// 	preStringTyped: function() {},
	// 	//callback for every typed string
	// 	onStringTyped: function() {},
	// 	// callback for reset
	// 	resetCallback: function() {}
	// });

    $('#story').typed({
        strings: ["Well, here we are.^2000 \nJust you Jorge and I - secret API^2000 \nWe both know you missed me.^2000 I have something very special for you^2000 \nAre you ready?^4000\n\n10 REM 'A rearranged guessing game'^1000 \n20 INPUT a: CLS^1000 \n30 INPUT 'Guess the number ',b^1000 \n40 IF a=b THEN PRINT 'Correct': STOP^1000 \n50 IF a<B THENGO SUB 100^1000 \n60 IF A>b THEN GO SUB 100^1000 \n70 GO TO 30^1000 \n100 PRINT 'Try again'^1000 \n110 RETURN^1000 \n"],
        typeSpeed: 20,
        backDelay: 500,
        loop: false,
        loopCount: false,
    });
});

setTimeout(function() {
    // send 'em packing 
    $('#kick').append('<a href="http://www.worldofspectrum.org/ZXBasicManual/">RUN AWAY</a>');
}, 30000);