---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.442Z"
product_name: "Agent Assist"
product_slug: "agent-assist"
feature_name: "Genesys Cloud native UI connector"
feature_slug: "genesys-cloud-native-ui-connector"
latest_feature_date: "2024-06-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app"
keywords:
  - "Genesys Cloud native UI connector"
  - "native Genesys UI connector"
  - "Genesys Cloud connector"
  - "Genesys Cloud integration"
  - "chat conversation integration"
  - "native UI connector"
  - "Genesys connector"
---

# Genesys Cloud native UI connector

Product: Agent Assist
Coverage: LOW

## Step 02 Summary

Agent Assist now provides a native UI Connector for Genesys Cloud to enable chat conversation integration.

## Extended Definition

The Genesys Cloud native UI connector for Agent Assist is an integration workflow that connects Agent Assist to Genesys Cloud for conversation handling. Based on the available evidence, it is implemented by deploying a backend server for the UI module to call the Dialogflow API, then configuring authentication and required Google Cloud components (including Cloud Run, Pub/Sub, and Memorystore for Redis). The page also indicates this setup requires Google Cloud CLI prerequisites and that the integration has associated Cloud Run cost.

## Evidence Summary

The cited Agent Assist docs page documents the Genesys Cloud integration steps, required services, and deployment prerequisites, but provides only partial direct wording about a dedicated "native UI connector" feature.

## Source Links

- [https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app](https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app)

## Supporting Pages

### "Deploy the Genesys Cloud application server \_|\_ Agent Assist \_|\_ Google\

- URL: [https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app](https://docs.cloud.google.com/agent-assist/docs/genesys-cloud-app)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: It provides end-to-end Genesys Cloud integration setup steps (widget, OAuth, Cloud Run app server), which is useful context for the connector integration though not explicitly labeled as a native UI connector feature.

Evidence snippets:
- Objectives Genesys Cloud integration involves the following processes: Deploy the backend server for the UI module to call the Dialogflow API, register an authentication token, and setup cloud Pub/Sub and Memorystore for Redis.
- Run the following command: gcloud run services delete agent-assist-modules-application-server Price disclaimer If you use Genesys Cloud integration, there is a cost associated with the underlying Cloud Run service.
- Before you begin You must complete the following actions before starting the Genesys Cloud integration: Install the Google Cloud CLI , if you haven't already configured it.

