---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.858Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee Emulator version selection in VS Code Insiders"
feature_slug: "apigee-emulator-version-selection-in-vs-code-insiders"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test"
keywords:
  - "emulator version selection"
  - "select emulator version"
  - "local development emulator"
  - "Apigee Insiders build"
  - "VS Code Insiders"
  - "emulator version"
  - "Apigee Insiders"
  - "Apigee Emulator"
---

# Apigee Emulator version selection in VS Code Insiders

Product: Apigee X
Coverage: LOW

## Step 02 Summary

The Apigee Insiders build for VS Code now supports using a different version of the Apigee Emulator for local development.

## Extended Definition

In the provided Apigee VS Code local-development test workflow, users can export and deploy test resources to an Apigee Emulator, and the system prompts them to choose among multiple running emulator containers. This supports selecting the target emulator instance used for local API testing, but the provided excerpt does not explicitly confirm any feature for selecting a specific emulator version.

## Evidence Summary

The cited page documents local API test steps in VS Code and notes a selection prompt when multiple Apigee Emulator containers are running, but it does not explicitly reference Insiders build behavior or emulator version selection.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test)

## Supporting Pages

### Step 4: Test your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: The page is a VS Code local testing tutorial for Apigee and mentions the Apigee Emulator workflow, but it does not describe choosing emulator versions or the Insiders build.

Evidence snippets:
- The developerapps.json file is opened in the editor with the new app configured: [ { "attributes": [ { "name": "sample attribute 0", "value": "sample attribute value 0" } ], "developerEmail": "ahamilton@example.com", "name": "myapp", "displayName": "myapp", "callbackUrl": "", "apiProducts": [ "myproduct" ], "expiryType": "never" } ] Export the test resources to the Apigee Emulator.
- Note: If multiple containers for the Apigee Emulator are running, you are prompted to select the container to which you want to deploy the environment.
- The active test resources appears in the Apigee Emulators section, as shown in the following figure.
- You can configure the port values, as described in Manage the Apigee Emulator.

