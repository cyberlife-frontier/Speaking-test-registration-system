package com.entity;

public class StuReg {
	private String stu_ID_card;
	private String stu_name;
	private Integer reg_subject;
	private Integer stu_subject;
	
	public StuReg(String stu_ID_card,String stu_name,
			Integer reg_subject,Integer stu_subject) {
		this.stu_ID_card = stu_ID_card;
		this.stu_name = stu_name;
		this.reg_subject = reg_subject;
		this.stu_subject = stu_subject;
	}
	
	
	public String getStu_ID_card() {
		return stu_ID_card;
	}
	public void setStu_ID_card(String stu_ID_card) {
		this.stu_ID_card = stu_ID_card;
	}
	public String getStu_name() {
		return stu_name;
	}
	public void setStu_name(String stu_name) {
		this.stu_name = stu_name;
	}
	public Integer getReg_subject() {
		return reg_subject;
	}
	public void setReg_subject(Integer reg_subject) {
		this.reg_subject = reg_subject;
	}


	public Integer getStu_subject() {
		return stu_subject;
	}


	public void setStu_subject(Integer stu_subject) {
		this.stu_subject = stu_subject;
	}
	
}
