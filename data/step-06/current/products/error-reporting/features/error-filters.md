---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.692Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error filters"
feature_slug: "error-filters"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/viewing-errors"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/java"
  - "https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter"
keywords:
  - "error"
  - "filters"
  - "users"
  - "can"
  - "filter"
  - "errors"
  - "custom"
  - "text"
---

# Error filters

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Users can filter errors by custom text in addition to time, service, and version.

## Extended Definition

Users can filter errors by custom text in addition to time, service, and version.

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
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filter error groups by text To filter error groups by text, enter a value in the Filter errors text field.
- The text filter can perform a text match on any of the following fields: Error information HTTP Response Code Exception stack Request URL Report location HTTP method What's next Manage error groups Manage service error groups Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you filter error groups by text, the bar graphs show grey bars to represent the number of error events that didn't match the text filter: For information on how Error Reporting organizes error events into error groups, see How error events are grouped .
- Filter error groups You can use the filters on the Error Reporting toolbar to filter by the status, the affected resources, and the region of the log buckets that store your log entries.

### ServiceContextFilter \_|\_ Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter](https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContextFilter)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Cloud Observability Error Reporting Reference Send feedback ServiceContextFilter Stay organized with collections Save and categorize content based on your preferences.
- JSON representation Specifies criteria for filtering a subset of service contexts.
- The fields in the filter correspond to the fields in ServiceContext .
- The exact value to match against ServiceContext.version . resourceType string Optional.

### Instrument Java apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java)
- Source ID: `site-docs-reference-required-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ErrorContext errorContext = ErrorContext . newBuilder () . setReportLocation ( SourceLocation . newBuilder () . setFilePath ( "Test.java" ) . setLineNumber ( 10 ) . setFunctionName ( "myMethod" ) . build ()) . build (); // Report a custom error event ReportedErrorEvent customErrorEvent = ReportedErrorEvent . getDefaultInstance () . toBuilder () . setMessage ( "custom error event" ) . setContext ( errorContext ) . build (); // default project id ProjectName projectName = ProjectName . of ( ServiceOptions . getDefaultProjectId ()); reportErrorsServiceClient . reportErrorEvent ( projectName , customErrorEvent ); } catch ( Exception e ) { logger . log ( Level .
- ProjectName ; import com.google.devtools.clouderrorreporting.v1beta1.ReportErrorsServiceClient ; import com.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent ; import java.io.IOException ; import java.io.PrintWriter ; import java.io.StringWriter ; / Snippet demonstrates using the Error Reporting API to report an exception. <p> When the workload runs on App Engine, GKE, Cloud Functions or another managed environment, printing the exception's stack trace to stderr will automatically report the error to Error Reporting. / public class QuickStart { static String projectId ; public static void main ( String [] args ) throws Exception { // Set your Google Cloud Platform project ID via environment or explicitly projectId = ServiceOptions . getDefaultProjectId (); if ( args . length > 0 ) { projectId = args [ 0 ] ; } else { String value = System . getenv ( "GOOGLE CLOUD PROJECT" ); if ( value != null && value . isEmpty ()) { projectId = value ; } } try { throw new Exception ( "Something went wrong" ); } catch ( Exception ex ) { reportError ( ex ); } } / Sends formatted error report to Google Cloud including the error context. @param ex Exception containing the error and the context. @throws IOException if fails to communicate with Google Cloud / private static void reportError ( Exception ex ) throws IOException { try ( ReportErrorsServiceClient serviceClient = ReportErrorsServiceClient . create ()) { StringWriter sw = new StringWriter (); PrintWriter pw = new PrintWriter ( sw ); ex . printStackTrace ( pw ); ReportedErrorEvent errorEvent = ReportedErrorEvent . getDefaultInstance () . toBuilder () . setMessage ( sw . toString ()) . build (); // If you need to report an error asynchronously, use reportErrorEventCallable() // method serviceClient . reportErrorEvent ( ProjectName . of ( projectId ), errorEvent ); } } } See the Java API Reference Documentation on how to retrieve and manage error statistics as well as data for individual events.
- SEVERE , "exception using log framework" , new IllegalArgumentException ()); // use the error-reporting client library only if you require logging custom error events. logCustomErrorEvent (); // runtime exceptions are also automatically reported. throw new RuntimeException ( "this is a runtime exception" ); } private void logCustomErrorEvent () { try ( ReportErrorsServiceClient reportErrorsServiceClient = ReportErrorsServiceClient . create ()) { // Custom error events require an error reporting location as well.
- Note: Error log entries written to stderr are processed automatically by Error Reporting, without needing to use the Error Reporting package for Java directly. @WebServlet ( name = "Error reporting" , value = "/error" ) public class ErrorReportingExample extends HttpServlet { private Logger logger = Logger . getLogger ( ErrorReportingExample . class . getName ()); @Override public void doGet ( HttpServletRequest req , HttpServletResponse resp ) throws IOException , ServletException { // errors logged to stderr / Cloud logging with exceptions are automatically reported. logger . log ( Level .

