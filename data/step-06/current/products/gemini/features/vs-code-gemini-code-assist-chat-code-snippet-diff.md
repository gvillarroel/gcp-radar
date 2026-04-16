---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.665Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "VS Code Gemini Code Assist chat code snippet diff"
feature_slug: "vs-code-gemini-code-assist-chat-code-snippet-diff"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat"
keywords:
  - "vs"
  - "code"
  - "gemini"
  - "assist"
  - "chat"
  - "snippet"
  - "diff"
  - "now"
---

# VS Code Gemini Code Assist chat code snippet diff

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Chat now includes a diff button for comparing Gemini Code Assist code snippets with the code in the VS Code editor.

## Extended Definition

Chat now includes a diff button for comparing Gemini Code Assist code snippets with the code in the VS Code editor.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat](https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 348
- Re-rank relevance: N/A

Evidence snippets:
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Regenerate a prompt response If preferred, you can regenerate a different response to your most recent prompt by following these steps: VS Code In the Gemini Code Assist Chat pane, at the bottom of your most recent response, click replay Regenerate response .
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- To manage the files and folders in your Context Drawer, perform the following tasks: VS Code Note: Chats created with Gemini Code Assist for VS Code, prior to version 2.34.0 , won't retain and display the saved context in the Context Drawer.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 324
- Re-rank relevance: N/A

Evidence snippets:
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Prompt Gemini Code Assist in a code file with a comment If you prefer, you can also prompt Gemini Code Assist in your code file with a comment by following these steps: VS Code On a new line, enter the comment Function to create a Cloud Storage bucket , and then press Enter (for Windows and Linux) or Return (for macOS).
- Prompt Gemini Code Assist with code transformation Code transformation allows you to use commands or natural language prompts in the Quick Pick menu to request modifications to your code, and provides you with a diff view to show pending changes to your code.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 284
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- Any custom roles that you create need the following permissions for you to access Gemini Code Assist Standard and Enterprise: cloudaicompanion.companions.generateChat cloudaicompanion.companions.generateCode cloudaicompanion.instances.completeCode cloudaicompanion.instances.completeTask cloudaicompanion.instances.generateCode cloudaicompanion.instances.generateText cloudaicompanion.instances.exportMetrics cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings serviceusage.services.enable Assign and manage licenses.
- If you prefer to follow the Code with Gemini Code Assist walkthrough directly in your IDE, click Launch VS Code and follow the steps in the walkthrough to connect to Google Cloud and activate Gemini Code Assist Standard or Enterprise.
- Change the Google Cloud project release channel We release Gemini Code Assist features in different release channels, either Generally Available or Preview.

### "Use the Gemini Code Assist chat \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat](https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat)
- Source ID: `site-docs-root-2`
- Final score: 283
- Re-rank relevance: N/A

Evidence snippets:
- If your chat history is no longer relevant to what you're trying to achieve, you can clear the chat history: VS Code In the Gemini Code Assist pane, click history Resume Previous Chat .
- Open Gemini Code Assist chat To open Gemini Code Assist chat in the IDE: VS Code In the activity bar of your IDE, click spark Gemini Code Assist .
- Gemini Code Assist chat lets you write natural language statements or questions (called prompts ) to get in-depth explanations of your code, suggested actions, or guided workflows that help you complete tasks quickly and efficiently without leaving the IDE.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Use the Gemini Code Assist chat Stay organized with collections Save and categorize content based on your preferences.

