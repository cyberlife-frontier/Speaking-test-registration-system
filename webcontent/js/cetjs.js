let url ="https://www.fastmock.site/mock/4e9965370d6de407098f588f3c173eaf/getstuinfo/getinfo"
      $.ajax({
      url: url,
      type: "get",
      dataType: "json",
      success: function(data) {
          StuStatusInfo = data.StuStatusInfo
          schoolInfo = StuStatusInfo.schoolInfo
          StuInfo = StuStatusInfo.StuInfo
          
          $("#university").val(StuStatusInfo.university)
          $("#campus").val(StuStatusInfo.campus)
          $("#school").val(schoolInfo.school)
          $("#major").val(schoolInfo.major)
          $("#class").val(schoolInfo.class)
          $("#stunum").val(StuInfo.stunum)
          $("#eduback").val(StuInfo.eduback)
          $("#lengthschool").val(StuInfo.lengthschool)
          $("#enrollschool").val(StuInfo.enrollschool)
          $("#grade").val(StuInfo.grade)
      },
      error:function (error) {
          console.log(error)
      }
})

function checkstate(){
	if($("#state").val() == "signed"){
		alert("该学生已经报名，无法删除")
		
	}
}

function csschange(){
    var key =  $("#key-change option:selected").val();
    //console.log(key);
    $('#id-key').attr("name","value");
    $('#gen-key').attr("name","value");
    $('#sub-key').attr("name","value");
    switch(key){
		case "stu_subject":
			$('#id-key').removeAttr("name");
        	$('#id-key').hide();
        	$('#gen-key').removeAttr("name");
        	$('#gen-key').hide();
        	$('#sub-key').show();
		break;
		case "stu_gender":
			$('#id-key').removeAttr("name");
        	$('#id-key').hide();
			$('#gen-key').show();
			$('#sub-key').removeAttr("name");
        	$('#sub-key').hide();
		break;
		case "stu_name":
		case "stu_ID_type":
			$('#id-key').show();
			$('#gen-key').removeAttr("name");
        	$('#gen-key').hide();
        	$('#sub-key').removeAttr("name");
        	$('#sub-key').hide();
		break;
	}
    
    /*if(key == "stu_subject"){
        $('#id-key').removeAttr("name");
        $('#id-key').hide();
        $('#sub-key').show();
    }else{
    //document.getElementById("sub-key").style.display="inline";
        $('#id-key').show();
        $('#sub-key').removeAttr("name");
        $('#sub-key').hide();

    }*/

};

$('#updateUserModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget)
        var stuName = button.data('stu_name')
        var stuGender = button.data('stu_gender')
        var stuIdType = button.data('stu_id_type')
        var stuIdCard = button.data('stu_id_card')
        var stuSubject = button.data('stu_subject')

        var modal = $(this)

        modal.find('#StuName').val(stuName)
        modal.find('#StuIdType').val(stuIdType)
        modal.find('#StuIdCard').val(stuIdCard)

        var subject = modal.find('.subject')
            for(var i=0;i<subject.length;i++){
                if(stuSubject == $(subject.get(i)).val()){
                        $(subject.get(i)).prop('checked',true)
                }
            }

        var list = modal.find('.gender')
        for(var i=0;i<list.length;i++){
            if(stuGender == $(list.get(i)).val()){
                $(list.get(i)).prop('checked',true)
            }
        }

    });

    $('#IssueTimeModal').on('show.bs.modal', function(event) {
            let temp = new Date();
                let time = temp.toLocaleDateString();

                $("#beginning").datetimepicker({
                    format: 'YYYY-MM-DD HH:mm:ss',
                    locale: moment.locale('zh-CN'),
                    minDate: time,
                });

                $("#deadline").datetimepicker({
                    format: 'YYYY-MM-DD HH:mm:ss',
                    locale: moment.locale('zh-CN'),
                    minDate: time,
                });

    });

$('#stuStatusInfo').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget)
        var University = button.data('university')
		var Campus = button.data('campus')
		var School = button.data('school')
		var Major = button.data('major')
		var stuClass = button.data('stu_class')
		var Grade = button.data('grade')
		var stuNum = button.data('stunum')
		var eduBack = button.data('eduback')
		var lengthSchool = button.data('lengthschool')
		var enrollSchool = button.data('enrollschool').slice(0,10)

        var modal = $(this)
		
		modal.find('#University').text(University)
        modal.find('#Campus').text(Campus)
        modal.find('#School').text(School)
        modal.find('#Major').text(Major)
        modal.find('#StuClass').text(stuClass)
        modal.find('#Grade').text(Grade)
        modal.find('#StuNum').text(stuNum)
        modal.find('#EduBack').text(eduBack)
        modal.find('#LengthSchool').text(lengthSchool)
        modal.find('#EnrollSchool').text(enrollSchool)
     
    });

$('#addUserModal').on('show.bs.modal');

$('#delUserModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget)
        var stu_id_card = button.data('stu_id_card')
        var modal = $(this)
        /*modal.find('.modal-title').text('删除宿管信息')*/
        modal.find('#deleteLabel').text('是否删除身份证号码为  ' + stu_id_card + ' 的信息')
        modal.find('#id').val(stu_id_card)
        
    });
    
    
