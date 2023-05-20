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
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"> -->
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
          <li><a href="StuStatusInfo?method=fn">资质信息</a></li>
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

<!-- panel-custom -->
<div class="panel-custom" style="margin-left:29%;">
  <div class="panel-heading">
  
  </div>
  <div class="panel-body" >
  <!--search students info  -->
    <form  role="form" class="form-inline" action="ExamInfo?method=searchReg" method="post" >
      <div class="form-group">
        <label >条件：
          <select name="key" class="form-control" id="key-change"  onchange="csschange()">
            <option value="stu_ID_card" selected>证件号码</option>
            <option value="reg_subject">报考科目</option>
          </select>
        </label>
      </div>

      <div class="form-group" >
        <label >值：
          <input id="id-key" type="text" class="form-control" name="value" placeholder="关键字" maxlength="18" >
          <select id="sub-key" class="form-control" style="display:none;">
            <option value="1" >英语四级口试</option>
            <option value="2" >英语六级口试</option>
            <option value="3" >英语四级、六级口试</option>
          </select>
        </label>
      </div>

      <div class="form-group">
        <button type="submit" class="button-search ">
										<span style="margin-right: 5px"
                                              class="icon-search" aria-hidden="true">
										</span>开始搜索
        </button>
        <!--search students info  -->
      </div>
      <!-- add button-->
      <!-- <div class="form-group " style="margin-left: 40px">
        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#addUserModal">
										<span style="margin-right: 5px" class="" aria-hidden="true">
											<i class="fa fa-user-plus">添加学生信息</i>
											</span>
        </button>
        
      </div>add button -->
    </form>
  </div>
</div>
<!-- panel-custom -->

<!-- alter modal -->
<form method="post" action="ExamInfo?method=alterReg" class="form-horizontal" style="margin-top: 0px" role="form"
      id="alterFormData" style="margin: 20px;">
  <div class="modal fade" id="updateUserModal" tabindex="-1"
       role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"
                  aria-hidden="true">x</button>
          <h4 class="modal-title" id="MineModalLabel">修改学生报名信息</h4>
        </div>
        <div class="modal-body">
          
		<form class="form-horizontal" role="form">
	
            <div class="form-group">
              <label for="StuName" class="col-sm-3 control-label">姓名</label>
              <div class="col-sm-9">
               <input type="text" readonly class="form-control" id="StuName">
                       
              </div>
            </div>
	
            <div class="form-group">
              <label for="StuIdCard" class="col-sm-3 control-label">证件号码</label>
              <div class="col-sm-9">
                <input type="text" readonly required class="form-control" id="StuIdCard"
                       name="stu_ID_card">
              </div>
            </div>
	
            <!-- <input type="text" id="StuSubject"> -->
                       
            <div class="form-group">
              <label  class="col-sm-3 control-label">报考科目</label>
              <div class="col-sm-9">
                <input name="reg_subject"  id="reg_subject" type="hidden" value="" />
                 <label>
                      <input class="subject_checkbox" type="checkbox" value="1">英语四级口试
                </label>
                    &nbsp;&nbsp;
                <label>
                      <input class="subject_checkbox" id="cet6_checkbox" type="checkbox" value="2" disabled>英语六级口试
              	</label>
                 
              </div>
            </div>

          </form>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" onclick="check()">提交</button>
        </div>
      </div>
    </div>
  </div>
</form>
<!--alter modal-->

<!--delete modal-->
<form method="post" action=""
      class="form-horizontal" style="margin-top: 0px" role="form"
      id="delete_form_data" style="margin: 20px;">
  <div class="modal fade" id="delUserModal" tabindex="-1"
       role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"
                  aria-hidden="true">×</button>
          <h4 class="modal-title" id="DeleteModalLabel">删除学生报名信息</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <div class="col-sm-9">
                <p style="font-size:17px"  class="col-sm-18 control-label" id="deleteLabel">删除信息</p>
                <!-- <input type="hidden" class="form-control" id="tab"
                       name="tab" placeholder="" value="dor_admin"> -->
                <input type="hidden" required id="id"
                      name="stu_ID_card" >
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="submit" class="btn btn-danger">删除</button>
          <span id="tip"> </span>
        </div>
      </div>
    </div>
  </div>
</form>
<!--delete modal-->

<h3>&nbsp;</h3>

<!--sum of students registration-->
<h3 style=" color：blue; text-align:center" >共有学生${reg_count}人</h3>

<!--show students registration info-->	     
<div class="container">
  <table>
    <thead>
    <!-- 表页眉 -->
    <tr>
      <th>学生姓名</th>
      <th>证件号码</th>
      <th>报考科目</th>
      <th>操作</th>
    </tr>
    </thead>
    
    <tbody>
    <!-- 表主体 -->
    
    <c:forEach items="${StuReg }" var="sr">
    <tr>
      <td>${sr.stu_name }</td><!-- 姓名 -->
      <td>${sr.stu_ID_card }</td><!-- 身份证 -->
      <td>
      <c:if test="${sr.reg_subject==1 }">英语四级口试</c:if>
      <c:if test="${sr.reg_subject==2 }">英语六级口试</c:if>
      <c:if test="${sr.reg_subject==3 }">英语四级口试;英语六级口试</c:if>
      </td><!-- 资格科目 -->
      <td><!-- operation -->
      	 <button type="button" class="btn btn-default "
                  data-stu_name="${sr.stu_name}"  
                  data-stu_id_card="${sr.stu_ID_card}"
                  data-reg_subject="${sr.reg_subject}"
				  data-stu_subject="${sr.stu_subject }"
				
                  data-toggle="modal"
                  data-target="#updateUserModal">
        	<i class="fa fa-user-o">修改</i>
      	</button>
      <%-- <button type="button" class="btn btn-danger "
                data-stu_id_card="${sr.stu_ID_card}" data-toggle="modal"
                onclick="" data-target="#delUserModal">
          <i class="fa fa-user-times">删除</i>
        </button>  --%>
      </td><!--operation  -->
    </tr>
    </c:forEach>
    
    </tbody>
    <!--表主体  -->
  </table>
</div>
<!--show students info  -->


<!--the sequence of imported scripts cannot be changed -->
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="js/cetreg.js" ></script>

</body>
</html>