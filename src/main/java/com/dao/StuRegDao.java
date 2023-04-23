package com.dao;

import com.entity.StuBasicInfo;
import com.entity.StuReg;

public interface StuRegDao {
	public StuBasicInfo query(String stu_ID_card);
	public Integer choosesub(String stu_ID_card, Integer reg_subject);
	public StuReg queryReg(String stu_ID_card);
	
}
