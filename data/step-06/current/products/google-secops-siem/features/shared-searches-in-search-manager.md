---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.670Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Shared searches in Search Manager"
feature_slug: "shared-searches-in-search-manager"
latest_feature_date: "2023-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed"
keywords:
  - "shared"
  - "searches"
  - "search"
  - "manager"
  - "let"
  - "users"
  - "create"
  - "edit"
---

# Shared searches in Search Manager

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Shared searches let users create, edit, and share saved searches in Search Manager.

## Extended Definition

Shared searches let users create, edit, and share saved searches in Search Manager.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also filter your searches by clicking filter alt Filter next to the search bar and sort searches by Show all , Google SecOps defined , Authored by Me , or Shared .
- Saved searches and search history overview Clicking Search manager lets you retrieve saved searches and view your search history.
- You can also create a new search from within the Search manager dialog by clicking add Add .
- To view saved searches, click Search Manager and then click the Saved tab.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Create and manage scopes You can create and manage data scopes within the Google SecOps user interface, and then assign those scopes to users or groups through IAM.
- You can use the Suspicious DHCP Activity label to create a scope and assign the scope to the relevant users.
- In the New principals field, do the following: If you're using Workforce Identity Federation or any other third party authentication, add your principal identifier as follows: principal://iam.googleapis.com/locations/global/workforcePools/ POOL ID /subject/ USER EMAIL ADDRESS Replace the following: POOL ID : the identifier for the pool created for your identity provider.
- To filter and identify these specific events, you can create a custom label with the name Suspicious DHCP Activity with the following query: metadata.event type = "NETWORK DHCP" AND principal.ip = "10.0.0.1" The custom label works in the following manner: Google SecOps continuously ingests network logs and events into its UDM.

### "Create an Azure Event Hub feed \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed)
- Source ID: `site-docs-reference-required-1`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Retrieve the information from the event hub that you created earlier in the Azure portal to fill in the following fields: Event hub name : the event hub name Event hub consumer group : the consumer group associated with your event hub Caution: Don't create subscribers or retrieve data programmatically through the Data Explorer tab in the Azure portal for the consumer group.
- Verify data flow To verify that your data is flowing into Google SecOps and your event hub is functioning correctly, you can perform these checks: In Google SecOps, examine the dashboards and use the Raw Log Scan or Unified Data Model (UDM) search to verify that the ingested data is present in the correct format.
- For example, change Endpoint=<ENDPOINT>;SharedAccessKeyName=<KEY NAME>;SharedAccessKey=<KEY>;EntityPath=<EVENT HUB NAME> to Endpoint=<ENDPOINT>;SharedAccessKeyName=<KEY NAME>;SharedAccessKey=<KEY> .
- To set up an Azure feed, complete the following processes: Create an event hub in Azure : set up the required infrastructure in your Azure environment to receive and store the security data stream.

