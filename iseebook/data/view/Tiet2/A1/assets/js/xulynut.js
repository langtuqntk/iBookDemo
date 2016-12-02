 function xuLyNut(audio){
        $("#startAudio").on("click",function(){
                        clearTimeout(myTime);
                        if (audio.paused) {
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audio.play();
                            $(this).html("Dừng phát");
                            $(this).find('i').attr("class","fa fa-fw fa-pause font-size");
                        }
                        else {
                            audio.pause();
                            $(this).html("Cả bài");
                            $(this).find('i').attr("class","fa fa-fw fa-play font-size");
                        }
        });
        
        $("#ngheCau1").on("click",function(){    
                        if(audio.paused){
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.currentTime = 0;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = 0;
                            }, data[10].end * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $('#startAudio').html("Cả bài");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.pause();
                            audio.currentTime = 0;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = 0;
                            }, data[10].end * 1000);
                        }
                        
        });
        $("#ngheCau2").on("click",function(){
                        if(audio.paused){
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.currentTime = data[11].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[11].begin;
                            }, (data[21].end - data[11].begin) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $('#startAudio').html("Cả bài");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.pause();
                            audio.currentTime = data[11].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[11].begin;
                            }, (data[21].end - data[11].begin) * 1000);
                        }
        });
        $("#ngheCau3").on("click",function(){
                        if(audio.paused){
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.currentTime = data[22].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[22].begin;
                            }, (data[32].end - data[22].begin) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $('#startAudio').html("Cả bài");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.pause();
                            audio.currentTime = data[22].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[22].begin;
                            }, (data[32].end - data[22].begin) * 1000);
                        }
        });
        $("#ngheCau4").on("click",function(){
                        if(audio.paused){
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audio.currentTime = data[33].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[33].begin;
                            }, (data[43].end - data[33].begin) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $('#startAudio').html("Cả bài");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.pause();
                            audio.currentTime = data[33].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[33].begin;
                            }, (data[43].end - data[33].begin) * 1000);
                        }
                        
        });
        $("#ngheCau1va2").on("click",function(){
                        if(audio.paused){
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audio.currentTime = 0;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = 0;
                            }, (data[21].end) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $('#startAudio').html("Cả bài");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.pause();
                            audio.currentTime = 0;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = 0;
                            }, (data[21].end) * 1000);
                        }
                        
        });
        $("#ngheCau3va4").on("click",function(){
                        if(audio.paused){
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audio.currentTime = data[22].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[22].begin;
                            }, (data[43].end - data[22].begin) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $('#startAudio').html("Cả bài");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.pause();
                            audio.currentTime = data[22].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[22].begin;
                            }, (data[43].end - data[22].begin) * 1000);
                        }
                        
        });
        $("#hatVoTay").on("click",function(){
                        clearTimeout(myTime);
                        $('#startAudio').html("Cả bài");
                        audio.src = "data/view/Tiet2/A1/media/2.t2.2.mp3";
                        audio.play();
                        var spanArray = $("#passage-text").find("span");
                        spanArray.removeClass("speaking");
                        for(var i = 0; i < spanArray.length; i++){
                            if(spanArray[i].getAttribute("danh-phach") == "1"){
                                spanArray[i].classList.add("underline");
                            }
                        }
        });
        
        $('#passage-audio').on("ended", function(){
                        $("#startAudio").html("Cả bài");
        });
     
 } 
        