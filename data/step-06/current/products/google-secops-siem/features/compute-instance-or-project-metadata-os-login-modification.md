---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.581Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Compute Instance or Project Metadata OS Login Modification"
feature_slug: "compute-instance-or-project-metadata-os-login-modification"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
  - "https://docs.cloud.google.com/chronicle/docs/administration/migrate-to-gcp-project"
keywords:
  - "compute"
  - "instance"
  - "project"
  - "metadata"
  - "os"
  - "login"
  - "modification"
  - "hacktool"
---

# Compute Instance or Project Metadata OS Login Modification

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

This Cloud Hacktool rule detects privilege escalation by changing Compute metadata to enable OS Login.

## Extended Definition

This Cloud Hacktool rule detects privilege escalation by changing Compute metadata to enable OS Login.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- [https://docs.cloud.google.com/chronicle/docs/administration/migrate-to-gcp-project](https://docs.cloud.google.com/chronicle/docs/administration/migrate-to-gcp-project)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- The following log data, listed by product name and Google SecOps ingestion label: BigQuery ( GCP BIGQUERY CONTEXT ) Compute Engine ( GCP COMPUTE CONTEXT ) IAM ( GCP IAM CONTEXT ) Sensitive Data Protection ( GCP DLP CONTEXT ) Cloud Audit Logs ( GCP CLOUDAUDIT ) Google Workspace Activity ( WORKSPACE ACTIVITY ) Cloud DNS queries ( GCP DNS ) The following Security Command Center finding classes , listed by findingClass identifier and Google SecOps ingestion label: Threat ( GCP SECURITYCENTER THREAT ) Misconfiguration ( GCP SECURITYCENTER MISCONFIGURATION ) Vulnerability ( GCP SECURITYCENTER VULNERABILITY ) SCC Error ( GCP SECURITYCENTER ERROR ) The CDIR SCC Enhanced rule sets also depend on data from Google Cloud services.
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- CDIR SCC Enhanced rule sets All rule sets that begin with the name CDIR SCC Enhanced use Security Command Center Premium findings contextualized with several other Google Cloud log sources, including the following: Cloud Audit Logs Cloud DNS logs Identity and Access Management (IAM) analysis Sensitive Data Protection context BigQuery context Compute Engine context To use the CDIR SCC Enhanced rule sets, we recommend that you collect the following Google Cloud data: Log data listed in the All rule sets section.
- AWS CloudTrail ( AWS CLOUDTRAIL ) AWS GuardDuty ( GUARDDUTY ) AWS EC2 HOSTS ( AWS EC2 HOSTS ) AWS EC2 INSTANCES ( AWS EC2 INSTANCES ) AWS EC2 VPCS ( AWS EC2 VPCS ) AWS IAM (IAM) ( AWS IAM ) See Configure the ingestion of AWS data for information about setting up ingestion of AWS data.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- This asset metadata is drawn from your Cloud Asset Inventory and consists of information about your assets, resources, and identities including the following: Environment Location Zone Hardware models Access control relationships between resources and identities The following types of Google Cloud asset metadata will be exported to your Google SecOps instance: GCP BIGQUERY CONTEXT GCP COMPUTE CONTEXT GCP IAM CONTEXT GCP IAM ANALYSIS GCP STORAGE CONTEXT GCP CLOUD FUNCTIONS CONTEXT GCP SQL CONTEXT GCP NETWORK CONNECTIVITY CONTEXT GCP RESOURCE MANAGER CONTEXT The following are examples of Google Cloud asset metadata: Application name— Google-iamSample/0.1 Project name— projects/my-project Note: You need to have either Security Command Center Standard or Security Command Center Premium enabled to export Google Cloud asset metadata to Google SecOps.
- To learn how to filter out logs that are generated by routine activities, see Tune Cloud Audit Logs filters . log id("cloudaudit.googleapis.com/activity") (exported by the default filter) log id("cloudaudit.googleapis.com/system event") (exported by the default filter) log id("cloudaudit.googleapis.com/policy") log id("cloudaudit.googleapis.com/access transparency") Cloud NAT logs ( GCP CLOUD NAT ): log id("compute.googleapis.com/nat flows") Cloud DNS logs ( GCP DNS ): log id("dns.googleapis.com/dns queries") (exported by the default filter) Firewall policy rules logging ( GCP FIREWALL ): log id("compute.googleapis.com/firewall") GCP IDS : log id("ids.googleapis.com/threat") log id("ids.googleapis.com/traffic") GCP LOADBALANCING : This includes logs from Google Cloud Armor and Cloud Load Balancing (both External and Internal). log id("requests") log id("loadbalancing.googleapis.com/requests") GCP CLOUDSQL : log id("cloudsql.googleapis.com/mysql-general.log") log id("cloudsql.googleapis.com/mysql.err") log id("cloudsql.googleapis.com/postgres.log") log id("cloudsql.googleapis.com/sqlagent.out") log id("cloudsql.googleapis.com/sqlserver.err") GCP VPC FLOW : log id("compute.googleapis.com/vpc flows") (for US and EU regions only) NIX SYSTEM : log id("syslog") log id("authlog") log id("securelog") log id("osconfig.googleapis.com/patch job") LINUX SYSMON : log id("sysmon.raw") WINEVTLOG : log id("winevt.raw") log id("windows event log") BRO JSON : log id("zeek json streaming conn") log id("zeek json streaming dhcp") log id("zeek json streaming dns") log id("zeek json streaming http") log id("zeek json streaming ssh") log id("zeek json streaming ssl") KUBERNETES NODE : log id("events") log id("stdout") log id("stderr") AUDITD : log id("audit log") GCP APIGEE X : log id("apigee.googleapis.com/ingress instance") log id("apigee.googleapis.com") log id("apigee-logs") log id("apigee") logName = "^projects/[\w\-]+/logs/apigee[\w\-\.] $" GCP RECAPTCHA ENTERPRISE : log id("recaptchaenterprise.googleapis.com/assessment") log id("recaptchaenterprise.googleapis.com/annotation") GCP RUN : log id("run.googleapis.com/stderr") log id("run.googleapis.com/stdout") log id("run.googleapis.com/requests") log id("run.googleapis.com/varlog/system") GCP NGFW ENTERPRISE : log id("networksecurity.googleapis.com/firewall threat") GCP ABUSE EVENTS : log id("abuseevent.googleapis.com/abuse events") GCP DNS ATD log id("networksecurity.googleapis.com/dns threat events") Model Armor logs ( GCP MODEL ARMOR ): This includes logs for sanitization operations (screening prompts and responses) and template operations (creation, updates). log id("modelarmor.googleapis.com/sanitize operations") log id("modelarmor.googleapis.com/templates") Customize export filter settings By default, your Cloud Audit Logs (Admin Activity and System Event) and Cloud DNS logs are sent to your Google SecOps instance.
- Export filter example: Include additional log types The following export filter exports access transparency logs in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR log id("cloudaudit.googleapis.com/access transparency") Export filter example: Include additional logs from a specific project The following export filter exports access transparency logs from a specific project, in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR logName = "projects/my-project-id/logs/cloudaudit.googleapis.com%2Faccess transparency" Export filter example: Include additional logs from a specific folder The following export filter exports access transparency logs from a specific folder, in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR logName = "folders/my-folder-id/logs/cloudaudit.googleapis.com%2Faccess transparency" Export filter example: Exclude logs from a specific project The following export filter exports the default logs from the entire Google Cloud organization with the exception of a specific project: (log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event")) AND (NOT logName = "^projects/my-project-id/logs/. $") Export Google Cloud asset metadata You can export your Google Cloud asset metadata from Cloud Asset Inventory to Google SecOps.
- To grant the Chronicle Service Viewer IAM role using gcloud , run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member "user: USER EMAIL " \ --role roles/chroniclesm.viewer To grant the Security Center Admin Editor IAM role using gcloud , run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member "user: USER EMAIL " \ --role roles/securitycenter.adminEditor ` To grant the Organization Role Viewer IAM role using gcloud , run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member "user: USER EMAIL " \ --role roles/iam.organizationRoleViewer Enable direct ingestion from Google Cloud The steps to enable direct ingestion from Google Cloud are different depending on the ownership of the project that your Google SecOps instance is bound to.

### "Migrate to a Google Cloud project \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/migrate-to-gcp-project](https://docs.cloud.google.com/chronicle/docs/administration/migrate-to-gcp-project)
- Source ID: `site-docs-reference-required-1`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By linking a Google SecOps instance to a Google Cloud project, you can use Google Cloud services for key capabilities, for example: Examine ingested data and monitor the project for potential security threats.
- Migrate to a Google Cloud project Supported in: Google secops SIEM This document explains how to migrate an existing Google SecOps instance to a customer-owned Google Cloud project.
- To migrate an existing Google SecOps instance to a customer-owned Google Cloud project, do the following: Sign in to Google SecOps.
- Enter the Google Cloud project ID to link the project to the Google SecOps instance.

