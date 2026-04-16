---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.340Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Duet AI log entry summarization"
feature_slug: "duet-ai-log-entry-summarization"
latest_feature_date: "2023-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryIterator"
  - "https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.entries.LogEntry"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry.Builder"
keywords:
  - "duet"
  - "ai"
  - "log"
  - "entry"
  - "summarization"
  - "can"
  - "summarize"
  - "logging"
---

# Duet AI log entry summarization

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Duet AI can summarize Cloud Logging log entries for faster analysis; Duet AI can summarize Cloud Logging log entries for faster analysis.

## Extended Definition

Duet AI can summarize Cloud Logging log entries for faster analysis; Duet AI can summarize Cloud Logging log entries for faster analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryIterator](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryIterator)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.entries.LogEntry](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.entries.LogEntry)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry.Builder)

## Supporting Pages

### "Class LogEntry (3.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.entries.LogEntry](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.entries.LogEntry)
- Source ID: `site-python-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods LogEntry LogEntry ( log name = None , labels = None , insert id = None , severity = None , http request = None , timestamp = None , resource = Resource ( type = "global" , labels = {}), trace = None , span id = None , trace sampled = None , source location = None , operation = None , logger = None , payload = None , ) Create new instance of LogEntry(log name, labels, insert id, severity, http request, timestamp, resource, trace, span id, trace sampled, source location, operation, logger, payload) from api repr from api repr ( resource , client , , loggers = None ) Construct an entry given its API representation Parameters Name Description resource dict text entry resource representation returned from the API client logging v2.client.Client Client which holds credentials and project configuration. loggers Optional[dict] A mapping of logger fullnames -> loggers.
- Parameters Name Description log name str The name of the logger used to post the entry. labels Optional[dict] Mapping of labels for the entry insert id Optional[str] The ID used to identify an entry uniquely. severity Optional[str] The severity of the event being logged. http request Optional[dict] Info about HTTP request associated with the entry. timestamp Optional[datetime.datetime] Timestamp for the entry. resource Optional[ google.cloud.logging v2.resource.Resource ] Monitored resource of the entry. trace Optional[str] Trace ID to apply to the entry. span id Optional[str] Span ID within the trace for the log entry.
- Specify the trace parameter if span id is set. trace sampled Optional[bool] The sampling decision of the trace associated with the log entry. source location Optional[dict] Location in source code from which the entry was emitted. operation Optional[dict] Additional information about a potentially long-running operation associated with the log entry. logger logging v2.logger.Logger See: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry the logger used to write the entry.
- Returns Type Description google.cloud.logging.entries.LogEntry Log entry parsed from resource . to api repr to api repr () API repr (JSON format) for entry.

### "Class LogEntry.Builder (3.29.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntry.Builder)
- Source ID: `site-java-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Builder setReceiveTimestamp ( Instant receiveTimestamp ) Sets the time the log entry was received by Cloud Logging.
- If omitted, the Logging service will set the time at which the log entry is received.
- If omitted, the Logging service will set the time at which the log entry is received.
- If omitted, the Logging service will use the time at which the log entry is received.

### "Class LogEntryIterator (3.29.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryIterator](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryIterator)
- Source ID: `site-java-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inheritance java.lang.Object > LogEntryIterator Implements Iterator<LogEntry> Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods hasNext() public boolean hasNext () Returns Type Description boolean next() public LogEntry next () Returns Type Description LogEntry Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- 3.29.0 (latest) 3.28.0 3.26.0 3.24.0 3.23.10 3.22.6 3.21.4 3.20.7 3.19.0 3.18.0 3.17.2 3.16.2 3.15.17 3.14.9 3.13.7 3.12.1 3.11.10 3.10.7 3.9.0 3.8.0 3.7.6 3.6.4 3.5.3 public class LogEntryIterator implements Iterator<LogEntry> The class implements {@see Iterator} interface over {@see LogEntry} by iterating through {@see TailLogEntriesResponse} streamed by BidiStream .
- Home Documentation Developer tools Java Client libraries Send feedback Class LogEntryIterator (3.29.0) Stay organized with collections Save and categorize content based on your preferences.
- This class is instantiated by {@see LogEntryServerStream} and is not intended to be used explicitly.

