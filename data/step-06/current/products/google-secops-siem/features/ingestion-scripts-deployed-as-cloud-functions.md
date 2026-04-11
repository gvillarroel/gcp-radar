---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.536Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Ingestion scripts deployed as Cloud Functions"
feature_slug: "ingestion-scripts-deployed-as-cloud-functions"
latest_feature_date: "2023-01-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
keywords:
  - "ingestion"
  - "scripts"
  - "deployed"
  - "as"
  - "functions"
  - "these"
  - "python"
  - "ingest"
---

# Ingestion scripts deployed as Cloud Functions

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

These Python scripts ingest data from supported log sources when deployed as Cloud Functions.

## Extended Definition

These Python scripts ingest data from supported log sources when deployed as Cloud Functions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- January 19, 2023 Feature Chronicle has released a set of ingestion scripts, written in Python, that can be deployed as Cloud Functions.
- Change Chronicle has released additional ingestion scripts, written in Python, that can be deployed as Cloud Functions.
- See Use ingestion scripts deployed as Cloud Functions for instructions about how to configure and deploy the scripts in your environment.
- See Use ingestion scripts deployed as Cloud Functions for instructions about how to configure and deploy the scripts in your environment.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- February 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Big Switch BigCloudFabric logs Collect BMC AMI Defender logs Collect Broadcom Support Portal Audit logs Collect CA ACF2 logs Collect CA LDAP logs Collect ChromeOS XDR logs Collect Chronicle SOAR Audit logs Collect Cisco CTS logs Collect Cisco FireSIGHT Management Center logs Collect Cisco Vision Dynamic Signage Director logs Collect ClamAV logs Collect Cofense logs Collect Crowdstrike IOC logs Collect Custom Application Access logs Collect Custom Security Data Analytics logs Collect Cyber 2.0 IDS logs Collect CyberArk logs Collect Cybereason EDR logs Collect Dataminr Alerts logs Collect Digital Shadows Indicators logs Collect Mimecast Mail V2 logs Collect Okta User Context logs Collect RH-ISAC IOC logs Collect ServiceNow CMDB data February 22, 2026 Change Publisher Agent Version 2.6.4 removes support for Python 3.7 from the remote agent.
- You can use the following feed management source types to set up ingestion using an HTTPS endpoint: Amazon Data Firehose Google Cloud Pub/Sub Webhooks You can also generate a secret key and API key to authenticate feeds that use Amazon Data Firehose and webhooks as the feed source type.
- February 06, 2025 Change The collector ID representing Google Cloud direct ingestion in the Cloud Monitoring metrics and BigQuery has changed from dddddddd-dddd-dddd-dddd-dddddddddddd to aaaa3333-aaaa-3333-aaaa-3333aaaa3333 .
- Feature RBAC for ingestion metrics Administrators can now use RBAC for ingestion metrics to restrict visibility of system health data, such as ingestion volume, errors, and throughput, based on a user's business scope.

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- New API for Logs: Admin users can now retrieve raw python logs directly from the platform using the following API: POST/api/external/v1/logging/python Fixed Release Notes 6.2.31 Importing a custom integration on top of an existing commercial integration causes the connector to not work properly (ID #00243798) Specific Integration showing incorrect update available (ID #00181718) SDK call siemplify.current alert.creation time returns 0 (ID #00226591) In rare situations, unable to access several cases via the Platform or via API (ID #00243878) When changing the Case Stage under the Cases tab, the drop down list of stages does not follow the same numerical order as defined in the Settings (ID #44453181) Entities that should be internal are created as external if ingested using the environment alias (ID #00225318) In certain situations, alerts are ingested into the platform for environments that don't exist yet in the platform and as soon as the environments are created - the cases are opened and playbooks run.
- Fixed Case tag filter pagination is not working in cases page (ID #339581969) Fixed Issues when testing SOAR Webhooks for ingestion. (ID #51862016) July 09, 2024 Announcement Release 6.3.9 is now in General Availability.
- Playbook engineers can now extend platform capabilities by creating custom Python-based transformation functions and logical operators as part of Extension Packs directly within the IDE.
- Agent source code logs are located in agent.log python scripts logs are located in python.log Change Release 6.3.15 is now in General Availability.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- If your Google SecOps instance is bound to a project that Google Cloud owns and manages, perform the following steps: Note: After completing these steps, you will need to obtain a new one-time access code from your Google SecOps representative and complete the procedure to enable direct ingestion from Google Cloud to restart Google Cloud log ingestion.
- When you migrate an existing Google SecOps instance so that it binds to a project that you own, and if direct ingestion was configured before the migration, the direct ingestion configuration is migrated as well.
- To ingest Sensitive Data Protection asset metadata ( DLP CONTEXT ), perform the following: Enable Google Cloud data ingestion by completing the previous section in this document.
- Security Center Admin Editor ( roles/securitycenter.adminEditor ): Required to enable the ingestion of Cloud Asset Metadata .

