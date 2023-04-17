package com.dao;

import com.entity.StuBasicInfo;

public interface StuRegDao {
	public StuBasicInfo query(String stu_ID_card);
	public Integer choosesub(String stu_ID_card, Integer reg_subject);
	
}
