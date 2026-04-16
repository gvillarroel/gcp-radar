---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.655Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle forwarder hot config loading"
feature_slug: "chronicle-forwarder-hot-config-loading"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
keywords:
  - "chronicle"
  - "forwarder"
  - "hot"
  - "config"
  - "loading"
  - "applies"
  - "configuration"
  - "changes"
---

# Chronicle forwarder hot config loading

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle forwarder hot config loading applies configuration changes within five minutes without a restart.

## Extended Definition

Chronicle forwarder hot config loading applies configuration changes within five minutes without a restart.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)

## Supporting Pages

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- If any of your existing feeds for the MICROSOFT GRAPH ALERT log type are pointing towards the legacy alerts endpoint, you must update the API Full Path in your feed configuration to switch to the alerts v2 endpoint instead, as described in How to set up Microsoft Graph API alerts .
- You can also self-migrate by replacing your existing data feeds using v1 connectors with new feeds using v2 connectors, by following the configuration guide for v2 connectors .
- After the shutdown date, configurations using Legacy Alerts will stop returning data.
- Chronicle will handle all changes in-product for this new table.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- In the configuration dialog, enable the Include raw logs option to append the source log data to each UDM record in the download.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- Navigate search results using pagination To improve browser stability and performance when loading a large number of results, Google SecOps provides paginated search results.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- The following is a high-level overview of the configuration process: Plan your implementation: identify the different types of data you want to restrict user access to.
- You want to track Dynamic Host Configuration Protocol (DHCP) events from a specific IP address (10.0.0.1) that you suspect might be compromised.
- Configure data RBAC for users Supported in: Google secops SIEM This page describes how data role-based access control ( data RBAC ) administrators can configure data RBAC within Google Security Operations.
- If the metadata.event type field is NETWORK DHCP and if the principal.ip field (the IP address of the device requesting the DHCP lease) is 10.0.0.1 , Google SecOps applies the custom label to the event.

