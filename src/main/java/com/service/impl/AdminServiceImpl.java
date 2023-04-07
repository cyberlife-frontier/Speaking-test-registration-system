package com.service.impl;

import com.dto.AdminDto;
import com.service.AdminService;
import com.dao.AdminDao;
import com.dao.impl.AdminDaoImpl;
import com.entity.Admin;

public class AdminServiceImpl implements AdminService  {
	private AdminDao AdminDao = new AdminDaoImpl();
	
	@Override
	public AdminDto login(String username, String password) {
		// TODO 自动生成的方法存根
		//1、via 'username' query DB
		//2、if result of query is null,'username'error
		//3、if result of query isn't null,query 'password'
		Admin Admin = this.AdminDao.findByUsername(username);
		AdminDto AdminDto = new AdminDto();
		if(Admin == null) {
			 AdminDto.setCode(-1);
		}else if(!Admin.getPassword().equals(password)){
				AdminDto.setCode(-2);
		}else {
			AdminDto.setCode(0);
			AdminDto.setAdmin(Admin);
		}
		
		
		return AdminDto;
	}

	
}
