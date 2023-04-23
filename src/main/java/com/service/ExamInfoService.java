package com.service;

import java.util.List;

import com.entity.ExamTime;
import com.entity.StuReg;

public interface ExamInfoService {
	public void ExamTime(String beginning,String deadline);
	public ExamTime getTime();
	public List<StuReg> StuReg();
}
