---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.831Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace keyword search"
feature_slug: "trace-keyword-search"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/trace-filters"
  - "https://docs.cloud.google.com/trace/docs/release-notes"
keywords:
  - "trace"
  - "keyword"
  - "search"
  - "explorer"
  - "can"
  - "within"
  - "by"
  - "keywords"
---

# Trace keyword search

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Trace Explorer can search within a trace by keywords.

## Extended Definition

Trace Explorer can search within a trace by keywords.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/trace-filters](https://docs.cloud.google.com/trace/docs/trace-filters)
- [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)

## Supporting Pages

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- View aggregated trace data To view the aggregated information about your trace data, do the following: In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- You also can search the spans and attributes in the trace for keywords .
- Note: If you enter a trace ID that isn't found, then the trace data might be stored in a view that isn't searched by the Trace Explorer page, or you might not have an IAM role that lets you view trace data.
- To search the spans in the trace for keywords, use the Find in Trace field.

### Cloud Trace filters \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/trace-filters](https://docs.cloud.google.com/trace/docs/trace-filters)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Boolean attributes To specify values for Boolean attributes, use false for false, and true for true: Client:true Special characters Simple values, that is those that match the regular expression [a-zA-Z0-9./ ][a-zA-Z0-9./ -] , can be provided without quotation: environment:production path:/index.html error code:200 Values that include other characters, including whitespace, must be enclosed in double-quote ( " ) characters: my-label:"Notice: This value contains spaces and a colon" To search for the double-quote character or the backslash ( \ ) character within a quoted string, escape the character with a backslash: my-label:"Notice: This value contains spaces, a colon, a \"quote\", and a backslash (\\)" Filter syntax On this page, NAME refers to the name of a field while VALUE refers to the value of a key-value pair.
- By creating a query with mixed terms, the search can be further customized.
- For example, +^url:/main /images method:200 matches traces when the root span label /http/url is exactly "/main", the root span's name is prefixed by /images , and any span has the label /http/method with a value of 200.
- For example, if you misspell a keyword such as method:GET , the filter is interpreted as label:method:GET , which does not match any traces.

### Trace release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following documents: Find and explore traces View traces across projects Share trace or span May 28, 2024 Feature You can now search a trace for keywords.
- You can view generative AI events by using the Trace Explorer : Instrument generative AI applications Instrument a LangGraph ReAct Agent with OpenTelemetry View generative AI events March 25, 2025 Feature To send trace data to your Google Cloud project, we recommend that you use the new Telemetry API, which implements the OpenTelemetry OTLP API and provides compatibility and support for the open source ecosystem.
- You can also set one trace scope as the default trace scope, which determines the projects that the Trace Explorer searches when the page is opened.
- You can use the Trace Explorer to filter by your application, your service, or your workload.

