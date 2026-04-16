---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.324Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub seek"
feature_slug: "pub-sub-seek"
latest_feature_date: "2019-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_topic"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
keywords:
  - "pub"
  - "sub"
  - "seek"
  - "allows"
  - "subscribers"
  - "to"
  - "alter"
  - "the"
---

# Pub/Sub seek

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Allows subscribers to alter the acknowledgement state of messages in bulk for replay or discard workflows; Allows subscribers to alter the acknowledgement state of messages in bulk for replay or discard workflows.

## Extended Definition

Allows subscribers to alter the acknowledgement state of messages in bulk for replay or discard workflows; Allows subscribers to alter the acknowledgement state of messages in bulk for replay or discard workflows.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_topic)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)

## Supporting Pages

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_topic)
- Source ID: `site-api-reference`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If this field is set, messages published to the topic in the last message retention duration are always available to subscribers.
- If this field is set, messages published to the topic in the last message retention duration are always available to subscribers.
- For instance, it allows any attached subscription to seek to a timestamp that is up to message retention duration in the past.
- For instance, it allows any attached subscription to seek to a timestamp that is up to message retention duration in the past.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic)
- Source ID: `site-api-reference`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If this field is set, messages published to the topic in the last message retention duration are always available to subscribers.
- If this field is set, messages published to the topic in the last message retention duration are always available to subscribers.
- For instance, it allows any attached subscription to seek to a timestamp that is up to message retention duration in the past.
- For instance, it allows any attached subscription to seek to a timestamp that is up to message retention duration in the past.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 275
- Re-rank relevance: N/A

Evidence snippets:
- If true, messages published with the same ordering key in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.
- If true, messages published with the same ordering key in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.
- If this field is set, messages published to the subscription's topic in the last topic message retention duration are always available to subscribers.
- If this field is set, messages published to the subscription's topic in the last topic message retention duration are always available to subscribers.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 275
- Re-rank relevance: N/A

Evidence snippets:
- If true, messages published with the same ordering key in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.
- If true, messages published with the same ordering key in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.
- If this field is set, messages published to the subscription's topic in the last topic message retention duration are always available to subscribers.
- If this field is set, messages published to the subscription's topic in the last topic message retention duration are always available to subscribers.

