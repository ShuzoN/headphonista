package jp.headphonista.app

import org.scalatra._

class sServlet extends ScalatraServlet {

  get("/") {
    views.html.hello()
  }

}
