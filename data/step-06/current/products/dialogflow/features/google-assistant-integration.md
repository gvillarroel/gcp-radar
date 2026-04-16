---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.439Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Google Assistant integration"
feature_slug: "google-assistant-integration"
latest_feature_date: "2022-06-13"
deprecation_date: "2023-06-13"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/console"
  - "https://docs.cloud.google.com/dialogflow/es/docs/access-control"
  - "https://docs.cloud.google.com/dialogflow/docs/basics"
keywords:
  - "assistant"
  - "integration"
  - "dialogflow"
  - "es"
  - "integrates"
  - "conversational"
  - "experiences"
  - "deprecated"
---

# Google Assistant integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow ES integrates with Google Assistant for conversational experiences; deprecated on 2023-06-13.

## Extended Definition

Dialogflow ES integrates with Google Assistant for conversational experiences; deprecated on 2023-06-13.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/console](https://docs.cloud.google.com/dialogflow/es/docs/console)
- [https://docs.cloud.google.com/dialogflow/es/docs/access-control](https://docs.cloud.google.com/dialogflow/es/docs/access-control)
- [https://docs.cloud.google.com/dialogflow/docs/basics](https://docs.cloud.google.com/dialogflow/docs/basics)

## Supporting Pages

### Dialogflow Console overview \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/console](https://docs.cloud.google.com/dialogflow/es/docs/console)
- Source ID: `site-iam-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View and manage your Actions on Google : This permission lets you optionally deploy your Dialogflow agent to the Google Assistant and Actions on Google as a conversational action(s).
- With it, you can: Create agents that define the conversational experience Create intents that map user input to responses Create entities to extract useful data from user input Control conversation paths with contexts Add events that are triggered by occurrences outside of the conversation Integrate with other conversational platforms Implement fulfillment to connect your service when using integrations Analyze agent performance Test your agent via the simulator And more ...
- View and manage your Google Assistant voice commands, dialog, and grammar : This permission lets you optionally test your Dialogflow agent on the Google Assistant.
- See Google Assistant integration for more information.

### Access control \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/access-control](https://docs.cloud.google.com/dialogflow/es/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table describes some of these service agents: IAM email form Purpose service- project-number @gcp-sa-dialogflow.iam.gserviceaccount.com Used to connect your agent to the services that handle integration traffic. firebase-adminsdk- alphanum @ project-id .iam.gserviceaccount.com Used to connect your agent to the services that handle Google Assistant integration traffic. project-id @appspot.gserviceaccount.com Used to connect your agent to the services that handle Google Assistant integration traffic.
- If you have integrations with other Google Cloud resources, like Cloud Functions, and you don't want to grant full project access to an application, you must assign the Dialogflow API roles (Admin, Client, or Reader) in the Google Cloud console for IAM.
- Cannot access Inline Editor for Cloud Functions or Google Assistant integration.
- Access to the Dialogflow API requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloud-platform (access to all project resources) https://www.googleapis.com/auth/dialogflow (access to Dialogflow resources) Requests that involve Cloud Storage access Some Dialogflow requests access objects in Cloud Storage for reading or writing data.

### Dialogflow ES basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/basics](https://docs.cloud.google.com/dialogflow/docs/basics)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- User interactions with integrations Dialogflow integrates with many popular conversation platforms like Google Assistant, Slack, and Facebook Messenger.
- Other end-users might also ask: "What's the weather like right now?" "What's the temperature going to be in San Francisco tomorrow?" "What will the weather be on the 21st?" Even with these simple questions, you can see that conversational experiences are hard to implement.
- You must also directly interact with Dialogflow's API for each conversational turn to send end-user expressions and receive intent matches.
- Dialogflow handles this for you, so you can provide a high quality conversational end-user experience.

