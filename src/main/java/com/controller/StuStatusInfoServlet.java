package com.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import com.entity.StuStatusInfo;
import com.service.StuBasicInfoService;
import com.service.StuStatusInfoService;
import com.service.impl.StuBasicInfoServiceImpl;
import com.service.impl.StuStatusInfoServiceImpl;
import com.entity.StuBasicInfo;
import com.entity.CamStat;
/**
 * Servlet implementation class StuStatusInfoServlet
 */
@WebServlet("/StuStatusInfo")
public class StuStatusInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private StuBasicInfoService StuBasicInfoService = new StuBasicInfoServiceImpl();
	private StuStatusInfoService StuStatusInfoService =new StuStatusInfoServiceImpl();
	List<StuBasicInfo> StuBasicInfo = new ArrayList<>();
	List<StuStatusInfo> StuStatusInfo =null;
	List<CamStat> CamStat = new ArrayList<>();
		
    
    /**
     * @see HttpServlet#HttpServlet()
     */
    public StuStatusInfoServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		
		String method = request.getParameter("method");
		switch(method) {
		case "all":
			request.getAttribute("StuBasicInfo");
			request.getAttribute("stu_count");
			StuStatusInfo = this.StuStatusInfoService.StuStatusInfo();
			CamStat = this.StuStatusInfoService.CamStat();
			request.setAttribute("StuStatusInfo", StuStatusInfo);
			request.setAttribute("CamStat", CamStat);
			request.getRequestDispatcher("cet-index.jsp").forward(request, response);
			break;
		case "search":
			Object stu = request.getAttribute("StuBasicInfo");
			Integer count =(Integer)request.getAttribute("stu_count");
			StuStatusInfo = this.StuStatusInfoService.StuSearch(stu, count);
			CamStat = this.StuStatusInfoService.CamStat();
			request.setAttribute("StuStatusInfo", StuStatusInfo);
			request.setAttribute("CamStat", CamStat);
			request.getRequestDispatcher("cet-index.jsp").forward(request, response);
			break;
		case "fn":
			StuBasicInfo = this.StuBasicInfoService.StuBasicInfo();
			StuStatusInfo = this.StuStatusInfoService.StuStatusInfo();
			CamStat = this.StuStatusInfoService.CamStat();
			request.setAttribute("StuBasicInfo", StuBasicInfo);
			request.setAttribute("stu_count", StuBasicInfo.size());
			request.setAttribute("StuStatusInfo", StuStatusInfo);
			
			request.setAttribute("CamStat", CamStat);
			//System.out.println(CamStat);
			request.getRequestDispatcher("cet-index.jsp").forward(request, response);
			break;
		}//switch
		
		
	}

}
