---
title: "The Java runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/java/runtime
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/java/runtime
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/java/runtime
  title: "The Java runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Guides
Send feedback
The Java runtime
Stay organized with collections
Save and categorize content based on your preferences.
Note: Some Java runtimes have reached end of support . You cannot re-deploy
versions that use runtimes after their end of support date. We recommend that
you upgrade your app
to use the latest version of Java.
The Java runtime is the software stack responsible for
installing your application code and dependencies, and then running that
application in the flexible environment.
Java versions
Java 25 uses
buildpacks . buildpacks help you
build and configure containers that you can deploy to Google Cloud.
For the full list of supported Java versions, and their
corresponding Ubuntu version, see the Runtime support schedule .
To use a supported
Java version, you must:
Install gcloud CLI version 420.0.0 or later . You can update
your CLI tooling by running the gcloud components update
command. To view your installed version, you can run the
gcloud version command.
To deploy using Maven, you must add the
App Engine Maven plugin
to your pom.xml :
<plugin>
<groupId>com.google.cloud.tools</groupId>
<artifactId>appengine-maven-plugin</artifactId>
<version>2.8.1</version>
</plugin>
Other options for deploying include the gcloud app deploy command or the
App Engine Gradle plugin .
Include the runtime_config and operating_system settings in your
app.yaml file to
specify an operating system.
Note: Supported Java runtimes only support deployment of executable JAR files.
The supported Java runtimes don't include any web-serving frameworks that
limit you from using servlet-based frameworks or libraries.
Optionally, you can specify a runtime version by including the runtime_version
setting in your app.yaml file. By default, the latest Java version is used
if the runtime_version setting is not specified.
Examples
To specify Java 25 on Ubuntu 24:
runtime : java
env : flex
runtime_config :
operating_system : "ubuntu24"
runtime_version : "25"
To specify the latest supported Java version on Ubuntu 24:
runtime : java
env : flex
runtime_config :
operating_system : "ubuntu24"
Previous runtime versions
Warning: Java 8 has reached end of support.
We recommend that you migrate your app to use a supported version of Java.
For Java 8 , specify runtime_config and jdk settings in your
app.yaml file.
Java 8 supports:
The Eclipse Jetty 9 runtime and runs Jetty 9 using Servlet 3.1.
Your own server code that listens on port 8080 as part of your
application. This feature lets you to use microservice frameworks like
SparkJava and
Spring-Boot .
Examples
Specifying Jetty version 9 (default / optional):
runtime_config :
jdk : openjdk8
server : jetty9
Specifying Java version 8:
runtime_config :
jdk : openjdk8
Sample app.yaml for Java 8:
runtime : java
env : flex
handlers :
- url : /.*
script : this field is required, but ignored
See pom.xml
for configuring Maven and build.gradle
for configuring Gradle.
Optional files
These configuration files are optional:
index.yaml
cron.yaml
dispatch.yaml
Place these files at the top level of MyDir. If you use any these files, you
must deploy them separately with the gcloud app deploy command.
web.xml
is optional and only needed if you are not using Servlet 3.x annotations.
You can place static web content, as well as your JavaServer pages, in your
webapp/ directory.
Jetty 9 , which the
App Engine flexible environment uses as its Servlet container, uses
Apache Jasper
as the default JSP implementation and includes JSTL taglibs.
The Dockerfile file is optional and used to customize the
Java runtime.
Enabling gzip compression
The gzip handler is bundled with Jetty but not activated by default. To
activate this module, set the environment variable, JETTY_MODULES_ENABLE=gzip ,
in the app.yaml file:
env_variables :
JETTY_MODULES_ENABLE : 'gzip'
Using Quickstart
Jetty
can speed up
the start time of your application by pre-scanning its content and generating
configuration files.
If you are using an
extended image
you can activate quickstart by executing /scripts/jetty/quickstart.sh in your
Dockerfile, after the application WAR is added.
Environment variables
You can set the following optional environment variables that are specific to
the Java 8/Jetty 9 runtime. You can set OpenJDK 8 environment variables as well.
To set environment variables, use the env_variables key in the app.yaml
file.
Env Var
Maven Prop
Value/Comment
JETTY_PROPERTIES
Comma separated list of name=value pairs appended to $JETTY_ARGS
JETTY_MODULES_ENABLE
Comma separated list of modules to enable by appending to $JETTY_ARGS
JETTY_MODULES_DISABLE
Comma separated list of modules to disable by removing from $JETTY_BASE/start.d
JETTY_ARGS
Arguments passed to jetty's start.jar . Any arguments used for custom jetty configuration should be passed here.
JAVA_OPTS
JVM runtime arguments
Enhanced Cloud Logging (Beta)
When running on the App Engine flexible environment, you can configure Java Util
Logging to send logs to Cloud Logging by setting the
JETTY_ARGS environment variable. For example:
env_variables :
JETTY_ARGS : - Djava . util . logging . config . file = WEB - INF / logging . properties
You must provide a logging.properties file that configures a
LoggingHandler
as follows:
handlers = com . google . cloud . logging . LoggingHandler
# Optional configuration
. level = INFO
com . google . cloud . logging . LoggingHandler . level = FINE
com . google . cloud . logging . LoggingHandler . log = gae_app . log
com . google . cloud . logging . LoggingHandler . formatter = java . util . logging . SimpleFormatter
java . util . logging . SimpleFormatter . format =% 3 $s : % 5 $s % 6 $s
Support for other Java runtimes
If you need to use a Java version that isn't supported , you can create a
custom runtime and select a
valid base image with the Java version you need.
For Google-supplied base images or
Docker Java base images ,
see Building custom runtimes .
Organizing your files
Your source tree should look like this:
MyDir/
[pom.xml]
[build.gradle]
[index.yaml]
[cron.yaml]
[dispatch.yaml]
src/main/
appengine/
app.yaml
docker/
[Dockerfile]
java/
com.example.mycode/
MyCode.java
webapp/
[index.html]
[jsp.jsp]
WEB-INF/
[web.xml]
Local testing
When testing in your local environment, you may use emulated Google Cloud
services, rather than remote Google Cloud services. You can use the following
emulators:
Datastore
Pub/Sub
Bigtable
Use the gcloud command to start them before you run your app:
gcloud beta emulators datastore start
gcloud beta emulators pubsub start
gcloud beta emulators bigtable start
Maven
Add these lines in your maven pom.xml file to add the
Jetty 9 Maven Plugin :
< plugin >
< groupId>org . eclipse . jetty < / groupId >
< artifactId>jetty - maven - plugin < / artifactId >
< version>9 .4.2 . v20170220 < / version >
< / plugin >
To run your app locally, use the Maven command:
mvn jetty : run - exploded
Gradle
Follow the
Creating a new Gradle project
instructions to add the
Gretty Gradle plugin
to your build.gradle , and use the command:
gradle jettyRun
Deploy your app
To initialize the Google Cloud CLI, run:
gcloud init
After completing the configurations, you can use the Google Cloud CLI to deploy
this directory containing the app.yaml and WAR files using:
gcloud app deploy app . yaml
If you are using any of the optional configuration files ( index.yaml ,
cron.yaml , and dispatch.yaml ) deploy them separately with the gcloud
command. For example:
gcloud app deploy cron . yaml
Maven
Use Maven to deploy your app:
mvn package appengine:deploy -Dapp.deploy.projectId= PROJECT_ID
Replace PROJECT_ID with the ID of your Google Cloud project. If
your pom.xml file already
specifies your
project ID , you don't need to include the -Dapp.deploy.projectId property in the
command you run.
Gradle
Use Gradle to deploy your app:
gradle appengineDeploy
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
