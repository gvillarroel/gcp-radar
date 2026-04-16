---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.633Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Prompt Library"
feature_slug: "prompt-library"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
  - "https://docs.cloud.google.com/gemini/docs/configure-logging"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
keywords:
  - "prompt"
  - "library"
  - "the"
  - "lets"
  - "users"
  - "access"
  - "saved"
  - "prompts"
---

# Prompt Library

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

The Prompt Library lets users access saved prompts in Gemini chat; The Prompt Library lets users access saved prompts in Gemini chat.

## Extended Definition

The Prompt Library lets users access saved prompts in Gemini chat; The Prompt Library lets users access saved prompts in Gemini chat.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- In the Gemini Code Assist chat pane, you can type @ to retrieve and use a saved prompt in your Prompt Library.
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- Manage files and folders in the Context Drawer After you specify a file or folder to be used as context for your Gemini Code Assist prompts , these files and folders are placed in the Context Drawer , where you can view and remove them from the prompt context.
- View query history If you want to re-use your previous prompts, you can find them in your Query History in the Gemini Code Assist tool window by clicking schedule Show Query History .

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Help me understand the architecture." "What does this [class/function] do?" "Add a feature to this codebase - "[link-or-path-to-codebase]"." "Refactor function [A] and [B] to use the common method [C]." "Fix the GitHub issue [link-to-github-issue]." "Build an application to do [goal] with a UI that lets the user do [task] in the [environment]." "Migrate library versions in this repository from [X] to [Y]." "Optimize performance of this Go code so that it runs faster." "Use [name-of-API] to build out this feature." "Implement an algorithm to do [x], [Y], and [Z]." Optional: Use an API Key Gemini Code Assist includes different daily quotas for agentic features, depending on the tier you're in.
- The following example shows how to specify a personal access token for the GitHub local and remote MCP servers: { "mcpServers" : { "github-remote" : { "httpUrl" : "https://api.githubcopilot.com/mcp/" , "headers" : { "Authorization" : "Bearer ACCESS TOKEN " } }, "github-local" : { "command" : "/Users/username/code/github-mcp-server/cmd/github-mcp-server/github-mcp-server" , "args" : [ "stdio" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : " ACCESS TOKEN " } } } } Where ACCESS TOKEN is the user's access token.
- The following example adds a personal access token for the GitHub local server: { "mcpServers" : { "github-local" : { "command" : "/Users/username/code/github-mcp-server/cmd/github-mcp-server/github-mcp-server" , "args" : [ "stdio" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : " ACCESS TOKEN " } } } } Where ACCESS TOKEN is the user's access token.
- VS Code You can use the coreTools and excludeTools settings to control which tools Gemini has access to in agent mode. coreTools Lets you specify a list of tools that you want to be available to the model.

### "Configure Gemini Code Assist Standard and Enterprise logging \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- Source ID: `site-docs-root-2`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Create the setting and a setting-specific value: Obtain the token: TOKEN=$(gcloud auth print-access-token) Run the following command to disable the Gemini Code Assist Standard and Enterprise logs settings: curl -X POST \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-Type: application/json' \ -d '{ "log prompts and responses": false, "log metadata": false, } ' \ "https://cloudaicompanion.googleapis.com/v1/projects/ CONTAINER PROJECT NAME /locations/global/loggingSettings?logging metadata id= LOGS SETTING ID " Replace the following: CONTAINER PROJECT NAME : Enter the parent project ID.
- The Settings page loads. (Optional) Click Logging for Code Assist metadata to record the metadata generated by users of Gemini Code Assist Standard and Enterprise in the project. (Optional) Click Logging for Code Assist prompts and responses to record the prompts and responses generated by users of Gemini Code Assist Standard and Enterprise in the project.
- Users logs and metadata logs are enabled with the log prompts and responses and log metadata fields, respectively.
- In JSON Editor, paste the following code: { "displayName" : "Multi-Project Gemini Code Assist Overview from Metadata Logs" , "dashboardFilters" : [], "labels" : {}, "mosaicLayout" : { "columns" : 48 , "tiles" : [ { "height" : 16 , "width" : 24 , "widget" : { "title" : "Active Users by Day" , "id" : "" , "xyChart" : { "chartOptions" : { "displayHorizontal" : false , "mode" : "COLOR" , "showLegend" : false }, "dataSets" : [ { "breakdowns" : [], "dimensions" : [ { "column" : "event date" , "columnType" : "DATE" , "maxBinCount" : 0 , "sortColumn" : "event date" , "sortOrder" : "SORT ORDER ASCENDING" , "timeBinSize" : "0s" , "xMax" : 0 , "xMin" : 0 } ], "legendTemplate" : "" , "measures" : [ { "aggregationFunction" : { "parameters" : [], "type" : "average" }, "column" : "DAU" } ], "plotType" : "LINE" , "targetAxis" : "Y1" , "timeSeriesQuery" : { "opsAnalyticsQuery" : { "queryExecutionRules" : { "useReservedSlots" : false }, "queryHandle" : "" , "savedQueryId" : "" , "sql" : "SELECT\n COUNT (DISTINCT JSON VALUE(labels, '$.user id')) as DAU, CAST(timestamp AS DATE) AS event date\nFROM\n CENTRALIZED PROJECT ID .global.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- When all available licenses in the subscription are assigned, users who try to access Gemini Code Assist without a license will receive an error message indicating one is required.
- For this reason, you need to enable the Gemini for Google Cloud API in a Google Cloud project of your choice before users can access Gemini Code Assist.
- All of the users who have been granted these roles can access Gemini for Google Cloud features in the Google Cloud console within the specified project.

