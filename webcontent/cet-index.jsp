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
  <link href="https://cdn.bootcss.com/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
  
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
          <li><a href="javascript:void(0)">资质信息</a></li>
          <li><a href="cet-reg-info.jsp">报名信息</a></li>
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

<!--搜索学生信息  -->
<div class="panel-custom">
  <div class="panel-heading">
  <button type="button" class="button-search" data-toggle="modal" data-target="#IssueTimeModal">发布</button>
  </div>
  <div class="panel-body" >
    <form  role="form" class="form-inline" action="StuBasicInfo?method=search" method="post" >
      <div class="form-group">
        <label >条件：
          <select name="key" class="form-control">
            <option value="stu_name">学生姓名</option>
            <option value="stu_gender">性别</option>
            <option value="stu_ID_type">证件类型</option>
          </select>
        </label>
      </div>

      <div class="form-group">
        <label >值：
          <input type="text" class="form-control" name="value" placeholder="关键字" maxlength="12" >
        </label>
      </div>

      <div class="form-group">
        <button type="submit" class="button-search ">
										<span style="margin-right: 5px"
                                              class="icon-search" aria-hidden="true">
										</span>开始搜索
        </button>
      </div>
      <!-- 添加按钮 -->
      <div class="form-group " style="margin-left: 40px">
        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#addUserModal">
										<span style="margin-right: 5px" class="" aria-hidden="true">
											<i class="fa fa-user-plus">添加学生信息</i>
											</span>
        </button>
      </div>
    </form>
  </div>
</div>

<!--添加  -->
<form method="post" action="StuBasicInfo?method=add" class="form-horizontal" style="margin-top: 0px;margin: 20px;" role="form"
      id="form_data">
  <div class="modal fade" id="addUserModal" tabindex="-1"
       role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"
                  aria-hidden="true">x</button>
          <h4 class="modal-title" id="myModalLabel">添加学生信息</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label for="stu_name" class="col-sm-3 control-label">姓名</label>
              <div class="col-sm-9">
                <input type="text" required class="form-control" id="stu_name"
                       name="stu_name" placeholder="请输入姓名">
              </div>

            </div>

            <div class="form-group">
              <label  class="col-sm-3 control-label">性别</label>
              <div class="col-sm-9">
                <input type="radio" checked value="男" class="gender" name="stu_gender"> 男
                &nbsp;&nbsp;&nbsp;
                <input type="radio" value="女" class="gender" name="stu_gender"> 女
              </div>
            </div>

            <div class="form-group">
              <label for="stu_ID_type" class="col-sm-3 control-label">证件类型</label>
              <div class="col-sm-9">
                <select required class="form-control" name="stu_ID_type" id="stu_ID_type">
                  <option value="中华人民共和国居民身份证">中华人民共和国居民身份证</option>
                  <option value="台湾居民往来大陆通行证">台湾居民往来大陆通行证</option>
                  <option value="中华人民共和国外国人永久居留身份证">中华人民共和国外国人永久居留身份证</option>
                  <option value="香港身份证">香港身份证</option>
                </select>

              </div>

            </div>

            <div class="form-group">
              <label for="stu_ID_card" class="col-sm-3 control-label">证件号码</label>
              <div class="col-sm-9">
                <input type="text" required class="form-control" id="stu_ID_card"
                       name="stu_ID_card" value="" placeholder="请输入证件号码">
              </div>

            </div>

            <div class="form-group">
              <label  class="col-sm-3 control-label">资格科目</label>
              <div class="col-sm-9">
                <input type="radio" checked value="1" name="stu_subject">英语四级口试
                &nbsp;&nbsp;&nbsp;
                <input type="radio" value="2" name="stu_subject">英语四级口试;英语六级口试
              </div>

            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="submit" class="btn btn-primary">提交</button>
        </div>
      </div>
    </div>
  </div>
</form>
<!-- 添加 -->

<!-- 修改 -->
<form method="post" action="StuBasicInfo?method=update" class="form-horizontal" style="margin-top: 0px" role="form"
      id="formdata" style="margin: 20px;">
  <div class="modal fade" id="updateUserModal" tabindex="-1"
       role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"
                  aria-hidden="true">x</button>
          <h4 class="modal-title" id="MineModalLabel">修改学生信息</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal" role="form">

            <div class="form-group">
              <label for="StuName" class="col-sm-3 control-label">姓名</label>
              <div class="col-sm-9">
                <input type="text" required class="form-control" id="StuName"
                       name="stu_name" placeholder="请输入姓名">
              </div>
            </div>

            <div class="form-group">
              <label class="col-sm-3 control-label">性别</label>
              <div class="col-sm-9">
                <input type="radio" checked value="男" class="gender" name="stu_gender"> 男
                &nbsp;&nbsp;&nbsp;
                <input type="radio" value="女" class="gender" name="stu_gender"> 女
              </div>
            </div>

            <div class="form-group">
              <label for="StuIdType" class="col-sm-3 control-label">证件类型</label>
              <div class="col-sm-9">
                <select required class="form-control" name="stu_ID_type" id="StuIdType">
                  <option value="中华人民共和国居民身份证">中华人民共和国居民身份证</option>
                  <option value="台湾居民往来大陆通行证">台湾居民往来大陆通行证</option>
                  <option value="中华人民共和国外国人永久居留身份证">中华人民共和国外国人永久居留身份证</option>
                  <option value="香港身份证">香港身份证</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="StuIdCard" class="col-sm-3 control-label">证件号码</label>
              <div class="col-sm-9">
                <input type="text" readonly required class="form-control" id="StuIdCard"
                       name="stu_ID_card">
              </div>
            </div>

            <div class="form-group">
              <label  class="col-sm-3 control-label">资格科目</label>
              <div class="col-sm-9">
                <input type="radio" checked value="1" name="stu_subject" class="subject">英语四级口试
                &nbsp;&nbsp;&nbsp;
                <input type="radio" value="2" name="stu_subject" class="subject">英语四级口试;英语六级口试
              </div>
            </div>

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="submit" class="btn btn-primary">提交</button>
        </div>
      </div>
    </div>
  </div>
