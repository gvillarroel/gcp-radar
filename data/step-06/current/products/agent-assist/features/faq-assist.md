---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.075Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "FAQ Assist"
feature_slug: "faq-assist"
latest_feature_date: "2025-08-21"
deprecation_date: "April 1, 2026"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/conversation-profile"
  - "https://docs.cloud.google.com/agent-assist/docs/faq"
  - "https://docs.cloud.google.com/agent-assist/docs/article-suggestion"
keywords:
  - "deprecates"
  - "schedules"
  - "creation"
  - "profile"
  - "stops"
  - "conversation"
---

# FAQ Assist

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Deprecates FAQ Assist, stops new conversation profile creation, and schedules permanent removal; deprecated on April 1, 2026.

## Extended Definition

Deprecates FAQ Assist, stops new conversation profile creation, and schedules permanent removal; deprecated on April 1, 2026.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/conversation-profile](https://docs.cloud.google.com/agent-assist/docs/conversation-profile)
- [https://docs.cloud.google.com/agent-assist/docs/faq](https://docs.cloud.google.com/agent-assist/docs/faq)
- [https://docs.cloud.google.com/agent-assist/docs/article-suggestion](https://docs.cloud.google.com/agent-assist/docs/article-suggestion)

## Supporting Pages

### Create a conversation profile \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/conversation-profile](https://docs.cloud.google.com/agent-assist/docs/conversation-profile)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optional: Depending on which feature you're using, follow the steps in one of the following pages: Summarization with custom sections Generative knowledge assist Verify the conversation profile in the Agent Assist simulator .
- Create a conversation profile Use the following resources to create a conversation profile: Agent Assist console Application programming interface (API) We recommend that you use the console tutorials first, as follows.
- Home Documentation AI and ML Agent Assist Guides Send feedback Create a conversation profile Stay organized with collections Save and categorize content based on your preferences.
- To create a conversation profile, you can click the Conversation Profile tab in the Agent Assist console or you can use the console tutorials.

### FAQ assist \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/faq](https://docs.cloud.google.com/agent-assist/docs/faq)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : your GCP project ID KNOWLEDGE BASE ID : your knowledge base ID HTTP method and URL: POST https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /conversationProfiles Request JSON body: { "displayName": "my-conversation-profile-display-name", "humanAgentAssistantConfig": { "humanAgentSuggestionConfig": { "featureConfigs": [ { "suggestionFeature": { "type": "FAQ" }, "queryConfig": { "knowledgeBaseQuerySource": { "knowledgeBases": ["projects/ PROJECT ID /knowledgeBases/ KNOWLEDGE BASE ID "] } }, "enableEventBasedSuggestion": false, "enableInlineSuggestion": true, "SuggestionTriggerSettings": { "noSmallTalk": true, "onlyEndUser": true, } } ] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- KnowledgeBasesClient . knowledge base path ( project id , faq knowledge base id ) feature config = { "suggestion feature" : { "type " : "FAQ" }, "suggestion trigger settings" : { "no small talk" : True , "only end user" : True , }, "query config" : { "knowledge base query source" : { "knowledge bases" : [ faq kb path ]}, "max results" : 3 , }, } conversation profile [ "human agent assistant config" ][ "human agent suggestion config" ][ "feature configs" ] . append ( feature config ) response = client . create conversation profile ( parent = project path , conversation profile = conversation profile ) print ( "Conversation Profile created:" ) print ( "Display Name: {} " . format ( response . display name )) Put Name is the last to make it easier to retrieve. print ( "Name: {} " . format ( response . name )) return response (Optional) Set security settings You have the option of setting security parameters to help address issues such as data redaction and data retention.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION ID /conversations" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION ID /conversations/ CONVERSATION ID ", "lifecycleState": "IN PROGRESS", "conversationProfile": "projects/ PROJECT ID /locations/ LOCATION ID /conversationProfiles/ CONVERSATION PROFILE ID ", "startTime": "2018-11-05T21:05:45.622Z" } The path segment after conversations contains your new conversation ID.
- Before using any of the request data, make the following replacements: PROJECT ID : your Cloud project ID LOCATION ID : your location ID CONVERSATION PROFILE ID : the ID you received when creating the conversation profile HTTP method and URL: POST https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION ID /conversations Request JSON body: { "conversationProfile": "projects/ PROJECT ID /locations/ LOCATION ID /conversationProfiles/ CONVERSATION PROFILE ID ", } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Article Suggestion \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/article-suggestion](https://docs.cloud.google.com/agent-assist/docs/article-suggestion)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : your GCP project ID KNOWLEDGE BASE ID : your knowledge base ID HTTP method and URL: POST https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /conversationProfiles Request JSON body: { "name": "projects/ PROJECT ID /conversationProfiles/ CONVERSATION PROFILE ID ", "displayName": "my-conversation-profile-display-name", "humanAgentAssistantConfig": { "notificationConfig": {}, "humanAgentSuggestionConfig": { "featureConfigs": [ { "enableInlineSuggestion": true, "SuggestionTriggerSettings": { "noSmallTalk": true, "onlyEndUser": true, }, "suggestionFeature": { "type": "ARTICLE SUGGESTION" }, "queryConfig": { "knowledgeBaseQuerySource": { "knowledgeBases": [ "projects/ PROJECT ID /knowledgeBases/ KNOWLEDGE BASE ID " ] } } } ] } }, "sttConfig": {}, "languageCode": "en-US" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- KnowledgeBasesClient . knowledge base path ( project id , faq knowledge base id ) feature config = { "suggestion feature" : { "type " : "FAQ" }, "suggestion trigger settings" : { "no small talk" : True , "only end user" : True , }, "query config" : { "knowledge base query source" : { "knowledge bases" : [ faq kb path ]}, "max results" : 3 , }, } conversation profile [ "human agent assistant config" ][ "human agent suggestion config" ][ "feature configs" ] . append ( feature config ) response = client . create conversation profile ( parent = project path , conversation profile = conversation profile ) print ( "Conversation Profile created:" ) print ( "Display Name: {} " . format ( response . display name )) Put Name is the last to make it easier to retrieve. print ( "Name: {} " . format ( response . name )) return response (Optional) Set security settings You have the option of setting security parameters to address issues such as data redaction and data retention.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION ID /conversations" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION ID /conversations/ CONVERSATION ID ", "lifecycleState": "IN PROGRESS", "conversationProfile": "projects/ PROJECT ID /locations/ LOCATION ID /conversationProfiles/ CONVERSATION PROFILE ID ", "startTime": "2018-11-05T21:05:45.622Z" } The path segment after conversations contains your new conversation ID.
- Before using any of the request data, make the following replacements: PROJECT ID : your Cloud project ID LOCATION ID : your location ID CONVERSATION PROFILE ID : the ID you received when creating the conversation profile HTTP method and URL: POST https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION ID /conversations Request JSON body: { "conversationProfile": "projects/ PROJECT ID /locations/ LOCATION ID /conversationProfiles/ CONVERSATION PROFILE ID ", } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

