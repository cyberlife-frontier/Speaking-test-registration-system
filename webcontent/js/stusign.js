function timeCheck(){
    var now = new Date;
    /*var year = now.getFullYear();
    var month = now.getMonth()+1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;*/

    var beginTime = new Date($("#beginning").val());
    var endTime = new Date($("#deadline").val());
    if(now >= beginTime && now <= endTime){
        //alert("处于报名时间");
        $("#enter-sign-up").attr("href", "qualification-info-query.jsp");
        $("#query-alter-info").attr("href", "registration-info-query.jsp");

    }
    else{
        
        $("#info-tip").text("不在报名时间");
        alert("不在报名时间");
    }
}