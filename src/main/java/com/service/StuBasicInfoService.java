package com.service;

import java.util.List;

import com.entity.StuBasicInfo;

public interface StuBasicInfoService {
	public List<StuBasicInfo> StuBasicInfo();
	public List<StuBasicInfo> StuSearch(String key,String value);
	public void StuAdd(StuBasicInfo StuBasicInfo); 
	public void StuUpdate(StuBasicInfo StuBasicInfo);
	public void StuDelete(String stu_ID_card);
	
}
