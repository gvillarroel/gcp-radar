---
title: "Conversational commerce \_|\_ Vertex AI Search for commerce \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/retail/docs/conversational-agents-both-features
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/retail/docs/how-it-works
source_metadata:
  url: https://docs.cloud.google.com/retail/docs/conversational-agents-both-features
  title: "Conversational commerce \_|\_ Vertex AI Search for commerce \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Vertex AI Search for commerce
Guides
Send feedback
Conversational commerce
Stay organized with collections
Save and categorize content based on your preferences.
Vertex AI Search for commerce offers two conversational capabilities: conversational product filtering and the conversational commerce agent. Conversational product filtering guides users with structured questions to refine searches, while the conversational commerce agent enables open-ended chat experiences.
Two conversational capabilities with a single API endpoint
Both capabilities are powered by the conversationalSearch API endpoint.
Conversational product filtering
Use case: Guides users to refine broad searches, such as dress , with clarifying questions like What is the color?
Interaction model: Reflects structured, multiple-choice questions and answers.
For more information about conversational filtering, see the Conversational product filtering section.
Conversational commerce agent
Use case: Enables open-ended, natural language chat experiences like Help me plan a party .
Interaction model: Includes AI-generated text responses, dynamic search suggestions, and follow-up questions.
For more information about the interactive conversational search capability, see the Conversational commerce agent section.
Both capabilities enable conversations with parallel API calls
The Conversational API does not return product search results. Its purpose is to provide the conversational experience.
Your application must make two separate, parallel API calls for each user interaction. This architecture is fundamental to both product filtering and the conversational commerce agent.
The Conversational API:
Has the endpoint conversationalSearch .
Enables follow-up questions, text responses, and refined queries.
Returns fields including conversation_id , followup_question , and conversational_text_response .
The Search API:
Has the endpoint search .
Gets the list of products to display to the user.
Returns a standard list of product results.
Both capabilities use the core field conversation_id
The conversation_id is the key to maintaining the state and history of a single conversation session.
First request: Sends the initial query with no conversation_id .
Response: The API returns a new conversation_id .
Your action: Store this in client-side session storage.
Subsequent requests: For all follow-up interactions within the same session, you must send the stored conversation_id in the request. This allows the system to understand context, such as the user already said they want a yellow dress .
Note: A conversation is started with just a request without a conversation_id .
What's next
Set up and use conversational product filtering .
Set up and use the conversational commerce agent .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
