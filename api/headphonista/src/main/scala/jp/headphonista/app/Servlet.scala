package jp.headphonista.app

import org.scalatra._

class Servlet extends ScalatraServlet {

  get("/") {
    views.html.hello()
  }

}
