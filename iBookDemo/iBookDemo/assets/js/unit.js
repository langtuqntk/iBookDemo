var ListUnit = ["Unit 1", "Unit 2", "Unit 3", "Review 1", "Unit 4", "Unit 5", "Unit 6", "Review 2"];
var Menu = ["A", "B", "C", "D", "E", "F", "G", "H"];

function stopAllAudio()
{
    /*var audio = $(".audioUnit")[0];
    audio.pause();

    $(".audioExercise").each(function () {
        var audio = $(this)[0];
        audio.pause();
    });

    $(".audioPart").each(function () {
        var audio = $(this)[0];
        audio.pause();
    });*/
}

function initUnit() {
    var currentMenu = "A";
    var currentExercise = "1";
    var currentIndexInList = 0;
  
    $(".ButtonExerciseFix").click(function () {
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
            $("#frameContentUnit").attr("src", "../data/view/" + currentUnit + "/" + currentMenu + currentExercise + ".1" + "/index.html");
        }
        else
        {
            currentIndexInList = ListLesson.indexOf(currentMenu + currentExercise);
            $("#frameContentUnit").attr("src", "../data/view/" + currentUnit + "/" + currentMenu + currentExercise + "/index.html");                 
        }
    });

    $(".ButtonExerciseChildFix").click(function () {
        currentExercise = $(this).attr("id").substr($(this).attr("id").indexOf("btnExercise") + 11);

        currentIndexInList = ListLesson.indexOf(currentMenu + currentExercise.replace("_","."));
        $("#frameContentUnit").attr("src", "../data/view/" + currentUnit + "/" + currentMenu + currentExercise.replace("_", ".") + "/index.html");
        stopAllAudio();
    });
    
	
    $("#buttonBack").click(function () {
        if(currentIndexInList > 0)
        {
            currentIndexInList--;

            $("#frameContentUnit").attr("src", "../"+currentUnit+"/" + ListLesson[currentIndexInList] + "/index.html");

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