package com.dao.impl;

import java.sql.*;
import com.dao.AdminDao;
import com.entity.Admin;
import com.util.JDBCUtil;

public class AdminDaoImpl implements AdminDao {

	@Override
	public Admin findByUsername(String username) {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "select * from admin where username = '"+username+"'";
		PreparedStatement statement = null;
		ResultSet resultset =null;
		try {
			statement = connection.prepareStatement(sql);  
			resultset = statement.executeQuery();
			if(resultset.next()) {
				int id = resultset.getInt(1);
				 username = resultset.getString(2);
				String password = resultset.getString(3);
				String name = resultset.getString(4);
				String telephone = resultset.getString(5);
				return new Admin(id,username,password,name,telephone);
			}
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, resultset);
		}
		
		
		return null;
	}

}