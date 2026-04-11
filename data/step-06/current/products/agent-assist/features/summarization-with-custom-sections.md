---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.430Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Summarization with custom sections"
feature_slug: "summarization-with-custom-sections"
latest_feature_date: "2025-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/conversation-profile"
keywords:
  - "custom summary sections"
  - "situation summary"
  - "action summary"
  - "Gemini 2.0 Flash summarization"
  - "Summarization with custom sections"
  - "customized summarization"
  - "sectioned summaries"
  - "custom sections 5.0"
---

# Summarization with custom sections

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Delivers Summarization with custom sections version 5.0 as generally available in all Agent Assist regions; Summarization with custom sections in version 4.0 is generally available in Agent Assist, using Gemini 2.0 Flash to generate concise situation and action summaries.

## Extended Definition

Summarization with custom sections is a configurable Agent Assist suggestion category for human-agent conversation profiles. To use this feature, the conversation profile setup requires creating a summarization generator. The provided evidence does not confirm version-specific (e.g., 4.0/5.0), GA, or region-availability details.

## Evidence Summary

The cited documentation page indicates that summarization with custom sections is selectable as a human-agent suggestion type in a conversation profile and that enabling it requires creating a summarization generator.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/conversation-profile](https://docs.cloud.google.com/agent-assist/docs/conversation-profile)

## Supporting Pages

### Create a conversation profile \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/conversation-profile](https://docs.cloud.google.com/agent-assist/docs/conversation-profile)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly explains how to enable this feature through conversation profile settings and documents required prerequisites such as creating a summarization generator.

Evidence snippets:
- Optional: Depending on which feature you're using, follow the steps in one of the following pages: Summarization with custom sections Generative knowledge assist Verify the conversation profile in the Agent Assist simulator .
- If it's a human agent, you can also configure the category of suggestions to appear: summarization with custom sections or (proactive) generative knowledge assist.
- To implement summarization with custom sections, you must create a summarization generator .

