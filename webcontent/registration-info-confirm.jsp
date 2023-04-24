<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>报名信息查询结果</title>
  <link rel="icon" href="images/cet.ico" type="image/x-icon">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta content="" name="description" />
  <meta content="" name="author" />
  <style>
        body {
        background: url(https://resource.neea.edu.cn/project/CET/images/top_bg_stu.jpg) repeat-x top #ebeff2;
      }
        .icon-onlinecustomerservice2 {
            background: rgba(0, 0, 0, 0) url(https://resource.neea.edu.cn/project/CET/images/onlinecustomerservice2.png) no-repeat scroll 0 0;
        }
        .toast-pink {
            background-color: #AB4F92;
        }
        .toast-green {
            background-color: forestgreen;
        }
    </style>

  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/css/components.css" id="style_components" rel="stylesheet" type="text/css" />
  <link href="https://resource.neea.edu.cn/project/CET/Assets/admin/layout/css/layout.css" rel="stylesheet" type="text/css" />
  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-validator/css/bootstrapValidator.min.css" rel="stylesheet" />
  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="https://resource.neea.edu.cn/project/CET/jquery-easyui/themes/ap/easyui.css">
  <link rel="stylesheet" type="text/css" href="https://resource.neea.edu.cn/project/CET/jquery-easyui/themes/icon.css">

  <link href="https://resource.neea.edu.cn/project/CET/Content/ufo.css?v=1.02" rel="stylesheet" type="text/css" />

  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-toastr/toastr.min.css" rel="stylesheet" />
  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css" rel="stylesheet" type="text/css" />
  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-modal/css/bootstrap-modal.css" rel="stylesheet" type="text/css" />

  <script src="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/jquery.min.js" type="text/javascript"></script>
  <script src="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
  <script src="https://resource.neea.edu.cn/project/CET/Assets/global/scripts/metronic.js"></script>
  <script src="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-validator/bootstrap-validator.min.js"></script>
  <script src="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-validator/language/zh_CN.js"></script>
  <script src="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
  <script src="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js"></script>
  <script src="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-toastr/toastr.min.js"></script>
  <script type="text/javascript" src="https://resource.neea.edu.cn/project/CET/jquery-easyui/jquery.easyui.min.js"></script>
  <script src="https://resource.neea.edu.cn/project/CET/jquery-easyui/locale/easyui-lang-zh_CN.js"></script>
  <script src="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-modal/js/bootstrap-modalmanager.js"></script>
  <script src="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-modal/js/bootstrap-modal.js" type="text/javascript"></script>

  <script src="https://resource.neea.edu.cn/project/CET/scripts/public.js?v=2.00"></script>

</head>

<body onload="essential()">
<div id="zc_box" class="">
  <div id="zc_logo" style="background: url(images/zc_logo.jpg) no-repeat ; ">
    <div id="zc_logo_xx">
      <table  style="border:0; cellspacing:0; cellpadding:0; color: #A2A9B3;">
        <tr>
          <td style="width:40px;"></td>
          <td>

            <a style="color:#A2A9B3;text-decoration:none;cursor:pointer;font-style: normal;"
               onmousemove="javascript: $(this).css('color', 'mediumorchid');"
               onmouseout="javascript: $(this).css('color', '#A2A9B3');"
               href="https://aics.neea.cn/CustomerChat/Index?projectCode=101&amp;
               secret=" target="_blank" title="点击打开在线客服咨询网站（考生咨询版）">
              <i class="icon-onlinecustomerservice2"></i>&nbsp;
              在线客服
            </a>

          </td>
          <td style="width:20px" ></td>
          <td>
            <i class="icon-user" />&nbsp; 姓名：
          </td>
          <td>
            <span class="r">未设置</span>
          </td>

          <td style="width:20px;" ></td>
          <td>
            <i class="fa fa-ra" />&nbsp;&nbsp;考次：
          </td>
          <td><span>2023年上半年CET考试</span></td>

          <td style="width:20px;" ></td>
          <td>
            <a style="color:#A2A9B3;text-decoration:none;cursor:pointer;font-style: normal;" onmousemove="javascript: $(this).css('color', 'mediumorchid');" onmouseout="javascript: $(this).css('color', '#A2A9B3');" href="" title="点击退出报名系统">
              <i class="fa fa-sign-out"></i>&nbsp;
              退出
            </a>
          </td>
          <td style="width:10px;" >&nbsp;</td>
        </tr>
      </table>
    </div>
  </div>
	
	<form>
		<input type="hidden" id="checkbox_flag" value="${StuReg.stu_subject }" />
        <input type="hidden" id="checkbox_flag2" value="${StuReg.reg_subject }" />
	</form>

  <div id="zc_main" class="" style="height:auto;">
    <div id="zc_title" class="cen"><h1>报名信息查询与修改</h1></div>

    <div id="zc_xin_room">


      <div id="divStuentInfo">
        <form id="zc_checkbox">
          <input type="hidden" id="checkbox_flag" value="2" />
        <table class="ufo_table_02"
               style="width: 827px;margin-bottom: 20px;margin-top:25px;margin-left:3px;">
          <tr>
            <td style="width:130px;" >
              <img src="" class="zp" style="height: 160px; width: 120px; " id="imgPhotoShow" alt=""/>
            </td>
            <td>
              <table style="cellpadding:0; cellspacing:0; border:0;">
                <tr style="height: 30px;">
                  <td class="lz_td1" style="align:right;" ><span>姓　　名：</span></td>
                  <td class="lz_td2"><span id="lblName">${StuReg.stu_name }</span></td>
                </tr>

                <tr style="height: 30px;">
                  <td class="lz_td1" style="align:right;" ><span>证件号码：</span></td>
                  <td class="lz_td2"><span id="lblIDNumber1">${StuReg.stu_ID_card }</span></td>
                </tr>
                <tr style="height: 30px;">
                  <td class="lz_td1" style="align:right;" ><span>资格科目：</span></td>
                  <td class="lz_td2">
                  <span id="lblIDNumber" title="CET4、CET6、CET-SET4、CET-SET6">
                  <c:if test="${StuReg.stu_subject == 1 }">英语四级口试</c:if>
                  <c:if test="${StuReg.stu_subject == 2 }">英语四级口试;英语六级口试</c:if>
                  </span></td>
                </tr>
                <tr style="height: 30px;">
                  <td class="lz_td1" style="align:right;"><span>报考科目：</span></td>
                  <td class="lz_td2">
                  
                    <label>
                      <input  class="zc_a_checkbox" name="subject" type="checkbox" value="1">英语四级口试
                    </label>
                   &nbsp;&nbsp;&nbsp;
                    <label>
                      <input  class="zc_a_checkbox" id="cet6_checkbox" name="subject" type="checkbox" value="2" disabled>英语六级口试
                    </label>

                  </td>

                </tr>

              </table>
            </td>
          </tr>
         </table>
        </form>
      </div>

      <div class="zc_goux md-checkbox-inline">
        <div class="md-checkbox" style="margin:0px;" title="如勾选按钮无法点击，说明浏览器不兼容，请使用首页推荐浏览器">
          <input id="chkAssure" class="md-check" type="checkbox" autocomplete="off">
          <label for="chkAssure">
            <span></span>
            <span class="check"></span>
            <span class="box"></span>
          </label>
        </div>
        <span class="r" style="padding: 0 10px 0 0;">*</span>我已修改报名信息并确认无误
      </div>
      <div style="align:center;" >
        <table style="width:90%; border:0; cellspacing:0; cellpadding:0;" >
          <tr>
            <td width="50%" align="center" >
              <a id="btnDisagree" class="zc_button" style="text-decoration:none;" onclick="toIndex()">返回首页</a>
            </td>

            <td width="50%" align="center" >
              <form></form>
              <div id="divAgree" style="display:none;">
                <a id="btnAgree" class="zc_button" style="text-decoration:none;" onclick="toSaveAndContinue()">保存并继续</a>
              </div>
              <span id="spanAgree" class="zc_button">请勾选确认</span>
            </td>
          </tr>
        </table>
      </div>

      <br/>

    </div>

  </div>

  <form id="zcForm" action='' method="post" target="_self">
    <input name="stu_ID_card" type="hidden" value="${StuReg.stu_ID_card }" />
    <input name="reg_subject"  id="reg_subject" type="hidden" value="" />
  </form>

  <script src="js/reginfoconfirm.js"></script>

  <div id="zc_footer" class="">
    <img src="https://resource.neea.edu.cn/project/CET/images/zc_footer.jpg" width="953" height="59" alt="" />
    <p class="t12" style="text-align:center">
                <span>
                    &copy;2023
                    <span style="padding-left:0.5em;">教育部教育考试院</span>
                    <span style="padding-left:0.5em;">版权所有</span><br />
                </span>
    </p>
  </div>
</div>
</body>
</html>