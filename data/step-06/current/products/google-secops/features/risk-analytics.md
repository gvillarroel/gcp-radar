---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.881Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Risk Analytics"
feature_slug: "risk-analytics"
latest_feature_date: "2024-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc"
  - "https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
keywords:
  - "risk"
  - "analytics"
  - "adds"
  - "entity"
  - "activity"
  - "scoring"
  - "dashboards"
  - "watchlists"
---

# Risk Analytics

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Risk Analytics adds entity and activity risk scoring, dashboards, watchlists, and curated and custom detection support.

## Extended Definition

Risk Analytics adds entity and activity risk scoring, dashboards, watchlists, and curated and custom detection support.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc)
- [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)

## Supporting Pages

### "SIEM table of contents \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google SecOps SIEM Product overview Sign in to Google SecOps Quickstart: Conduct a search Quickstart: Investigate an alert Configure user preferences (SIEM only) Onboarding to Google SecOps Overview of the process Understand your Google SecOps billing components Configure Google Cloud project for Google SecOps Configure an identity provider Configure a Google Cloud identity provider Configure a third-party identity provider Configure feature access control using IAM Configure data RBAC using IAM RBAC user guide for applications not using IAM Google SecOps permissions in IAM Link Google SecOps to Google Cloud services Ingest data Ingest entity data Overview of data ingestion Supported data sets and default parsers Ingest data to Google SecOps Ingest logs from specific sources Install and configure forwarders Overview of Google SecOps forwarders Google SecOps forwarder for Linux Google SecOps forwarder for Windows on Docker Google SecOps forwarder executable for Windows Manage forwarder configurations through Google SecOps Troubleshoot common Linux forwarder issues Set up data feeds Feed management overview Create and manage feeds using the feed management UI Create an Azure Event Hub feed Create and manage feeds using the feed management API Use ingestion scripts deployed as Cloud Functions Use the Ingestion API DataTap Configuration API Use the Bindplane agent Customer Management API Data Export API Data Export API (Enhanced) Monitor data ingestion Use Data Ingestion and Health dashboard Use Cloud Monitoring for ingestion notifications View your billed ingestion volume Work with Google SecOps parsers Overview of log parsing Overview of the Unified Data Model Manage prebuilt and custom parsers Request prebuilt and create custom log types Parser extensions Parser extension examples Important UDM fields for parser data mapping Tips and troubleshooting when writing parsers Format log data as UDM Enrichment UDM enrichment and aliasing overview Aliasing Enrichment How Google SecOps enriches event and entity data Block enrichment from specific flows Using the Entity Context Graph (ECG) Auto Extraction overview Detecting threats View alerts and IOCs Review potential security threats Single event rules Multiple event rules Composite detections Overview of composite detections Monitor for events using rules View rules in the Rules Dashboard Manage unified rules Troubleshoot rule runtime errors Understand rule quotas Understand rule quotas Risk-based alerting with entity only rules Understand threat coverage with the MITRE ATT&CK matrix View previous versions of a rule Archive rules Download events Run a rule against live data Run a rule against historical data Optimize detection and reporting performance Understand rule replays and MTTD Understand rule detection delays Manage your rule run schedule Configure customized schedules for rules Understand rule run scheduling Detection limits Rule errors Create context-aware analytics Overview of context-aware analytics Use Cloud Sensitive Data Protection data in context-aware analytics Use context-enriched data in rules Use default detection rules Risk analytics Risk Analytics Quickstart guide Overview of Risk Analytics Use the Risk Analytics dashboard Metric functions for Risk Analytics rules Watchlist Quickstart guide Specify entity risk score in rules Watchlists FAQ Risk Analytics FAQ Work with curated detections Use curated detections to identify threats Use curated detection rules for third-party vendor alerts Use the curated detections UI Cloud Threats category overview Composite Rules category overview Non-prioritized IoC Matching threats category overview Chrome Enterprise Threats category overview Linux Threats category overview macOS Threats category overview Mandiant Hunting Rules category overview Risk Analytics for UEBA category overview Windows Threats category overview Applied Threat Intelligence curated detections overview Verify data ingestion using test rules Configure rule exclusions Rules capacity Manage noisy alerts Configure alert suppression Manage rule exclusion using API Applied Threat Intelligence Applied Threat Intelligence overview Applied Threat Intelligence prioritization View IOCs using Applied Threat Intelligence IC score overview Applied Threat Intelligence fusion feed overview Emerging Threats Center Emerging Threats Center detail view Answer Threat Intelligence questions with Gemini Gemini documentation summaries Use Triage and Investigation Agent to investigate alerts Triage and Investigation Agent dashboard YARA-L 2.0 Get Started Syntax Meta section Events section Match section Outcome section Conditions section Options section Expressions, operators, and other constructs Nested if statements Use OR syntax in the condition section Use N OF syntax with event variables Repeated fields Reference list syntax Detection event sampling YARA-L 2.0 windowing logic Functions Functions for Dashboards Query and investigate Statistics and aggregations Use conditions in Search and Dashboards Create and save visualizations in Search Use metrics in Search Use deduplication in Search and Dashboards Create multi-stage queries Develop detection rules Use context-enriched data in rules Context-aware analysis overview Specify entity risk score in rules Use metric functions for Risk Analytics rules Applied Threat Intelligence fusion feed overview Composite detections overview Construct composite detection rules Rule structure and best practices Manage and troubleshoot Run a rule against historical data Configure rule exclusions View and troubleshoot rule errors Known issues and limitations Reference: Query libraries and transitions YARA-L 2.0 query reference library YARA-L 2.0 dashboard query library Transition from SPL to YARA-L 2.0 Generate search queries with Gemini Generate a YARA-L 2.0 rule using Gemini Investigating threats View Alerts Overview Manage alerts Investigate a GCTI alert Investigate alerts and entity context Searching for data Search for UDM event Use context-enriched fields in UDM search Use UDM Search to investigate an entity Use UDM Search time range and manage queries Use conditions in search and dashboards Use deduplication in search and dashboards Metrics in UDM search using YARA-L 2.0 Use joins in Search YARA-L 2.0 statistics and aggregations Use aggregations in YARA-L 2.0 queries Generate UDM search queries with Gemini UDM search best practices Conduct a raw log search Search raw logs using Raw Log Scan Filter data in raw log search Create a reference list Using investigative views Use investigative views Investigate an asset Work with asset namespaces Investigate a domain Investigate an IP address Investigate a user Investigate a file View information from VirusTotal Filtering data in investigative views Overview of procedural filtering Filter data in User view Filter data in Asset view Filter data in Domain view Filter data in IP Address view Filter data in Hash view Reporting Use context-enriched data in reports Dashboards overview Work with custom dashboards Create a custom dashboard Add a chart to a dashboard Share a personal dashboard Schedule dashboard reports Import and export Google SecOps dashboards Work with Dashboards Dashboards overview Curated Dashboards Manage Native Dashboards Manage charts in Native Dashboards Native Dashboard filters Visualizations in search Configure scheduled reports Data export Export to a Google-managed BigQuery project (legacy) Export to self-managed BigQuery project Stream Data with Advanced BigQuery Export Understand BigQuery data schema Export raw logs to self-managed Google Cloud Storage bucket Administration Close alerts in bulk using the API.
- Administer users Configure feature access control using IAM Configure VPC Service Controls Configure VPC Service Controls for Google SecOps Configure data access control Overview of data RBAC Data RBAC impact on features Configure data RBAC for users Configure data RBAC for data tables Configure data RBAC for reference lists Set up data feeds Feed management user guide CLI user guide Configure audit logs Data retention Google Analytics in Google SecOps Deprovision Self-service deprovisioning for Google SecOps Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Overview of context-aware analytics \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Context-aware analytics incorporates advanced enrichment capabilities earlier in the detection authoring and execution workflow, enabling you to provide the following additional capabilities: Making relevant context available for heuristic-driven contextual risk scoring of detections at detection execution time rather than at the human triage stage Reducing time spent on triage and manually stitching together information from disparate IT security systems (EDR consoles, firewall or proxy logs, CMDB and IAM context, vulnerability scan results) Enabling analysts and detection engineers to filter out entire clusters of threats that may be expected or represent little or no danger to the enterprise (malware testing in a sandbox environment, vulnerabilities and anomalous activity in a development network with no sensitive data or access, and more) Writing rules for context-aware analytics You can use Detection Engine rules to search for entity context data in your Google SecOps account.
- Invalid. $host over 3h after $e1 condition: $e1 and $e2 } Login example using outcome section The following example uses the outcome section to calculate a risk score for the detection. rule Detection { meta: events: $auth.metadata.event type = "USER LOGIN" $auth.metadata.vendor name = "Acme" $auth.metadata.product name = "Acme SSO" $auth.target.user.userid = $user $auth.metadata.event timestamp.seconds > $context.graph.entity.user.termination date.seconds $context.graph.metadata.vendor name = "Microsoft" $context.graph.metadata.product name = "Azure Active Directory" $context.graph.metadata.entity type = "USER" $context.graph.entity.user.userid = $user $context.graph.entity.user.termination date.seconds > 0 match: $user over 15m outcome: $risk score = max( if ( $auth.metadata.event type = "USER LOGIN", 50) + if ( $context.graph.entity.user.title = "Remote" nocase or $context.graph.entity.user.title = "Temp" nocase or $context.graph.entity.user.title = "Vendor" nocase, 40) + if ( $context.graph.entity.user.title = "Legal" nocase, 10) ) condition: $auth and $context } Suspicious process launch example The following example evaluates UDM event process data against IOC context data stored as an entity context. rule ProcessLaunch { meta: events: $ioc.graph.metadata.vendor name = "ACME" $ioc.graph.metadata.product name = "IOCs" $ioc.graph.metadata.entity type = "FILE" $ioc.graph.entity.file.sha256 = $hash $process.metadata.event type = "PROCESS LAUNCH" $process.principal.hostname = $hostname ( not $process.target.process.file.sha256 = "" and $process.target.process.file.sha256 = $hash ) match: $hash over 15m condition: $ioc and $process } Additional qualifiers for entity context To create an event variable that uses an entity context, you must provide a <source> after the event name.
- Comparing entity contexts to other entity contexts Comparing entity contexts to UDM events Repeated fields in entity contexts Sliding windows Calculating a risk score for detections Note: Entity context cannot be used as the pivot for a sliding window.
- Overview of context-aware analytics Supported in: Google secops SIEM Google SecOps lets you view telemetry, entity context, relationships, and vulnerabilities as a single detection within your Google SecOps account.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- User and Entity Behavior Analytics (UEBA) The Risk Analytics for UEBA category offers prebuilt rule sets to detect potential security threats.
- Only users with global scope can access the risk analytics for UEBA category.
- For more information, see Overview of Risk Analytics for UEBA category .
- The specific scope associated with a dashboard determines the level of interaction permitted for global and scoped users : Global users : Maintain full visibility and management capabilities across all dashboards, regardless of scope.

