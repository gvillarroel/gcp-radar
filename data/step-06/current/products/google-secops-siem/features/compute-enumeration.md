---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.581Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Compute Enumeration"
feature_slug: "compute-enumeration"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
keywords:
  - "compute"
  - "enumeration"
  - "hacktool"
  - "rule"
  - "detects"
  - "activity"
  - "against"
  - "resources"
---

# Compute Enumeration

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

This Cloud Hacktool rule detects enumeration activity against Google Compute resources.

## Extended Definition

This Cloud Hacktool rule detects enumeration activity against Google Compute resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- They include the following: Azure - Compute : Detects anomalous activity related to Azure compute resources, including Kubernetes and virtual machines (VMs).
- The following log data, listed by product name and Google SecOps ingestion label: BigQuery ( GCP BIGQUERY CONTEXT ) Compute Engine ( GCP COMPUTE CONTEXT ) IAM ( GCP IAM CONTEXT ) Sensitive Data Protection ( GCP DLP CONTEXT ) Cloud Audit Logs ( GCP CLOUDAUDIT ) Google Workspace Activity ( WORKSPACE ACTIVITY ) Cloud DNS queries ( GCP DNS ) The following Security Command Center finding classes , listed by findingClass identifier and Google SecOps ingestion label: Threat ( GCP SECURITYCENTER THREAT ) Misconfiguration ( GCP SECURITYCENTER MISCONFIGURATION ) Vulnerability ( GCP SECURITYCENTER VULNERABILITY ) SCC Error ( GCP SECURITYCENTER ERROR ) The CDIR SCC Enhanced rule sets also depend on data from Google Cloud services.
- Cloud Hacktool : Activity detected from known offensive security platforms or from offensive tools or software used in the wild by threat actors that specifically target cloud resources.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Further Resources to get started: Model Armor Documentation AI Protection Overview Blog Post Security Command Center Documentation Sensitive Data Protection Documentation Continuous Security Validation: Stop Reacting, Start Preventing with Google SecOps Security teams in SOCs are constantly overwhelmed trying to keep up with the ever-changing threat landscape.
- Curated Detections & Prioritization : Pre-built detection rules (available in rule packs like "Applied Threat Intelligence - Curated Prioritization") contextualize IOC matches using event data and Mandiant intelligence features to generate prioritized alerts (Active Breach, High, Medium, Inbound IP Auth).
- Strengthening Endpoint Security: Integrated protection with Google Chrome Enterprise Premium & Google SecOps Chrome Enterprise Premium (CEP) integration with Google SecOps provides critical visibility into threats originating from browser activity to strengthen your endpoint security posture.
- Measure effectiveness of Data Loss Prevention (DLP) policies An administrator can measure the effectiveness of DLP rules by reviewing aggregate data to ensure that “block” and “warn” policies applied through Chrome are addressing threats and not preventing legitimate work.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- To learn how to filter out logs that are generated by routine activities, see Tune Cloud Audit Logs filters . log id("cloudaudit.googleapis.com/activity") (exported by the default filter) log id("cloudaudit.googleapis.com/system event") (exported by the default filter) log id("cloudaudit.googleapis.com/policy") log id("cloudaudit.googleapis.com/access transparency") Cloud NAT logs ( GCP CLOUD NAT ): log id("compute.googleapis.com/nat flows") Cloud DNS logs ( GCP DNS ): log id("dns.googleapis.com/dns queries") (exported by the default filter) Firewall policy rules logging ( GCP FIREWALL ): log id("compute.googleapis.com/firewall") GCP IDS : log id("ids.googleapis.com/threat") log id("ids.googleapis.com/traffic") GCP LOADBALANCING : This includes logs from Google Cloud Armor and Cloud Load Balancing (both External and Internal). log id("requests") log id("loadbalancing.googleapis.com/requests") GCP CLOUDSQL : log id("cloudsql.googleapis.com/mysql-general.log") log id("cloudsql.googleapis.com/mysql.err") log id("cloudsql.googleapis.com/postgres.log") log id("cloudsql.googleapis.com/sqlagent.out") log id("cloudsql.googleapis.com/sqlserver.err") GCP VPC FLOW : log id("compute.googleapis.com/vpc flows") (for US and EU regions only) NIX SYSTEM : log id("syslog") log id("authlog") log id("securelog") log id("osconfig.googleapis.com/patch job") LINUX SYSMON : log id("sysmon.raw") WINEVTLOG : log id("winevt.raw") log id("windows event log") BRO JSON : log id("zeek json streaming conn") log id("zeek json streaming dhcp") log id("zeek json streaming dns") log id("zeek json streaming http") log id("zeek json streaming ssh") log id("zeek json streaming ssl") KUBERNETES NODE : log id("events") log id("stdout") log id("stderr") AUDITD : log id("audit log") GCP APIGEE X : log id("apigee.googleapis.com/ingress instance") log id("apigee.googleapis.com") log id("apigee-logs") log id("apigee") logName = "^projects/[\w\-]+/logs/apigee[\w\-\.] $" GCP RECAPTCHA ENTERPRISE : log id("recaptchaenterprise.googleapis.com/assessment") log id("recaptchaenterprise.googleapis.com/annotation") GCP RUN : log id("run.googleapis.com/stderr") log id("run.googleapis.com/stdout") log id("run.googleapis.com/requests") log id("run.googleapis.com/varlog/system") GCP NGFW ENTERPRISE : log id("networksecurity.googleapis.com/firewall threat") GCP ABUSE EVENTS : log id("abuseevent.googleapis.com/abuse events") GCP DNS ATD log id("networksecurity.googleapis.com/dns threat events") Model Armor logs ( GCP MODEL ARMOR ): This includes logs for sanitization operations (screening prompts and responses) and template operations (creation, updates). log id("modelarmor.googleapis.com/sanitize operations") log id("modelarmor.googleapis.com/templates") Customize export filter settings By default, your Cloud Audit Logs (Admin Activity and System Event) and Cloud DNS logs are sent to your Google SecOps instance.
- This asset metadata is drawn from your Cloud Asset Inventory and consists of information about your assets, resources, and identities including the following: Environment Location Zone Hardware models Access control relationships between resources and identities The following types of Google Cloud asset metadata will be exported to your Google SecOps instance: GCP BIGQUERY CONTEXT GCP COMPUTE CONTEXT GCP IAM CONTEXT GCP IAM ANALYSIS GCP STORAGE CONTEXT GCP CLOUD FUNCTIONS CONTEXT GCP SQL CONTEXT GCP NETWORK CONNECTIVITY CONTEXT GCP RESOURCE MANAGER CONTEXT The following are examples of Google Cloud asset metadata: Application name— Google-iamSample/0.1 Project name— projects/my-project Note: You need to have either Security Command Center Standard or Security Command Center Premium enabled to export Google Cloud asset metadata to Google SecOps.
- Note: If your organization implements VPC Service Controls , no additional ingress or egress rule is required for Google SecOps to access resources and services outside its service perimeter.
- Export filter example: Include additional log types The following export filter exports access transparency logs in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR log id("cloudaudit.googleapis.com/access transparency") Export filter example: Include additional logs from a specific project The following export filter exports access transparency logs from a specific project, in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR logName = "projects/my-project-id/logs/cloudaudit.googleapis.com%2Faccess transparency" Export filter example: Include additional logs from a specific folder The following export filter exports access transparency logs from a specific folder, in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR logName = "folders/my-folder-id/logs/cloudaudit.googleapis.com%2Faccess transparency" Export filter example: Exclude logs from a specific project The following export filter exports the default logs from the entire Google Cloud organization with the exception of a specific project: (log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event")) AND (NOT logName = "^projects/my-project-id/logs/. $") Export Google Cloud asset metadata You can export your Google Cloud asset metadata from Cloud Asset Inventory to Google SecOps.

