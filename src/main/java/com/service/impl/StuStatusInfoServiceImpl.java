package com.service.impl;

import java.util.List;

import com.service.StuStatusInfoService;
import com.entity.StuStatusInfo;
import com.dao.StuStatusInfoDao;
import com.dao.impl.StuStatusInfoDaoImpl;

public class StuStatusInfoServiceImpl implements  StuStatusInfoService{
	private StuStatusInfoDao StuStatusInfoDao = new StuStatusInfoDaoImpl();
	
	@Override
	public List<StuStatusInfo> StuStatusInfo() {
		// TODO 自动生成的方法存根
		return this.StuStatusInfoDao.StuStatusInfo();
	}

}
