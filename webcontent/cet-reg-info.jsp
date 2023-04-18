<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="images/cet.ico" type="image/x-icon">
  <title>主页</title>
  
  <link rel="stylesheet" href="css/style.css">
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <!-- <link href="https://cdn.bootcss.com/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css" rel="stylesheet"> -->

</head>

<body>
<!-- menu-bar -->
<div class="menu-bar">
  <h1 class="logo">大学生四六级口语考试报名系统<span>系统</span></h1>
  <ul>
  <!-- <a href="#"> </a>-->
    <li><span class="admin">${Admin.name}</span>
    	<div class="dropdown-menu">
    		<ul>
    			<li>头像</li>
    			<li><a href="account?method=logout">退出登录</a></li>
    		</ul>
    	</div>
    </li>	
    <li><a href="#">学生信息<i class="fas fa-caret-down"></i></a>
      <div class="dropdown-menu">
        <ul>
          <li><a href="cet-index.jsp">资质信息</a></li>
          <li><a href="javascript:void(0)">报名信息</a></li>
        </ul>
      </div>
    </li>

    <li><a href="#">оценк <i class="fas fa-caret-down"></i></a>
      <div class="dropdown-menu">
        <ul>
          <li><a href="#">overview</a></li>

          <li><a href="#">genre<i class="fas fa-caret-right"></i></a>
            <div class="dropdown-menu-1">
              <ul>
                <li><a href="#">oral 4</a></li>
                <li><a href="#">oral 6</a></li>

              </ul>
            </div>
          </li>
          <li><a href="#">Da Capo</a></li>
        </ul>
      </div>
    </li>
    <li><a href="#">简体中文</a></li>
    <li><a href="#">问题反馈</a></li>
  </ul>
</div>
<!-- menu-bar -->
<h1>&nbsp;</h1>


<!--the sequence of imported scripts cannot be changed -->
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<!-- <script src="https://cdn.bootcss.com/moment.js/2.22.1/moment-with-locales.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js"></script> -->
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="js/cetjs.js" ></script>

</body>
</html>