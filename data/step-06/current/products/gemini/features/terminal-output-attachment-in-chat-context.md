---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.642Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Terminal output attachment in chat context"
feature_slug: "terminal-output-attachment-in-chat-context"
latest_feature_date: "2025-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/configure-logging"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview"
keywords:
  - "terminal"
  - "output"
  - "attachment"
  - "in"
  - "chat"
  - "context"
  - "you"
  - "can"
---

# Terminal output attachment in chat context

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

You can attach terminal output to chat to ask questions about terminal commands and results.

## Extended Definition

You can attach terminal output to chat to ask questions about terminal commands and results.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: N/A

Evidence snippets:
- Prompt Gemini Code Assist with selected terminal output using chat Gemini Code Assist can perform tasks or answer your questions based on selected terminal output.
- Create multiple chats You can create multiple chats with Gemini Code Assist which contain their own context separate from other chats.
- Gemini Code Assist responds to your prompt based on your selected terminal output in the Context Drawer.
- Right-click the selected terminal output and select Gemini Code Assist: Add to Chat Context .

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Get more relevant suggestions with remote repository context You can get more contextually aware and relevant code suggestions by directing Gemini Code Assist to focus on specific remote repositories.
- Use a remote repository as context To direct Gemini Code Assist to use one or more repositories as the primary context for your prompts: In your IDE's chat, start your prompt with the @ symbol.
- By using remote repositories as a focused source of context, you can get more accurate and relevant suggestions from Gemini Code Assist, which can help you code faster and more efficiently.
- You can also select a part of your code and then prompt Gemini Code Assist for help through the chat feature, and receive and accept or reject code suggestions while you code.

### "Configure Gemini Code Assist Standard and Enterprise logging \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Default\nWHERE\n JSON VALUE(json payload, '$.chatExposure.originalRequestId') is not NULL\n AND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\n AND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\nGROUP BY\n chat exposures date\nORDER BY\n chat exposures date" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } } ] } } Replace the following: CENTRALIZED PROJECT ID : The project ID of the centralized logging project that you created.
- Default\nWHERE\n JSON VALUE(labels, '$.user id') is not NULL\n AND (\n JSON VALUE(json payload, '$.chatExposure.originalRequestId') is not NULL\n OR JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') is not NULL\n OR JSON VALUE(json payload, '$.codeExposure.originalRequestId') is not NULL\n )\n AND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\n AND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\nGROUP BY\nevent date\nORDER BY\nevent date\n" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "xPos" : 24 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Acceptance Rate by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "exposures date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "exposures date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "acceptance rate" } ], "plotType" : "LINE" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\nexposures date,\nacceptances count / exposures count as acceptance rate\nFROM\n(\nSELECT\nCOUNT (DISTINCT JSON VALUE(json payload, '$.codeAcceptance.originalRequestId')) as acceptances count, CAST(timestamp AS DATE) AS acceptances date\nFROM\n CENTRALIZED PROJECT ID .global.
- Default\n WHERE\n JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') is not NULL\n AND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\n AND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\n GROUP BY\n request id\n )\nGROUP BY\n line count day\nORDER BY\n line count day" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "yPos" : 32 , "xPos" : 24 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Chat Exposures by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "chat exposures date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "chat exposures date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "chat exposures count" } ], "plotType" : "STACKED BAR" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\n COUNT (DISTINCT JSON VALUE(json payload, '$.chatExposure.originalRequestId')) as chat exposures count, CAST(timestamp AS DATE) AS chat exposures date\nFROM\n CENTRALIZED PROJECT ID .global.
- If the command succeeds, it returns a response body that shows the log prompts and responses and log metadata set to false : { "name": "projects/ CONTAINER PROJECT NAME /locations/global/loggingSettings/ LOGS SETTING ID ", "createTime": "2025-01-23T15:22:49.717166932Z", "updateTime": "2025-01-23T15:22:49.717166932Z", "log prompts and responses": false, "log metadata": false } Set up multi-project logging You can use logs from Gemini Code Assist to create metrics and dashboards for monitoring per-project usage.

### "Gemini Code Assist chat features overview \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- You can perform the following chat actions with Gemini Code Assist in any of the supported IDEs : Use Gemini Code Assist to explain your code Create multiple chats Select a Gemini model Edit a prior prompt Regenerate a prompt response Delete prompt and response pairs Configure code preview pane Prompt Gemini Code Assist with selected code using chat Add selected code snippets to context Add terminal output to the chat context Specify files and folders in your workspace context Revert to a checkpoint in chat View code diffs Generate a file outline Create custom commands Create rules Exclude files from your context with an .aiexclude or .gitignore file Use the Gemini Code Assist agent mode Configure local codebase awareness What's next Set up Gemini Code Assist Standard or Enterprise , if you haven't already.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini Code Assist chat features overview Stay organized with collections Save and categorize content based on your preferences.
- To begin using Gemini Code Assist chat features in your IDE, see Chat with Gemini Code Assist .
- To help you comply with any license requirements for your code, Gemini Code Assist provides source citations when its suggestions directly quote at length from a specific source.

