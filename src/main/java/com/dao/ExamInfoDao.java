package com.dao;

import com.entity.ExamTime;

public interface ExamInfoDao {
	public Integer ExamTime(String beginning,String deadline);
	public ExamTime getTime();
	
}
