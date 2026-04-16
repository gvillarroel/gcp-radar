---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.412Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX IS_PHONE_NUMBER system function"
feature_slug: "dialogflow-cx-is-phone-number-system-function"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
keywords:
  - "dialogflow"
  - "cx"
  - "phone"
  - "number"
  - "system"
  - "provides"
---

# Dialogflow CX IS_PHONE_NUMBER system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides the IS_PHONE_NUMBER system function.

## Extended Definition

Dialogflow CX provides the IS_PHONE_NUMBER system function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Conversation Phone Number Or Builder com. google. cloud. dialogflow. v2.
- Telephony Connection Info The information about phone calls connected via phone gateway to the conversation. com. google. cloud. dialogflow. v2.
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- For example: Annotated training phrase Semantic meaning of annotated text I am 7 years old A person's age The contract is valid for 7 years A time duration Dialogflow CX's machine learning models consider semantic meaning when matching system entities.
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .
- Instead, you should select "7" for the annotation and use the @sys.number system entity.
- The following lists the conversation control granularity of agent resources in increasing granularity order: Agents (one agent handles all conversations) Flows (one flow handles one or more related conversation topics) Pages (one page handles one or more related conversation turns) Routes (one route handles a user intent or condition check) Intent parameters versus form parameters The main way in which your system gets structured data from the end-user is with parameters .

### Create a webhook service \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Context , request webhookRequest ) ( webhookResponse , error ) { // Create session parameters that are populated in the response . // This example hard codes values , but a real system // might look up this value in a database . p := map [ string ] any { "anomaly detect" : "false" , "purchase" : "device protection" , "purchase amount" : "12.25" , "bill without purchase" : "54.34" , "total bill" : "66.59" , "first month" : "January 1" , } // Build and return the response . response := webhookResponse { SessionInfo : sessionInfo { Parameters : p , }, } return response , nil } // validatePhoneLine handles same - named tag . func validatePhoneLine ( ctx context .
- Context , request webhookRequest ) ( webhookResponse , error ) { // Create session parameters that are populated in the response . // This example hard codes values , but a real system // might look up this value in a database . p := map [ string ] any { "domestic coverage" : "true" , "phone line verified" : "true" , } // Build and return the response . response := webhookResponse { SessionInfo : sessionInfo { Parameters : p , }, } return response , nil } // cruisePlanCoverage handles same - named tag . func cruisePlanCoverage ( ctx context .
- What is your phone number with us?
- ToLower ( destination ) // Hardcoded list of covered international monthly destinations coveredMonthly := map [ string ] bool { "anguilla" : true , "australia" : true , "brazil" : true , "canada" : true , "chile" : true , "england" : true , "france" : true , "india" : true , "japan" : true , "mexico" : true , "singapore" : true , } // Hardcoded list of covered international daily destinations coveredDaily := map [ string ] bool { "brazil" : true , "canada" : true , "chile" : true , "england" : true , "france" : true , "india" : true , "japan" : true , "mexico" : true , "singapore" : true , } // Check coverage coverage := "neither" , monthly := coveredMonthly [ destination ] , daily := coveredDaily [ destination ] if monthly && daily { coverage = "both" } else if monthly { coverage = "monthly only" } else if daily { coverage = "daily only" } // Create session parameters that are populated in the response . // This example hard codes values , but a real system // might look up this value in a database . p := map [ string ] any { "coverage" : coverage , } // Build and return the response . response := webhookResponse { SessionInfo : sessionInfo { Parameters : p , }, } return response , nil } // cheapestPlan handles same - named tag . func cheapestPlan ( ctx context .

