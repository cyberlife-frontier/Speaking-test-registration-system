var count = 0;
function essential(){
var iden = document.getElementById("checkbox_flag").value;
var iden2 = document.getElementById("checkbox_flag2").value;
var arr = document.getElementsByClassName("zc_a_checkbox");
/*console.log(arr)
console.log(iden)
console.log(iden2)*/
if(iden == 2){
    $('#cet6_checkbox').removeAttr('disabled');
}
switch (iden2){
	case "3":
		arr[0].checked = true;
		arr[1].checked = true;
		break;
	case "2":
		arr[1].checked = true;
		break;
	case "1":
		arr[0].checked =true;
		break;
}
}

function check(){
var arr=document.getElementsByName("subject");
    //console.log(arr);
	//var checkList = [];
	for(i = 0; i < arr.length; i++){
		if(arr[i].checked){
			count = count +  parseInt(arr[i].value) ;
		}
	}

    $("#reg_subject").attr('value', count);

};


    $(function () {
        $("#imgPhotoShow").attr('src', 'images/AI.png' );
        if ($('#chkAssure').is(':checked')) {
            $('#spanAgree').hide();
            $('#divAgree').show();
        }
        else {
            $('#spanAgree').show();
            $('#divAgree').hide();
        }
    });

    $('#chkAssure').click(function () {
        if ($('#chkAssure').is(':checked')) {
            $('#spanAgree').hide();
            $('#divAgree').show();
        }
        else {
            $('#spanAgree').show();
            $('#divAgree').hide();
        }
    });


    function toIndex() {
        $.messager.confirm('提示', '返回首页？', function (r) {
            if (r) {
                location.href = 'forward-to-stusignup.jsp';
            }
        });
    };

    function toSaveAndContinue() {
		check();
        if (!$('#chkAssure').is(':checked')) {
            $.messager.alert('提示', '请先勾选“我已检查并确认学籍与资格信息正确”！', 'warning');
            return;
        }
        //alert(count)
         if(count == 0){
         $.messager.alert('提示', '您还未选择报考科目”！', 'warning')
         return;
         }
             confirmSaveAndContinue();

    };

    function confirmSaveAndContinue() {
        $.messager.confirm('提示', '保存成功后，学籍信息将<font color="red">无法修改</font>。<br/>如果信息<font color="red">有误</font>，请<font color="red">先联系学校老师</font>修正，以免影响参加<font color="red">考试</font>和<font color="red">成绩单/证书</font>信息。<br/>确认学籍信息无误并继续？', function (r) {
             if (r) {
                $('#btnAgree').removeAttr('onclick');
                $('#btnDisagree').removeAttr('onclick');
                $.messager.alert('提示', '保存成功！', 'info');
                 setTimeout("Refresh()", 100);
            }
        });
    }

    function Refresh() {
        $("#zcForm").attr('target', '_self');
        $("#zcForm").attr('action', 'StudentReg?method=confirmReg');
        $("#zcForm").submit();
    }
