---
title: "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/deprecations
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/deprecations
  title: "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Resources
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Feature deprecations
The
Google Cloud Platform Terms of Service (section "Discontinuation of Services")
defines the deprecation policy that applies to Google Security Operations.
The deprecation policy only applies to the services,
features, or products listed therein.
After a service, feature, or product is officially
deprecated, it continues to be available for at least the period of time defined in the
Terms of Service. After this period of time, the service is scheduled for shutdown.
The following table lists feature deprecations and their related shutdown schedules for Google Security Operations.
Feature
Deprecated date
Shutdown date
Details
v1 Cloud Storage Connectors
April 15, 2026
March 15, 2027
Google SecOps is deprecating the v1 connector framework for GOOGLE_CLOUD_STORAGE , AMAZON_S3 , AMAZON_SQS , and AZURE_BLOBSTORE . The new v2 framework uses the Google Cloud Storage Transfer Service (STS) for improved reliability, scalability, and performance. Action required : You must migrate your feeds to the v2 framework before the March 15, 2027 end-of-life date to avoid interruption to data ingestion. Google SecOps will automatically migrate your cloud storage data feeds using v1 connectors to v2 connectors in waves starting from April 10, 2026. To facilitate this, customers might be required to take certain actions, such as updating IP allowlists or service account permissions. You can also self-migrate by replacing your existing data feeds using v1 connectors with new feeds using v2 connectors, by following the configuration guide for v2 connectors . Key dates: April 10, 2026 : auto-migration commences.
September 15, 2026 : Support for v1 connectors is discontinued.
March 15, 2027 : v1 feeds officially reach end-of-life and will stop returning data.
SOAR IAM Roles
February 23, 2026
August 23, 2026
The chronicle.soarAnalyst , chronicle.soarViewer , and chronicle.soarEngineer roles in Cloud IAM are deprecated and will be removed. These roles were non-operational and are being replaced by Google Cloud IAM functionality as part of the SOAR Migration. To maintain access, transition users to pre-defined roles or use the self-service migration to convert Permission Groups to custom roles.
Microsoft Graph Security Legacy Alerts (v1)
February 15, 2026
April 10, 2026
Microsoft has announced the deprecation of its Legacy Alerts API endpoint, effective April 10, 2026, in favor of its new alerts and incidents endpoint. If any of your existing feeds for the MICROSOFT_GRAPH_ALERT log type are pointing towards the legacy alerts endpoint, you must update the API Full Path in your feed configuration to switch to the alerts_v2 endpoint instead, as described in How to set up Microsoft Graph API alerts . After the shutdown date, configurations using Legacy Alerts will stop returning data.
Mute an IoC
January 18, 2026
January 18, 2026
The Mute an IoC feature is deprecated, and the IOC details page no longer displays the Mute indicator.
ListAlerts endpoint
July 2025
July 2025
The ListAlerts endpoint is deleted. Migrate to alerting using the YARA-L detection engine by following the migration guide .
NETSKOPE_ALERT log type
October 15, 2025
November 30, 2025
As of October 15, 2025, the Netskope Alerts v1 connector (for the NETSKOPE_ALERT log type) has been deprecated and will be removed on November 30, 2025. If you have existing feeds configured using the NETSKOPE_ALERT log type, you can create a new feed with the NETSKOPE_ALERT_V2 log type as described in this guide .
ListAvailableLogTypes API
September 09, 2025
October 09, 2025
As of October 09, 2025, the ListAvailableLogTypes API is deprecated. To get a list of all log types, you can now use the logTypes.list API.
Forwarder component
Apr 1, 2026
Apr 1, 2027
The forwarder component is being phased out of the Google SecOps platform and will reach end-of-life (EOL) in January 2027. This impact will change all any data collection pipelines that currently use the forwarder. Action required : If you're currently using the forwarder component, you must migrate your data collection workflows to an alternative mechanism before April 1, 2027. You'll need to use another data pipeline management application for log ingestion. We recommend that you migrate to the Bindplane OpenTelemetry (OTel) collector , which provides a scalable, open-standard solution for log and metric ingestion. The following are key dates to note: Apr 1, 2026 : New Google SecOps customers cannot use the forwarder component.
Jan 1, 2027 : The forwarder is officially EOL. No further patches, including security patches, will be released.
Apr 1, 2027 : Data is no longer allowed to be ingested from the forwarder component.
Reference lists
June 2026
September 2026
The reference list functionality is being retired from the Google SecOps platform. All existing reference lists will be transparently migrated to data tables. This migration is fully automatic and requires no action on your part. There is no expected downtime, ingestion delay, or service limitation during the migration window. During this migration period, you can continue to use your existing reference lists until they're migrated. In September 2026, the legacy reference list functionality will be fully retired from the platform. At that time, all data will be accessible through the data table interface.
Python 3.7
February 1, 2025
June 1, 2025
Support for Python 3.7 is being decommissioned from the Google SecOps platform and Marketplace. Users will no longer be able to use integrations that run Python 3.7 in the Google SecOps platform after June 1, 2025. For more details, see Upgrade the Python Versions .
BigQuery data lake
December 31, 2024
April 30, 2025
The shutdown of managed BigQuery resources and API keys associated with the chronicle-tla Google Cloud project has been extended to April 30, 2025. This change doesn't affect Google Security Operations Enterprise Plus customers.
SOAR infrastructure migration to Google Cloud
June, 2025
December 31, 2025
Starting June 2025, the SOAR infrastructure is migrating to Google Cloud, including authentication migration to Workforce Identity Federation and Cloud Identity.
For more details, see SOAR migration overview - stage 1 .
SOAR API and permission groups
6 months from migration period (June-September 2025)
June 30, 2026
Starting November 24, 2025, SOAR permission groups are migrating to Cloud IAM. SOAR APIs will be hosted as part of the Google API service . They can be accessed as part of Stage 2 of the SOAR Migration.
Stage 2 Early Access begins November 24, 2025. General Access is available for all customers from January 1, 2026. You can initiate Stage 2 at any time, after you complete Stage 1, with a completion deadline of June 30, 2026.
For more details, see SOAR migration overview - stage 2 .
UDM alert metadata fields
July 22, 2024
June 22, 2025
The Google SecOps alert metadata fields for UDM idm.is_significant and idm.is_alert have been deprecated. Use YARA-L detection rule alerts for alert metadata.
Incident Manager
July 22, 2024
July 22, 2025
The Incident Manager in Google Security Operations will be fully decommissioned in July 22, 2025. We will provide support and maintenance until July 22, 2025 but no new features will be released.
BigQuery data lake
December 31, 2024
March 31, 2025
On December 31, 2024, the managed BigQuery data lake for export won't be accessible to Google SecOps customers except for customers in the Enterprise Plus Tier. Enterprise Plus Tier customers will retain access until a replacement is available. Other customers can use their own BigQuery instance to export telemetry data, a feature currently in preview. For more information, see Configure a data export to BigQuery in a self-managed Google Cloud project . The managed BigQuery resources and API keys associated with the chronicle-tla Google Cloud project will be fully decommissioned by March 31, 2025.
Python 2.7
July 14, 2024
October 13, 2024
Support for Python 2.7 is being decommissioned from the Google SecOps platform and Marketplace. Users will no longer be able to use integrations that run Python 2.7 in the Google SecOps platform after October 13, 2024. For more details, see Upgrade the Python Versions .
Symantec Event Export API feed
July 11, 2024
October 01, 2024
The third-party API feed Symantec Event Export has been discontinued due to the deprecation of Symantec Event Export API . To ingest data, use a Cloud Storage bucket. For more information, see Add a feed and Adding a Data Bucket event stream type .
Ingestion alerting method
April 18, 2024
September 01, 2024
The ingestion alerting system using Google Security Operations has been deprecated. This system will no longer be updated, and no alerts will be sent from this system after September 01, 2024. Use the Cloud Monitoring integration which provides more flexibility in alert logic, alert workflow, and integration with third-party ticketing systems.
Google SecOps ingestion_stats table in BigQuery
April 18, 2024
May 15, 2024
The ingestion_stats table in BigQuery has been deprecated and will no longer be updated after May 15, 2024. Existing data is retained until May 15, 2025. Use the Google SecOps ingestion_metrics table in BigQuery, which provides more accurate ingestion metrics. Additionally, real-time alerting on ingestion metrics is also available in Google Security Operations Cloud Monitoring integration .
Google Security Operations CBN alerts
July 22, 2024
July 22, 2025
The Enterprise Insights page and the CBN alerts will no longer be available after July 2025. Use the Alerts and IOCs page to view the alerts. We recommend that you migrate the existing CBN alerts to the YARA-L detection engine . Google Security Operations's YARA-L detection engine is the preferred option for detection alerts because it offers enhanced transparency in detection logic and robust tuning capabilities. For more information see Overview of the YARA-L 2.0 language .
labels fields for UDM nouns
November 29, 2023
November 29, 2024
On or after November 29, 2023, the following Google Security Operations labels fields for UDM nouns are deprecated: about.labels , intermediary.labels , observer.labels , principal.labels , src.labels , security_result.about.labels , and target.labels . For existing parsers, in addition to these UDM fields, the logs fields are also mapped to key/value additional.fields UDM fields. For new parsers, the key/value settings in additional.fields UDM fields are used instead of the deprecated labels UDM fields. We recommend that you update the existing rules to use the key/value settings in the additional.fields UDM fields instead of the deprecated labels UDM fields.
Google Security Operations forwarder executable for Windows
April 04, 2023
March 31, 2024
On or after March 31, 2024, existing Google Security Operations forwarder executable for Windows will be removed. For information about Google Security Operations forwarder for Windows on Docker, see Google Security Operations forwarder for Windows on Docker .
Chronicle BigQuery udm_events table
July 01, 2023
August 01, 2023
On or after July 1, 2023, the existing udm_events table in Chronicle-managed BigQuery projects will be fully replaced with a new table named events . This new table is currently available for all Customers . Chronicle will handle all changes in-product for this new table. Customers issuing queries against the udm_events table through Cloud Console, API, or directly connecting to BQ should fully migrate queries to the new table by July 1 to avoid interruption. When migrating SQL queries to use the new Event table, also replace the _PARTITIONTIME field with the new hour_time_bucket field.
MICROSOFT_SECURITY_CENTER_ALERT log type
May 03, 2022
May 03, 2022
As of May 03, 2022, the MICROSOFT_SECURITY_CENTER_ALERT log type has been removed. Logs previously fetched by the MICROSOFT_SECURITY_CENTER_ALERT feed are now a part of the MICROSOFT_GRAPH_ALERT feed. If you have a feed configured using the MICROSOFT_SECURITY_CENTER_ALERT log type, you can create a new feed using the MICROSOFT_GRAPH_ALERT log type. For more information about the MICROSOFT_GRAPH_ALERT log type, see Microsoft Graph Security API Alerts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
