---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.568Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Entity Context in Search"
feature_slug: "entity-context-in-search"
latest_feature_date: "2025-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
keywords:
  - "entity"
  - "context"
  - "search"
  - "lets"
  - "users"
  - "find"
  - "view"
  - "events"
---

# Entity Context in Search

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Entity Context in Search lets users find and view context events related to entities using UDM entity context data.

## Extended Definition

Entity Context in Search lets users find and view context events related to entities using UDM entity context data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .
- Filter events field The Filter events field displays the filters you've created, and lets you apply them to the Search field, or remove them as needed.
- Saved searches and search history overview Clicking Search manager lets you retrieve saved searches and view your search history.

### "Overview of context-aware analytics \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overview of context-aware analytics Supported in: Google secops SIEM Google SecOps lets you view telemetry, entity context, relationships, and vulnerabilities as a single detection within your Google SecOps account.
- Invalid. $host over 3h after $e1 condition: $e1 and $e2 } Login example using outcome section The following example uses the outcome section to calculate a risk score for the detection. rule Detection { meta: events: $auth.metadata.event type = "USER LOGIN" $auth.metadata.vendor name = "Acme" $auth.metadata.product name = "Acme SSO" $auth.target.user.userid = $user $auth.metadata.event timestamp.seconds > $context.graph.entity.user.termination date.seconds $context.graph.metadata.vendor name = "Microsoft" $context.graph.metadata.product name = "Azure Active Directory" $context.graph.metadata.entity type = "USER" $context.graph.entity.user.userid = $user $context.graph.entity.user.termination date.seconds > 0 match: $user over 15m outcome: $risk score = max( if ( $auth.metadata.event type = "USER LOGIN", 50) + if ( $context.graph.entity.user.title = "Remote" nocase or $context.graph.entity.user.title = "Temp" nocase or $context.graph.entity.user.title = "Vendor" nocase, 40) + if ( $context.graph.entity.user.title = "Legal" nocase, 10) ) condition: $auth and $context } Suspicious process launch example The following example evaluates UDM event process data against IOC context data stored as an entity context. rule ProcessLaunch { meta: events: $ioc.graph.metadata.vendor name = "ACME" $ioc.graph.metadata.product name = "IOCs" $ioc.graph.metadata.entity type = "FILE" $ioc.graph.entity.file.sha256 = $hash $process.metadata.event type = "PROCESS LAUNCH" $process.principal.hostname = $hostname ( not $process.target.process.file.sha256 = "" and $process.target.process.file.sha256 = $hash ) match: $hash over 15m condition: $ioc and $process } Additional qualifiers for entity context To create an event variable that uses an entity context, you must provide a <source> after the event name.
- Context-aware analytics incorporates advanced enrichment capabilities earlier in the detection authoring and execution workflow, enabling you to provide the following additional capabilities: Making relevant context available for heuristic-driven contextual risk scoring of detections at detection execution time rather than at the human triage stage Reducing time spent on triage and manually stitching together information from disparate IT security systems (EDR consoles, firewall or proxy logs, CMDB and IAM context, vulnerability scan results) Enabling analysts and detection engineers to filter out entire clusters of threats that may be expected or represent little or no danger to the enterprise (malware testing in a sandbox environment, vulnerabilities and anomalous activity in a development network with no sensitive data or access, and more) Writing rules for context-aware analytics You can use Detection Engine rules to search for entity context data in your Google SecOps account.
- It is looking for times when someone with administrator privilege attempted to sign in to or log out of the system. rule LoginLogout { meta: events: ($log inout.metadata.event type = "USER LOGIN" or $log inout.metadata.event type = "USER LOGOUT") $log inout.principal.user.user display name = $user $context.graph.entity.user.user display name = $user $context.graph.entity.resource.attribute.roles.type = "ADMINISTRATOR" match: $user over 2m condition: $log inout and $context } Sliding window example The following sliding window example is valid. rule Detection { meta: events: $e1.graph.entity.hostname = $host $e2.udm.principal.hostname = $host match: // Using e2 (a UDM event) as a pivot. $host over 3h after $e2 condition: $e1 and $e2 } Invalid sliding window example The following sliding window example is invalid.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CDIR SCC Enhanced rule sets All rule sets that begin with the name CDIR SCC Enhanced use Security Command Center Premium findings contextualized with several other Google Cloud log sources, including the following: Cloud Audit Logs Cloud DNS logs Identity and Access Management (IAM) analysis Sensitive Data Protection context BigQuery context Compute Engine context To use the CDIR SCC Enhanced rule sets, we recommend that you collect the following Google Cloud data: Log data listed in the All rule sets section.
- The following log data, listed by product name and Google SecOps ingestion label: BigQuery ( GCP BIGQUERY CONTEXT ) Compute Engine ( GCP COMPUTE CONTEXT ) IAM ( GCP IAM CONTEXT ) Sensitive Data Protection ( GCP DLP CONTEXT ) Cloud Audit Logs ( GCP CLOUDAUDIT ) Google Workspace Activity ( WORKSPACE ACTIVITY ) Cloud DNS queries ( GCP DNS ) The following Security Command Center finding classes , listed by findingClass identifier and Google SecOps ingestion label: Threat ( GCP SECURITYCENTER THREAT ) Misconfiguration ( GCP SECURITYCENTER MISCONFIGURATION ) Vulnerability ( GCP SECURITYCENTER VULNERABILITY ) SCC Error ( GCP SECURITYCENTER ERROR ) The CDIR SCC Enhanced rule sets also depend on data from Google Cloud services.
- CDIR SCC Credential Access : Contains context-aware rules that correlate Security Command Center Credential Access findings with data from several other data sources, including Cloud Audit Logs CDIR SCC Enhanced Discovery : Contains context-aware rules that correlate Security Command Center Discovery escalation findings with data from sources such as Google Cloud services and Cloud Audit Logs.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.

