---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.466Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Presto JDBC driver update"
feature_slug: "presto-jdbc-driver-update"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/artifact"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/search_artifacts"
keywords:
  - "presto"
  - "jdbc"
  - "driver"
  - "update"
  - "was"
  - "updated"
  - "version"
  - "291"
---

# Presto JDBC driver update

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Presto JDBC driver was updated to version 0.291 for connections to PrestoDB.

## Extended Definition

The Presto JDBC driver was updated to version 0.291 for connections to PrestoDB.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/artifact](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/artifact)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/search_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/search_artifacts)

## Supporting Pages

### Create or update artifacts \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The version must be provided for any updates to an existing artifact. namespace lock string Artifact storage namespace. created at lock string Timestamp when this artifact was created. updated at lock string Timestamp when this artifact was updated. value size lock integer Size (in bytes) of the stored value. created by userid lock string User id of the artifact creator. updated by userid lock string User id of the artifact updater.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],[]]
- The version must be provided for any updates to an existing artifact. query HTTP Query Expand HTTP Query definition... fields string Comma-delimited names of fields to return in responses.
- Omit for all fields Response 200: Created or updated artifacts Datatype Description (array) Artifact [] key string Key of value to store.

### Get one or more artifacts \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/artifact](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/artifact)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The version must be provided for any updates to an existing artifact. namespace lock string Artifact storage namespace. created at lock string Timestamp when this artifact was created. updated at lock string Timestamp when this artifact was updated. value size lock integer Size (in bytes) of the stored value. created by userid lock string User id of the artifact creator. updated by userid lock string User id of the artifact updater.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],[]]
- Omit for all fields limit integer Number of results to return. (used with offset) offset integer Number of results to skip before returning any. (used with limit) tally boolean Return the full count of results in the X-Total-Count response header. (Slight performance hit.) Response 200: Created or updated artifacts Datatype Description (array) Artifact [] key string Key of value to store.
- Needed to set application/json content types, which are analyzed as plain text. version lock integer Version number of the stored value.

### Search artifacts \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/search_artifacts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/search_artifacts)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The version must be provided for any updates to an existing artifact. namespace lock string Artifact storage namespace. created at lock string Timestamp when this artifact was created. updated at lock string Timestamp when this artifact was updated. value size lock integer Size (in bytes) of the stored value. created by userid lock string User id of the artifact creator. updated by userid lock string User id of the artifact updater.
- Omit for all fields key string Key pattern to match user ids string Ids of users who created or updated the artifact (comma-delimited list) min size integer Minimum storage size of the artifact max size integer Maximum storage size of the artifact limit integer Number of results to return. (used with offset) offset integer Number of results to skip before returning any. (used with limit) tally boolean Return the full count of results in the X-Total-Count response header. (Slight performance hit.) Response 200: Artifacts Datatype Description (array) Artifact [] key string Key of value to store.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],[]]
- Needed to set application/json content types, which are analyzed as plain text. version lock integer Version number of the stored value.

