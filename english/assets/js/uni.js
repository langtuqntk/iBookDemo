function selectUnit(unit, menuBaiTap, hocHat){
    $("#Tiet1").click(function(){
        if($("li>a[via-href]").hasClass("active")){
           $("li>a[via-href]").removeClass("active");
        }
        $('.next-prev').attr('style','display:none;');
        menuBaiTap.find('li').attr("style","display:none;");
        var soBaiTap = 10;                    
        var loadBaiTap = "";
        for(i = 0; i < soBaiTap; i++){
            menuBaiTap.children()[i].setAttribute("style","display:block;");
            menuBaiTap.children()[i].childNodes[0].setAttribute("via-href","Tiet1_BaiTap"+ (i+1));
        } 
        unit.attr("class","row Unit1");
        hocHat.attr("via-href","Tiet1_HocHat");

        var views = {
            Tiet1_index: [{
                    selector: ".content",
                    templateUrl: 'data/view/default.html'
                },
            ],
            Tiet1_BaiTap1: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet1/GS/A2.1/index.html'
                },
            ],
            Tiet1_BaiTap2: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet1/GS/A2.2/index.html'
                },
            ],
            Tiet1_BaiTap3: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet1/GS/A2.3/index.html'
                },
            ],
            Tiet1_BaiTap4: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet1/GS/A2.4/index.html'
                },
            ],
            Tiet1_BaiTap5: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet1/ALC1/A2.1/index.html'
                },
            ],
            Tiet1_BaiTap6: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet1/ALC1/A2.2/index.html'
                },
            ],
            Tiet1_BaiTap7: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet1/ALC1/A2.3/index.html'
                },
            ],
            Tiet1_BaiTap8: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet1/ALC1/A2.4/index.html'
                },
            ],
            Tiet1_BaiTap9: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet1/ALC1/A2.5/index.html'
                },
            ],
            Tiet1_BaiTap10: [{
                    selector: ".content",
                    templateUrl: 'data/view/Tiet1/ALC1/A2.6/index.html'
                },
            ],
            defaultView: {
                view: 'Tiet1_index'
            },
        };
        new Via(views);
    });
    
    $("#Tiet2").click(function(){
        if($("li>a[via-href]").hasClass("active")){
           $("li>a[via-href]").removeClass("active");
        }
        $('.next-prev').attr('style','display:none;');
        menuBaiTap.find('li').attr("style","display:none;");
        var soBaiTap = 3;
        var loadBaiTap = "";
        for(i = 0; i < soBaiTap; i++){
            menuBaiTap.children()[i].setAttribute("style","display:block;");
            menuBaiTap.children()[i].childNodes[0].setAttribute("via-href","Tiet2_BaiTap"+ (i+1));
        } 
        unit.attr("class","row Unit2");
        hocHat.attr("via-href","Tiet2_HocHat");

        //route
        var views = {
            Tiet2_index: [{
                    selector: ".content",
                    templateUrl: 'data/view/default.html'
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
            defaultView: {
                view: 'Tiet2_index'
            }
        };

        new Via(views);
    });
    
     $("#Tiet3").click(function(){
        if($("li>a[via-href]").hasClass("active")){
           $("li>a[via-href]").removeClass("active");
        }
        $('.next-prev').attr('style','display:none;');
        menuBaiTap.find('li').attr("style","display:none;");
        var soBaiTap = 4;                    
        var loadBaiTap = "";
        for(i = 0; i < soBaiTap; i++){
            menuBaiTap.children()[i].setAttribute("style","display:block;");
            menuBaiTap.children()[i].childNodes[0].setAttribute("via-href","Tiet3_BaiTap"+ (i+1));
        } 
        unit.attr("class","row Unit3");
        hocHat.attr("via-href","Tiet3_HocHat");
         
        var views = {
            Tiet3_index: [{
                    selector: ".content",
                    templateUrl: 'data/view/default.html'
                },
            ],
            defaultView: {
                view: 'Tiet3_index'
            }
        };

        new Via(views);
    });
    
     $("#Tiet4").click(function(){
        if($("li>a[via-href]").hasClass("active")){
           $("li>a[via-href]").removeClass("active");
        }
        $('.next-prev').attr('style','display:none;');
        menuBaiTap.find('li').attr("style","display:none;");
        var soBaiTap = 2;                    
        var loadBaiTap = "";
        for(i = 0; i < soBaiTap; i++){
            menuBaiTap.children()[i].setAttribute("style","display:block;");
            menuBaiTap.children()[i].childNodes[0].setAttribute("via-href","Tiet4_BaiTap"+ (i+1));
        } 
        unit.attr("class","row Unit4");
        hocHat.attr("via-href","Tiet4_HocHat");
         
        var views = {
            Tiet4_index: [{
                    selector: ".content",
                    templateUrl: 'data/view/default.html'
                },
            ],
            defaultView: {
                view: 'Tiet4_index'
            }
        };

        new Via(views);
    });
    
    function xulyMenu(){

    }
}