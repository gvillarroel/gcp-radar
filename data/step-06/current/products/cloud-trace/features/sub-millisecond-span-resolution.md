---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.839Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Sub-millisecond span resolution"
feature_slug: "sub-millisecond-span-resolution"
latest_feature_date: "2018-01-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/trace-alerting"
  - "https://docs.cloud.google.com/trace/docs/analytics"
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
keywords:
  - "sub"
  - "millisecond"
  - "span"
  - "resolution"
  - "trace"
  - "viewer"
  - "displays"
  - "spans"
---

# Sub-millisecond span resolution

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Trace Viewer displays trace spans with sub-millisecond time resolution.

## Extended Definition

Trace Viewer displays trace spans with sub-millisecond time resolution.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/trace-alerting](https://docs.cloud.google.com/trace/docs/trace-alerting)
- [https://docs.cloud.google.com/trace/docs/analytics](https://docs.cloud.google.com/trace/docs/analytics)
- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)

## Supporting Pages

### "Monitor trace quota usage and spans ingested \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/trace-alerting](https://docs.cloud.google.com/trace/docs/trace-alerting)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filter service = cloudtrace.googleapis.com response code = 429 Across time series Time series aggregation sum Rolling window 1 m Rolling window function sum Configure alert trigger Field Value Condition type Threshold Alert trigger Any time series violates Threshold position Above threshold Threshold value 0 Retest window 1 minute Monitor monthly span ingestion To create an alerting policy that triggers when your monthly Cloud Trace spans ingested exceeds a user-defined limit, use the following settings.
- Home Documentation Observability Cloud Trace Guides Send feedback Monitor trace quota usage and spans ingested Stay organized with collections Save and categorize content based on your preferences.
- Monitor over-quota on Cloud Trace API usage To create an alerting policy that triggers when your monthly Cloud Trace spans ingested exceeds your quota, use the following settings.
- You can create alerting policies in Cloud Monitoring to monitor the number of Cloud Trace spans ingested per month, your quota usage, and your rate of span ingestion.

### Query and analyze traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics](https://docs.cloud.google.com/trace/docs/analytics)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The SQL editor displays the fully qualified name for the Trace.Spans.
- If you want to view or explore individual traces or spans, or view attributes that are attached to spans, then use the Trace Explorer page.
- AllSpans , then your Google Cloud project doesn't contain a observability bucket named Trace .
- AllSpans , then your Google Cloud project doesn't contain a observability bucket named Trace .

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- AllLogs > WHERE log name = 'projects/ PROJECT ID /logs/gen ai.client.inference.operation.details' AND timestamp > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 1 DAY ) > SELECT insert id , timestamp , labels , trace , span id , STRING ( labels [ 'gen ai.input.messages ref' ]) AS messages ref uri -- Join completion log entries with the external table. > JOIN PROJECT ID .
- AllLogs > WHERE log name = 'projects/ PROJECT ID /logs/gen ai.client.inference.operation.details' AND timestamp > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 1 DAY ) > SELECT insert id , timestamp , labels , trace , span id , STRING ( labels [ 'gen ai.input.messages ref' ]) AS messages ref uri -- Join completion log entries with the external table. > JOIN PROJECT ID .
- Find spans that contain multimodal prompts and responses To find the spans that contain multimodal prompts and responses, do the following: In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- This tab appears only when spans sent to Trace follow the OpenTelemetry GenAI semantic conventions , version 1.37.0 or higher, which results in messages whose names begin with gen ai .

