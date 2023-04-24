package com.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import com.dto.StuBasicInfoDto;
import com.dto.StuRegDto;
import com.service.StuRegService;
import com.service.impl.StuRegServiceImpl;
@WebServlet("/StudentReg")
/**
 * Servlet implementation class StuRegServlet
 */
public class StuRegServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private StuRegService StuRegService =new StuRegServiceImpl();
    String stu_ID_card =null;
    String stu_subject = null;
    Integer reg_subject = null;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public StuRegServlet() {
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
		case "query":
			stu_ID_card = request.getParameter("IDNumber");
			//System.out.println(stu_ID_card);
			StuBasicInfoDto StuBasicInfoDto = this.StuRegService.query(stu_ID_card);
			//System.out.println(StuBasicInfoDto.getCode());
			switch(StuBasicInfoDto.getCode()) {
			case -1:
				request.setAttribute("IDCradError", "您还没有报名资格");
				request.getRequestDispatcher("qualification-info-query.jsp").forward(request,response);
				break;
			case 0:
				request.setAttribute("StuBasicInfo", StuBasicInfoDto.getStuBasicInfo());
				request.getRequestDispatcher("qualification-info-confirm.jsp").forward(request,response);
				break;
			}
			break;
		case "addCandidate":
			//stu_ID_card = request.getParameter("stu_ID_card");
			//System.out.println(stu_ID_card);
			stu_subject = request.getParameter("stu_subject");
			request.setAttribute("stu_ID_card", stu_ID_card);
			request.setAttribute("stu_subject", stu_subject);
			request.getRequestDispatcher("stu-reg.jsp").forward(request,response);
			break;
		case "choosesub":
			//String temp = request.getParameter("reg_subject");
			reg_subject = Integer.parseInt(request.getParameter("reg_subject"));
			this.StuRegService.choosesub(stu_ID_card, reg_subject);
			//System.out.println(reg_subject);
			response.sendRedirect("forward-to-stusignup.jsp");
			break;
		case "queryReg":
			stu_ID_card = request.getParameter("IDNumber");
			//System.out.println(stu_ID_card);
			StuRegDto StuRegDto = this.StuRegService.queryReg(stu_ID_card);
			//System.out.println(StuRegDto);
			switch(StuRegDto.getCode()) {
			case -1:
				request.setAttribute("IDCradError", "您目前可能未报名");
				request.getRequestDispatcher("registration-info-query.jsp").forward(request,response);
				break;
			case 0:
				request.setAttribute("StuReg", StuRegDto.getStuReg());
				request.getRequestDispatcher("registration-info-confirm.jsp").forward(request,response);
				break;
			}
			break;
		case "confirmReg":
			stu_ID_card = request.getParameter("stu_ID_card");
			reg_subject = Integer.parseInt(request.getParameter("reg_subject"));
			//System.out.println(stu_ID_card);
			//System.out.println(reg_subject);
			this.StuRegService.confirmReg(stu_ID_card, reg_subject);
			response.sendRedirect("forward-to-stusignup.jsp");
			break;
		} //outer switch
		
		
	}

}
