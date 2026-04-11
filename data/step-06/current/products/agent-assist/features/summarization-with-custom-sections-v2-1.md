---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.443Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Summarization with custom sections V2.1"
feature_slug: "summarization-with-custom-sections-v2-1"
latest_feature_date: "2024-05-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/conversation-profile"
  - "https://docs.cloud.google.com/agent-assist/docs/features"
keywords:
  - "post-call summary sections"
  - "custom section templates"
  - "summarization with custom sections"
  - "custom sections summarization"
  - "custom sections"
  - "Summarization V2.1"
  - "Summarization v2.1"
  - "summarization GA"
---

# Summarization with custom sections V2.1

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Agent Assist offers Summarization with custom sections version 2.1 as a GA feature.

## Extended Definition

Summarization with custom sections in Agent Assist is a feature that automatically summarizes customer service conversations and can be selected as a human-agent suggestion category in an Agent Assist conversation profile. To implement it, the conversation profile flow requires you to create a summarization generator associated with the profile configuration. Evidence for version 2.1 and GA status is not shown in the provided excerpts, so that status cannot be confirmed from these sources alone.

## Evidence Summary

The feature is identified in official docs as a custom-sections summarization option for customer service, and the conversation-profile documentation explains that it is configured per profile for human agents and requires a summarization generator.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/conversation-profile](https://docs.cloud.google.com/agent-assist/docs/conversation-profile)
- [https://docs.cloud.google.com/agent-assist/docs/features](https://docs.cloud.google.com/agent-assist/docs/features)

## Supporting Pages

### Create a conversation profile \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/conversation-profile](https://docs.cloud.google.com/agent-assist/docs/conversation-profile)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions Summarization with custom sections and its prerequisites, but it does not provide any information about version 2.1 or its release/lifecycle details.

Evidence snippets:
- Optional: Depending on which feature you're using, follow the steps in one of the following pages: Summarization with custom sections Generative knowledge assist Verify the conversation profile in the Agent Assist simulator .
- If it's a human agent, you can also configure the category of suggestions to appear: summarization with custom sections or (proactive) generative knowledge assist.
- To implement summarization with custom sections, you must create a summarization generator .

### Features \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/features](https://docs.cloud.google.com/agent-assist/docs/features)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The page includes Summarization with custom sections with a brief functional description, but it does not provide version or GA lifecycle details requested by the feature summary.

Evidence snippets:
- Summarization with custom sections Automatically summarize your customer service conversations.

