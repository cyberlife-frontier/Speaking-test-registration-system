<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="com.util.JDBCUtil" import="java.sql.*"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>主页</title>
  <!-- https://fontawesome.com/v5/search?s=solid%2Cbrands -->
  <!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>-->
  <link rel="stylesheet" href="css/style.css"> 
</head>
<body>
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
          <li><a href="#">综述</a></li>
          <li><a href="#">添加</a></li>
        </ul>
      </div>
    </li>

    <li><a href="#">grade <i class="fas fa-caret-down"></i></a>
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
<!--<div class="hero">
  &nbsp;
</div>-->
<!--获取学生信息-->
	<%Connection connection = JDBCUtil.getDBconnection();
      String sql="select * from  stu_basic_info "; 
      PreparedStatement pstmt= connection.prepareStatement(sql,ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_UPDATABLE);   
      ResultSet rs=pstmt.executeQuery();  
      rs.last(); //移至最后一条记录 
      %>
    <h1 style=" color：blue; text-align:center" >共有学生<%=rs.getRow()%>人</h1>		
         
<div class="container"><!--学生信息-->
  <table>
    <thead><!-- 表页眉 -->
    <tr>
      <th>学生姓名</th>
      <th>性别</th>
      <th>证件类型</th>
      <th>证件号码</th>
      <th>资格科目</th>
      <th>操作</th>
    </tr>
    </thead>
    
    <tbody><!-- 表主体 -->
    <% rs.beforeFirst(); //移至第一条记录之前
             while(rs.next()){
            	 String str ="";
            	 if(rs.getInt(5)== 1) str = "英语四级口试";
            	 else str = "英语四级口试;英语六级口试";
          %> 
    <tr>
      <td><%= rs.getString(4) %></td><!-- 姓名 -->
      <td><%= rs.getString(3) %></td><!--性别  -->
      <td><%= rs.getString(2) %></td><!-- 身份证类型 -->
      <td><%= rs.getString(1) %></td><!-- 身份证 -->
      <td><%=str  %></td><!-- 资格科目 -->
      <td>修改 删除 学籍信息</td>
    </tr>
    <% }%>
    
    </tbody><!--表主体  -->
  </table>
</div>

</body>
</html>