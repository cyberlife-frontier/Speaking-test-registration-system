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
import com.service.StuRegService;
import com.service.StuStatusInfoService;
import com.service.impl.StuBasicInfoServiceImpl;
import com.service.impl.StuRegServiceImpl;
import com.service.impl.StuStatusInfoServiceImpl;
import com.dto.StuRegDto;
import com.entity.StuBasicInfo;
import com.entity.StuStatusInfo;
/**
 * Servlet implementation class StuBasicInfoServlet
 */
@WebServlet("/StuBasicInfo")
public class StuBasicInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private StuBasicInfoService StuBasicInfoService = new StuBasicInfoServiceImpl();
    private StuStatusInfoService StuStatusInfoService =new StuStatusInfoServiceImpl();
    private StuRegService StuRegService =new StuRegServiceImpl();
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
			request.setAttribute("StuBasicInfo",StuBasicInfo);
			request.setAttribute("stu_count", StuBasicInfo.size());
			request.getRequestDispatcher("StuStatusInfo?method=all").forward(request, response);
			break;
		case "search":
			String key = request.getParameter("key");
			String value = request.getParameter("value");
			List<StuBasicInfo> StuSearch = this.StuBasicInfoService.StuSearch(key, value);
			request.setAttribute("StuBasicInfo", StuSearch);
			request.setAttribute("stu_count", StuSearch.size());
			//request.setAttribute("StuBasicInfo", StuSearch);
			//request.setAttribute("stu_count", StuSearch.size());
			request.getRequestDispatcher("StuStatusInfo?method=search").forward(request, response);
			break;
		case "add":			
			stu_name = request.getParameter("stu_name"); 
			stu_gender = request.getParameter("stu_gender"); 
			stu_ID_type = request.getParameter("stu_ID_type");
			stu_ID_card = request.getParameter("stu_ID_card");
			String temp = request.getParameter("stu_subject");
			stu_subject = Integer.parseInt(temp);
			String university = request.getParameter("university"); 
			String campus = request.getParameter("campus"); 
			String school = request.getParameter("school"); 
			String major = request.getParameter("major"); 
			String stu_class = request.getParameter("class"); 
			String stunum = request.getParameter("stunum"); 
			String eduback = request.getParameter("eduback"); 
			temp = request.getParameter("lengthschool"); 
			Integer lengthschool = Integer.parseInt(temp);
			String enrollschool = request.getParameter("enrollschool"); 
			String grade = request.getParameter("grade");
			
			//System.out.println(university);
			
			this.StuBasicInfoService.StuAdd(new StuBasicInfo(stu_ID_card,stu_ID_type,
					stu_gender,stu_name,stu_subject));
			this.StuStatusInfoService.StuAdd(new StuStatusInfo(stu_ID_card,university,campus,
					school,major,stu_class,grade,stunum,eduback,lengthschool,enrollschool));
			
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
			StuRegDto StuRegDto = this.StuRegService.queryReg(stu_ID_card);
			if(StuRegDto.getCode() == 0) {
				request.setAttribute("StuReg", "signed");
				request.getRequestDispatcher("StuStatusInfo?method=fn").forward(request, response);
				
			}
			else 
				{
				this.StuBasicInfoService.StuDelete(stu_ID_card);
				this.StuStatusInfoService.StuDelete(stu_ID_card);
				response.sendRedirect("StuBasicInfo?method=all");
			}
			
			break;
		}
		
	}

}
