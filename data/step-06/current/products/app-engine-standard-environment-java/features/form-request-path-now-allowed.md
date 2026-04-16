---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.918Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "/form request path now allowed"
feature_slug: "form-request-path-now-allowed"
latest_feature_date: "2016-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/runtime"
keywords:
  - "form"
  - "request"
  - "path"
  - "now"
  - "allowed"
  - "runtime"
  - "allows"
  - "requests"
---

# /form request path now allowed

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The runtime now allows requests to the "/form" path to be forwarded to applications, where that path was previously blocked.

## Extended Definition

The runtime now allows requests to the "/form" path to be forwarded to applications, where that path was previously blocked.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java/runtime](https://docs.cloud.google.com/appengine/docs/standard/java/runtime)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Google Cloud console Quota Details page also reports Secure Requests , Secure Incoming Bandwidth , and Secure Outgoing Bandwidth as separate values for informational purposes.
- Requests to these runtimes with header fields exceeding 8 kilobytes will return HTTP 400 errors.
- For more information about service addressability, see How Requests are Routed .
- The following limits apply specifically to the use of request handlers: Limit Amount Request size 32 megabytes Response size 32 megabytes Request timeout Depends on the type of scaling your app uses Maximum total number of files (app files and static files) 10,000 total 1,000 per directory Maximum size of an application file 32 megabytes Maximum size of a static file 32 megabytes Maximum total size of all application and static files First 1 gigabyte is free $ 0.026 per gigabyte per month after first 1 gigabyte Pending request timeout 10 seconds Maximum size of a single request header field 8 kilobytes for second-generation runtimes in the standard environment.

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / package com.example.appengine ; import com.sun.net.httpserver.HttpServer ; import java.io.IOException ; import java.io.OutputStream ; import java.net.InetSocketAddress ; public class Main { public static void main ( String [] args ) throws IOException { // Create an instance of HttpServer bound to port defined by the // PORT environment variable when present, otherwise on 8080. int port = Integer . parseInt ( System . getenv (). getOrDefault ( "PORT" , "8080" )); HttpServer server = HttpServer . create ( new InetSocketAddress ( port ), 0 ); // Set root URI path. server . createContext ( "/" , ( var t ) - > { byte [] response = "Hello World!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); // Create a second URI path. server . createContext ( "/foo" , ( var t ) - > { byte [] response = "Foo!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); server . start (); } } Compatibility with previous Java versions For differences between Java 8 and the latest supported Java version, see Migrate from Java 8 to the latest Java runtime .
- The following table lists the endpoints where you can make HTTP requests for specific metadata: Metadata endpoint Description /computeMetadata/v1/project/numeric-project-id The project number assigned to your project. /computeMetadata/v1/project/project-id The project ID assigned to your project. /computeMetadata/v1/instance/region The region the instance is running in. /computeMetadata/v1/instance/service-accounts/default/aliases /computeMetadata/v1/instance/service-accounts/default/email The default service account email assigned to your project. /computeMetadata/v1/instance/service-accounts/default/ Lists all the default service accounts for your project. /computeMetadata/v1/instance/service-accounts/default/scopes Lists all the supported scopes for the default service accounts. /computeMetadata/v1/instance/service-accounts/default/token Returns the auth token that can be used to authenticate your application to other Google Cloud APIs.
- You can access the metadata server through the following endpoints: http://metadata http://metadata.google.internal Requests sent to the metadata server must include the request header Metadata-Flavor: Google .
- For your app to receive HTTP requests, your entrypoint should start a web server that listens on the port specified by the PORT environment variable.

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/runtime](https://docs.cloud.google.com/appengine/docs/standard/java/runtime)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / package com.example.appengine ; import com.sun.net.httpserver.HttpServer ; import java.io.IOException ; import java.io.OutputStream ; import java.net.InetSocketAddress ; public class Main { public static void main ( String [] args ) throws IOException { // Create an instance of HttpServer bound to port defined by the // PORT environment variable when present, otherwise on 8080. int port = Integer . parseInt ( System . getenv (). getOrDefault ( "PORT" , "8080" )); HttpServer server = HttpServer . create ( new InetSocketAddress ( port ), 0 ); // Set root URI path. server . createContext ( "/" , ( var t ) - > { byte [] response = "Hello World!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); // Create a second URI path. server . createContext ( "/foo" , ( var t ) - > { byte [] response = "Foo!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); server . start (); } } Compatibility with previous Java versions For differences between Java 8 and the latest supported Java version, see Migrate from Java 8 to the latest Java runtime .
- The following table lists the endpoints where you can make HTTP requests for specific metadata: Metadata endpoint Description /computeMetadata/v1/project/numeric-project-id The project number assigned to your project. /computeMetadata/v1/project/project-id The project ID assigned to your project. /computeMetadata/v1/instance/region The region the instance is running in. /computeMetadata/v1/instance/service-accounts/default/aliases /computeMetadata/v1/instance/service-accounts/default/email The default service account email assigned to your project. /computeMetadata/v1/instance/service-accounts/default/ Lists all the default service accounts for your project. /computeMetadata/v1/instance/service-accounts/default/scopes Lists all the supported scopes for the default service accounts. /computeMetadata/v1/instance/service-accounts/default/token Returns the auth token that can be used to authenticate your application to other Google Cloud APIs.
- You can access the metadata server through the following endpoints: http://metadata http://metadata.google.internal Requests sent to the metadata server must include the request header Metadata-Flavor: Google .
- For your app to receive HTTP requests, your entrypoint should start a web server that listens on the port specified by the PORT environment variable.

