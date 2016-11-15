var BtnProcess = {
    init: function (audio) {
        this.addEventListeners(audio);
    },
    addEventListeners: function(audioBaiHat){
       
        $("#hatVoTay").on("click",function(){
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
    