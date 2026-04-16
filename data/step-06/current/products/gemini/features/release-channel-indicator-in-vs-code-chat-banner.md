---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.638Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Release channel indicator in VS Code chat banner"
feature_slug: "release-channel-indicator-in-vs-code-chat-banner"
latest_feature_date: "2025-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels"
keywords:
  - "release"
  - "channel"
  - "indicator"
  - "in"
  - "vs"
  - "code"
  - "chat"
  - "banner"
---

# Release channel indicator in VS Code chat banner

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

VS Code Gemini Code Assist shows the configured release channel in the chat banner for users on an experimental channel with a Standard or Enterprise license; VS Code Gemini Code Assist shows the configured release channel in the chat banner for users on an experimental channel with a Standard or Enterprise license.

## Extended Definition

VS Code Gemini Code Assist shows the configured release channel in the chat banner for users on an experimental channel with a Standard or Enterprise license; VS Code Gemini Code Assist shows the configured release channel in the chat banner for users on an experimental channel with a Standard or Enterprise license.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels](https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels)

## Supporting Pages

### "Use pre-release features in Gemini Code Assist for VS Code \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist)
- Source ID: `site-docs-root-2`
- Final score: 285
- Re-rank relevance: N/A

Evidence snippets:
- This page describes how to use pre-release features of Gemini Code Assist for VS Code on the insiders release channel.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Use pre-release features in Gemini Code Assist for VS Code Stay organized with collections Save and categorize content based on your preferences.
- Use the standard release channel To use the standard release channel instead of the insiders build, follow these steps: In your IDE, open the Command palette ( Cmd + Shift + P ) and then select Open User Settings JSON .
- Comment out or remove the following line of your user settings JSON: "geminicodeassist.updateChannel": "Insiders", Save your user settings.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Use Gemini 3 in VS Code If Gemini 3 is available to you, it will automatically be selected for chat and code generation.
- Use Gemini 3 in IntelliJ If Gemini 3 is available to you, it will automatically be selected for agent mode, chat and code generation.
- Gemini 3.1 Pro and Gemini 3.0 Flash are available to Gemini Code Assist users in VS Code and IntelliJ.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- Change the Google Cloud project release channel We release Gemini Code Assist features in different release channels, either Generally Available or Preview.
- You can change the Gemini Code Assist release channel to the Preview channel or back to the Generally Available channel at any time.
- When you set up Gemini Code Assist, your project is automatically set to the Generally Available release channel.

### "Configure Gemini Code Assist release channels \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels](https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions cloudaicompanion.releaseChannelSettings.create cloudaicompanion.releaseChannelSettings.delete cloudaicompanion.releaseChannelSettings.get cloudaicompanion.releaseChannelSettings.list cloudaicompanion.releaseChannelSettings.update cloudaicompanion.dataSharingWithGoogleSettings.create Configure release channels using an API: cloudaicompanion.settingBindings.releaseChannelSettingsCreate cloudaicompanion.settingBindings.releaseChannelSettingsDelete cloudaicompanion.settingBindings.releaseChannelSettingsGet cloudaicompanion.settingBindings.releaseChannelSettingsList cloudaicompanion.settingBindings.releaseChannelSettingsUpdate cloudaicompanion.settingBindings.releaseChannelSettingsUse Configure prompt and response sharing using an API: cloudaicompanion.settingBindings.dataSharingWithGoogleSettingsCreate cloudaicompanion.settingBindings.dataSharingWithGoogleSettingsUse View Gemini for Google Cloud administrator settings: cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings Configure Gemini Code Assist release channels Select one of the following options: Console In the Google Cloud console, go to the Admin for Gemini page.
- The output shows the releaseChannel set to RELEASE CHANNEL : { "name": "projects/ CONTAINER PROJECT NAME /locations/global/releaseChannelSettings/ RC SETTING ID ", "createTime": "2025-01-23T15:22:49.717166932Z", "updateTime": "2025-01-23T15:22:49.717166932Z", "releaseChannel": RELEASE CHANNEL } Create the release channel setting binding: curl \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-Type: application/json' \ -d '{ "target": "projects/ TARGET PROJECT NAME ", "product": "GEMINI CODE ASSIST" }' \ -X POST "https://cloudaicompanion.googleapis.com/v1/projects/ CONTAINER PROJECT NAME /locations/global/releaseChannelSettings/ RC SETTING ID /settingBindings?setting binding id= RC BINDING ID " Replace the following: TARGET PROJECT NAME : the target project to which the binding should be bound.
- When you enable the Preview release channel on a project, you agree on behalf of the customer that all usage of Gemini Code Assist in that project is subject to the Pre-GA Offering Terms of the Google Cloud Platform Specific Service Terms .
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Configure Gemini Code Assist release channels Stay organized with collections Save and categorize content based on your preferences.

