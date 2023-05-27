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
		List<CamStat> CamStatIni = new ArrayList<>();//initial array
		//List<String> campuses = new ArrayList<>();transfer array
		List<CamStat> CamStat = new ArrayList<>();//goal array
		
		CamStatIni = this.StuStatusInfoDao.CamStat();
		count = CamStatIni.size();
		
		while(true) {
		//Reset the array with each large loop
		List<String> campuses = new ArrayList<>();//transfer array
		//choose one of universities
			while(i<count) {
				university = CamStatIni.get(i).getUniversity();
				if(university != "null")
					break;
				i++;
			}
			if(i == count)break;//all university selected once
			i=0;//reset
			//choose all campuses in the university
 			while(i<count) {
				String temp = CamStatIni.get(i).getUniversity();//Obtain university information
				String temp2 = CamStatIni.get(i).getCampus();//Obtain campus information
				if(temp.equals(university)) {
					campuses.add(temp2);
					CamStatIni.get(i).setUniversity("null");//Marks the selected item
					CamStatIni.get(i).setCampus("null");//Marks the selected item
					}
				i++;
			}
			i=0;//reset
			
			//Total number of applicants in university
			cam_count = campuses.size();
			//add total number
			CamStat.add(new CamStat(university,"",cam_count));
			university = "";
			//choose one of the campuses selected 
			while(true) {
				while(i<cam_count) {
					campus = campuses.get(i);
					if(campus != "null")
						break;
					i++;
				}
				if(i == cam_count)break;//all campus selected once
				i=0;//reset
				//statistics Number of campuses
				while(i<cam_count) {
					if(campus.equals(campuses.get(i))) {
						campuses.set(i, "null");//Marks the selected item
						sum++;
					}
					i++;
				}
				i=0;//reset
				CamStat.add(new CamStat(university,campus,sum));
				
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

	@Override
	public void StuAdd(StuStatusInfo StuStatusInfo) {
		// TODO 自动生成的方法存根
		Integer stu_add = this.StuStatusInfoDao.StuAdd(StuStatusInfo);
		if(stu_add !=1) throw new RuntimeException("学生信息添加失败");
	}

	@Override
	public void StuDelete(String stu_ID_card) {
		// TODO 自动生成的方法存根
		Integer stu_delete = this.StuStatusInfoDao.StuDelete(stu_ID_card);
		if(stu_delete != 1 ) throw new RuntimeException("学籍信息删除失败");
	}

}
