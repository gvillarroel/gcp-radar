---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.644Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Organization policy testing in Gemini Cloud Assist chat"
feature_slug: "organization-policy-testing-in-gemini-cloud-assist-chat"
latest_feature_date: "2025-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
keywords:
  - "organization"
  - "policy"
  - "testing"
  - "in"
  - "gemini"
  - "assist"
  - "chat"
  - "can"
---

# Organization policy testing in Gemini Cloud Assist chat

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini Cloud Assist can test organization policies generated in the Cloud Assist chat.

## Extended Definition

Gemini Cloud Assist can test organization policies generated in the Cloud Assist chat.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini](https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 319
- Re-rank relevance: N/A

Evidence snippets:
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- Regenerate a prompt response If preferred, you can regenerate a different response to your most recent prompt by following these steps: VS Code In the Gemini Code Assist Chat pane, at the bottom of your most recent response, click replay Regenerate response .
- Revert to a checkpoint in chat After applying the changes that Gemini Code Assist generates based on your prompt, you can choose to revert the modified code file(s) to a certain checkpoint, which reverts all of the applied changes to the code file(s).
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 313
- Re-rank relevance: N/A

Evidence snippets:
- Optional: Configure VPC Service Controls If your organization has a service perimeter, then you must add the following resources to your perimeter: Gemini for Google Cloud API Gemini Code Assist API If you are using Gemini Code Assist Standard or Enterprise from outside of your service perimeter, then you also need to modify the ingress policy to allow access to those services.
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- Any custom roles that you create need the following permissions for you to access Gemini Code Assist Standard and Enterprise: cloudaicompanion.companions.generateChat cloudaicompanion.companions.generateCode cloudaicompanion.instances.completeCode cloudaicompanion.instances.completeTask cloudaicompanion.instances.generateCode cloudaicompanion.instances.generateText cloudaicompanion.instances.exportMetrics cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings serviceusage.services.enable Assign and manage licenses.
- A user in your organization is automatically assigned a license when they use Gemini Code Assist within a supported IDE, provided all the following conditions are met: The user has selected a project that is associated with the subscription's billing account.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini](https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Configure VPC Service Controls If your organization has a service perimeter, then you must add the following resources to your perimeter: Gemini for Google Cloud API Gemini Code Assist API If you are using Gemini Code Assist Standard or Enterprise from outside of your service perimeter, then you also need to modify the ingress policy to allow access to those services.
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- Any custom roles that you create need the following permissions for you to access Gemini Code Assist Standard and Enterprise: cloudaicompanion.companions.generateChat cloudaicompanion.companions.generateCode cloudaicompanion.instances.completeCode cloudaicompanion.instances.completeTask cloudaicompanion.instances.generateCode cloudaicompanion.instances.generateText cloudaicompanion.instances.exportMetrics cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings serviceusage.services.enable Assign and manage licenses.
- A user in your organization is automatically assigned a license when they use Gemini Code Assist within a supported IDE, provided all the following conditions are met: The user has selected a project that is associated with the subscription's billing account.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-root`
- Final score: 307
- Re-rank relevance: N/A

Evidence snippets:
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini 3 in Gemini Code Assist Stay organized with collections Save and categorize content based on your preferences.
- Use Gemini 3 in IntelliJ If Gemini 3 is available to you, it will automatically be selected for agent mode, chat and code generation.
- Use Gemini 3 in VS Code If Gemini 3 is available to you, it will automatically be selected for chat and code generation.

