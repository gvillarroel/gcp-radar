---
title: "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/java/services/access
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime
  title: "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Java runtime environment
Stay organized with collections
Save and categorize content based on your preferences.
The Java runtime is the software stack responsible for installing
your web service's code and its dependencies and running your service.
Declare the Java runtime for the App Engine standard environment in the app.yaml file. For example:
runtime : java VERSION
Where VERSION is the Java MAJOR version number . For
example, to use the latest Java version, Java 25, specify
25 .
For other supported Java versions, and the corresponding Ubuntu version for your
Java version, see the Runtime support schedule .
Before you begin
Download the latest version of the Google Cloud CLI
or update your gcloud CLI to the current version:
gcloud components update
To deploy using Maven, you will need to add the
App Engine Maven Plugin
to your pom.xml file:
<plugin>
<groupId>com.google.cloud.tools</groupId>
<artifactId>appengine-maven-plugin</artifactId>
<version>2.8.1</version>
</plugin>
Other options for deploying include using the gcloud app deploy command or
the App Engine Gradle plugin .
Follow the instructions for your application framework to configure the build
of an executable JAR file.
Framework compatibility
With the App Engine Java runtime, you can deploy executable JAR
files. The runtimes do not include any web-serving framework, meaning you are not limited to
using servlet-based frameworks or libraries. Use your native dependencies or
networking stacks such as the Netty library .
You are not limited to these frameworks and are encouraged to try your
preferred one, like Grails, Blade, Play!, Vaadin or
jHipster .
Deploy Maven source projects to the Java runtime
You can deploy your Maven project as source code and have it built and deployed
using Google Cloud's buildpacks .
To deploy a Maven project project as source code, go to your project's top level
directory and type:
gcloud app deploy pom.xml
Build and deploy logs will be streamed, and you can see the detailed logs in the
Cloud Build history section in the Google Cloud console .
Using GraalVM executables
The App Engine standard environment Java runtime supports GraalVM native image
executables. Once you have compiled your Java app into a GraalVM native
image, you can use the entrypoint setting in your
app.yaml file
to point to the executable.
For example, an executable with the filename myexecutable could have the
following app.yaml configuration file:
runtime : 25 # or another supported runtime version.
entrypoint : ./myexecutable
Google Cloud client libraries can be used to compile applications as
a GraalVM native image. For more information, refer to documentation on how to
Compile native images .
Java version
The latest supported Java version is 25. The Java runtime uses the latest stable release of the version that
is specified in your app.yaml file. App Engine automatically updates
to new patch release versions, but it won't automatically update the minor
version.
For example, your application might be deployed at Java 21.0.4 and
automatically updated to version Java 21.0.5 at a later deployment of the
managed platform, but it won't be automatically updated to Java 22.
To learn how to upgrade your version of Java, see Upgrade an existing application .
The runtime's Open JDK environment
App Engine runs Java apps in a container secured by gVisor on an
up-to-date Ubuntu Linux distribution and its supported openjdk-17-jdk for Java 17 or openjdk-21-jdk for Java 21 runtime.
For supported Ubuntu versions for your Java version, see
Runtime support schedule .
App Engine maintains the base image and updates the
OpenJDK 17 and OpenJDK 21 package, without requiring you to redeploy your app.
Your deployed app is located in the runtime's /workspace directory. It is
also accessible through a symbolic link at /srv .
App Engine Java releases
All released artifacts that start with version 2.x.x use the
open source
release mechanism. See the
GitHub repository
for more details.
Dependencies
For more information on declaring and managing dependencies, see Specifying dependencies .
Application startup
Frameworks such as Spring Boot, Micronaut, Ktor build an executable uber JAR
by default. If your Maven or Gradle build file produces an executable Uber JAR,
the runtime starts your application by running an Uber JAR application.
Alternatively, App Engine will use the contents of the optional
entrypoint field in your app.yaml file. For example:
runtime: java25 # or another supported runtime
entrypoint: java -Xmx64m -jar YOUR-ARTIFACT.jar
Where the example YOUR-ARTIFACT.jar application jar must:
Be in the root directory with your app.yaml file.
Contain a Main-Class entry in its META-INF/MANIFEST.MF metadata file.
Optionally, contain a Class-Path entry with a list of relative paths to
other dependent jars. These will upload with the application automatically.
For your app to receive HTTP requests, your entrypoint should start a web server
that listens on the port specified by the PORT environment variable. The value
of the PORT environment variable
is dynamically set by the App Engine serving environment. This value
cannot be set in the env_variables section of the app.yaml file.
With a custom entrypoint, you can construct and package your application as a
thin JAR file which only contains your application code and direct
dependencies. When deploying your application, the App
Engine plugin will only upload the files that changed, rather than the entire
uber JAR package.
Be sure to use the PORT environment variable
If you see the warnings about port 8080 and NGINX in your app log files, your
app's web server is listening on the default port 8080. This prevents
App Engine from using its NGINX layer to compress HTTP responses. We
recommend that you configure your web server respond to HTTP requests on the
port specified by the PORT environment variable, typically 8081. For example:
/*
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
package com.example.appengine ;
import com.sun.net.httpserver.HttpServer ;
import java.io.IOException ;
import java.io.OutputStream ;
import java.net.InetSocketAddress ;
public class Main {
public static void main ( String [] args ) throws IOException {
// Create an instance of HttpServer bound to port defined by the
// PORT environment variable when present, otherwise on 8080.
int port = Integer . parseInt ( System . getenv (). getOrDefault ( "PORT" , "8080" ));
HttpServer server = HttpServer . create ( new InetSocketAddress ( port ), 0 );
// Set root URI path.
server . createContext ( "/" , ( var t ) - > {
byte [] response = "Hello World!" . getBytes ();
t . sendResponseHeaders ( 200 , response . length );
try ( OutputStream os = t . getResponseBody ()) {
os . write ( response );
}
});
// Create a second URI path.
server . createContext ( "/foo" , ( var t ) - > {
byte [] response = "Foo!" . getBytes ();
t . sendResponseHeaders ( 200 , response . length );
try ( OutputStream os = t . getResponseBody ()) {
os . write ( response );
}
});
server . start ();
}
}
Compatibility with previous Java versions
For differences between Java 8 and the latest supported Java version, see
Migrate from Java 8 to the latest Java runtime .
Environment variables
The following environment variables are set by the runtime:
Environment variable
Description
GAE_APPLICATION
The ID of your App Engine application.
This ID is prefixed with ' region code ~'
such as 'e~' for applications deployed in Europe.
GAE_DEPLOYMENT_ID
The ID of the current deployment.
GAE_ENV
The App Engine environment. Set to standard .
GAE_INSTANCE
The ID of the instance on which your service is currently running.
GAE_MEMORY_MB
The amount of memory available to the application process, in MB.
GAE_RUNTIME
The runtime specified in your app.yaml file.
GAE_SERVICE
The service name specified in your app.yaml file. If no service name is specified, it is set to default .
GAE_VERSION
The current version label of your service.
GOOGLE_CLOUD_PROJECT
The Google Cloud project ID associated with your application.
PORT
The port that receives HTTP requests.
NODE_ENV (Only available in the Node.js runtime)
Set to production when your service is deployed.
You can
define additional environment variables in your app.yaml file ,
but the above values cannot be overridden, except for NODE_ENV .
HTTPS and forwarding proxies
App Engine terminates HTTPS connections at the load balancer and
forwards requests to your application. Some applications need to determine
the original request IP and protocol. The user's IP address is available in
the standard X-Forwarded-For header. Applications that require this
information should configure their web framework to trust the proxy.
Filesystem access
The runtime includes a writable /tmp directory, with all other directories
having read-only access. Writing to /tmp takes up system memory.
Metadata server
Each instance of your application can use the App Engine metadata server
to query information about the instance and your project.
Note: Custom metadata is not supported in the standard environment.
You can access the metadata server through the following endpoints:
http://metadata
http://metadata.google.internal
Requests sent to the metadata server must include the request header
Metadata-Flavor: Google . This header indicates that the request was sent with
the intention of retrieving metadata values.
The following table lists the endpoints where you can make HTTP requests for
specific metadata:
Metadata endpoint
Description
/computeMetadata/v1/project/numeric-project-id
The project number assigned to your project.
/computeMetadata/v1/project/project-id
The project ID assigned to your project.
/computeMetadata/v1/instance/region
The region the instance is running in.
/computeMetadata/v1/instance/service-accounts/default/aliases
/computeMetadata/v1/instance/service-accounts/default/email
The default service account email assigned to your project.
/computeMetadata/v1/instance/service-accounts/default/
Lists all the default service accounts for your project.
/computeMetadata/v1/instance/service-accounts/default/scopes
Lists all the supported scopes for the default service accounts.
/computeMetadata/v1/instance/service-accounts/default/token
Returns the auth token that can be used to authenticate your application to other Google Cloud APIs.
For example, to retrieve your project ID, send a request to
http://metadata.google.internal/computeMetadata/v1/project/project-id .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
