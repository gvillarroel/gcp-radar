---
title: "Editions \_|\_ Dialogflow \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/editions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/editions
  title: "Editions \_|\_ Dialogflow \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Guides
Send feedback
Editions
Stay organized with collections
Save and categorize content based on your preferences.
Dialogflow CX agents are available in multiple agent types and editions.
The agent type, features, pricing, and quotas vary
for each edition.
Agent types
The following agent types are available:
Term
Definition
Dialogflow CX agent
This is an advanced agent type that is suitable for large or very complex agents. Flows and pages are the building blocks of conversation design, and state handlers are used to control conversation paths. This agent type is summarized in Dialogflow CX basics .
Dialogflow ES agent
This is the standard agent type that is suitable for small to medium and simple to moderately complex agents. Intents are the building blocks of conversation design, and contexts are used to control conversation paths. This agent type is summarized in Dialogflow ES basics .
The following table provides a summary comparison of agent types.
If you have an existing Dialogflow ES agent, and you want a more detailed comparison, see
Migrating from Dialogflow ES to Dialogflow CX .
Category
Dialogflow ES agent
Dialogflow CX agent
Editions
Dialogflow CX Trial Edition, Dialogflow CX Essentials Edition
Dialogflow CX Edition
Agent building blocks
Flat structure of intents
Graph structure of flows and pages
Conversation control
Linear conversation paths that simulate nonlinear paths using intents as nodes and contexts to control paths
State machine model with explicit conversation control using pages as nodes and state handlers to control paths
Console user experience
Mostly text forms
Visual graphs showing conversation paths and text forms for configurations
Intent reusability
Intents are coupled with fulfillment, events, and responses; specific to a conversation state, so difficult to reuse
Intents are simplified to remove this coupling and made highly reusable
Webhook error handling
Errors quietly ignored by agent, passed to API caller if present
Explicit error event handling built-in to your agent
Event handling
Invoked events trigger intent matches
Events handlers are first-class types with powerful controls
Conditional response messages
Requires webhook calls
Can be configured statically in fulfillment , with static conditions for a route , or with webhooks calls
Parameter scope
Can be scoped to intent , context , or event
Can be scoped to intent , form , or session
Built in testing
Not provided
Provided
Redaction
Not provided
Provided
Conditional logic
Not provided
Provided
DTMF input
Not provided
Provided
System functions for advanced responses and conditions
Not provided
Provided
Advanced NLU
Not provided
Provided
Agents per project
1
1000
Recommended agent size
Up to medium size agents
Up to very large
Recommended agent complexity
Up to moderately complex agents
Up to highly complex
Learning curve to design a simple agent
Basic
Moderate
Learning curve to design a complex agent
High
Moderate
Pricing and quotas
Granular
Simplified
Edition comparison
The following editions are available:
Term
Definition
Dialogflow CX Trial Edition
A no-cost edition that provides most of the features of the standard Dialogflow ES agent type. It offers limited quota and support by community and email. This edition is suitable to experiment with Dialogflow ES.
Dialogflow CX Essentials Edition
This is a pay-as-you-go edition that provides the standard Dialogflow ES agent type. This edition offers production-ready quotas and support from Google Cloud support.
Dialogflow CX Edition
This is a pay-as-you-go edition that provides the advanced Dialogflow CX agent type. This edition offers production-ready quotas and support from Google Cloud support.
The following tables provide a summary comparison for editions by agent type.
For details, see
Pricing
and
Quotas and Limits .
Dialogflow CX Agent
Feature
Dialogflow CX Edition
Text
(includes all DetectIntent, StreamingDetectIntent, and FulfillIntent requests that do not contain audio)
1200 requests per minute $0.007 per request
Audio input/output
(speech recognition, speech-to-text, STT,
speech synthesis, text-to-speech, TTS, telephony)
600 requests per minute $0.06 per minute
Service Level Agreement
SLA
Support
Eligible for Cloud Support packages with committed response times for supporting production applications
Terms of Service
Google Cloud Platform ToS
Dialogflow ES Agent
Feature
Trial Edition
Essentials Edition
Text
(includes all DetectIntent and StreamingDetectIntent requests that do not contain audio)
Production-ready quota No charge
Production-ready quota $0.002 per request
Audio input
(also known as speech recognition,
speech-to-text, STT)
Limited quota No charge
Production-ready quota $0.0065 per 15 seconds of audio
Audio output
(also known as speech synthesis,
text-to-speech, TTS)
Limited quota No charge
Production-ready quota $4 to $16 per million characters
Knowledge connectors (Beta)
Limited quota No charge
Production-ready quota No charge
Sentiment analysis
Not available
Unlimited quota $0.25 to $1.00 per 1000 requests
Dialogflow ES phone gateway
Includes audio input and output.
Toll-free number not available Limited quota No charge
Production-ready quota $0.05 to $0.06 per minute
Mega agent
Limited quota No charge
Unlimited quota $0.002 to $0.006 per request
Service Level Agreement
None
SLA
Support
Community support and via email
Eligible for Cloud Support packages with committed response times for supporting production applications
Terms of Service
Dialogflow ES Trial Edition ToS
Google Cloud Platform ToS
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
