---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.445Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Backend modules"
feature_slug: "backend-modules"
latest_feature_date: "2022-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/backend-module-install"
  - "https://docs.cloud.google.com/agent-assist/docs/backend-basics"
keywords:
  - "out-of-the-box integration infrastructure"
  - "integration backend module"
  - "backend module support"
  - "agent system integration"
  - "integration backend modules"
  - "backend modules GA"
  - "backend modules"
---

# Backend modules

Product: Agent Assist
Coverage: MEDIUM

## Step 02 Summary

Agent Assist launches backend modules as a GA feature, providing out-of-the-box infrastructure for faster integration with agent systems.

## Extended Definition

Backend modules are an out-of-the-box Agent Assist integration option that provides infrastructure for integrating Agent Assist with your system, including handling large volumes of feature-related messages and interacting with the agent desktop UI. They are implemented via a defined set of backend module components and required Google services (including Cloud Pub/Sub topics, a Cloud Pub/Sub interceptor, Memorystore for Redis, and a UI connector), and are supported by installation and concepts documentation for setup.

## Evidence Summary

The pages show backend modules as an integration method for Agent Assist and describe their purpose and required components, but do not provide explicit evidence for GA status or the exact 2022-11-15 feature launch date.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- [https://docs.cloud.google.com/agent-assist/docs/backend-basics](https://docs.cloud.google.com/agent-assist/docs/backend-basics)

## Supporting Pages

### "Integrate backend modules with your system \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a dedicated integration guide for Agent Assist backend modules, including deployment, prerequisites, and required IAM roles.

Evidence snippets:
- Home Documentation AI and ML Agent Assist Guides Send feedback Integrate backend modules with your system Stay organized with collections Save and categorize content based on your preferences.
- Backend modules provide an infrastructure to process large volumes of feature-related messages and interact with the agent desktop UI.
- For more information about background modules concepts and structure, see the backend modules basics documentation.
- This tutorial walks you through the process of integrating backend modules with your agent system.

### Agent Assist backend modules basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/agent-assist/docs/backend-basics](https://docs.cloud.google.com/agent-assist/docs/backend-basics)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Backend modules structure Backend module components Backend modules require the following Google products to integrate Agent Assist into your system: Cloud Pub/Sub Cloud Pub/Sub interceptor Memorystore for Redis UI connector Cloud Pub/Sub Cloud Pub/Sub topics are configured in conversation profiles .
- Agent Assist prices and quotas Pub/Sub prices and quotas Memorystore prices and quotas Cloud Run prices and quotas What's next See the backend modules installation guide for more information about getting started with this integration method.
- Home Documentation AI and ML Agent Assist Guides Send feedback Agent Assist backend modules basics Stay organized with collections Save and categorize content based on your preferences.
- Agent Assist now offers backend modules , an out-of-the-box option for integrating Agent Assist into your system.

