package jp.headphonista.app

import org.scalatra.test.scalatest._

class sServletTests extends ScalatraFunSuite {

  addServlet(classOf[sServlet], "/*")

  test("GET / on sServlet should return status 200") {
    get("/") {
      status should equal (200)
    }
  }

}
