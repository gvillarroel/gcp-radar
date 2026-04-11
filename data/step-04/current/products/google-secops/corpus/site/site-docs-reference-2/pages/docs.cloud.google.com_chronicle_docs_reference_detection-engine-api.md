---
title: "Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api
  title: "Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Detection Engine
This document explains how to use the Detection Engine API Methods to create, run, and manage security rules that search data stored in your Google Security Operations account. With this method, you can accurately and routinely search for security threats across your enterprise.
The Backstory APIs let you programmatically access their security data through API calls to the Google SecOps platform, which stores and processes that data. This is the same security data available in the Google SecOps console through your organization's account.
With these APIs, you can develop new applications, or enhance existing ones, to retrieve and process all security data stored in Google SecOps.
Get API authentication credentials
Your Google Security Operations representative will provide you with a Google Developer
Service Account Credential to enable the API client to communicate with the API.
You also must provide the Auth Scope when initializing your API client. OAuth 2.0 uses
a scope to limit an application's access to an account. When an application requests a scope,
the access token issued to the application is limited to the scope granted.
Use the following scope to initialize your Backstory API client:
https://www.googleapis.com/auth/chronicle-backstory
Python example
The following Python example demonstrates how to use the OAuth2 credentials
and HTTP client using google.oauth2 and googleapiclient .
# Imports required for the sample - Google Auth and API Client Library Imports.
# Get these packages from https://pypi.org/project/google-api-python-client/ or run $ pip
# install google-api-python-client from your terminal
from google.auth.transport import requests
from google.oauth2 import service_account
SCOPES = ['https://www.googleapis.com/auth/chronicle-backstory']
# The apikeys-demo.json file contains the customer's OAuth 2 credentials.
# SERVICE_ACCOUNT_FILE is the full path to the apikeys-demo.json file
# ToDo: Replace this with the full path to your OAuth2 credentials
SERVICE_ACCOUNT_FILE = '/customer-keys/apikeys-demo.json'
# Create a credential using the Google Developer Service Account Credential and Backstory API
# Scope.
credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
# Build a requests Session Object to make authorized OAuth requests.
http_session = requests.AuthorizedSession(credentials)
# Your endpoint GET|POST|PATCH|etc. code will vary below
# Reference List example (for US region)
url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER_SHA256'
# You might need another regional endpoint for your API call; see
# https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional_endpoints
# requests GET example
response = http_session.request("GET", url)
# POST example uses json
body = {
"foo": "bar"
}
response = http_session.request("POST", url, json=body)
# PATCH example uses params and json
params = {
"foo": "bar"
}
response = http_session.request("PATCH", url, params=params, json=body)
# For more complete examples, see:
# https://github.com/chronicle/api-samples-python/
Regional Endpoints
Google Security Operations provides regional endpoints for each API.
São Paulo — https://southamerica-east1-backstory.googleapis.com
Canada — https://northamerica-northeast2-backstory.googleapis.com
Dammam — https://me-central2-backstory.googleapis.com
Doha — https://me-central1-backstory.googleapis.com
Europe Multi-Region — https://europe-backstory.googleapis.com
Frankfurt — https://europe-west3-backstory.googleapis.com
Jakarta — https://asia-southeast2-backstory.googleapis.com
Johannesburg — https://africa-south1-backstory.googleapis.com
London — https://europe-west2-backstory.googleapis.com
Mumbai — https://asia-south1-backstory.googleapis.com
Paris — https://europe-west9-backstory.googleapis.com
Warsaw — https://europe-central2-backstory.googleapis.com
Singapore — https://asia-southeast1-backstory.googleapis.com
Sydney — https://australia-southeast1-backstory.googleapis.com
Tel Aviv — https://me-west1-backstory.googleapis.com
Tokyo — https://asia-northeast1-backstory.googleapis.com
Turin — https://europe-west12-backstory.googleapis.com
United States Multi-Region — https://backstory.googleapis.com
Zurich — https://europe-west6-backstory.googleapis.com
Detection Engine API reference
This section describes the Backstory Detection Engine API methods.
ArchiveRule
Archive the specified rule.
Note: ArchiveRule uses the POST method.
Request
POST https://backstory.googleapis.com/v2/detect/rules/{ruleId}:archive
URL parameters
Parameter Name
Type
Required
Description
ruleId
string
Required
Unique rule identifier for the rule you want to archive.
Use the following format to specify the rule:
ru_{UUID}
Sample request
https://backstory.googleapis.com/v2/detect/rules/ru_e6abfcb5-1b85-41b0-b64c-695b3250436f:archive
Response
Returns an empty JSON with 200 OK, indicating the operation has completed successfully.
CancelRetrohunt
Cancel a retrohunt for the specified rule.
Note: CancelRetrohunt uses the POST method. Note: You can specify a rule identifier or a version identifier, but not both.
Request
Canceling retrohunt for the latest version of a rule:
POST https://backstory.googleapis.com/v2/detect/rules/{ruleId}/retrohunts/{retrohuntId}:cancelRetrohunt
Canceling retrohunt for a specific version of a rule:
POST https://backstory.googleapis.com/v2/detect/rules/{versionId}/retrohunts/{retrohuntId}:cancelRetrohunt
URL parameters
Parameter Name
Type
Required
Description
retrohuntId
string
Required
Unique identifier for a retrohunt, defined and returned by the server. You must specify exactly one retrohunt identifier.
ruleId
string
One of ruleId and versionId
Unique identifier for a rule, defined and returned by the server. You can specify exactly one rule identifier.
Use the following format to specify the rule: ru_{UUID}
versionId
string
One of ruleId and versionId
Unique identifier for a specific version of a rule, defined and returned by the server. You can specify exactly one version identifier.
Use the following format to specify the rule: {ruleId}@v_{int64}_{int64}
Sample request (specific version of rule)
https://backstory.googleapis.com/v2/detect/rules/ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497@v_1612472807_179679000/retrohunts/oh_8d424a95-5b74-4330-ab6e-5b1096d13d94:cancelRetrohunt
Response
Returns an empty JSON with 200 OK, indicating the operation has completed successfully.
CreateRule
Create a new rule without setting the rule to live.
Note: CreateRule uses the POST method.
Request
POST https://backstory.googleapis.com/v2/detect/rules
Request body
{
"ruleText": "<rule text here>"
}
Body parameters
Parameter Name
Type
Required
Description
ruleText
string
Required
Text of the new rule in YARA-L 2.0 format.
Sample request
https://backstory.googleapis.com/v2/detect/rules
{
"ruleText": "rule singleEventRule2 {
meta:
author = \"securityuser\"
description = \"single event rule that should generate detections\"
events:
$e.metadata.event_type = \"NETWORK_DNS\"
condition:
$e
}"
}
Response
Response fields
Same response format of GetRule .
Sample response
{
"ruleId": "ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d",
"versionId": "ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d@v_1605892700_409247000",
"ruleName": "singleEventRule2",
"metadata": {
"author": "securityuser",
"description": "single event rule that should generate detections"
},
"ruleText": "rule singleEventRule2 {
meta:
author = \"securityuser\"
description = \"single event rule that should generate detections\"
events:
$e.metadata.event_type = \"NETWORK_DNS\"
condition:
$e
}",
"ruleType": "SINGLE_EVENT",
"versionCreateTime": "2020-11-20T17:18:20.409247Z",
"compilationState": "SUCCEEDED"
"lastAlertStatusChangeTime": "2020-11-20T17:18:20.409247Z",
"inputsUsed": {
"usesUdm": "true",
},
}
CreateRuleVersion
Creates a new version of an existing rule. The new version of the rule does not have to be based on the latest version.
Note: CreateRuleVersion uses the POST method.
Request
POST https://backstory.googleapis.com/v2/detect/rules/{ruleId}:createVersion
URL parameters
Parameter Name
Type
Required
Description
ruleId
string
Required
Unique identifier for a rule, defined and returned by the server.
You must specify exactly one rule identifier. Use the following format
to specify the rule: ru_{UUID}
Request body
{
"ruleText": "<rule text here>"
}
Body parameters
Parameter Name
Type
Required
Description
ruleText
string
Required
Text of the new rule in YARA-L 2.0 format.
Sample request
https://backstory.googleapis.com/v2/detect/rules/ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d:createVersion
{
"ruleText": "rule singleEventRule2 {
meta:
author = \"securityuser\"
description = \"single event rule that should generate detections\"
events:
$e.metadata.event_type = \"NETWORK_DNS\"
condition:
$e
}"
}
Response
Response fields
Same response format of GetRule .
Sample response
{
"ruleId": "ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d",
"versionId": "ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d@v_1605892822_687503000",
"ruleName": "singleEventRule2",
"metadata": {
"author": "securityuser",
"description": "single event rule that should generate detections"
},
"ruleText": "rule singleEventRule2 {
meta:
author = \"securityuser\"
description = \"single event rule that should generate detections\"
events:
$e.metadata.event_type = \"NETWORK_DNS\"
condition:
$e
} ",
"ruleType": "SINGLE_EVENT",
"versionCreateTime": "2020-11-20T17:20:22.687503Z",
"compilationState": "SUCCEEDED"
"lastAlertStatusChangeTime": "2020-11-20T17:18:20.409247Z",
"inputsUsed": {
"usesUdm": "true",
},
}
DeleteRule
Delete the specified rule.
Note: DeleteRule uses the DELETE method. Note: This method is not automatically available to all customers. Please contact
your Google SecOps representative for more information.
Request
DELETE https://backstory.googleapis.com/v2/detect/rules/{ruleId}
URL parameters
Parameter Name
Type
Required
Description
ruleId
string
Required
Unique rule identifier for the rule you want to delete.
Use the following format to specify the rule:
ru_{UUID}
Sample request
https://backstory.googleapis.com/v2/detect/rules/ru_e6abfcb5-1b85-41b0-b64c-695b3250436f
Response
Returns an empty JSON with 200 OK, indicating the operation has completed successfully.
DisableAlerting
Disables alerts for the specified rule.
Note: DisableAlerting uses the POST method.
Request
POST https://backstory.googleapis.com/v2/detect/rules/{ruleId}:disableAlerting
URL Parameters
Parameter Name
Type
Required
Description
ruleId
string
Required
Unique rule identifier for the rule you want to disable alerts for.
Use the following format to specify the rule:
ru_{UUID}
Sample request
https://backstory.googleapis.com/v2/detect/rules/ru_a17b55ed-7025-4870-85ef-3d0dd533b75b:disableAlerting
Response
Returns an empty JSON with 200 OK, indicating the operation has completed successfully.
DisableLiveRule
Disable the latest version of the rule.
Note: DisableLiveRule uses the POST method.
Request
POST https://backstory.googleapis.com/v2/detect/rules/{ruleId}:disableLiveRule
URL parameters
Parameter Name
Type
Required
Description
ruleId
string
Required
Unique identifier for a rule, defined and returned by the server. You must specify exactly one rule identifier.
Use the following format to specify the rule: ru_{UUID}
Sample request
https://backstory.googleapis.com/v2/detect/rules/ru_e6abfcb5-1b85-41b0-b64c-695b3250436f:disableLiveRule
Response
Returns an empty JSON with 200 OK, indicating the operation has completed successfully.
EnableAlerting
Enables alerts for the specified rule.
Note: EnableAlerting uses the POST method.
Request
POST https://backstory.googleapis.com/v2/detect/rules/{ruleId}:enableAlerting
URL parameters
Parameter Name
Type
Required
Description
ruleId
string
Required
Unique rule identifier for the rule you want to enable alerts for.
Use the following format to specify the rule:
ru_{UUID}
Sample request
https://backstory.googleapis.com/v2/detect/rules/ru_a17b55ed-7025-4870-85ef-3d0dd533b75b:enableAlerting
Response
Returns an empty JSON with 200 OK, indicating the operation has completed successfully.
EnableLiveRule
Set the latest version of a rule to live.
Note: EnableLiveRule uses the POST method.
Request
POST https://backstory.googleapis.com/v2/detect/rules/{ruleId}:enableLiveRule
URL parameters
Parameter Name
Type
Required
Description
ruleId
string
Required
Unique identifier for a rule, defined and returned by the server. You must specify exactly one rule identifier.
Use the following format to specify the rule:
ru_{UUID}
Sample request
https://backstory.googleapis.com/v2/detect/rules/ru_e6abfcb5-1b85-41b0-b64c-695b3250436f:enableLiveRule
Response
Returns an empty JSON with 200 OK, indicating the operation has completed successfully.
GetDetection
Return the specified detection for the specified version of a rule.
By default, GetDetection queries the current version of a rule. To get a detection from a previous version of a rule, you need to pass the version identifier ( versionId ) of the relevant rule (see "Detection... with a given version identifier" in the following section ).
Note: GetDetection uses the GET method. Note: You can specify a rule identifier or a version identifier, but not both.
Request
Detection for the latest version of a rule with a given rule identifier:
GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}/detections/{detection_id}
Detection for a specific version of a rule with a given version identifier:
GET https://backstory.googleapis.com/v2/detect/rules/{versionId}/detections/{detection_id}
Note: You can get the versionId using ListRuleVersions . The versionId is in the format ru_{rule_id}@v_{int64}_{int64} (for example, ru_123abc45-67de-89fg-01hi-234jklmnop56@v_1612345678_999999999 ).
URL parameters
Parameter Name
Type
Required
Description
detectionId
string
Required
Unique identifier for a detection, defined and returned by the server. You can specify exactly one detection identifier.
ruleId
string
One of ruleId or versionId
Unique identifier for a rule, defined and returned by the server. You can specify exactly one rule identifier.
Use the following format to specify the rule: ru_{UUID} . By not specifying a version identifier, Google SecOps returns the latest version of the rule.
versionId
string
One of ruleId or versionId
Unique identifier for a specific version of a rule, defined and returned by the server. You can specify exactly one version identifier.
Use the following format to specify the rule:
{ruleId}@v_{int64}_{int64}
Sample request
https://backstory.googleapis.com/v2/detect/rules/ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d/detections/de_eaccfe15-5fe6-0cf3-b54c-2d6435f53ee4
Response
Response fields
Field Name
Type
type
string
Type of detection (type is always `RULE_DETECTION`).
detection.ruleName
string
Name of the rule generating the detection, as parsed from `ruleText`.
detection.ruleId
string
Identifier for the rule generating the detection.
detection.ruleVersion
string
Identifier for the rule version generating the detection.
detection.alertState
string
Indicates whether the rule generating this detection currently has alerting enabled or disabled.
detection.ruleType
string
Whether the rule generating this detection is a single event or multi-event rule
("SINGLE_EVENT" or "MULTI_EVENT").
detection.urlBackToProduct
string
URL pointing to the Google SecOps application page for this detection.
detection.description
string
Description of the rule that generated the detection. This description is copied from the rule metadata's `description` key, if it is set.
detection.detectionFields
list
List of fields matching the rules requested match variables, for "MULTI_EVENT" rules.
detection.detectionFields.key
string
Key for a field specified in the rule, for "MULTI_EVENT" rules.
detection.detectionFields.value
string
Value for a field specified in the rule, for "MULTI_EVENT" rules.
detection.ruleLabels
list
List of fields specified in rule metadata.
detection.ruleLabels.key
string
Key for a field specified in the rule metadata.
detection.ruleLabels.value
string
Value for a field specified in the rule metadata.
createdTime
string
Time the detection was created.
detectionTime
string
String representing the time period the detection was found in.
id
string
Identifier for the detection. Same as "detection_id".
timeWindow.startTime
string
String representing the start of the time window in which the detection was found, in RFC 3339 format.
timeWindow.endTime
string
String representing the end of the time window in which the detection was found, in RFC 3339 format.
collectionElements
list
A list of references to sample UDM events causing this detection, grouped by variable.
collectionElements.label
string
The variable a given set of UDM events belongs to.
collectionElements.references
list
A list of references to sample UDM events, grouped by the given label.
collectionElements.references.event
UDM
A UDM event.
Sample response
{
"type": "RULE_DETECTION",
"detection": [
{
"ruleName": "singleEventRule2",
"urlBackToProduct":
"https://customername.backstory.chronicle.security/ruleDetections?
ruleId=ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline&
selectedParentDetectionId=de_ce594791-09ed-9681-27fa-3b7c8fa6054c&
selectedTimestamp=2020-12-03T16:50:47.647245Z",
"ruleId": "ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d",
"ruleVersion": "ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d@v_1605892822_687503000",
"alertState": "NOT_ALERTING",
"ruleType": "SINGLE_EVENT"
}
],
"createdTime": "2020-12-03T19:19:21.325134Z",
"id": "de_ce594791-09ed-9681-27fa-3b7c8fa6054c",
"timeWindow": {
"startTime": "2020-12-03T16:50:47.647245Z",
"endTime": "2020-12-03T16:50:47.647245Z"
},
"collectionElements": [
{
"references": [
{
"event": {
"metadata": {
"eventTimestamp": "2020-12-03T16:50:47.647245Z",
"collectedTimestamp": "2020-12-03T16:50:47.666064010Z",
"eventType": "NETWORK_DNS",
"productName": "ProductName",
"ingestedTimestamp": "2020-12-03T16:50:49.494542Z"
},
"principal": {
"ip": [
"10.0.1.2"
]
},
"target": {
"ip": [
"10.0.5.5"
]
},
"securityResult": [
{
"action": [
"UNKNOWN_ACTION"
]
}
],
"network": {
"applicationProtocol": "DNS",
"dns": {
"questions": [
{
"name": "altostrat.com",
"type": 1,
"class": 1
}
],
"id": 12345,
"recursionDesired": true
}
}
}
}
],
"label": "e"
}
],
"detectionTime": "2020-12-03T16:50:47.647245Z"
}
GetError
Return the specified error.
Note: GetError uses the GET method.
Request
GET https://backstory.googleapis.com/v2/health/errors/{errorId}
URL parameters
Parameter Name
Type
Required
Description
errorId
string
Required
Unique identifier for an error, defined and returned by the server.
Sample request
https://backstory.googleapis.com/v2/health/errors/ed_77d0e45f-5b68-065a-ac0f-d7c12158c978
Response
Response fields
Field Name
Type
errorId
string
Unique identifier for an error generated by a rule, defined and returned by the server.
category
string
Type of error.
text
string
Description of the error, including information about how to resolve it.
errorTime
string
String representing the time the error was recorded, in RFC 3339 format.
ruleExecution.windowStartTime
string
String representing the time rule execution was started, in RFC 3339 format.
ruleExecution.windowEndTime
string
String representing the time rule execution was ended, in RFC 3339 format
ruleExecution.ruleId
string
Unique identifier for the rule causing this error, defined and returned by the
server. Returned in the following format: ru_{UUID}
ruleExecution.versionId
string
Unique identifier for the specific version of a rule causing this error, defined and returned by the server. Returned in the following format: {rule_id}@v_{int64}_{int64}
Sample response
{
"errorId": "ed_77d0e45f-5b68-065a-ac0f-d7c12158c978",
"category": "RULES_EXECUTION_ERROR",
"text": "rule needs to be updated: validating rule: variable email_reply_to used in both condition
section and match section, should only be used in one",
"errorTime": "2020-10-31T22:17:49.314016Z",
"ruleExecution": {
"windowStartTime": "2020-10-31T21:00:00Z",
"windowEndTime": "2020-10-31T22:00:00Z",
"ruleId": "ru_d27d2fdc-010a-417a-a773-7f886b3d08c7",
"versionId": "ru_d27d2fdc-010a-417a-a773-7f886b3d08c7@v_1597880575_633631000"
}
}
GetRetrohunt
Getting the retrohunt for the specified version of a rule.
Note: GetRetrohunt uses the GET method. Note: You can specify a rule identifier or a version identifier, but not both.
Request
Retrohunt for the latest version of a rule with a specified retrohunt identifier:
GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}/retrohunts/{retrohuntId}
Retrohunt for a specific version of a rule with a specified retrohunt identifier:
GET https://backstory.googleapis.com/v2/detect/rules/{versionId}/retrohunts/{retrohuntId}
URL parameters
Parameter Name
Type
Required
Description
retrohuntId
string
Required
Unique identifier for a retrohunt, defined and returned by the server. You must specify exactly one retrohunt identifier.
ruleId
string
One of ruleId or versionId
Unique identifier for a rule, defined and returned by the server. You can specify exactly one rule identifier.
Use the following format to specify the rule: ru_{UUID}
versionId
string
One of ruleId or versionId
Unique identifier for a specific version of a rule, defined and returned by the server. You can specify exactly one version identifier.
Use the following format to specify the rule: {ruleId}@v_{int64}_{int64}
Sample request
https://backstory.googleapis.com/v2/detect/rules/ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497@v_1612472807_179679000/retrohunts/oh_126c03c9-8179-4620-8b72-258d2f4fd039
Response
Response fields
Field Name
Type
Description
retrohuntId
string
Unique identifier for the retrohunt.
ruleId
string
Unique rule identifier for this retrohunt.
versionId
string
Identifier for the version of the rule generating the retrohunt.
eventStartTime
string
Start time for the time range of logs being processed, in RFC 3339 format.
eventEndTime
string
End time for the time range of logs being processed, in RFC 3339 format.
retrohuntStartTime
string
Start time for the retrohunt, in RFC 3339 format.
retrohuntEndTime
string
End time for the retrohunt (assuming the retrohunt completes), in RFC 3339 format.
state
enum
Current state of the retrohunt:
STATE_UNSPECIFIED
RUNNING
DONE
CANCELED
progressPercentage
float
Percentage progress towards retrohunt completion (0.00 to 100.00).
Sample response
{
"retrohuntId": "oh_126c03c9-8179-4620-8b72-258d2f4fd039",
"ruleId": "ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497",
"versionId": "ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497@v_1612472807_179679000",
"eventStartTime": "2021-01-14T20:00:00Z",
"eventEndTime": "2021-01-30T20:00:00Z",
"retrohuntStartTime": "2021-02-04T22:01:56.068077Z",
"retrohuntEndTime": "2021-02-04T22:02:44.201404Z",
"state": "RUNNING",
"progressPercentage": 96.55
}
GetRule
Return the specified rule.
Note: GetRule uses the GET method. Note: You can specify a rule identifier or a version identifier, but not both.
Request
Latest version of a rule with a given rule identifier:
GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}
Specific version of a rule with a given version identifier:
GET https://backstory.googleapis.com/v2/detect/rules/{versionId}
URL parameters
Parameter Name
Type
Required
Description
ruleId
string
One of ruleId or versionId
Unique identifier for a rule, defined and returned by the server. You can specify exactly one rule identifier. Use the following format to specify the rule: ru_{UUID}
versionId
string
One of ruleId or versionId
Unique identifier for a specific version of a rule, defined and returned by the server. You can specify exactly one version identifier. Use the following format to specify the rule: {ruleId}@v_{int64}_{int64}
Sample request
Getting the latest version of a rule with a given rule identifier:
https://backstory.googleapis.com/v2/detect/rules/ru_e6abfcb5-1b85-41b0-b64c-695b3250436f
Getting a specific version of a rule with a given rule identifier and version:
https://backstory.googleapis.com/v2/detect/rules/ru_e6abfcb5-1b85-41b0-b64c-695b3250436f@v_1602631093_146879000
Response
Response fields
Field Name
Type
ruleId
string
Unique identifier for a rule, defined and returned by the server.
Returned in the following format: ru_{UUID}
versionId
string
Unique identifier for a specific version of a rule, defined and returned by the server.
Returned in the following format: {rule_id}@v_{int64}_{int64}
ruleName
string
Name of the rule as parsed from "ruleText".
metadata
map< string >, < string >
Metadata for the rule as parsed from "ruleText".
ruleText
string
Source code for the rule as defined by the user.
ruleType
string
Type of rule. Can be either SINGLE_EVENT or MULTI_EVENT.
liveRuleEnabled
boolean
Whether the rule is enabled to run as a Live Rule. Note: False boolean values are omitted.
alertingEnabled
boolean
Whether the rule is enabled to generate alerts. Note: False boolean values are omitted.
lastAlertStatusChangeTime
string
The time when alertingEnabled was last updated from true to false or from false to true .
inputsUsed
enum
The set of inputs used in the rule. For example, if the rule uses $e.principal.hostname , the uses_udm field will be true.
versionCreateTime
string
The time in RFC 3339 format.
compilationState
string
Compilability of the rule ("SUCCEEDED" or "FAILED)".
compilationError
string
If "compilationState" is "FAILED", a compilation error for the rule is
returned. Does not appear if "compilationState" is "SUCCEEDED".
Sample response
{
"ruleId": "ru_e6abfcb5-1b85-41b0-b64c-695b3250436f",
"versionId": "ru_e6abfcb5-1b85-41b0-b64c-695b3250436f@v_1602631093_146879000",
"ruleName": "SampleRule",
"metadata": {
"description": "Sample Description of the Rule",
"author": "author@example.com"
},
"ruleText": "rule SampleRule {
meta:
description = \"Sample Description of the Rule\"
author = \"author@example.com\"
events:
// This will just generate lots of detections
$event.metadata.event_type = \"NETWORK_HTTP\"
condition:
$event
} ",
"liveRuleEnabled": true,
"versionCreateTime": "2020-10-13T23:18:13.146879Z",
"compilationState": "SUCCEEDED"
"alertingEnabled": true,
"lastAlertStatsuChangeTime": "2020-10-14T12:16:45:413463Z"
}
ListCuratedRules
List Google SecOps rules with detections.
Note: ListCuratedRules uses the GET method.
Request
GET https://backstory.googleapis.com/v2/detect/curatedRules
URL parameters
Parameter Name
Type
Required
Description
page_size
integer
Optional
Specify the maximum number of rules to return (range is 1 through 1,000). The default is 100.
page_token
string
Optional
Page token received from a previous call. Use to retrieve the next page.
Sample request
https://backstory.googleapis.com/v2/detect/curatedRules?page_size=10&page_token=abc
Response
Response fields
Field Name
Type
curatedRules
array
Array of Google SecOps rules in the below format .
nextPageToken
string
Page token. Can be provided to the next call to view the next page of rules. Does not appear if this is the last page of rules.
CuratedRule fields
Field Name
Type
ruleId
string
Unique identifier for a rule, defined and returned by the server.
ruleName
string
Name of the rule.
metadata
map< string , string >
Metadata for the rule.
severity
string
Severity of the rule ("Info", "Low", or "High").
ruleType
string
Type of the rule ("SINGLE_EVENT" or "MULTI_EVENT").
precision
string
Precision of the rule ("BROAD" or "PRECISE").
tactics
[]string
List of MITRE tactic IDs covered by the rule.
techniques
[]string
List of MITRE technique IDs covered by the rule.
updateTime
string
String representing the time the rule was last updated, in RFC 3339 format.
ruleSet
string
Unique identifier of the Google SecOps rule set containing the rule.
description
string
Description of the rule.
Sample response
{
"curatedRules": [
{
"ruleId": "ur_mal_GMER__ExecuteCommand",
"ruleName": "GMER Driver Batch File Execution",
"severity": "Low",
"ruleType": "SINGLE_EVENT",
"precision": "PRECISE",
"tactics": [
"TA0002"
],
"techniques": [
"T1610"
],
"updateTime": "2022-12-15T22:52:45.496505Z",
"ruleSet": "51bd0127-93fd-816c-4bc7-fe5630f10432",
"description": "Detects GMER .bat file execution. This is used by malware to execute core functionality and evade detection."
},
{
"ruleId": "ur_mal_CobaltStrike_StartW",
"ruleName": "Cobalt Strike Default Entrypoint",
"severity": "Low",
"ruleType": "SINGLE_EVENT",
"precision": "PRECISE",
"tactics": [
"TA0004"
],
"techniques": [
"T1548"
],
"updateTime": "2022-11-16T18:28:45.062531Z",
"ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9",
"description": "Identifies CobaltStrike rundll32 execution using the default entrypoint."
},
],
"nextPageToken": "CiQ0ODU4NWNjZS04MDZlLTExMjktNzY0MC0wMGViZDI4N2U1OTESGHVyX21hbF9MZW9WQlNfRG93bmxvYWRlcg=="
}
ListCuratedRuleDetections
Return the detections for the specified Google SecOps rule.
Note: ListCuratedRuleDetections uses the GET method.
Request
Detections for a Google SecOps rule with a given rule identifier:
GET https://backstory.googleapis.com/v2/detect/curatedRules/{curatedRuleId}/detections
Detections for all versions of all rules:
GET https://backstory.googleapis.com/v2/detect/curatedRules/-/detections
URL parameters
Parameter Name
Type
Required
Description
alert_state
enum
Optional
Filter detections based on whether the alert state is ALERTING or NOT_ALERTING .
start_time
string
Optional
Start time of the time range to return detections for, filtering by the detection field specified in the list_basis parameter. If not specified, then detections are not limited by a lower bound.
end_time
string
Optional
End time of the time range to return detections for, filtering by the detection field specified by the list_basis parameter. If not specified, then detections are not limited by an upper bound.
list_basis
enum
Optional
Sort detections by DETECTION_TIME or by CREATED_TIME . If not specified, defaults to DETECTION_TIME . Detections are returned in descending order of the timestamp.
page_size
integer
Optional
Specify the maximum number of detections to return (range is 1 through 1,000). The default is 100.
page_token
string
Optional
Use to retrieve another page of detections.
include_simulated_detections
bool
Optional
If true, returns simulated detections in addition to regular detections. If not specified, simulated detections are omitted.
Sample request
https://backstory.googleapis.com/v2/detect/curatedRules/ur_mal_CobaltStrike_StartW/detections?page_size=100
Sample request (detections ordered by CreateTimestamp)
https://backstory.googleapis.com/v2/detect/curatedRules/ur_mal_CobaltStrike_StartW/detections?
page_size=100&list_basis=CREATED_TIME
Response
Response fields
Field Name
Type
curatedRuleDetections
array
Array of detections in the below format .
nextPageToken
string
Page token. Use for the next call to view the next page of detections. Does not appear on
the last page of detections.
CuratedRuleDetection fields
type
string
Type of detection (type is always "GCTI_FINDING").
detection.ruleName
string
Name of the Google SecOps rule generating the detection.
detection.ruleId
string
Identifier for the Google SecOps rule generating the detection.
detection.alertState
string
Indicates whether the Google SecOps rule generating this detection currently has alerting enabled or disabled.
detection.ruleType
string
Whether the Google SecOps rule generating this detection is a single event or multi-event rule
("SINGLE_EVENT" or "MULTI_EVENT").
detection.urlBackToProduct
string
URL pointing to the Google SecOps application page for this detection.
detection.detectionFields
list
List of fields matching the Google SecOps rule's requested match variables, for "MULTI_EVENT" rules.
detection.detectionFields.key
string
Key for a field specified in the Google SecOps rule, for "MULTI_EVENT" rules.
detection.detectionFields.value
string
Value for a field specified in the Google SecOps rule, for "MULTI_EVENT" rules.
detection.ruleLabels
list
List of fields specified in Google SecOps rule metadata.
detection.ruleLabels.key
string
Key for a field specified in the Google SecOps rule metadata.
detection.ruleLabels.value
string
Value for a field specified in the Google SecOps rule metadata.
detection.summary
string
Summary for the generated detection.
detection.ruleSet
string
Identifier of the Google SecOps rule set that generated this detection.
detection.ruleSetDisplayName
string
Display name of the Google SecOps rule set that generated this detection.
detection.description
string
Description of the Google SecOps rule that generated the detection.
detection.severity
string
Severity of the detection ("INFORMATIONAL" or "LOW" or "HIGH").
createdTime
string
Time the detection was created.
detectionTime
string
String representing the time period the detection was found in.
id
string
Identifier for the detection.
timeWindow.startTime
string
String representing the start of the time window in which the detection was found, in RFC 3339 format.
timeWindow.endTime
string
String representing the end of the time window in which the detection was found, in RFC 3339 format.
collectionElements
list
A list of references to sample UDM events causing this detection, grouped by variable.
collectionElements.label
string
The variable a given set of UDM events belongs to.
collectionElements.references
list
A list of references to sample UDM events, grouped by the given label.
collectionElements.references.event
UDM
A UDM event.
lastUpdatedTime
string
Time the detection was last updated.
tags
list
A list of MITRE tactic and technique IDs covered by the Google SecOps rule.
Sample Response
{
"curatedRuleDetections": [
{
"type": "GCTI_FINDING",
"detection": [
{
"ruleName": "Cobalt Strike Default Entrypoint",
"summary": "Rule Detection",
"description": "Identifies CobaltStrike rundll32 execution using the default entrypoint.",
"severity": "LOW",
"urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?ruleId=ur_mal_CobaltStrike_StartW&selectedList=RuleDetectionsViewTimeline&ruleSource=ruleSet&selectedParentDetectionId=de_227a290c-17e9-6314-7f16-35f7923b554f&selectedTimestamp=2022-12-05T11:07:12.585Z",
"ruleId": "ur_mal_CobaltStrike_StartW",
"alertState": "ALERTING",
"ruleType": "SINGLE_EVENT",
"ruleLabels": [
{
"key": "rule_name",
"value": "Cobalt Strike Default Entrypoint"
}
],
"ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9",
"ruleSetDisplayName": "RAT"
}
],
"createdTime": "2022-12-05T12:13:23.154544Z",
"lastUpdatedTime": "2022-12-05T12:13:23.154544Z",
"id": "de_227a290c-17e9-6314-7f16-35f7923b554f",
"timeWindow": {
"startTime": "2022-12-05T11:07:12.585Z",
"endTime": "2022-12-05T11:07:12.585Z"
},
"collectionElements": [
{
"references": [
{
"event": {
"metadata": {
"eventTimestamp": "2022-12-05T11:07:12.585Z",
"eventType": "PROCESS_LAUNCH",
"ingestedTimestamp": "2022-12-05T11:06:27.737408Z",
"id": "AAAAA"
},
"principal": {
"hostname": "admin-1",
"process": {
"pid": "12345",
"command_line": "\"powershell.exe\" {wmic /node:127.0.0.1 process call create \\\"\"rundll32.exe $env:TEMP\\calc.dll StartW\\\"\"}"
}
}
"src": {
"file": {
full_path: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\"
}
}
"target": {
"process": {
"pid": "12345",
"file": {
"sha256": "abcde",
"full_path": "C:\\Windows\\System32\\wbem\\WMIC.exe"
}
command_line: "\"C:\\Windows\\System32\\Wbem\\WMIC.exe\" /node:127.0.0.1 process call create \"rundll32.exe C:\\Users\\ADMIN-1\\AppData\\Local\\Temp\\calc.dll StartW\""
}
}
}
}
],
"label": "e"
}
],
"detectionTime": "2022-12-05T11:07:12.585Z",
"tags": [
"TA0004",
"T1548"
]
},
{
"type": "GCTI_FINDING",
"detection": [
{
"ruleName": "Cobalt Strike Default Entrypoint",
"summary": "Rule Detection",
"description": "Identifies CobaltStrike rundll32 execution using the default entrypoint.",
"severity": "LOW",
"urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?ruleId=ur_mal_CobaltStrike_StartW&selectedList=RuleDetectionsViewTimeline&ruleSource=ruleSet&selectedParentDetectionId=de_c34ee707-ad5e-4e5e-4955-a3a8e13053ae&selectedTimestamp=2022-12-05T10:04:28.097Z",
"ruleId": "ur_mal_CobaltStrike_StartW",
"alertState": "ALERTING",
"ruleType": "SINGLE_EVENT",
"ruleLabels": [
{
"key": "rule_name",
"value": "Cobalt Strike Default Entrypoint"
}
],
"ruleSet": "6e6eda02-51b9-e57e-9597-622f1c7f3ee9",
"ruleSetDisplayName": "RAT"
}
],
"createdTime": "2022-12-05T11:12:24.406199Z",
"lastUpdatedTime": "2022-12-05T11:12:24.406199Z",
"id": "de_c34ee707-ad5e-4e5e-4955-a3a8e13053ae",
"timeWindow": {
"startTime": "2022-12-05T10:04:28.097Z",
"endTime": "2022-12-05T10:04:28.097Z"
},
"collectionElements": [
{
"references": [
{
"event": {
"metadata": {
"eventTimestamp": "2022-12-05T10:04:28.097Z",
"eventType": "PROCESS_LAUNCH",
"ingestedTimestamp": "2022-12-05T10:04:01Z",
"id": "BBBBB"
},
"principal": {
"hostname": "admin-2",
"process": {
"pid": "67890",
"command_line": "\"powershell.exe\" {wmic /node:127.0.0.1 process call create \\\"\"rundll32.exe $env:TEMP\\calc.dll StartW\\\"\"}"
}
}
"src": {
"file": {
full_path: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\"
}
}
"target": {
"process": {
"pid": "67890",
"file": {
"sha256": "abcde",
"full_path": "C:\\Windows\\System32\\wbem\\WMIC.exe"
}
command_line: "\"C:\\Windows\\System32\\Wbem\\WMIC.exe\" /node:127.0.0.1 process call create \"rundll32.exe C:\\Users\\ADMIN-2\\AppData\\Local\\Temp\\calc.dll StartW\""
}
}
}
}
],
"label": "e"
}
],
"detectionTime": "2022-12-05T10:04:28.097Z",
"tags": [
"TA0004",
"T1548"
]
}
],
"nextPageToken": "CgwIrdncnQYQ6OqRkwISCwiosvKXBhDQ-74JGidkZV8wNDZjZmY0YS1jM2ZkLTM5YWEtYmUyYS0wZTU2Zjk4OWE1YTE="
}
ListDetections
Return the detections for the specified version of a rule, the latest version
of a rule, all versions of a rule, or all versions of all rules.
Note: ListDetections uses the GET method.
Request
Detections for the latest version of a rule with a given rule identifier:
GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}/detections
Detections for a specific version of a rule with a given version identifier:
GET https://backstory.googleapis.com/v2/detect/rules/{versionId}/detections
Detections for the all versions of a rule with a given rule identifier:
GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}@-/detections
Detections for all versions of all rules:
GET https://backstory.googleapis.com/v2/detect/rules/-/detections
URL parameters
Parameter Name
Type
Required
Description
alert_state
enum
Optional
Filter detections on if they are "ALERTING" or "NOT_ALERTING"
detection_start_time (deprecated)
string
Optional
Time to begin returning detections, filtering on a detection's "detectionTime". If
not specified, the start time is treated as open-ended.
detection_end_time (deprecated)
string
Optional
Time to stop returning detections, filtering on a detection's "detectionTime". If
not specified, the end time is treated as open-ended.
start_time
string
Optional
Time to begin returning detections, filtering by the detection field specified in the listBasis parameter. If not specified, the start time is treated as open-ended.
end_time
string
Optional
Time to stop returning detections, filtering by the detection field specified by the listBasis parameter. If not specified, the end time is treated as open-ended.
list_basis
enum
Optional
Sort detections by "DETECTION_TIME" or by "CREATED_TIME". If not specified, it defaults to "DETECTION_TIME". Detections are returned in descending order of the timestamp.
page_size
integer
Optional
Specify the maximum number of detections to return (range is 1 through 1,000). The default is 100.
page_token
string
Optional
Use to retrieve another page of detections.
ruleId
string
One of ruleId or versionId
Unique identifier for a rule, defined and returned by the server. You can specify exactly one rule identifier. Use the following format to specify the rule: ru_{UUID}
versionId
string
One of ruleId or versionId
Unique identifier for a specific version of a rule, defined and returned by the server. You
can specify exactly one version identifier. Use the following format to specify the rule: {ruleId}@v_{int64}_{int64}
include_simulated_detections
bool
Optional
If true, returns simulated detections in addition to regular detections. If not specified, simulated detections are omitted.
Sample request (specific version of a rule)
https://backstory.googleapis.com/v2/detect/rules/ru_1f54ab4b-e523-48f7-ae25-
271b5ea8337d@v_1602631093_146879000/detections?page_size=2
Sample request (latest version of a rule)
https://backstory.googleapis.com/v2/detect/rules/ru_1f54ab4b-e523-48f7-ae25-
271b5ea8337d/detections?page_size=2
Sample request (all versions of a rule)
https://backstory.googleapis.com/v2/detect/rules/ru_1f54ab4b-e523-48f7-ae25-
271b5ea8337d@-/detections?page_size=100
Sample request (all versions of all rules, ordered by CreateTimestamp)
https://backstory.googleapis.com/v2/detect/rules/-/detections?
page_size=100&list_basis=CREATED_TIME
Response
Response fields
Field Name
Type
detections
array
Array of detections in the same format defined for GetDetection .
nextPageToken
string
Page token. Use for the next call to view the next page of detections. Does not appear on
the last page of detections.
Sample Response
{
"detections": [
{
"type": "RULE_DETECTION",
"detection": [
{
"ruleName": "singleEventRule2",
"description": "description of this rule",
"urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?
ruleId=ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline&
selectedParentDetectionId=de_69d1ff3c-3528-6171-fb48-28ee813ec3ec&
selectedTimestamp=2020-12-03T16:59:55.124243Z",
"ruleId": "ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d",
"ruleVersion": "ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d@v_1605892822_687503000",
"alertState": "NOT_ALERTING",
"ruleType": "SINGLE_EVENT"
"ruleLabels": [
{
"key": "description",
"value": "description of this rule"
}
],
}
],
"createdTime": "2020-12-03T19:19:19.720174Z",
"id": "de_69d1ff3c-3528-6171-fb48-28ee813ec3ec",
"timeWindow": {
"startTime": "2020-12-03T16:59:55.124243Z",
"endTime": "2020-12-03T16:59:55.124243Z"
},
"collectionElements": [
{
"references": [
{
"event": {
"metadata": {
"eventTimestamp": "2020-12-03T16:59:55.124243Z",
"collectedTimestamp": "2020-12-03T16:59:55.126201345Z",
"eventType": "NETWORK_DNS",
"productName": "ProductName",
"ingestedTimestamp": "2020-12-03T16:59:59.011915Z"
},
"principal": {
"ip": [
"10.0.123.15"
]
},
"target": {
"ip": [
"10.0.10.10"
]
},
"securityResult": [
{
"action": [
"UNKNOWN_ACTION"
]
}
],
"network": {
"applicationProtocol": "DNS",
"dns": {
"questions": [
{
"name": "altostrat.com",
"type": 1,
"class": 1
}
],
"id": 12345,
"recursionDesired": true
}
}
}
}
],
"label": "e"
}
],
"detectionTime": "2020-12-03T16:59:55.124243Z"
},
{
"type": "RULE_DETECTION",
"detection": [
{
"ruleName": "singleEventRule2",
"description": "description of this rule",
"urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?
ruleId=ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline&
selectedParentDetectionId=de_ec2bc52b-a522-aeaf-6a94-f7c7ce0eff15&
selectedTimestamp=2020-12-03T16:59:48.916995Z",
"ruleId": "ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d",
"ruleVersion": "ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d@v_1605892822_687503000",
"alertState": "NOT_ALERTING",
"ruleType": "SINGLE_EVENT"
"ruleLabels": [
{
"key": "description",
"value": "description of this rule"
}
],
}
],
"createdTime": "2020-12-03T19:19:19.720174Z",
"id": "de_ec2bc52b-a522-aeaf-6a94-f7c7ce0eff15",
"timeWindow": {
"startTime": "2020-12-03T16:59:48.916995Z",
"endTime": "2020-12-03T16:59:48.916995Z"
},
"collectionElements": [
{
"references": [
{
"event": {
"metadata": {
"eventTimestamp": "2020-12-03T16:59:48.916995Z",
"collectedTimestamp": "2020-12-03T16:59:48.918238257Z",
"eventType": "NETWORK_DNS",
"productName": "ProductName",
"ingestedTimestamp": "2020-12-03T16:59:59.011915Z"
},
"principal": {
"ip": [
"127.0.0.1"
]
},
"target": {
"ip": [
"127.0.0.1"
]
},
"securityResult": [
{
"action": [
"UNKNOWN_ACTION"
]
}
],
"network": {
"applicationProtocol": "DNS",
"dns": {
"questions": [
{
"name": "altostrat.com",
"type": 1,
"class": 1
}
],
"id": 12346,
"recursionDesired": true
}
}
}
}
],
"label": "e"
}
],
"detectionTime": "2020-12-03T16:59:48.916995Z"
}
],
"nextPageToken": "CgsIkdvj_gUQ2M2IXBIMCISzpP4FELj3oLUDGidkZV9lYzJiYzUyYi1hNTIyLWFlYWYtNmE5NC1mN2M3Y2UwZWZmMTU="
}
ListErrors
List the latest rule errors.
Note: ListErrors uses the GET method.
Request
GET https://backstory.googleapis.com/v2/health/errors
URL parameters
Parameter Name
Type
Required
Description
page_size
integer
Optional
Specify the maximum number of errors to return (range is 1 through 1,000). The default is 100.
rule_filter.version_id
string
Optional
Specify the unique identifier for a specific version of a rule, defined and returned by the server.
Returned in the following format: {rule_id}@v_{int64}_{int64} .
start_time
string
Optional
Specify the start time for when to view error messages, filtering on "errorTime".
If not specified, the start time is treated as open-ended.
end_time
string
Optional
Specify the end time for when to view error messages, filtering on "errorTime". If not specified, the end time is treated as open-ended.
Sample request
https://backstory.googleapis.com/v2/health/errors?pageSize=2&ruleFilter.versionId=
ru_d27d2fdc-010a-417a-a773-7f886b3d08c7@v_1597880575_633631000&start_time=2020-10-31T00:00:00.00Z&end_time=
2020-11-01T00:00:00.0000Z
Response
Response fields
Field Name
Type
errors
array
Array of errors in the same format defined for GetError .
nextPageToken
string
Page token. Use for the next call to view the next page of errors. Does not appear on
the last page of errors.
Sample response
{
"errors": [
{
"errorId": "ed_8c07d6d7-4b94-adbb-cc86-f9114e63b53e",
"category": "RULES_EXECUTION_ERROR",
"text": "rule needs to be updated: validating rule: variable email_reply_to used in both condition
section and match section, should only be used in one",
"errorTime": "2020-10-31T23:17:53.983116Z",
"ruleExecution": {
"windowStartTime": "2020-10-31T22:00:00Z",
"windowEndTime": "2020-10-31T23:00:00Z",
"ruleId": "ru_d27d2fdc-010a-417a-a773-7f886b3d08c7",
"versionId": "ru_d27d2fdc-010a-417a-a773-7f886b3d08c7@v_1597880575_633631000"
}
},
{
"errorId": "ed_77d0e45f-5b68-065a-ac0f-d7c12158c978",
"category": "RULES_EXECUTION_ERROR",
"text": "rule needs to be updated: validating rule: variable email_reply_to used in both condition section
and match section, should only be used in one",
"errorTime": "2020-10-31T22:17:49.314016Z",
"ruleExecution": {
"windowStartTime": "2020-10-31T21:00:00Z",
"windowEndTime": "2020-10-31T22:00:00Z",
"ruleId": "ru_d27d2fdc-010a-417a-a773-7f886b3d08c7",
"versionId": "ru_d27d2fdc-010a-417a-a773-7f886b3d08c7@v_1597880575_633631000"
}
}
],
"nextPageToken": "CgwIjcX3_AUQgILelQESJ2VkXzc3ZDBlNDVmLTViNjgtMDY1YS1hYzBmLWQ3YzEyMTU4Yzk3OA=="
}
ListRetrohunts
Listing the retrohunts for a rule.
Note: ListRetrohunts uses the GET method. Note: You can specify a rule identifier or a version identifier, but not both.
Request
Listing retrohunts for the latest version of a rule:
GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}/retrohunts/
Listing retrohunts for a specific version of a rule:
GET https://backstory.googleapis.com/v2/detect/rules/{versionId}/retrohunts/
Listing retrohunts for all versions of a rule:
GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}@-/retrohunts/
Listing retrohunts for all versions of all rules:
GET https://backstory.googleapis.com/v2/detect/rules/-/retrohunts/
URL parameters
Parameter Name
Type
Required
Description
page_size
integer
Optional
Specify the maximum number of retrohunts to return (range is 1 through 1,000). The default is 100.
page_token
string
Optional
Page token received from a previous call. Use to retrieve the next page.
state
enum
Optional
Filter retrohunts based on whether they are:
RUNNING
DONE
CANCELLED
ruleId
string
One of ruleId or versionId
Unique identifier for a rule, defined and returned by the server. You can specify exactly one rule identifier.
Use the following format to specify the rule: ru_{UUID}
versionId
string
One of ruleId or versionId
Unique identifier for a specific version of a rule, defined and returned by the server. You can specify exactly one version identifier.
Use the following format to specify the rule: {ruleId}@v_{int64}_{int64}
Sample request (all versions of all rules)
https://backstory.googleapis.com/v2/detect/rules/-/retrohunts?page_size=10&page_token=abc&state=DONE
Response
Response fields
Field Name
Type
retrohunts
array
Array of retrohunts in the same format defined for GetRetrohunt .
nextPageToken
string
Page token. Use for the next call to view the next page of retrohunts. Does not appear on
the last page of retrohunts.
Sample response (all versions of all rules)
{
"retrohunts": [
{
"retrohuntId": "oh_fdb84ab6-4cf4-4b67-b4c3-cd3957466109",
"ruleId": "ru_68f627ca-debb-4a66-843f-73ee6daa0cb8",
"versionId": "ru_68f627ca-debb-4a66-843f-73ee6daa0cb8@v_1612760951_992879000",
"eventStartTime": "2021-02-01T23:00:00Z",
"eventEndTime": "2021-02-05T23:00:00Z",
"retrohuntStartTime": "2021-02-08T05:09:54.205127Z",
"retrohuntEndTime": "2021-02-08T05:11:24.652436Z",
"state": "DONE",
"progressPercentage": 100
},
{
"retrohuntId": "oh_1d5c21db-b103-470a-9b19-d2dd63b1b6d4",
"ruleId": "ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497",
"versionId": "ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497@v_1612760147_997855000",
"eventStartTime": "2021-02-01T00:00:00Z",
"eventEndTime": "2021-02-05T23:00:00Z",
"retrohuntStartTime": "2021-02-08T04:57:22.006365Z",
"retrohuntEndTime": "2021-02-08T04:57:44.658049Z",
"state": "DONE",
"progressPercentage": 100
},
{
"retrohuntId": "oh_d928fe45-6e81-4195-8373-19c43c448f90",
"ruleId": "ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497",
"versionId": "ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497@v_1612472807_179679000",
"eventStartTime": "2020-10-11T00:00:00Z",
"eventEndTime": "2021-02-05T23:00:00Z",
"retrohuntStartTime": "2021-02-08T04:13:32.105735Z",
"retrohuntEndTime": "2021-02-08T04:18:04.581268Z",
"state": "DONE",
"progressPercentage": 100
}
]
}
ListRules
List the latest versions of all rules.
Note: ListRules uses the GET method.
Request
GET https://backstory.googleapis.com/v2/detect/rules
URL parameters
Parameter Name
Type
Required
Description
page_size
integer
Optional
Specify the maximum number of rules to return (range is 1 through 1,000). The default is 100.
page_token
string
Optional
Page token received from a previous call. Use to retrieve the next page.
state
enum
Optional
List rules based on their state: ACTIVE, ARCHIVED or ALL. Default is ACTIVE.
Sample request
The following sample request gets the latest version of all of the rules listed with their rule identifiers:
https://backstory.googleapis.com/v2/detect/rules?page_size=10&page_token=abc
Response
Response fields
Field Name
Type
rules
array
Array of rules using the same format defined for GetRule .
nextPageToken
string
Page token. Can be provided to the next call to view the next page of rules. Does not appear
if this is the last page of rules.
Sample response
{
"rules": [
{
"ruleId": "ru_e6abfcb5-1b85-41b0-b64c-695b3250436f",
"versionId": "ru_e6abfcb5-1b85-41b0-b64c-695b3250436f@v_1602631093_146879000",
"ruleName": "SampleRule",
"metadata": {
"description": "Sample Description of the latest version of the Rule",
"author": "author@example.com"
},
"ruleText": "rule SampleRule {
// Multi event rule to detect logins from a single user for
// multiple cities within a 5 minute window.
meta:
description = \"Sample Description of the latest version of the Rule\"
author = \"author@example.com\"
events:
$e.metadata.event_type = \"USER_LOGIN\"
$e.principal.user.userid = $user
$e.principal.location.city = $city
match:
$user over 5m
condition:
#city > 1
} ",
"liveRuleEnabled": true,
"versionCreateTime": "2020-10-13T23:18:13.146879Z",
"compilationState": "SUCCEEDED",
"ruleType": "MULTI_EVENT",
"lastAlertStatusChangeTime": "2020-10-13T23:18:13.146879Z"
"inputsUsed": {
"usesUdm": "true",
},
},
{
"ruleId": "ru_1971c2ac-8d5b-41aa-bb30-f95d220e9439",
"versionId": "ru_1971c2ac-8d5b-41aa-bb30-f95d220e9439@v_1598398482_260223000",
"ruleName": "SampleRule2",
"metadata": {
"description": "Sample Description of the latest version of the Rule",
"author": "author2@example.com"
},
"ruleText": "rule SampleRule2 {
meta:
description = \"Sample Description of the latest version of the Rule\"
author = \"author2@example.com\"
events:
// Single event rule to generate detections for network events involving example.com
$event.network.dns.questions.name = \"example.com\"
condition:
$event
} ",
"versionCreateTime": "2020-08-25T23:34:42.260223Z",
"compilationState": "SUCCEEDED",
"ruleType": "SINGLE_EVENT",
"lastAlertStatusChangeTime": "2020-08-25T23:34:42.260223Z"
"inputsUsed": {
"usesUdm": "true",
},
}
]
}
ListRuleVersions
List all versions of a specific rule. The versions are listed in descending order by the rule version creation time.
Note: ListRuleVersions uses the GET method.
Request
GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}:listVersions
URL parameters
Parameter Name
Type
Required
Description
ruleId
string
Required
Unique identifier for a rule, defined and returned by the server.
Use the following format to specify the rule:
ru_{UUID}
page_size
integer
Optional
Specify the maximum number of versions to return (range is 1 through 1,000). The default is 100.
page_token
string
Optional
Page token received from a previous call. Use this to retrieve the next page.
Sample request
Getting all versions of the rule with the specified rule identifier:
https://backstory.googleapis.com/v2/detect/rules/ru_e6abfcb5-1b85-41b0-b64c-695b3250436f?
page_size=10&page_token=abc
Response
Response fields
Field Name
Type
rules
array
Array of rules in the same format defined for GetRule .
nextPageToken
string
Page token. Use for the next call to view the next page of rule versions. Does not appear on
the last page of rules.
Sample response
{
"rules": [
{
"ruleId": "ru_e6abfcb5-1b85-41b0-b64c-695b3250436f",
"versionId": "ru_e6abfcb5-1b85-41b0-b64c-695b3250436f@v_1602631093_146879000",
"ruleName": "SampleRule",
"metadata": {
"description": "Sample Description of the latest version of the Rule",
"author": "author@example.com"
},
"ruleText": "rule SampleRule {
// Multi event rule to detect logins from a single user for
// multiple cities within a 5 minute window.
meta:
description = \"Sample Description of the latest version of the Rule\"
author = \"author@example.com\"
events:
$e.metadata.event_type = \"USER_LOGIN\"
$e.principal.user.userid = $user
$e.principal.location.city = $city
match:
$user over 5m
condition:
#city > 1
} ",
"liveRuleEnabled": true,
"versionCreateTime": "2020-10-13T23:18:13.146879Z",
"compilationState": "SUCCEEDED",
"ruleType": "MULTI_EVENT",
"lastAlertStatusChangeTime": "2020-10-13T23:18:13.146879Z",
"inputsUsed": {
"usesUdm": "true",
},
},
{
"ruleId": "ru_e6abfcb5-1b85-41b0-b64c-695b3250436f",
"versionId": "ru_e6abfcb5-1b85-41b0-b64c-695b3250436f@v_1602519130_121984000",
"ruleName": "SampleRule",
"metadata": {
"description": "Sample Description of an older version of the Rule",
"author": "author@example.com"
},
"ruleText": "rule SampleRule {
meta:
description = \"Sample Description of an older version of the Rule\"
author = \"author@example.com\"
events:
// Single event rule that will generate lots of detections related to DNS events
$event.metadata.event_type = \"NETWORK_DNS\"
condition:
$event
} ",
"versionCreateTime": "2020-10-12T16:12:10.121984Z",
"compilationState": "SUCCEEDED",
"ruleType": "SINGLE_EVENT",
"lastAlertStatusChangeTime": "2020-10-12T16:12:10.121984Z",
"inputsUsed": {
"usesUdm": "true",
},
}
]
}
RunRetrohunt
Initiate a retrohunt for the specified rule.
Note: RunRetrohunt uses the POST method.
Request
POST https://backstory.googleapis.com/v2/detect/rules/{ruleId}:runRetrohunt
URL parameters
Parameter Name
Type
Required
Description
ruleId
string
One of ruleId and versionId
Unique identifier for a rule, defined and returned by the server. You must specify exactly one rule identifier.
Use the following format to specify the rule:
ru_{UUID}
Request body
{
"startTime": "<startTime here>"
"endTime": <endTime here>"
}
Body parameters
Parameter Name
Type
Required
Description
startTime
string
Required
Start time for the time range of logs being processed, in RFC 3339 format.
endTime
string
Required
End time for the time range of logs being processed, in RFC 3339 format.
Sample request
https://backstory.googleapis.com/v2/detect/rules/ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497:runRetrohunt
{
"startTime": "2021-01-14T23:00:00Z",
"endTime": "2021-01-30T23:00:00Z"
}
Response
Response fields
Same response format of GetRetrohunt .
Sample response
{
"retrohuntId": "oh_d738c8ea-8fd7-4cc1-b43d-25835b8e1785",
"ruleId": "ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497",
"versionId": "ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497@v_1612472807_179679000",
"eventStartTime": "2021-01-14T23:00:00Z",
"eventEndTime": "2021-01-30T23:00:00Z",
"retrohuntStartTime": "2021-02-08T02:40:59.192113Z",
"state": "RUNNING"
}
StreamDetectionAlerts
Continuously receive Detection Engine results over an HTTP stream as the detections are discovered.
The StreamDetectionAlerts API returns detections created by both user-created rules
and Google SecOps Rules. It only returns the detections created by rules whose alerting
status was enabled at the time of detection. Enable alerting using the
Google SecOps UI by setting the Alerting option to enabled. For user-created
rules, use the Rules Dashboard to enable each rule's alerting status.
Set the Alert status to enabled from the Rules Dashboard for user-created rules
For Google SecOps Rules, enable alerting status of the Rule Set to get detections
created by corresponding rules.
Set the Alert status to Enabled for the rule sets.
Note: StreamDetectionAlerts uses the POST method. Note: You are limited to a maximum of 10 simultaneous HTTP streams (your HTTP
client receives a 429 error if you attempt to open more). The maximum
detections count is 10,000. Note: The StreamDetectionAlerts method doesn't support pagination to fetch
detections in custom batch sizes. For pagination, use the legacy query parameters
pageStartTime and detectionBatchSize in the Backstory API (v2).
Request
POST https://backstory.googleapis.com/v2/detect/rules:streamDetectionAlerts
Request body
{
"continuationTime": "<continuationTime here>"
}
Body parameters
Parameter Name
Type
Required
Description
continuationTime
string
Optional
Timestamp in RFC 3339 format used to
request all detections after the specified time. If omitted, all detections after the current
time are transmitted.
If a continuationTime greater than 168h0m0s is passed, then the API returns an HTTP 400 error.
include_simulated_detections
bool
Optional
If true, returns simulated detections in addition to regular detections. If not specified, simulated detections are omitted.
Sample request
https://backstory.googleapis.com/v2/detect/rules:streamDetectionAlerts
{
"continuationTime": "2020-09-15T21:59:17.081331Z"
}
Response
Response fields
Field Name
Type
continuationTime
string
Timestamp in RFC 3339 format. This value can be used in a request to stream next batch of detections.
heartbeat
bool
Always set to `true`. It ensure the connection does not time out and should be ignored.
detections
array
Array of detections in the following format .
Detection fields
type
string
Type of detection (`RULE_DETECTION` or `GCTI_FINDING`).
detection.ruleName
string
Name of the rule generating the detection.
detection.ruleId
string
Identifier for the rule generating the detection.
detection.ruleVersion
string
Identifier for the rule version generating the detection. Only populated for `RULE_DETECTION` type detections.
detection.alertState
string
Indicates whether the rule generating this detection currently has alerting enabled or disabled.
detection.ruleType
string
Whether the rule generating this detection is a single event or multi-event rule
("SINGLE_EVENT" or "MULTI_EVENT").
detection.urlBackToProduct
string
URL pointing to the Google SecOps application page for this detection.
detection.detectionFields
list
List of fields matching the rules requested match variables, for "MULTI_EVENT" rules.
detection.detectionFields.key
string
Key for a field specified in the rule, for "MULTI_EVENT" rules.
detection.detectionFields.value
string
Value for a field specified in the rule, for "MULTI_EVENT" rules.
detection.ruleLabels
list
List of fields specified in rule metadata.
detection.ruleLabels.key
string
Key for a field specified in the rule metadata.
detection.ruleLabels.value
string
Value for a field specified in the rule metadata.
detection.summary
string
Summary for the generated detection. Only populated for `GCTI_FINDING` type detections.
detection.ruleSet
string
Identifier of the Google SecOps Rule Set that generated this detection. Only populated for `GCTI_FINDING` type detections.
detection.ruleSetDisplayName
string
Display name of the Google SecOps Rule Set that generated this detection. Only populated for `GCTI_FINDING` type detections.
detection.description
string
Description of the rule that generated the detection. Always populated for `GCTI_FINDING` detections. If type is `RULE_DETECTION`, this description is copied from the rule metadata's `description` key, if it is set.
detection.severity
string
Severity of the detection ("INFORMATIONAL" or "LOW" or "HIGH"). Only populated for `GCTI_FINDING` type detections.
createdTime
string
Time the detection was created.
detectionTime
string
String representing the time period the detection was found in.
id
string
Identifier for the detection.
timeWindow.startTime
string
String representing the start of the time window in which the detection was found, in RFC 3339 format.
timeWindow.endTime
string
String representing the end of the time window in which the detection was found, in RFC 3339 format.
collectionElements
list
A list of references to sample UDM events causing this detection, grouped by variable.
collectionElements.label
string
The variable a given set of UDM events belongs to.
collectionElements.references
list
A list of references to sample UDM events, grouped by the given label.
collectionElements.references.event
UDM
A UDM event.
lastUpdatedTime
string
Time the detection was last updated. Only populated for `GCTI_FINDING` type detections.
tags
list
A list of MITRE tactic and technique IDs covered by the rule. Only populated for `GCTI_FINDING` type detections.
Response
Sample Heartbeat Response (can be ignored by clients)
{
"heartbeat": true
}
Sample Response (without detections list)
{
"continuationTime": "2019-04-15T21:59:17.081331Z"
}
Sample Response (with detections list including detections from both user-created
rules and Google SecOps Rules)
{
"continuationTime": "2019-05-29T05:00:04.123073Z",
"detections": [
{
"type": "RULE_DETECTION",
"detection": [
{
"ruleName": "singleEventRule2",
"urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections?
ruleId=ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d&selectedList=RuleDetectionsViewTimeline&
selectedParentDetectionId=de_ce594791-09ed-9681-27fa-3b7c8fa6054c&
selectedTimestamp=2020-12-03T16:50:47.647245Z",
"ruleId": "ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d",
"ruleVersion": "ru_1f54ab4b-e523-48f7-ae25-271b5ea8337d@v_1605892822_687503000",
"alertState": "ALERTING",
"ruleType": "SINGLE_EVENT"
}
],
"createdTime": "2020-12-03T19:19:21.325134Z",
"id": "de_ce594791-09ed-9681-27fa-3b7c8fa6054c",
"timeWindow": {
"startTime": "2020-12-03T16:50:47.647245Z",
"endTime": "2020-12-03T16:50:47.647245Z"
},
"collectionElements": [
{
"references": [
{
"event": {
"metadata": {
"eventTimestamp": "2020-12-03T16:50:47.647245Z",
"collectedTimestamp": "2020-12-03T16:50:47.666064010Z",
"eventType": "NETWORK_DNS",
"productName": "ProductName",
"ingestedTimestamp": "2020-12-03T16:50:49.494542Z"
},
"principal": {
"ip": [
"127.0.0.1"
]
},
"target": {
"ip": [
"127.0.0.1"
]
},
"securityResult": [
{
"action": [
"UNKNOWN_ACTION"
]
}
],
"network": {
"applicationProtocol": "DNS",
"dns": {
"questions": [
{
"name": "altostrat.com",
"type": 1,
"class": 1
}
],
"id": 12345,
"recursionDesired": true
}
}
}
}
],
"label": "e"
}
],
"detectionTime": "2020-12-03T16:50:47.647245Z"
},
{
"type": "GCTI_FINDING",
"detection": [
{
"ruleName": "Google Cloud Global SSH Keys",
"urlBackToProduct": "https://customername.backstory.chronicle.security/ruleDetections
?ruleId=ur_ttp_GCP__GlobalSSHKeys_Added&selectedList=RuleDetectionsViewTimeline
&ruleSource=ruleSet&selectedParentDetectionId=de_8e47ff9c-9bc4-df7c-1782-53ddf14c9b6c
&selectedTimestamp=2020-12-03T16:50:47.647245Z",
"ruleId": "ur_ttp_GCP__GlobalSSHKeys_Added",
"alertState": "ALERTING",
"ruleType": "SINGLE_EVENT",
"summary": "Rule Detection",
"ruleSet": "11c505d4-b424-65e3-d918-1a81232cc76b",
"ruleSetDisplayName": "Admin Action",
"description": "Identifies instances of project-wide SSH keys being
added where there were previously none.",
"severity": "LOW"
}
],
"createdTime": "2020-12-03T19:19:21.325134Z",
"id": "de_ce594791-09ed-9681-27fa-3b7c8fa6054c",
"timeWindow": {
"startTime": "2020-12-03T16:50:47.647245Z",
"endTime": "2020-12-03T16:50:47.647245Z"
},
"collectionElements": [
{
"references": [
{
"event": {
"metadata": {
"eventTimestamp": "2020-12-03T16:50:47.647245Z",
"collectedTimestamp": "2020-12-03T16:50:47.666064010Z",
"eventType": "NETWORK_DNS",
"productName": "ProductName",
"ingestedTimestamp": "2020-12-03T16:50:49.494542Z"
},
"principal": {
"ip": [
"127.0.0.1"
]
},
"target": {
"ip": [
"127.0.0.1"
]
},
"securityResult": [
{
"action": [
"UNKNOWN_ACTION"
]
}
],
"network": {
"applicationProtocol": "DNS",
"dns": {
"questions": [
{
"name": "altostrat.com",
"type": 1,
"class": 1
}
],
"id": 12345,
"recursionDesired": true
}
}
}
}
],
"label": "e"
}
],
"detectionTime": "2020-12-03T16:50:47.647245Z",
"lastUpdatedTime": "2020-12-03T19:19:21.325134Z",
"tags": ["TA0003", "TA0004"]
},
... ]
}
Detections are returned in the same format defined for GetDetection .
Sample code
Sample code for the StreamDetectionAlerts API method is available on GitHub
Client development for StreamDetectionAlerts
When developing your client, be aware of the following:
Activate the HTTP stream connection by sending a POST request. Use a library that can incrementally receive information from an HTTP stream (for example, use Python's requests library to make a POST request with stream=True ).
The HTTP response uses chunked transfer encoding as described in RFC 2616 .
Your client must maintain a persistent HTTP connection.
Use a library which can handle reassembling the chunks into a stream of bytes.
If you use a library which supports streaming, you can view the
stream response from Google SecOps as a stream of bytes that
represent a continuous JSON array (for example,
[{"key1": "value1"},{"key2": "value2"}, {"key3": "value3"}, ...]
For this code sample, one element of the JSON array is referred to as a "detection batch".
For example, {"key1": "value1"} is one element of the JSON array shown above.
The client might not receive the closing bracket ( ] ) from the JSON array.
\r\n is sent in between batches (this could be used for parsing).
If they exist in the UDM data, actual \r or \n characters are escaped as \\r and \\n respectively.
If you treat each batch as a JSON object, you can use your language's JSON package to deserialize it into a Python dictionary (or a golang map, if using golang).
Interpreting results
Use the following as guidelines when interpreting the results returned by StreamDetectionAlerts:
If the client receives a 503 error (perhaps due to server maintenance), it should simply reconnect with exponential backoff.
The server sends heartbeat messages about every 15 seconds; a heartbeat message contains the key "heartbeat", which will be set to true. These heartbeats from the server ensure the connection does not time out and should be ignored.
Standard results include a key continuationTime (in RFC 3339 format) and, optionally, include key detections whose value is a list of dictionaries containing detections from user-created and Google SecOps rules.
Detections are not sorted in any particular order.
Specifying the continuationTime parameter
Be aware of the following when specifying the continuationTime parameter:
Your client should store the most recent continuationTime received from the stream connection (it is also the maximum continuationTime received).
When reconnecting, provide the most recent continuationTime to obtain results starting from the last time the client disconnected. This prevents the client from missing any detections.
Specify a continuationTime of no more than one week ago, otherwise the connection is rejected with a 400 error. Specifying a future continuationTime also returns a 400 error.
StreamTestRule
Test a rule over a specified time range. Return any errors and any detections up to the specified maximum without persistence (detections are not retained).
Note: StreamTestRule uses the POST method.
Request
POST https://backstory.googleapis.com/v2/detect/rules:streamTestRule
Request body
{
"rule": {
"ruleText": "<ruleText here>"
},
"startTime": "<startTime here>",
"endTime": "<endTime here>",
"maxResults": "<maxResults here>",
}
Body parameters
Parameter Name
Value
Required
Description
rule.ruleText
string
Required
Text of the new rule in YARA-L 2.0 format.
startTime
string
Required
Start time for the time range of logs being processed, in RFC 3339 format.
endTime
string
Required
End time for the time range of logs being processed, in RFC 3339 format.
maxResults
integer
Optional
Maximum number of results to return. Specify a value between 1 and 10,000. The default is 1,000.
Sample request
https://backstory.googleapis.com/v2/detect/rules:streamTestRule
{
"rule": {
"ruleText": "<ruleText here>"
},
"startTime": "2021-01-01T00:00:00Z",
"endTime": "2021-01-14T00:00:00Z",
"maxResults": 2
}
Response
When using the StreamTestRule method, be aware of the following limitations:
Results either contain a detection { "detection": <detection> } or an error { "error": <error> } .
There is a five minute timeout. After five minutes, the method stops returning detections and errors.
The max_results parameter only limits the number of detections returned, not the number of errors.
Detections have the same format as those returned by the ListDetections and GetDetection methods, except that the following fields are not returned since the rule is not persisted by the test:
detection.ruleId
detection.ruleVersion
detection.alertState
detection.urlBackToProduct
createdTime
Errors have the same format as those returned by the ListErrors and GetError methods, except that the following fields are not returned since the rule is not persisted by the test:
errorId
errorTime
ruleExecution.ruleId
ruleExecution.ruleVersion
Sample response
[{
"error": {
"category": "RULES_EXECUTION_ERROR",
"ruleExecution": {
"windowStartTime": "2021-01-01T18:00:00Z",
"windowEndTime": "2021-01-01T20:00:00Z"
}
}
}
,
{
"detection": {
"type": "RULE_DETECTION",
"detection": [
{
"ruleName": "singleEventRule2",
"ruleType": "SINGLE_EVENT"
}
],
"id": "de_13503ebe-b96b-7b63-bb89-0e6d218628c9",
"timeWindow": {
"startTime": "2021-01-03T03:17:49.781746Z",
"endTime": "2021-01-03T03:17:49.781746Z"
},
"collectionElements": [
{
"references": [
{
"event": {
"metadata": {
"eventTimestamp": "2021-01-03T03:17:49.781746Z",
"collectedTimestamp": "2021-01-03T03:17:49.791689822Z",
"eventType": "NETWORK_DNS",
"productName": "DNS pcap",
"ingestedTimestamp": "2021-01-03T03:17:52.016198Z"
},
"principal": {
"ip": [
"127.0.0.1"
]
},
"target": {
"ip": [
"127.0.0.1"
]
},
"securityResult": [
{
"action": [
"UNKNOWN_ACTION"
]
}
],
"network": {
"applicationProtocol": "DNS",
"dns": {
"questions": [
{
"name": "altostrat.com",
"type": 1,
"class": 1
}
],
"id": 12345,
"recursionDesired": true,
}
}
}
}
],
"label": "e"
}
],
"detectionTime": "2021-01-01T03:17:49.781746Z"
}
}
]
UnarchiveRule
Unarchive the specified rule.
Note: UnarchiveRule uses the POST method.
Request
POST https://backstory.googleapis.com/v2/detect/rules/{ruleId}:unarchive
URL parameters
Parameter Name
Type
Required
Description
ruleId
string
Required
Unique rule identifier for the rule you want to unarchive.
Use the following format to specify the rule:
ru_{UUID}
Sample request
https://backstory.googleapis.com/v2/detect/rules/ru_e6abfcb5-1b85-41b0-b64c-695b3250436f:unarchive
Response
Returns an empty JSON with 200 OK, indicating the operation has completed successfully.
VerifyRule
Verifies that a rule is a valid YARA-L 2.0 rule without creating a new rule or
evaluating it over data.
Note: VerifyRule uses the POST method.
Request
POST https://backstory.googleapis.com/v2/detect/rules:verifyRule
Request body
{
"ruleText": "<ruleText here>"
}
Body parameters
Parameter Name
Type
Required
Description
ruleText
string
Required
Text of the new rule in YARA-L 2.0 format.
Sample request
https://backstory.googleapis.com/v2/detect/rules:verifyRule
{
"ruleText": "rule singleEventRule2 {
meta:
author = \"securityuser\"
description = \"single event rule that should generate detections\"
events:
$e.metadata.event_type = \"NETWORK_DNS\"
condition:
$e
}"
}
Response
Response fields
Field Name
Type
success
bool
True if the rule is a valid YL2 rule, false otherwise.
context
string
Contains the context of the success or failure of the verification. This field will contain the compilation error if the verification failed.
Sample response (valid YARA-L 2.0 rule)
{
"success": "true",
"context": "identified no known errors"
}
Sample response (invalid YARA-L 2.0 rule)
{
"context": "generic::invalid_argument invalid token line: 1-2, column: 3-4"
}
WaitRetrohunt
Enables you to determine whether or not a retrohunt currently in progress has completed within the time period specified. If the retrohunt completes within the time period, WaitRetrohunt returns the retrohunt data. Otherwise, it returns an error indicating that timeout has been reached without the retrohunt completing.
Note: WaitRetrohunt uses the POST method. Note: You can specify a rule identifier or a version identifier, but not both.
Request
Waiting for a retrohunt for the latest version of a rule to complete:
POST https://backstory.googleapis.com/v2/detect/rules/{ruleId}/retrohunts/{retrohuntId}:wait
Waiting for a retrohunt for a specific version of a rule to complete:
POST https://backstory.googleapis.com/v2/detect/rules/{versionId}/retrohunts/{retrohuntId}:wait
URL parameters
Parameter Name
Type
Required
Description
retrohuntId
string
Required
Unique identifier for a retrohunt, defined and returned by the server. You must specify exactly one retrohunt identifier.
ruleId
string
One of ruleId or versionId
Unique identifier for a rule, defined and returned by the server. You can specify exactly one rule identifier.
Use the following format to specify the rule: ru_{UUID}
versionId
string
One of ruleId or versionId
Unique identifier for a specific version of a rule, defined and returned by the server. You can specify exactly one version identifier.
Use the following format to specify the rule: {ruleId}@v_{int64}_{int64}
Request body
{
"timeout": "<timeout here>"
}
Body parameters
Parameter Name
Type
Required
Description
timeout
string
Optional
Time in seconds to wait for the retrohunt specified to complete. If timeout is not specified, the default is 5 minutes (300 seconds). The minimum timeout is 3 seconds and the maximum timeout is 5 minutes.
Sample request (specific version of rule)
https://backstory.googleapis.com/v2/detect/rules/ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497@v_1612472807_179679000/retrohunts/oh_95805380-2d44-4aab-9306-929789eba814:wait
{
"timeout": "30s",
}
Response
Response fields
Same response format of GetRetrohunt .
Sample response (specific version of rule - retrohunt done)
{
"retrohuntId": "oh_95805380-2d44-4aab-9306-929789eba814",
"ruleId": "ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497",
"versionId": "ru_30979d84-aa89-47d6-bf4d-b4bb0eacb497@v_1612472807_179679000",
"eventStartTime": "2021-01-01T23:00:00Z",
"eventEndTime": "2021-01-30T23:00:00Z",
"retrohuntStartTime": "2021-02-08T03:22:57.910122Z",
"retrohuntEndTime": "2021-02-08T03:23:44.510819Z",
"state": "DONE",
"progressPercentage": 100
}
Limitations
See the detailed list of the Backstory API query limits .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
