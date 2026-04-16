---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.682Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error Reporting API MCP server"
feature_slug: "error-reporting-api-mcp-server"
latest_feature_date: "2026-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/setup/php"
  - "https://docs.cloud.google.com/error-reporting/docs/notifications"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine"
keywords:
  - "error"
  - "reporting"
  - "mcp"
  - "server"
  - "lets"
  - "agents"
  - "ai"
  - "applications"
---

# Error Reporting API MCP server

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

An MCP server that lets agents and AI applications interact with Error Reporting error data.

## Extended Definition

An MCP server that lets agents and AI applications interact with Error Reporting error data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/setup/php](https://docs.cloud.google.com/error-reporting/docs/setup/php)
- [https://docs.cloud.google.com/error-reporting/docs/notifications](https://docs.cloud.google.com/error-reporting/docs/notifications)
- [https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine](https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine)

## Supporting Pages

### "Configure and manage notifications \_|\_ Error Reporting \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/error-reporting/docs/notifications](https://docs.cloud.google.com/error-reporting/docs/notifications)
- Source ID: `site-docs-reference-required-1`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Error Reporting lets you select from four types of notification channels: email, mobile, Slack, and Webhooks.
- Webhook schema To view the Webhook schema structure for Error Reporting, click the following: Schema structure, version 1.0 { "version" : "1.0", "subject" : string, description of the new or reopened error group. "group info" : { "project id" : string, project that owns the error group. "detail link" : string, link to the Error Reporting Details page for the error group. }, "exception info" : { "type" : string, type of the exception logged in the event. "message" : string, exception message for the event. }, "event info" : { "log message" : string "request method" : string "request url" : string "referrer" : string "user agent" : string "service" : string "version" : string "response status" : string }, } Basic authentication In addition to the webhook request sent by Cloud Monitoring, basic authentication utilizes the HTTP specification for the username and password.
- Select notification channels through the Google Cloud console To select an existing notification channel, you must have one of the following roles: Error Reporting User Error Reporting Admin Project Editor Project Owner To select where you want to send notifications when new error groups occur, complete the following steps.
- Resolution status If an error event occurs in a error group that has a resolution status of Resolved , even if previous error events have been deleted , the status of the error group is set to Open and Error Reporting sends a notification.

### Instrument PHP apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/php](https://docs.cloud.google.com/error-reporting/docs/setup/php)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the API Install the client library The Error Reporting library for PHP lets you monitor and view error events reported by PHP applications running nearly anywhere.
- Laravel Edit the report function in the file app/Exceptions/Handler.php as follows: public function report(Exception $exception) { if (isset($ SERVER['GAE SERVICE'])) { // Ensure Stackdriver is initialized and handle the exception Bootstrap::init(); Bootstrap::exceptionHandler($exception); } else { parent::report($exception); } } You also need to add a one-line use statement at the beginning of the file: use Google\Cloud\ErrorReporting\Bootstrap; Symfony Create a new file src/AppBundle/EventSubscriber/ExceptionSubscriber.php with the following content: // src/AppBundle/EventSubscriber/ExceptionSubscriber.php namespace AppBundle\EventSubscriber; use Google\Cloud\ErrorReporting\Bootstrap; use Symfony\Component\EventDispatcher\EventSubscriberInterface; use Symfony\Component\HttpKernel\Event\ExceptionEvent; use Symfony\Component\HttpKernel\KernelEvents; class ExceptionSubscriber implements EventSubscriberInterface { public static function getSubscribedEvents() { // return the subscribed events, their methods and priorities return [KernelEvents::EXCEPTION => [ ['logException', 0] ]]; } public function logException(ExceptionEvent $event) { $exception = $event->getThrowable(); Bootstrap::exceptionHandler($exception); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Error Reporting displays the error events that are logged to Cloud Logging by applications running on those services.
- You can send error events to Error Reporting from PHP applications by using the Error Reporting library for PHP .

### "Setting up on Google Kubernetes Engine \_|\_ Error Reporting \_|\_ Google\

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine](https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine)
- Source ID: `site-docs-reference-required-3`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using client libraries Libraries exist in a limited number of languages to help you call the Error Reporting API from your application: ASP.NET Go Java Node.js Ruby Python PHP Samples ASP.NET The ASP.NET NuGet package reports uncaught exceptions from ASP.NET web applications to Error Reporting.
- You can send errors from your Google Kubernetes Engine applications to Error Reporting in one of two ways: By logging to Cloud Logging .
- Usage Once you've installed the Stackdriver ASP.NET NuGet package, add the following statement to your application code to start sending errors to Stackdriver: using Google.Cloud.Diagnostics.AspNet; Add the following HttpConfiguration code to the Register method of your .NET web app after replacing your-project-id with your actual project ID to enable the reporting of exceptions: public static void Register ( HttpConfiguration config ) { string projectId = "YOUR-PROJECT-ID" ; string serviceName = "NAME-OF-YOUR-SERVICE" ; string version = "VERSION-OF-YOUR-SERVCICE" ; // ... // Add a catch all for the uncaught exceptions. config .
- WriteLine ( "Stackdriver Error Report Sent" ); } } /// <summary> /// Create the Error Reporting service (<seealso cref="ClouderrorreportingService"/>) /// with the Application Default Credentials and the proper scopes. /// See: https://developers.google.com/identity/protocols/application-default-credentials. /// </summary> private static ClouderrorreportingService CreateErrorReportingClient () { // Get the Application Default Credentials.

