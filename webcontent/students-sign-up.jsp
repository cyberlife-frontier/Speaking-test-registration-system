<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%-- <%@page import="com.util.JDBCUtil" import="java.sql.*"%> --%>
<html lang="en">
<head>
    <title>全国大学英语四、六级考试报名网</title>
    <link rel="icon" href="images/cet.ico" type="image/x-icon">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        body {
            background: url(images/bg.jpg) repeat-x;
        }
        #topdiv {
            padding: 0;
            margin: 0;
            font-size: 12px;
            font-family: "微软雅黑", "宋体";
            color: #1f1e23;
            background: url(images/top_bg.jpg) repeat-x;
        }
        #footer {
            width: 980px;
            margin: 0 auto;
            text-align: center;
            border-top: 1px solid #666;
        }
            #footer p {
                font-size: 12px;
                color: #666;
                font-family: Arial, "微软雅黑";
                display: block;
                margin-top: 5px;
            }
        .footer_title {
            font-weight: bold;
            color: #666;
            font-size: 14px;
            line-height: 2em;
        }
    </style>
    <link href="https://resource.neea.edu.cn/project/CET/Content/ufo3.css?v=5.0" rel="stylesheet" type="text/css">
    <link href="https://resource.neea.edu.cn/project/CET/Content/lanrenzhijia.css" type="text/css" rel="stylesheet">
    <link href="https://resource.neea.edu.cn/project/CET/Content/fudong.css" rel="stylesheet"> 
</head>

<body>
<div id="mbox" style="width: 100%;">
    <div class="OnlineService_Bg">
        <div class="OnlineService_Box">
            <div class="OnlineService_Phone">

                <a href="https://aics.neea.edu.cn/CustomerChat/Index?projectCode=101" target="_blank" title="点击打开在线客服咨询网站（考生咨询版）">在线客服</a>

            </div>
        </div>
    </div>

    <div id="topdiv">
        <div id="top">
            <div id="logo" style="background: url(images/logo@0.5.png) no-repeat left; height:80px; overflow:hidden;" >

            </div>
            <div id="nav">
                <div id="panel-nav" style="width:980px; text-align:center;">
                    <ul class="">
                        <li style="padding-right:0px;"><a href="#" target="_parent" style="padding-top:3px;">
                        <img src="https://resource.neea.edu.cn/project/CET/images/home.png" width="16" height="14" alt=""></a></li>
                        <li style="padding:5px 0 0 0;"><a href="#" target="_parent">首页</a> | </li>
                        <li style="padding:5px 0 0 30px;"><a href="#" target="_parent">考试简介</a> | </li>
                        <li style="padding:5px 0 0 30px;"><a href="#" target="_parent">考生须知</a> | </li>
                        <li style="padding:5px 0 0 30px;"><a href="#" target="_parent">考试时间</a> | </li>
                        <li style="padding:5px 0 0 30px;"><a href="#" target="_parent">报名流程</a> | </li>
                        <li style="padding:5px 0 0 30px;"><a href="#" target="_parent">常见问题</a> | </li>
                        <li style="padding:5px 0 0 30px;"><a href="#" target="_parent">成绩报告单</a> |</li>
                        <li style="padding: 5px 0 0 30px;"><a href="#" target="_parent">联系我们</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div id="lanrenzhijia">
        <ul id="slides">
            <li style="background:url(images/city.jpg) no-repeat center top"><a href="#"></a></li>

        </ul>
    </div>

    <div id="banner">
        <div id="banner_l" class="f_l" style="width:100%;margin-top:5px;margin-left:15px;">
            <img src="images/bz1.png" alt="">
        </div>
    </div>
    <div style="height:0px; clear:both"></div>
    <div id="main">
        <div id="main_l" style="line-height:2.1em;">

            <a href="qualification-info-query.jsp" class="c_hei cet_banner01">
                <p class="f20">进入报名</p>
                <p class="">ENTRY</p>
            </a>

            <a href="registration-info-query.jsp" class="c_hei cet_banner02">
                <p class="f20">查询/修改报名信息</p>
                <p class="">REGISTER / MODIFY USER</p>
            </a>

            <a href="#" class="c_hei cet_banner05">
                <p class="f20">找回已报名账号</p>
                <p class="">RETRIEVE ACCOUNT</p>
            </a>
            <a href="#" class="c_hei cet_banner03" target="_blank">
                <p class="f20">补办成绩证明</p>
                <p class="">TRANSCRIPT COPY RE-ORDER</p>
            </a>

            <a href="#" class="c_hei cet_banner03">
                <p class="f20">常见问题</p>
                <p class="">COMMON PROBLEM</p>
            </a>

        </div>
        <div id="main_c">
            <div class="title_b"><a href="#"><img src="images/lun_d.jpg" width="300" height="370" alt=""></a></div><!--270-->
        </div>
        <div id="main_r">
            <div class="title_b" style="font-size:14px;">
                <a href="#"><img src="images/news.jpg" width="380" height="40" alt=""></a>

                <div style="padding:10px;line-height:1.5em;" class="main_info_l">
                    <h4>2023年上半年考试报名时间：</h4>
                    <ul style="margin-top: 0.5em;">
                        
                        <li>口语：</li>
                        <li><span>起始时间：${ExamTime.beginning_sub}</span>
                        <span style="padding-left:4em;">截止时间： ${ExamTime.deadline_sub}</span></li>
                    </ul>
                </div>
                <hr class="hr_line">
                <div style="padding:10px;line-height:1.8em;" class="main_info_l">
                    <h4>2023年上半年考试报名提示：</h4>
                    <ul style="margin-top:0.5em;">
                        <li>1. 报名未开始前，考生可进行注册及学籍信息验证操作，个人信息错误请及时与所在学校有关部门联系更正。具体报名时间以各学校通知为准。</li>
                        <li>2. 请在报名完成后24小时内完成缴费，并再次登录系统确认是否报名成功，如有疑问可拨打客服电话进行咨询。</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
    <div style="clear:both;"></div>
    <div style="width:100% ;margin:2em 0;">
        <div id="footer">
            <div id="">
                <p>
                    <span>
                        ©2023
                        <span style="padding-left:0.5em;">Nash</span>
                        <span style="padding-left:0.5em;">所有</span>
                    </span>
                    <br>
                    <p style="color:red;" >建议浏览器：火狐浏览器、谷歌浏览器、360浏览器（选择极速模式）</p>
                    <br>
                </p>

            </div>
        </div>
    </div>

</div>
    
    <script src="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://resource.neea.edu.cn/project/CET/scripts/jquery.min.js"></script>
</body>
</html>