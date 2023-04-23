var arr = document.getElementsByClassName("subject_checkbox");
var count = 0;
$('#updateUserModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget)
        var StuName = button.data('stu_name')
        var StuIdCard = button.data('stu_id_card')
        var RegSubject = button.data('reg_subject')
        var StuSubject = button.data('stu_subject')
        
        arr[0].checked = true;
        arr[1].checked =true;
        
        if(RegSubject){
        $('.subject_checkbox').removeAttr('checked');
       }
        
		if(StuSubject == "2"){
    		$('#cet6_checkbox').removeAttr('disabled');
		}else{
			$('#cet6_checkbox').attr('disabled','disabled');
			$('#cet6_checkbox').removeAttr('checked');
		}
		
		switch(RegSubject){
		case 2:
            arr[0].checked =false;
		    break;
		case 1:
		    arr[1].checked =false;
		    break;
		}
		
        var modal = $(this)

        modal.find('#StuName').val(StuName)
        modal.find('#StuIdCard').val(StuIdCard)
		/*modal.find('#RegSubject').val(RegSubject)*/
		//modal.find('#StuSubject').val(StuSubject)
	
  });
   
  function check(){
//var arr=document.getElementsByName("subject");
    //console.log(arr);
	//var checkList = [];
	for(i = 0; i < arr.length; i++){
		if(arr[i].checked){
			count = count +  parseInt(arr[i].value) ;
		}
	}

    if(count == 0){
    	alert("您还没有选择科目");
    	return;
    }else{
        $("#reg_subject").attr('value', count);
        confirmSaveAndContinue();
    }
};

function confirmSaveAndContinue(){
    $("#alterFormData").submit();
}; 
   
$('#addUserModal').on('show.bs.modal');

$('#delUserModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget)
        var stu_id_card = button.data('stu_id_card')
        var modal = $(this)
        
        modal.find('#deleteLabel').text('是否删除身份证号码为  ' + stu_id_card + ' 的信息')
        modal.find('#id').val(stu_id_card)
        
    });
    
    
