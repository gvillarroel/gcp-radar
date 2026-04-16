---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.715Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "OR operator in query conditions"
feature_slug: "or-operator-in-query-conditions"
latest_feature_date: "2025-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc"
keywords:
  - "operator"
  - "query"
  - "conditions"
  - "can"
  - "now"
  - "used"
  - "condition"
  - "section"
---

# OR operator in query conditions

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The or operator can now be used in the condition section to combine multiple conditions.

## Extended Definition

The or operator can now be used in the condition section to combine multiple conditions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- For example: principal.process.file.full path = "C:\\Program Files (x86)\\Google\\Application\\chrome.exe" target.process.command line = "cmd.exe /c \"c:\\program files\\a.exe\"" Boolean expressions : Use AND , OR , and NOT to combine conditions and narrow results.
- The following example shows how to enter a query to match the common UDM fields that might contain the specified IP address: ip = "1.2.3.4" You can match a grouped field using a regular expression and using the nocase operator.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To add scopes to the role, we recommend the following: Select Name in Condition type , the operator in Operator , and enter the scope name in Value . /<scopename> To assign multiple scopes, add more conditions using the OR operator.
- The following operators let you create precise rules for controlling access to multiple scopes with a single IAM condition: ENDS WITH : checks if the scope name ends with a specific word.
- To assign a scope to the user, add conditions to the Chronicle Restricted Data Access role that is assigned to the user (does not apply to global access roles).
- The condition builder provides an interactive interface to select the condition type, operator, and other applicable details about the expression.

