package com.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

import com.dto.AdminDto;
import com.service.AdminService;
import com.service.impl.AdminServiceImpl;

/**
 * Servlet implementation class AccountServlet
 */
//control of administrator's log in
 @WebServlet("/account") 
public class AccountServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private AdminService AdminService = new AdminServiceImpl();  
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AccountServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		String method =request.getParameter("method");
		switch (method) {
			case "login":
				String username = request.getParameter("username");
				String password = request.getParameter("password");
				AdminDto AdminDto = this.AdminService.login(username, password);
				switch (AdminDto.getCode()) {
					case -1:
						request.setAttribute("usernameError", "用户名不存在");
						request.getRequestDispatcher("CET-admin-sign-in.jsp").forward(request,response);
						break;
					case -2:
						request.setAttribute("passwordError", "密码错误");
						request.getRequestDispatcher("CET-admin-sign-in.jsp").forward(request,response);
						break;
					case 0:
						//forward to the interface of the log-in success 
						//System.out.println("登录成功");	
						HttpSession session = request.getSession();
						session.setAttribute("Admin", AdminDto.getAdmin());
						response.sendRedirect("cet-index.jsp");
						break;
				}
			break;
			case "logout":
				request.getSession().invalidate();
				response.sendRedirect("CET-admin-sign-in.jsp");
				break;
		}

		/*
		 * if(AdminDto.getCode() ==-1) { request.setAttribute("usernameError",
		 * "用户名不存在");
		 * request.getRequestDispatcher("CET-admin-sign-in.jsp").forward(request,
		 * response);
		 * 
		 * }
		 */
		//System.out.println(username);
		//System.out.println(password);		
	}

}
