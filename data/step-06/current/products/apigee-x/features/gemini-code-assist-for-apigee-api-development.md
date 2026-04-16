---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.730Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Gemini Code Assist for Apigee API development"
feature_slug: "gemini-code-assist-for-apigee-api-development"
latest_feature_date: "2025-05-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-workspace"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote"
keywords:
  - "integrates"
  - "development"
  - "gemini"
  - "assist"
  - "code"
---

# Gemini Code Assist for Apigee API development

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee now integrates Gemini Code Assist in VS Code for AI-assisted OpenAPI design, iteration, testing, and publishing to API hub and proxy generation.

## Extended Definition

Apigee now integrates Gemini Code Assist in VS Code for AI-assisted OpenAPI design, iteration, testing, and publishing to API hub and proxy generation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-workspace](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-workspace)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote)

## Supporting Pages

### Step 1: Create an Apigee workspace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-workspace](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-workspace)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- 1 (NEXT) Step 2: Create an API proxy 3 4 5 6 7 8 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application development Apigee Guides Send feedback Step 1: Create an Apigee workspace Stay organized with collections Save and categorize content based on your preferences.
- To access Apigee in Cloud Code, launch VS Code and click the Cloud Code icon in the Activity bar, then select the Apigee section.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview The semantic caching policies help Apigee users with LLM models to intelligently serve identical or semantically similar prompts efficiently, minimizing backend API calls and reducing resource consumption.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For this tutorial, set the Target (Existing API) to: REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /publishers/google/models/gemini-2.0-flash-001:generateContent Enter the following Semantic Cache URLs : Note: You can also add these URLs to the XML configuration in the Proxy editor on the Develop tab.
- Home Documentation Application development Apigee Guides Send feedback Get started with semantic caching policies Stay organized with collections Save and categorize content based on your preferences.

### "Step 8: Promote an archive to production \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a new prod environment in your local development environment: In Apigee in VS Code, position your cursor over the environments folder in the Apigee section and click .
- In the Terminal tab in Apigee VS Code, navigate to the myapigeeworkspace directory. cd myapigeeworkspace Run the following command: gcloud beta apigee archives deploy --environment=prod --labels=release=052021.1 The following provides an example of the response: Using Apigee organization dev Waiting for operation [ $OPERATION ID ] to complete...⠹ Run the following command to check the status of the operation, replacing $OPERATION ID with the operation ID returned in the previous call: gcloud beta apigee operations describe $OPERATION ID The following provides an example of the response.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation Application development Apigee Guides Send feedback Step 8: Promote an archive to production Stay organized with collections Save and categorize content based on your preferences.

