---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.672Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "SQL and Python code assistance"
feature_slug: "sql-and-python-code-assistance"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/configure-logging"
keywords:
  - "sql"
  - "and"
  - "python"
  - "code"
  - "assistance"
  - "gemini"
  - "in"
  - "provides"
---

# SQL and Python code assistance

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini in BigQuery provides code generation, completion, and explanation for SQL and Python.

## Extended Definition

Gemini in BigQuery provides code generation, completion, and explanation for SQL and Python.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)

## Supporting Pages

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-root`
- Final score: 331
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Gemini in Colab Enterprise The following table shows the types of generative AI assistance for code in Colab Enterprise : Notebook code assist Gemini Code Assist Standard Gemini Code Assist Enterprise Python code generation and completion in notebook Gemini in databases The following table shows the types of generative AI assistance for coding in databases: Generate SQL queries Gemini Code Assist Standard Gemini Code Assist Enterprise Write in natural language to generate SQL statements.
- Gemini Code Assist code explained for Apigee policies. ( Preview ) Gemini in Application Integration The following table shows the types of generative AI assistance in Application Integration in the Google Cloud console: Integration creation assist Gemini Code Assist Standard Gemini Code Assist Enterprise AI-assisted visual editor for automation flow generation Enterprise context embedded AI-assisted automation authoring Generative AI Automation flow documentation generation and refinement Gemini in BigQuery features with Gemini Code Assist The following table shows the types of generative AI assistance for BigQuery in BigQuery Studio : Data insights Gemini Code Assist Standard Gemini Code Assist Enterprise Data insights provides an insightful library of queries generated from the metadata of your tables.
- Extended integrations: Gemini Code Assist Enterprise provides AI assistance across Google Cloud like Apigee, Application Integration, and Gemini Cloud Assist, empowering cloud teams to build, design and operate, and optimize their applications and infrastructure more effectively on Google Cloud.
- Extended integrations: Gemini Code Assist Standard provides AI assistance in Firebase, Colab Enterprise, BigQuery data insights, Cloud Run, and Database Studio.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 327
- Re-rank relevance: N/A

Evidence snippets:
- Prompt Gemini Code Assist with code transformation Code transformation allows you to use commands or natural language prompts in the Quick Pick menu to request modifications to your code, and provides you with a diff view to show pending changes to your code.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Prompt Gemini Code Assist in a code file with a comment If you prefer, you can also prompt Gemini Code Assist in your code file with a comment by following these steps: VS Code On a new line, enter the comment Function to create a Cloud Storage bucket , and then press Enter (for Windows and Linux) or Return (for macOS).

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 291
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- Configure the firewall for API traffic between your IDE and Google In addition to enabling the Gemini for Google Cloud API, users behind firewalls also need to allow traffic to pass through for the following APIs: oauth2.googleapis.com : used to sign in to Google Cloud. serviceusage.googleapis.com : used for checking that the user's Gemini Code Assist project is properly configured. cloudaicompanion.googleapis.com : the primary Gemini for Google Cloud API endpoint. cloudcode-pa.googleapis.com : an internal API that provides IDE-related features. cloudresourcemanager.googleapis.com : used in the IDEs for project pickers.
- Any custom roles that you create need the following permissions for you to assign and manage Gemini Code Assist licenses: consumerprocurement.orders.get consumerprocurement.orders.licensePools. consumerprocurement.orders.licensePools.update consumerprocurement.orders.licensePools.get consumerprocurement.orders.licensePools.assign consumerprocurement.orders.licensePools.unassign consumerprocurement.orders.licensePools.enumerateLicensedUsers Also note that for any of the preceding permissions to work, the Gemini for Google Cloud API needs to be enabled in the same Google Cloud project where you've assigned each permission.
- The Resource Manager API may not be necessary if the projects are explicitly configured in your settings.json file. people.googleapis.com : provides access to information about profiles and contacts. firebaselogging-pa.googleapis.com : an internal API used for sending product telemetry including events as to whether suggestions were accepted. feedback-pa.googleapis.com : an internal API used for in-IDE feedback submission. apihub.googleapis.com : used by the Cloud Code API Browser feature. lh3.googleusercontent.com and lh5.googleusercontent.com : used to obtain user photos.

### "Configure Gemini Code Assist Standard and Enterprise logging \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- Source ID: `site-docs-root-2`
- Final score: 285
- Re-rank relevance: N/A

Evidence snippets:
- In JSON Editor, paste the following code: { "displayName" : "Multi-Project Gemini Code Assist Overview from Metadata Logs" , "dashboardFilters" : [], "labels" : {}, "mosaicLayout" : { "columns" : 48 , "tiles" : [ { "height" : 16 , "width" : 24 , "widget" : { "title" : "Active Users by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "event date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "event date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "DAU" } ], "plotType" : "LINE" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\n COUNT (DISTINCT JSON VALUE(labels, '$.user id')) as DAU, CAST(timestamp AS DATE) AS event date\nFROM\n CENTRALIZED PROJECT ID .global.
- Default\nWHERE\n JSON VALUE(labels, '$.user id') is not NULL\n AND (\n JSON VALUE(json payload, '$.chatExposure.originalRequestId') is not NULL\n OR JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') is not NULL\n OR JSON VALUE(json payload, '$.codeExposure.originalRequestId') is not NULL\n )\n AND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\n AND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\nGROUP BY\nevent date\nORDER BY\nevent date\n" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "xPos" : 24 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Acceptance Rate by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "exposures date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "exposures date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "acceptance rate" } ], "plotType" : "LINE" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\nexposures date,\nacceptances count / exposures count as acceptance rate\nFROM\n(\nSELECT\nCOUNT (DISTINCT JSON VALUE(json payload, '$.codeAcceptance.originalRequestId')) as acceptances count, CAST(timestamp AS DATE) AS acceptances date\nFROM\n CENTRALIZED PROJECT ID .global.
- Default\nWHERE\n JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') is not NULL\n AND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\n AND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\nGROUP BY\n acceptances date\nORDER BY\n acceptances date\n" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "yPos" : 32 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Lines of Code Accepted by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "line count day" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "line count day" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "lines count" } ], "plotType" : "STACKED BAR" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\n SUM(lines) as lines count,\n CAST(max timestamp AS DATE) AS line count day\nFROM\n(\n SELECT\n JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') as request id,\n MAX(CAST(JSON VALUE(json payload, '$.codeAcceptance.linesCount') AS INT)) as lines,\n MAX(timestamp) as max timestamp\n FROM\n CENTRALIZED PROJECT ID .global.
- Default\nWHERE\nJSON VALUE(json payload, '$.codeExposure.originalRequestId') is not NULL\nAND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\nAND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\nGROUP BY\nexposures date\n) as exposures\nON\nexposures.exposures date = acceptances.acceptances date\nORDER BY\nexposures date ASC" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "yPos" : 16 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Code Suggestions by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "exposures date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "exposures date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "exposures count" } ], "plotType" : "STACKED BAR" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\n COUNT (DISTINCT JSON VALUE(json payload, '$.codeExposure.originalRequestId')) as exposures count, CAST(timestamp AS DATE) AS exposures date\nFROM\n CENTRALIZED PROJECT ID .global.

