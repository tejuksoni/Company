var express=require("express");
var app=express();
 
 var companyController=function(req,resp){
 
 console.log("in companyController");
 
 var companyDetails=[
	{CompanyId:1,CompanyName:"Infosys",Employees:1500,Location:"Pune"},
	{CompanyId:1,CompanyName:"Cybage",Employees:1400,Location:"Delhi"},
	{CompanyId:1,CompanyName:"App Dynamics",Employees:2000,Location:"Mumbai"},
	{CompanyId:1,CompanyName:"Tech Mahendra",Employees:1700,Location:"Nashik"}
	
 ];
 resp.send(companyDetails);
 };
 
 app.get('/details',companyController);
 
 var server=app.listen(8000,function(){
 
 var host=server.address().address
 var port=server.address().port
 console.log("server started",host,port);
 
 })