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
  <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"> -->
  
  <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"> -->
  <link href="https://cdn.bootcss.com/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
  
</head>
<body onload="checkstate()">

<div class="video-wrap">
    <video class="video-wrap__video" poster="images/graduation travell2.jpg" src="videos/graduation travell2.mp4"  tabindex="-1" airplay="allow" x-webkit-airplay="true" playsinline="true" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="true" autoplay muted playsinline loop></video>
</div>

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
          <li><a href="ExamInfo?method=allReg">报名信息</a></li>
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
<div><input type="hidden" id="state" value="${StuReg }"></div>
<!-- panel-custom -->
<div class="panel-custom">
  <div class="panel-heading">
  <button type="button" class="button-search" data-toggle="modal" data-target="#IssueTimeModal">发布</button>
  </div>
  <div class="panel-body" >
  <!--search students info  -->
    <form  role="form" class="form-inline" action="StuBasicInfo?method=search" method="post" >
      <div class="form-group">
        <label style="color:white;">条件：
          <select name="key" class="form-control" id="key-change"  onchange="csschange()">
            <option value="stu_name">学生姓名</option>
            <option value="stu_gender">性别</option>
            <option value="stu_subject">资格科目</option>
            <option value="stu_ID_type">证件类型</option>
          </select>
        </label>
      </div>

      <div class="form-group">
        <label style="color:white;">值：
          <input id="id-key" type="text" class="form-control" name="value" placeholder="关键字" maxlength="12" >
          <select id="gen-key" class="form-control" style="display:none;">
            <option value="男" >男</option>
            <option value="女" >女</option>
          </select>
          <select id="sub-key" class="form-control" style="display:none;">
            <option value="1" >英语四级口试</option>
            <option value="2" >英语四级、六级口试</option>
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
      <div class="form-group " style="margin-left: 40px">
        <button title="addStu" type="button" class="btn btn-default" data-toggle="modal" data-target="#addUserModal">
										<span style="margin-right: 5px" class="" aria-hidden="true">
											<i class="fa fa-user-plus">添加学生信息</i>
											</span>
        </button>
       
      </div> <!-- add button -->
    </form>
  </div>
</div>
<!-- panel-custom -->

<!--add modal  -->
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
           
            <div class="form-group">
            <input type="hidden" name="university" id="university">
            <input type="hidden" name="campus" id="campus">
            <input type="hidden" name="school" id="school">
            <input type="hidden" name="major" id="major">
            <input type="hidden" name="class" id="class">
            <input type="hidden" name="stunum" id="stunum">
            <input type="hidden" name="eduback" id="eduback">
            <input type="hidden" name="lengthschool" id="lengthschool">
            <input type="hidden" name="enrollschool" id="enrollschool">
            <input type="hidden" name="grade" id="grade">
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
<!-- add modal -->

<!-- alter modal -->
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
<!--alter modal-->

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
                <p style="font-size:17px"  class="col-sm-18 control-label" id="deleteLabel">删除信息</p>
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

<!--statistics-->
<div class="modal fade" id="staExamInfo" tabindex="-1"
     role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"
                aria-hidden="true">x</button>
        <h4 class="modal-title" >考场信息统计</h4>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-hover table-striped table-condensed" 
        style="line-height:50px;border:0;">
        <c:forEach items="${CamStat}" var="cs">
        	<c:if test="${cs.university ne ''}">
        	      <tr>
        	      <th >${cs.university }</th>
        	      <th >${cs.count }人</th>
        	      </tr>  
           </c:if>
           
           <tr>
           <c:if test="${cs.campus ne ''}">
           	<td>${cs.campus }</td>
           	<td>${cs.count }人</td>
           	</c:if>
           </tr>   
           
		</c:forEach>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger " data-dismiss="modal">关闭</button>
       
      </div>
    </div>
  </div>
</div>
<!--statistics-->

