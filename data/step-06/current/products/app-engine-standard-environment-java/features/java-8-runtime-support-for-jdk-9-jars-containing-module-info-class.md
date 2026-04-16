---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.889Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Java 8 runtime support for JDK 9 JARs containing module-info.class"
feature_slug: "java-8-runtime-support-for-jdk-9-jars-containing-module-info-class"
latest_feature_date: "2017-09-25"
deprecation_date: "2017-09-25"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/runtime"
keywords:
  - "java"
  - "runtime"
  - "jdk"
  - "jars"
  - "containing"
  - "module"
  - "info"
  - "class"
---

# Java 8 runtime support for JDK 9 JARs containing module-info.class

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The Java 8 runtime no longer supports JDK 9 JAR files that include a module-info.class file; deprecated on 2017-09-25.

## Extended Definition

The Java 8 runtime no longer supports JDK 9 JAR files that include a module-info.class file; deprecated on 2017-09-25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java/runtime](https://docs.cloud.google.com/appengine/docs/standard/java/runtime)

## Supporting Pages

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generally, your app.yaml file requires only the runtime element for a simple Java app in the standard environment, for example: runtime: java25 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- About app.yaml files You can specify the runtime configuration for your Java app, including versions and URLs, in the app.yaml file.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- The following is a sample Maven project structure: MyDir/ pom.xml [index.yaml] [cron.yaml] [dispatch.yaml] src/main/ appengine/ app.yaml java/com.example.mycode/ MyCode.java If you have more than one JAR file in your project directory or want to specify a custom entrypoint, you must specify it in the entrypoint element of your app.yaml file.

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / package com.example.appengine ; import com.sun.net.httpserver.HttpServer ; import java.io.IOException ; import java.io.OutputStream ; import java.net.InetSocketAddress ; public class Main { public static void main ( String [] args ) throws IOException { // Create an instance of HttpServer bound to port defined by the // PORT environment variable when present, otherwise on 8080. int port = Integer . parseInt ( System . getenv (). getOrDefault ( "PORT" , "8080" )); HttpServer server = HttpServer . create ( new InetSocketAddress ( port ), 0 ); // Set root URI path. server . createContext ( "/" , ( var t ) - > { byte [] response = "Hello World!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); // Create a second URI path. server . createContext ( "/foo" , ( var t ) - > { byte [] response = "Foo!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); server . start (); } } Compatibility with previous Java versions For differences between Java 8 and the latest supported Java version, see Migrate from Java 8 to the latest Java runtime .
- The runtime's Open JDK environment App Engine runs Java apps in a container secured by gVisor on an up-to-date Ubuntu Linux distribution and its supported openjdk-17-jdk for Java 17 or openjdk-21-jdk for Java 21 runtime.
- For example: runtime: java25 # or another supported runtime entrypoint: java -Xmx64m -jar YOUR-ARTIFACT.jar Where the example YOUR-ARTIFACT.jar application jar must: Be in the root directory with your app.yaml file.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Java runtime environment Stay organized with collections Save and categorize content based on your preferences.

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/runtime](https://docs.cloud.google.com/appengine/docs/standard/java/runtime)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / package com.example.appengine ; import com.sun.net.httpserver.HttpServer ; import java.io.IOException ; import java.io.OutputStream ; import java.net.InetSocketAddress ; public class Main { public static void main ( String [] args ) throws IOException { // Create an instance of HttpServer bound to port defined by the // PORT environment variable when present, otherwise on 8080. int port = Integer . parseInt ( System . getenv (). getOrDefault ( "PORT" , "8080" )); HttpServer server = HttpServer . create ( new InetSocketAddress ( port ), 0 ); // Set root URI path. server . createContext ( "/" , ( var t ) - > { byte [] response = "Hello World!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); // Create a second URI path. server . createContext ( "/foo" , ( var t ) - > { byte [] response = "Foo!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); server . start (); } } Compatibility with previous Java versions For differences between Java 8 and the latest supported Java version, see Migrate from Java 8 to the latest Java runtime .
- The runtime's Open JDK environment App Engine runs Java apps in a container secured by gVisor on an up-to-date Ubuntu Linux distribution and its supported openjdk-17-jdk for Java 17 or openjdk-21-jdk for Java 21 runtime.
- For example: runtime: java25 # or another supported runtime entrypoint: java -Xmx64m -jar YOUR-ARTIFACT.jar Where the example YOUR-ARTIFACT.jar application jar must: Be in the root directory with your app.yaml file.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Java runtime environment Stay organized with collections Save and categorize content based on your preferences.

