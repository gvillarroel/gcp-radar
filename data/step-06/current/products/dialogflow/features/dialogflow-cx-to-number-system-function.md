---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.422Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX TO_NUMBER system function"
feature_slug: "dialogflow-cx-to-number-system-function"
latest_feature_date: "2023-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "dialogflow"
  - "cx"
  - "number"
  - "system"
  - "provides"
---

# Dialogflow CX TO_NUMBER system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides the TO_NUMBER system function.

## Extended Definition

Dialogflow CX provides the TO_NUMBER system function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- For example: Annotated training phrase Semantic meaning of annotated text I am 7 years old A person's age The contract is valid for 7 years A time duration Dialogflow CX's machine learning models consider semantic meaning when matching system entities.
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .
- Instead, you should select "7" for the annotation and use the @sys.number system entity.
- The following lists the conversation control granularity of agent resources in increasing granularity order: Agents (one agent handles all conversations) Flows (one flow handles one or more related conversation topics) Pages (one page handles one or more related conversation turns) Routes (one route handles a user intent or condition check) Intent parameters versus form parameters The main way in which your system gets structured data from the end-user is with parameters .

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Agent settings Stay organized with collections Save and categorize content based on your preferences.
- For regular API calls, make sure the service account used to call Dialogflow CX is granted with "AutoML Predictor" role in your custom voice project.

