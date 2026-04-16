---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.660Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "BigQuery partitioning and clustering recommendations"
feature_slug: "bigquery-partitioning-and-clustering-recommendations"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
  - "https://docs.cloud.google.com/gemini/docs/configure-logging"
keywords:
  - "partitioning"
  - "and"
  - "clustering"
  - "recommendations"
  - "gemini"
  - "in"
  - "can"
  - "recommend"
---

# BigQuery partitioning and clustering recommendations

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini in BigQuery can recommend partitioning and clustering choices.

## Extended Definition

Gemini in BigQuery can recommend partitioning and clustering choices.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)

## Supporting Pages

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: N/A

Evidence snippets:
- Interact with Gemini Code Assist in your IDE After you set up Gemini Code Assist Standard or Enterprise for a Google Cloud project , and install the Gemini Code Assist extension in your IDE ( VS Code or supported JetBrains IDE ), you can ask for assistance in the following ways: Receive code completions or generate code directly in the code editor.
- All of the benefits mentioned for Gemini Code Assist Standard, with the addition of the following: Code customization : Your organization can augment the model with your private codebases for tailored suggestions.
- Firebase Cloud Messaging and In-App Messaging campaign summarization and insights Summarize and analyze your messaging campaigns, providing actionable recommendations to improve performance.
- You can use Gemini Code Assist in supported IDEs , such as VS Code, JetBrains IDEs, or Android Studio, for AI-powered coding assistance in many popular languages .

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- Rules in Gemini let you define your preferences, such as: Coding style Output formats Tech stack Language For example, you can create a rule such as "Always give me concise responses in Kotlin." VS Code In your code file, press Control+I (for Windows and Linux) or Command+I (for macOS) to open the Gemini Code Assist Quick Pick menu.
- If you disable automatic outline generation, you can manually generate an outline for the file in focus by right-clicking in the file and selecting Gemini Code Assist > Outline current file , or by going to the Gemini Code Assist outline pane and clicking the Generate outline button.
- You can also invoke the custom command with the in-editor prompt by performing the following tasks: In your code file, highlight the code that you want to modify, and press Alt+\ (for Windows and Linux) or Cmd+\ (for macOS) to open the Gemini Code Assist Quick Pick menu.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini 3 in Gemini Code Assist Stay organized with collections Save and categorize content based on your preferences.
- Use Gemini 3 in IntelliJ If Gemini 3 is available to you, it will automatically be selected for agent mode, chat and code generation.
- Use Gemini 3 in VS Code If Gemini 3 is available to you, it will automatically be selected for chat and code generation.

### "Configure Gemini Code Assist Standard and Enterprise logging \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- Source ID: `site-docs-root-2`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- If the command succeeds, it returns the operation metadata in the following format: { "name": "projects/<var>CONTAINER PROJECT NAME</var>/locations/global/operations/operation-1737646069712-62c6140bb04bb-49261230-43701daf", "metadata": { "@type": "type.googleapis.com/google.cloud.cloudaicompanion.v1.OperationMetadata", "createTime": "2025-01-23T15:27:50.076075570Z", "target": "projects/<var>TARGET PROJECT NAME</var>/locations/global/loggingSettings/<var>LOGS SETTING ID</var>/settingBindings/<var>LOGS BINDING ID</var>", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Disable logging for Gemini Code Assist in a project Select one of the following options: Console In the Google Cloud console, go to the Admin for Gemini page.
- If the command succeeds, it returns a response body that shows the log prompts and responses and log metadata set to false : { "name": "projects/ CONTAINER PROJECT NAME /locations/global/loggingSettings/ LOGS SETTING ID ", "createTime": "2025-01-23T15:22:49.717166932Z", "updateTime": "2025-01-23T15:22:49.717166932Z", "log prompts and responses": false, "log metadata": false } Set up multi-project logging You can use logs from Gemini Code Assist to create metrics and dashboards for monitoring per-project usage.
- Alternatively, you can grant the predefined roles Gemini for Google Cloud Settings Admin ( roles/cloudaicompanion.settingsAdmin ) and Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ).
- In JSON Editor, paste the following code: { "displayName" : "Multi-Project Gemini Code Assist Overview from Metadata Logs" , "dashboardFilters" : [], "labels" : {}, "mosaicLayout" : { "columns" : 48 , "tiles" : [ { "height" : 16 , "width" : 24 , "widget" : { "title" : "Active Users by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "event date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "event date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "DAU" } ], "plotType" : "LINE" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\n COUNT (DISTINCT JSON VALUE(labels, '$.user id')) as DAU, CAST(timestamp AS DATE) AS event date\nFROM\n CENTRALIZED PROJECT ID .global.

