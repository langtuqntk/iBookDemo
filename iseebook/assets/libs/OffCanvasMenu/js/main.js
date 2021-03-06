/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
function loadMenuLeft() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
        chonBaiTap = $("li>a[via-link]"),  
        nextbtn = $('#next'),
        prevbtn = $('#prev'),
        chonTiet = $(".tietHoc"),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		var $pc = $('.container');
        var ending_left = ($(window).width() - ($pc.offset().left + $pc.outerWidth()) + 20);
        if (ending_left<0) ending_left=0;
		$('.menu-wrap').css('left',ending_left);
		toggleMenu();
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		});
        
        //Menu bài tập
        chonBaiTap.on( 'click', function(ev) {
			var target = ev.target;
			if(target !== openbtn ) {
				toggleMenu();
			}
            
            //Set currenPage
            var hiddenInput = "<input type='hidden' value="+this.getAttribute("via-href")+" id='currentPage'/>";
            $("div#hiddenValue").html(hiddenInput);
            if($("li>a[via-href]").hasClass("active")){
               $("li>a[via-href]").removeClass("active");
            }
            $(this).addClass("active");
            $('.next-prev').attr('style','display:block;');
		});
        
        //Menu tiết
        chonTiet.on( 'click', function() {
            if(!isOpen){
                classie.add( bodyEl, 'show-menu' );
                isOpen = !isOpen;
            }
		});  
        
        nextbtn.click(function(){
            var currentPage = $("#currentPage").val();
            var indexOfCurrent = listPage.indexOf(currentPage);
            var nextPage = listPage[indexOfCurrent + 1];
            var currenUnit = currentPage.split('_')[0];
            var nextUnit = "";
            
            if (nextPage != undefined){
                $(this).attr("via-href", nextPage);
                var hiddenInput = "<input type='hidden' value="+ nextPage +" id='currentPage'/>";
                $("div#hiddenValue").html(hiddenInput);
                
                nextUnit = nextPage.split('_')[0] //get next unit
                if(currenUnit !== nextUnit){
                     $('#'+nextUnit).triggerHandler('click');
                }
            }
            else {
                $(this).attr("via-href", listPage[0]);
                var hiddenInput = "<input type='hidden' value="+ listPage[0] +" id='currentPage'/>";
                $("div#hiddenValue").html(hiddenInput);
                
                $('#Tiet1').triggerHandler('click');
            }
            
            //close menu BT
            if(isOpen){
                classie.remove( bodyEl, 'show-menu' );
                isOpen = !isOpen;
            }
            
            //set active BT
            if($("li>a[via-href]").hasClass("active")){
                $("li>a[via-href]").removeClass("active");
            }
            $($("li>a[via-href="+nextPage+"]")).addClass("active");
            
            
            //show next-prev
            $('.next-prev').attr('style','display:block;');
            
            
        });

        prevbtn.click(function(){
            var currentPage = $("#currentPage").val();
            var indexOfCurrent = listPage.indexOf(currentPage);
            var prevPage = listPage[indexOfCurrent - 1];
            var lenghList = listPage.length;
            var currenUnit = currentPage.split('_')[0];
            var prevUnit = "";
            
            if (prevPage != undefined){
                $(this).attr("via-href", prevPage);
                var hiddenInput = "<input type='hidden' value="+ prevPage +" id='currentPage'/>";
                $("div#hiddenValue").html(hiddenInput);
                
                prevUnit = prevPage.split('_')[0] //get prev unit
                if(currenUnit !== prevUnit){
                     $('#'+prevUnit).triggerHandler('click');
                }
            }
            else {
                $(this).attr("via-href", listPage[lenghList - 1]);
                var hiddenInput = "<input type='hidden' value="+ listPage[lenghList - 1] +" id='currentPage'/>";
                $("div#hiddenValue").html(hiddenInput);
                
                $('#Tiet4').triggerHandler('click');
            }
            
            //show menu BT
            if(isOpen){
                classie.remove( bodyEl, 'show-menu' );
                isOpen = !isOpen;
            }
            
            //set active BT
            if($("li>a[via-href]").hasClass("active")){
                $("li>a[via-href]").removeClass("active");
            }
            $($("li>a[via-href="+prevPage+"]")).addClass("active");
            
            //show next-prev
            $('.next-prev').attr('style','display:block;');
        });
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

};

