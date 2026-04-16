---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.657Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Autocomplete for development-mode libraries"
feature_slug: "autocomplete-for-development-mode-libraries"
latest_feature_date: "2012-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/libraries"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
keywords:
  - "autocomplete"
  - "development"
  - "mode"
  - "libraries"
  - "now"
  - "works"
  - "included"
  - "when"
---

# Autocomplete for development-mode libraries

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Autocomplete now works for included libraries when they are added in development mode.

## Extended Definition

Autocomplete now works for included libraries when they are added in development mode.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/libraries](https://developers.google.com/apps-script/guides/libraries)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Added the ability to support autocomplete for included libraries when they are included in development mode.
- Issue 1811 : The debugger can now step into libraries used in development mode.
- February 14, 2022 Feature Owners receive email alerts when someone outside the owner's organization edits a script project in the new integrated development environment (IDE).
- Change When an add-on is installed from the store, the onInstall() simple trigger is now passed an event parameter , e , which includes an authMode property.

### Libraries \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/libraries](https://developers.google.com/apps-script/guides/libraries)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's an example: / Raises a number to the given power , and returns the result . @ param { number } base the number we ' re raising to a power @ param { number } exp the exponent we ' re raising the base to @ return { number } the result of the exponential calculation / function power ( base, exp ) { ... } Resource scoping There are two types of resources when you are working with libraries: shared and not-shared.
- Best practices Here are some guidelines to follow when writing a library: Choose a meaningful name for your project since it's used as the default identifier when your library is included by others.
- Home Google Workspace Apps Script Guides Send feedback Libraries Stay organized with collections Save and categorize content based on your preferences.
- Although libraries can make development and maintenance more convenient, use them sparingly in projects where speed is critical.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Samples Send feedback Fact-check statements with an ADK AI agent and Gemini model Stay organized with collections Save and categorize content based on your preferences.
- Download this GitHub repository: Download In your preferred local development environment, extract the downloaded archive file and open the adk-samples/python/agents/llm-auditor directory. unzip adk-samples-main.zip cd adk-samples-main/python/agents/llm-auditor Create a new Cloud Storage bucket dedicated to the ADK agent. gcloud storage buckets create gs:// CLOUD STORAGE BUCKET NAME --project = PROJECT ID --location = PROJECT LOCATION Replace the following: CLOUD STORAGE BUCKET NAME with a unique bucket name you want to use.
- Next steps Plan travels with an AI agent accessible across Google Workspace Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and add ons Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and add ons Custom functions in Sheets Extending Sheets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Google Cloud console navigates to the Dashboard page and your project is created within a few minutes. gcloud CLI In one of the following development environments, access the Google Cloud CLI ( gcloud ): Cloud Shell : To use an online terminal with the gcloud CLI already set up, activate Cloud Shell.

