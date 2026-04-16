---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.697Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error Reporting API report endpoint"
feature_slug: "error-reporting-api-report-endpoint"
latest_feature_date: "2016-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/ruby"
  - "https://docs.cloud.google.com/error-reporting/docs/setup/php"
keywords:
  - "error"
  - "reporting"
  - "report"
  - "endpoint"
  - "stackdriver"
  - "includes"
  - "projects"
  - "events"
---

# Error Reporting API report endpoint

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

The Stackdriver Error Reporting API includes the projects.events.report endpoint for reporting errors.

## Extended Definition

The Stackdriver Error Reporting API includes the projects.events.report endpoint for reporting errors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine](https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine)
- [https://docs.cloud.google.com/error-reporting/docs/setup/ruby](https://docs.cloud.google.com/error-reporting/docs/setup/ruby)
- [https://docs.cloud.google.com/error-reporting/docs/setup/php](https://docs.cloud.google.com/error-reporting/docs/setup/php)

## Supporting Pages

### Instrument Ruby apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/ruby](https://docs.cloud.google.com/error-reporting/docs/setup/ruby)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run apps on Google Cloud To create error groups by using projects.events.report , your service account requires the Error Reporting Writer role ( roles/errorreporting.writer ).
- The projects.events.report method also supports API keys.
- To enable Error Reporting in development mode, add the following: Add this to config/environments/development.rb Rails . application . configure do config config . google cloud . use error reporting = true end Using instrumentation configuration interface To use the Error Reporting library for Ruby in other Rack-based applications, provide the parameters through the configuration interface: require "google/cloud/error reporting" Google :: Cloud . configure do config Stackdriver Error Reporting specific parameters config . error reporting . project id = "YOUR-PROJECT-ID" config . error reporting . keyfile = "/path/to/service-account.json" end You can also set shared configuration for all Google Cloud Observability gems using the following: require "stackdriver" Google :: Cloud . configure do config Stackdriver Shared parameters config . project id = "YOUR-PROJECT-ID" config . keyfile = "/path/to/service-account.json" end App Engine flexible environment App Engine grants the Error Reporting Writer role ( roles/errorreporting.writer ) to your default service account automatically.
- To enable Error Reporting in development mode, add the following: Add this to config/environments/development.rb Rails . application . configure do config config . google cloud . use error reporting = true end Using instrumentation configuration interface To use the Error Reporting library for Ruby in other Rack-based applications, provide the parameters through the configuration interface: require "google/cloud/error reporting" Google :: Cloud . configure do config Stackdriver Error Reporting specific parameters config . error reporting . project id = "YOUR-PROJECT-ID" config . error reporting . keyfile = "/path/to/service-account.json" end You can also set shared configuration for all Google Cloud Observability gems using the following: require "stackdriver" Google :: Cloud . configure do config Stackdriver Shared parameters config . project id = "YOUR-PROJECT-ID" config . keyfile = "/path/to/service-account.json" end View error groups In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.

### Setting up on Google Kubernetes Engine | Error Reporting | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine](https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine)
- Source ID: `feature-recovery-direct-http`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- If the agent isn't capable of reconstructing multiple lines as a single error, then use the projects.events.report API endpoint , which lets you to control the contents of an error.
- Using the Error Reporting API to write errors The Error Reporting API provides a report endpoint for writing error information to the service.
- For more details see: // https://cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events#ServiceContext ServiceContext serviceContext = new ServiceContext () { Service = "myapp" , Version = "8c1917a9eca3475b5a3686d1d44b52908463b989" , }; ReportedErrorEvent errorEvent = new ReportedErrorEvent () { Message = e .
- See: // https://cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events/report string formattedProjectId = string .

### Instrument PHP apps for Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup/php](https://docs.cloud.google.com/error-reporting/docs/setup/php)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run apps on Google Cloud To create error groups by using projects.events.report , your service account requires the Error Reporting Writer role ( roles/errorreporting.writer ).
- The projects.events.report method also supports API keys.
- Laravel Edit the report function in the file app/Exceptions/Handler.php as follows: public function report(Exception $exception) { if (isset($ SERVER['GAE SERVICE'])) { // Ensure Stackdriver is initialized and handle the exception Bootstrap::init(); Bootstrap::exceptionHandler($exception); } else { parent::report($exception); } } You also need to add a one-line use statement at the beginning of the file: use Google\Cloud\ErrorReporting\Bootstrap; Symfony Create a new file src/AppBundle/EventSubscriber/ExceptionSubscriber.php with the following content: // src/AppBundle/EventSubscriber/ExceptionSubscriber.php namespace AppBundle\EventSubscriber; use Google\Cloud\ErrorReporting\Bootstrap; use Symfony\Component\EventDispatcher\EventSubscriberInterface; use Symfony\Component\HttpKernel\Event\ExceptionEvent; use Symfony\Component\HttpKernel\KernelEvents; class ExceptionSubscriber implements EventSubscriberInterface { public static function getSubscribedEvents() { // return the subscribed events, their methods and priorities return [KernelEvents::EXCEPTION => [ ['logException', 0] ]]; } public function logException(ExceptionEvent $event) { $exception = $event->getThrowable(); Bootstrap::exceptionHandler($exception); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To enable Error Reporting on App Engine flexible environment, follow these steps: Install necessary libraries with the following command: $ composer require google/cloud-error-reporting Add the following line to runtime config section in app.yaml : enable stackdriver integration: true Then the library automatically collects all the errors and uncaught exceptions to Error Reporting.

