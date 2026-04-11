---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.431Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "AI Coach"
feature_slug: "ai-coach"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/ai-coach-overview"
  - "https://docs.cloud.google.com/agent-assist/docs/ai-coach-best-practices"
  - "https://docs.cloud.google.com/agent-assist/docs/features"
keywords:
  - "automatic response suggestions"
  - "agent response assistant"
  - "agent response draft"
  - "customer service conversations"
  - "AI response coach"
  - "AI Coach generally available"
  - "AI Coach suggestions"
  - "AIC"
---

# AI Coach

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Makes AI Coach generally available to automatically suggest responses to agents during customer service conversations in all Agent Assist languages and regions.

## Extended Definition

AI Coach is an Agent Assist feature that uses a large language model (LLM) to suggest how a contact center agent should respond during customer service conversations. It generates suggested agent responses by combining customer conversation context with written instructions, conversation transcript data, and API data, and returns applicable instructions with response suggestions.

## Evidence Summary

The cited pages together describe AI Coach’s core behavior (LLM-based response suggestions in customer service conversations) and the inputs required to produce those suggestions, with one page listing it as an Agent Assist feature.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/ai-coach-overview](https://docs.cloud.google.com/agent-assist/docs/ai-coach-overview)
- [https://docs.cloud.google.com/agent-assist/docs/ai-coach-best-practices](https://docs.cloud.google.com/agent-assist/docs/ai-coach-best-practices)
- [https://docs.cloud.google.com/agent-assist/docs/features](https://docs.cloud.google.com/agent-assist/docs/features)

## Supporting Pages

### AI coach overview \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/ai-coach-overview](https://docs.cloud.google.com/agent-assist/docs/ai-coach-overview)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Use a large language model (LLM) to make suggestions for how a contact center agent should respond during customer service conversations.

### AI coach: Best practices \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/ai-coach-best-practices](https://docs.cloud.google.com/agent-assist/docs/ai-coach-best-practices)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- To optimize AI coach suggestions, you must provide the following information: A set of written instructions A conversation transcript Data from the API In return, AI coach provides applicable instructions and suggested agent responses.

### Features \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/features](https://docs.cloud.google.com/agent-assist/docs/features)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explicitly lists AI Coach as a feature and describes its behavior as making suggestions to help agents during customer service conversations, which supports identifying and understanding the feature.

Evidence snippets:
- Summarization with custom sections Automatically summarize your customer service conversations.
- AI coach Make suggestions for how your agent responds during customer service conversations.

