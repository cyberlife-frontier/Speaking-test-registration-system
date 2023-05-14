package com.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.service.StuBasicInfoService;
import com.service.impl.StuBasicInfoServiceImpl;
import com.entity.StuBasicInfo;
/**
 * Servlet implementation class StuBasicInfoServlet
 */
@WebServlet("/StuBasicInfo")
public class StuBasicInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private StuBasicInfoService StuBasicInfoService = new StuBasicInfoServiceImpl();
    StuBasicInfo StuBasicInfo = null;
    String stu_name,stu_gender,stu_ID_type,stu_ID_card = null;
    Integer stu_subject = null;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public StuBasicInfoServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		this.doPost(request, response);
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		//System.out.println(StuBasicInfo.size());
		request.setCharacterEncoding("UTF-8");
		String method = request.getParameter("method");
		switch(method) {
		case "all":
			List<StuBasicInfo> StuBasicInfo = this.StuBasicInfoService.StuBasicInfo();
			//request.setAttribute("StuBasicInfo",StuBasicInfo);
			//request.setAttribute("stu_count", StuBasicInfo.size());
			request.getServletContext().setAttribute("StuBasicInfo",StuBasicInfo);
			request.getServletContext().setAttribute("stu_count", StuBasicInfo.size());
			request.getRequestDispatcher("StuStatusInfo?method=all").forward(request, response);
			break;
		case "search":
			String key = request.getParameter("key");
			String value = request.getParameter("value");
			List<StuBasicInfo> StuSearch = this.StuBasicInfoService.StuSearch(key, value);
			request.setAttribute("StuBasicInfo", StuSearch);
			request.setAttribute("stu_count", StuSearch.size());
			request.getRequestDispatcher("cet-index.jsp").forward(request, response);
			break;
		case "add":			
			stu_name = request.getParameter("stu_name"); 
			stu_gender = request.getParameter("stu_gender"); 
			stu_ID_type = request.getParameter("stu_ID_type");
			stu_ID_card = request.getParameter("stu_ID_card");
			String temp = request.getParameter("stu_subject");
			stu_subject = Integer.parseInt(temp);
			
			this.StuBasicInfoService.StuAdd(new StuBasicInfo(stu_ID_card,stu_ID_type,stu_gender,stu_name,stu_subject));
			response.sendRedirect("StuBasicInfo?method=all");
			break;
		case "update":
			 stu_name = request.getParameter("stu_name");
			 stu_gender = request.getParameter("stu_gender"); 
			 stu_ID_type = request.getParameter("stu_ID_type");
			 stu_ID_card = request.getParameter("stu_ID_card");
			 String temp2 = request.getParameter("stu_subject");
			 stu_subject = Integer.parseInt(temp2);
			 
			 this.StuBasicInfoService.StuUpdate(new StuBasicInfo(stu_ID_card,stu_ID_type,stu_gender,stu_name,stu_subject));
			 response.sendRedirect("StuBasicInfo?method=all");
			break;
		case "delete":
			stu_ID_card = request.getParameter("stu_ID_card");
			this.StuBasicInfoService.StuDelete(stu_ID_card);
			response.sendRedirect("StuBasicInfo?method=all");
			break;
		}
		
	}

}
