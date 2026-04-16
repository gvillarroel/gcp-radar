---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.658Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle entity WHOIS enrichment"
feature_slug: "chronicle-entity-whois-enrichment"
latest_feature_date: "2023-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/onboard/configure-cloud-authentication"
keywords:
  - "chronicle"
  - "entity"
  - "whois"
  - "enrichment"
  - "now"
  - "enriches"
  - "entities"
  - "additional"
---

# Chronicle entity WHOIS enrichment

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle now enriches entities with WHOIS data for additional investigative context.

## Extended Definition

Chronicle now enriches entities with WHOIS data for additional investigative context.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/onboard/configure-cloud-authentication](https://docs.cloud.google.com/chronicle/docs/onboard/configure-cloud-authentication)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference-required-1`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs (entity enrichment) If actions are executing on entities, then during the action execution you can append additional metadata to them.
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.
- Some examples of output messages: Successfully enriched the following entities using information from VirusTotal: {entity.identifier} Action wasn't able to find any information for the following entities using VirusTotal: {entity.identifier} None of the provided entities were found in VirusTotal.
- If some entities were successfully enriched but others were not, then the best practice is to provide status information for each provided entity in the message.

### "Configure a Google Cloud identity provider \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/onboard/configure-cloud-authentication](https://docs.cloud.google.com/chronicle/docs/onboard/configure-cloud-authentication)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See Identities for users for detailed information about creating Cloud Identity or Google Workspace accounts.
- The following example grants the Chronicle API Viewer role to to a specific group: gcloud projects add-iam-policy-binding PROJECT ID \ --role roles/chronicle.viewer \ --member "group: GROUP EMAIL " Replace the following: PROJECT ID : with the project ID of the Google Security Operations-bound project you configured in Configure a Google Cloud project for Google Security Operations .
- To grant the Chronicle API Viewer role to a specific user, run the following command: gcloud projects add-iam-policy-binding PROJECT ID \ --role roles/chronicle.viewer \ --member "user: USER EMAIL " Replace USER EMAIL : the user's user email address, such as alice@example.com .
- Configure a Google Cloud identity provider Supported in: Google secops SIEM You can use Cloud Identity, Google Workspace, or a third-party identity provider (such as Okta or Azure AD) to manage users, groups, and authentication.

