---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.757Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Expression Builder pre-built filters"
feature_slug: "expression-builder-pre-built-filters"
latest_feature_date: "2025-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/audit-logging"
keywords:
  - "expression"
  - "builder"
  - "pre"
  - "built"
  - "filters"
  - "now"
  - "includes"
  - "clearer"
---

# Expression Builder pre-built filters

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Expression Builder now includes pre-built filters and clearer transformer guidance to streamline query creation.

## Extended Definition

Expression Builder now includes pre-built filters and clearer transformer guidance to streamline query creation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- The following are examples: metadata.log type = "PCAP DNS" network.dns.answers.name = "dns-A901F3j.hat.example.com" If the result includes the text Possible value match , the name-value pair contains the UDM field name and a regular expression containing the search term.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Note: This is a global setting that applies to the forwarder and the forwarder's collectors, unless it is overridden at the collector level. metadata.labels.key string Optional The key for a field in the metadata labels list. metadata.labels.value string Optional The value for a field in the metadata labels list. regex filters.description string Optional Describes what is being filtered and why. regex filters.regexp string Optional The regular expression used to match against each incoming line. regex filters.behavior enum Optional Specifies the state of the server functionality.
- Note: This is a global setting that applies to the forwarder and the forwarder's collectors, unless it is overridden at the collector level. metadata.labels.key string Optional The key for a field in the metadata labels list. metadata.labels.value string Optional The value for a field in the metadata labels list. regex filters.description string Optional Describes what is being filtered and why. regex filters.regexp string Optional The regular expression used to match against each incoming line. regex filters.behavior enum Optional Specifies the state of the server functionality.
- BLOCK : This state prevents the filtered line from being uploaded. server settings object Optional Settings that configure the forwarder's built-in HTTP server, which can be used to configure load balancing and high availability options for syslog collection on Linux. server settings.state enum Optional Specifies the state of the server functionality.
- Response fields In addition to the fields specified in the request and the fields for which default values are applied, the response includes the following fields: Field Type Description name string The resource ID of the collector.

### "Google SecOps audit logs \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Actions in Google SecOps that generate this type of log include creating a Google Cloud Association and updating Google Cloud log filters. chronicleservicemanager.googleapis.com/gcpAssociations.create chronicleservicemanager.googleapis.com/gcpAssociations.delete chronicleservicemanager.googleapis.com/gcpSettings.delete Data Access audit logs Includes admin read operations that read metadata or configuration information.
- Actions in Google SecOps that generate this type of log include updating feeds and creating rules. chronicle.googleapis.com/feeds.update chronicle.googleapis.com/rules.create chronicle.googleapis.com/parsers.activate Data Access audit logs Includes admin read operations that read metadata or configuration information.
- Audit log type Google SecOps operations Admin Activity audit logs Includes update-related activity, such as UpdateRole and UpdateSubject .
- Audit log type Description Admin Activity audit logs Includes admin write operations that write metadata or configuration information.

