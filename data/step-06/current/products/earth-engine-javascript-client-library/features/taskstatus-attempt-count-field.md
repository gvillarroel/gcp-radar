---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.972Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "TaskStatus attempt count field"
feature_slug: "taskstatus-attempt-count-field"
latest_feature_date: "2020-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/apidocs"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-dictionary"
keywords:
  - "taskstatus"
  - "attempt"
  - "count"
  - "field"
  - "ee"
  - "includes"
  - "number"
  - "times"
---

# TaskStatus attempt count field

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

Ee.data.TaskStatus includes a field for the number of times a task was attempted.

## Extended Definition

Ee.data.TaskStatus includes a field for the number of times a task was attempted.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-dictionary](https://developers.google.com/earth-engine/apidocs/ee-algorithms-dictionary)

## Supporting Pages

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, if you have permission to view the plan configuration , the output contains: planMaxConcurrentExports , a number indicating the maximum number of batch tasks that can run in parallel across all users and projects that use the billing account. set To update the project's configuration, use the set sub-command.
- They may or may not be necessary, depending on your shell and platform.) To delete a property, set it to null without a type: earthengine asset set -p name=null projects/my-project/assets/asset id Date properties are just numbers that represent a number of milliseconds since the Unix epoch ( i.e. midnight on January 1st, 1970) and may be specified directly as a number or in one of the following formats: YYYY-MM-DD YYYY-MM-DDThh:mm:ss YYYY-MM-DDThh:mm:ss.f The time zone is assumed to be UTC.
- You may specify --max items number (or -m for short) to limit the number of items from each folder or collection you list: earthengine ls -m 10 projects/my-project/assets/my large collection Running the ls command with no arguments will list the top-level folders that you own. model Tool with which to manipulate TensorFlow saved models. model prepare Prepare a saved model for serving in Earth Engine.
- Before using this command, be sure to set a project using set project . get To view a project configuration, use the get sub-command: earthengine alpha project config get If you have permission to view the project's batch task settings , the output contains: maxConcurrentExports : a number indicating the maximum number of batch tasks that can run in parallel across all users for the given project.

### API Reference \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### ee.Algorithms.Dictionary \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-dictionary](https://developers.google.com/earth-engine/apidocs/ee-algorithms-dictionary)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

