package controllers

import javax.inject._

import play.api._
import play.api.mvc._



class HomeController @Inject() extends Controller {


  def index = Action {
    Ok("login/signup.")
  }


  def login = Action { request =>
    Logger.info(" request => " + request.body.asText)
    Ok("Successful")
  }

  def signUp = Action { request =>
    Logger.info(" request => " + request.body.asText)
    Ok("Successful signUp")
  }


}
