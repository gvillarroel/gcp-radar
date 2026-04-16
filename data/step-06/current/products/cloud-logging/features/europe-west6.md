---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.388Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "europe-west6"
feature_slug: "europe-west6"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/api"
  - "https://docs.cloud.google.com/logging/docs/api/enable-api"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler"
keywords:
  - "europe"
  - "west6"
  - "logging"
  - "supports"
  - "regions"
  - "southwest1"
  - "west8"
  - "west9"
---

# europe-west6

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1.

## Extended Definition

The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/api](https://docs.cloud.google.com/logging/docs/api)
- [https://docs.cloud.google.com/logging/docs/api/enable-api](https://docs.cloud.google.com/logging/docs/api/enable-api)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler)

## Supporting Pages

### Enable the Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/enable-api](https://docs.cloud.google.com/logging/docs/api/enable-api)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see if the Logging API is enabled, run the following command on your workstation, after replacing PROJECT ID with the ID of the project for which you want to enable the API: gcloud services list --project= PROJECT ID If logging.googleapis.com appears in the output, the API is enabled.
- If the API isn't enabled, then run the following command to enable it: gcloud services enable logging --project= PROJECT ID For more information about listing, enabling, and disabling APIs, see gcloud services .
- Home Documentation Observability Cloud Logging Reference Send feedback Enable the Logging API Stay organized with collections Save and categorize content based on your preferences.
- The recommended Logging client libraries use Application Default Credentials to automatically find credentials.

### Using the APIs Explorer \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api](https://docs.cloud.google.com/logging/docs/api)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following screenshot shows the panel as it appears for a method with only one parameter, name : The APIs Explorer is an excellent way to try out methods in the Cloud Logging API without having to write any code.
- Home Documentation Observability Cloud Logging Reference Send feedback Using the APIs Explorer Stay organized with collections Save and categorize content based on your preferences.
- This guide describes how to use the APIs Explorer to try out Cloud Logging API methods.
- For more information, see Cloud Logging query language .

### "Class LoggingHandler (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler)
- Source ID: `site-java-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example using the following line: com.example.mypackage.handlers=com.google.cloud.logging.LoggingHandler See Also: Structured logging Inheritance java.lang.Object > Handler > LoggingHandler Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Handler.close() Handler.flush() Handler.getEncoding() Handler.getErrorManager() Handler.getFilter() Handler.getFormatter() Handler.getLevel() Handler.isLoggable(LogRecord) Handler.publish(LogRecord) Handler.reportError(String,Exception,int) Handler.setEncoding(String) Handler.setErrorManager(ErrorManager) Handler.setFilter(Filter) Handler.setFormatter(Formatter) Handler.setLevel(Level) Static Methods addHandler(Logger logger, LoggingHandler handler) public static void addHandler ( Logger logger , LoggingHandler handler ) Adds the provided LoggingHandler to logger .
- This handler will call each enhancer list whenever it builds a LogEntry instance (defaults to empty list). com.google.cloud.logging.LoggingHandler.resourceType the type name to use when creating the default MonitoredResource (defaults to auto-detected resource type, else "global"). com.google.cloud.logging.Synchronicity the synchronicity of the write method to use to write logs to the Cloud Logging service (defaults to Synchronicity#ASYNC ). com.google.cloud.logging.LoggingHandler.autoPopulateMetadata is a boolean flag that opts-out the population of the log entries metadata before the logs are sent to Cloud Logging (defaults to true ). com.google.cloud.logging.LoggingHandler.redirectToStdout is a boolean flag that opts-in redirecting the output of the handler to STDOUT instead of ingesting logs to Cloud Logging using Logging API (defaults to false ).
- If properties are not defined (or have invalid values) then the specified default values are used. com.google.cloud.logging.LoggingHandler.log the log name (defaults to java.log ). com.google.cloud.logging.LoggingHandler.level specifies the default level for the handler (defaults to Level.INFO ). com.google.cloud.logging.LoggingHandler.filter specifies the name of a Filter class to use (defaults to no filter). com.google.cloud.logging.LoggingHandler.formatter specifies the name of a Formatter class to use (defaults to SimpleFormatter ). com.google.cloud.logging.LoggingHandler.flushLevel specifies the flush log level.
- If it is null then a default resource is created based on the project ID and deployment environment. enhancers List < LoggingEnhancer > List of LoggingEnhancer instances used to enhance any LogEntry instances built by this handler. destination LogDestinationName the log destination LogDestinationName (see 'logName' parameter in https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry ) Methods close() public synchronized void close () Closes the handler and the associated Logging object.

