package com.dao;

import com.entity.Admin;

public interface AdminDao {
	public Admin findByUsername(String username);
	
}
