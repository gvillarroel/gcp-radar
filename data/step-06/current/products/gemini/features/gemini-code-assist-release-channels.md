---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.634Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini Code Assist release channels"
feature_slug: "gemini-code-assist-release-channels"
latest_feature_date: "2025-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
keywords:
  - "gemini"
  - "code"
  - "assist"
  - "release"
  - "channels"
  - "standard"
  - "and"
  - "enterprise"
---

# Gemini Code Assist release channels

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini Code Assist Standard and Enterprise offer Preview and GA release channels to control access to features and models; Gemini Code Assist Standard and Enterprise offer Preview and GA release channels to control access to features and models.

## Extended Definition

Gemini Code Assist Standard and Enterprise offer Preview and GA release channels to control access to features and models; Gemini Code Assist Standard and Enterprise offer Preview and GA release channels to control access to features and models.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels](https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini](https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)

## Supporting Pages

### "Configure Gemini Code Assist release channels \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels](https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels)
- Source ID: `site-docs-root`
- Final score: 375
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions cloudaicompanion.releaseChannelSettings.create cloudaicompanion.releaseChannelSettings.delete cloudaicompanion.releaseChannelSettings.get cloudaicompanion.releaseChannelSettings.list cloudaicompanion.releaseChannelSettings.update cloudaicompanion.dataSharingWithGoogleSettings.create Configure release channels using an API: cloudaicompanion.settingBindings.releaseChannelSettingsCreate cloudaicompanion.settingBindings.releaseChannelSettingsDelete cloudaicompanion.settingBindings.releaseChannelSettingsGet cloudaicompanion.settingBindings.releaseChannelSettingsList cloudaicompanion.settingBindings.releaseChannelSettingsUpdate cloudaicompanion.settingBindings.releaseChannelSettingsUse Configure prompt and response sharing using an API: cloudaicompanion.settingBindings.dataSharingWithGoogleSettingsCreate cloudaicompanion.settingBindings.dataSharingWithGoogleSettingsUse View Gemini for Google Cloud administrator settings: cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings Configure Gemini Code Assist release channels Select one of the following options: Console In the Google Cloud console, go to the Admin for Gemini page.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Configure Gemini Code Assist release channels Stay organized with collections Save and categorize content based on your preferences.
- The output shows the releaseChannel set to RELEASE CHANNEL : { "name": "projects/ CONTAINER PROJECT NAME /locations/global/releaseChannelSettings/ RC SETTING ID ", "createTime": "2025-01-23T15:22:49.717166932Z", "updateTime": "2025-01-23T15:22:49.717166932Z", "releaseChannel": RELEASE CHANNEL } Create the release channel setting binding: curl \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-Type: application/json' \ -d '{ "target": "projects/ TARGET PROJECT NAME ", "product": "GEMINI CODE ASSIST" }' \ -X POST "https://cloudaicompanion.googleapis.com/v1/projects/ CONTAINER PROJECT NAME /locations/global/releaseChannelSettings/ RC SETTING ID /settingBindings?setting binding id= RC BINDING ID " Replace the following: TARGET PROJECT NAME : the target project to which the binding should be bound.
- Users in your organization who use Gemini Code Assist in their local IDE can use features and models based on the release channel configured for the project.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 367
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- Any custom roles that you create need the following permissions for you to access Gemini Code Assist Standard and Enterprise: cloudaicompanion.companions.generateChat cloudaicompanion.companions.generateCode cloudaicompanion.instances.completeCode cloudaicompanion.instances.completeTask cloudaicompanion.instances.generateCode cloudaicompanion.instances.generateText cloudaicompanion.instances.exportMetrics cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings serviceusage.services.enable Assign and manage licenses.
- Optional: Configure VPC Service Controls If your organization has a service perimeter, then you must add the following resources to your perimeter: Gemini for Google Cloud API Gemini Code Assist API If you are using Gemini Code Assist Standard or Enterprise from outside of your service perimeter, then you also need to modify the ingress policy to allow access to those services.
- Before you can use services available to users with Gemini Code Assist Standard or Enterprise licenses, your team needs to perform the setup steps that are described in this document: Note: An administrator typically performs steps 1-4.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini](https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 347
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- Any custom roles that you create need the following permissions for you to access Gemini Code Assist Standard and Enterprise: cloudaicompanion.companions.generateChat cloudaicompanion.companions.generateCode cloudaicompanion.instances.completeCode cloudaicompanion.instances.completeTask cloudaicompanion.instances.generateCode cloudaicompanion.instances.generateText cloudaicompanion.instances.exportMetrics cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings serviceusage.services.enable Assign and manage licenses.
- Optional: Configure VPC Service Controls If your organization has a service perimeter, then you must add the following resources to your perimeter: Gemini for Google Cloud API Gemini Code Assist API If you are using Gemini Code Assist Standard or Enterprise from outside of your service perimeter, then you also need to modify the ingress policy to allow access to those services.
- Before you can use services available to users with Gemini Code Assist Standard or Enterprise licenses, your team needs to perform the setup steps that are described in this document: Note: An administrator typically performs steps 1-4.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 337
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Code with Gemini Code Assist Standard and Enterprise Stay organized with collections Save and categorize content based on your preferences.
- Before you begin VS Code Set up Gemini Code Assist Standard or Enterprise , if you haven't already.
- IntelliJ Set up Gemini Code Assist Standard or Enterprise , if you haven't already.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.

