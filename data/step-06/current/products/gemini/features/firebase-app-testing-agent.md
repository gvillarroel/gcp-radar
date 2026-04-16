---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.646Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Firebase App Testing agent"
feature_slug: "firebase-app-testing-agent"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.services.data_agent_service.DataAgentServiceAsyncClient"
keywords:
  - "firebase"
  - "app"
  - "testing"
  - "agent"
  - "uses"
  - "gemini"
  - "to"
  - "create"
---

# Firebase App Testing agent

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Uses Gemini to create and run tests from natural-language prompts across virtual and physical devices.

## Extended Definition

Uses Gemini to create and run tests from natural-language prompts across virtual and physical devices.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.services.data_agent_service.DataAgentServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.services.data_agent_service.DataAgentServiceAsyncClient)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info 'Activate Gemini Code Assist' still appears after selecting Gemini Code Assist project If you selected your project per the instructions in this guide, which includes enabling the Gemini for Google Cloud API, then there may be an issue with the LS server.
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- Rules in Gemini let you define your preferences, such as: Coding style Output formats Tech stack Language For example, you can create a rule such as "Always give me concise responses in Kotlin." VS Code In your code file, press Control+I (for Windows and Linux) or Command+I (for macOS) to open the Gemini Code Assist Quick Pick menu.
- Revert to a checkpoint in chat After applying the changes that Gemini Code Assist generates based on your prompt, you can choose to revert the modified code file(s) to a certain checkpoint, which reverts all of the applied changes to the code file(s).

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key terms: App : A Gemini Enterprise app provides search results, actions, and agents to your end users.
- With Gemini Enterprise, you create an app and connect it to a data store.
- Blended search allows the following fields in search requests : boostSpec contentSearchSpec dataStoreSpecs facetSpecs filter languageCode offset oneBoxPageSize orderBy query pageSize pageToken relevanceScoreSpec relevanceThreshold session sessionSpec spellCorrectionSpec userInfo userPseudoId Blended search allows the following fields in dataStoreSpecs : dataStore boostSpec : If there are boost specs specified for both SearchRequest and dataStoreSpecs , both boost specs are applied to search results filter : If there are filters specified for both SearchRequest and dataStoreSpecs , both filters are applied to search results Create, Read, Update, and Delete (CRUD) operations on serving configs are supported for blended apps.
- Method of app creation and data ingestion How you create an app and ingest data depends on the type of data you have: For third-party data, you use the Google Cloud console, not the API, to create your app and ingest data.

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Help me understand the architecture." "What does this [class/function] do?" "Add a feature to this codebase - "[link-or-path-to-codebase]"." "Refactor function [A] and [B] to use the common method [C]." "Fix the GitHub issue [link-to-github-issue]." "Build an application to do [goal] with a UI that lets the user do [task] in the [environment]." "Migrate library versions in this repository from [X] to [Y]." "Optimize performance of this Go code so that it runs faster." "Use [name-of-API] to build out this feature." "Implement an algorithm to do [x], [Y], and [Z]." Optional: Use an API Key Gemini Code Assist includes different daily quotas for agentic features, depending on the tier you're in.
- VS Code You can use the following built-in Gemini CLI commands in agent mode: /tools : Displays a list of tools that are available in your agent mode session. /mcp : Lists configured Model Context Protocol (MCP) servers, their connection status, server details, and available tools. /deploy : Deploys a web application to Cloud Run.
- To restrict agent tool use to a list of approved tools, add the following line to your Gemini settings JSON: "coreTools" : [ " TOOL NAME 1 , TOOL NAME 2 " ] Replace TOOL NAME 1 and TOOL NAME 2 with the names of the built-in tools you want the agent to have access to.
- This Gemini CLI-based custom command uses the Cloud Run Model Context Protocol (MCP) server to build, containerize, push, configure, and return a public URL for your application.

### "Class DataAgentServiceAsyncClient (0.12.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.services.data_agent_service.DataAgentServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.services.data_agent_service.DataAgentServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import geminidataanalytics v1alpha async def sample list accessible data agents(): Create a client client = geminidataanalytics v1alpha.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import geminidataanalytics v1alpha async def sample create data agent sync(): Create a client client = geminidataanalytics v1alpha.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import geminidataanalytics v1alpha async def sample delete data agent sync(): Create a client client = geminidataanalytics v1alpha.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import geminidataanalytics v1alpha async def sample update data agent sync(): Create a client client = geminidataanalytics v1alpha.

