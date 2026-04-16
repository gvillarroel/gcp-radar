---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.663Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "VS Code Gemini Code Assist code transformation"
feature_slug: "vs-code-gemini-code-assist-code-transformation"
latest_feature_date: "2024-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist"
keywords:
  - "vs"
  - "code"
  - "gemini"
  - "assist"
  - "transformation"
  - "the"
  - "extension"
  - "now"
---

# VS Code Gemini Code Assist code transformation

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

The VS Code Gemini Code Assist extension now supports code transformation and code generation from prompts anywhere in a file.

## Extended Definition

The VS Code Gemini Code Assist extension now supports code transformation and code generation from prompts anywhere in a file.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist)

## Supporting Pages

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 339
- Re-rank relevance: N/A

Evidence snippets:
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- To prompt Gemini Code Assist with code transformation, follow these steps: VS Code In your code file, on a new line, press Control+I (for Windows and Linux) or Command+I (for macOS) to open the Gemini Code Assist Quick Pick menu.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 307
- Re-rank relevance: N/A

Evidence snippets:
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Toggle automatic outline generation To toggle automatic Gemini Code Assist outline generation of your code files, do the following: VS Code Navigate to Settings > User > Extensions > Gemini Code Assist .
- To change the default setting, perform the following tasks: VS Code In your IDE, navigate to Settings > Extensions Gemini Code Assist .
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 298
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- If you prefer to follow the Code with Gemini Code Assist walkthrough directly in your IDE, click Launch VS Code and follow the steps in the walkthrough to connect to Google Cloud and activate Gemini Code Assist Standard or Enterprise.
- You can further configure your Gemini Code Assist installation by specifying your preferences using the top-level application taskbar: navigate to Code > Settings > Settings Extensions and search for Gemini Code Assist .
- After the extension has successfully installed, Gemini Code Assist appears in the activity bar and is ready for use.

### "Use pre-release features in Gemini Code Assist for VS Code \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist)
- Source ID: `site-docs-root-2`
- Final score: 286
- Re-rank relevance: N/A

Evidence snippets:
- This page describes how to use pre-release features of Gemini Code Assist for VS Code on the insiders release channel.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Use pre-release features in Gemini Code Assist for VS Code Stay organized with collections Save and categorize content based on your preferences.
- Comment out or remove the following line of your user settings JSON: "geminicodeassist.updateChannel": "Insiders", Save your user settings.
- Add the following line to your user settings JSON: "geminicodeassist.updateChannel": "Insiders", Save your user settings.