<!--status info-->
<div class="modal fade" id="stuStatusInfo" tabindex="-1"
     role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
        <div class="zc_a_box" >

          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"
                  aria-hidden="true">x</button>
            <h4 class="modal-title" >学籍信息</h4>
          </div>

          <div class="row">
            <div class="col-md-12"  >

              <table class="table table-bordered table-hover table-striped table-condensed" 
              style="line-height:50px;border:0;">
                <tr>
                  <td class="lz_td1">笔试报名学校：</td>
                  <td class="lz_td2" colspan="3" id="University"></td>
                </tr>
                <tr>
                  <td class="lz_td1">笔试报名校区：</td>
                  <td class="lz_td2" colspan="3" id="Campus"></td>
                </tr>

                <tr>
                  <td class="lz_td1">学　　历：</td>
                  <td class="lz_td2" id="EduBack"></td>
                  <td class="lz_td1">学　　制：</td>
                  <td class="lz_td2" id="LengthSchool"></td>
                </tr>

                <tr>
                  <td class="lz_td1">入学年份：</td>
                  <td class="lz_td2" id="EnrollSchool"></td>
                  <td class="lz_td1">年　　级：</td>
                  <td class="lz_td2" id="Grade"></td>
                </tr>

                <tr>
                  <td class="lz_td1">院　　系：</td>
                  <td class="lz_td2" id="School"></td>
                  <td class="lz_td1">专　　业：</td>
                  <td class="lz_td2" id="Major"></td>
                </tr>

                <tr>
                  <td class="lz_td2">班　　级：</td>
                  <td class="lz_td1" id="StuClass"></td>
                  <td class="lz_td1">学　　号：</td>
                  <td class="lz_td2" id="StuNum"></td>
                </tr>

                <tr>
                  <td class="lz_td1">备　　注：</td>
                  <td class="lz_td2" colspan="3"></td>
                </tr>
              </table>
            </div><!--col-md-12-->
          </div><!--row-->
        </div><!--zc_a_box-->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger " data-dismiss="modal">关闭</button>
        </div>
    </div><!--modal-content-->
  </div><!--modal-dialog-->
</div>
<!--status info-->

<h3>&nbsp;</h3>

<!--sum of students-->
<div style="display:flex;justify-content:center;">
  <p style="font-size:20px;color:white;">共有学生<i style=" color:green;" >${stu_count}</i> 人</p>
  <button type="button" class="button-default" data-toggle="modal"
          data-target="#staExamInfo">统计</button>
</div>

<!--show students info-->	     
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
    
    <c:forEach items="${StuBasicInfo }" var="sbi" varStatus="state">
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
      <!-- updateUserModal -->
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
      <!-- updateUserModal -->
      <!-- delUserModal -->
      <button type="button" class="btn btn-danger "
                data-stu_id_card="${sbi.stu_ID_card }" data-toggle="modal"
                onclick="" data-target="#delUserModal">
          <i class="fa fa-user-times">删除</i>
        </button> 
        <!-- delUserModal -->
        <!-- StuBasicInfo -->
        <button type="button" class="btn btn-default "
        		data-stu_id_card="${StuStatusInfo[state.index].stu_ID_card }"
        		data-university="${StuStatusInfo[state.index].university }"
        		data-campus="${StuStatusInfo[state.index].campus }"
        		data-school="${StuStatusInfo[state.index].school }"
        		data-major="${StuStatusInfo[state.index].major }"
        		data-stu_class="${StuStatusInfo[state.index].stu_class }"
        		data-grade="${StuStatusInfo[state.index].grade }"
        		data-stunum="${StuStatusInfo[state.index].stunum }"
        		data-eduback="${StuStatusInfo[state.index].eduback }"
        		data-lengthschool="${StuStatusInfo[state.index].lengthschool }"
        		data-enrollschool="${StuStatusInfo[state.index].enrollschool }"
                 data-toggle="modal"
                 data-target="#stuStatusInfo">
          <i class="fa fa-user-times">学籍信息</i>
        </button>
      </td>
    </tr>
    </c:forEach>
    
    </tbody>
    <!--表主体  -->
  </table>
</div>
<!--show students info  -->


<!--the sequence of imported scripts cannot be changed -->
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/moment.js/2.22.1/moment-with-locales.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="js/cetjs.js" ></script>

</body>
</html>