---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.617Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Simplified job API for storage inspection and risk analysis"
feature_slug: "simplified-job-api-for-storage-inspection-and-risk-analysis"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage"
keywords:
  - "simplified"
  - "workflows"
  - "analysis"
  - "supports"
  - "inspection"
  - "storage"
  - "risk"
---

# Simplified job API for storage inspection and risk analysis

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

A simplified job API supports storage inspection and risk analysis workflows.

## Extended Definition

A simplified job API supports storage inspection and risk analysis workflows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)

## Supporting Pages

### "Enable inspection or risk analysis actions \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions)
- Source ID: `site-api-reference-required-2`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action BigQuery inspection Cloud Storage inspection Datastore inspection Hybrid inspection Risk analysis Save findings to BigQuery ✓ ✓ ✓ ✓ ✓ Save findings to Cloud Storage ✓ ✓ ✓ ✓ Publish to Pub/Sub ✓ ✓ ✓ ✓ ✓ Publish to Security Command Center ✓ ✓ ✓ Publish to Knowledge Catalog ✓ Publish to Data Catalog ( Deprecated ) ✓ Notify by email ✓ ✓ ✓ ✓ ✓ Publish to Cloud Monitoring ✓ ✓ ✓ ✓ De-identify findings ✓ Specify actions You can specify one or more actions when you configure a job: When you create a new inspection or risk analysis job using Sensitive Data Protection in the Google Cloud console, specify actions in the Add actions section of the job creation workflow.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Enable inspection or risk analysis actions Stay organized with collections Save and categorize content based on your preferences.
- This document describes the actions that Sensitive Data Protection can perform after running an inspection job or risk analysis.
- An action is a task that Sensitive Data Protection performs after completing an inspection job or risk analysis.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Previous display name New display name Defensive Evasion: Static Pod Created Defense Evasion: Static Pod Created Data Destruction: Deleted Google Cloud Backup and DR Backup Impact: Deleted Google Cloud Backup and DR Backup Inhibit System Recovery: Deleted Google Cloud Backup and DR host Impact: Deleted Google Cloud Backup and DR host Inhibit System Recovery: Deleted Google Cloud Backup and DR plan association Impact: Deleted Google Cloud Backup and DR plan association Inhibit System Recovery: Deleted Google Cloud Backup and DR Vault Impact: Deleted Google Cloud Backup and DR Vault Inhibit System Recovery: Google Cloud Backup and DR delete policy Impact: Google Cloud Backup and DR delete policy Inhibit System Recovery: Google Cloud Backup and DR delete profile Impact: Google Cloud Backup and DR delete profile Inhibit System Recovery: Google Cloud Backup and DR delete storage pool Impact: Google Cloud Backup and DR delete storage pool Inhibit System Recovery: Google Cloud Backup and DR delete template Impact: Google Cloud Backup and DR delete template Data Destruction: Google Cloud Backup and DR expire image Impact: Google Cloud Backup and DR expire image Data Destruction: Google Cloud Backup and DR remove appliance Impact: Google Cloud Backup and DR remove appliance Inhibit System Recovery: Google Cloud Backup and DR remove plan Impact: Google Cloud Backup and DR remove plan Impair Defenses: Strong Authentication Disabled Persistence: Strong Authentication Disabled Credential Access: External Member Added To Privileged Group Privilege Escalation: External Member Added To Privileged Group Persistence: Impersonation Role Granted For Dormant Service Account Privilege Escalation: Impersonation Role Granted For Dormant Service Account Credential Access: Privileged Group Opened To Public Privilege Escalation: Privileged Group Opened To Public Credential Access: Sensitive Role Granted To Hybrid Group Privilege Escalation: Sensitive Role Granted To Hybrid Group Change Risk Engine includes the aiplatform.googleapis.com/Model resource type in the default high-value resource set.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- November 06, 2025 Feature Security Command Center Risk Engine supports Cloud Run attack paths for the following high-value resources: run.googleapis.com/Job run.googleapis.com/Service November 03, 2025 Feature Compliance Manager supports the Security Command Center Premium tier at the organization level.

### "Inspect Google Cloud storage and databases for sensitive data \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- Source ID: `site-docs-reference-3`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Enable inspection or risk analysis actions .
- For more information, see Enable inspection or risk analysis actions .
- For more information, see Enable inspection or risk analysis actions .
- The scan starts from a random row. @param string $callingProjectId The project ID to run the API call under. @param string $topicId The Pub/Sub topic ID to notify once the job is completed. @param string $subscriptionId The Pub/Sub subscription ID to use when listening for job. @param string $projectId The Google Cloud Project ID. @param string $datasetId The BigQuery Dataset ID. @param string $tableId The BigQuery Table ID to be inspected. / function inspect bigquery with sampling( string $callingProjectId, string $topicId, string $subscriptionId, string $projectId, string $datasetId, string $tableId ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $pubsub = new PubSubClient(); $topic = $pubsub->topic($topicId); // Specify the BigQuery table to be inspected. $bigqueryTable = (new BigQueryTable()) ->setProjectId($projectId) ->setDatasetId($datasetId) ->setTableId($tableId); $bigQueryOptions = (new BigQueryOptions()) ->setTableReference($bigqueryTable) ->setRowsLimit(1000) ->setSampleMethod(SampleMethod::RANDOM START) ->setIdentifyingFields([ (new FieldId()) ->setName('name') ]); $storageConfig = (new StorageConfig()) ->setBigQueryOptions($bigQueryOptions); // Specify the type of info the inspection will look for. // See https://cloud.google.com/dlp/docs/infotypes-reference for complete list of info types $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $infoTypes = [$personNameInfoType]; // Specify how the content should be inspected. $inspectConfig = (new InspectConfig()) ->setInfoTypes($infoTypes) ->setIncludeQuote(true); // Specify the action that is triggered when the job completes. $pubSubAction = (new PublishToPubSub()) ->setTopic($topic->name()); $action = (new Action()) ->setPubSub($pubSubAction); // Configure the long running job we want the service to perform. $inspectJob = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Listen for job notifications via an existing topic/subscription. $subscription = $topic->subscription($subscriptionId); // Submit request $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJob); $job = $dlp->createDlpJob($createDlpJobRequest); // Poll Pub/Sub using exponential backoff until job finishes // Consider using an asynchronous execution model such as Cloud Functions $attempt = 1; $startTime = time(); do { foreach ($subscription->pull() as $message) { if ( isset($message->attributes()['DlpJobName']) && $message->attributes()['DlpJobName'] === $job->getName() ) { $subscription->acknowledge($message); // Get the updated job.

