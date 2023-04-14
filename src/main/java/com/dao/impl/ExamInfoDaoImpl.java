package com.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.dao.ExamInfoDao;
import com.util.JDBCUtil;


public class ExamInfoDaoImpl implements ExamInfoDao {
	
	//alter time
	public Integer ExamTime(String beginning,String deadline) {
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "update reg_time set beginning = ?,deadline = ? where marker = RegTime";
		PreparedStatement statement = null;
		
		Integer result = null;
		try {
			statement = connection.prepareStatement(sql);  
			statement.setString(1, beginning);
			statement.setString(2, deadline);
			
			result = statement.executeUpdate();
			
			
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, null);
		}
		return result;
	}
	
	
	
	
	
	
}
