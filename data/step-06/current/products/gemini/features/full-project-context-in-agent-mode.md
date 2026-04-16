---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.639Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Full project context in agent mode"
feature_slug: "full-project-context-in-agent-mode"
latest_feature_date: "2025-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
  - "https://docs.cloud.google.com/gemini/docs/configure-logging"
  - "https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/patch"
keywords:
  - "full"
  - "project"
  - "context"
  - "in"
  - "agent"
  - "mode"
  - "can"
  - "analyze"
---

# Full project context in agent mode

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Agent mode can analyze an entire codebase and request files and folders as needed to produce more accurate code suggestions and refactorings.

## Extended Definition

Agent mode can analyze an entire codebase and request files and folders as needed to produce more accurate code suggestions and refactorings.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/patch](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/patch)

## Supporting Pages

### Agent mode overview \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IntelliJ The following methods of getting context are usually available to Gemini Code Assist in agent mode: Information in your IDE project including your files, indexed symbols and usage of symbols in your project.
- You can see the context available to the agent in the context drawer in the agent mode chat prompt area.
- VS Code The following methods of getting context are usually available to Gemini Code Assist in agent mode: Information in your IDE workspace.
- Tools Tools are a broad category of services that an agent can use for context and actions in its response to your prompt.

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root-2`
- Final score: 251
- Re-rank relevance: N/A

Evidence snippets:
- VS Code You can use the following built-in Gemini CLI commands in agent mode: /tools : Displays a list of tools that are available in your agent mode session. /mcp : Lists configured Model Context Protocol (MCP) servers, their connection status, server details, and available tools. /deploy : Deploys a web application to Cloud Run.
- Configure tools for agent mode Tools are a broad category of services that an agent can use for context and actions in its response to your prompt.
- The following example mcp.json file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in IntelliJ. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Your configured MCP servers are available for the agent to use in agent mode.
- VS Code You can use the coreTools and excludeTools settings to control which tools Gemini has access to in agent mode. coreTools Lets you specify a list of tools that you want to be available to the model.

### "Configure Gemini Code Assist Standard and Enterprise logging \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- Source ID: `site-docs-root-2`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Default\nWHERE\n JSON VALUE(labels, '$.user id') is not NULL\n AND (\n JSON VALUE(json payload, '$.chatExposure.originalRequestId') is not NULL\n OR JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') is not NULL\n OR JSON VALUE(json payload, '$.codeExposure.originalRequestId') is not NULL\n )\n AND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\n AND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\nGROUP BY\nevent date\nORDER BY\nevent date\n" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "xPos" : 24 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Acceptance Rate by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "exposures date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "exposures date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "acceptance rate" } ], "plotType" : "LINE" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\nexposures date,\nacceptances count / exposures count as acceptance rate\nFROM\n(\nSELECT\nCOUNT (DISTINCT JSON VALUE(json payload, '$.codeAcceptance.originalRequestId')) as acceptances count, CAST(timestamp AS DATE) AS acceptances date\nFROM\n CENTRALIZED PROJECT ID .global.
- Default\nWHERE\n JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') is not NULL\n AND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\n AND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\nGROUP BY\n acceptances date\nORDER BY\n acceptances date\n" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "yPos" : 32 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Lines of Code Accepted by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "line count day" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "line count day" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "lines count" } ], "plotType" : "STACKED BAR" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\n SUM(lines) as lines count,\n CAST(max timestamp AS DATE) AS line count day\nFROM\n(\n SELECT\n JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') as request id,\n MAX(CAST(JSON VALUE(json payload, '$.codeAcceptance.linesCount') AS INT)) as lines,\n MAX(timestamp) as max timestamp\n FROM\n CENTRALIZED PROJECT ID .global.
- Default\nWHERE\nJSON VALUE(json payload, '$.codeExposure.originalRequestId') is not NULL\nAND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\nAND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\nGROUP BY\nexposures date\n) as exposures\nON\nexposures.exposures date = acceptances.acceptances date\nORDER BY\nexposures date ASC" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "yPos" : 16 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Code Suggestions by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "exposures date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "exposures date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "exposures count" } ], "plotType" : "STACKED BAR" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\n COUNT (DISTINCT JSON VALUE(json payload, '$.codeExposure.originalRequestId')) as exposures count, CAST(timestamp AS DATE) AS exposures date\nFROM\n CENTRALIZED PROJECT ID .global.
- Default\n WHERE\n JSON VALUE(json payload, '$.codeAcceptance.originalRequestId') is not NULL\n AND resource.type = \"cloudaicompanion.googleapis.com/Instance\"\n AND (JSON VALUE(resource.labels, '$.resource container') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 ') or JSON VALUE(resource.labels, '$.project id') in (' SOURCE PROJECT ID 1 ', ' SOURCE PROJECT ID 2 '))\n GROUP BY\n request id\n )\nGROUP BY\n line count day\nORDER BY\n line count day" }, "outputFullDuration" : false , "unitOverride" : "" } } ], "thresholds" : [], "yAxis" : { "label" : "" , "scale" : "LINEAR" } } } }, { "yPos" : 32 , "xPos" : 24 , "height" : 16 , "width" : 24 , "widget" : { "title" : "Chat Exposures by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "chat exposures date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "chat exposures date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "chat exposures count" } ], "plotType" : "STACKED BAR" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\n COUNT (DISTINCT JSON VALUE(json payload, '$.chatExposure.originalRequestId')) as chat exposures count, CAST(timestamp AS DATE) AS chat exposures date\nFROM\n CENTRALIZED PROJECT ID .global.

### "Method: projects.locations.codeToolsSettings.settingBindings.patch \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/patch](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/patch)
- Source ID: `site-api-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Gemini for Google Cloud API and references Send feedback Method: projects.locations.codeToolsSettings.settingBindings.patch Stay organized with collections Save and categorize content based on your preferences.
- HTTP request PATCH https://cloudaicompanion.googleapis.com/v1/{settingBinding.name=projects/ /locations/ /codeToolsSettings/ /settingBindings/ } The URL uses gRPC Transcoding syntax.
- If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request.
- Format:projects/{project}/locations/{location}/{settingType}/{setting}/settingBindings/{settingBinding} Query parameters Parameters updateMask string ( FieldMask format) Optional.

