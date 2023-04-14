package com.dao;

import com.entity.StuBasicInfo;
import java.util.List;

public interface StuBasicInfoDao {
	public List<StuBasicInfo> StuBasicInfo();
	public List<StuBasicInfo> StuSearch(String key,String value);
	public Integer StuAdd(StuBasicInfo StuBasicInfo);
	public Integer StuUpdate(StuBasicInfo StuBasicInfo);
	public Integer StuDelete(String stu_ID_card);
	
}
