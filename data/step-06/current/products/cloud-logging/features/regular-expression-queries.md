---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.450Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Regular expression queries"
feature_slug: "regular-expression-queries"
latest_feature_date: "2020-05-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget"
  - "https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.structured_log.StructuredLogHandler"
keywords:
  - "regular"
  - "expression"
  - "queries"
  - "logging"
  - "supports"
  - "expressions"
  - "log"
  - "filters"
---

# Regular expression queries

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports using regular expressions in log queries and filters.

## Extended Definition

Cloud Logging supports using regular expressions in log queries and filters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.structured_log.StructuredLogHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.structured_log.StructuredLogHandler)

## Supporting Pages

### "Class LoggingHandler (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler)
- Source ID: `site-java-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example using the following line: com.example.mypackage.handlers=com.google.cloud.logging.LoggingHandler See Also: Structured logging Inheritance java.lang.Object > Handler > LoggingHandler Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Handler.close() Handler.flush() Handler.getEncoding() Handler.getErrorManager() Handler.getFilter() Handler.getFormatter() Handler.getLevel() Handler.isLoggable(LogRecord) Handler.publish(LogRecord) Handler.reportError(String,Exception,int) Handler.setEncoding(String) Handler.setErrorManager(ErrorManager) Handler.setFilter(Filter) Handler.setFormatter(Formatter) Handler.setLevel(Level) Static Methods addHandler(Logger logger, LoggingHandler handler) public static void addHandler ( Logger logger , LoggingHandler handler ) Adds the provided LoggingHandler to logger .
- This handler will call each enhancer list whenever it builds a LogEntry instance (defaults to empty list). com.google.cloud.logging.LoggingHandler.resourceType the type name to use when creating the default MonitoredResource (defaults to auto-detected resource type, else "global"). com.google.cloud.logging.Synchronicity the synchronicity of the write method to use to write logs to the Cloud Logging service (defaults to Synchronicity#ASYNC ). com.google.cloud.logging.LoggingHandler.autoPopulateMetadata is a boolean flag that opts-out the population of the log entries metadata before the logs are sent to Cloud Logging (defaults to true ). com.google.cloud.logging.LoggingHandler.redirectToStdout is a boolean flag that opts-in redirecting the output of the handler to STDOUT instead of ingesting logs to Cloud Logging using Logging API (defaults to false ).
- If properties are not defined (or have invalid values) then the specified default values are used. com.google.cloud.logging.LoggingHandler.log the log name (defaults to java.log ). com.google.cloud.logging.LoggingHandler.level specifies the default level for the handler (defaults to Level.INFO ). com.google.cloud.logging.LoggingHandler.filter specifies the name of a Filter class to use (defaults to no filter). com.google.cloud.logging.LoggingHandler.formatter specifies the name of a Formatter class to use (defaults to SimpleFormatter ). com.google.cloud.logging.LoggingHandler.flushLevel specifies the flush log level.
- If it is null then a default resource is created based on the project ID and deployment environment. enhancers List < LoggingEnhancer > List of LoggingEnhancer instances used to enhance any LogEntry instances built by this handler. destination LogDestinationName the log destination LogDestinationName (see 'logName' parameter in https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry ) Methods close() public synchronized void close () Closes the handler and the associated Logging object.

### "Class StructuredLogHandler (3.15.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.structured_log.StructuredLogHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.structured_log.StructuredLogHandler)
- Source ID: `site-python-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 3.15.0 (latest) 3.13.0 3.12.1 3.11.3 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.1 3.2.5 3.1.2 3.0.0 2.7.2 2.6.0 2.5.0 2.4.0 2.3.1 2.2.0 2.1.1 2.0.2 1.15.3 1.14.0 1.13.0 1.12.1 StructuredLogHandler ( , labels = None , stream = None , project id = None , json encoder cls = None , kwargs ) Handler to format logs into the Cloud Logging structured log format, and write them to standard output Methods StructuredLogHandler StructuredLogHandler ( , labels = None , stream = None , project id = None , json encoder cls = None , kwargs ) Parameters Name Description labels Optional[dict] Additional labels to attach to logs. stream Optional[IO] Stream to be used by the handler. project Optional[str] Project Id associated with the logs. json encoder cls Optional[Type[JSONEncoder]] Custom JSON encoder.
- Returns Type Description str A JSON string formatted for GCP structured logging.
- Parameter Name Description record logging.LogRecord The log record.

### "Enum LoggingHandler.LogTarget (3.29.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget)
- Source ID: `site-java-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description CLOUD LOGGING Sends logs to the Cloud Logging API.
- Home Documentation Developer tools Java Client libraries Send feedback Enum LoggingHandler.LogTarget (3.29.0) Stay organized with collections Save and categorize content based on your preferences.
- 3.29.0 (latest) 3.28.0 3.26.0 3.24.0 3.23.10 3.22.6 3.21.4 3.20.7 3.19.0 3.18.0 3.17.2 3.16.2 3.15.17 3.14.9 3.13.7 3.12.1 3.11.10 3.10.7 3.9.0 3.8.0 3.7.6 3.6.4 3.5.3 public enum LoggingHandler .
- STDERR Sends JSON-formatted logs to stderr, for use with the Google Cloud logging agent.

