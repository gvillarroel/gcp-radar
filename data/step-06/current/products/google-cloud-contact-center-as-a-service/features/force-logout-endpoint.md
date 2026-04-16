---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.077Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Force logout endpoint"
feature_slug: "force-logout-endpoint"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api"
keywords:
  - "force"
  - "logout"
  - "endpoint"
  - "apps"
  - "now"
  - "includes"
  - "logging"
  - "agents"
---

# Force logout endpoint

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Apps API now includes a force logout endpoint for logging agents out by agent ID or IP address.

## Extended Definition

The Apps API now includes a force logout endpoint for logging agents out by agent ID or IP address.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Agent transferred from: agent initiating the session transfer Agent transferred to: agent receiving the session transfer Created at: time transfer was created Fail reason: reason for failure of session transfer Menu transferred from: the originating queue menu from which transfer was initiated Menu transferred to: queue menu the session was transferred to Session: CCAI Platform session ID Status: status of transfer Transfer from materialized path: the materialized path transfer was originated from Transfer to materialized path: the materialized path the session was transferred to CCAI Platform agent experience in Salesforce Lightning Provide expected CCAI Platform behaviour in Salesforce Lightning to Admins and Agents, specifically when connecting to the Activity object rather than the CCAI Platform Session object.
- Requirements Salesforce Service Cloud licenses Salesforce Service Console Lightning apps Updated Salesforce instance Salesforce Lightning enabled CCAI Platform 1.15 or above The agent adapter The agent adapter will show on the bottom left of the Service Console Lightning (or Sales Console Lightning) apps, in the utility bar.
- Requirements Salesforce Service Cloud licenses Salesforce Service Console apps Updated Salesforce instance CCAI Platform 1.13 or later Agent adapter The agent adapter will show on the bottom right of the Service Console (or Sales Console) apps.
- Identify your connected app name From Salesforce, go to Setup , enter app in the Quick Find box, then select Connected Apps under Manage Apps .

### "Salesforce installation guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-installation-guide)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Support for Salesforce Classic & Lightning Installation link: Salesforce Enterprise 1.44 Installation steps The Agent Adapter installed in Salesforce allows agents to take calls and chats directly in a Salesforce Organization (Org).
- To verify the package installation in Salesforce, go to Platform Tools > Apps > Packaging > Installed Packages .
- Manage the Call Center Configure a Call Center in Salesforce to give agents access to the adapter.
- Steps In Salesforce, go to Setup > Apps > Packaging > Installed Packages .

### "Apps API \_|\_ Google Cloud Contact Center as a Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api)
- Source ID: `site-docs-reference-required-4`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The endpoints are grouped into the following categories: Agent status Bulk user management Calls Campaigns Chats Co-browse Company Do Not Call list Contact data End users Force agent logout SMS Wait times Basic authentication Requests use basic authentication.
- Base URL The API uses the following base URL for all of its API requests https://{subdomain}.{domain​}/apps/api/v1 where a mention to /calls means https://{subdomain​}.​{domain​}/apps/api/v1/calls Rate Limits The system limits requests to a rate of 10 request per second per customer.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Apps API Stay organized with collections Save and categorize content based on your preferences.
- The Contact Center AI Platform (CCAI Platform) provides API endpoints to support integration with the platform.

