---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.632Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Next Edit Predictions"
feature_slug: "next-edit-predictions"
latest_feature_date: "2025-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization"
keywords:
  - "next"
  - "edit"
  - "predictions"
  - "forecasts"
  - "the"
  - "code"
  - "suggestions"
  - "in"
---

# Next Edit Predictions

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Next Edit Predictions forecasts the next code suggestions in the current file in VS Code Gemini Code Assist.

## Extended Definition

Next Edit Predictions forecasts the next code suggestions in the current file in VS Code Gemini Code Assist.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get)
- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)

## Supporting Pages

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 329
- Re-rank relevance: N/A

Evidence snippets:
- While code completion only suggests changes at your cursor in a code file, Next Edit Predictions provide predicted code suggestions throughout the file, even in locations away from the cursor.
- To use Next Edit Predictions in your IDE, follow these steps: VS Code To begin using Next Edit Predictions, enable the setting: Navigate to settings Manage Settings .
- Now that you've enabled the setting, you can start using Next Edit Predictions in a code file by performing these steps: In your code file, start writing code.
- Now that you've enabled the setting, you can start using Next Edit Predictions in a code file by performing these steps: In your code file, start writing code.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- If Gemini Code Assist suggests multiple changes throughout your code file(s), click View above the suggestion and then click Next or Previous , to cycles through the other suggestions.
- The outline for the active file appears in the tab. (Optional): Click the Eye icon associated with the file outline to display the outline in-line in the code file itself. (Optional): Click the Eye icon that appears next to the Outline tab to display all available outlines in-line in their respective code files.
- You can also invoke the custom command with the in-editor prompt by performing the following tasks: In your code file, highlight the code that you want to modify, and press Alt+\ (for Windows and Linux) or Cmd+\ (for macOS) to open the Gemini Code Assist Quick Pick menu.
- Vim: Cannot accept or dismiss code generation suggestions unless in insert mode When using the Vim plugin in normal mode, you can't accept or dismiss code suggestions.

### "Method: projects.locations.codeToolsSettings.settingBindings.get \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-09 UTC."],[],[]]
- IAM Permissions Requires the following IAM permission on the name resource: cloudaicompanion.settingBindings.codeToolsSettingsGet For more information, see the IAM documentation .
- HTTP request GET https://cloudaicompanion.googleapis.com/v1/{name=projects/ /locations/ /codeToolsSettings/ /settingBindings/ } The URL uses gRPC Transcoding syntax.
- Home Documentation AI and ML Gemini for Google Cloud API and references Send feedback Method: projects.locations.codeToolsSettings.settingBindings.get Stay organized with collections Save and categorize content based on your preferences.

### "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- Optional: To delete the index, in a shell environment, use the gemini code-repository-indexes delete command : gcloud gemini code-repository-indexes delete INDEX NAME \ --location= REGION \ --project= PROJECT ID What's next Start using Gemini Code Assist: VS Code, IntelliJ, and other supported JetBrains IDEs: Code with Gemini Code Assist Cloud Shell Editor: Code with Gemini Code Assist Cloud Workstations: Code with Gemini Code Assist Learn how to use code customization and best practices.
- Code customization relies on an index to analyze and parse your repository for quicker code generation suggestions and lookups. resource "google gemini code repository index" "example" { location = " REGION " code repository index id = " INDEX NAME " } Replace the following: INDEX NAME : your index name.
- Subset of the index You can create multiple repository groups and assign IAM roles to different IAM principals. data "google iam policy" "foo" { binding { role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } } resource "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " policy data = data.google iam policy.foo.policy data } data "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " depends on = [ google gemini repository group iam policy.foo ] } You can also create a binding: resource "google gemini repository group iam binding" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } Replace the following: GROUP NAME : the repository group name you created in a preceding step to control access to your index using repository groups.
- You also can create a repository group with repositories defined in a JSON (or YAML) file, formatted as follows: JSON [ { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "main dev" }, { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "dev" } ] YAML - resource : REPOSITORY RESOURCE NAME branchPattern : main dev - resource : REPOSITORY RESOURCE NAME branchPattern : dev To create a repository group based on a JSON or YAML file, in a shell environment, use the gemini code-repository-indexes repository-groups create command : JSON gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .json YAML gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .yaml If preferred, you can encrypt and control your data with a customer-managed encryption key (CMEK) through Cloud Key Management Service .

