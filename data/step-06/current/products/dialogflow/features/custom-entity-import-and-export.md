---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.364Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Custom entity import and export"
feature_slug: "custom-entity-import-and-export"
latest_feature_date: "2024-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom"
  - "https://docs.cloud.google.com/dialogflow/es/docs/entities-export"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "custom"
  - "entity"
  - "import"
  - "export"
  - "dialogflow"
  - "cx"
  - "supports"
  - "importing"
---

# Custom entity import and export

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports importing and exporting custom entities.

## Extended Definition

Dialogflow CX supports importing and exporting custom entities.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom)
- [https://docs.cloud.google.com/dialogflow/es/docs/entities-export](https://docs.cloud.google.com/dialogflow/es/docs/entities-export)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Custom entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: folder entityTypes ⤷ folder Entity Type A ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type A.json ⤷ folder Entity Type B ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type B.json When importing entity types, there may be merge conflicts when the display name of an entity type in your existing agent matches that of an imported entity type.
- Export and import custom entities Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- The file format used for importing entity entries is the same as the format used for importing entity types.
- Create custom entities To create a custom entity: Console Open the Dialogflow CX console .

### Export and import entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/entities-export](https://docs.cloud.google.com/dialogflow/es/docs/entities-export)
- Source ID: `site-iam-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Export and import entities Stay organized with collections Save and categorize content based on your preferences.
- You can export and import entities to simplify creation or movement of large amounts of entity data.
- For example, the following are two map entity entries: "New York City", "New York City", "NYC", "New York City, USA" "Philadelphia", "Philadelphia", "Philly", "Philadelphia, USA" Export To export an entity: Hover your mouse over an entity and click the cloud download cloud download icon.
- Format The hand-editable import/export format is either JSON or CSV.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Input Config Represents the configuration of importing a set of conversation files in Google Cloud Storage. com. google. cloud. dialogflow. v2.
- Builder Represents the configuration of importing a set of conversation files in Google Cloud Storage. com. google. cloud. dialogflow. v2.
- Import Document Template The template used for importing documents. com. google. cloud. dialogflow. v2.
- Session entities can extend or replace custom entity types and only com. google. cloud. dialogflow. v2.

