package com.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.dao.ExamInfoDao;
import com.util.JDBCUtil;
import com.entity.ExamTime;

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
	
}
