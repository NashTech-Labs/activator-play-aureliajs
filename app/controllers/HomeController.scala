package controllers

import javax.inject._

import play.api._
import play.api.mvc._



class HomeController @Inject() extends Controller {


  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }
}
