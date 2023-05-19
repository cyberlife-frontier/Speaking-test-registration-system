package com.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.service.StuStatusInfoService;
import com.entity.StuBasicInfo;
import com.entity.StuStatusInfo;
import com.dao.StuStatusInfoDao;
import com.dao.impl.StuStatusInfoDaoImpl;
import com.entity.CamStat;

public class StuStatusInfoServiceImpl implements  StuStatusInfoService{
	private StuStatusInfoDao StuStatusInfoDao = new StuStatusInfoDaoImpl();
	List<StuBasicInfo> StuBasicInfo = new ArrayList<>();
	List<StuStatusInfo> StuStatusInfo =null;
	
	@Override
	public List<StuStatusInfo> StuStatusInfo() {
		// TODO 自动生成的方法存根
		return this.StuStatusInfoDao.StuStatusInfo();
	}

	@Override
	public List<StuStatusInfo> StuSearch(Object stu, Integer count) {
		// TODO 自动生成的方法存根
		if(stu instanceof List<?>) {
			List<?> array = (List<?>) stu;
			if(count >0) {
				for(int i=0;i<count;i++) {
					Object o = array.get(i);
					if(o instanceof StuBasicInfo) {
						StuBasicInfo.add((StuBasicInfo)o);
					}		
				}
			}
		}
		String Stu_ID_card = "";
		//List<String> Stu_ID_card = new ArrayList<>();
		/*for(int i=0;i<count;i++) {
			Stu_ID_card.add(StuBasicInfo.get(i).getStu_ID_card());
		}*/
		//Concatenation string
		for(int i =0 ; i < count-1;i++) {
			Stu_ID_card += "Stu_ID_card = " +
			 "'"+ StuBasicInfo.get(i).getStu_ID_card()+ "'"+
			 " || ";
		}
		Stu_ID_card += "Stu_ID_card = "+
		"'"+ StuBasicInfo.get(count-1).getStu_ID_card()+ "'";
		
		return this.StuStatusInfoDao.StuSearch(Stu_ID_card);
	}

	@Override
	public List<CamStat> CamStat() {
		// TODO 自动生成的方法存根
		String university = "";
		String campus = "";
		Integer count = 0;
		Integer i =0;
		List<CamStat> CamStatIni = new ArrayList<>();
		List<String> campuses = new ArrayList<>();
		List<CamStat> CamStat = new ArrayList<>();
		
		CamStatIni = this.StuStatusInfoDao.CamStat();
		count = CamStatIni.size();
		university = CamStatIni.get(0).getUniversity();
		
		//CamStat.get(0).getUniversity();out of boundary
		
		while(i<count) {
			String temp = CamStatIni.get(i).getUniversity();
			
			if(temp.equals(university)) {
				campuses.add(temp);
				}
			i++;
		}
		System.out.println(campuses.size());
		System.out.println(campuses);
		
		return this.StuStatusInfoDao.CamStat();
	}

}
