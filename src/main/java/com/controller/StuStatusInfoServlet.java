package com.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

import com.entity.StuStatusInfo;
import com.service.StuStatusInfoService;
import com.service.impl.StuStatusInfoServiceImpl;
import com.entity.StuBasicInfo;
/**
 * Servlet implementation class StuStatusInfoServlet
 */
@WebServlet("/StuStatusInfo")
public class StuStatusInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private StuStatusInfoService StuStatusInfoService =new StuStatusInfoServiceImpl();
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
			List<StuStatusInfo> StuStatusInfo = this.StuStatusInfoService.StuStatusInfo();
			request.setAttribute("StuStatusInfo", StuStatusInfo);
			request.getServletContext().getAttribute("StuBasicInfo");
			request.getServletContext().getAttribute("stu_count");
			//System.out.println(StuBasicInfo);
			//System.out.println(stu_count);
			request.getRequestDispatcher("cet-index.jsp").forward(request, response);
			break;
			
		}
		
		
	}

}
