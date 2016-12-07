 function xuLyNut(audio, args){
        $("#startAudio").on("click",function(){
                        clearTimeout(myTime);
                        $.each(data, function(index, obj) {
                            spanTag[index].setAttribute('danh-phach',obj.danhphach);
                            spanTag[index].setAttribute('data-end',obj.end);
                            spanTag[index].setAttribute('data-begin',obj.begin);
                            spanTag[index].innerHTML = obj.word;
                        });
                        ReadAlong.init(args);  
                        if (audio.paused) {
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audio.play();
                            $(this).find('i').attr("class","fa fa-fw fa-pause font-size");
                        }
                        else {
                            audio.pause();
                            $(".loi2").attr("style","display:none;");
                            $(".loi1").attr("style","display:block;");
                            $(this).find('i').attr("class","fa fa-fw fa-play font-size");
                        }
        });
        
        $("#ngheCau1").on("click",function(){
                        $.each(data, function(index, obj) {
                            spanTag[index].setAttribute('danh-phach',obj.danhphach);
                            spanTag[index].setAttribute('data-end',obj.end);
                            spanTag[index].setAttribute('data-begin',obj.begin);
                            spanTag[index].innerHTML = obj.word;
                        });
                        ReadAlong.init(args);  
                        if(audio.paused){
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $('#startAudio').find('i').attr("class","fa fa-fw fa-pause font-size");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.currentTime = 0;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = 0;
                                $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
                            }, data[10].end * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $(".loi2").attr("style","display:none;");
                            $(".loi1").attr("style","display:block;");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.pause();
                            audio.currentTime = 0;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = 0;
                                $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
                            }, data[10].end * 1000);
                        }
                        
        });
        $("#ngheCau2").on("click",function(){
                        $.each(data, function(index, obj) {
                            spanTag[index].setAttribute('danh-phach',obj.danhphach);
                            spanTag[index].setAttribute('data-end',obj.end);
                            spanTag[index].setAttribute('data-begin',obj.begin);
                            spanTag[index].innerHTML = obj.word;
                        });
                        ReadAlong.init(args);  
                        if(audio.paused){
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $('#startAudio').find('i').attr("class","fa fa-fw fa-pause font-size");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.currentTime = data[11].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[11].begin;
                                $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
                            }, (data[21].end - data[11].begin) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $(".loi2").attr("style","display:none;");
                            $(".loi1").attr("style","display:block;");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.pause();
                            audio.currentTime = data[11].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[11].begin;
                                $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
                            }, (data[21].end - data[11].begin) * 1000);
                        }
        });
        $("#ngheCau3").on("click",function(){
                        $.each(data, function(index, obj) {
                            spanTag[index].setAttribute('danh-phach',obj.danhphach);
                            spanTag[index].setAttribute('data-end',obj.end);
                            spanTag[index].setAttribute('data-begin',obj.begin);
                            spanTag[index].innerHTML = obj.word;
                        });
                        ReadAlong.init(args);  
                        if(audio.paused){
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $('#startAudio').find('i').attr("class","fa fa-fw fa-pause font-size");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.currentTime = data[22].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[22].begin;
                                $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
                            }, (data[32].end - data[22].begin) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $(".loi2").attr("style","display:none;");
                            $(".loi1").attr("style","display:block;");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.pause();
                            audio.currentTime = data[22].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[22].begin;
                                $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
                            }, (data[32].end - data[22].begin) * 1000);
                        }
        });
        $("#ngheCau4").on("click",function(){
                        $.each(data, function(index, obj) {
                            spanTag[index].setAttribute('danh-phach',obj.danhphach);
                            spanTag[index].setAttribute('data-end',obj.end);
                            spanTag[index].setAttribute('data-begin',obj.begin);
                            spanTag[index].innerHTML = obj.word;
                        });
                        ReadAlong.init(args);  
                        if(audio.paused){
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $('#startAudio').find('i').attr("class","fa fa-fw fa-pause font-size");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audio.currentTime = data[33].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[33].begin;
                                $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
                            }, (data[43].end - data[33].begin) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $(".loi2").attr("style","display:none;");
                            $(".loi1").attr("style","display:block;");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.pause();
                            audio.currentTime = data[33].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[33].begin;
                                $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
                            }, (data[43].end - data[33].begin) * 1000);
                        }
                        
        });
        $("#ngheCau1va2").on("click",function(){
                        $.each(data, function(index, obj) {
                            spanTag[index].setAttribute('danh-phach',obj.danhphach);
                            spanTag[index].setAttribute('data-end',obj.end);
                            spanTag[index].setAttribute('data-begin',obj.begin);
                            spanTag[index].innerHTML = obj.word;
                        });
                        ReadAlong.init(args);  
                        if(audio.paused){
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $('#startAudio').find('i').attr("class","fa fa-fw fa-pause font-size");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audio.currentTime = 0;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = 0;
                                $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
                            }, (data[21].end) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $(".loi2").attr("style","display:none;");
                            $(".loi1").attr("style","display:block;");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.pause();
                            audio.currentTime = 0;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = 0;
                                $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
                            }, (data[21].end) * 1000);
                        }
                        
        });
        $("#ngheCau3va4").on("click",function(){
                        $.each(data, function(index, obj) {
                            spanTag[index].setAttribute('danh-phach',obj.danhphach);
                            spanTag[index].setAttribute('data-end',obj.end);
                            spanTag[index].setAttribute('data-begin',obj.begin);
                            spanTag[index].innerHTML = obj.word;
                        });
                        ReadAlong.init(args);  
                        if(audio.paused){
                            audio.src = "data/view/Tiet2/A1/media/2.t2.cabai.mp3";
                            $('#startAudio').find('i').attr("class","fa fa-fw fa-pause font-size");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            audio.currentTime = data[22].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[22].begin;
                                $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
                            }, (data[43].end - data[22].begin) * 1000);
                        }
                        else{
                            clearTimeout(myTime);
                            $(".loi2").attr("style","display:none;");
                            $(".loi1").attr("style","display:block;");
                            $("#passage-text").find("span").removeClass("underline speaking");
                            var spanArray = $("#passage-text").find("span");
                            spanArray.removeClass("speaking");
                            audio.pause();
                            audio.currentTime = data[22].begin;
                            audio.play();
                            myTime = setTimeout(function(){
                                audio.pause();
                                audio.currentTime = data[22].begin;
                                $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
                            }, (data[43].end - data[22].begin) * 1000);
                        }
                        
        });
        $("#hatVoTay").on("click",function(){
                        $.each(data, function(index, obj) {
                            spanTag[index].setAttribute('danh-phach',obj.danhphach);
                            spanTag[index].setAttribute('data-end',obj.end);
                            spanTag[index].setAttribute('data-begin',obj.begin);
                            spanTag[index].innerHTML = obj.word;
                        });
                        ReadAlong.init(args);  
                        clearTimeout(myTime);
                        $('#startAudio').find('i').attr("class","fa fa-fw fa-pause font-size");
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
     
        $("#ngheNhacVaLoi").on("click", function(){
                        $.each(datanhacvaloi, function(index, obj) {
                            spanTag[index].setAttribute('danh-phach',obj.danhphach);
                            spanTag[index].setAttribute('data-end',obj.end);
                            spanTag[index].setAttribute('data-begin',obj.begin);
                            spanTag[index].innerHTML = obj.word;
                        });
                        ReadAlong.init(args);  
            
                        clearTimeout(myTime);
                        $(".loi2").attr("style","display:none;");
                        $(".loi1").attr("style","display:block;");
                        $('#startAudio').find('i').attr("class","fa fa-fw fa-pause font-size");
                        audio.src = "data/view/Tiet2/A1/media/NhacVaLoi_ThatLaHay.mp3";
                        audio.play();
                        var spanArray = $("#passage-text").find("span");
                        spanArray.removeClass("speaking underline");
                        myTime = setTimeout(function(){
                                $(".loi2").attr("style","display:block;")
                                $(".loi1").attr("style","display:none;")
                        }, datanhacvaloi[43].end * 1000);
            

        });
     
        $("#ngheNhacDem").on("click", function(){
                        $.each(datanhacdem, function(index, obj) {
                            spanTag[index].setAttribute('danh-phach',obj.danhphach);
                            spanTag[index].setAttribute('data-end',obj.end);
                            spanTag[index].setAttribute('data-begin',obj.begin);
                            spanTag[index].innerHTML = obj.word;
                        });
                        ReadAlong.init(args);  
            
                        clearTimeout(myTime);
                        $('#startAudio').find('i').attr("class","fa fa-fw fa-pause font-size");
                        audio.src = "data/view/Tiet2/A1/media/NhacDem_ThatLaHay.mp3";
                        audio.play();
                        var spanArray = $("#passage-text").find("span");
                        spanArray.removeClass("speaking underline");
        });
        
        $('#passage-audio').on("ended", function(){
                        $(".loi2").attr("style","display:none;");
                        $(".loi1").attr("style","display:block;");
                        $('#startAudio').find('i').attr("class","fa fa-fw fa-play font-size");
        });
     
 } 
        