### "SIEM table of contents \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Google SecOps SIEM Product overview Sign in to Google SecOps Quickstart: Conduct a search Quickstart: Investigate an alert Configure user preferences (SIEM only) Onboarding to Google SecOps Overview of the process Understand your Google SecOps billing components Configure Google Cloud project for Google SecOps Configure an identity provider Configure a Google Cloud identity provider Configure a third-party identity provider Configure feature access control using IAM Configure data RBAC using IAM RBAC user guide for applications not using IAM Google SecOps permissions in IAM Link Google SecOps to Google Cloud services Ingest data Ingest entity data Overview of data ingestion Supported data sets and default parsers Ingest data to Google SecOps Ingest logs from specific sources Install and configure forwarders Overview of Google SecOps forwarders Google SecOps forwarder for Linux Google SecOps forwarder for Windows on Docker Google SecOps forwarder executable for Windows Manage forwarder configurations through Google SecOps Troubleshoot common Linux forwarder issues Set up data feeds Feed management overview Create and manage feeds using the feed management UI Create an Azure Event Hub feed Create and manage feeds using the feed management API Use ingestion scripts deployed as Cloud Functions Use the Ingestion API DataTap Configuration API Use the Bindplane agent Customer Management API Data Export API Data Export API (Enhanced) Monitor data ingestion Use Data Ingestion and Health dashboard Use Cloud Monitoring for ingestion notifications View your billed ingestion volume Work with Google SecOps parsers Overview of log parsing Overview of the Unified Data Model Manage prebuilt and custom parsers Request prebuilt and create custom log types Parser extensions Parser extension examples Important UDM fields for parser data mapping Tips and troubleshooting when writing parsers Format log data as UDM Enrichment UDM enrichment and aliasing overview Aliasing Enrichment How Google SecOps enriches event and entity data Block enrichment from specific flows Using the Entity Context Graph (ECG) Auto Extraction overview Detecting threats View alerts and IOCs Review potential security threats Single event rules Multiple event rules Composite detections Overview of composite detections Monitor for events using rules View rules in the Rules Dashboard Manage unified rules Troubleshoot rule runtime errors Understand rule quotas Understand rule quotas Risk-based alerting with entity only rules Understand threat coverage with the MITRE ATT&CK matrix View previous versions of a rule Archive rules Download events Run a rule against live data Run a rule against historical data Optimize detection and reporting performance Understand rule replays and MTTD Understand rule detection delays Manage your rule run schedule Configure customized schedules for rules Understand rule run scheduling Detection limits Rule errors Create context-aware analytics Overview of context-aware analytics Use Cloud Sensitive Data Protection data in context-aware analytics Use context-enriched data in rules Use default detection rules Risk analytics Risk Analytics Quickstart guide Overview of Risk Analytics Use the Risk Analytics dashboard Metric functions for Risk Analytics rules Watchlist Quickstart guide Specify entity risk score in rules Watchlists FAQ Risk Analytics FAQ Work with curated detections Use curated detections to identify threats Use curated detection rules for third-party vendor alerts Use the curated detections UI Cloud Threats category overview Composite Rules category overview Non-prioritized IoC Matching threats category overview Chrome Enterprise Threats category overview Linux Threats category overview macOS Threats category overview Mandiant Hunting Rules category overview Risk Analytics for UEBA category overview Windows Threats category overview Applied Threat Intelligence curated detections overview Verify data ingestion using test rules Configure rule exclusions Rules capacity Manage noisy alerts Configure alert suppression Manage rule exclusion using API Applied Threat Intelligence Applied Threat Intelligence overview Applied Threat Intelligence prioritization View IOCs using Applied Threat Intelligence IC score overview Applied Threat Intelligence fusion feed overview Emerging Threats Center Emerging Threats Center detail view Answer Threat Intelligence questions with Gemini Gemini documentation summaries Use Triage and Investigation Agent to investigate alerts Triage and Investigation Agent dashboard YARA-L 2.0 Get Started Syntax Meta section Events section Match section Outcome section Conditions section Options section Expressions, operators, and other constructs Nested if statements Use OR syntax in the condition section Use N OF syntax with event variables Repeated fields Reference list syntax Detection event sampling YARA-L 2.0 windowing logic Functions Functions for Dashboards Query and investigate Statistics and aggregations Use conditions in Search and Dashboards Create and save visualizations in Search Use metrics in Search Use deduplication in Search and Dashboards Create multi-stage queries Develop detection rules Use context-enriched data in rules Context-aware analysis overview Specify entity risk score in rules Use metric functions for Risk Analytics rules Applied Threat Intelligence fusion feed overview Composite detections overview Construct composite detection rules Rule structure and best practices Manage and troubleshoot Run a rule against historical data Configure rule exclusions View and troubleshoot rule errors Known issues and limitations Reference: Query libraries and transitions YARA-L 2.0 query reference library YARA-L 2.0 dashboard query library Transition from SPL to YARA-L 2.0 Generate search queries with Gemini Generate a YARA-L 2.0 rule using Gemini Investigating threats View Alerts Overview Manage alerts Investigate a GCTI alert Investigate alerts and entity context Searching for data Search for UDM event Use context-enriched fields in UDM search Use UDM Search to investigate an entity Use UDM Search time range and manage queries Use conditions in search and dashboards Use deduplication in search and dashboards Metrics in UDM search using YARA-L 2.0 Use joins in Search YARA-L 2.0 statistics and aggregations Use aggregations in YARA-L 2.0 queries Generate UDM search queries with Gemini UDM search best practices Conduct a raw log search Search raw logs using Raw Log Scan Filter data in raw log search Create a reference list Using investigative views Use investigative views Investigate an asset Work with asset namespaces Investigate a domain Investigate an IP address Investigate a user Investigate a file View information from VirusTotal Filtering data in investigative views Overview of procedural filtering Filter data in User view Filter data in Asset view Filter data in Domain view Filter data in IP Address view Filter data in Hash view Reporting Use context-enriched data in reports Dashboards overview Work with custom dashboards Create a custom dashboard Add a chart to a dashboard Share a personal dashboard Schedule dashboard reports Import and export Google SecOps dashboards Work with Dashboards Dashboards overview Curated Dashboards Manage Native Dashboards Manage charts in Native Dashboards Native Dashboard filters Visualizations in search Configure scheduled reports Data export Export to a Google-managed BigQuery project (legacy) Export to self-managed BigQuery project Stream Data with Advanced BigQuery Export Understand BigQuery data schema Export raw logs to self-managed Google Cloud Storage bucket Administration Close alerts in bulk using the API.

