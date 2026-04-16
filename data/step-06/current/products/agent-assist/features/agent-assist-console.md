---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:50:35.081Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Agent Assist console"
feature_slug: "agent-assist-console"
latest_feature_date: "2022-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide"
  - "https://docs.cloud.google.com/agent-assist/docs/faq"
  - "https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist"
keywords:
  - "console"
  - "reached"
  - "includes"
---

# Agent Assist console

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

The Agent Assist console has reached GA and now includes built-in workflow tutorials, sample datasets, and demo models.

## Extended Definition

The Agent Assist console has reached GA and now includes built-in workflow tutorials, sample datasets, and demo models.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide](https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide)
- [https://docs.cloud.google.com/agent-assist/docs/faq](https://docs.cloud.google.com/agent-assist/docs/faq)
- [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)

## Supporting Pages

### "User guide: Summarization automatic evaluation \_|\_ Agent Assist \_|\_\

- URL: [https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide](https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click any row in the list to view Evaluation details , which includes the following information: Display name for the generator Number of conversations If any Customer Experience Insights datasets, name of the associated Customer Experience Insights dataset Run time Cloud Storage output Overall performance results for an entire dataset Conversation-level results for each conversation in a dataset Conversation-level results Agent Assist displays the conversation-level evaluation results in a table.
- Then, follow these steps to create a second generator that uses summarization version 5.0: Navigate to the Agent Assist console > Summarization page.
- Results comparison Follow these steps to compare results across different evaluations: Within the Agent Assist console, navigate to Evaluations .
- View evaluation results Follow these steps to view detailed evaluation results from the Agent Assist console .

### FAQ assist \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/faq](https://docs.cloud.google.com/agent-assist/docs/faq)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /conversations/ CONVERSATION ID /participants/ PARTICIPANT ID :analyzeContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "message": { "name": "projects/ PROJECT ID /conversations/fiiJBeHnQIa6Zx DUKNlEg/messages/Rjv8ErKYS yIqVR9SW4CpA", "content": "How may I help you?", "languageCode": "en-US", "participant": "PaZQyeiTQgCOyliHkZjs0Q", "participantRole": "HUMAN AGENT", "createTime": "1970-01-01T00:00:00Z" }, "humanAgentSuggestionResults": [ { "suggestFaqAnswersResponse": { "faqAnswers": [ { "answer": "Sign up for Cloud Storage by turning on the Cloud Storage service in the Google Cloud Platform Console.", "confidence": 0.07266401, "question": "How do I sign up?", "source": "projects/ PROJECT ID /knowledgeBases/NjQ2MzI1MDQwNTQ2MjYzODU5Mg/documents/NTMxOTA4MTAxMzQxMjg4ODU3Ng", "metadata": { "document display name": "my-document-display-name" }, "answerRecord": "projects/ PROJECT ID /answerRecords/MTU0MzE0NDQwOTAwNzEyODU3NjA" }, { "answer": "Consider storing your data in a multi-regional or dual-regional bucket location if high availability is a top requirement.
- To find which project contains a specific bucket: If you are searching over a moderate number of projects and buckets, use the Google Cloud Platform Console, select each project, and view the buckets it contains.
- You have the option of using the Agent Assist console to test your Article Suggestion results during design-time, but you must call the API directly during runtime.
- The behavior of the Dialogflow interaction history is controlled by Dialogflow's security settings , which you can set using the Dialogflow CX console .

### Generative knowledge assist \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
- Source ID: `site-docs-reference-required-2`
- Final score: 73
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID LOCATION ID : the ID for your location AGENT ID : your flow-based or playbook-based data store agent ID from the previous step The following is a JSON example: { "displayName" : "my-conversation-profile-display-name" , "humanAgentAssistantConfig" : { "humanAgentSuggestionConfig" : { "featureConfigs" : [ { "suggestionFeature" : { "type" : "KNOWLEDGE SEARCH" }, "queryConfig" : { "dialogflowQuerySource" : { "humanAgentSideConfig" : { "agent" : "projects/ PROJECT ID /locations/ LOCATION ID /agents/ AGENT ID " } } }, "disableAgentQueryLogging" : false , "enableConversationAugmentedQuery" : false , } ] } } } When you create a conversation profile in the Agent Assist console, Agent Assist automatically enables both generative knowledge assist and proactive generative knowledge assist.
- Before you begin Unless you're the project owner, you need these roles to create a data store agent: - Dialogflow API Admin - Discovery Engine Admin Create a flow-based data store agent Activate the AI Applications API in the Vertex AI console.
- Create from console Enable the Generative knowledge assist suggestion type and link it to the flow-based data store agent or playbook-based data store agent from the previous step.
- Create from console You must enable the generative knowledge assist suggestion type and link it to the flow-based or playbook-based data store agent from the previous step.

