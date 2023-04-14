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


$('#addUserModal').on('show.bs.modal');

$('#delUserModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget)
        var stu_id_card = button.data('stu_id_card')
        var modal = $(this)
        /*modal.find('.modal-title').text('删除宿管信息')*/
        modal.find('#deleteLabel').text('是否删除身份证号码为  ' + stu_id_card + ' 的信息')
        modal.find('#id').val(stu_id_card)
        
    });
    
    
