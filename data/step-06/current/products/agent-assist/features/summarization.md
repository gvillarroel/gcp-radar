---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.447Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Summarization"
feature_slug: "summarization"
latest_feature_date: "2022-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide"
  - "https://docs.cloud.google.com/agent-assist/docs/conversation-data-format"
keywords:
  - "summary after conversation ends"
  - "automatic summary generation"
  - "post-call summary"
  - "post-conversation summary"
  - "agent-facing summary"
  - "summary generation"
  - "conversation summarization"
---

# Summarization

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Agent Assist summarization automatically generates summaries for agents after each conversation ends.

## Extended Definition

Agent Assist Summarization is the feature for automatically generating conversation summaries, with a documented setting to generate new summaries for all conversations or disable summary generation. The conversation data format used by Agent Assist includes a "conversation summarization suggestion" annotation with text sections such as "Situation," "Action," and "Outcome," which indicates structured summary content produced for a conversation. Coverage is based on available snippets, so behavior details beyond these points are not fully evidenced here.

## Evidence Summary

The cited pages show that Agent Assist supports configurable summary generation and define the conversation data fields used for summarization suggestions with structured sections.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide](https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide)
- [https://docs.cloud.google.com/agent-assist/docs/conversation-data-format](https://docs.cloud.google.com/agent-assist/docs/conversation-data-format)

## Supporting Pages

### "User guide: Summarization automatic evaluation \_|\_ Agent Assist \_|\_\

- URL: [https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide](https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: The page discusses summarization generators and their section definitions, but its primary focus is evaluating summary quality rather than describing how summaries are generated during conversations.

Evidence snippets:
- You pay the summary generation cost Generate new summaries for all conversations.
- You pay the summary generation cost Don't generate summaries.

### Upload conversation data \_|\_ Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/conversation-data-format](https://docs.cloud.google.com/agent-assist/docs/conversation-data-format)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- You have a nice day", "role": "AGENT" } ], "conversation info": { "annotations": [ { "annotation": { "conversation summarization suggestion": { "text sections": [ { "key": "Situation", "value": "Customer was unable to login to account" }, { "key": "Action", "value": "Agent sent an email with password reset instructions" }, { "key": "Outcome", "value": "Problem was resolved" } ] } } } ] } } Conversation transcript data Text conversation data must be supplied in JSON-formatted files, where each file contains data for a single conversation.

### Send feedback to Agent Assist \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/feedback](https://docs.cloud.google.com/agent-assist/docs/feedback)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

