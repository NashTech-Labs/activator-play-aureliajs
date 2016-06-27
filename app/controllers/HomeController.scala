package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._



class HomeController @Inject() extends Controller {


  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def login = Action {
    implicit request =>
      val body: String = request.body.asText.getOrElse("")
      val credential: JsValue = Json.parse(body)
      val userName= Json.stringify((credential \"userName").get)
      val password: String = Json.stringify((credential \"password").get)
      /*println(password == "\"123456\"")
      if(userName == "\"bob@gmail.com\"" && password == "\"123456\""){
        Ok("Success")
      }else{
        Ok("Failure")
      }*/
      Ok("success")
  }
}
