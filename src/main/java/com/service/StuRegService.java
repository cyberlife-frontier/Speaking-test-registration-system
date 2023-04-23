package com.service;

import com.dto.StuBasicInfoDto;
import com.dto.StuRegDto;

public interface StuRegService {
	public StuBasicInfoDto query(String stu_ID_card);
	public void choosesub(String stu_ID_card,Integer reg_subject);
	public StuRegDto queryReg(String stu_ID_card);
}
