---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.711Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Duet API enablement during onboarding"
feature_slug: "duet-api-enablement-during-onboarding"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses"
keywords:
  - "duet"
  - "api"
  - "enablement"
  - "during"
  - "onboarding"
  - "allows"
  - "users"
  - "to"
---

# Duet API enablement during onboarding

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Allows users to enable the Duet API during the onboarding flow.

## Extended Definition

Allows users to enable the Duet API during the onboarding flow.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- [https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses](https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses)

## Supporting Pages

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to specify a personal access token for the GitHub local and remote MCP servers: { "mcpServers" : { "github-remote" : { "httpUrl" : "https://api.githubcopilot.com/mcp/" , "headers" : { "Authorization" : "Bearer ACCESS TOKEN " } }, "github-local" : { "command" : "/Users/username/code/github-mcp-server/cmd/github-mcp-server/github-mcp-server" , "args" : [ "stdio" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : " ACCESS TOKEN " } } } } Where ACCESS TOKEN is the user's access token.
- The following example mcp.json file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in IntelliJ. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Your configured MCP servers are available for the agent to use in agent mode.
- The following example Gemini settings JSON file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in VS Code. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Open the command palette and select Developer: Reload Window .
- Help me understand the architecture." "What does this [class/function] do?" "Add a feature to this codebase - "[link-or-path-to-codebase]"." "Refactor function [A] and [B] to use the common method [C]." "Fix the GitHub issue [link-to-github-issue]." "Build an application to do [goal] with a UI that lets the user do [task] in the [environment]." "Migrate library versions in this repository from [X] to [Y]." "Optimize performance of this Go code so that it runs faster." "Use [name-of-API] to build out this feature." "Implement an algorithm to do [x], [Y], and [Z]." Optional: Use an API Key Gemini Code Assist includes different daily quotas for agentic features, depending on the tier you're in.

### "Generate Gemini Code Assist metrics \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List the number of unique users The following instructions describe how to use the gcloud CLI to list the number of unique users of Gemini Code Assist in the most recent 28-day period: In a shell environment, ensure that you have updated all installed components of the gcloud CLI to the latest version: gcloud components update Read the log entries for Gemini Code Assist users and usage: gcloud logging read 'resource.type=cloudaicompanion.googleapis.com/Instance labels.product= "code assist"' \ --freshness 28d \ --project PROJECT ID \ --format "csv(timestamp.date('%Y-%m-%d'),labels.user id)" Replace PROJECT ID with your Google Cloud project ID.
- List aggregate users by day SELECT COUNT ( DISTINCT labels . user id ) as total users , DATE ( timestamp ) as use date FROM GENERATED BIGQUERY TABLE GROUP BY use date ORDER BY use date List individual requests per day by user SELECT COUNT ( ), DATE ( timestamp ) as use date , labels . user id as user FROM GENERATED BIGQUERY TABLE GROUP BY use date , user ORDER BY use date List aggregate requests per day by date SELECT COUNT ( ), DATE ( timestamp ) as use date FROM GENERATED BIGQUERY TABLE GROUP BY use date ORDER BY use date What's next Learn more about Gemini for Google Cloud logging .
- The output is similar to the following: 2024-10-30,user1@company.com 2024-10-29,user2@company.com 2024-10-29,user2@company.com 2024-10-29,user2@company.com 2024-10-29,user1@company.com 2024-10-28,user1@company.com Create a chart that displays daily usage The following steps show how to use Monitoring to create daily use graphs that show the aggregate total of daily active Gemini Code Assist users and the number of their requests per day.
- In the query pane, enter the following query, and then click Run query : resource.type="cloudaicompanion.googleapis.com/Instance" AND labels.product="code assist" AND jsonPayload.@type="type.googleapis.com/google.cloud.cloudaicompanion.logging.v1.ResponseLog" Note: The default time period value is Last 1 hour , but you can set it to a longer time period (such as Last 7 days ).

### "Monitor Gemini Code Assist usage \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Metric Name Timeframe code assist/daily active users Daily active users Past 24 hours code assist/twenty eight day active users Twenty-eight-day active users Past 28 days Chat metric This tracks the number of Gemini Code Assist chat responses exposed or shown to users over the given timeframe.
- You can use the data visualization and analysis tools in Cloud Monitoring to help you answer important questions, such as how many daily active users in your organization are using Gemini Code Assist.
- Additionally, users must have the Gemini Cloud Assist User ( roles/geminicloudassist.user ) role on your project to collect their usage metrics and send the data to the dashboard.
- Code acceptances These metrics count the number of Gemini Code Assist code responses shown to and accepted by users over different timeframes.

### "Manage Gemini Code Assist Standard and Enterprise licenses \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses](https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Use cURL to call the method: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://cloudcommerceconsumerprocurement.googleapis.com/v1/billingAccounts/ BILLING ACCOUNT ID /orders/ ORDER ID /licensePool:enumerateLicensedUsers/" Replace the following: PROJECT ID : the ID for a project.
- API To view Gemini Code Assist Standard or Enterprise license assignments, use the billingAccounts.orders.licensePool.enumerateLicensedUsers method .
- If the command succeeds, it returns licensedUsers output in the following format: { "licensedUsers": [ { "username": "dana@example.com", "assignTime": "2024-09-26T16:24:40.559222Z" }, { "username": "lee@example.com", "assignTime": "2024-09-26T16:24:40.559222Z" }, { "username": "taylor@example.com", "assignTime": "2024-09-26T16:24:40.559222Z" }, { "username": "bola@example.com", "assignTime": "2024-09-26T16:24:14.610828Z" } ] } If there are no Gemini Code Assist Standard or Enterprise license assignments or the ORDER ID is invalid, it returns licensedUsers output in the following format: {} Automatically assign Gemini Code Assist Standard and Enterprise licenses You can enable automatic license assignment for a subscription.
- View Gemini Code Assist Standard and Enterprise license assignments Select one of the following options: Console Verify that you have the following IAM permissions on the billing account that owns the subscription: billing.accounts.get consumerprocurement.orders.get consumerprocurement.licensePools.get consumerprocurement.licensePools.enumerateLicensedUsers resourcemanager.projects.get Go to the Admin for Gemini page and select the project attached to your billing account with the Gemini Code Assist Standard or Enterprise subscription.

