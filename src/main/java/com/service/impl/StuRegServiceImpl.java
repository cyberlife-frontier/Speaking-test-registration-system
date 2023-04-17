package com.service.impl;

import com.dto.StuBasicInfoDto;
import com.service.StuRegService;
import com.dao.StuRegDao;
import com.dao.impl.StuRegDaoImpl;
import com.entity.StuBasicInfo;

public class StuRegServiceImpl implements StuRegService{
	 private StuRegDao StuRegDao =new StuRegDaoImpl();
	
	@Override
	public StuBasicInfoDto query(String stu_ID_card) {
		// TODO 自动生成的方法存根
		StuBasicInfo StuBasicInfo = this.StuRegDao.query(stu_ID_card);
		StuBasicInfoDto StuBasicInfoDto = new StuBasicInfoDto();
		//System.out.println(StuBasicInfo.getStu_name());
		if(StuBasicInfo ==null) {
			StuBasicInfoDto.setCode(-1);
		}else {
			StuBasicInfoDto.setCode(0);
			StuBasicInfoDto.setStuBasicInfo(StuBasicInfo);
		}
		
		return StuBasicInfoDto;
	}

	@Override
	public void choosesub(String stu_ID_card, Integer reg_subject) {
		// TODO 自动生成的方法存根
		Integer choose_subject = this.StuRegDao.choosesub(stu_ID_card, reg_subject);
		if(choose_subject != 1)throw new RuntimeException("报名信息添加失败");
	}

}
