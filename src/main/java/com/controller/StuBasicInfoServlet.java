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
    List<StuBasicInfo> StuBasicInfo = this.StuBasicInfoService.StuBasicInfo();
    
    
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
		
		request.setAttribute("StuBasicInfo",StuBasicInfo);
		request.setAttribute("stu_count", StuBasicInfo.size());
		request.getRequestDispatcher("cet-index.jsp").forward(request, response);
	}

}
