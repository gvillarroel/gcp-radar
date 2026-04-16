---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.748Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Google Assistant integration"
feature_slug: "google-assistant-integration"
latest_feature_date: "2022-06-13"
deprecation_date: "2023-06-13"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-mega"
  - "https://docs.cloud.google.com/dialogflow/es/docs/console"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "assistant"
  - "experiences"
  - "integrates"
  - "conversational"
  - "integration"
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

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- [https://docs.cloud.google.com/dialogflow/es/docs/console](https://docs.cloud.google.com/dialogflow/es/docs/console)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Dialogflow Console overview \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/console](https://docs.cloud.google.com/dialogflow/es/docs/console)
- Source ID: `site-iam-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With it, you can: Create agents that define the conversational experience Create intents that map user input to responses Create entities to extract useful data from user input Control conversation paths with contexts Add events that are triggered by occurrences outside of the conversation Integrate with other conversational platforms Implement fulfillment to connect your service when using integrations Analyze agent performance Test your agent via the simulator And more ...
- View and manage your Actions on Google : This permission lets you optionally deploy your Dialogflow agent to the Google Assistant and Actions on Google as a conversational action(s).
- See Google Assistant integration for more information.
- View and manage your Google Assistant voice commands, dialog, and grammar : This permission lets you optionally test your Dialogflow agent on the Google Assistant.

### Mega agents \_|\_ Dialogflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- Source ID: `site-iam-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- The Google Assistant integration cannot be used with mega agent.
- If you plan on using any integrations for the mega agent, the automatically created service- project-number @gcp-sa-dialogflow.iam.gserviceaccount.com service account for the mega agent's project must have a role on that project that includes permission to make detect intent calls.
- You can use the Dialogflow Messenger integration as an easy way to do this, or you could setup your desired integration for the mega agent prior to configuring sub-agents.
- Context lifespan When a context becomes active, the context lifespan normally determines how many conversational turns will occur before the context becomes inactive.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Human Agent Assistant Event Represents a notification sent to Cloud Pub/Sub subscribers for human agent assistant events in a specific conversation. com. google. cloud. dialogflow. v2.
- Browse Carousel Card Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing carousel com. google. cloud. dialogflow. v2.
- Builder Represents a notification sent to Cloud Pub/Sub subscribers for human agent assistant events in a specific conversation. com. google. cloud. dialogflow. v2.
- Builder Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing carousel com. google. cloud. dialogflow. v2.

