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
		Integer count = 0;//CamStatIni table count
		Integer cam_count =0;//campuses table count
		Integer i =0;//Number of loop iterations
		//Integer j=0;//CamStat pointer
		Integer sum=0;//count the number of campus
		List<CamStat> CamStatIni = new ArrayList<>();//initial
		List<String> campuses = new ArrayList<>();//transfer
		List<CamStat> CamStat = new ArrayList<>();//goal
		
		CamStatIni = this.StuStatusInfoDao.CamStat();
		count = CamStatIni.size();
		
		while(true) {
		//choose university
			while(i<count) {
				university = CamStatIni.get(i).getUniversity();
				if(university != "null")
					break;
				i++;
			}
			if(i == count)break;//all university selected once
			i=0;//reset
			while(i<count) {
				String temp = CamStatIni.get(i).getUniversity();
				String temp2 = CamStatIni.get(i).getCampus();
				if(temp.equals(university)) {
					campuses.add(temp2);
					CamStatIni.get(i).setUniversity("null");//Marks the selected item
					CamStatIni.get(i).setCampus("null");//Marks the selected item
					}
				i++;
			}
			i=0;//reset
			//choose campus 
			cam_count = campuses.size();
			while(true) {
				while(i<cam_count) {
					campus = campuses.get(i);
					if(campus != "null")
						break;
					i++;
				}
				if(i == cam_count)break;//all campus selected once
				i=0;//reset

				while(i<cam_count) {
					if(campus.equals(campuses.get(i))) {
						campuses.set(i, "null");//Marks the selected item
						sum++;
					}
					i++;
				}
				i=0;//reset
				CamStat.add(new CamStat(university,campus,sum));
				university = "";
				sum=0;
			}
		i=0;//reset
		}//Outermost cycle
		
		//System.out.println(CamStat.get(0).getUniversity());
		//System.out.println(CamStat.get(1).getUniversity());
		//System.out.println(CamStat.get(2).getUniversity());
		//System.out.println(CamStat.get(0).getCampus());
		//System.out.println(CamStat.get(0).getCount());
		
		return CamStat;
	}

}
