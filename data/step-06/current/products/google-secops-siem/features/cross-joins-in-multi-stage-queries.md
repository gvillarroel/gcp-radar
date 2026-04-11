---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.254Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Cross joins in multi-stage queries"
feature_slug: "cross-joins-in-multi-stage-queries"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
keywords:
  - "cross"
  - "joins"
  - "in"
  - "multi"
  - "stage"
  - "queries"
  - "yara"
  - "compare"
---

# Cross joins in multi-stage queries

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Cross joins in YARA-L 2.0 multi-stage queries compare individual UDM events against aggregated statistics from earlier stages.

## Extended Definition

Cross joins in YARA-L 2.0 multi-stage queries compare individual UDM events against aggregated statistics from earlier stages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2026 Feature New: cross joins in multi-stage queries You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages.
- They are supported in: Search Dashboards For more information, see Cross joins in multi-stage queries .
- Multi-stage queries in YARA-L let you feed the output of one query stage directly into the input of a subsequent stage.
- March 31, 2026 Feature Multi-stage queries in YARA-L The Multi-stage queries feature is now GA.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2026 Feature New: cross joins in multi-stage queries You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages.
- They are supported in: Search Dashboards For more information, see Cross joins in multi-stage queries .
- Action1 ( ACTION1 ) CDNetworks Cloud Security ( CDNETWORKS CLOUD SECURITY ) Claude Compliance Logs ( CLAUDE COMPLIANCE LOGS ) Dell RecoverPoint ( DELL RECOVERPOINT ) IBM Storwize ( IBM STORWIZE ) LeapXpert Audit Logs ( LEAPXPERT AUDIT ) Oracle Key Vault Audit Logs ( ORACLE KEY VAULT AUDIT LOGS ) RSA Cloud ( RSA CLOUD ) ServiceNow Antivirus Activity ( SERVICENOW ANTIVIRUS ACTIVITY ) ServiceNow Attachment ( SERVICENOW ATTACHMENT ) ServiceNow Email ( SERVICENOW EMAIL ) Versa Director ( VERSA DIRECTOR ) ZPE Systems NodeGrid ( ZPE SYSTEMS NODEGRID ) March 31, 2026 Feature Multi-stage queries in YARA-L The Multi-stage queries feature is now GA.
- Multi-stage queries in YARA-L let you feed the output of one query stage directly into the input of a subsequent stage.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Search limits and quotas Google SecOps enforces limits on search queries to ensure platform stability and consistent performance across programmatic and web interface.
- Complex queries: Queries that span more than 1 day, use multiple sources, or include stats.
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- CuratedRuleDetection fields type string Type of detection (type is always "GCTI FINDING"). detection.ruleName string Name of the Google SecOps rule generating the detection. detection.ruleId string Identifier for the Google SecOps rule generating the detection. detection.alertState string Indicates whether the Google SecOps rule generating this detection currently has alerting enabled or disabled. detection.ruleType string Whether the Google SecOps rule generating this detection is a single event or multi-event rule ("SINGLE EVENT" or "MULTI EVENT"). detection.urlBackToProduct string URL pointing to the Google SecOps application page for this detection. detection.detectionFields list List of fields matching the Google SecOps rule's requested match variables, for "MULTI EVENT" rules. detection.detectionFields.key string Key for a field specified in the Google SecOps rule, for "MULTI EVENT" rules. detection.detectionFields.value string Value for a field specified in the Google SecOps rule, for "MULTI EVENT" rules. detection.ruleLabels list List of fields specified in Google SecOps rule metadata. detection.ruleLabels.key string Key for a field specified in the Google SecOps rule metadata. detection.ruleLabels.value string Value for a field specified in the Google SecOps rule metadata. detection.summary string Summary for the generated detection. detection.ruleSet string Identifier of the Google SecOps rule set that generated this detection. detection.ruleSetDisplayName string Display name of the Google SecOps rule set that generated this detection. detection.description string Description of the Google SecOps rule that generated the detection. detection.severity string Severity of the detection ("INFORMATIONAL" or "LOW" or "HIGH"). createdTime string Time the detection was created. detectionTime string String representing the time period the detection was found in. id string Identifier for the detection. timeWindow.startTime string String representing the start of the time window in which the detection was found, in RFC 3339 format. timeWindow.endTime string String representing the end of the time window in which the detection was found, in RFC 3339 format. collectionElements list A list of references to sample UDM events causing this detection, grouped by variable. collectionElements.label string The variable a given set of UDM events belongs to. collectionElements.references list A list of references to sample UDM events, grouped by the given label. collectionElements.references.event UDM A UDM event. lastUpdatedTime string Time the detection was last updated. tags list A list of MITRE tactic and technique IDs covered by the Google SecOps rule.
- Sample response { "rules": [ { "ruleId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f", "versionId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f@v 1602631093 146879000", "ruleName": "SampleRule", "metadata": { "description": "Sample Description of the latest version of the Rule", "author": "author@example.com" }, "ruleText": "rule SampleRule { // Multi event rule to detect logins from a single user for // multiple cities within a 5 minute window. meta: description = \"Sample Description of the latest version of the Rule\" author = \"author@example.com\" events: $e.metadata.event type = \"USER LOGIN\" $e.principal.user.userid = $user $e.principal.location.city = $city match: $user over 5m condition: #city > 1 } ", "liveRuleEnabled": true, "versionCreateTime": "2020-10-13T23:18:13.146879Z", "compilationState": "SUCCEEDED", "ruleType": "MULTI EVENT", "lastAlertStatusChangeTime": "2020-10-13T23:18:13.146879Z" "inputsUsed": { "usesUdm": "true", }, }, { "ruleId": "ru 1971c2ac-8d5b-41aa-bb30-f95d220e9439", "versionId": "ru 1971c2ac-8d5b-41aa-bb30-f95d220e9439@v 1598398482 260223000", "ruleName": "SampleRule2", "metadata": { "description": "Sample Description of the latest version of the Rule", "author": "author2@example.com" }, "ruleText": "rule SampleRule2 { meta: description = \"Sample Description of the latest version of the Rule\" author = \"author2@example.com\" events: // Single event rule to generate detections for network events involving example.com $event.network.dns.questions.name = \"example.com\" condition: $event } ", "versionCreateTime": "2020-08-25T23:34:42.260223Z", "compilationState": "SUCCEEDED", "ruleType": "SINGLE EVENT", "lastAlertStatusChangeTime": "2020-08-25T23:34:42.260223Z" "inputsUsed": { "usesUdm": "true", }, } ] } ListRuleVersions List all versions of a specific rule.
- Sample response { "rules": [ { "ruleId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f", "versionId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f@v 1602631093 146879000", "ruleName": "SampleRule", "metadata": { "description": "Sample Description of the latest version of the Rule", "author": "author@example.com" }, "ruleText": "rule SampleRule { // Multi event rule to detect logins from a single user for // multiple cities within a 5 minute window. meta: description = \"Sample Description of the latest version of the Rule\" author = \"author@example.com\" events: $e.metadata.event type = \"USER LOGIN\" $e.principal.user.userid = $user $e.principal.location.city = $city match: $user over 5m condition: #city > 1 } ", "liveRuleEnabled": true, "versionCreateTime": "2020-10-13T23:18:13.146879Z", "compilationState": "SUCCEEDED", "ruleType": "MULTI EVENT", "lastAlertStatusChangeTime": "2020-10-13T23:18:13.146879Z", "inputsUsed": { "usesUdm": "true", }, }, { "ruleId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f", "versionId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f@v 1602519130 121984000", "ruleName": "SampleRule", "metadata": { "description": "Sample Description of an older version of the Rule", "author": "author@example.com" }, "ruleText": "rule SampleRule { meta: description = \"Sample Description of an older version of the Rule\" author = \"author@example.com\" events: // Single event rule that will generate lots of detections related to DNS events $event.metadata.event type = \"NETWORK DNS\" condition: $event } ", "versionCreateTime": "2020-10-12T16:12:10.121984Z", "compilationState": "SUCCEEDED", "ruleType": "SINGLE EVENT", "lastAlertStatusChangeTime": "2020-10-12T16:12:10.121984Z", "inputsUsed": { "usesUdm": "true", }, } ] } RunRetrohunt Initiate a retrohunt for the specified rule.
- São Paulo — https://southamerica-east1-backstory.googleapis.com Canada — https://northamerica-northeast2-backstory.googleapis.com Dammam — https://me-central2-backstory.googleapis.com Doha — https://me-central1-backstory.googleapis.com Europe Multi-Region — https://europe-backstory.googleapis.com Frankfurt — https://europe-west3-backstory.googleapis.com Jakarta — https://asia-southeast2-backstory.googleapis.com Johannesburg — https://africa-south1-backstory.googleapis.com London — https://europe-west2-backstory.googleapis.com Mumbai — https://asia-south1-backstory.googleapis.com Paris — https://europe-west9-backstory.googleapis.com Warsaw — https://europe-central2-backstory.googleapis.com Singapore — https://asia-southeast1-backstory.googleapis.com Sydney — https://australia-southeast1-backstory.googleapis.com Tel Aviv — https://me-west1-backstory.googleapis.com Tokyo — https://asia-northeast1-backstory.googleapis.com Turin — https://europe-west12-backstory.googleapis.com United States Multi-Region — https://backstory.googleapis.com Zurich — https://europe-west6-backstory.googleapis.com Detection Engine API reference This section describes the Backstory Detection Engine API methods.

