---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.438Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Live Tailing via gcloud and API"
feature_slug: "live-tailing-via-gcloud-and-api"
latest_feature_date: "2020-11-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/apis"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget"
  - "https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.structured_log.StructuredLogHandler"
keywords:
  - "live"
  - "tailing"
  - "via"
  - "gcloud"
  - "logging"
  - "supports"
  - "log"
  - "entries"
---

# Live Tailing via gcloud and API

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports live tailing of log entries through a gcloud command and API.

## Extended Definition

Cloud Logging supports live tailing of log entries through a gcloud command and API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/apis](https://docs.cloud.google.com/logging/docs/apis)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.structured_log.StructuredLogHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.structured_log.StructuredLogHandler)

## Supporting Pages

### APIs & Reference \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/apis](https://docs.cloud.google.com/logging/docs/apis)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Logging Reference Send feedback APIs & Reference Stay organized with collections Save and categorize content based on your preferences.
- Monitored resource list Lists of monitored resource types defined by the Logging API and the corresponding logging services.
- REST API reference The Logging API REST reference. gRPC API reference The Logging API gRPC reference.
- MCP reference (Preview) Use MCP to connect to Cloud Logging in your AI applications and agents.

### "Enum LoggingHandler.LogTarget (3.29.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget)
- Source ID: `site-java-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description CLOUD LOGGING Sends logs to the Cloud Logging API.
- Home Documentation Developer tools Java Client libraries Send feedback Enum LoggingHandler.LogTarget (3.29.0) Stay organized with collections Save and categorize content based on your preferences.
- 3.29.0 (latest) 3.28.0 3.26.0 3.24.0 3.23.10 3.22.6 3.21.4 3.20.7 3.19.0 3.18.0 3.17.2 3.16.2 3.15.17 3.14.9 3.13.7 3.12.1 3.11.10 3.10.7 3.9.0 3.8.0 3.7.6 3.6.4 3.5.3 public enum LoggingHandler .
- STDERR Sends JSON-formatted logs to stderr, for use with the Google Cloud logging agent.

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

