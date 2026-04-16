---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.695Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error Reporting support in Cloud Console mobile app"
feature_slug: "error-reporting-support-in-cloud-console-mobile-app"
latest_feature_date: "2016-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/notifications"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/dotnet"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/java"
keywords:
  - "error"
  - "reporting"
  - "console"
  - "mobile"
  - "app"
  - "now"
  - "supports"
---

# Error Reporting support in Cloud Console mobile app

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

The Cloud Console mobile app now supports Error Reporting.

## Extended Definition

The Cloud Console mobile app now supports Error Reporting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/notifications](https://docs.cloud.google.com/error-reporting/docs/notifications)
- [https://docs.cloud.google.com/error-reporting/docs/setup/dotnet](https://docs.cloud.google.com/error-reporting/docs/setup/dotnet)
- [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java)

## Supporting Pages

### "Configure and manage notifications \_|\_ Error Reporting \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/error-reporting/docs/notifications](https://docs.cloud.google.com/error-reporting/docs/notifications)
- Source ID: `site-docs-reference-required-1`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select notification channels through the Google Cloud console To select an existing notification channel, you must have one of the following roles: Error Reporting User Error Reporting Admin Project Editor Project Owner To select where you want to send notifications when new error groups occur, complete the following steps.
- In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.
- Error Reporting lets you select from four types of notification channels: email, mobile, Slack, and Webhooks.
- Mobile notifications Error Reporting sends mobile notifications to the Google Cloud app on Android and iOS.

### Instrument C# apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/dotnet](https://docs.cloud.google.com/error-reporting/docs/setup/dotnet)
- Source ID: `site-docs-reference-required-1`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View error groups In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.
- Configure the client library For more information and examples, see the following resources: Google.Cloud.Diagnostics.AspNetCore3 documentation Google.Cloud.Diagnostics.AspNetCore documentation Google.Cloud.Diagnostics.Common documentation Run apps on Google Cloud To create error groups by using projects.events.report , your service account requires the Error Reporting Writer role ( roles/errorreporting.writer ).
- Google Kubernetes Engine To use Error Reporting with Google Kubernetes Engine, do the following: Ensure that the service account to be used by your container has been granted the Error Reporting Writer role ( roles/errorreporting.writer ).
- Compute Engine To use Error Reporting with Compute Engine VM instances, do the following: Ensure that the service account to be used by your VM instance has been granted the Error Reporting Writer role ( roles/errorreporting.writer ).

### Instrument Java apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java)
- Source ID: `site-docs-reference-required-2`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example Exceptions logged using the Cloud Logging Logback Appender or java.util.logging Handler are automatically reported to the Error Reporting console.
- View error groups In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.
- ProjectName ; import com.google.devtools.clouderrorreporting.v1beta1.ReportErrorsServiceClient ; import com.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent ; import java.io.IOException ; import java.io.PrintWriter ; import java.io.StringWriter ; / Snippet demonstrates using the Error Reporting API to report an exception. <p> When the workload runs on App Engine, GKE, Cloud Functions or another managed environment, printing the exception's stack trace to stderr will automatically report the error to Error Reporting. / public class QuickStart { static String projectId ; public static void main ( String [] args ) throws Exception { // Set your Google Cloud Platform project ID via environment or explicitly projectId = ServiceOptions . getDefaultProjectId (); if ( args . length > 0 ) { projectId = args [ 0 ] ; } else { String value = System . getenv ( "GOOGLE CLOUD PROJECT" ); if ( value != null && value . isEmpty ()) { projectId = value ; } } try { throw new Exception ( "Something went wrong" ); } catch ( Exception ex ) { reportError ( ex ); } } / Sends formatted error report to Google Cloud including the error context. @param ex Exception containing the error and the context. @throws IOException if fails to communicate with Google Cloud / private static void reportError ( Exception ex ) throws IOException { try ( ReportErrorsServiceClient serviceClient = ReportErrorsServiceClient . create ()) { StringWriter sw = new StringWriter (); PrintWriter pw = new PrintWriter ( sw ); ex . printStackTrace ( pw ); ReportedErrorEvent errorEvent = ReportedErrorEvent . getDefaultInstance () . toBuilder () . setMessage ( sw . toString ()) . build (); // If you need to report an error asynchronously, use reportErrorEventCallable() // method serviceClient . reportErrorEvent ( ProjectName . of ( projectId ), errorEvent ); } } } See the Java API Reference Documentation on how to retrieve and manage error statistics as well as data for individual events.
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-errorreporting</artifactId> </dependency> </dependencies> If you are using Gradle , add the following to your dependencies: implementation 'com.google.cloud:google-cloud-errorreporting:0.212.0-beta' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-errorreporting" % "0.212.0-beta" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.

