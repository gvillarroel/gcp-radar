---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.674Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "SecOps parser validator"
feature_slug: "secops-parser-validator"
latest_feature_date: "2026-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
  - "https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
keywords:
  - "secops"
  - "parser"
  - "validator"
  - "checks"
  - "whether"
  - "logs"
  - "will"
  - "parsed"
---

# SecOps parser validator

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The parser validator checks whether logs will be parsed correctly by Google SecOps before ingestion.

## Extended Definition

The parser validator checks whether logs will be parsed correctly by Google SecOps before ingestion.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- [https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api](https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)

## Supporting Pages

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Use the following format to specify the rule: {ruleId}@v {int64} {int64} Sample request https://backstory.googleapis.com/v2/detect/rules/ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d/detections/de eaccfe15-5fe6-0cf3-b54c-2d6435f53ee4 Response Response fields Field Name Type type string Type of detection (type is always RULE DETECTION). detection.ruleName string Name of the rule generating the detection, as parsed from ruleText. detection.ruleId string Identifier for the rule generating the detection. detection.ruleVersion string Identifier for the rule version generating the detection. detection.alertState string Indicates whether the rule generating this detection currently has alerting enabled or disabled. detection.ruleType string Whether the rule generating this detection is a single event or multi-event rule ("SINGLE EVENT" or "MULTI EVENT"). detection.urlBackToProduct string URL pointing to the Google SecOps application page for this detection. detection.description string Description of the rule that generated the detection.
- CuratedRuleDetection fields type string Type of detection (type is always "GCTI FINDING"). detection.ruleName string Name of the Google SecOps rule generating the detection. detection.ruleId string Identifier for the Google SecOps rule generating the detection. detection.alertState string Indicates whether the Google SecOps rule generating this detection currently has alerting enabled or disabled. detection.ruleType string Whether the Google SecOps rule generating this detection is a single event or multi-event rule ("SINGLE EVENT" or "MULTI EVENT"). detection.urlBackToProduct string URL pointing to the Google SecOps application page for this detection. detection.detectionFields list List of fields matching the Google SecOps rule's requested match variables, for "MULTI EVENT" rules. detection.detectionFields.key string Key for a field specified in the Google SecOps rule, for "MULTI EVENT" rules. detection.detectionFields.value string Value for a field specified in the Google SecOps rule, for "MULTI EVENT" rules. detection.ruleLabels list List of fields specified in Google SecOps rule metadata. detection.ruleLabels.key string Key for a field specified in the Google SecOps rule metadata. detection.ruleLabels.value string Value for a field specified in the Google SecOps rule metadata. detection.summary string Summary for the generated detection. detection.ruleSet string Identifier of the Google SecOps rule set that generated this detection. detection.ruleSetDisplayName string Display name of the Google SecOps rule set that generated this detection. detection.description string Description of the Google SecOps rule that generated the detection. detection.severity string Severity of the detection ("INFORMATIONAL" or "LOW" or "HIGH"). createdTime string Time the detection was created. detectionTime string String representing the time period the detection was found in. id string Identifier for the detection. timeWindow.startTime string String representing the start of the time window in which the detection was found, in RFC 3339 format. timeWindow.endTime string String representing the end of the time window in which the detection was found, in RFC 3339 format. collectionElements list A list of references to sample UDM events causing this detection, grouped by variable. collectionElements.label string The variable a given set of UDM events belongs to. collectionElements.references list A list of references to sample UDM events, grouped by the given label. collectionElements.references.event UDM A UDM event. lastUpdatedTime string Time the detection was last updated. tags list A list of MITRE tactic and technique IDs covered by the Google SecOps rule.
- Only populated for RULE DETECTION type detections. detection.alertState string Indicates whether the rule generating this detection currently has alerting enabled or disabled. detection.ruleType string Whether the rule generating this detection is a single event or multi-event rule ("SINGLE EVENT" or "MULTI EVENT"). detection.urlBackToProduct string URL pointing to the Google SecOps application page for this detection. detection.detectionFields list List of fields matching the rules requested match variables, for "MULTI EVENT" rules. detection.detectionFields.key string Key for a field specified in the rule, for "MULTI EVENT" rules. detection.detectionFields.value string Value for a field specified in the rule, for "MULTI EVENT" rules. detection.ruleLabels list List of fields specified in rule metadata. detection.ruleLabels.key string Key for a field specified in the rule metadata. detection.ruleLabels.value string Value for a field specified in the rule metadata. detection.summary string Summary for the generated detection.
- Sample response { "ruleId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f", "versionId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f@v 1602631093 146879000", "ruleName": "SampleRule", "metadata": { "description": "Sample Description of the Rule", "author": "author@example.com" }, "ruleText": "rule SampleRule { meta: description = \"Sample Description of the Rule\" author = \"author@example.com\" events: // This will just generate lots of detections $event.metadata.event type = \"NETWORK HTTP\" condition: $event } ", "liveRuleEnabled": true, "versionCreateTime": "2020-10-13T23:18:13.146879Z", "compilationState": "SUCCEEDED" "alertingEnabled": true, "lastAlertStatsuChangeTime": "2020-10-14T12:16:45:413463Z" } ListCuratedRules List Google SecOps rules with detections.

