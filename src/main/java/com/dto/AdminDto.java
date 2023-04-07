package com.dto;

import com.entity.Admin;

public class AdminDto {
	private Integer code;
	private Admin Admin;
	
	public Admin getAdmin() {
		return Admin;
	}
	public void setAdmin(Admin admin) {
		Admin = admin;
	}
	public Integer getCode() {
		return code;
	}
	public void setCode(Integer code) {
		this.code = code;
	}
	
}
