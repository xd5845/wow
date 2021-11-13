//document.write("<script src='" + pathPre + "JS/WebPart/SysMenu.js'  type='text/javascript'></script>");
//includeLinkStyle(pathPre + "Styles/DefaultSkin/Css/SysMenu.css");

(
    function () {
        
       setTimeout(() => {

        // $("#backBtn").click(function () {
        //     // if (fuc == undefined && fuc == null) {
        //     setTimeout(function () {
        //         window.history.go(-1);
        //     }, 500);
        //     // } else {
        //     // fuc();
        //     // }
        // });
    
        $("#btnJian").click(function () {
            zh_tran('s')
            localStorage.setItem("lang", "Jian");
            sessionStorage.setItem("lang", "Jian");
            $("#btnFan").show();
            $("#btnJian").hide();
            $(this).hide();
    
            if (typeof Lang != "undefined") {
            Lang();
            }
        });
        $("#btnFan").click(function () {
            zh_tran('t')
            $("#header #btnJian").html('简')
            localStorage.setItem("lang", "Fan");
            sessionStorage.setItem("lang", "Fan");
            $("#btnJian").show();
            $("#btnFan").hide();
            if (typeof Lang != "undefined") {
            Lang();
            }
        });
        console.log(localStorage)
        if (localStorage.lang === 'Fan') {
            $("#btnJian").html('简').show()
        } else {
            $("#btnFan").show();
        }
       }, 500)
    }
)(window)