---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.351Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Multi-stage queries in YARA-L"
feature_slug: "multi-stage-queries-in-yara-l"
latest_feature_date: "2025-10-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
keywords:
  - "multi"
  - "stage"
  - "queries"
  - "in"
  - "yara"
  - "allows"
  - "one"
  - "query"
---

# Multi-stage queries in YARA-L

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Allows one YARA-L query stage to feed directly into the next, with support for a root stage and up to four named stages.

## Extended Definition

Allows one YARA-L query stage to feed directly into the next, with support for a root stage and up to four named stages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Multi-stage queries in YARA-L let you feed the output of one query stage directly into the input of a subsequent stage.
- February 24, 2026 Feature New: cross joins in multi-stage queries You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages.
- March 31, 2026 Feature Multi-stage queries in YARA-L The Multi-stage queries feature is now GA.
- October 08, 2025 Feature Multi-stage queries in YARA-L This feature is currently in Preview.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Multi-stage queries in YARA-L let you feed the output of one query stage directly into the input of a subsequent stage.
- Action1 ( ACTION1 ) CDNetworks Cloud Security ( CDNETWORKS CLOUD SECURITY ) Claude Compliance Logs ( CLAUDE COMPLIANCE LOGS ) Dell RecoverPoint ( DELL RECOVERPOINT ) IBM Storwize ( IBM STORWIZE ) LeapXpert Audit Logs ( LEAPXPERT AUDIT ) Oracle Key Vault Audit Logs ( ORACLE KEY VAULT AUDIT LOGS ) RSA Cloud ( RSA CLOUD ) ServiceNow Antivirus Activity ( SERVICENOW ANTIVIRUS ACTIVITY ) ServiceNow Attachment ( SERVICENOW ATTACHMENT ) ServiceNow Email ( SERVICENOW EMAIL ) Versa Director ( VERSA DIRECTOR ) ZPE Systems NodeGrid ( ZPE SYSTEMS NODEGRID ) March 31, 2026 Feature Multi-stage queries in YARA-L The Multi-stage queries feature is now GA.
- February 24, 2026 Feature New: cross joins in multi-stage queries You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages.
- October 08, 2025 Feature Multi-stage queries in YARA-L This feature is currently in Preview.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Feature Programmatic access limit Web interface limit QPH limit 2,000 1,000 Simple query concurrency 40 40 Complex query concurrency 10 10 Concurrency limits Concurrency limits define the number of simultaneous search operations allowed per tenant: Simple queries: Queries that span less than one day, use a single data source, and don't include stats.
- If you append multiple results, each result is added to the end of the existing query in the Search field using the OR operator.
- You select one or more results returned by UDM Lookup , and use it as a starting point for a Search query .
- You can use them to query multiple UDM fields at the same time without typing each field individually.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- This asset metadata is drawn from your Cloud Asset Inventory and consists of information about your assets, resources, and identities including the following: Environment Location Zone Hardware models Access control relationships between resources and identities The following types of Google Cloud asset metadata will be exported to your Google SecOps instance: GCP BIGQUERY CONTEXT GCP COMPUTE CONTEXT GCP IAM CONTEXT GCP IAM ANALYSIS GCP STORAGE CONTEXT GCP CLOUD FUNCTIONS CONTEXT GCP SQL CONTEXT GCP NETWORK CONNECTIVITY CONTEXT GCP RESOURCE MANAGER CONTEXT The following are examples of Google Cloud asset metadata: Application name— Google-iamSample/0.1 Project name— projects/my-project Note: You need to have either Security Command Center Standard or Security Command Center Premium enabled to export Google Cloud asset metadata to Google SecOps.
- To learn how to filter out logs that are generated by routine activities, see Tune Cloud Audit Logs filters . log id("cloudaudit.googleapis.com/activity") (exported by the default filter) log id("cloudaudit.googleapis.com/system event") (exported by the default filter) log id("cloudaudit.googleapis.com/policy") log id("cloudaudit.googleapis.com/access transparency") Cloud NAT logs ( GCP CLOUD NAT ): log id("compute.googleapis.com/nat flows") Cloud DNS logs ( GCP DNS ): log id("dns.googleapis.com/dns queries") (exported by the default filter) Firewall policy rules logging ( GCP FIREWALL ): log id("compute.googleapis.com/firewall") GCP IDS : log id("ids.googleapis.com/threat") log id("ids.googleapis.com/traffic") GCP LOADBALANCING : This includes logs from Google Cloud Armor and Cloud Load Balancing (both External and Internal). log id("requests") log id("loadbalancing.googleapis.com/requests") GCP CLOUDSQL : log id("cloudsql.googleapis.com/mysql-general.log") log id("cloudsql.googleapis.com/mysql.err") log id("cloudsql.googleapis.com/postgres.log") log id("cloudsql.googleapis.com/sqlagent.out") log id("cloudsql.googleapis.com/sqlserver.err") GCP VPC FLOW : log id("compute.googleapis.com/vpc flows") (for US and EU regions only) NIX SYSTEM : log id("syslog") log id("authlog") log id("securelog") log id("osconfig.googleapis.com/patch job") LINUX SYSMON : log id("sysmon.raw") WINEVTLOG : log id("winevt.raw") log id("windows event log") BRO JSON : log id("zeek json streaming conn") log id("zeek json streaming dhcp") log id("zeek json streaming dns") log id("zeek json streaming http") log id("zeek json streaming ssh") log id("zeek json streaming ssl") KUBERNETES NODE : log id("events") log id("stdout") log id("stderr") AUDITD : log id("audit log") GCP APIGEE X : log id("apigee.googleapis.com/ingress instance") log id("apigee.googleapis.com") log id("apigee-logs") log id("apigee") logName = "^projects/[\w\-]+/logs/apigee[\w\-\.] $" GCP RECAPTCHA ENTERPRISE : log id("recaptchaenterprise.googleapis.com/assessment") log id("recaptchaenterprise.googleapis.com/annotation") GCP RUN : log id("run.googleapis.com/stderr") log id("run.googleapis.com/stdout") log id("run.googleapis.com/requests") log id("run.googleapis.com/varlog/system") GCP NGFW ENTERPRISE : log id("networksecurity.googleapis.com/firewall threat") GCP ABUSE EVENTS : log id("abuseevent.googleapis.com/abuse events") GCP DNS ATD log id("networksecurity.googleapis.com/dns threat events") Model Armor logs ( GCP MODEL ARMOR ): This includes logs for sanitization operations (screening prompts and responses) and template operations (creation, updates). log id("modelarmor.googleapis.com/sanitize operations") log id("modelarmor.googleapis.com/templates") Customize export filter settings By default, your Cloud Audit Logs (Admin Activity and System Event) and Cloud DNS logs are sent to your Google SecOps instance.
- Export filter example: Include additional log types The following export filter exports access transparency logs in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR log id("cloudaudit.googleapis.com/access transparency") Export filter example: Include additional logs from a specific project The following export filter exports access transparency logs from a specific project, in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR logName = "projects/my-project-id/logs/cloudaudit.googleapis.com%2Faccess transparency" Export filter example: Include additional logs from a specific folder The following export filter exports access transparency logs from a specific folder, in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR logName = "folders/my-folder-id/logs/cloudaudit.googleapis.com%2Faccess transparency" Export filter example: Exclude logs from a specific project The following export filter exports the default logs from the entire Google Cloud organization with the exception of a specific project: (log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event")) AND (NOT logName = "^projects/my-project-id/logs/. $") Export Google Cloud asset metadata You can export your Google Cloud asset metadata from Cloud Asset Inventory to Google SecOps.
- If your Google SecOps instance is bound to a project that Google Cloud owns and manages, perform the following steps: Note: After completing these steps, you will need to obtain a new one-time access code from your Google SecOps representative and complete the procedure to enable direct ingestion from Google Cloud to restart Google Cloud log ingestion.

