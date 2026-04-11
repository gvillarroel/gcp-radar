---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.437Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Build your own Gen AI Assist Vertex extensions"
feature_slug: "build-your-own-gen-ai-assist-vertex-extensions"
latest_feature_date: "2025-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/byoa-extension"
keywords:
  - "Build your own Gen AI Assist Vertex"
  - "LLM extension for BYOA"
  - "BYOA Vertex extensions"
  - "Vertex LLM extensions"
  - "remote API access"
  - "Vertex extensions"
  - "Vertex extension"
  - "BYOA Vertex"
---

# Build your own Gen AI Assist Vertex extensions

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Vertex extensions for Build your own Gen AI Assist allow BYOA to access remote APIs through Vertex LLM extensions in preview.

## Extended Definition

Build your own Gen AI Assist Vertex extensions is a BYOA feature that allows Agent Assist to use a custom Vertex AI extension to access a remote API you define. The feature is configured by creating your own Vertex AI extension for the desired API and then specifying that extension resource in the BYOA Extension field, with required access to Agent Assist, Vertex AI, and Cloud Storage for the API spec.

## Evidence Summary

The cited Agent Assist user guide states the required setup for this feature: access prerequisites, creation of a custom Vertex AI extension for a target API, and selecting that Vertex extension resource in the BYOA Extension field.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/byoa-extension](https://docs.cloud.google.com/agent-assist/docs/byoa-extension)

## Supporting Pages

### "User guide: Build your own GenAI assist extension \_|\_ Agent Assist \_\

- URL: [https://docs.cloud.google.com/agent-assist/docs/byoa-extension](https://docs.cloud.google.com/agent-assist/docs/byoa-extension)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about creating and using Vertex AI Extensions as tools for a Build-your-own GenAI Assist (BYOA) workflow, directly describing this feature's behavior and setup.

Evidence snippets:
- Prerequisites To use a Vertex AI Extensions tool, you must have access to the following: Agent Assist console Vertex AI for Vertex extension APIs Cloud Storage for the API spec Create a Vertex AI extension You must set up your own Vertex AI extension which calls the API you want to use.
- In the Extension field, add the Vertex extension resource.

