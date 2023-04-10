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

}
