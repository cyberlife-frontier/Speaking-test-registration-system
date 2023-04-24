package com.dao.impl;

import java.sql.*;
import com.entity.StuBasicInfo;
import com.entity.StuReg;
import com.util.JDBCUtil;
import com.dao.StuRegDao;
public class StuRegDaoImpl implements StuRegDao{

	@Override
	public StuBasicInfo query(String stu_ID_card) {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "select * from stu_basic_info where stu_ID_card = '"+stu_ID_card+"'";
		PreparedStatement statement = null;
		ResultSet resultset =null;
		try {
			statement = connection.prepareStatement(sql);  
			resultset = statement.executeQuery();
			if(resultset.next()) {
				stu_ID_card = resultset.getString(1);
				String stu_ID_type = resultset.getString(2);
				String stu_gender = resultset.getString(3);
				String stu_name = resultset.getString(4);
				Integer stu_subject =resultset.getInt(5);
				return new StuBasicInfo(stu_ID_card,stu_ID_type,stu_gender,stu_name,stu_subject);
			}
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, resultset);
		}
		
		return null;
	}

	@Override
	public Integer choosesub(String stu_ID_card, Integer reg_subject) {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = "insert into stu_reg(stu_ID_card,reg_subject) value(?,?)";
		PreparedStatement statement = null;
		
		Integer result = null;
		try {
			statement = connection.prepareStatement(sql);  
			statement.setString(1,stu_ID_card );
			statement.setInt(2, reg_subject);
			
			result = statement.executeUpdate();
			
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, null);
		}
		
		return result;
	}

	@Override
	public StuReg queryReg(String stu_ID_card) {
		// TODO 自动生成的方法存根
		Connection connection = JDBCUtil.getDBconnection();
		String sql = " select stu_reg.stu_ID_card,stu_basic_info.stu_name,stu_reg.reg_subject,stu_basic_info.stu_subject "
				+ "from stu_basic_info,stu_reg "
				+ "where stu_reg.stu_ID_card=stu_basic_info.stu_ID_card && stu_reg.stu_ID_card= "+"'"+stu_ID_card+"'";
		PreparedStatement statement = null;
		ResultSet resultset =null;
		StuReg StuReg = null;
		try {
			statement = connection.prepareStatement(sql);  
			resultset = statement.executeQuery();
			if(resultset.next()) {
				stu_ID_card = resultset.getString(1);
				String stu_name = resultset.getString(2);
				Integer reg_subject = resultset.getInt(3);
				Integer stu_subject = resultset.getInt(4);
				StuReg =new StuReg(stu_ID_card,stu_name,reg_subject,stu_subject);
				//return new StuBasicInfo(stu_ID_card,stu_ID_type,stu_gender,stu_name,stu_subject);
			}
		}catch(SQLException throwables) {
			
		}finally {
			JDBCUtil.closeDB(connection, statement, resultset);
		}
		
		return StuReg;
	}

	@Override
	public Integer confirmReg(String stu_ID_card, Integer reg_subject) {
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

}
