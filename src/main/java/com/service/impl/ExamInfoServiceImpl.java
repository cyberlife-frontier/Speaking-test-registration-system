package com.service.impl;

import com.dao.ExamInfoDao;
import com.dao.impl.ExamInfoDaoImpl;
import com.service.ExamInfoService;

public class ExamInfoServiceImpl implements  ExamInfoService{
	private ExamInfoDao ExamInfoDao = new ExamInfoDaoImpl();
	
	//alter time
	@Override
	public void ExamTime(String beginning, String deadline) {
		// TODO 自动生成的方法存根
		Integer result = this.ExamInfoDao.ExamTime(beginning, deadline);
		if(result != 1) throw new RuntimeException("更改考试时间失败");
	}

}
