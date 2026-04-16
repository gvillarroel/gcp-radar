---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.256Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Jetty 9.3 runtime upgrade for Java 8 alpha"
feature_slug: "jetty-9-3-runtime-upgrade-for-java-8-alpha"
latest_feature_date: "2017-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime"
keywords:
  - "upgrades"
  - "upgrade"
  - "alpha"
  - "jetty"
  - "runtime"
---

# Jetty 9.3 runtime upgrade for Java 8 alpha

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The Java 8 alpha standard environment runtime upgrades to Jetty 9.3.18.

## Extended Definition

The Java 8 alpha standard environment runtime upgrades to Jetty 9.3.18.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)

## Supporting Pages

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Upgrade your applications to the latest supported runtime version to continue receiving security updates and be eligible for technical support.
- To run your applications on Java EE 8, declare a new system-properties tag in your appengine-web.xml file with the non-default app.engine.use.EE8 configuration: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java17</runtime> <system-properties> <property name="appengine.use.EE8" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Optional: Java version 21 and later includes support for virtual threads.
- Upgrade Java on a compatible Enterprise Edition (EE) version To use Java 25 on Enterprise Edition 11 (EE 11) , or Java 21 on Enterprise Edition 10 (EE 10) , upgrade your application servlets and dependencies in your Maven and Gradle files to include the Jakarta namespace: Java 25 (EE 11) To use Java 25 on Enterprise Edition 11 (EE 11) , follow these steps: Change the version number in your web.xml configuration file to version=6.1 .
- Add the following system property in your appengine-web.xml file: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java21</runtime> <!-- or java17 --> <system-properties> <property name="appengine.use.EE10" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Optional: Java 21 includes support for virtual threads.

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)
- Source ID: `site-docs-reference-4`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Upgrade your applications to the latest supported runtime version to continue receiving security updates and be eligible for technical support.
- To run your applications on Java EE 8, declare a new system-properties tag in your appengine-web.xml file with the non-default app.engine.use.EE8 configuration: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java17</runtime> <system-properties> <property name="appengine.use.EE8" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Optional: Java version 21 and later includes support for virtual threads.
- Upgrade Java on a compatible Enterprise Edition (EE) version To use Java 25 on Enterprise Edition 11 (EE 11) , or Java 21 on Enterprise Edition 10 (EE 10) , upgrade your application servlets and dependencies in your Maven and Gradle files to include the Jakarta namespace: Java 25 (EE 11) To use Java 25 on Enterprise Edition 11 (EE 11) , follow these steps: Change the version number in your web.xml configuration file to version=6.1 .
- Add the following system property in your appengine-web.xml file: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java21</runtime> <!-- or java17 --> <system-properties> <property name="appengine.use.EE10" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Optional: Java 21 includes support for virtual threads.

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / package com.example.appengine ; import com.sun.net.httpserver.HttpServer ; import java.io.IOException ; import java.io.OutputStream ; import java.net.InetSocketAddress ; public class Main { public static void main ( String [] args ) throws IOException { // Create an instance of HttpServer bound to port defined by the // PORT environment variable when present, otherwise on 8080. int port = Integer . parseInt ( System . getenv (). getOrDefault ( "PORT" , "8080" )); HttpServer server = HttpServer . create ( new InetSocketAddress ( port ), 0 ); // Set root URI path. server . createContext ( "/" , ( var t ) - > { byte [] response = "Hello World!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); // Create a second URI path. server . createContext ( "/foo" , ( var t ) - > { byte [] response = "Foo!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); server . start (); } } Compatibility with previous Java versions For differences between Java 8 and the latest supported Java version, see Migrate from Java 8 to the latest Java runtime .
- For example, an executable with the filename myexecutable could have the following app.yaml configuration file: runtime : 25 # or another supported runtime version. entrypoint : ./myexecutable Google Cloud client libraries can be used to compile applications as a GraalVM native image.
- The runtime's Open JDK environment App Engine runs Java apps in a container secured by gVisor on an up-to-date Ubuntu Linux distribution and its supported openjdk-17-jdk for Java 17 or openjdk-21-jdk for Java 21 runtime.
- For example: runtime: java25 # or another supported runtime entrypoint: java -Xmx64m -jar YOUR-ARTIFACT.jar Where the example YOUR-ARTIFACT.jar application jar must: Be in the root directory with your app.yaml file.

