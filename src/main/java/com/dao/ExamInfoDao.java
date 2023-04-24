package com.dao;

import java.util.List;

import com.entity.ExamTime;
import com.entity.StuReg;

public interface ExamInfoDao {
	public Integer ExamTime(String beginning,String deadline);
	public ExamTime getTime();
	public List<StuReg> StuReg();
	public Integer alterReg(String stu_ID_card, Integer reg_subject);
	public List<StuReg> searchReg(String key,String value);
}
