function selectUnit(unit, menuBaiTap){
    $("#Tiet3").click(function(){
                    var soBaiTap = 4;                    
                    var loadBaiTap = "";
                    for(i = 1; i <= soBaiTap; i++){
                        loadBaiTap += "<li><a via-link via-href='Tiet3_BaiTap"+i+"'  class='music hvr-icon-forward'> Bài tập "+i+"</a></li>"; 
                    } 
                    unit.attr("class","row Unit3");
                    menuBaiTap.html(loadBaiTap);  
         var views = {
            Tiet3_index: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet3/index.html'
                },
            ],
            defaultView: {
                view: 'Tiet3_index'
            }
        };

        new Via(views);
    });
    $("#Tiet2").click(function(){
        var soBaiTap = 3;
        var loadBaiTap = "";
        for(i = 1; i <= soBaiTap; i++){
            loadBaiTap += "<li><a via-link via-href='Tiet2_BaiTap"+i+"'  class='music hvr-icon-forward'> Bài tập "+i+"</a></li>"; 
        } 
        unit.attr("class","row Unit2");
        menuBaiTap.html(loadBaiTap);  
                        console.log(unit[0]);
                console.log(menuBaiTap[0]);
        //route
        var views = {
            Tiet2_index: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet2/A1/index.html'
                },
            ],
			Tiet2_HocHat: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet2/A1/index.html'
                },
            ],
            Tiet2_BaiTap1: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet2/A2.1/index.html'
                },
            ],
            Tiet2_BaiTap2: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet2/A2.2/index.html'
                },
            ],
            Tiet2_BaiTap3: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet2/A2.3/index.html'
                },
            ],
            Tiet2_ngheNhacVaLoi: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet2/A1/nhacvaloi.html'
                },
            ],
            Tiet2_ngheNhacDem: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet2/A1/nhacdem.html'
                },
            ],
            defaultView: {
                view: 'Tiet2_index'
            }
        };

        new Via(views);
    });
    
                
    $("#Tiet1").click(function(){
                    var soBaiTap = 5;                    
                    var loadBaiTap = "";
                    for(i = 1; i <= soBaiTap; i++){
                        loadBaiTap += "<li><a via-link via-href='Tiet1_BaiTap"+i+"'  class='music hvr-icon-forward'> Bài tập "+i+"</a></li>"; 
                    } 
                    unit.attr("class","row Unit1");
                    menuBaiTap.html(loadBaiTap);  
        var views = {
            Tiet2_index: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet1/index.html'
                },
            ],
            defaultView: {
                view: 'Tiet2_index'
            }
        };

        new Via(views);
    });
    
}