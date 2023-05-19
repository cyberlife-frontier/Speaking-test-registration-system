package com.entity;

public class CamStat {
	private String university;
	private String campus;
	private Integer count;
	
	public CamStat(String university,String campus,Integer count) {
		this.university = university;
		this.campus = campus;
		this.count = count;
	}
	
	
	public String getUniversity() {
		return university;
	}
	public void setUniversity(String university) {
		this.university = university;
	}
	public String getCampus() {
		return campus;
	}
	public void setCampus(String campus) {
		this.campus = campus;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	
	
	
}
