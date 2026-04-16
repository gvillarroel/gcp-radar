---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.630Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Chat performance metrics"
feature_slug: "chat-performance-metrics"
latest_feature_date: "2025-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/configure-logging"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/access-metrics"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
keywords:
  - "chat"
  - "performance"
  - "metrics"
  - "track"
  - "acceptance"
  - "rate"
  - "and"
  - "accepted"
---

# Chat performance metrics

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Chat performance metrics track chat acceptance rate and accepted lines for Gemini for Google Cloud; Chat performance metrics track chat acceptance rate and accepted lines for Gemini for Google Cloud.

## Extended Definition

Chat performance metrics track chat acceptance rate and accepted lines for Gemini for Google Cloud; Chat performance metrics track chat acceptance rate and accepted lines for Gemini for Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- [https://docs.cloud.google.com/gemini/enterprise/docs/access-metrics](https://docs.cloud.google.com/gemini/enterprise/docs/access-metrics)
- [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)

## Supporting Pages

### "Configure Gemini Code Assist Standard and Enterprise logging \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Default\nWHERE\n JSON VALUE(labels, '$.user id') is not NULL\n AND (\n JSON VALUE(json payload, '$.chatExposure.originalRequestId') is not NULL\n OR JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') is not NULL\n OR JSON VALUE(json payload, '$.codeExposure.originalRequestId') is not NULL\n )\n AND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\n AND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\nGROUP BY\nevent date\nORDER BY\nevent date\n" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "xPos" : 24 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Acceptance Rate by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "exposures date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "exposures date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "acceptance rate" } ], "plotType" : "LINE" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\nexposures date,\nacceptances count / exposures count as acceptance rate\nFROM\n(\nSELECT\nCOUNT (DISTINCT JSON VALUE(json payload, '$.codeAcceptance.originalRequestId')) as acceptances count, CAST(timestamp AS DATE) AS acceptances date\nFROM\n CENTRALIZED PROJECT ID .global.
- Default\nWHERE\n JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') is not NULL\n AND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\n AND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\nGROUP BY\n acceptances date\nORDER BY\n acceptances date\n" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "yPos" : 32 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Lines of Code Accepted by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "line count day" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "line count day" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "lines count" } ], "plotType" : "STACKED BAR" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\n SUM(lines) as lines count,\n CAST(max timestamp AS DATE) AS line count day\nFROM\n(\n SELECT\n JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') as request id,\n MAX(CAST(JSON VALUE(json payload, '$.codeAcceptance.linesCount') AS INT)) as lines,\n MAX(timestamp) as max timestamp\n FROM\n CENTRALIZED PROJECT ID .global.
- Default\n WHERE\n JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') is not NULL\n AND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\n AND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\n GROUP BY\n request id\n )\nGROUP BY\n line count day\nORDER BY\n line count day" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "yPos" : 32 , "xPos" : 24 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Chat Exposures by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "chat exposures date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "chat exposures date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "chat exposures count" } ], "plotType" : "STACKED BAR" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\n COUNT (DISTINCT JSON VALUE(json payload, '$.chatExposure.originalRequestId')) as chat exposures count, CAST(timestamp AS DATE) AS chat exposures date\nFROM\n CENTRALIZED PROJECT ID .global.
- Default\nWHERE\nJSON VALUE(json payload, '$.codeExposure.originalRequestId') is not NULL\nAND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\nAND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\nGROUP BY\nexposures date\n) as exposures\nON\nexposures.exposures date = acceptances.acceptances date\nORDER BY\nexposures date ASC" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "yPos" : 16 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Code Suggestions by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "exposures date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "exposures date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "exposures count" } ], "plotType" : "STACKED BAR" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\n COUNT (DISTINCT JSON VALUE(json payload, '$.codeExposure.originalRequestId')) as exposures count, CAST(timestamp AS DATE) AS exposures date\nFROM\n CENTRALIZED PROJECT ID .global.

### "Access metrics in Metrics Explorer \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/access-metrics](https://docs.cloud.google.com/gemini/enterprise/docs/access-metrics)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These metrics provide insights into the performance and health of your application.
- Home Documentation AI and ML Gemini Enterprise Send feedback Access metrics in Metrics Explorer Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Create metric-threshold alerting policies To turn off metrics tracking, see Turn off observability settings .
- This document describes how to access the metrics generated by your Gemini Enterprise app in the Metrics Explorer.

### "Generate Gemini Code Assist metrics \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can generate metrics that report the daily active usage or the acceptance of code recommendations for a variety of Google Cloud products, including Cloud Logging, Google Cloud CLI, Cloud Monitoring, and BigQuery.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Generate Gemini Code Assist metrics Stay organized with collections Save and categorize content based on your preferences.
- Queries You can use the following sample BigQuery queries to generate user- and aggregate-level data for daily active use and suggestions generated.
- Select the responses table from beneath the code assist bq dataset , click the more vert icon, and then click Copy ID to generate the dataset ID.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- If you disable automatic outline generation, you can manually generate an outline for the file in focus by right-clicking in the file and selecting Gemini Code Assist > Outline current file , or by going to the Gemini Code Assist outline pane and clicking the Generate outline button.
- Regenerate a prompt response If preferred, you can regenerate a different response to your most recent prompt by following these steps: VS Code In the Gemini Code Assist Chat pane, at the bottom of your most recent response, click replay Regenerate response .

