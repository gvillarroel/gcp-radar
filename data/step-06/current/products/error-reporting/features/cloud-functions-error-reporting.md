---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.693Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Cloud Functions error reporting"
feature_slug: "cloud-functions-error-reporting"
latest_feature_date: "2016-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/setup/java"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/nodejs"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/php"
keywords:
  - "functions"
  - "error"
  - "reporting"
  - "automatically"
  - "reports"
  - "unhandled"
  - "javascript"
  - "exceptions"
---

# Cloud Functions error reporting

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Cloud Functions automatically reports unhandled JavaScript exceptions to Stackdriver Error Reporting.

## Extended Definition

Cloud Functions automatically reports unhandled JavaScript exceptions to Stackdriver Error Reporting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java)
- [https://docs.cloud.google.com/error-reporting/docs/setup/nodejs](https://docs.cloud.google.com/error-reporting/docs/setup/nodejs)
- [https://docs.cloud.google.com/error-reporting/docs/setup/php](https://docs.cloud.google.com/error-reporting/docs/setup/php)

## Supporting Pages

### Instrument Java apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java)
- Source ID: `site-docs-reference-required-2`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Unhandled JavaScript exceptions will appear in Logging and be processed by Error Reporting without needing to use the Error Reporting package for Java.
- ProjectName ; import com.google.devtools.clouderrorreporting.v1beta1.ReportErrorsServiceClient ; import com.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent ; import java.io.IOException ; import java.io.PrintWriter ; import java.io.StringWriter ; / Snippet demonstrates using the Error Reporting API to report an exception. <p> When the workload runs on App Engine, GKE, Cloud Functions or another managed environment, printing the exception's stack trace to stderr will automatically report the error to Error Reporting. / public class QuickStart { static String projectId ; public static void main ( String [] args ) throws Exception { // Set your Google Cloud Platform project ID via environment or explicitly projectId = ServiceOptions . getDefaultProjectId (); if ( args . length > 0 ) { projectId = args [ 0 ] ; } else { String value = System . getenv ( "GOOGLE CLOUD PROJECT" ); if ( value != null && value . isEmpty ()) { projectId = value ; } } try { throw new Exception ( "Something went wrong" ); } catch ( Exception ex ) { reportError ( ex ); } } / Sends formatted error report to Google Cloud including the error context. @param ex Exception containing the error and the context. @throws IOException if fails to communicate with Google Cloud / private static void reportError ( Exception ex ) throws IOException { try ( ReportErrorsServiceClient serviceClient = ReportErrorsServiceClient . create ()) { StringWriter sw = new StringWriter (); PrintWriter pw = new PrintWriter ( sw ); ex . printStackTrace ( pw ); ReportedErrorEvent errorEvent = ReportedErrorEvent . getDefaultInstance () . toBuilder () . setMessage ( sw . toString ()) . build (); // If you need to report an error asynchronously, use reportErrorEventCallable() // method serviceClient . reportErrorEvent ( ProjectName . of ( projectId ), errorEvent ); } } } See the Java API Reference Documentation on how to retrieve and manage error statistics as well as data for individual events.
- Note: Error log entries written to stderr are processed automatically by Error Reporting, without needing to use the Error Reporting package for Java directly. @WebServlet ( name = "Error reporting" , value = "/error" ) public class ErrorReportingExample extends HttpServlet { private Logger logger = Logger . getLogger ( ErrorReportingExample . class . getName ()); @Override public void doGet ( HttpServletRequest req , HttpServletResponse resp ) throws IOException , ServletException { // errors logged to stderr / Cloud logging with exceptions are automatically reported. logger . log ( Level .
- SEVERE , "exception using log framework" , new IllegalArgumentException ()); // use the error-reporting client library only if you require logging custom error events. logCustomErrorEvent (); // runtime exceptions are also automatically reported. throw new RuntimeException ( "this is a runtime exception" ); } private void logCustomErrorEvent () { try ( ReportErrorsServiceClient reportErrorsServiceClient = ReportErrorsServiceClient . create ()) { // Custom error events require an error reporting location as well.

### Instrument Node.js apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/nodejs](https://docs.cloud.google.com/error-reporting/docs/setup/nodejs)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Unhandled JavaScript exceptions will appear in Logging and be processed by Error Reporting without needing to use the Error Reporting library for Node.js.
- Example: // Imports the Google Cloud client library const { ErrorReporting } = require ( ' @google-cloud/error-reporting ' ); // Instantiates a client const errors = new ErrorReporting ({ projectId : 'your-project-id' , keyFilename : '/path/to/key.json' , }); // Reports a simple error errors . report ( 'Something broke!' ); App Engine flexible environment App Engine grants the Error Reporting Writer role ( roles/errorreporting.writer ) to your default service account automatically.
- Use npm to install the package: npm install @google-cloud/error-reporting Import the library and instantiate a client in order to begin reporting errors: // Imports the Google Cloud client library const { ErrorReporting } = require ( ' @google-cloud/error-reporting ' ); // Instantiates a client const errors = new ErrorReporting (); // Reports a simple error errors . report ( 'Something broke!' ); For more information on installation, read the documentation for the Error Reporting library for Node.js.
- Example: // Imports the Google Cloud client library const { ErrorReporting } = require ( ' @google-cloud/error-reporting ' ); // Instantiates a client const errors = new ErrorReporting ({ projectId : 'your-project-id' , keyFilename : '/path/to/key.json' , }); // Reports a simple error errors . report ( 'Something broke!' ); View error groups In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.

### Instrument PHP apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/php](https://docs.cloud.google.com/error-reporting/docs/setup/php)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Unhandled JavaScript exceptions will appear in Logging and be processed by Error Reporting without needing to use the Error Reporting library for PHP.
- To enable Error Reporting on App Engine flexible environment, follow these steps: Install necessary libraries with the following command: $ composer require google/cloud-error-reporting Add the following line to runtime config section in app.yaml : enable stackdriver integration: true Then the library automatically collects all the errors and uncaught exceptions to Error Reporting.
- Laravel Edit the report function in the file app/Exceptions/Handler.php as follows: public function report(Exception $exception) { if (isset($ SERVER['GAE SERVICE'])) { // Ensure Stackdriver is initialized and handle the exception Bootstrap::init(); Bootstrap::exceptionHandler($exception); } else { parent::report($exception); } } You also need to add a one-line use statement at the beginning of the file: use Google\Cloud\ErrorReporting\Bootstrap; Symfony Create a new file src/AppBundle/EventSubscriber/ExceptionSubscriber.php with the following content: // src/AppBundle/EventSubscriber/ExceptionSubscriber.php namespace AppBundle\EventSubscriber; use Google\Cloud\ErrorReporting\Bootstrap; use Symfony\Component\EventDispatcher\EventSubscriberInterface; use Symfony\Component\HttpKernel\Event\ExceptionEvent; use Symfony\Component\HttpKernel\KernelEvents; class ExceptionSubscriber implements EventSubscriberInterface { public static function getSubscribedEvents() { // return the subscribed events, their methods and priorities return [KernelEvents::EXCEPTION => [ ['logException', 0] ]]; } public function logException(ExceptionEvent $event) { $exception = $event->getThrowable(); Bootstrap::exceptionHandler($exception); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Add the following line to your php.ini , where WORKSPACE is the absolute path to your workspace's root directory: auto prepend file='/ WORKSPACE /vendor/google/cloud-error-reporting/src/prepend.php' This prepend file installs an exception handler and an error handler which automatically send errors to Error Reporting.

