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

        if (!$('#chkAssure').is(':checked')) {
            $.messager.alert('提示', '请先勾选“我已检查并确认学籍与资格信息正确”！', 'warning');
            return;
        }else {
             confirmSaveAndContinue();
        };

    };

    function confirmSaveAndContinue() {
        $.messager.confirm('提示', '保存成功后，学籍信息将<font color="red">无法修改</font>。<br/>如果信息<font color="red">有误</font>，请<font color="red">先联系学校老师</font>修正，以免影响参加<font color="red">考试</font>和<font color="red">成绩单/证书</font>信息。<br/>确认学籍信息无误并继续？', function (r) {
             if (r) {
                $('#btnAgree').removeAttr('onclick');
                $('#btnDisagree').removeAttr('onclick');
                $.messager.alert('提示', '保存成功！', 'info');
                 setTimeout(function () {
                    $("#zcForm").attr('action', 'StudentReg?method=addCandidate');
                    $("#zcForm").submit();
                    }, 100);
            }
        });
    }

    function Refresh() {
        $("#zcForm").attr('target', '_self');
        $("#zcForm").attr('action', 'StudentReg?method=addCandidate');
        $("#zcForm").submit();
    }
