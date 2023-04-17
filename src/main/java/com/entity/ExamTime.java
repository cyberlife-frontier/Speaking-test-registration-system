package com.entity;

public class ExamTime {
	public String beginning;
	public String deadline;
	public String beginning_sub;
	public String deadline_sub;
	/*
	 * public ExamTime(String beginning,String deadline) { this.beginning =
	 * beginning; this.deadline = deadline; }
	 */
	
	public String getbeginning() {
		return beginning;
	}
	public void setbeginning(String beginning) {
		this.beginning = beginning;
	}
	
	public String getdeadline() {
		return deadline;
	}
	public void setdeadline(String deadline) {
		this.deadline = deadline;
	}
	
	public String getbeginning_sub() {
		return beginning_sub;
	}
	public void setbeginning_sub(String beginning_sub) {
		this.beginning_sub = beginning_sub;
	}
	
	public String getdeadline_sub() {
		return deadline_sub;
	}
	public void setdeadline_sub(String deadline_sub) {
		this.deadline_sub = deadline_sub;
	}
	
}
