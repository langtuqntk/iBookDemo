var BtnProcess = {
    audioBaiHat: null,
    init: function (audio) {
        this.addEventListeners(audio);
    },
    addEventListeners: function(audioBaiHat){
        var myTime;
        $("#startAudio").on("click",function(){
                        clearTimeout(myTime);
                        if (audioBaiHat.paused) {
                            audioBaiHat.src = "media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audioBaiHat.play();
                            $(this).html("Dừng phát");
                        }
                        else {
                            audioBaiHat.pause();
                            $(this).html("Giai điệu bài hát");
                        }
        });
        $("#ngheNhacDem").on("click",function(){
                        clearTimeout(myTime);
                        if (audioBaiHat.paused) {
                            audioBaiHat.src = "media/NhacDem_ThatLaHay.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audioBaiHat.play();
                        }
                        else {
                            audioBaiHat.pause();
                        }
        });
        $("#ngheNhacVaLoi").on("click",function(){
                        clearTimeout(myTime);
                        if (audioBaiHat.paused) {
                            audioBaiHat.src = "media/NhacVaLoi_ThatLaHay.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                $(".loi2").attr("style","display:block;")
                                $(".loi1").attr("style","display:none;")
                            }, data[43].end * 1000);
                        }
                        else {
                            audioBaiHat.pause();
                        }
        });
        
        $("#ngheCau1").on("click",function(){    
                        if(audioBaiHat.paused){
                            audioBaiHat.src = "media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audioBaiHat.currentTime = 0;
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                audioBaiHat.pause();
                                audioBaiHat.currentTime = 0;
                            }, data[10].end * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $('#startAudio').html("Giai điệu bài hát");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audioBaiHat.pause();
                            audioBaiHat.currentTime = 0;
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                audioBaiHat.pause();
                                audioBaiHat.currentTime = 0;
                            }, data[10].end * 1000);
                        }
                        
        });
        $("#ngheCau2").on("click",function(){
                        if(audioBaiHat.paused){
                            audioBaiHat.src = "media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audioBaiHat.currentTime = data[11].begin;
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                audioBaiHat.pause();
                                audioBaiHat.currentTime = data[11].begin;
                            }, (data[21].end - data[11].begin) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $('#startAudio').html("Giai điệu bài hát");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audioBaiHat.pause();
                            audioBaiHat.currentTime = data[11].begin;
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                audioBaiHat.pause();
                                audioBaiHat.currentTime = data[11].begin;
                            }, (data[21].end - data[11].begin) * 1000);
                        }
        });
        $("#ngheCau3").on("click",function(){
                        if(audioBaiHat.paused){
                            audioBaiHat.src = "media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audioBaiHat.currentTime = data[22].begin;
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                audioBaiHat.pause();
                                audioBaiHat.currentTime = data[22].begin;
                            }, (data[32].end - data[22].begin) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $('#startAudio').html("Giai điệu bài hát");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audioBaiHat.pause();
                            audioBaiHat.currentTime = data[22].begin;
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                audioBaiHat.pause();
                                audioBaiHat.currentTime = data[22].begin;
                            }, (data[32].end - data[22].begin) * 1000);
                        }
        });
        $("#ngheCau4").on("click",function(){
                        if(audioBaiHat.paused){
                            audioBaiHat.src = "media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audioBaiHat.currentTime = data[33].begin;
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                audioBaiHat.pause();
                                audioBaiHat.currentTime = data[33].begin;
                            }, (data[43].end - data[33].begin) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $('#startAudio').html("Giai điệu bài hát");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audioBaiHat.pause();
                            audioBaiHat.currentTime = data[33].begin;
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                audioBaiHat.pause();
                                audioBaiHat.currentTime = data[33].begin;
                            }, (data[43].end - data[33].begin) * 1000);
                        }
                        
        });
        $("#ngheCau1va2").on("click",function(){
                        if(audioBaiHat.paused){
                            audioBaiHat.src = "media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audioBaiHat.currentTime = 0;
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                audioBaiHat.pause();
                                audioBaiHat.currentTime = 0;
                            }, (data[21].end) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $('#startAudio').html("Giai điệu bài hát");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audioBaiHat.pause();
                            audioBaiHat.currentTime = 0;
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                audioBaiHat.pause();
                                audioBaiHat.currentTime = 0;
                            }, (data[21].end) * 1000);
                        }
                        
        });
        $("#ngheCau3va4").on("click",function(){
                        if(audioBaiHat.paused){
                            audioBaiHat.src = "media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audioBaiHat.currentTime = data[22].begin;
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                audioBaiHat.pause();
                                audioBaiHat.currentTime = data[22].begin;
                            }, (data[43].end - data[22].begin) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $('#startAudio').html("Giai điệu bài hát");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audioBaiHat.pause();
                            audioBaiHat.currentTime = data[22].begin;
                            audioBaiHat.play();
                            myTime = setTimeout(function(){
                                audioBaiHat.pause();
                                audioBaiHat.currentTime = data[22].begin;
                            }, (data[43].end - data[22].begin) * 1000);
                        }
                        
        });
        $("#hatVoTay").on("click",function(){
                        clearTimeout(myTime);
                        $('#startAudio').html("Giai điệu bài hát");
                        audioBaiHat.src = "media/2.t2.2.mp3";
                        audioBaiHat.play();
                        var spanArray = $("#passage-text").find("span");
                        spanArray.removeClass("speaking");
                        for(var i = 0; i < spanArray.length; i++){
                            if(spanArray[i].getAttribute("danh-phach") == "1"){
                                spanArray[i].classList.add("underline");
                            }
                        }
        });
    }
}
    