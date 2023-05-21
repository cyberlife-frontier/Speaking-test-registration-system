package com.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.dao.StuStatusInfoDao;
import com.entity.StuStatusInfo;
import com.util.JDBCUtil;
import com.entity.CamStat;

public class StuStatusInfoDaoImpl implements  StuStatusInfoDao{

	@Override
	public List<StuStatusInfo> StuStatusInfo() {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "select * from stu_status_info ";
		PreparedStatement statement = null;
		ResultSet resultset =null;
		List<StuStatusInfo> StuStatusInfo = new ArrayList<>();
		try {
			statement = connection.prepareStatement(sql);  
			resultset = statement.executeQuery();
			while(resultset.next()) {
				String stu_ID_card = resultset.getString(1);
				String university = resultset.getString(2);
				String campus = resultset.getString(3);
				String school = resultset.getString(4);
				String major = resultset.getString(5);
				String stu_class = resultset.getString(6);
				String grade = resultset.getString(7);
				String stunum = resultset.getString(8);
				String eduback = resultset.getString(9);
				Integer lengthschool = resultset.getInt(10);
				String enrollschool = resultset.getString(11);
				StuStatusInfo.add(new StuStatusInfo
						(stu_ID_card,university,campus,school,major,
						stu_class,grade,stunum,eduback,lengthschool,
						enrollschool));
			}
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, resultset);
		}
		return StuStatusInfo;
	}

	@Override
	public List<StuStatusInfo> StuSearch(String Stu_ID_card) {
		// TODO 自动生成的方法存根
		//System.out.println(Stu_ID_card);
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "select * from stu_status_info where "+Stu_ID_card;
		//System.out.println(sql);
		PreparedStatement statement = null;
		ResultSet resultset =null;
		List<StuStatusInfo> StuStatusInfo = new ArrayList<>();
		try {
			statement = connection.prepareStatement(sql);  
			resultset = statement.executeQuery();
			while(resultset.next()) {
				String stu_ID_card = resultset.getString(1);
				String university = resultset.getString(2);
				String campus = resultset.getString(3);
				String school = resultset.getString(4);
				String major = resultset.getString(5);
				String stu_class = resultset.getString(6);
				String grade = resultset.getString(7);
				String stunum = resultset.getString(8);
				String eduback = resultset.getString(9);
				Integer lengthschool = resultset.getInt(10);
				String enrollschool = resultset.getString(11);
				StuStatusInfo.add(new StuStatusInfo
						(stu_ID_card,university,campus,school,major,
						stu_class,grade,stunum,eduback,lengthschool,
						enrollschool));
			}
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, resultset);
		}
		return StuStatusInfo;
	}

	@Override
	public List<CamStat> CamStat() {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "select university,campus from stu_status_info ";
		PreparedStatement statement = null;
		ResultSet resultset =null;
		List<CamStat> CamStatIni = new ArrayList<CamStat>();
		try {
			statement = connection.prepareStatement(sql);  
			resultset = statement.executeQuery();
			while(resultset.next()) {
				
				String university = resultset.getString(1);
				String campus = resultset.getString(2);
				
				CamStatIni.add(new CamStat(university,campus,0));

			}
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, resultset);
		}
		return CamStatIni;
	}

	@Override
	public Integer StuAdd(StuStatusInfo StuStatusInfo) {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "insert into stu_status_info(stu_ID_card,university,campus,school,major"
				+ ",class,grade,stunum,eduback,lengthschool,enrollschool) "
				+ "value(?,?,?,?,?,?,?,?,?,?,?)";
		PreparedStatement statement = null;
		Integer result = null;
		try {
			statement = connection.prepareStatement(sql);  
			statement.setString(1, StuStatusInfo.getStu_ID_card());
			statement.setString(2, StuStatusInfo.getUniversity());
			statement.setString(3, StuStatusInfo.getCampus());
			statement.setString(4, StuStatusInfo.getSchool());
			statement.setString(5, StuStatusInfo.getMajor());
			statement.setString(6, StuStatusInfo.getStu_class());
			statement.setString(7, StuStatusInfo.getGrade());
			statement.setString(8, StuStatusInfo.getStunum());
			statement.setString(9, StuStatusInfo.getEduback());
			statement.setInt(10, StuStatusInfo.getLengthschool());
			statement.setString(11, StuStatusInfo.getEnrollschool());
			
			result = statement.executeUpdate();
			
			
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, null);
		}
		return result;
	}

	@Override
	public Integer StuDelete(String stu_ID_card) {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "delete from stu_status_info where stu_ID_card = ?" ;
		PreparedStatement statement = null;
		//ResultSet resultset =null;
		Integer result = null;
		try {
			statement = connection.prepareStatement(sql);  
			statement.setString(1, stu_ID_card);
			
			result = statement.executeUpdate();
				
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, null);
		}
		return result;
	}

}
