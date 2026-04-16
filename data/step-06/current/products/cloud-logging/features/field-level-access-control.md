---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.417Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Field-Level Access Control"
feature_slug: "field-level-access-control"
latest_feature_date: "2021-07-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.entries"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryIterator"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryServerStream"
keywords:
  - "field"
  - "level"
  - "access"
  - "control"
  - "logging"
  - "supports"
  - "controlling"
  - "individual"
---

# Field-Level Access Control

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports controlling access to individual fields within log entries.

## Extended Definition

Cloud Logging supports controlling access to individual fields within log entries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.entries)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryIterator](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryIterator)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryServerStream](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryServerStream)

## Supporting Pages

### "Module entries (3.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.entries)
- Source ID: `site-python-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description log name str The name of the logger used to post the entry. labels Optional[dict] Mapping of labels for the entry insert id Optional[str] The ID used to identify an entry uniquely. severity Optional[str] The severity of the event being logged. http request Optional[dict] Info about HTTP request associated with the entry. timestamp Optional[datetime.datetime] Timestamp for the entry. resource Optional[ google.cloud.logging v2.resource.Resource ] Monitored resource of the entry. trace Optional[str] Trace ID to apply to the entry. span id Optional[str] Span ID within the trace for the log entry.
- Parameters Name Description log name str The name of the logger used to post the entry. labels Optional[dict] Mapping of labels for the entry insert id Optional[str] The ID used to identify an entry uniquely. severity Optional[str] The severity of the event being logged. http request Optional[dict] Info about HTTP request associated with the entry. timestamp Optional[datetime.datetime] Timestamp for the entry. resource Optional[ google.cloud.logging v2.resource.Resource ] Monitored resource of the entry. trace Optional[str] Trace ID to apply to the entry. span id Optional[str] Span ID within the trace for the log entry.
- Parameters Name Description log name str The name of the logger used to post the entry. labels Optional[dict] Mapping of labels for the entry insert id Optional[str] The ID used to identify an entry uniquely. severity Optional[str] The severity of the event being logged. http request Optional[dict] Info about HTTP request associated with the entry. timestamp Optional[datetime.datetime] Timestamp for the entry. resource Optional[ google.cloud.logging v2.resource.Resource ] Monitored resource of the entry. trace Optional[str] Trace ID to apply to the entry. span id Optional[str] Span ID within the trace for the log entry.
- Parameters Name Description log name str The name of the logger used to post the entry. labels Optional[dict] Mapping of labels for the entry insert id Optional[str] The ID used to identify an entry uniquely. severity Optional[str] The severity of the event being logged. http request Optional[dict] Info about HTTP request associated with the entry. timestamp Optional[datetime.datetime] Timestamp for the entry. resource Optional[ google.cloud.logging v2.resource.Resource ] Monitored resource of the entry. trace Optional[str] Trace ID to apply to the entry. span id Optional[str] Span ID within the trace for the log entry.

### "Class LogEntryIterator (3.29.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryIterator](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryIterator)
- Source ID: `site-java-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Class LogEntryServerStream (3.29.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryServerStream](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LogEntryServerStream)
- Source ID: `site-java-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

