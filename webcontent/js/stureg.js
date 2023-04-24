function essential(){
var iden = document.getElementById("checkbox_flag").value;
//console.log(iden);
if(iden == 2){
    $('#cet6_checkbox').removeAttr('disabled');
};
}
var count = 0;

function check(){

var arr=document.getElementsByName("subject");
    //console.log(arr);
	//var checkList = [];
	for(i = 0; i < arr.length; i++){
		if(arr[i].checked){
			count = count +  parseInt(arr[i].value) ;
		}
	}
	//alert(count);
    $("#reg_subject").attr('value', count);
};

    $(function () {

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
		
        if (!$('#chkAssure').is(':checked')) {
            $.messager.alert('提示', '请先勾选“我已检查并确认学籍与资格信息正确”！', 'warning');
            return;
        }
        
         check();
         
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
                $.messager.alert('提示', '报名成功！', 'info');
                
                 setTimeout("Refresh()",100);
            }
        });
    }

    function Refresh() {
        $("#zcForm").attr('target', '_self');
        $("#zcForm").attr('action', 'StudentReg?method=choosesub');
        $("#zcForm").submit();
    }
