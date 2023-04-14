package com.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.dao.StuBasicInfoDao;
import com.util.JDBCUtil;
import com.entity.StuBasicInfo;

public class StuBasicInfoDaoImpl implements  StuBasicInfoDao {
	
	//Enquire all students info
	@Override
	public List<StuBasicInfo> StuBasicInfo() {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "select * from stu_basic_info ";
		PreparedStatement statement = null;
		ResultSet resultset =null;
		List<StuBasicInfo> StuBasicInfo = new ArrayList<>();
		try {
			statement = connection.prepareStatement(sql);  
			resultset = statement.executeQuery();
			while(resultset.next()) {
				String stu_ID_card = resultset.getString(1);
				String stu_ID_type = resultset.getString(2);
				String stu_gender = resultset.getString(3);
				String stu_name = resultset.getString(4);
				Integer stu_subject = resultset.getInt(5);
				StuBasicInfo.add(new StuBasicInfo(stu_ID_card,stu_ID_type,stu_gender,stu_name,stu_subject));
			}
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, resultset);
		}
		return StuBasicInfo;
	}
	
	//enquire exact students info
	@Override
	public List<StuBasicInfo> StuSearch(String key, String value) {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "select * from stu_basic_info where "+ key + " like '%"+ value +"%'" ;
		PreparedStatement statement = null;
		ResultSet resultset =null;
		List<StuBasicInfo> StuBasicInfo = new ArrayList<>();
		try {
			statement = connection.prepareStatement(sql);  
			resultset = statement.executeQuery();
			while(resultset.next()) {
				String stu_ID_card = resultset.getString(1);
				String stu_ID_type = resultset.getString(2);
				String stu_gender = resultset.getString(3);
				String stu_name = resultset.getString(4);
				Integer stu_subject = resultset.getInt(5);
				StuBasicInfo.add(new StuBasicInfo(stu_ID_card,stu_ID_type,stu_gender,stu_name,stu_subject));
			}
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, resultset);
		}
		return StuBasicInfo;
	}

	//add one student info
	@Override
	public Integer StuAdd(StuBasicInfo StuBasicInfo) {
		// TODO 自动生成的方法存根
		
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "insert into stu_basic_info(stu_name,stu_gender,stu_ID_type,stu_ID_card,stu_subject) value(?,?,?,?,?)";
		PreparedStatement statement = null;
		//ResultSet resultset =null;
		Integer result = null;
		try {
			statement = connection.prepareStatement(sql);  
			statement.setString(1, StuBasicInfo.getStu_name());
			statement.setString(2, StuBasicInfo.getStu_gender());
			statement.setString(3, StuBasicInfo.getStu_ID_type());
			statement.setString(4, StuBasicInfo.getStu_ID_card());
			statement.setInt(5, StuBasicInfo.getStu_subject());
			result = statement.executeUpdate();
			
			
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, null);
		}
		return result;
	}

	@Override
	public Integer StuUpdate(StuBasicInfo StuBasicInfo) {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "update stu_basic_info set stu_name = ?,stu_gender = ?, stu_ID_type =?,stu_subject = ? where stu_ID_card = ?";
		PreparedStatement statement = null;
		//ResultSet resultset =null;
		Integer result = null;
		try {
			statement = connection.prepareStatement(sql);  
			statement.setString(1, StuBasicInfo.getStu_name());
			statement.setString(2, StuBasicInfo.getStu_gender());
			statement.setString(3, StuBasicInfo.getStu_ID_type());
			statement.setInt(4, StuBasicInfo.getStu_subject());
			statement.setString(5, StuBasicInfo.getStu_ID_card());
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
		String sql = "delete from stu_basic_info where stu_ID_card = ?" ;
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
