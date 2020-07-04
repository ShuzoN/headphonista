val ScalatraVersion = "2.7.0"

organization := "jp.headphonista"

name := "headphonista"

version := "0.1.0-SNAPSHOT"

scalaVersion := "2.13.3"

resolvers += Classpaths.typesafeReleases
mainClass in assembly := Some("jp.headphonista.app.Servlet")
assemblyJarName in assembly := "headphonista.jar"

libraryDependencies ++= Seq(
  "org.scalatra" %% "scalatra" % ScalatraVersion,
  "org.scalatra" %% "scalatra-scalatest" % ScalatraVersion % "test",
  "ch.qos.logback" % "logback-classic" % "1.2.3" % "runtime",
  "org.eclipse.jetty" % "jetty-webapp" % "9.4.30.v20200611" % "container",
  "javax.servlet" % "javax.servlet-api" % "3.1.0" % "provided"
)

enablePlugins(SbtTwirl)
enablePlugins(ScalatraPlugin)
