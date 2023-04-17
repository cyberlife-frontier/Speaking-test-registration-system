package com.service;

import com.entity.ExamTime;

public interface ExamInfoService {
	public void ExamTime(String beginning,String deadline);
	public ExamTime getTime();
	
}
