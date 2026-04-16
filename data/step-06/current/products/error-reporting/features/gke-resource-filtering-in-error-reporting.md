---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.685Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "GKE resource filtering in Error Reporting"
feature_slug: "gke-resource-filtering-in-error-reporting"
latest_feature_date: "2023-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/viewing-errors"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/java"
  - "https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter"
keywords:
  - "gke"
  - "resource"
  - "filtering"
  - "error"
  - "reporting"
  - "filter"
  - "can"
  - "kubernetes"
---

# GKE resource filtering in Error Reporting

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

The Error Reporting resource filter can filter Google Kubernetes Engine resources by location, cluster, namespace, container, or pod.

## Extended Definition

The Error Reporting resource filter can filter Google Kubernetes Engine resources by location, cluster, namespace, container, or pod.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)
- [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java)
- [https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter](https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter)

## Supporting Pages

### View and filter error groups \_|\_ Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filter error groups You can use the filters on the Error Reporting toolbar to filter by the status, the affected resources, and the region of the log buckets that store your log entries.
- For example, if you have error groups for the Kubernetes Container Services resource, then you can filter first by service and then by version: To save your selections, click Apply .
- When you filter error groups by text, the bar graphs show grey bars to represent the number of error events that didn't match the text filter: For information on how Error Reporting organizes error events into error groups, see How error events are grouped .
- Home Documentation Observability Error Reporting Guides Send feedback View and filter error groups Stay organized with collections Save and categorize content based on your preferences.

### ServiceContextFilter \_|\_ Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter](https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter)
- Source ID: `site-iam-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Cloud Observability Error Reporting Reference Send feedback ServiceContextFilter Stay organized with collections Save and categorize content based on your preferences.
- JSON representation Specifies criteria for filtering a subset of service contexts.
- JSON representation { "service" : string , "version" : string , "resourceType" : string } Fields service string Optional.
- The exact value to match against ServiceContext.version . resourceType string Optional.

### Instrument Java apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java)
- Source ID: `site-docs-reference-required-2`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SEVERE , "Exception encountered logging custom event" , e ); } } } Google Kubernetes Engine To use Error Reporting with Google Kubernetes Engine, do the following: Ensure that the service account to be used by your container has been granted the Error Reporting Writer role ( roles/errorreporting.writer ).
- Error Reporting is integrated with some Google Cloud services, such as Cloud Run functions and App Engine , Compute Engine , and Google Kubernetes Engine .
- ProjectName ; import com.google.devtools.clouderrorreporting.v1beta1.ReportErrorsServiceClient ; import com.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent ; import java.io.IOException ; import java.io.PrintWriter ; import java.io.StringWriter ; / Snippet demonstrates using the Error Reporting API to report an exception. <p> When the workload runs on App Engine, GKE, Cloud Functions or another managed environment, printing the exception's stack trace to stderr will automatically report the error to Error Reporting. / public class QuickStart { static String projectId ; public static void main ( String [] args ) throws Exception { // Set your Google Cloud Platform project ID via environment or explicitly projectId = ServiceOptions . getDefaultProjectId (); if ( args . length > 0 ) { projectId = args [ 0 ] ; } else { String value = System . getenv ( "GOOGLE CLOUD PROJECT" ); if ( value != null && value . isEmpty ()) { projectId = value ; } } try { throw new Exception ( "Something went wrong" ); } catch ( Exception ex ) { reportError ( ex ); } } / Sends formatted error report to Google Cloud including the error context. @param ex Exception containing the error and the context. @throws IOException if fails to communicate with Google Cloud / private static void reportError ( Exception ex ) throws IOException { try ( ReportErrorsServiceClient serviceClient = ReportErrorsServiceClient . create ()) { StringWriter sw = new StringWriter (); PrintWriter pw = new PrintWriter ( sw ); ex . printStackTrace ( pw ); ReportedErrorEvent errorEvent = ReportedErrorEvent . getDefaultInstance () . toBuilder () . setMessage ( sw . toString ()) . build (); // If you need to report an error asynchronously, use reportErrorEventCallable() // method serviceClient . reportErrorEvent ( ProjectName . of ( projectId ), errorEvent ); } } } See the Java API Reference Documentation on how to retrieve and manage error statistics as well as data for individual events.
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-errorreporting</artifactId> </dependency> </dependencies> If you are using Gradle , add the following to your dependencies: implementation 'com.google.cloud:google-cloud-errorreporting:0.212.0-beta' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-errorreporting" % "0.212.0-beta" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.

