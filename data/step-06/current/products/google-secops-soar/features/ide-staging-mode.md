---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.820Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "IDE staging mode"
feature_slug: "ide-staging-mode"
latest_feature_date: "2024-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "ide"
  - "staging"
  - "mode"
  - "the"
  - "now"
  - "includes"
  - "for"
  - "testing"
---

# IDE staging mode

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

The IDE now includes a staging mode for testing certified and custom integrations before production deployment.

## Extended Definition

The IDE now includes a staging mode for testing certified and custom integrations before production deployment.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- Curated detections for Google Cloud data Google Cloud rule sets help identify threats in Google Cloud environments using event and context data, and includes the following rule sets: Admin Action : Activity associated with administrative actions, deemed suspicious but potentially legitimate depending on organizational use.
- The rule set includes the following: Okta : Identifies a range of malicious and suspicious activities occurring within the Okta platform, including MFA attacks, brute force attempts, password spraying, login anomalies, and more.

### "Migrate SOAR endpoints to Chronicle API \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- Source ID: `site-docs-root-2`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Map the service account or workload identity to SOAR parameters If you are using a service account or workload identity federation to authenticate to the Chronicle API, you must authorize it within the platform to ensure it can successfully communicate with Google SecOps.
- Migration steps This section outlines the steps to successfully migrate your applications to Chronicle API: Review the documentation Familiarize yourself with the comprehensive documentation for the new API, including the Chronicle API reference guide.
- The primary objective is to review the new reference documentation and, for each specific use case, identify and implement necessary changes to field names and data structures within your application's logic.
- Migrate SOAR endpoints to Chronicle API Supported in: Google secops SOAR This document outlines the steps and considerations for migrating from the deprecated SOAR API surface to the unified Chronicle API.

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The default is false . pcap settings.network interface string Optional The interface to listen to for PCAP data. pcap settings.bpf string Optional The Berkeley Packet Filter (BPF) for pcap. splunk settings.authentication.username string Optional The username of an identity used for authentication. splunk settings.authentication.password string Optional The password of the account identified by the username. splunk settings.host string Optional The host or IP address for the Splunk REST API. splunk settings.port integer Optional The port for the Splunk REST API. splunk settings.minimum window size integer Optional The minimum time range in seconds for a given Splunk search.
- The available collector types are: file kafka pcap splunk syslog file settings.file path string Optional The path of the file to monitor. kafka settings.authentication.username string Optional The username of an identity used for authentication. kafka settings.authentication.password string Optional The password of the account identified by the username. kafka settings.topic string Optional The Kafka topic from which to ingest data.
- Request example DELETE https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56 Response example If the operation is successful, Delete Collector returns an empty response with an HTTP status code 200 (OK). {} Collector configuration fields The following fields can be provided in the config object of the request body.
- Valid values are: TCP UDP syslog settings.address string Optional The target IP address or hostname where the collector resides and listens for syslog data. syslog settings.port integer Optional The target port where the collector resides and listens for syslog data. syslog settings.buffer size integer Optional The size in bytes of the TCP socket's buffer.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Sample ingress rule - ingressFrom: identities: - serviceAccount:8911409095528497-0-account@partnercontent.gserviceaccount.com sources: - accessLevel: " " ingressTo: operations: - serviceName: storage.googleapis.com methodSelectors: - method: google.storage.objects.list - method: google.storage.objects.get - method: google.storage.objects.delete resources: - projects/PROJECT ID Egress rules The following egress rules must be allowed for feeds using GOOGLE CLOUD STORAGE V2 , GOOGLE CLOUD STORAGE EVENT DRIVEN , AMAZON S3 V2 , AMAZON SQS V2 , and AZURE BLOBSTORE V2 to operate when VPCSC is enabled.
- You can now modify the input parameters for the feed and resubmit it to Google SecOps, which will attempt to use the updated feed.

