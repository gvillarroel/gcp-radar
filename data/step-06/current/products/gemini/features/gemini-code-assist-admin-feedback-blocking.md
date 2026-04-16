---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.655Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini Code Assist admin feedback blocking"
feature_slug: "gemini-code-assist-admin-feedback-blocking"
latest_feature_date: "2024-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels"
keywords:
  - "gemini"
  - "code"
  - "assist"
  - "admin"
  - "feedback"
  - "blocking"
  - "administrators"
  - "can"
---

# Gemini Code Assist admin feedback blocking

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Administrators can control whether developers can send Gemini Code Assist feedback.

## Extended Definition

Administrators can control whether developers can send Gemini Code Assist feedback.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels](https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels)

## Supporting Pages

### "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Configure Gemini Code Assist code customization Stay organized with collections Save and categorize content based on your preferences.
- Subset of the index You can create multiple repository groups and assign IAM roles to different IAM principals. data "google iam policy" "foo" { binding { role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } } resource "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " policy data = data.google iam policy.foo.policy data } data "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " depends on = [ google gemini repository group iam policy.foo ] } You can also create a binding: resource "google gemini repository group iam binding" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } Replace the following: GROUP NAME : the repository group name you created in a preceding step to control access to your index using repository groups.
- You also can create a repository group with repositories defined in a JSON (or YAML) file, formatted as follows: JSON [ { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "main dev" }, { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "dev" } ] YAML - resource : REPOSITORY RESOURCE NAME branchPattern : main dev - resource : REPOSITORY RESOURCE NAME branchPattern : dev To create a repository group based on a JSON or YAML file, in a shell environment, use the gemini code-repository-indexes repository-groups create command : JSON gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .json YAML gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .yaml If preferred, you can encrypt and control your data with a customer-managed encryption key (CMEK) through Cloud Key Management Service .
- You also can create a repository group with repositories defined in a JSON (or YAML) file, formatted as follows: JSON [ { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "main dev" }, { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "dev" } ] YAML - resource : REPOSITORY RESOURCE NAME branchPattern : main dev - resource : REPOSITORY RESOURCE NAME branchPattern : dev To create a repository group based on a JSON or YAML file, in a shell environment, use the gemini code-repository-indexes repository-groups create command : JSON gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .json YAML gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .yaml If preferred, you can encrypt and control your data with a customer-managed encryption key (CMEK) through Cloud Key Management Service .

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: N/A

Evidence snippets:
- After you set up Gemini Code Assist, you can view license assignments by navigating to the Admin for Gemini page, selecting your billing account, clicking Manage Gemini Code Assist Subscription , and then selecting the License management tab.
- Before you can use services available to users with Gemini Code Assist Standard or Enterprise licenses, your team needs to perform the setup steps that are described in this document: Note: An administrator typically performs steps 1-4.
- You can further configure your Gemini Code Assist installation by specifying your preferences using the top-level application taskbar: navigate to Code > Settings > Settings Extensions and search for Gemini Code Assist .
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Set up Gemini Code Assist Standard and Enterprise Stay organized with collections Save and categorize content based on your preferences.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Prompt Gemini Code Assist in a code file with a comment If you prefer, you can also prompt Gemini Code Assist in your code file with a comment by following these steps: VS Code On a new line, enter the comment Function to create a Cloud Storage bucket , and then press Enter (for Windows and Linux) or Return (for macOS).
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Code with Gemini Code Assist Standard and Enterprise Stay organized with collections Save and categorize content based on your preferences.

### "Configure Gemini Code Assist release channels \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels](https://docs.cloud.google.com/gemini/docs/codeassist/configure-release-channels)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions cloudaicompanion.releaseChannelSettings.create cloudaicompanion.releaseChannelSettings.delete cloudaicompanion.releaseChannelSettings.get cloudaicompanion.releaseChannelSettings.list cloudaicompanion.releaseChannelSettings.update cloudaicompanion.dataSharingWithGoogleSettings.create Configure release channels using an API: cloudaicompanion.settingBindings.releaseChannelSettingsCreate cloudaicompanion.settingBindings.releaseChannelSettingsDelete cloudaicompanion.settingBindings.releaseChannelSettingsGet cloudaicompanion.settingBindings.releaseChannelSettingsList cloudaicompanion.settingBindings.releaseChannelSettingsUpdate cloudaicompanion.settingBindings.releaseChannelSettingsUse Configure prompt and response sharing using an API: cloudaicompanion.settingBindings.dataSharingWithGoogleSettingsCreate cloudaicompanion.settingBindings.dataSharingWithGoogleSettingsUse View Gemini for Google Cloud administrator settings: cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings Configure Gemini Code Assist release channels Select one of the following options: Console In the Google Cloud console, go to the Admin for Gemini page.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Configure Gemini Code Assist release channels Stay organized with collections Save and categorize content based on your preferences.
- Users in your organization who use Gemini Code Assist in their local IDE can use features and models based on the release channel configured for the project.
- Lets you access certain preview features for Gemini Code Assist and, optionally, provide feedback and usage data to help Google improve future releases.

