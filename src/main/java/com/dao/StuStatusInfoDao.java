package com.dao;

import java.util.List;

import com.entity.StuStatusInfo;
import com.entity.CamStat;

public interface StuStatusInfoDao {
	public List<StuStatusInfo> StuStatusInfo();
	public List<StuStatusInfo> StuSearch(String Stu_ID_card);
	public List<CamStat> CamStat();
	public Integer StuAdd(StuStatusInfo StuStatusInfo);
	public Integer StuDelete(String stu_ID_card);
}
