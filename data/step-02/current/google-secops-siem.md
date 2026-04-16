# Google SecOps SIEM

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 147
Unique features: 219

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-31 | Multi-stage queries |  | Multi-stage YARA-L queries let you feed one query stage's output into the next for more granular transformation. |
| 2026-03-25 | Credential validation for third-party API connectors |  | Third-party API connectors now validate credentials automatically when you create a feed. |
| 2026-03-18 | Forwarder migration tool |  | The migration tool helps move existing forwarder configurations into Bindplane-managed pipelines. |
| 2026-03-18 | SecOps parser validator |  | The parser validator checks whether logs will be parsed correctly from the snapshot view before data arrives in Google SecOps. |
| 2026-03-18 | Single sign-on with custom claims role mapping |  | Bindplane access can be managed through an identity provider using custom claims role mapping. |
| 2026-03-10 | Data processing pipelines |  | Data processing pipelines filter, transform, and redact Google SecOps data before ingestion. |
| 2026-03-02 | Unified rules interface |  | The unified rules interface combines custom and curated rule management in a single workflow. |
| 2026-02-25 | VPC Service Controls |  | VPC Service Controls protect Google Cloud resources and data with service perimeters to reduce exfiltration risk. |
| 2026-02-24 | Cross joins in multi-stage queries |  | Cross joins in YARA-L 2.0 multi-stage queries compare individual UDM events against aggregated statistics from earlier stages. |
| 2026-02-24 | RBAC for ingestion metrics |  | RBAC for ingestion metrics restricts visibility of ingestion health data based on a user's business scope. |
| 2026-02-20 | Feed last refreshed time |  | The Feeds page now shows the last refreshed time for each feed. |
| 2026-02-20 | Feed metadata export to CSV |  | The Feeds page now supports exporting feed metadata to CSV. |
| 2026-02-20 | Feed pagination |  | The Feeds page now supports pagination. |
| 2026-02-20 | Feed search filtering |  | The Feeds page now supports filtering by feed attributes. |
| 2026-02-12 | Joins without a match section |  | Join operations can correlate data from multiple sources without requiring a match section. |
| 2026-02-12 | Outer joins |  | Left and right outer joins return unmatched records from the primary source with null values for missing fields. |
| 2026-02-04 | re.capture_all() |  | The re.capture_all function returns every non-overlapping regular expression match in a string. |
| 2026-02-03 | Mute an IoC | 2026-02-03 | The Mute an IoC capability was removed from the IoC details page; deprecated on 2026-02-03. |
| 2026-02-03 | Shared custom column sets |  | Users can share custom column sets in the Events table for consistent analysis across teams; Users can create, save, and share custom column sets in the Events table. |
| 2026-01-29 | Detection timing details |  | Detection records now distinguish primary rule runs from rule replays in dashboards and the Alerts lister. |
| 2026-01-21 | Direct ingestion of Google Cloud Model Armor logs |  | Google SecOps can ingest Google Cloud Model Armor logs directly through an export filter and Google Cloud Logging. |
| 2026-01-16 | All-time search |  | Users can search across the full retention period by selecting All Time in the Search editor time picker; Users can run searches over the full retention period by selecting All Time. |
| 2025-12-24 | Single-call indicator ingestion |  | The connector can ingest complete indicator objects, including attributes, tags, and security labels, in one API call. |
| 2025-12-24 | ThreatConnect IOC v3 connector |  | Google SecOps supports ingesting ThreatConnect indicators of compromise through the ThreatConnect v3 REST API. |
| 2025-12-24 | ThreatConnect TQL filtering |  | The ThreatConnect connector can use ThreatConnect Query Language to run highly targeted indicator searches. |
| 2025-12-24 | ThreatConnect update synchronization |  | Changes to ThreatConnect indicators are replicated into Google SecOps every 30 minutes. |
| 2025-12-24 | THREATCONNECT_IOC_V3 log type |  | Data ingested through the connector is identified by the THREATCONNECT_IOC_V3 log type. |
| 2025-12-08 | N OF syntax |  | Users can write conditional logic with N OF syntax in the condition section of queries. |
| 2025-12-08 | OR operator in condition sections |  | Users can use the or operator in the condition section to combine multiple conditions. |
| 2025-11-13 | legacySearchRawLogsV2 API |  | A new legacySearchRawLogsV2 API is available for searching raw logs in a specific Google SecOps instance. |
| 2025-11-13 | Raw log search CSV export |  | Raw log search results can be downloaded as a CSV file. |
| 2025-11-13 | Raw log search filter by log source |  | Raw log search can filter results by one or more log sources. |
| 2025-11-13 | Raw log search filter by parsing status |  | Raw log search can filter results by parsing status. |
| 2025-11-13 | Raw log search trend graph collapse control |  | Users can expand or collapse the Trend over time graph in Raw log search. |
| 2025-11-13 | Search query and filter visibility |  | The Search page now displays the current query and applied filters. |
| 2025-11-12 | Automated detection rule drafting |  | When Emerging Threats finds a coverage gap, Gemini can automatically draft new detection rules. |
| 2025-11-12 | Emerging Threats page |  | The Emerging Threats page provides AI-powered threat intelligence for understanding current threat campaigns and coverage gaps. |
| 2025-11-12 | Triage Agent |  | Triage Agent investigates alerts and returns a disposition, summary, and investigation timeline. |
| 2025-11-10 | Nested if statements |  | Users can nest if statements within outcomes, events, and then-else clauses to write more complex logic. |
| 2025-10-31 | Charts and Aggregations panel visibility controls |  | Users can hide or show the Charts and Aggregations panels from the View Options list. |
| 2025-10-31 | Paginated search results |  | Broad search queries now return paginated results with a selectable rows-per-page setting. |
| 2025-10-31 | Search editor auto-collapse |  | The search editor automatically collapses after a query runs to provide more space for results. |
| 2025-10-30 | strings.ends_with |  | The strings.ends_with function returns true when a string ends with a non-empty suffix. |
| 2025-10-30 | strings.split |  | The strings.split function splits a string using a delimiter, with a comma as the default. |
| 2025-10-30 | window.range |  | The window.range function returns the range of the input values it finds. |
| 2025-10-29 | Chrome Enterprise Premium integration |  | Provides an improved integration for Chrome Enterprise Premium with streamlined connection to Google SecOps, enhanced log context, updated documentation, curated dashboards, and related SOAR actions. |
| 2025-10-28 | Entity-only rules for risk-based alerting |  | Lets YARA-L detection rules trigger on changes in entity risk score through the ENTITY_RISK_CHANGE UDM event type. |
| 2025-10-15 | Netskope REST API v1 feed | 2025-10-15 | The Netskope REST API v1 feed for Google SecOps is deprecated; deprecated on 2025-10-15. |
| 2025-10-08 | Multi-stage queries in YARA-L |  | Allows one YARA-L query stage to feed directly into the next, with support for a root stage and up to four named stages. |
| 2025-10-07 | Prebuilt parser version management |  | Lets administrators control deployment, comparison, update, and rollback of prebuilt parser versions. |
| 2025-09-30 | Events table column customization in Search |  | Lets users choose which columns appear in the Events table on Search pages and in dashboard widgets. |
| 2025-09-27 | Joins in YARA-L Search queries |  | Adds join support to statistical YARA-L Search queries that include a match section. |
| 2025-09-10 | Data retention start date |  | Adds a read-only Data Retention page that shows the start date of an account's data retention period. |
| 2025-08-21 | Composite detection content for Mandiant Hunt Cloud Classification |  | Adds composite detection content for Mandiant Hunt Cloud Classification across AWS, GCP, and Azure. |
| 2025-08-20 | Composite detections |  | Links multiple YARA-L rules to detect complex multistage threats through composite detections; Composite detections let users link multiple YARA-L rules to detect complex, multistage threats. |
| 2025-08-10 | Product-centric feeds permissions |  | Exposes permissions for managing product-centric feeds through custom IAM roles. |
| 2025-08-05 | array and array_distinct limit increase |  | Raises the array and array_distinct aggregation limit from 25 to 1,000 elements. |
| 2025-08-05 | Condition clause in UDM searches and dashboards |  | Adds a condition clause for filtering outcome aggregates in UDM searches and dashboards. |
| 2025-08-05 | earliest and latest timestamps |  | Adds earliest and latest timestamps for extracting the time range of aggregated data. |
| 2025-08-05 | Event deduplication in searches and dashboards |  | Adds a dedup section to remove duplicate events after the match clause in searches and dashboards. |
| 2025-08-05 | Layered aggregations in multi-stage queries |  | Expands multi-stage queries with layered aggregations, baselines, deviations, trends, and joins across stages. |
| 2025-08-05 | limit keyword for search results |  | Adds the limit keyword to restrict the number of search results returned. |
| 2025-08-05 | Metrics functions in UDM searches |  | Lets UDM searches use metrics functions in the outcome section to query aggregated historical data. |
| 2025-08-04 | Auto Extraction |  | Auto Extraction lets raw log fields be used directly in search, detection rules, and Native Dashboards for JSON and XML logs; Auto Extraction lets raw log fields be used directly in search, detection rules, and Native Dashboards for JSON and XML logs. |
| 2025-07-22 | Silent Host Monitoring |  | Silent Host Monitoring now supports detection rule-based configuration using UDM fields or labels within a specified time window. |
| 2025-07-21 | Parser documentation for log sources |  | New parser documentation is available for additional log sources to help ingest and normalize logs. |
| 2025-07-07 | Google SecOps Dashboards |  | Google SecOps Dashboards add curated investigation and threat-hunting dashboards, reports, drilldowns, Markdown widgets, and SOAR data visibility. |
| 2025-06-19 | Product-centric feed management |  | Product-centric feed management lets you configure multiple log-type feeds for the same product on a single page in Preview. |
| 2025-06-18 | BindPlane agent logging and health dashboard widget |  | A dashboard widget visualizes BindPlane agent logging activity and agent health. |
| 2025-06-18 | Log type distribution charts |  | Log type distribution charts have been improved for readability and usability. |
| 2025-06-18 | Silent Host Monitoring dashboard widget |  | A dashboard widget shows hosts that were active in the last seven days but have not reported recently. |
| 2025-06-18 | Throughput in bytes dashboard widget |  | A dashboard widget shows ingestion volume over time in bytes. |
| 2025-06-18 | UDM field mapping removal via parser extensions |  | Parser extensions can now remove existing UDM field mappings in Google SecOps. |
| 2025-05-26 | Storage Transfer Service-based feeds |  | Preview now lets existing tenants create new feeds using Storage Transfer Service-based feed types. |
| 2025-05-12 | Detection table UI APIs |  | New APIs for the detection UI page may require updated permissions for custom roles. |
| 2025-05-09 | Self-service custom log types |  | Users can create custom log types instantly without SecOps support to speed up onboarding. |
| 2025-05-05 | Light theme |  | A new light theme adds a lighter color palette to the Google SecOps interface. |
| 2025-04-25 | Azure Event Hub feed |  | Google SecOps can ingest logs directly from Azure Event Hub through the feed management API or web interface without requiring Azure Blob Storage. |
| 2025-04-21 | Office 365 rule pack |  | Curated Detections now includes a rule pack covering Office 365 threats. |
| 2025-04-21 | Okta rule pack |  | Curated Detections now includes a rule pack covering Okta threats. |
| 2025-04-18 | Chrome Enterprise Threats category |  | This Curated Detections category provides rule sets for extension and browser threats. |
| 2025-04-17 | Entity Context in Search |  | Entity Context in Search lets users find and view context events related to entities using UDM entity context data. |
| 2025-04-07 | Premium parsers |  | Specific high-volume parsers are classified as premium and receive expedited support handling. |
| 2025-04-04 | Log extractors |  | Extractors let users pull specific fields from high-volume log sources to optimize log management. |
| 2025-04-02 | Medium Priority rule set |  | Applied Threat Intelligence adds the Medium Priority rule set to expand prioritization logic to commodity malware. |
| 2025-03-18 | YARA-L 2.0 statistical queries |  | YARA-L 2.0 now supports statistical queries and result grouping over UDM events for analysis. |
| 2025-03-11 | Cloud Functions Enumeration |  | This Cloud Hacktool rule detects enumeration of Google Cloud Functions. |
| 2025-03-11 | Cloud IAM Enumeration |  | This Cloud Hacktool rule detects enumeration activity against Google Cloud IAM resources. |
| 2025-03-11 | Cloud KMS Enumeration |  | This Cloud Hacktool rule detects enumeration of Google Cloud KMS resources. |
| 2025-03-11 | Cloud Resource Manager Enumeration |  | This Cloud Hacktool rule detects enumeration activity against Cloud Resource Manager resources. |
| 2025-03-11 | Cloud Run Enumeration |  | This Cloud Hacktool rule detects enumeration activity against Cloud Run services. |
| 2025-03-11 | Cloud Storage Enumeration |  | This Cloud Hacktool rule detects enumeration activity against Cloud Storage resources. |
| 2025-03-11 | Compute Enumeration |  | This Cloud Hacktool rule detects enumeration activity against Google Compute resources. |
| 2025-03-11 | Compute Instance or Project Metadata OS Login Modification |  | This Cloud Hacktool rule detects privilege escalation by changing Compute metadata to enable OS Login. |
| 2025-03-11 | Download Cloud Function Code |  | This Cloud Hacktool rule detects exfiltration by downloading Cloud Function code. |
| 2025-03-11 | Export Compute Image Instance |  | This Cloud Hacktool rule detects exfiltration by exporting a Compute Engine image. |
| 2025-03-11 | Generate Signed URL for Modifying Cloud Function Code |  | This Cloud Hacktool rule detects persistence via generation of a signed URL to modify Cloud Function code. |
| 2025-03-11 | Secret Manager Cloud Secrets Enumeration |  | This Cloud Hacktool rule detects enumeration of Secret Manager secrets. |
| 2025-03-11 | Set GCP Cloud Storage Bucket to Public |  | This Cloud Hacktool rule detects public exposure of a Google Cloud Storage bucket. |
| 2025-02-20 | AWS GuardDuty rule set |  | Cloud Threat Detections added three new rules to the AWS GuardDuty rule set. |
| 2025-02-16 | Feedback message duration setting |  | The User Preferences dialog now includes an accessibility option for controlling how long feedback messages remain visible. |
| 2025-02-16 | Platform time zone management |  | Platform time zone settings can now be managed from the User Preferences dialog. |
| 2025-01-28 | Environment groups |  | Environment groups let you organize environments into logical categories for administration and case management. |
| 2025-01-26 | Concurrent logins from multiple user accounts in the same browser profile | 2025-02-10 | Google SecOps will no longer support concurrent logins for multiple accounts within the same browser profile; deprecated on 2025-02-10. |
| 2024-11-25 | MacOS Threats detection category |  | Curated Detections added the MacOS Threats category, including a Mandiant Intel Emerging Threats rulepack. |
| 2024-09-09 | YARA-L 2.0 functions in Rules |  | Google SecOps added new YARA-L 2.0 functions for use in Rules. |
| 2024-09-09 | YARA-L 2.0 functions in Rules and Search |  | Google SecOps added new YARA-L 2.0 functions for use in Rules and Search. |
| 2024-07-29 | Azure Compute rule pack |  | Curated Detections added a Cloud Threats rule pack for Azure Compute. |
| 2024-07-29 | Entra ID Audit rule pack |  | Curated Detections added a Cloud Threats rule pack for Entra ID Audit. |
| 2024-07-29 | Microsoft Entra ID rule pack |  | Curated Detections added a Cloud Threats rule pack for Microsoft Entra ID. |
| 2024-07-26 | CBN alerts | 2024-07-26 | CBN alerts will no longer be available; deprecated on 2024-07-26. |
| 2024-07-26 | Enterprise Insights page | 2024-07-26 | The Enterprise Insights page will no longer be available; deprecated on 2024-07-26. |
| 2024-07-25 | idm.is_alert | 2024-07-25 | The idm.is_alert alert metadata field has been deprecated in favor of YARA-L detection rule alerts; deprecated on 2024-07-25. |
| 2024-07-25 | idm.is_significant | 2024-07-25 | The idm.is_significant alert metadata field has been deprecated in favor of YARA-L detection rule alerts; deprecated on 2024-07-25. |
| 2024-07-17 | BigQuery telemetry data export to a self-managed project |  | Customers can export telemetry data to their own BigQuery instance in preview. |
| 2024-07-17 | Managed BigQuery data lake export | 2024-12-31 | The managed BigQuery data lake for export will no longer be accessible to most Google SecOps customers; deprecated on 2024-12-31. |
| 2024-07-15 | Symantec Event Export feed | 2024-07-15 | The Symantec Event Export feed has been discontinued; deprecated on 2024-07-15. |
| 2024-06-26 | BindPlane agent |  | The BindPlane agent can collect Windows event logs, query SQL databases, read file logs, and receive syslog data for Google SecOps ingestion. |
| 2024-06-18 | Access Transparency integration |  | Google SecOps can write Access Transparency logs when Google personnel access customer content that supports SIEM features. |
| 2024-06-18 | Data RBAC |  | Google SecOps lets you control user access to data in your environment based on assigned roles. |
| 2024-05-22 | Curated Detections for Cloud Threats |  | Google SecOps expanded curated detections for AWS rule sets by adding 40 new detections; Google SecOps added new Cloud Threats detection content for AWS environments and made it generally available to eligible customers. |
| 2024-05-06 | Gemini for investigation assistance |  | Gemini helps investigate security issues by generating searches, summarizing results, creating YARA-L rules, answering security questions, and suggesting remediation steps. |
| 2024-04-26 | HTTPS endpoint feed ingestion |  | Google SecOps can ingest logs through feeds that push data to an HTTPS endpoint using the feed management UI or API. |
| 2024-04-22 | BigQuery ingestion_stats table | 2024-05-15 | The ingestion_stats table in BigQuery is deprecated in favor of the Chronicle ingestion_metrics table; deprecated on 2024-05-15. |
| 2024-04-22 | Chronicle ingestion alerting system | 2024-09-01 | The Chronicle-based ingestion alerting system is deprecated in favor of Cloud Monitoring integration; deprecated on 2024-09-01. |
| 2024-04-15 | UDM labels fields | 2024-11-29 | Google SecOps is deprecating labels fields on several UDM nouns and recommends using additional.fields key and value settings instead; deprecated on 2024-11-29. |
| 2024-03-29 | Google Cloud NGFW Enterprise log ingestion |  | Chronicle supports direct ingestion and parsing of Google Cloud Next Generation Firewall Enterprise logs. |
| 2024-03-22 | reCAPTCHA Enterprise log ingestion |  | Chronicle supports direct ingestion and parsing of reCAPTCHA Enterprise logs from Google Cloud. |
| 2024-03-15 | Cloud Threat Detections |  | Cloud Threat Detections can create detections from findings in Security Command Center, Cloud Armor, Sensitive Actions Service, and custom Event Threat Detection modules; Cloud Threat Detections can alert on findings from Security Command Center Event Threat Detections, Virtual Machine Threat Detections, and Container Threat Detections. |
| 2024-02-20 | Tokyo region |  | Chronicle customers can store customer data in the Tokyo region and use a Tokyo regional API endpoint. |
| 2024-02-12 | Risk Analytics |  | Risk Analytics scores entities and activities for risk and surfaces those scores in a dashboard with watchlists, detections, and custom-rule functions. |
| 2024-02-01 | AWS EC2 Hosts |  | Chronicle feed management API supports the AWS EC2 Hosts log type for creating AWS data feeds. |
| 2024-02-01 | AWS EC2 Instances |  | Chronicle feed management API supports the AWS EC2 Instances log type for creating AWS data feeds. |
| 2024-02-01 | AWS EC2 VPCs |  | Chronicle feed management API supports the AWS EC2 VPCs log type for creating AWS data feeds. |
| 2024-02-01 | AWS Identity and Access Management |  | Chronicle feed management API supports the AWS Identity and Access Management log type for creating AWS data feeds. |
| 2024-01-25 | Detection Engine event variable joins |  | Detection Engine supports event variable joins on OR expressions and function calls. |
| 2024-01-16 | UDM Search entity investigation |  | UDM Search can investigate entities such as IP addresses, users, and assets in addition to matching events and alerts. |
| 2023-12-15 | India (Mumbai) region |  | Chronicle customers can store customer data in the India (Mumbai) region and use a regional API endpoint. |
| 2023-12-15 | KSA (Dammam) region |  | Chronicle customers can store customer data in the KSA (Dammam) region and use a regional API endpoint. |
| 2023-12-13 | Duet AI in Security Operations |  | Duet AI in Security Operations can translate natural language into Chronicle's unified data model for searching event data. |
| 2023-11-08 | Detection Engine rule statuses |  | Detection Engine supports Limited and Paused rule statuses for Chronicle YARA-L rules running on live data, in addition to Enabled and Disabled. |
| 2023-10-27 | Chronicle regional data storage |  | Chronicle can store customer data in Frankfurt and Zurich and now exposes regional API endpoints for those locations. |
| 2023-10-10 | Custom parser preview and statedump validation |  | Custom parser creation includes a preview that shows UDM output and supports validating parser state with the statedump filter plugin. |
| 2023-10-03 | Chronicle SIEM top-level navigation |  | Chronicle SIEM has a redesigned left-side navigation menu that makes common features easier to find. |
| 2023-10-03 | Reference list access in Search and Rules Editor |  | Reference lists are now accessible from the Search page and the Rules Editor page. |
| 2023-09-14 | Chronicle reference list type changes |  | Chronicle reference lists can now have their type changed after creation. |
| 2023-09-14 | Forwarder configuration management |  | Forwarder configurations can now be created and managed through the Chronicle UI and the Forwarder Management API. |
| 2023-08-28 | Ingestion health metric notifications |  | Cloud Monitoring can now be used to customize and receive notifications about ingestion health metrics. |
| 2023-08-16 | YARA-L 2.0 float literals |  | Rules Engine's YARA-L 2.0 language now supports float literals. |
| 2023-08-10 | Event Viewer UDM field enrichment indicators |  | Event Viewer now labels each UDM field with an icon that shows whether the field stores enriched or unenriched data. |
| 2023-08-10 | UDM Lookup |  | UDM Search now includes UDM Lookup to help find the right UDM field for a query. |
| 2023-07-21 | Firefox browser support for Chronicle |  | Chronicle is now supported on the Mozilla Firefox browser. |
| 2023-07-10 | Self Service Parser Management |  | Self Service Parser Management lets customers create and customize parsers for log normalization. |
| 2023-07-06 | UDM Events Explore field conversion improvements |  | UDM Events Explore now automatically converts enum, timestamp, and location fields into more usable formats. |
| 2023-07-06 | UDM Events Explore field naming and descriptions |  | UDM Events Explore now uses field names and paths that align with Detection Engine rules and UDM search and provides in-context field descriptions. |
| 2023-07-06 | UDM Events Explore report improvements |  | UDM Events Explore reports now use the events table in BigQuery to keep report data up to date. |
| 2023-07-06 | UDM Events Explore search and navigation improvements |  | UDM Events Explore now returns search and navigation results more quickly and makes field names easier to identify. |
| 2023-07-06 | UDM Events Explore user experience improvements |  | UDM Events Explore removes unused and rarely used fields and adds filtering for grouped fields. |
| 2023-06-29 | Chronicle Israel (Tel Aviv) region |  | Chronicle customers can store customer data in the Israel (Tel Aviv) region and use a regional API endpoint. |
| 2023-06-23 | Chronicle Data in BigQuery |  | Chronicle Data in BigQuery now stores the events table as Parquet files in Google Cloud Storage to improve export flexibility. |
| 2023-06-22 | Chronicle dashboard file sharing |  | Chronicle dashboards can be shared between instances or between users within the same instance without creating copies. |
| 2023-05-25 | Chronicle-managed BigQuery udm_events table | 2023-07-01 | The Chronicle-managed BigQuery udm_events table is deprecated and replaced by the events table; deprecated on 2023-07-01. |
| 2023-05-24 | arrays.length() |  | YARA-L 2.0 now includes arrays.length() to return the number of elements in a repeated field. |
| 2023-05-24 | YARA-L 2.0 array indexing on repeated fields |  | YARA-L 2.0 now supports bracket notation to access elements in repeated fields by index. |
| 2023-05-01 | UDM Search Pivot Table |  | The UDM Search Pivot Table lets users group search results and run aggregations across UDM fields. |
| 2023-04-25 | Chronicle forwarder automatic buffering |  | Chronicle forwarder automatic buffering absorbs incoming traffic spikes using available host memory. |
| 2023-04-25 | Chronicle forwarder data compression |  | Chronicle forwarder data compression is enabled by default to reduce network bandwidth use. |
| 2023-04-25 | Chronicle forwarder executable for Windows | 2024-03-31 | The Windows executable version of Chronicle forwarder is deprecated and replaced by the Docker-based installer; deprecated on 2024-03-31. |
| 2023-04-25 | Chronicle forwarder for Windows on Docker |  | Chronicle forwarder for Windows can now be installed and configured on Docker. |
| 2023-04-25 | Chronicle forwarder hot config loading |  | Chronicle forwarder hot config loading applies configuration changes within five minutes without a restart. |
| 2023-04-25 | Chronicle forwarder minimum batch size |  | The Chronicle forwarder minimum batch size is increased to 200 KB. |
| 2023-04-25 | Chronicle forwarder signing key rotation |  | The Chronicle forwarder signing key rotates every six months for security. |
| 2023-04-19 | Chronicle entity VirusTotal relationship enrichment |  | Chronicle now enriches entities with VirusTotal relationship data for additional investigative context. |
| 2023-04-19 | Chronicle entity WHOIS enrichment |  | Chronicle now enriches entities with WHOIS data for additional investigative context. |
| 2023-04-19 | Chronicle event VirusTotal file metadata enrichment |  | Chronicle now enriches events with VirusTotal file metadata for additional investigative context. |
| 2023-04-19 | Chronicle precomputed first- and last-seen timestamps |  | Chronicle precomputes first-seen and last-seen timestamps for domains, IP addresses, and file hashes. |
| 2023-04-19 | Chronicle precomputed first-seen timestamps for assets and users |  | Chronicle precomputes first-seen timestamps for assets and users to speed up investigations. |
| 2023-04-19 | Google Cloud Threat Intelligence curated threat feeds |  | Chronicle now uses curated Google Cloud Threat Intelligence threat feeds to add investigative context. |
| 2023-04-03 | Chronicle Australia (Sydney) region |  | Chronicle customers can store customer data in the Australia (Sydney) region and use a regional API endpoint. |
| 2023-03-30 | UDM Search grouped fields |  | Grouped fields let users query related UDM fields together without typing each field individually. |
| 2023-03-01 | Chronicle dashboard report scheduling |  | Chronicle dashboard reports can be scheduled for email delivery from default or custom dashboards. |
| 2023-02-01 | Alerts in Search |  | Alerts in Search lets users view and investigate alerts that match UDM search criteria, inspect related events, and pivot to alert details. |
| 2023-01-20 | ListCuratedRuleDetections |  | ListCuratedRuleDetections returns the detections associated with a specified Chronicle rule. |
| 2023-01-20 | ListCuratedRules |  | ListCuratedRules returns the current list of Chronicle rules that have detections. |
| 2023-01-19 | Ingestion scripts deployed as Cloud Functions |  | These Python scripts ingest data from supported log sources when deployed as Cloud Functions. |
| 2023-01-10 | Reference lists in UDM Search |  | Reference lists can be used in UDM searches to support more flexible query logic. |
| 2023-01-10 | Shared searches in Search Manager |  | Shared searches let users create, edit, and share saved searches in Search Manager. |
| 2023-01-10 | UDM Search templates |  | UDM Search templates provide Chronicle-provided pre-made searches for Quick Searches and Search Manager. |
| 2022-12-08 | Enhanced UDM Search filtering |  | Enhanced filtering in UDM Search adds Bottom 30 values alongside Top 30 values for each UDM field. |
| 2022-12-08 | Exact-match search for additional and labels fields |  | UDM Search supports exact-match queries on the additional and labels fields using field[key] syntax. |
| 2022-12-08 | Pinned Quick Filter fields |  | Quick Filter fields can be pinned so they stay at the top of the favorites list. |
| 2022-12-08 | Saved column layouts in UDM Search |  | UDM Search can save column layouts and load them later. |
| 2022-12-08 | Special-character escaping in UDM Search |  | UDM Search supports escaping special characters with backslashes and double quotes. |
| 2022-11-15 | UDM Search |  | UDM Search enables users to search UDM events and event groups with Quick Filters, Event Viewer, Search Manager, and a search API method. |
| 2022-11-09 | Alerts and IOC Matches page |  | The Alerts and IOC Matches page shows current alerts and indicators of compromise and provides tools to filter and inspect them. |
| 2022-10-13 | Chronicle CLI |  | Chronicle CLI provides a text-based interface for Chronicle user workflows as an alternative to the graphical UI. |
| 2022-09-26 | Context Aware Detections Risk Dashboard |  | The Context Aware Detections Risk Dashboard shows the current threat status of assets and users. |
| 2022-09-26 | Contextual enrichment in events and entities |  | Contextual enrichment adds prevalence statistics and Safe Browsing threat-list data to events and entities for investigations. |
| 2022-09-21 | ListAssetAliases |  | ListAssetAliases returns all aliases for an asset in an enterprise. |
| 2022-09-21 | ListUserAliases |  | ListUserAliases returns all aliases for a user in an enterprise. |
| 2022-09-02 | GetLog |  | GetLog retrieves a specific raw log using an event UID. |
| 2022-08-18 | VirusTotal Context |  | Provides a VirusTotal Context window in Chronicle event views so users can pivot from an asset, domain, or IP address to VirusTotal information. |
| 2022-08-17 | Curated detections |  | Provides out-of-the-box threat detection content maintained by Google Cloud Threat Intelligence researchers. |
| 2022-08-16 | Feed Management |  | Lets Chronicle users configure and manage data feeds without assistance from support personnel. |
| 2022-07-26 | Cloud logs export filter |  | Lets users configure export filters to send additional Google Cloud log types and source projects to Chronicle with validation support. |
| 2022-02-15 | DeleteSubject |  | Adds a Chronicle RBAC API method for removing user and group role assignments. |
| 2021-12-14 | Role-based access control |  | Lets administrators tailor access to Chronicle features by assigning role-based permissions to users. |
| 2021-12-08 | Dashboards |  | Provides default and custom dashboards for monitoring Chronicle ingestion, health, detection context, IOC matches, alerts, and user sign-ins. |
| 2021-07-01 | Asset namespaces |  | Lets users classify assets into namespaces and search for those assets in the Chronicle user interface by namespace. |
| 2021-06-30 | Download events |  | Lets users download large numbers of threat detection events as CSV files for security investigation. |
| 2021-06-28 | VerifyRule |  | Adds a Detection Engine API method that validates YARA-L 2.0 rules without creating or evaluating them. |
| 2021-06-21 | Uppercase alerts |  | Displays Uppercase customer alerts in Chronicle and exposes them through the Uppercase API. |
| 2021-06-01 | Google Cloud log ingestion |  | Lets Google Cloud customers send Cloud Audit and Cloud DNS logs directly to Chronicle. |
| 2021-05-15 | Rule archiving |  | Rule archiving lets you hide security data for a Detection Engine rule and its versions without deleting the rule. |
| 2021-01-25 | Chronicle Detection Engine |  | The Chronicle Detection Engine lets customers search their data for security issues and automate threat detection with rules. |
| 2021-01-25 | Detection Engine API |  | The Detection Engine API lets customers programmatically manage Detection Engine functionality. |
| 2021-01-25 | Detection Engine UI |  | The Detection Engine UI provides a rules dashboard and rules editor for monitoring, creating, testing, and activating rules. |
| 2021-01-25 | YARA-L 2.0 |  | YARA-L 2.0 is the rule language used to define Detection Engine rules. |
| 2020-09-02 | Chronicle User View |  | Chronicle User View helps security administrators analyze individual user behavior for signs of account compromise or other security concerns. |

Source file slug: `google-secops-siem.md`

