---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.414Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX ROUND system function"
feature_slug: "dialogflow-cx-round-system-function"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook"
keywords:
  - "dialogflow"
  - "cx"
  - "round"
  - "system"
  - "provides"
---

# Dialogflow CX ROUND system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides the ROUND system function.

## Extended Definition

Dialogflow CX provides the ROUND system function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook)

## Supporting Pages

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- For example: Annotated training phrase Semantic meaning of annotated text I am 7 years old A person's age The contract is valid for 7 years A time duration Dialogflow CX's machine learning models consider semantic meaning when matching system entities.
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .
- Note: Some system entities are not available when you regionalize your agent deployment, and @sys.any is sometimes recommended as a workaround.
- The following lists the conversation control granularity of agent resources in increasing granularity order: Agents (one agent handles all conversations) Flows (one flow handles one or more related conversation topics) Pages (one page handles one or more related conversation turns) Routes (one route handles a user intent or condition check) Intent parameters versus form parameters The main way in which your system gets structured data from the end-user is with parameters .

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.

### Create a webhook service \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/webhook)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ToLower ( destination ) // Hardcoded list of covered international monthly destinations coveredMonthly := map [ string ] bool { "anguilla" : true , "australia" : true , "brazil" : true , "canada" : true , "chile" : true , "england" : true , "france" : true , "india" : true , "japan" : true , "mexico" : true , "singapore" : true , } // Hardcoded list of covered international daily destinations coveredDaily := map [ string ] bool { "brazil" : true , "canada" : true , "chile" : true , "england" : true , "france" : true , "india" : true , "japan" : true , "mexico" : true , "singapore" : true , } // Check coverage coverage := "neither" , monthly := coveredMonthly [ destination ] , daily := coveredDaily [ destination ] if monthly && daily { coverage = "both" } else if monthly { coverage = "monthly only" } else if daily { coverage = "daily only" } // Create session parameters that are populated in the response . // This example hard codes values , but a real system // might look up this value in a database . p := map [ string ] any { "coverage" : coverage , } // Build and return the response . response := webhookResponse { SessionInfo : sessionInfo { Parameters : p , }, } return response , nil } // cheapestPlan handles same - named tag . func cheapestPlan ( ctx context .
- Column ( 0 , & c ) if err != nil { return webhookResponse {}, err } if c { covered = "true" } } } else { // No Spanner client exists , so use hardcoded list of ports . coveredPorts := map [ string ] bool { "anguilla" : true , "canada" : true , "mexico" : true , } , ok := coveredPorts [ port ] if ok { covered = "true" } } // Create session parameters that are populated in the response . // This example hard codes values , but a real system // might look up this value in a database . p := map [ string ] any { "port is covered" : covered , } // Build and return the response . response := webhookResponse { SessionInfo : sessionInfo { Parameters : p , }, } return response , nil } // internationalCoverage handles same - named tag . func internationalCoverage ( ctx context .
- Context , request webhookRequest ) ( webhookResponse , error ) { // Create session parameters that are populated in the response . // This example hard codes values , but a real system // might look up this value in a database . p := map [ string ] any { "anomaly detect" : "false" , "purchase" : "device protection" , "purchase amount" : "12.25" , "bill without purchase" : "54.34" , "total bill" : "66.59" , "first month" : "January 1" , } // Build and return the response . response := webhookResponse { SessionInfo : sessionInfo { Parameters : p , }, } return response , nil } // validatePhoneLine handles same - named tag . func validatePhoneLine ( ctx context .
- Context , request webhookRequest ) ( webhookResponse , error ) { // Create session parameters that are populated in the response . // This example hard codes values , but a real system // might look up this value in a database . p := map [ string ] any { "domestic coverage" : "true" , "phone line verified" : "true" , } // Build and return the response . response := webhookResponse { SessionInfo : sessionInfo { Parameters : p , }, } return response , nil } // cruisePlanCoverage handles same - named tag . func cruisePlanCoverage ( ctx context .

