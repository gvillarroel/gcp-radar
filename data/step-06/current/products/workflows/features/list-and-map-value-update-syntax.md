---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.528Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "List and map value update syntax"
feature_slug: "list-and-map-value-update-syntax"
latest_feature_date: "2021-06-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview"
  - "https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run"
keywords:
  - "updating"
  - "update"
  - "value"
  - "syntax"
  - "list"
  - "supports"
---

# List and map value update syntax

Product: Workflows
Coverage: LOW

## Step 02 Summary

Workflows supports syntax for updating list values and map values.

## Extended Definition

Workflows supports syntax for updating list values and map values.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)
- [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list)
- [https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run](https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run)

## Supporting Pages

### Standard library overview \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview](https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview)
- Source ID: `site-api-reference-required-2`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Functions in() Checks whether a given key is present in a list or map. keys() Accepts an attribute of type map and returns a list of key elements in the map. len() Computes the length of value according to its type.
- Functions decode Decodes given data to string, assuming the specified character set. encode Encodes given text to bytes, using the specified character set. find all Finds the index of all instances of a substring in a string. find all regex Finds all matches of a regular expression in a string. match regex Reports whether a string contains a match of a regular expression. replace all Replaces all instances of a substring with a new string. replace all regex Replaces all matches of a regular expression with a new string. split Splits the source string into a list of all substrings between each instance of the separator. substring Extracts the substring between two zero-based indexes of a source string. to lower Returns a string with all Unicode letters mapped to their lowercase. to upper Returns a string with all Unicode letters mapped to their uppercase. url decode Returns a string with pluses and percent-escaped characters converted to UTF-8. url encode Returns a string with percent-encoded reserved characters, including spaces. url encode plus Returns a string with percent-encoded reserved characters, and spaces replaced by pluses ( + ).
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Functions get env Retrieves the value of the specified environment variable. log Writes one of data , text , or json to the log at specified severity. now Returns Unix time, as a floating-point number. sleep Suspends execution for the given number of seconds. sleep until Suspends execution until the given time.

### "Use Workflows with Cloud Run and Cloud Run functions tutorial \_|\_ Google\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run](https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to grant roles . gcloud services enable artifactregistry.googleapis.com cloudbuild.googleapis.com run.googleapis.com cloudfunctions.googleapis.com storage.googleapis.com workflows.googleapis.com Update the Google Cloud CLI components: gcloud components update If you are running commands inside Cloud Shell, you are already authenticated with the gcloud CLI; otherwise, sign in using your account: gcloud auth login Set the default location used in this tutorial: gcloud config set project PROJECT ID export REGION = REGION gcloud config set functions/region ${ REGION } gcloud config set run/region ${ REGION } gcloud config set workflows/location ${ REGION } Replace REGION with the supported Workflows location of your choice.
- Remove the Google Cloud CLI default configurations you added during the tutorial setup: gcloud config unset functions/region gcloud config unset run/region gcloud config unset workflows/location gcloud config unset project What's next Learn more about Workflows Workflows syntax reference Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- You can try out the function with the following curl command: curl $( gcloud functions describe randomgen-function \ --gen2 \ --format = "value(serviceConfig.uri)" ) A number is randomly generated and returned.

### "Method: projects.locations.workflows.executions.list \_|\_ Workflows \_\

- URL: [https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list](https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list)
- Source ID: `site-api-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Values greater than the max value will be coerced down to it. pageToken string A page token, received from a previous executions.list call.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
- Format: projects/{project}/locations/{location}/workflows/{workflow} Authorization requires the following IAM permission on the specified resource parent : workflows.executions.list Query parameters Parameters pageSize integer Maximum number of executions to return per call.
- Home Documentation Application development Workflows Reference Send feedback Method: projects.locations.workflows.executions.list Stay organized with collections Save and categorize content based on your preferences.

