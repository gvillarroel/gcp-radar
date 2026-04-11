---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.576Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Apps Script log ingestion"
feature_slug: "apps-script-log-ingestion"
latest_feature_date: "2017-06-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler"
  - "https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget"
keywords:
  - "apps"
  - "script"
  - "log"
  - "ingestion"
  - "logging"
  - "can"
  - "ingest"
  - "and"
---

# Apps Script log ingestion

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging can ingest and display logs from Apps Script.

## Extended Definition

Cloud Logging can ingest and display logs from Apps Script.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget)

## Supporting Pages

### "Class LoggingHandler (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler)
- Source ID: `site-java-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Redirecting logs can be used in Google Cloud environments with installed logging agent to delegate log ingestions to the agent.
- This handler will call each enhancer list whenever it builds a LogEntry instance (defaults to empty list). com.google.cloud.logging.LoggingHandler.resourceType the type name to use when creating the default MonitoredResource (defaults to auto-detected resource type, else "global"). com.google.cloud.logging.Synchronicity the synchronicity of the write method to use to write logs to the Cloud Logging service (defaults to Synchronicity#ASYNC ). com.google.cloud.logging.LoggingHandler.autoPopulateMetadata is a boolean flag that opts-out the population of the log entries metadata before the logs are sent to Cloud Logging (defaults to true ). com.google.cloud.logging.LoggingHandler.redirectToStdout is a boolean flag that opts-in redirecting the output of the handler to STDOUT instead of ingesting logs to Cloud Logging using Logging API (defaults to false ).
- Parameters Name Description log String the name of the log to which log entries are written options LoggingOptions options for the Cloud Logging service LoggingHandler(String log, LoggingOptions options, MonitoredResource monitoredResource) public LoggingHandler ( String log , LoggingOptions options , MonitoredResource monitoredResource ) Creates a handler that publishes messages to Cloud Logging.
- LogTarget getLogTarget () Returns Type Description LoggingHandler.LogTarget getRedirectToStdout() (deprecated) public Boolean getRedirectToStdout () Returns Type Description Boolean getSynchronicity() public Synchronicity getSynchronicity () Get the flush log level.

### "Class CloudLoggingHandler (3.15.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler)
- Source ID: `site-python-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See https://docs.python.org/2/library/logging.html#handler-objects Parameter Name Description record logging.LogRecord The record to be logged. flush flush () Forces the Transport object to submit any pending log records.
- IO ] = None , kwargs ) Parameters Name Description client logging v2.client.Client The authenticated Google Cloud Logging client for this handler to use. name str the name of the custom log in Cloud Logging.
- This is a Python standard logging handler using that can be used to route Python standard logging messages directly to the Stackdriver Logging API.
- Client () handler = CloudLoggingHandler(client) cloud logger = logging.getLogger('cloudLogger') cloud logger.setLevel(logging.INFO) cloud logger.addHandler(handler) cloud logger.error('bad news') # API call Methods CloudLoggingHandler CloudLoggingHandler ( client , , name : str = "python" , transport : typing .

### "Enum LoggingHandler.LogTarget (3.29.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget)
- Source ID: `site-java-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description CLOUD LOGGING Sends logs to the Cloud Logging API.
- Home Documentation Developer tools Java Client libraries Send feedback Enum LoggingHandler.LogTarget (3.29.0) Stay organized with collections Save and categorize content based on your preferences.
- 3.29.0 (latest) 3.28.0 3.26.0 3.24.0 3.23.10 3.22.6 3.21.4 3.20.7 3.19.0 3.18.0 3.17.2 3.16.2 3.15.17 3.14.9 3.13.7 3.12.1 3.11.10 3.10.7 3.9.0 3.8.0 3.7.6 3.6.4 3.5.3 public enum LoggingHandler .
- LogTarget extends Enum<LoggingHandler .