</form>
<!--修改-->

<!--delete modal-->
<form method="post" action="StuBasicInfo?method=delete"
      class="form-horizontal" style="margin-top: 0px" role="form"
      id="delete_form_data" style="margin: 20px;">
  <div class="modal fade" id="delUserModal" tabindex="-1"
       role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"
                  aria-hidden="true">×</button>
          <h4 class="modal-title" id="DeleteModalLabel">删除学生信息</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <div class="col-sm-9">
                <p style="font-size:20px"  class="col-sm-18 control-label" id="deleteLabel">删除信息</p>
                <!-- <input type="hidden" class="form-control" id="tab"
                       name="tab" placeholder="" value="dor_admin"> -->
                <input type="hidden" required id="id"
                      name="stu_ID_card" placeholder="">
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

<!--issue test time-->
<form method="post" action="ExamInfo?method=time" class="form-horizontal" style="margin-top: 0px" role="form"
      id="issuetimedata" style="margin: 20px;">
  <div class="modal fade" id="IssueTimeModal" tabindex="-1"
       role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"
                  aria-hidden="true">x</button>
          <h4 class="modal-title" id="issuetime">发布考试时间</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal" role="form">
			
			<!-- beginning -->
            <div class="form-group">
              <label for="beginning" class="col-sm-3 control-label">起始时间</label>
              <div class="col-sm-9">

                <input type="text" id="beginning" class="form-control" name="beginning" />
              </div>
            </div>
			<!-- beginning -->
			
			<!--deadline  -->
            <div class="form-group">
              <label for="deadline" class="col-sm-3 control-label">截止时间</label>
              <div class="col-sm-9">
                <input type="text" id="deadline" class="form-control" name="deadline" />

              </div>
            </div>
			<!--deadline  -->
			
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="submit" class="btn btn-primary">提交</button>
        </div>
      </div>
    </div>
  </div>
</form>
<!--issue test time-->

<h3>&nbsp;</h3>
<!--获取学生信息-->
<h3 style=" color：blue; text-align:center" >共有学生${stu_count}人</h3>

<!--学生信息-->	     
<div class="container">
  <table>
    <thead>
    <!-- 表页眉 -->
    <tr>
      <th>学生姓名</th>
      <th>性别</th>
      <th>证件类型</th>
      <th>证件号码</th>
      <th>资格科目</th>
      <th>操作</th>
    </tr>
    </thead>
    
    <tbody>
    <!-- 表主体 -->
    
    <c:forEach items="${StuBasicInfo }" var="sbi">
    <tr>
      <td>${sbi.stu_name }</td><!-- 姓名 -->
      <td>${sbi.stu_gender }</td><!--性别  -->
      <td>${sbi.stu_ID_type }</td><!-- 身份证类型 -->
      <td>${sbi.stu_ID_card }</td><!-- 身份证 -->
      <td>
      <c:if test="${sbi.stu_subject == 1 }">英语四级口试</c:if>
      <c:if test="${sbi.stu_subject == 2 }">英语四级口试;英语六级口试</c:if>
      </td><!-- 资格科目 -->
      <td>
      	 <button type="button" class="btn btn-default "
                  data-stu_name="${sbi.stu_name }"
                  data-stu_gender="${sbi.stu_gender }"
                  data-stu_id_type="${sbi.stu_ID_type }"
                  data-stu_id_card="${sbi.stu_ID_card }"
                  data-stu_subject="${sbi.stu_subject }"

                  data-toggle="modal"
                  data-target="#updateUserModal">
        	<i class="fa fa-user-o">修改</i>
      	</button>
      <button type="button" class="btn btn-danger "
                data-stu_id_card="${sbi.stu_ID_card }" data-toggle="modal"
                onclick="" data-target="#delUserModal">
          <i class="fa fa-user-times">删除</i>
        </button> 学籍信息
      </td>
    </tr>
    </c:forEach>
    
    </tbody>
    <!--表主体  -->
  </table>
</div>
<!--学生信息  -->

<!--the sequence of imported scripts cannot be changed -->
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/moment.js/2.22.1/moment-with-locales.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="js/cetjs.js" ></script>

</body>
</html>