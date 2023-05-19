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

}
