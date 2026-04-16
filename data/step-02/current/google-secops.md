# Google SecOps

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 146
Unique features: 183

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-04-04 | Multiple-choice question flows |  | Multiple-choice question flows support up to 20 branches in a single step. |
| 2026-04-04 | Playbook condition flows |  | Playbook conditions support up to 20 branches in a single step. |
| 2026-04-02 | Chrome Enterprise Connector |  | The Chrome Enterprise Connector configures recommended export settings and sends Chrome Enterprise Premium data through Google Cloud to Google Security Operations. |
| 2026-04-02 | Chrome Enterprise Premium integration |  | Google SecOps offers a GA integration for Chrome Enterprise Premium data and detection workflows; An improved Chrome Enterprise Premium integration adds streamlined setup, enhanced log context, curated dashboards, and SOAR actions. |
| 2026-04-02 | Curated dashboards for Chrome Enterprise Premium |  | Google SecOps includes curated dashboards for Chrome Enterprise Premium. |
| 2026-04-02 | Curated detections for Chrome Enterprise Premium |  | Google SecOps includes curated detections for Chrome Enterprise Premium. |
| 2026-04-02 | Malicious extension response actions |  | Google SecOps can block or remove malicious extensions and delete blocked extensions from the extension policy. |
| 2026-03-31 | multi-stage queries in YARA-L |  | YARA-L multi-stage queries let one stage feed its output into the next for more granular data transformation; A preview feature that lets one YARA-L query stage feed its output into the next stage. |
| 2026-03-25 | Credential validation for third-party API connectors |  | Google SecOps automatically validates credentials when you create feeds with third-party API connectors. |
| 2026-03-20 | Agentic Automation |  | Agentic Automation lets you embed AI agents directly into Google SecOps workflows. |
| 2026-03-20 | Triage and Investigation Agent results in Case Summary |  | Case Summary now shows TIN results and verdict summaries directly in the case view. |
| 2026-03-18 | Forwarder migration tool |  | The forwarder migration tool helps migrate existing forwarder configurations into Bindplane-managed pipelines. |
| 2026-03-18 | SecOps parser validator |  | The parser validator checks whether logs will be parsed correctly by Google SecOps before ingestion. |
| 2026-03-18 | Single sign-on with custom claims role mapping |  | Bindplane access can be managed through an identity provider with custom claims role mapping. |
| 2026-03-10 | Data processing pipelines |  | Data processing pipelines let you filter, transform, and redact Google SecOps data before ingestion. |
| 2026-03-02 | chronicle.soarAnalyst | 2026-03-02 | This Cloud IAM role for SOAR analysts is being deprecated; deprecated on 2026-03-02. |
| 2026-03-02 | chronicle.soarEngineer | 2026-03-02 | This Cloud IAM role for SOAR engineers is being deprecated; deprecated on 2026-03-02. |
| 2026-03-02 | chronicle.soarViewer | 2026-03-02 | This Cloud IAM role for SOAR viewers is being deprecated; deprecated on 2026-03-02. |
| 2026-03-02 | Unified rules interface |  | The unified rules interface combines custom and curated rule management into a single workflow. |
| 2026-02-25 | Google Cloud VPC Service Controls support |  | Google SecOps now supports Google Cloud VPC Service Controls for perimeter-based protection of resources and data. |
| 2026-02-24 | Cross joins in multi-stage queries |  | Cross joins in YARA-L multi-stage queries let you compare event data against aggregated statistics from earlier stages. |
| 2026-02-24 | RBAC for ingestion metrics |  | Role-based access control now restricts visibility of ingestion metrics in the Data Ingestion and Health dashboard by business scope. |
| 2026-02-20 | Feed metadata on the Feeds page |  | The Feeds page now shows metadata for each feed. |
| 2026-02-20 | Feeds page export to CSV |  | The Feeds page now supports exporting feed data to CSV. |
| 2026-02-20 | Feeds page last refreshed time |  | The Feeds page now displays the last refreshed time for each feed. |
| 2026-02-20 | Feeds page pagination |  | The Feeds page now supports pagination for browsing feeds. |
| 2026-02-20 | Feeds page search filtering |  | The Feeds page now supports searching feeds by feed attributes. |
| 2026-02-12 | Joins without a match section |  | Search can correlate and combine data from multiple sources without requiring a match section. |
| 2026-02-12 | Outer joins in Search |  | Search now supports left and right outer joins that preserve unmatched records. |
| 2026-02-04 | re.capture_all() |  | The YARA-L 2.0 re.capture_all function extracts every non-overlapping regular expression match from a string. |
| 2026-02-03 | Mute an IoC | 2026-02-03 | The Mute an IoC feature removed the mute indicator from the IoC details page; deprecated on 2026-02-03. |
| 2026-02-03 | Share custom column sets |  | Users can share custom column sets in the Events table for consistent team analysis. |
| 2026-01-29 | Rule observability for detections and alerts |  | Detection and alert objects now include metadata showing whether they came from a primary rule run or a rule replay. |
| 2026-01-25 | Alerts timeline view |  | The Alerts section in Cases Overview now includes a timeline view for visualizing alert patterns over time. |
| 2026-01-25 | Structured SOAR Python integration logs |  | Python integration logs are now structured as individual log entries in Google Cloud Logging Explorer. |
| 2026-01-21 | Direct ingestion for Google Cloud Model Armor logs |  | Google Cloud Model Armor logs can now be ingested directly into Google SecOps through an export filter. |
| 2026-01-18 | Integration rollback |  | Commercial response integrations can now be rolled back to their previously installed version. |
| 2026-01-16 | All-time search |  | Search queries can run across the full retention period by selecting All Time in the Search editor time picker. |
| 2026-01-15 | OneMCP for Google SecOps |  | The remote MCP server lets LLM agents perform data-related tasks in Google SecOps. |
| 2026-01-12 | Copy instance metadata |  | Users can copy SOAR instance metadata and share it with Google Support for troubleshooting. |
| 2025-12-24 | ThreatConnect IOC V3 connector |  | Google SecOps can ingest indicators of compromise from ThreatConnect through the v3 REST API. |
| 2025-12-09 | Reference lists | 2025-12-09 | Reference lists are being phased out, and data tables are recommended instead; deprecated on 2025-12-09. |
| 2025-12-08 | N OF syntax |  | The N OF syntax lets queries express conditional logic in the condition section using event variables. |
| 2025-12-08 | OR operator in query conditions |  | The or operator can now be used in the condition section to combine multiple conditions. |
| 2025-12-07 | Alert-specific views |  | The Alert Overview page can display a customized view for each alert based on the playbooks that ran on it. |
| 2025-11-13 | legacySearchRawLogsV2 API |  | The legacySearchRawLogsV2 API can search raw logs within a specified Google SecOps instance. |
| 2025-11-13 | Raw log search CSV export |  | Raw log search results can be downloaded as a CSV file with selectable columns. |
| 2025-11-13 | Raw log search filtering |  | Raw log search results can be filtered by parsing status or by one or more log sources. |
| 2025-11-13 | Raw log search query visibility |  | The Search page now shows the active query and applied filters. |
| 2025-11-13 | Raw log search trend chart toggle |  | The Trend over time graph in Raw log Search can be expanded or collapsed to change the results layout. |
| 2025-11-12 | Emerging Threats |  | Emerging Threats provides AI-powered threat intelligence to highlight relevant campaigns, detection coverage, and response gaps. |
| 2025-11-12 | Triage Agent |  | Triage Agent analyzes alerts, classifies them as true or false positives, and recommends next steps. |
| 2025-11-10 | Nested if statements |  | Nested if statements are supported in Rules, Search, and Dashboards for more complex query logic. |
| 2025-10-31 | Custom Events table column sets |  | Users can create, save, and share custom column sets for the Events table. |
| 2025-10-31 | Search editor auto-collapse |  | The Search editor automatically collapses after a query runs to give results more space. |
| 2025-10-31 | Search panel visibility controls |  | Users can hide or show the Charts and Aggregations panels from the search results view. |
| 2025-10-31 | Search result pagination |  | Broad searches now return paginated results, with control over the number of rows per page. |
| 2025-10-30 | strings.ends_with |  | A YARA-L function that returns true when a string ends with a non-empty suffix. |
| 2025-10-30 | strings.split |  | A YARA-L function that splits a string value using a delimiter, defaulting to a comma. |
| 2025-10-30 | window.range |  | A YARA-L function that returns the range of the input values. |
| 2025-10-28 | ENTITY_RISK_CHANGE UDM event type |  | A new UDM event type enables YARA-L rules to trigger on changes in entity risk score without ingested events. |
| 2025-10-26 | SOAR environment deletion |  | You can now delete high-load SOAR environments directly from the platform. |
| 2025-10-15 | Netskope v1 API feed | 2025-10-15 | The Netskope v1 API feed is no longer supported and users must move to Netskope REST API v2; deprecated on 2025-10-15. |
| 2025-10-07 | prebuilt parser version management |  | A preview feature that lets you control parser updates, compare versions, update manually, and revert to earlier versions. |
| 2025-10-06 | Advanced BigQuery Export |  | A preview feature that provisions managed BigQuery datasets and provides secure read-only access through a linked dataset. |
| 2025-09-30 | Events table column customization |  | A Search feature that lets you choose which columns appear in the Events table and dashboard widget tables. |
| 2025-09-28 | Debian support for Remote Agents |  | A new deployment option that lets you install a Remote Agent using Debian. |
| 2025-09-28 | Podman support for Remote Agents |  | A new deployment option that lets you install a Remote Agent using Podman. |
| 2025-09-27 | joins in YARA-L Search queries |  | A preview feature that lets statistical Search queries use joins to correlate data from multiple sources. |
| 2025-09-11 | SecOps Labs |  | SecOps Labs lets users run Gemini and other intelligence experiments in Google SecOps without disrupting production systems. |
| 2025-09-10 | Data retention start date |  | The read-only Data Retention page shows the start date of an account's data retention period. |
| 2025-09-07 | Advanced job scheduling |  | Advanced job scheduling provides more precise, calendar-like control for scheduling scripts. |
| 2025-09-07 | Custom fields in the Close Case dialog |  | Administrators can add custom fields to the Close Case dialog to streamline case closure. |
| 2025-09-07 | Dynamic Fields | 2025-09-07 | Dynamic Fields was the legacy feature replaced by custom fields in the Close Case dialog; deprecated on 2025-09-07. |
| 2025-08-21 | Mandiant Hunt Cloud Classification composite detection content |  | The curated detections rule pack now includes composite detection content for Mandiant Hunt Cloud Classification across AWS, GCP, and Azure. |
| 2025-08-20 | Composite detections |  | Composite detections link multiple YARA-L rules to detect complex, multistage threats; Composite detections let users link multiple YARA-L rules to detect complex multistage threats. |
| 2025-08-10 | Expression Builder pre-built filters |  | Expression Builder now includes pre-built filters and clearer transformer guidance to streamline query creation. |
| 2025-08-10 | Product-centric feeds access permissions |  | Custom IAM roles can grant access to product-centric feeds with the chronicle.feedPacks.get and chronicle.feedPacks.list permissions. |
| 2025-08-10 | Remote agent notifications |  | Remote agent notifications alert users to new version releases and agent downtime based on permissions and environments. |
| 2025-08-05 | Array and array_distinct aggregation limits |  | The element limit for array and array_distinct aggregation functions in YARA-L has increased to 1,000. |
| 2025-08-05 | Conditions in UDM search and dashboards |  | The condition clause lets users filter outcome aggregates and use OR and n of expressions in UDM search and dashboards. |
| 2025-08-05 | Deduplicate events in searches and dashboards |  | The dedup section removes duplicate events after the match clause in searches and dashboards. |
| 2025-08-05 | Earliest and latest timestamps |  | The earliest and latest timestamps let users extract the time range of aggregated data with microsecond precision. |
| 2025-08-05 | Metrics functions in UDM searches |  | Metrics functions can now be used in the outcome section of UDM searches to access aggregated historical data. |
| 2025-08-05 | Multi-stage query aggregations and joins |  | Multi-stage queries can layer aggregations, calculate baselines and trends, and join data across stages. |
| 2025-08-05 | Search result limit keyword |  | The limit keyword restricts the number of results returned by a search. |
| 2025-08-04 | Auto Extraction XML log support |  | Auto Extraction now supports XML-formatted logs in addition to JSON-formatted logs. |
| 2025-08-03 | Automated retries for playbook actions |  | Playbooks can automatically retry individual actions that fail due to temporary issues, with configurable attempts and intervals. |
| 2025-08-03 | Custom Fields Form widget |  | The Custom Fields Form widget is supported in Playbook View. |
| 2025-07-27 | Playbook Loops |  | Playbooks can iterate over lists or entities and run actions for each item, including inside playbook blocks. |
| 2025-07-27 | Playbook Simulator |  | Playbook Simulator can visualize and debug playbooks that contain loops, with updated step ordering and auto-scrolling to recent activity. |
| 2025-07-22 | Silent Host Monitoring |  | Silent Host Monitoring can use detection rule-based configuration with UDM fields or labels within a specified time window; The Silent Host Monitoring widget displays hosts that were active in the last 7 days but have not reported recently. |
| 2025-07-07 | Dashboards |  | Dashboards provide enhanced data visualization, investigations, and threat hunting with reports, drilldowns, markdown widgets, and curated dashboards. |
| 2025-07-05 | Share Case Queue Filters |  | Users can save case queue filters and share them with individual users, SOC roles, or all users in the organization. |
| 2025-06-19 | Content Hub |  | Content Hub centralizes management of content packs, dashboards, search queries, detections, response integrations, and power ups. |
| 2025-06-19 | Product Centric Feed Management |  | Users can configure multiple log-type feeds for the same product type on a single page. |
| 2025-06-18 | BindPlane Agent Logging and Health |  | The BindPlane Agent Logging and Health widget shows logging activity and agent health when BindPlane agent logs are ingested. |
| 2025-06-18 | Log Type Distribution Charts |  | Log type distribution charts have improved readability and usability. |
| 2025-06-18 | Parser extensions |  | Parser extensions can now remove existing UDM field mappings in Google SecOps. |
| 2025-06-18 | Throughput in Bytes |  | The Throughput in Bytes widget shows ingestion volume over time. |
| 2025-06-08 | Advanced Reports |  | Advanced Reports now supports case custom fields for Looker-based analysis and visualizations. |
| 2025-06-08 | Playbook permissions for API key roles |  | Playbook permissions now support SOC roles associated with API keys in addition to user SOC roles. |
| 2025-05-26 | Storage Transfer Service-based feeds |  | Google SecOps adds new preview feeds that use Storage Transfer Service for log ingestion. |
| 2025-05-22 | Environment load balancing |  | Environment load balancing improves stability and fair resource sharing in multi-tenant environments. |
| 2025-05-09 | Self-service custom log types |  | Users can create custom log types instantly without SecOps support. |
| 2025-05-05 | Light theme |  | Google SecOps now includes a light theme option for the platform. |
| 2025-05-02 | Auto extraction of JSON logs |  | Raw JSON log fields can be used directly in search, detection rules, and Native Dashboards without requiring a parser. |
| 2025-04-25 | Azure Event Hub feed integration |  | Google SecOps now supports native Azure Event Hub integration for real-time log ingestion without Azure Blob Storage. |
| 2025-04-21 | Cloud Threats rule packs |  | Curated Detections now includes rule packs for Office 365 and Okta as public preview content. |
| 2025-04-18 | Chrome Enterprise Threats category |  | Curated Detections adds a preview detection category for extension and browser threats. |
| 2025-04-17 | Entity Context in Search |  | Entity Context in Search lets users find and view entity-related context events for deeper incident analysis. |
| 2025-04-07 | Premium parsers |  | Certain high-volume parsers are classified as premium and receive expedited support. |
| 2025-04-06 | Quick actions |  | Administrators can predefine actions that analysts run directly from cases and alerts. |
| 2025-04-06 | What's New panel |  | The What's New menu shows the top five new Google SecOps features. |
| 2025-04-04 | Extractors |  | Extractors let users pull specific fields from high-volume log sources to improve log management. |
| 2025-04-02 | Medium Priority rule set |  | The Applied Threat Intelligence Medium Priority rule set adds indicator prioritization for commodity malware. |
| 2025-03-18 | Statistics and aggregations in UDM search using YARA-L 2.0 |  | UDM search can run statistical queries and group results with YARA-L 2.0. |
| 2025-03-16 | Case SLA pause and resume |  | Users can pause and resume SLA timers on cases. |
| 2025-03-16 | Remote agent downtime notifications |  | Users can opt in to in-app or email notifications when a remote agent is down. |
| 2025-03-16 | Remote agent high availability |  | Remote agents support high-availability deployments for connectors, actions, and jobs. |
| 2025-03-16 | Remote connector scheduling |  | A cloud-based scheduler manages remote connectors for improved performance and scalability. |
| 2025-03-11 | Cloud Hacktool rule pack |  | Curated Detections added Google Cloud rules for detecting common open source hacktools. |
| 2025-03-11 | URL indicator matching |  | Applied Threat Intelligence can match URL indicators. |
| 2025-03-08 | Google Cloud Identity user mapping |  | Administrators can bulk provision and map users into the platform using Google Cloud Identity email groups. |
| 2025-02-22 | Custom fields for cases and alerts |  | Analysts can use custom fields in case and alert workflows, and add them as widgets, playbook actions, or placeholders. |
| 2025-02-20 | AWS GuardDuty rule set |  | The AWS GuardDuty rule set in Cloud Threat Detections gained three new rules. |
| 2025-02-20 | Data tables |  | Data tables are multicolumn lookup structures that users can create or import into Google SecOps and use in rules. |
| 2025-02-15 | Close case custom fields |  | Custom fields can be added to the Close Case dialog to require analysts to provide specific information when closing a case; Custom fields can be added to the Close Case page to require analysts to provide specific information when closing a case. |
| 2025-02-15 | User Preferences |  | The User Preferences dialog centralizes time zone, date and time, notification, and accessibility settings. |
| 2025-01-28 | Environment groups |  | Environment groups let administrators organize environments into logical categories for user access, IdP mapping, playbooks, and case filtering. |
| 2025-01-26 | Concurrent logins in a single browser profile | 2025-02-10 | Google SecOps no longer supports concurrent logins with multiple user accounts in the same browser profile; deprecated on 2025-02-10. |
| 2025-01-23 | CBN alerts | 2025-01-23 | CBN alerts will no longer be available and should be migrated to the YARA-L detection engine; deprecated on 2025-01-23. |
| 2025-01-23 | Enterprise Insights page | 2025-01-23 | The Enterprise Insights page will no longer be available; deprecated on 2025-01-23. |
| 2025-01-23 | YARA-L 2.0 functions |  | Google SecOps added new YARA-L 2.0 functions for use in Rules and Search. |
| 2025-01-20 | Python 3.7 support | 2025-06-01 | Python 3.7 support for Marketplace integrations is being removed in favor of Python 3.11; deprecated on 2025-06-01. |
| 2024-11-25 | MacOS Threats detection category |  | Curated Detections added a MacOS Threats category that includes a Mandiant Intel Emerging Threats rulepack. |
| 2024-10-06 | Entity search Equals condition |  | The SOAR search page now supports an Equals condition for more precise entity searches. |
| 2024-09-30 | Case merge when requester is not the assignee |  | Cases can now be merged even when the requester is different from the assignee, both in the platform and through the API. |
| 2024-09-30 | Case report includes case wall content |  | Case reports now include all information written on the case wall. |
| 2024-07-28 | Gemini prompt-based playbook creation |  | Gemini now supports creating new playbooks from prompts. |
| 2024-07-17 | Managed BigQuery data lake for export | 2024-12-31 | The managed BigQuery data lake for export will no longer be accessible to most Google SecOps customers; deprecated on 2024-12-31. |
| 2024-07-15 | Symantec Event Export feed | 2024-07-15 | The Symantec Event Export third-party API feed has been discontinued; deprecated on 2024-07-15. |
| 2024-07-13 | IDE staging mode |  | The IDE now includes a staging mode for testing certified, custom, and upgraded integrations before production release. |
| 2024-07-13 | Python 2.7 marketplace integration runtime | 2024-10-13 | Python 2.7 support for Marketplace integrations is being deprecated and removed; deprecated on 2024-10-13. |
| 2024-06-26 | BindPlane agent log collection |  | The BindPlane agent can collect logs from Windows events, SQL databases, files, and syslog and send them to Google SecOps. |
| 2024-06-18 | Access Transparency integration |  | Google SecOps now integrates with Access Transparency to write logs when Google personnel access supported customer content. |
| 2024-06-18 | Data RBAC |  | Data RBAC lets administrators control user access to Google SecOps data based on assigned roles. |
| 2024-05-22 | AWS curated detections rule sets |  | Cloud Threats AWS rule sets gained 40 new curated detections for malicious activity against AWS resources. |
| 2024-05-06 | Gemini incident remediation |  | Gemini can suggest follow-on remediation steps based on the event information it returns. |
| 2024-05-06 | Gemini search assistance |  | Gemini can build, edit, and run natural-language searches for relevant events. |
| 2024-05-06 | Gemini search summaries |  | Gemini can automatically summarize search results and answer follow-up questions about those summaries. |
| 2024-05-06 | Gemini security and threat-intelligence Q&A |  | Gemini can answer security-domain questions and threat-intelligence questions about actors, IOCs, and related topics. |
| 2024-05-06 | Gemini YARA-L rule generation |  | Gemini can create new YARA-L rules from the UDM search queries it generates. |
| 2024-05-03 | Gemini playbook creation |  | Gemini can generate a fully structured playbook from a well-structured prompt. |
| 2024-04-26 | HTTPS endpoint feed ingestion |  | Feeds can push logs through an HTTPS endpoint using the feed management UI or API, including Amazon Data Firehose, Google Cloud Pub/Sub, and webhooks. |
| 2024-04-22 | BigQuery ingestion_stats table | 2024-05-15 | The ingestion_stats table in BigQuery is deprecated and will stop being updated; deprecated on 2024-05-15. |
| 2024-04-22 | Chronicle ingestion alerting system | 2024-09-01 | The Chronicle ingestion alerting system is deprecated and will stop sending alerts; deprecated on 2024-09-01. |
| 2024-04-15 | UDM labels fields | 2024-11-29 | The labels fields for several UDM nouns are deprecated in search results and should be replaced with key and value additional.fields mappings; deprecated on 2024-11-29. |
| 2024-04-03 | AWS curated detections rule packs |  | Curated Detections rule packs covering AWS threats are generally available to Chronicle Enterprise and Enterprise Plus customers. |
| 2024-03-25 | Applied Threat Intelligence active breach alerting |  | Mandiant incident response intelligence can alert on potential active breaches. |
| 2024-03-25 | Applied Threat Intelligence behavioral detections |  | Real-time insights help protect against emerging threats with curated behavioral detections. |
| 2024-03-25 | Applied Threat Intelligence detection engineering and response automation |  | Fusion intelligence enables customer-authored rules and response playbooks for detection engineering and automation. |
| 2024-03-25 | Applied Threat Intelligence event-level enrichment |  | Telemetry in Chronicle is enriched with Google Threat Intelligence, including threat-intelligence associations such as campaigns and actors. |
| 2024-03-25 | Applied Threat Intelligence indicator matching |  | Curated detections use augmented prioritization, customer-context noise reduction, and correlation techniques for sophisticated indicator matching. |
| 2024-03-25 | Applied Threat Intelligence insights |  | Applied Threat Intelligence provides curated insights into associations between indicators, threat actors, campaigns, and malware. |
| 2024-03-25 | Applied Threat Intelligence investigation and triage views |  | Curated views show indicator associations, threat context, and environment statistics for investigation and triage. |
| 2024-03-22 | reCAPTCHA Enterprise log ingestion |  | Chronicle now supports direct ingestion and parsing of reCAPTCHA Enterprise logs from Google Cloud. |
| 2024-03-22 | Serverless Threats rule set |  | Cloud Threat Detections added a Serverless Threats rule set for detecting compromise or abuse of serverless resources such as Cloud Run and Cloud Functions. |
| 2024-03-20 | Cloud Threat Detections finding-based detections |  | Cloud Threat Detections can create detections when findings from Security Command Center Event Threat Detections, Cloud Armor, Sensitive Actions Service, or custom Event Threat Detection modules are identified. |
| 2024-03-13 | Integration job auto-updates |  | Jobs are now updated automatically when an integration is updated, and legacy jobs are flagged in the Jobs Scheduler for follow-up. |
| 2024-02-22 | External connectors API endpoints | 2024-02-22 | Several external connectors API endpoints are deprecated and replacement endpoints are provided for connector management; deprecated on 2024-02-22. |
| 2024-02-20 | Chronicle Tokyo region |  | Chronicle now supports customer data storage in the Tokyo, Japan region and provides a regional API endpoint there. |
| 2024-02-20 | timestamp.get_date() |  | Chronicle now supports the timestamp.get_date() function in YARA-L 2.0. |
| 2024-02-12 | Risk Analytics |  | Risk Analytics adds entity and activity risk scoring, dashboards, watchlists, and curated and custom detection support. |
| 2024-02-08 | Playbook folder delete audit logs |  | The platform now records audit logs when a playbook folder is deleted. |
| 2024-01-31 | AWS feed management log types |  | Chronicle feed management API now supports additional AWS log types for creating AWS data feeds. |
| 2024-01-31 | Detection Engine event variable joins |  | The Detection Engine now supports event variable joins on OR expressions and function calls. |
| 2024-01-24 | Cloud Threat Detections SCC passthrough detections |  | Cloud Threat Detections now alerts on Security Command Center Event Threat, Virtual Machine Threat, and Container Threat Detection findings. |
| 2024-01-16 | UDM Search entity investigation |  | UDM Search can now return entity details alongside matching events and alerts when the query identifies a specific entity. |
| 2024-01-04 | General session placeholders |  | The SOAR side of the platform now includes session-state placeholders such as current user and platform values in a General section. |
| 2024-01-04 | Large alert trimming |  | Alerts with more than 500 entities are ingested with key entities retained and the excess entities removed to prevent performance issues. |
| 2023-12-13 | AI Investigation widget |  | The AI Investigation widget lets users review the whole case and generates a case summary with remediation next steps. |
| 2023-12-13 | Duet AI natural-language event search |  | Duet AI lets Security Operations users search event data in natural language and translates queries into Chronicle's unified data model. |

Source file slug: `google-secops.md`

