package com.service.impl;

import java.util.List;

import com.service.StuBasicInfoService;
import com.dao.StuBasicInfoDao;
import com.dao.impl.StuBasicInfoDaoImpl;
import com.entity.StuBasicInfo;

public class StuBasicInfoServiceImpl implements StuBasicInfoService {
		
	private StuBasicInfoDao StuBasicInfoDao = new StuBasicInfoDaoImpl();
	@Override
	public List<com.entity.StuBasicInfo> StuBasicInfo() {
		// TODO 自动生成的方法存根
		return this.StuBasicInfoDao.StuBasicInfo();
	}

}
