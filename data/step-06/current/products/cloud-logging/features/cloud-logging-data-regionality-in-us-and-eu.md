---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.363Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Cloud Logging data regionality in US and EU"
feature_slug: "cloud-logging-data-regionality-in-us-and-eu"
latest_feature_date: "2022-12-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler"
  - "https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.container_engine.ContainerEngineHandler"
  - "https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.app_engine.AppEngineHandler"
keywords:
  - "logging"
  - "regionality"
  - "us"
  - "eu"
  - "supports"
---

# Cloud Logging data regionality in US and EU

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports data regionality in the US and EU.

## Extended Definition

Cloud Logging supports data regionality in the US and EU.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.container_engine.ContainerEngineHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.container_engine.ContainerEngineHandler)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.app_engine.AppEngineHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.app_engine.AppEngineHandler)

## Supporting Pages

### "Class ContainerEngineHandler (3.15.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.container_engine.ContainerEngineHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.container_engine.ContainerEngineHandler)
- Source ID: `site-python-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods ContainerEngineHandler ContainerEngineHandler ( , name = None , stream = None ) Parameters Name Description name Optional[str] The name of the custom log in Cloud Logging. stream Optional[IO] Stream to be used by the handler. format format ( record ) Format the message into JSON expected by fluentd.
- Parameter Name Description record logging.LogRecord The log record.

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

### "Class AppEngineHandler (3.15.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.app_engine.AppEngineHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.app_engine.AppEngineHandler)
- Source ID: `site-python-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 3.15.0 (latest) 3.13.0 3.12.1 3.11.3 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.1 3.2.5 3.1.2 3.0.0 2.7.2 2.6.0 2.5.0 2.4.0 2.3.1 2.2.0 2.1.1 2.0.2 1.15.3 1.14.0 1.13.0 1.12.1 AppEngineHandler ( client , , name = "app" , transport = google . cloud . logging v2 . handlers . transports . background thread .
- BackgroundThreadTransport , stream = None ) Parameters Name Description client logging v2.client.Client The authenticated Google Cloud Logging client for this handler to use. name Optional[str] Name for the logger. transport Optional[ logging v2.transports.Transport ] The transport class.
- See https://docs.python.org/2/library/logging.html#handler-objects Parameter Name Description record logging.LogRecord The record to be logged. get gae labels get gae labels () Return the labels for GAE app.
- If unspecified, .BackgroundThreadTransport will be used. stream Optional[IO] Stream to be used by the handler. emit emit ( record ) Actually log the specified logging record.

