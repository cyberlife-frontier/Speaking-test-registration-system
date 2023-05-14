package com.entity;

public class StuStatusInfo {
	private String stu_ID_card;
	private String university;
	private String campus;
	private String school;
	private String major;
	private String stu_class;//class is key word,so alter to this
	private String grade;
	private String stunum;
	private String eduback;
	private Integer lengthschool;
	private String enrollschool;
	
	public StuStatusInfo(String stu_ID_card,String university,String campus,String school,
			String major,String stu_class,String grade,String stunum,String eduback,
			Integer lengthschool,String enrollschool){
		this.stu_ID_card = stu_ID_card;
		this.university = university;
		this.campus = campus;
		this.school = school;
		this.major = major;
		this.stu_class = stu_class;
		this.grade = grade;
		this.stunum = stunum;
		this.eduback = eduback;
		this.lengthschool = lengthschool;
		this.enrollschool = enrollschool;
	}
	
	public String getStu_ID_card() {
		return stu_ID_card;
	}
	public void setStu_ID_card(String stu_ID_card) {
		this.stu_ID_card = stu_ID_card;
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
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public String getStu_class() {
		return stu_class;
	}
	public void setStu_class(String stu_class) {
		this.stu_class = stu_class;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getStunum() {
		return stunum;
	}
	public void setStunum(String stunum) {
		this.stunum = stunum;
	}
	public String getEduback() {
		return eduback;
	}
	public void setEduback(String eduback) {
		this.eduback = eduback;
	}
	public Integer getLengthschool() {
		return lengthschool;
	}
	public void setLengthschool(Integer lengthschool) {
		this.lengthschool = lengthschool;
	}
	public String getEnrollschool() {
		return enrollschool;
	}
	public void setEnrollschool(String enrollschool) {
		this.enrollschool = enrollschool;
	}
	
	
}
