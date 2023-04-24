package com.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

import com.service.impl.ExamInfoServiceImpl;
import com.service.ExamInfoService;
import com.entity.ExamTime;
import com.entity.StuReg;

@WebServlet("/ExamInfo")
/**
 * Servlet implementation class ExamInfoServlet
 */
public class ExamInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private ExamInfoService ExamInfoService = new ExamInfoServiceImpl();
    String stu_ID_card =null;
    Integer reg_subject = null;
    
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ExamInfoServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		this.doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		String method = request.getParameter("method");
		switch(method) {
		case "time" :
			String beginning = request.getParameter("beginning");
			String deadline = request.getParameter("deadline");
			this.ExamInfoService.ExamTime(beginning, deadline);
			request.getRequestDispatcher("cet-index.jsp").forward(request, response);
			break;
		case "getTime":
			ExamTime ExamTime = this.ExamInfoService.getTime();
			request.setAttribute("ExamTime", ExamTime);
			request.getRequestDispatcher("students-sign-up.jsp").forward(request, response);
			break;
		case "allReg":
			List<StuReg> StuReg = this.ExamInfoService.StuReg();
			//System.out.println(StuReg);
			request.setAttribute("StuReg", StuReg);
			request.setAttribute("reg_count", StuReg.size());
			request.getRequestDispatcher("cet-reg-info.jsp").forward(request, response);
			break;
		case "alterReg":
			stu_ID_card = request.getParameter("stu_ID_card");
			reg_subject = Integer.parseInt(request.getParameter("reg_subject"));
			//System.out.println(stu_ID_card);
			//System.out.println(reg_subject);
			this.ExamInfoService.alterReg(stu_ID_card, reg_subject);
			response.sendRedirect("ExamInfo?method=allReg");
			break;
		case "searchReg":
			String key = request.getParameter("key");
			String value = request.getParameter("value");
			//System.out.println(key);
			//System.out.println(value);
			List<StuReg> searchReg = this.ExamInfoService.searchReg(key, value);
			request.setAttribute("StuReg", searchReg);
			request.setAttribute("reg_count", searchReg.size());
			request.getRequestDispatcher("cet-reg-info.jsp").forward(request, response);
			break;
		}//outer switch
		
		
		
	}

}
