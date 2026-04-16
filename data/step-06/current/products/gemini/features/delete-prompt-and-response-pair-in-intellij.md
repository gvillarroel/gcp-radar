---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.637Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Delete prompt and response pair in IntelliJ"
feature_slug: "delete-prompt-and-response-pair-in-intellij"
latest_feature_date: "2025-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/configure-logging"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
keywords:
  - "delete"
  - "prompt"
  - "and"
  - "response"
  - "pair"
  - "in"
  - "intellij"
  - "gemini"
---

# Delete prompt and response pair in IntelliJ

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

IntelliJ Gemini Code Assist lets you delete a prompt and its response without removing the rest of the chat history; IntelliJ Gemini Code Assist lets you delete a prompt and its response without removing the rest of the chat history.

## Extended Definition

IntelliJ Gemini Code Assist lets you delete a prompt and its response without removing the rest of the chat history; IntelliJ Gemini Code Assist lets you delete a prompt and its response without removing the rest of the chat history.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 347
- Re-rank relevance: N/A

Evidence snippets:
- Delete prompt and response pairs To delete your prompt and Gemini Code Assist's response to that particular prompt, follow these steps: VS Code In the chat pane, hold your pointer over your prompt that you wish to remove.
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- Your prompt and response pair is removed from your chat history with Gemini Code Assist.
- Your prompt and response pair is removed from your chat history with Gemini Code Assist.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 289
- Re-rank relevance: N/A

Evidence snippets:
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Prompt Gemini Code Assist in a code file with a comment If you prefer, you can also prompt Gemini Code Assist in your code file with a comment by following these steps: VS Code On a new line, enter the comment Function to create a Cloud Storage bucket , and then press Enter (for Windows and Linux) or Return (for macOS).
- Prompt Gemini Code Assist with code transformation Code transformation allows you to use commands or natural language prompts in the Quick Pick menu to request modifications to your code, and provides you with a diff view to show pending changes to your code.

### "Configure Gemini Code Assist Standard and Enterprise logging \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)
- Source ID: `site-docs-root-2`
- Final score: 289
- Re-rank relevance: N/A

Evidence snippets:
- If the command succeeds, it returns a response body that shows the log prompts and responses and log metadata set to true : { "name": "projects/ CONTAINER PROJECT NAME /locations/global/loggingSettings/ LOGS SETTING ID ", "createTime": "2025-01-23T15:22:49.717166932Z", "updateTime": "2025-01-23T15:22:49.717166932Z", "log prompts and responses": true, "log metadata": true } Run the following command to create the Gemini Code Assist Standard and Enterprise logs setting binding: curl -X POST \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-Type: application/json' \ -d '{ "target": "projects/ TARGET PROJECT NAME " }' \ "https://cloudaicompanion.googleapis.com/v1/projects/ CONTAINER PROJECT NAME /locations/global/loggingSettings/ LOGS SETTING ID /settingBindings?setting binding id= LOGS BINDING ID " Replace the following: TARGET PROJECT NAME : Enter the target project to which the binding should be bound.
- Create the setting and a setting-specific value: Obtain the token: TOKEN=$(gcloud auth print-access-token) Run the following command to disable the Gemini Code Assist Standard and Enterprise logs settings: curl -X POST \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-Type: application/json' \ -d '{ "log prompts and responses": false, "log metadata": false, } ' \ "https://cloudaicompanion.googleapis.com/v1/projects/ CONTAINER PROJECT NAME /locations/global/loggingSettings?logging metadata id= LOGS SETTING ID " Replace the following: CONTAINER PROJECT NAME : Enter the parent project ID.
- If the command succeeds, it returns a response body that shows the log prompts and responses and log metadata set to false : { "name": "projects/ CONTAINER PROJECT NAME /locations/global/loggingSettings/ LOGS SETTING ID ", "createTime": "2025-01-23T15:22:49.717166932Z", "updateTime": "2025-01-23T15:22:49.717166932Z", "log prompts and responses": false, "log metadata": false } Set up multi-project logging You can use logs from Gemini Code Assist to create metrics and dashboards for monitoring per-project usage.
- The Settings page loads. (Optional) Click Logging for Code Assist metadata to record the metadata generated by users of Gemini Code Assist Standard and Enterprise in the project. (Optional) Click Logging for Code Assist prompts and responses to record the prompts and responses generated by users of Gemini Code Assist Standard and Enterprise in the project.

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: N/A

Evidence snippets:
- Code assistance and chat The following table shows the types of generative AI assistance that are available in supported IDEs : AI coding assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Code completion and generation in your IDE project in the following IDEs: Cloud Shell Editor Cloud Workstations JetBrains IDEs (such as IntelliJ and PyCharm) VS Code Android Studio Conversational assistant in your IDE using your opened files' context Multi-IDE support (VS Code, JetBrains IDEs such as IntelliJ and PyCharm , Cloud Workstations) Agentic chat Prompt Gemini to complete complex, multi-step tasks that use system tools and Model Context Protocol (MCP) servers.
- Gemini Code Assist provides contextualized responses to your prompts, including source citations regarding which documentation and code samples Gemini Code Assist used to generate its responses.
- Gemini Cloud Assist The following table shows the types of generative AI assistance in Gemini Cloud Assist in the Google Cloud console: Gemini Cloud Assist assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Gemini Cloud Assist features (including features available to all Google users and available to Gemini Code Assist Enterprise users) Gemini in Apigee The following table shows the types of generative AI assistance with API development in Apigee (IDE and the Google Cloud console): Gemini Code Assist for API management Gemini Code Assist Standard Gemini Code Assist Enterprise Create or edit OpenAPI specification using natural language prompts.
- Gemini Code Assist code explained for Apigee policies. ( Preview ) Gemini in Application Integration The following table shows the types of generative AI assistance in Application Integration in the Google Cloud console: Integration creation assist Gemini Code Assist Standard Gemini Code Assist Enterprise AI-assisted visual editor for automation flow generation Enterprise context embedded AI-assisted automation authoring Generative AI Automation flow documentation generation and refinement Gemini in BigQuery features with Gemini Code Assist The following table shows the types of generative AI assistance for BigQuery in BigQuery Studio : Data insights Gemini Code Assist Standard Gemini Code Assist Enterprise Data insights provides an insightful library of queries generated from the metadata of your tables.

