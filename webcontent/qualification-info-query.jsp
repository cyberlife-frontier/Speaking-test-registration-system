<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title> 资格信息查询</title>
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
        .toast-center-center {
        top: 50%;
        left: 50%;
        margin-top: -30px;
        margin-left: -150px;
    }
    .toast-center-center {
        top: 50%;
        left: 50%;
        margin-top: -30px;
        margin-left: -150px;
    }
</style>

  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  <link href="https://resource.neea.edu.cn/project/CET/Assets/global/css/components.css"  rel="stylesheet" type="text/css" />
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
  <script src="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-modal/js/bootstrap-modalmanager.js"></script>
  <script src="https://resource.neea.edu.cn/project/CET/Assets/global/plugins/bootstrap-modal/js/bootstrap-modal.js" type="text/javascript"></script>
  <script src="https://resource.neea.edu.cn/project/CET/scripts/public.js?v=2.00"></script>

</head>

<body>
<div id="zc_box" class="">
  <div id="zc_logo" style="background: url(images/zc_logo.jpg) no-repeat ; ">
    <div id="zc_logo_xx">
      <table  style="color: #A2A9B3;border:0;cellspacing:0;cellpadding:0;">
        <tr>
          <td style="width:40px;" ></td>
          <td>

            <a style="color:#A2A9B3;text-decoration:none;cursor:pointer;font-style: normal;"
               onmousemove="javascript: $(this).css('color', 'mediumorchid');" onmouseout="javascript: $(this).css('color', '#A2A9B3');"
               href="https://aics.neea.cn/CustomerChat/Index?projectCode=101&amp;"
               target="_blank" title="点击打开在线客服咨询网站（考生咨询版）">
              <i class="icon-onlinecustomerservice2"></i>&nbsp;
              在线客服
            </a>

          </td>
          <td style="width:20px;" ></td>
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
          <td style="width:10;" >&nbsp;</td>
        </tr>
      </table>
    </div>
  </div>


  <div id="zc_main" class="" style="height:auto;">

    <div id="zc_title" class="cen"><h1>资格信息查询</h1></div>

    <div id="zc_main_room">
    <form id="zcForm" action="StudentReg?method=query" method="post" target="_self">
      
      <div class="form-group form-md-line-input">
        
      </div>

      <!--证件号码-->
      <div class="form-group form-md-line-input">
        <input name="IDNumber" id="txtIDNumber" class="form-control placeholder" 
        type="text" placeholder="请输入证件号码" maxlength="18" >
        <label for="txtIDNumber"><span class="r">*</span>&nbsp;证件号码：</label>
        <span class="help-block">学籍证件号码</span>
      </div>

      <!--Error info-->
      <div class="form-group form-md-line-input">
       
        ${IDCradError}
      </div>

      <!--查询-->
      <div>
        <table style="width:100%;line-height: 44px;border:0;cellspacing:0;cellpadding:0" >
          <tr>
            <td align="center" >
              <button id="btnSearch" class="zc_button"  style="text-decoration: none;border:none;" type="submit"><span style="padding-right:30px;">查</span>询</button>
            </td>
          </tr>
        </table>
        <br />
      </div>
    </form>

    </div>
  </div>

  

  <div id="zc_footer" class="">
    <img src="https://resource.neea.edu.cn/project/CET/images/zc_footer.jpg" width="953" height="59" alt="" />
    <p class="t12" style="text-align:center">
                <span>
                    &copy;2023
                    <span style="padding-left:0.5em;">Nash</span>
                    <span style="padding-left:0.5em;">版权所有</span><br />
                </span>
    </p>
  </div>
</div>
</body>
</html>