### Ingestion API \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api](https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api)
- Source ID: `site-docs-reference-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Character values will be converted and stored as lowercase. { "customer id": "c8c65bfa-5f2c-42d4-9189-64bb7b939f2c", "events": [ { "metadata": { "event timestamp": "2019-10-22T12:00:00.000Z", "event type": "USER LOGIN", "product name": "Acme SSO", "vendor name": "Acme" }, "principal": { "ip": [ "10.1.2.3" ] }, "target": { "application": "Acme Connect", "user": { "user display name": "Mary Jane", "userid": "mary@altostrat.com" } }, "extensions": { "auth": { "type": "MACHINE", "mechanism": [ "NETWORK" ] } } }, { "metadata": { "event timestamp": "2019-10-23T04:00:00.000Z", "event type": "NETWORK HTTP", "product name": "Acme Proxy", "vendor name": "Acme" }, "network": { "http": { "method": "GET", "response code": 200 } }, "principal": { "hostname": "host0", "ip": [ "10.1.2.3" ], "port": 60000 }, "target": { "hostname": "www.altostrat.com", "ip": [ "198.51.100.68" ], "port": 443, "url": "www.altostrat.com/images/logo.png" } } ] } Body parameters Field Value Required Description customer id string Yes Unique identifier (UUID) corresponding to a particular Google SecOps instance.
- For example, this payload will return an error because it includes both ts epoch microseconds and ts rfc3339 . { "customer id": "c8c65bfa-5f2c-42d4-9189-64bb7b939f2c", "log type": "BIND DNS", "labels" : [ { "key" : "key name one", "rbac enabled" : "true", "value" : "value one" }, { "key" : "key name two", "rbac enabled" : "true", "value" : "value two" } ] "entries": [ { "log text": "26-Feb-2019 13:35:02.187 client 10.120.20.32#4238: query: altostrat.com IN A + (203.0.113.102)", "ts epoch microseconds": 1551188102187000 }, { "log text": "26-Feb-2019 13:37:04.523 client 10.50.100.33#1116: query: examplepetstore.com IN A + (203.0.113.102)", "ts rfc3339": "2019-26-02T13:37:04.523-08:00" }, { "log text": "26-Feb-2019 13:39:01.115 client 10.1.2.3#3333: query: www.example.com IN A + (203.0.113.102)" } ]; } Body parameters Field Value Required Description customer id string Yes Unique identifier (UUID) corresponding to a particular Google SecOps instance.
- The Ingestion supports: UDM events Unstructured logs Log types retrieval You can forward your data to Google SecOps using either of the following types of Ingestion endpoints: Unified Data Model (UDM) event Unstructured log If you have formatted your log data using Google SecOps UDM, you can forward UDM events to your Google SecOps account using the UDM API endpoint.
- Ingestion API Supported in: Google secops SIEM This document explains how to use Backstory Ingestion to forward logs directly to your Google Security Operations instance, eliminating the need for additional hardware or software (for example, forwarders) in your environment.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Google SecOps provides default parsers that parse and normalize raw logs from Google Cloud services to create UDM records with data required by these rule sets.
- Google Workspace-related rule sets The following rule sets detect patterns in Google Workspace data: Potential Insider Data Exfiltration from Chrome Potential Insider Data Exfiltration from Drive Potential Insider Data Exfiltration from Gmail Potential Workspace Account Compromise Suspicious Workspace Administrative Actions These rule sets require the following log types, listed by product name and Google SecOps ingestion label: Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Users ( WORKSPACE USERS ) Google Chrome Browser Cloud Management ( CHROME MANAGEMENT ) Gmail logs ( GMAIL LOGS ) To ingest the required data, do the following: Collect the data listed in the All rule sets section of this document.
- The following log data, listed by product name and Google SecOps ingestion label: BigQuery ( GCP BIGQUERY CONTEXT ) Compute Engine ( GCP COMPUTE CONTEXT ) IAM ( GCP IAM CONTEXT ) Sensitive Data Protection ( GCP DLP CONTEXT ) Cloud Audit Logs ( GCP CLOUDAUDIT ) Google Workspace Activity ( WORKSPACE ACTIVITY ) Cloud DNS queries ( GCP DNS ) The following Security Command Center finding classes , listed by findingClass identifier and Google SecOps ingestion label: Threat ( GCP SECURITYCENTER THREAT ) Misconfiguration ( GCP SECURITYCENTER MISCONFIGURATION ) Vulnerability ( GCP SECURITYCENTER VULNERABILITY ) SCC Error ( GCP SECURITYCENTER ERROR ) The CDIR SCC Enhanced rule sets also depend on data from Google Cloud services.
- Configure a Google SecOps Feed to ingest data from either Amazon S3 or Amazon SQS See Ingest AWS logs into Google SecOps for the detailed steps required to configure AWS services and configure a Google SecOps Feed to ingest AWS data.

