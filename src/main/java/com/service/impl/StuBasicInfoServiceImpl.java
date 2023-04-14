package com.service.impl;

import java.util.List;

import com.service.StuBasicInfoService;
import com.dao.StuBasicInfoDao;
import com.dao.impl.StuBasicInfoDaoImpl;
import com.entity.StuBasicInfo;

public class StuBasicInfoServiceImpl implements StuBasicInfoService {
		
	private StuBasicInfoDao StuBasicInfoDao = new StuBasicInfoDaoImpl();
	@Override
	public List<StuBasicInfo> StuBasicInfo() {
		// TODO 自动生成的方法存根
		return this.StuBasicInfoDao.StuBasicInfo();
	}
	@Override
	public List<StuBasicInfo> StuSearch(String key, String value) {
		// TODO 自动生成的方法存根
		if(value.equals("")) 
			return this.StuBasicInfoDao.StuBasicInfo();
		
		return this.StuBasicInfoDao.StuSearch(key, value);
	}
	@Override
	public void StuAdd(StuBasicInfo StuBasicInfo) {
		// TODO 自动生成的方法存根
		Integer stu_add = this.StuBasicInfoDao.StuAdd(StuBasicInfo);
		if(stu_add !=1) throw new RuntimeException("学生信息添加失败");
		
	}
	@Override
	public void StuUpdate(StuBasicInfo StuBasicInfo) {
		// TODO 自动生成的方法存根
		Integer stu_update = this.StuBasicInfoDao.StuUpdate(StuBasicInfo);;
		if(stu_update !=1) throw new RuntimeException("学生信息更新失败");
	}
	@Override
	public void StuDelete(String stu_ID_card) {
		// TODO 自动生成的方法存根
		Integer stu_delete = this.StuBasicInfoDao.StuDelete(stu_ID_card);
		if(stu_delete !=1) throw new RuntimeException("学生信息删除失败");
	}

}
