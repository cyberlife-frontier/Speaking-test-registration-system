package com.service;

import java.util.List;

import com.entity.StuStatusInfo;
import com.entity.CamStat;

public interface StuStatusInfoService {
	public List<StuStatusInfo> StuStatusInfo();
	public List<StuStatusInfo> StuSearch(Object stu,Integer count);
	public List<CamStat> CamStat();
	public void StuAdd(StuStatusInfo StuStatusInfo);
	
}
