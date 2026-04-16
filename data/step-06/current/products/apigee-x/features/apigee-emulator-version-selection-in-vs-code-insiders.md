---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.767Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee Emulator version selection in VS Code Insiders"
feature_slug: "apigee-emulator-version-selection-in-vs-code-insiders"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/quickstart-version"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test"
  - "https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions"
keywords:
  - "selection"
  - "insiders"
  - "build"
  - "emulator"
  - "version"
  - "code"
---

# Apigee Emulator version selection in VS Code Insiders

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The Apigee Insiders build for VS Code now supports using a different version of the Apigee Emulator for local development.

## Extended Definition

The Apigee Insiders build for VS Code now supports using a different version of the Apigee Emulator for local development.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-version](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-version)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test)
- [https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions](https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions)

## Supporting Pages

### Create an API version \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-version](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-version)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Next step Create and edit attributes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application development Apigee Guides Send feedback Create an API version Stay organized with collections Save and categorize content based on your preferences.
- Fundamentally, versions help you group and organize your APIs based on underlying sets of operations, deployments, and other attributes.To learn more, see Versions overview .

### Step 4: Test your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- The developerapps.json file is opened in the editor with the new app configured: [ { "attributes": [ { "name": "sample attribute 0", "value": "sample attribute value 0" } ], "developerEmail": "ahamilton@example.com", "name": "myapp", "displayName": "myapp", "callbackUrl": "", "apiProducts": [ "myproduct" ], "expiryType": "never" } ] Export the test resources to the Apigee Emulator.
- To test the deployed helloworld API, click the Terminal tab in Apigee in Cloud Code and enter the following curl call: curl 0:8998/helloworld The following error message is displayed: Because you enabled API key-based authentication when creating the API proxy, you need to pass an API key using the apikey query parameter when calling the API.
- 1 2 3 4 (NEXT) Step 5: Change the target endpoint 6 7 8 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Add IAM conditions \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions](https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Default role-based non-conditional access to other API hub resources. ( resource.service == "apihub.googleapis.com" && resource.type == "apihub.googleapis.com/Api" && resource.name.startsWith("projects/ PROJECT ID /locations/ LOCATION /apis/ API1 ID PREFIX ") ) ( resource.service == "apihub.googleapis.com" && resource.type == "apihub.googleapis.com/Version" && resource.name == "projects/ PROJECT ID /locations/ LOCATION /apis/ API2 ID /versions/ API2 VERSION ID " ) ( resource.service == "apihub.googleapis.com" && resource.type == "apihub.googleapis.com/Spec" && resource.name == "projects/ PROJECT ID /locations/ LOCATION /apis/ API3 ID /versions/ API3 VERSION ID /specs/ API3 SPEC ID " ) ( resource.type != "apihub.googleapis.com/Api" && resource.type != "apihub.googleapis.com/Version" && resource.type != "apihub.googleapis.com/Spec" && resource.type != "apihub.googleapis.com/ApiOperation" && resource.type != "apihub.googleapis.com/Definition" ) Replace the following: PROJECT ID : The ID of your Google Cloud project.
- Default role-based non-conditional access to other API hub resources. ( resource.name.startsWith("projects/ PROJECT ID /locations/ LOCATION /apis/ API ID PREFIX ") resource.matchTagId("tagKeys/ TAG KEY ", "tagValues/ TAG VALUE ") ( resource.type != "apihub.googleapis.com/Api" && resource.type != "apihub.googleapis.com/Version" && resource.type != "apihub.googleapis.com/Spec" && resource.type != "apihub.googleapis.com/ApiOperation" && resource.type != "apihub.googleapis.com/Definition" ) ) Replace the following: PROJECT ID : The ID of your Google Cloud project.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

