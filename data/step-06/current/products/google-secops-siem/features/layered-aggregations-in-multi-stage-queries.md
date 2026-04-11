---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.370Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Layered aggregations in multi-stage queries"
feature_slug: "layered-aggregations-in-multi-stage-queries"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
keywords:
  - "layered"
  - "aggregations"
  - "in"
  - "multi"
  - "stage"
  - "queries"
  - "expands"
  - "with"
---

# Layered aggregations in multi-stage queries

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Expands multi-stage queries with layered aggregations, baselines, deviations, trends, and joins across stages.

## Extended Definition

Expands multi-stage queries with layered aggregations, baselines, deviations, trends, and joins across stages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Action1 ( ACTION1 ) CDNetworks Cloud Security ( CDNETWORKS CLOUD SECURITY ) Claude Compliance Logs ( CLAUDE COMPLIANCE LOGS ) Dell RecoverPoint ( DELL RECOVERPOINT ) IBM Storwize ( IBM STORWIZE ) LeapXpert Audit Logs ( LEAPXPERT AUDIT ) Oracle Key Vault Audit Logs ( ORACLE KEY VAULT AUDIT LOGS ) RSA Cloud ( RSA CLOUD ) ServiceNow Antivirus Activity ( SERVICENOW ANTIVIRUS ACTIVITY ) ServiceNow Attachment ( SERVICENOW ATTACHMENT ) ServiceNow Email ( SERVICENOW EMAIL ) Versa Director ( VERSA DIRECTOR ) ZPE Systems NodeGrid ( ZPE SYSTEMS NODEGRID ) March 31, 2026 Feature Multi-stage queries in YARA-L The Multi-stage queries feature is now GA.
- February 24, 2026 Feature New: cross joins in multi-stage queries You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages.
- Layer aggregations and analytics across multi-stage queries Recent updates to multi-stage queries let you: Layer aggregations and data statistical functions.
- You can use multi-stage queries in both Dashboards and Search to build sophisticated detection and visualization logic.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2026 Feature New: cross joins in multi-stage queries You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages.
- Layer aggregations and analytics across multi-stage queries Recent updates to multi-stage queries let you: Layer aggregations and data statistical functions.
- You can use multi-stage queries in both Dashboards and Search to build sophisticated detection and visualization logic.
- Multi-stage queries in YARA-L let you feed the output of one query stage directly into the input of a subsequent stage.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Search for events that use multiple keys with the same name, using a regular expression: additional.fields.key = /myKeynumber / Use regular expressions and the nocase operator: additional.fields["pod name"] = /br/ additional.fields["pod name"] = bar nocase Use block and single-line comments.
- Grouped fields can also be used in combination with regular UDM fields as shown in the following example: ip = "5.6.7.8" AND metadata.event type = "NETWORK CONNECTION" Grouped fields have a separate section in Aggregations .
- If there are multiple alerts associated with the timeline, the chip displays the numbers of associated alerts.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Export filter example: Include additional log types The following export filter exports access transparency logs in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR log id("cloudaudit.googleapis.com/access transparency") Export filter example: Include additional logs from a specific project The following export filter exports access transparency logs from a specific project, in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR logName = "projects/my-project-id/logs/cloudaudit.googleapis.com%2Faccess transparency" Export filter example: Include additional logs from a specific folder The following export filter exports access transparency logs from a specific folder, in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR logName = "folders/my-folder-id/logs/cloudaudit.googleapis.com%2Faccess transparency" Export filter example: Exclude logs from a specific project The following export filter exports the default logs from the entire Google Cloud organization with the exception of a specific project: (log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event")) AND (NOT logName = "^projects/my-project-id/logs/. $") Export Google Cloud asset metadata You can export your Google Cloud asset metadata from Cloud Asset Inventory to Google SecOps.
- To learn how to filter out logs that are generated by routine activities, see Tune Cloud Audit Logs filters . log id("cloudaudit.googleapis.com/activity") (exported by the default filter) log id("cloudaudit.googleapis.com/system event") (exported by the default filter) log id("cloudaudit.googleapis.com/policy") log id("cloudaudit.googleapis.com/access transparency") Cloud NAT logs ( GCP CLOUD NAT ): log id("compute.googleapis.com/nat flows") Cloud DNS logs ( GCP DNS ): log id("dns.googleapis.com/dns queries") (exported by the default filter) Firewall policy rules logging ( GCP FIREWALL ): log id("compute.googleapis.com/firewall") GCP IDS : log id("ids.googleapis.com/threat") log id("ids.googleapis.com/traffic") GCP LOADBALANCING : This includes logs from Google Cloud Armor and Cloud Load Balancing (both External and Internal). log id("requests") log id("loadbalancing.googleapis.com/requests") GCP CLOUDSQL : log id("cloudsql.googleapis.com/mysql-general.log") log id("cloudsql.googleapis.com/mysql.err") log id("cloudsql.googleapis.com/postgres.log") log id("cloudsql.googleapis.com/sqlagent.out") log id("cloudsql.googleapis.com/sqlserver.err") GCP VPC FLOW : log id("compute.googleapis.com/vpc flows") (for US and EU regions only) NIX SYSTEM : log id("syslog") log id("authlog") log id("securelog") log id("osconfig.googleapis.com/patch job") LINUX SYSMON : log id("sysmon.raw") WINEVTLOG : log id("winevt.raw") log id("windows event log") BRO JSON : log id("zeek json streaming conn") log id("zeek json streaming dhcp") log id("zeek json streaming dns") log id("zeek json streaming http") log id("zeek json streaming ssh") log id("zeek json streaming ssl") KUBERNETES NODE : log id("events") log id("stdout") log id("stderr") AUDITD : log id("audit log") GCP APIGEE X : log id("apigee.googleapis.com/ingress instance") log id("apigee.googleapis.com") log id("apigee-logs") log id("apigee") logName = "^projects/[\w\-]+/logs/apigee[\w\-\.] $" GCP RECAPTCHA ENTERPRISE : log id("recaptchaenterprise.googleapis.com/assessment") log id("recaptchaenterprise.googleapis.com/annotation") GCP RUN : log id("run.googleapis.com/stderr") log id("run.googleapis.com/stdout") log id("run.googleapis.com/requests") log id("run.googleapis.com/varlog/system") GCP NGFW ENTERPRISE : log id("networksecurity.googleapis.com/firewall threat") GCP ABUSE EVENTS : log id("abuseevent.googleapis.com/abuse events") GCP DNS ATD log id("networksecurity.googleapis.com/dns threat events") Model Armor logs ( GCP MODEL ARMOR ): This includes logs for sanitization operations (screening prompts and responses) and template operations (creation, updates). log id("modelarmor.googleapis.com/sanitize operations") log id("modelarmor.googleapis.com/templates") Customize export filter settings By default, your Cloud Audit Logs (Admin Activity and System Event) and Cloud DNS logs are sent to your Google SecOps instance.
- Control the rate of ingestion When the data ingestion rate for a tenant reaches a certain threshold, Google Security Operations restricts the rate of ingestion for new data feeds to prevent a source with a high ingestion rate from affecting the ingestion rate of another data source.
- Additionally, raise a Support ticket with Google SecOps to provide your feedback in support of possibly collecting this type of log using direct ingestion (Option 1) in the future.

