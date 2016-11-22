var ListUnit = ["Unit 1", "Unit 2", "Unit 3", "Review 1", "Unit 4", "Unit 5", "Unit 6", "Review 2"];
var Menu = ["A", "B", "C", "D", "E", "F", "G", "H"];

function stopAllAudio()
{
    var audio = $(".audioUnit")[0];
    audio.pause();

    $(".audioExercise").each(function () {
        var audio = $(this)[0];
        audio.pause();
    });

    $(".audioPart").each(function () {
        var audio = $(this)[0];
        audio.pause();
    });
}

function initUnit() {
    var currentMenu = "A";
    var currentExercise = "1";
    var currentIndexInList = 0;
	var clickBtn = 0;
	$(".btnEng").click(function(){
		clickBtn = 1;
	})
	$(".btnViet").click(function(){
		clickBtn = 0;
	})
	$(".btnEng").css("display","none");
	$(".btnViet").css("display","none");
	$("#buttonGuide").click(function(){
		stopAllAudio();
	})
    $("#TabSHS a").click(function (e) {

        currentMenu = $(this).attr("href").substr($(this).attr("href").indexOf("#tab") + 4);

        //reset
        for(var i = 1; i <= 8; i++)
        {
            $("#btnExercise" + i).css("display", "none");		
			$(".btnEng").css("display","none");
			$(".btnViet").css("display","none");
	
        }

        for(var i = 1; i <= countExerciseInMenu[Menu.indexOf(currentMenu)]; i++)
        {
            var btnExercise = $("#btnExercise" + i);
            btnExercise.css("display", "block");
			$(".btnEng").css("display","none");
			$(".btnViet").css("display","none");
        }

        stopAllAudio();

        var audio = $("#Audio" + currentMenu)[0];
        audio.load();
        audio.play();

        $(this).tab("show");

        $("#frameContentUnit").attr("src", "Unit.html");

        $(".ButtonExerciseChildFix").each(function () {
            $(this).css("display","none");
        });
		
		
    });

    $(".ButtonExerciseFix").click(function () {
        $(".ButtonExerciseChildFix").each(function () {
            $(this).css("display","none");
        });
		$(".btnEng").css("display","inline");
		$(".btnViet").css("display","inline");
        currentExercise = $(this).attr("id").substr($(this).attr("id").indexOf("btnExercise") + 11);
        if(ListExerciseHaveChild.indexOf(currentMenu + currentExercise) > -1)
        {
            $("#ListChild" + currentExercise).css("display","block");

            var index = ListExerciseHaveChild.indexOf(currentMenu + currentExercise);
            var count = CountListExerciseChild[index];
            for(var i = 1; i <= count; i++)
            {
                var exercise = $("#btnExercise" + currentExercise + "_" + i);
                exercise.css("display","block");
            }

            currentIndexInList = ListLesson.indexOf(currentMenu + currentExercise + ".1");
            $("#frameContentUnit").attr("src", "../" + currentUnit + "/" + currentMenu + currentExercise + ".1" + "/index.html");

            stopAllAudio();

            var audio = $("#Audio" + currentMenu + currentExercise + "_1")[0];
            audio.load();
            audio.play();
        }
        else
        {
			stopAllAudio();
			if(clickBtn == 1){
			currentIndexInList = ListLesson.indexOf(currentMenu + currentExercise);
            $("#frameContentUnit").attr("src", "../" + currentUnit + "/" + currentMenu + currentExercise + "E/index.html");
            var audio = $("#Audio" + currentMenu + currentExercise + "E")[0];
            
			}else{
				currentIndexInList = ListLesson.indexOf(currentMenu + currentExercise);
            $("#frameContentUnit").attr("src", "../" + currentUnit + "/" + currentMenu + currentExercise + "/index.html");            

            var audio = $("#Audio" + currentMenu + currentExercise)[0];            
			}
            audio.load();
            audio.play();
        }
    });

    $(".ButtonExerciseChildFix").click(function () {
        currentExercise = $(this).attr("id").substr($(this).attr("id").indexOf("btnExercise") + 11);

        currentIndexInList = ListLesson.indexOf(currentMenu + currentExercise.replace("_","."));
        $("#frameContentUnit").attr("src", "../" + currentUnit + "/" + currentMenu + currentExercise.replace("_", ".") + "/index.html");
        stopAllAudio();

        var audio = $("#Audio" + currentMenu + currentExercise)[0];
        audio.load();
        audio.play();
    });

	$(".btnEng").click(function () {
        $("#frameContentUnit").attr("src", "../" + currentUnit + "/" + currentMenu + currentExercise  + "E/index.html");
		stopAllAudio();
		var audio = $("#Audio" + currentMenu + currentExercise + "E")[0];
        audio.load();
        audio.play();
	})
	
	$(".btnViet").click(function () {
        $("#frameContentUnit").attr("src", "../" + currentUnit + "/" + currentMenu + currentExercise  + "/index.html");
		stopAllAudio();
		var audio = $("#Audio" + currentMenu + currentExercise)[0];
        audio.load();
        audio.play();
	})
	
    $("#buttonBack").click(function () {
        if(currentIndexInList > 0)
        {
            currentIndexInList--;

            $("#frameContentUnit").attr("src", "../"+currentUnit+"/" + ListLesson[currentIndexInList] + "/index.html");

            stopAllAudio();

            var audio = $("#Audio" + ListLesson[currentIndexInList].replace(".","_"))[0];
            audio.load();
            audio.play();

            var oldMenu = ListLesson[currentIndexInList + 1].substr(0, 1);
            var newMenu = ListLesson[currentIndexInList].substr(0, 1);

            if(oldMenu != newMenu)
            {
                onNextBackMenu(newMenu);
            }
        }
        else
        {
            window.open(ListUnit[ListUnit.indexOf(currentUnit) - 1] + ".html", "_self");
        }
    });

    $("#buttonNext").click(function () {
        if(currentIndexInList < ListLesson.length - 1)
        {
            currentIndexInList ++;

            $("#frameContentUnit").attr("src", "../"+currentUnit+"/" + ListLesson[currentIndexInList] + "/index.html");

            stopAllAudio();

            var audio = $("#Audio" + ListLesson[currentIndexInList].replace(".","_"))[0];
            audio.load();
            audio.play();

            var oldMenu = ListLesson[currentIndexInList - 1].substr(0, 1);
            var newMenu = ListLesson[currentIndexInList].substr(0, 1);

            if(oldMenu != newMenu)
            {
                onNextBackMenu(newMenu);
            }
        }
        else
        {
            window.open(ListUnit[ListUnit.indexOf(currentUnit) + 1] + ".html", "_self");
        }
    });

   /* $("#btnGlossary").click(function () {
        $("#frameContentUnit").attr("src", "../" + currentUnit + "/Glossary/index.html");
    })*/

    function onNextBackMenu(newMenu)
    {
        var newTab = $("a[href='#tab" + newMenu + "']");
        newTab.tab("show");

        var currentMenu = newTab.attr("href").substr(newTab.attr("href").indexOf("#tab") + 4);
        //reset
        for(var i = 1; i <= 8; i++)
        {
            $("#btnExercise" + i).css("display", "none");
        }

        for(var i = 1; i <= countExerciseInMenu[Menu.indexOf(currentMenu)]; i++)
        {
            var btnExercise = $("#btnExercise" + i);
            btnExercise.css("display", "block");
        }

        $(".ButtonExerciseChildFix").each(function () {
            $(this).css("display","none");
        });
    }
}