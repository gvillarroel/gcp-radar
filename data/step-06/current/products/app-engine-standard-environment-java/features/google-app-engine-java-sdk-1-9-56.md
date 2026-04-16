---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.893Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Google App Engine Java SDK 1.9.56"
feature_slug: "google-app-engine-java-sdk-1-9-56"
latest_feature_date: "2017-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime"
keywords:
  - "app"
  - "engine"
  - "java"
  - "sdk"
  - "56"
  - "was"
  - "updated"
  - "version"
---

# Google App Engine Java SDK 1.9.56

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The Java SDK was updated to version 1.9.56.

## Extended Definition

The Java SDK was updated to version 1.9.56.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic](https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)

## Supporting Pages

### "Method: apps.services.versions.patch \_|\_ App Engine Admin API \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic](https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource name : appengine.versions.update Query parameters Parameters updateMask string ( FieldMask format) Standard field mask for the set of fields to be updated.
- You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses: Standard environment instanceClass automatic scaling in the standard environment: automaticScaling.min idle instances automaticScaling.max idle instances automaticScaling.standard scheduler settings.max instances automaticScaling.standard scheduler settings.min instances automaticScaling.standard scheduler settings.target cpu utilization automaticScaling.standard scheduler settings.target throughput utilization basic scaling or manual scaling in the standard environment: servingStatus manualScaling.instances Flexible environment servingStatus automatic scaling in the flexible environment: automaticScaling.min total instances automaticScaling.max total instances automaticScaling.cool down period sec automaticScaling.cpu utilization.target utilization manual scaling in the flexible environment: manualScaling.instances HTTP request PATCH https://appengine.googleapis.com/v1/{name=apps/ /services/ /versions/ } The URL uses gRPC Transcoding syntax.
- Home Technology areas App Engine Admin API Reference Send feedback Method: apps.services.versions.patch Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Caching static content To ensure that clients always receive updated static content as soon as it is published, we recommend that you serve static content from versioned directories, such as css/v1/styles.css .
- App Engine returns an uncompressed response and Google Frontend caches the uncompressed version of the response data.
- App Engine returns a compressed response and the Google Front End caches the gzipped version of the response data.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / package com.example.appengine ; import com.sun.net.httpserver.HttpServer ; import java.io.IOException ; import java.io.OutputStream ; import java.net.InetSocketAddress ; public class Main { public static void main ( String [] args ) throws IOException { // Create an instance of HttpServer bound to port defined by the // PORT environment variable when present, otherwise on 8080. int port = Integer . parseInt ( System . getenv (). getOrDefault ( "PORT" , "8080" )); HttpServer server = HttpServer . create ( new InetSocketAddress ( port ), 0 ); // Set root URI path. server . createContext ( "/" , ( var t ) - > { byte [] response = "Hello World!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); // Create a second URI path. server . createContext ( "/foo" , ( var t ) - > { byte [] response = "Foo!" . getBytes (); t . sendResponseHeaders ( 200 , response . length ); try ( OutputStream os = t . getResponseBody ()) { os . write ( response ); } }); server . start (); } } Compatibility with previous Java versions For differences between Java 8 and the latest supported Java version, see Migrate from Java 8 to the latest Java runtime .
- For example, your application might be deployed at Java 21.0.4 and automatically updated to version Java 21.0.5 at a later deployment of the managed platform, but it won't be automatically updated to Java 22.
- App Engine Java releases All released artifacts that start with version 2.x.x use the open source release mechanism.
- Before you begin Download the latest version of the Google Cloud CLI or update your gcloud CLI to the current version: gcloud components update To deploy using Maven, you will need to add the App Engine Maven Plugin to your pom.xml file: <plugin> <groupId>com.google.cloud.tools</groupId> <artifactId>appengine-maven-plugin</artifactId> <version>2.8.1</version> </plugin> Other options for deploying include using the gcloud app deploy command or the App Engine Gradle plugin .

