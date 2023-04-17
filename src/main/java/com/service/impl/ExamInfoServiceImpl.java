package com.service.impl;

import com.dao.ExamInfoDao;
import com.dao.impl.ExamInfoDaoImpl;
import com.service.ExamInfoService;
import com.entity.ExamTime;

public class ExamInfoServiceImpl implements  ExamInfoService{
	private ExamInfoDao ExamInfoDao = new ExamInfoDaoImpl();
	String temp =null;
	//alter time
	@Override
	public void ExamTime(String beginning, String deadline) {
		// TODO 自动生成的方法存根
		Integer result = this.ExamInfoDao.ExamTime(beginning, deadline);
		if(result != 1) throw new RuntimeException("更改考试时间失败");
	}

	@Override
	public ExamTime getTime() {
		// TODO 自动生成的方法存根
		ExamTime ExamTime =this.ExamInfoDao.getTime();
		temp = ExamTime.getbeginning();
		ExamTime.setbeginning_sub(temp.substring(6,10));
		temp = ExamTime.getdeadline();
		ExamTime.setdeadline_sub(temp.substring(6,10));
		return ExamTime;
	}

}
