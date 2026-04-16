---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.926Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine Java SDK/runtime version 1.9.25"
feature_slug: "app-engine-java-sdk-runtime-version-1-9-25"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/runtime-java8"
keywords:
  - "app"
  - "engine"
  - "java"
  - "sdk"
  - "runtime"
  - "version"
  - "25"
  - "platform"
---

# App Engine Java SDK/runtime version 1.9.25

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The App Engine Java platform release includes version 1.9.25.

## Extended Definition

The App Engine Java platform release includes version 1.9.25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java/runtime](https://docs.cloud.google.com/appengine/docs/standard/java/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java/runtime-java8](https://docs.cloud.google.com/appengine/docs/standard/java/runtime-java8)

## Supporting Pages

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / package com.example.appengine ; import com.sun.net.httpserver.HttpServer ; import java.io.IOException ; import java.io.OutputStream ; import java.net.InetSocketAddress ; public class Main { public static void main ( String [] args ) throws IOException { // Create an instance of HttpServer bound to port defined by the // PORT environment variable when present, otherwise on 8080. int port = Integer . parseInt ( System . getenv (). getOrDefault ( "PORT" , "8080" )); HttpServer server = HttpServer . create ( new InetSocketAddress ( port ), 0 ); // Set root URI path. server . createContext ( "/" , ( var t ) - > { byte [] response = "Hello World!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); // Create a second URI path. server . createContext ( "/foo" , ( var t ) - > { byte [] response = "Foo!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); server . start (); } } Compatibility with previous Java versions For differences between Java 8 and the latest supported Java version, see Migrate from Java 8 to the latest Java runtime .
- The runtime's Open JDK environment App Engine runs Java apps in a container secured by gVisor on an up-to-date Ubuntu Linux distribution and its supported openjdk-17-jdk for Java 17 or openjdk-21-jdk for Java 21 runtime.
- For example, your application might be deployed at Java 21.0.4 and automatically updated to version Java 21.0.5 at a later deployment of the managed platform, but it won't be automatically updated to Java 22.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Java runtime environment Stay organized with collections Save and categorize content based on your preferences.

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/runtime](https://docs.cloud.google.com/appengine/docs/standard/java/runtime)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / package com.example.appengine ; import com.sun.net.httpserver.HttpServer ; import java.io.IOException ; import java.io.OutputStream ; import java.net.InetSocketAddress ; public class Main { public static void main ( String [] args ) throws IOException { // Create an instance of HttpServer bound to port defined by the // PORT environment variable when present, otherwise on 8080. int port = Integer . parseInt ( System . getenv (). getOrDefault ( "PORT" , "8080" )); HttpServer server = HttpServer . create ( new InetSocketAddress ( port ), 0 ); // Set root URI path. server . createContext ( "/" , ( var t ) - > { byte [] response = "Hello World!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); // Create a second URI path. server . createContext ( "/foo" , ( var t ) - > { byte [] response = "Foo!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); server . start (); } } Compatibility with previous Java versions For differences between Java 8 and the latest supported Java version, see Migrate from Java 8 to the latest Java runtime .
- The runtime's Open JDK environment App Engine runs Java apps in a container secured by gVisor on an up-to-date Ubuntu Linux distribution and its supported openjdk-17-jdk for Java 17 or openjdk-21-jdk for Java 21 runtime.
- For example, your application might be deployed at Java 21.0.4 and automatically updated to version Java 21.0.5 at a later deployment of the managed platform, but it won't be automatically updated to Java 22.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Java runtime environment Stay organized with collections Save and categorize content based on your preferences.

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/runtime-java8](https://docs.cloud.google.com/appengine/docs/standard/java/runtime-java8)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / package com.example.appengine ; import com.sun.net.httpserver.HttpServer ; import java.io.IOException ; import java.io.OutputStream ; import java.net.InetSocketAddress ; public class Main { public static void main ( String [] args ) throws IOException { // Create an instance of HttpServer bound to port defined by the // PORT environment variable when present, otherwise on 8080. int port = Integer . parseInt ( System . getenv (). getOrDefault ( "PORT" , "8080" )); HttpServer server = HttpServer . create ( new InetSocketAddress ( port ), 0 ); // Set root URI path. server . createContext ( "/" , ( var t ) - > { byte [] response = "Hello World!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); // Create a second URI path. server . createContext ( "/foo" , ( var t ) - > { byte [] response = "Foo!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); server . start (); } } Compatibility with previous Java versions For differences between Java 8 and the latest supported Java version, see Migrate from Java 8 to the latest Java runtime .
- The runtime's Open JDK environment App Engine runs Java apps in a container secured by gVisor on an up-to-date Ubuntu Linux distribution and its supported openjdk-17-jdk for Java 17 or openjdk-21-jdk for Java 21 runtime.
- For example, your application might be deployed at Java 21.0.4 and automatically updated to version Java 21.0.5 at a later deployment of the managed platform, but it won't be automatically updated to Java 22.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Java runtime environment Stay organized with collections Save and categorize content based on your preferences.

