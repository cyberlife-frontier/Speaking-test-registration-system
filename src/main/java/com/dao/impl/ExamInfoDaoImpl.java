package com.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.dao.ExamInfoDao;
import com.util.JDBCUtil;
import com.entity.ExamTime;
import com.entity.StuReg;

public class ExamInfoDaoImpl implements ExamInfoDao {
	
	//alter time
	public Integer ExamTime(String beginning,String deadline) {
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "update reg_time set beginning = ?,deadline = ? where marker = 'RegTime'";
		PreparedStatement statement = null;
		
		Integer result = null;
		try {
			statement = connection.prepareStatement(sql);  
			statement.setString(1, beginning);
			statement.setString(2, deadline);
			//System.out.println(statement);
			result = statement.executeUpdate();
			
			
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, null);
		}
		return result;
	}

	//get time
	@Override
	public ExamTime getTime() {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "select * from reg_time";
		PreparedStatement statement = null;
		
		ExamTime ExamTime = new ExamTime();
		ResultSet resultset =null;
		try {
			statement = connection.prepareStatement(sql);  
			resultset = statement.executeQuery();
			resultset.next();
			//System.out.println(resultset.getString(1));
			//System.out.println(resultset.getString(2));
			//System.out.println(resultset.getString(3));
			ExamTime.setbeginning(resultset.getString(2));
			ExamTime.setdeadline(resultset.getString(3));
			
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, null);
		}
		return ExamTime;
	}

	@Override
	public List<StuReg> StuReg() {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "select stu_reg.stu_ID_card,stu_basic_info.stu_name,stu_reg.reg_subject,stu_basic_info.stu_subject"
				+ " from stu_basic_info,stu_reg where stu_reg.stu_ID_card=stu_basic_info.stu_ID_card";
		PreparedStatement statement = null;
		ResultSet resultset =null;
		List<StuReg> StuReg = new ArrayList<>();
		try {
			statement = connection.prepareStatement(sql);  
			resultset = statement.executeQuery();
			while(resultset.next()) {
				String stu_ID_card = resultset.getString(1);
				String stu_name = resultset.getString(2);
				Integer reg_subject = resultset.getInt(3);
				Integer stu_subject = resultset.getInt(4);
				StuReg.add(new StuReg(stu_ID_card,stu_name,reg_subject,stu_subject));
			}
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, resultset);
		}
		return StuReg;
	}

	@Override
	public Integer alterReg(String stu_ID_card, Integer reg_subject) {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "update stu_reg set reg_subject = ? where stu_ID_card = ?";
		PreparedStatement statement = null;
		//ResultSet resultset =null;
		Integer result = null;
		try {
			statement = connection.prepareStatement(sql);  
			statement.setInt(1, reg_subject);
			statement.setString(2, stu_ID_card);
			result = statement.executeUpdate();
				
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, null);
		}
		return result;
	}

	@Override
	public List<StuReg> searchReg(String key, String value) {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = null;
		switch(key) {
		case "stu_ID_card":
				sql = "select stu_reg.stu_ID_card,stu_basic_info.stu_name,stu_reg.reg_subject,stu_basic_info.stu_subject"
				+ " from stu_basic_info,stu_reg where stu_reg.stu_ID_card=stu_basic_info.stu_ID_card "
				+ "&& stu_reg.stu_ID_card = "+"'"+value+"'";
		break;
		case "reg_subject":
				sql = "select stu_reg.stu_ID_card,stu_basic_info.stu_name,stu_reg.reg_subject,stu_basic_info.stu_subject"
					+ " from stu_basic_info,stu_reg where stu_reg.stu_ID_card=stu_basic_info.stu_ID_card "
					+ "&& stu_reg.reg_subject = "+"'"+value+"'";
		break;
		}
		PreparedStatement statement = null;
		ResultSet resultset =null;
		List<StuReg> StuReg = new ArrayList<>();
		try {
			statement = connection.prepareStatement(sql);  
			resultset = statement.executeQuery();
			while(resultset.next()) {
				String stu_ID_card = resultset.getString(1);
				String stu_name = resultset.getString(2);
				Integer reg_subject = resultset.getInt(3);
				Integer stu_subject = resultset.getInt(4);
				StuReg.add(new StuReg(stu_ID_card,stu_name,reg_subject,stu_subject));
			}
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, resultset);
		}
		return StuReg;
	}
	
}
