---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.491Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Versions and environments"
feature_slug: "versions-and-environments"
latest_feature_date: "2020-02-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-versions"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-validation"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/continuous-tests"
keywords:
  - "versions"
  - "environments"
  - "dialogflow"
  - "supports"
  - "managing"
  - "agent"
  - "releases"
  - "let"
---

# Versions and environments

Product: Dialogflow
Coverage: LOW

## Step 02 Summary

Dialogflow supports versions and environments for managing agent releases; Versions and Environments let you manage agent versions and deployment environments.

## Extended Definition

Dialogflow supports versions and environments for managing agent releases; Versions and Environments let you manage agent versions and deployment environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/agents-versions](https://docs.cloud.google.com/dialogflow/es/docs/agents-versions)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-validation](https://docs.cloud.google.com/dialogflow/es/docs/agents-validation)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/continuous-tests](https://docs.cloud.google.com/dialogflow/cx/docs/concept/continuous-tests)

## Supporting Pages

### Versions and environments \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-versions](https://docs.cloud.google.com/dialogflow/es/docs/agents-versions)
- Source ID: `site-iam-reference`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations The following limitations apply: Maximum number of environments per agent: 10 Maximum number of versions per agent: 1000 Previous arrow back Prebuilt agents Next Multilingual agents arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, the following endpoint uses the "development" environment with an unspecified user: "https://dialogflow.googleapis.com/v2/projects/my-project-id/agent/environments/development/users/-/sessions/123456789:detectIntent" Environment-specific settings Fulfillment and text-to-speech are configured by the environment, so the agent will use the environment's settings for these features.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Versions and environments Stay organized with collections Save and categorize content based on your preferences.
- You can create multiple versions of your agent and publish them to separate environments.

### Continuous tests and deployment \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/continuous-tests](https://docs.cloud.google.com/dialogflow/cx/docs/concept/continuous-tests)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to the Environment API reference Select a protocol and version for the Environment reference: Protocol V3 V3beta1 REST Environment resource Environment resource RPC Environment interface Environment interface C++ EnvironmentsClient Not available C# EnvironmentsClient Not available Go EnvironmentsClient Not available Java EnvironmentsClient EnvironmentsClient Node.js EnvironmentsClient EnvironmentsClient PHP Not available Not available Python EnvironmentsClient EnvironmentsClient Ruby Not available Not available Close Previous arrow back Experiments Next Conversation profiles arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Continuous tests and deployment Stay organized with collections Save and categorize content based on your preferences.
- The continuous tests feature automatically runs a set of test cases configured for an environment to verify the intended behavior of the flow versions in that environment.
- Manage continuous tests and deployment To manage continuous tests and deployment: Console Open the Dialogflow CX console .

### Agent validation \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-validation](https://docs.cloud.google.com/dialogflow/es/docs/agents-validation)
- Source ID: `site-iam-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Validation results for versions and environments When viewing versions and environments , each agent version may have unique validation errors.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /agent/validationResult?languageCode=en" Select-Object -Expand Content You should receive a JSON response similar to the following: { "validationErrors": [ { "severity": "ERROR", "entries": [ "projects/my-project/agent/intents/58b44b2d-4967-4a81-b017-12623dcd5d28/parameters/bf6fdf55-b862-4101-b5b1-36f1423629d0" ], "errorMessage": "Parameter 'test' has an empty value." }, { "severity": "WARNING", "entries": [ "projects/my-project/agent/intents/271e3808-3c91-4e6b-89e8-47951abcec8d" ], "errorMessage": "Intent 'app.current.update' does not have enough unique training phrases.
- Before using any of the request data, make the following replacements: PROJECT ID : your Google Cloud project ID HTTP method and URL: GET https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /agent/validationResult?languageCode=en To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT ID " \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /agent/validationResult?languageCode=en" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

