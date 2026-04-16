---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.686Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "GKE workload error reporting"
feature_slug: "gke-workload-error-reporting"
latest_feature_date: "2023-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/check-app-crash"
  - "https://docs.cloud.google.com/error-reporting/docs/reference/libraries"
  - "https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient"
keywords:
  - "gke"
  - "workload"
  - "error"
  - "reporting"
  - "shows"
  - "recent"
  - "application"
  - "errors"
---

# GKE workload error reporting

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Error Reporting shows recent application errors for Google Kubernetes Engine workloads of type Deployment or Pod.

## Extended Definition

Error Reporting shows recent application errors for Google Kubernetes Engine workloads of type Deployment or Pod.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/check-app-crash](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)
- [https://docs.cloud.google.com/error-reporting/docs/reference/libraries](https://docs.cloud.google.com/error-reporting/docs/reference/libraries)
- [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient)

## Supporting Pages

### "Quickstart: Check a crashed app for errors by using Error Reporting \_|\_\

- URL: [https://docs.cloud.google.com/error-reporting/docs/check-app-crash](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)
- Source ID: `site-docs-reference-required-1`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check a crashed app for errors by using Error Reporting Error Reporting provides a single place to monitor error conditions from all apps and services in a Google Cloud project and from Amazon Elastic Compute Cloud (EC2) applications.
- Simulate an error To generate 11 sample errors, run the following script in Cloud Shell: COUNTER = 0 while [ $COUNTER -lt 11 ] ; do gcloud beta error-reporting events report --service tutorial --service-version v $(( COUNTER / 10 + 1 )) \ --message "java.lang.RuntimeException: Error rendering template $COUNTER at com.example.TestClass.test(TestClass.java:51) at com.example.AnotherClass(AnotherClass.java:25) at javax.servlet.http.HttpServlet.service (HttpServlet.java:617) at javax.servlet.http.HttpServlet.service (HttpServlet.java:717)" if [ $COUNTER -eq 10 ] ; then echo "All sample errors reported." fi let COUNTER = COUNTER+1 done When the script finishes generating all of the errors, it prints the following line: All sample errors reported.
- To generate new types of errors, click terminal Activate Cloud shell and run the following script: COUNTER = 0 while [ $COUNTER -lt 3 ] ; do gcloud beta error-reporting events report --service tutorial --service-version v1 \ --message "java.lang.ArrayIndexOutOfBoundsException: $COUNTER at com.example.AppController.createUser(AppController.java:42) at com.example.User(User.java:31) at javax.servlet.http.HttpServlet.service (HttpServlet.java:617) at javax.servlet.http.HttpServlet.service (HttpServlet.java:717)" if [ $COUNTER -eq 10 ] ; then echo "All sample errors reported." fi let COUNTER = COUNTER+1 done When the script finishes generating all of the errors, it prints the following line: All sample errors reported.
- Generate error messages from a App Engine app While the sample messages you generated from the scripts fully simulate error conditions in Error Reporting, if you want to generate errors from a real service running in your Google Cloud project, follow the steps in this section.

### "Class ReportErrorsServiceAsyncClient (1.15.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.report_errors_service.ReportErrorsServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,ReportErrorsServiceTransport,Callable[..., ReportErrorsServiceTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- Callable [ [ ... ], google . cloud . errorreporting v1beta1 . services . report errors service . transports . base .
- Callable [ [ ... ], google . cloud . errorreporting v1beta1 . services . report errors service . transports . base .
- Union [ str , google . cloud . errorreporting v1beta1 . services . report errors service . transports . base .

### Error Reporting client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/reference/libraries](https://docs.cloud.google.com/error-reporting/docs/reference/libraries)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Print ( err ) } Java import com.google.cloud.ServiceOptions ; import com.google.devtools.clouderrorreporting.v1beta1.ProjectName ; import com.google.devtools.clouderrorreporting.v1beta1.ReportErrorsServiceClient ; import com.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent ; import java.io.IOException ; import java.io.PrintWriter ; import java.io.StringWriter ; / Snippet demonstrates using the Error Reporting API to report an exception. <p> When the workload runs on App Engine, GKE, Cloud Functions or another managed environment, printing the exception's stack trace to stderr will automatically report the error to Error Reporting. / public class QuickStart { static String projectId ; public static void main ( String [] args ) throws Exception { // Set your Google Cloud Platform project ID via environment or explicitly projectId = ServiceOptions . getDefaultProjectId (); if ( args . length > 0 ) { projectId = args [ 0 ] ; } else { String value = System . getenv ( "GOOGLE CLOUD PROJECT" ); if ( value != null && value . isEmpty ()) { projectId = value ; } } try { throw new Exception ( "Something went wrong" ); } catch ( Exception ex ) { reportError ( ex ); } } / Sends formatted error report to Google Cloud including the error context. @param ex Exception containing the error and the context. @throws IOException if fails to communicate with Google Cloud / private static void reportError ( Exception ex ) throws IOException { try ( ReportErrorsServiceClient serviceClient = ReportErrorsServiceClient . create ()) { StringWriter sw = new StringWriter (); PrintWriter pw = new PrintWriter ( sw ); ex . printStackTrace ( pw ); ReportedErrorEvent errorEvent = ReportedErrorEvent . getDefaultInstance () . toBuilder () . setMessage ( sw . toString ()) . build (); // If you need to report an error asynchronously, use reportErrorEventCallable() // method serviceClient . reportErrorEvent ( ProjectName . of ( projectId ), errorEvent ); } } } Node.js // Import the Google Cloud client library const { ErrorReporting } = require ( '@google-cloud/error-reporting' ); function quickstart () { try { throw new Error ( 'Something went wrong' ); } catch ( exception ) { reportError ( exception ); } } function reportError ( exception ) { // Instantiates a client const errors = new ErrorReporting (); // Reports an exception errors . report ( exception . stack ); } PHP // Imports the Cloud Client Library use Google\Cloud\ErrorReporting\Bootstrap; use Google\Cloud\Logging\LoggingClient; use Google\Cloud\Core\Report\SimpleMetadataProvider; // These variables are set by the App Engine environment.
- ReportErrorEvent ( projectName , errorEvent ); } } Go // Sample errorreporting quickstart contains is a quickstart // example for the Google Cloud Error Reporting API. package main import ( "context" "errors" "log" "os" "cloud.google.com/go/errorreporting" ) var errorClient errorreporting .
- WriteLine ( "Stackdriver Error Report Sent" ); } } /// <summary> /// Report an exception to the Error Reporting service. /// </summary> private static void ReportError ( Exception e ) { // Create the report and execute the request. var reporter = ReportErrorsServiceClient .
- This page shows how to get started with the Cloud Client Libraries for the Error Reporting API.

