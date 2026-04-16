---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.000Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace keyword search"
feature_slug: "trace-keyword-search"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/trace-filters"
  - "https://docs.cloud.google.com/trace/docs/trace-app-latency"
  - "https://docs.cloud.google.com/trace/docs/share-trace-or-span"
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
Coverage: MEDIUM

## Step 02 Summary

Trace Explorer can search within a trace by keywords.

## Extended Definition

Trace Explorer can search within a trace by keywords.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/trace-filters](https://docs.cloud.google.com/trace/docs/trace-filters)
- [https://docs.cloud.google.com/trace/docs/trace-app-latency](https://docs.cloud.google.com/trace/docs/trace-app-latency)
- [https://docs.cloud.google.com/trace/docs/share-trace-or-span](https://docs.cloud.google.com/trace/docs/share-trace-or-span)

## Supporting Pages

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- View aggregated trace data To view the aggregated information about your trace data, do the following: In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- You also can search the spans and attributes in the trace for keywords .
- Note: If you enter a trace ID that isn't found, then the trace data might be stored in a view that isn't searched by the Trace Explorer page, or you might not have an IAM role that lets you view trace data.
- To search the spans in the trace for keywords, use the Find in Trace field.

### Cloud Trace filters \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/trace-filters](https://docs.cloud.google.com/trace/docs/trace-filters)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Boolean attributes To specify values for Boolean attributes, use false for false, and true for true: Client:true Special characters Simple values, that is those that match the regular expression [a-zA-Z0-9./ ][a-zA-Z0-9./ -] , can be provided without quotation: environment:production path:/index.html error code:200 Values that include other characters, including whitespace, must be enclosed in double-quote ( " ) characters: my-label:"Notice: This value contains spaces and a colon" To search for the double-quote character or the backslash ( \ ) character within a quoted string, escape the character with a backslash: my-label:"Notice: This value contains spaces, a colon, a \"quote\", and a backslash (\\)" Filter syntax On this page, NAME refers to the name of a field while VALUE refers to the value of a key-value pair.
- By creating a query with mixed terms, the search can be further customized.
- For example, +^url:/main /images method:200 matches traces when the root span label /http/url is exactly "/main", the root span's name is prefixed by /images , and any span has the label /http/method with a value of 200.
- For example, if you misspell a keyword such as method:GET , the filter is interpreted as label:method:GET , which does not match any traces.

### "Quickstart: View latency of app requests \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/trace-app-latency](https://docs.cloud.google.com/trace/docs/trace-app-latency)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View latency data In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- OpenTelemetry implicitly propagates the trace context for you with your outgoing requests: if endpoint is not None and endpoint != "" : data = { "body" : keyword } response = requests . get ( endpoint , params = data , ) return keyword + " \n " + response . text else : return keyword , 200 How the application works For clarity, in this section, cloud-trace-demo is omitted from the service names.
- To create a trace, in the Cloud Shell, run the following command: curl $( kubectl get svc -o = jsonpath = '{.items[?(@.metadata.name=="cloud-trace-demo-a")].status.loadBalancer.ingress[0].ip}' ) The response of the previous command looks like the following: Hello, I am service A And I am service B Hello, I am service C You can execute the curl command multiple times to generate multiple traces.
- The first row in the Gantt chart is for the trace, and each following row is a span within the trace.

### Share traces and spans \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/share-trace-or-span](https://docs.cloud.google.com/trace/docs/share-trace-or-span)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To share trace data, do the following: In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- If you want to share the URL for a trace or span, then open the Details flyout for that trace or span by doing one of the following: In the toolbar, click pageview Search for trace and then enter the trace ID.
- This document describes how you can share with another person or group the data you are viewing on the Trace Explorer page.
- Before you begin To get the permissions that you need to view trace data by using the Google Cloud console, ask your administrator to grant you the Cloud Trace User ( roles/cloudtrace.user ) IAM role on the projects that store your trace data.

