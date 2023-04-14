package com.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import com.service.impl.ExamInfoServiceImpl;
import com.service.ExamInfoService;

@WebServlet("/ExamInfo")
/**
 * Servlet implementation class ExamInfoServlet
 */
public class ExamInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private ExamInfoService ExamInfoService = new ExamInfoServiceImpl();
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
		
		
		}
		
		
		
	}

}
