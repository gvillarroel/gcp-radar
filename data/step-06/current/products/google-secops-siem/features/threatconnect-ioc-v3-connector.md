---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.507Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "ThreatConnect IOC v3 connector"
feature_slug: "threatconnect-ioc-v3-connector"
latest_feature_date: "2025-12-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
keywords:
  - "threatconnect"
  - "ioc"
  - "v3"
  - "connector"
  - "secops"
  - "supports"
  - "ingesting"
  - "indicators"
---

# ThreatConnect IOC v3 connector

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Google SecOps supports ingesting ThreatConnect indicators of compromise through the ThreatConnect v3 REST API.

## Extended Definition

Google SecOps supports ingesting ThreatConnect indicators of compromise through the ThreatConnect v3 REST API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.
- The HTTPS push endpoint supports a maximum request size of 4 MB per request and a maximum throughput of 15 K QPS per Google SecOps instance.
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference-required-1`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- If the parameter supports a predetermined amount of supported values, then inside the description provide the following section: Possible Values: {value 1}, {value 2} . should have the following parameters: Max Alerts To Fetch : dictates how many {object} should be processed during 1 connector iteration.
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- For changes that affect all integration items: Integration - {Update} For changes that affect all actions: Integration's Actions - {Update} For changes that affect all connectors: Integration's Connectors - {Update} For changes that affect all jobs: Integration's Jobs - {Update} If the release contained a regressive change, then in the release note you need to specify REGRESSIVE! .
- In general, the structure of the name should be like this: {integration display name} - {process} Job For example: ServiceNow - Sync Incidents Job Description The Description of the job should highlight to the user what the job is doing during the iterations; for example, This job will synchronize Security Command Center based cases created by the Urgent Posture Findings connector.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Retroactive matching : when new IOCs are added to any integrated threat intelligence feed (either Google-provided or customer-provided), Google SecOps automatically scans your historical data (up to your full data retention period, typically one year) for any past occurrences of these new indicators.
- How Google SecOps automatically matches IOCs Google SecOps automatically correlates your ingested security data against known threat indicators from various threat intelligence feeds.
- View alerts and IOC matches Supported in: Google secops SIEM The Alerts & IOCs page displays all the alerts and Indicators of Compromise (IOCs) that are impacting your enterprise.
- The following diagram illustrates the end-to-end process: For more information about ingesting data, see Google SecOps data ingestion .

