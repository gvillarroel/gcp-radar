---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.369Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Event deduplication in searches and dashboards"
feature_slug: "event-deduplication-in-searches-and-dashboards"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
keywords:
  - "event"
  - "deduplication"
  - "in"
  - "searches"
  - "and"
  - "dashboards"
  - "adds"
  - "dedup"
---

# Event deduplication in searches and dashboards

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Adds a dedup section to remove duplicate events after the match clause in searches and dashboards.

## Extended Definition

Adds a dedup section to remove duplicate events after the match clause in searches and dashboards.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Deduplicate events in searches and dashboards The new dedup section lets you remove duplicate events after the match clause in both standard UDM searches and YARA-L 2.0 queries.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.
- May 06, 2024 Feature Gemini for investigation assistance Gemini for investigation assistance can now support you with the following: Search : Gemini can help you build, edit, and run searches targeted toward relevant events using natural language prompts.
- July 06, 2023 Feature When you create dashboards, you can make use of the following enhancements to UDM Events Explore: Search and navigation improvements.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Deduplicate events in searches and dashboards The new dedup section lets you remove duplicate events after the match clause in both standard UDM searches and YARA-L 2.0 queries.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.
- May 06, 2024 Feature Gemini for investigation assistance Gemini for investigation assistance can now support you with the following: Search : Gemini can help you build, edit, and run searches targeted toward relevant events using natural language prompts.
- This functionality is supported for event searches, and results remain limited to a maximum of 1M events.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- In general, the structure of the name should be like this: {integration display name} - {process} Job For example: ServiceNow - Sync Incidents Job Description The Description of the job should highlight to the user what the job is doing during the iterations; for example, This job will synchronize Security Command Center based cases created by the Urgent Posture Findings connector.
- Configuration parameters All integrations should contain configuration parameters (API Root + Auth parameters), unless the underlying API doesn't require any authentication and the API Root can be hardcoded.

