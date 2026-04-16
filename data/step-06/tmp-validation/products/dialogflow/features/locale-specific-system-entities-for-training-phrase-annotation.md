---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.800Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Locale-specific System Entities for Training Phrase Annotation"
feature_slug: "locale-specific-system-entities-for-training-phrase-annotation"
latest_feature_date: "2018-12-18"
deprecation_date: "2018-12-18"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-design"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "annotation"
  - "locale"
  - "some"
  - "specific"
  - "training"
  - "phrase"
  - "entities"
  - "system"
---

# Locale-specific System Entities for Training Phrase Annotation

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Some locale-specific system entities were used to annotate training phrases; deprecated on 2018-12-18.

## Extended Definition

Some locale-specific system entities were used to annotate training phrases; deprecated on 2018-12-18.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following table shows good and bad ways to annotate with the @sys.date system entity: Good Bad September 7th departure September 7th departure Leaving on July 4 Leaving on July 4 Use semantically meaningful annotations for system entities The semantic meaning of a training phrase part selected for an annotation can be affected by the rest of the text in a training phrase.
- For example: Annotated training phrase Semantic meaning of annotated text I am 7 years old A person's age The contract is valid for 7 years A time duration Dialogflow CX's machine learning models consider semantic meaning when matching system entities.
- For example, consider end-user input like: "How can I make an international call with Plan A?" "Using international data roaming with Plan B." Do not create entity types for both the actions and the plans, like the following: Actions entity type Plans entity type "How can I make an international call" "Plan A" "Using international data roaming" "Plan B" Instead, you should use training phrases and intent matching to capture the actions and entities to capture the plans.
- Punctuation : For example, "can you please help?" and "can you please help!?" Annotation consistency The training phrase part selected for an annotation should include all of, and no more than, the text that is necessary to match an entity.

### "General agent design best practices \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you are providing time values that should be parsed as @sys.time system entities in training phrases, do not provide the same time in all training phrases.
- Review your training phrases and ensure that highlighted annotations are pointing to the correct entities .
- The semantic meaning of a training phrase part selected for an annotation can be affected by the rest of the text in a training phrase.
- Instead, you should use training phrases and intent matching to capture the actions and entities to capture the plans.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Therefore, we provide a resource view that does not return training phrases in the response by default. com. google. cloud. dialogflow. v2.
- Training Phrase Represents an example that the agent is trained on. com. google. cloud. dialogflow. v2.
- Type Represents different types of training phrases. com. google. cloud. dialogflow. v2.
- Builder Represents a part of a training phrase. com. google. cloud. dialogflow. v2.

