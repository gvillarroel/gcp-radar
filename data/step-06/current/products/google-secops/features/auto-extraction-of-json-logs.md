---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.796Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Auto extraction of JSON logs"
feature_slug: "auto-extraction-of-json-logs"
latest_feature_date: "2025-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "auto"
  - "extraction"
  - "json"
  - "logs"
  - "raw"
  - "log"
  - "fields"
  - "can"
---

# Auto extraction of JSON logs

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Raw JSON log fields can be used directly in search, detection rules, and Native Dashboards without requiring a parser.

## Extended Definition

Raw JSON log fields can be used directly in search, detection rules, and Native Dashboards without requiring a parser.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Use the following format to specify the rule: {ruleId}@v {int64} {int64} Sample request https://backstory.googleapis.com/v2/detect/rules/ru 30979d84-aa89-47d6-bf4d-b4bb0eacb497@v 1612472807 179679000/retrohunts/oh 126c03c9-8179-4620-8b72-258d2f4fd039 Response Response fields Field Name Type Description retrohuntId string Unique identifier for the retrohunt. ruleId string Unique rule identifier for this retrohunt. versionId string Identifier for the version of the rule generating the retrohunt. eventStartTime string Start time for the time range of logs being processed, in RFC 3339 format. eventEndTime string End time for the time range of logs being processed, in RFC 3339 format. retrohuntStartTime string Start time for the retrohunt, in RFC 3339 format. retrohuntEndTime string End time for the retrohunt (assuming the retrohunt completes), in RFC 3339 format. state enum Current state of the retrohunt: STATE UNSPECIFIED RUNNING DONE CANCELED progressPercentage float Percentage progress towards retrohunt completion (0.00 to 100.00).
- CuratedRuleDetection fields type string Type of detection (type is always "GCTI FINDING"). detection.ruleName string Name of the Google SecOps rule generating the detection. detection.ruleId string Identifier for the Google SecOps rule generating the detection. detection.alertState string Indicates whether the Google SecOps rule generating this detection currently has alerting enabled or disabled. detection.ruleType string Whether the Google SecOps rule generating this detection is a single event or multi-event rule ("SINGLE EVENT" or "MULTI EVENT"). detection.urlBackToProduct string URL pointing to the Google SecOps application page for this detection. detection.detectionFields list List of fields matching the Google SecOps rule's requested match variables, for "MULTI EVENT" rules. detection.detectionFields.key string Key for a field specified in the Google SecOps rule, for "MULTI EVENT" rules. detection.detectionFields.value string Value for a field specified in the Google SecOps rule, for "MULTI EVENT" rules. detection.ruleLabels list List of fields specified in Google SecOps rule metadata. detection.ruleLabels.key string Key for a field specified in the Google SecOps rule metadata. detection.ruleLabels.value string Value for a field specified in the Google SecOps rule metadata. detection.summary string Summary for the generated detection. detection.ruleSet string Identifier of the Google SecOps rule set that generated this detection. detection.ruleSetDisplayName string Display name of the Google SecOps rule set that generated this detection. detection.description string Description of the Google SecOps rule that generated the detection. detection.severity string Severity of the detection ("INFORMATIONAL" or "LOW" or "HIGH"). createdTime string Time the detection was created. detectionTime string String representing the time period the detection was found in. id string Identifier for the detection. timeWindow.startTime string String representing the start of the time window in which the detection was found, in RFC 3339 format. timeWindow.endTime string String representing the end of the time window in which the detection was found, in RFC 3339 format. collectionElements list A list of references to sample UDM events causing this detection, grouped by variable. collectionElements.label string The variable a given set of UDM events belongs to. collectionElements.references list A list of references to sample UDM events, grouped by the given label. collectionElements.references.event UDM A UDM event. lastUpdatedTime string Time the detection was last updated. tags list A list of MITRE tactic and technique IDs covered by the Google SecOps rule.
- Detections have the same format as those returned by the ListDetections and GetDetection methods, except that the following fields are not returned since the rule is not persisted by the test: detection.ruleId detection.ruleVersion detection.alertState detection.urlBackToProduct createdTime Errors have the same format as those returned by the ListErrors and GetError methods, except that the following fields are not returned since the rule is not persisted by the test: errorId errorTime ruleExecution.ruleId ruleExecution.ruleVersion Sample response [{ "error": { "category": "RULES EXECUTION ERROR", "ruleExecution": { "windowStartTime": "2021-01-01T18:00:00Z", "windowEndTime": "2021-01-01T20:00:00Z" } } } , { "detection": { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "ruleType": "SINGLE EVENT" } ], "id": "de 13503ebe-b96b-7b63-bb89-0e6d218628c9", "timeWindow": { "startTime": "2021-01-03T03:17:49.781746Z", "endTime": "2021-01-03T03:17:49.781746Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2021-01-03T03:17:49.781746Z", "collectedTimestamp": "2021-01-03T03:17:49.791689822Z", "eventType": "NETWORK DNS", "productName": "DNS pcap", "ingestedTimestamp": "2021-01-03T03:17:52.016198Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true, } } } } ], "label": "e" } ], "detectionTime": "2021-01-01T03:17:49.781746Z" } } ] UnarchiveRule Unarchive the specified rule.
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Regional Endpoints Google Security Operations provides regional endpoints for each API.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- As you type, the automatic completion feature suggests valid UDM fields based on your input.
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Note: For the AWS CLOUDTRAIL log type, verify that the logs are in JSON format and the filename is a JSON file (uncompressed) or a JSON GZipped file (compressed).
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- These STS IP address ranges are published in the following JSON file: IP ranges To use these STS feed source types, you may need to adjust IP access restrictions to enable STS to access your Amazon S3 and Azure storage services: Pull the latest IP ranges from the JSON file.

