---
title: "Cloud Logging field definitions \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-assist/docs/cloud-logging-field-definitions
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/agent-assist/docs/custom-events
source_metadata:
  url: https://docs.cloud.google.com/agent-assist/docs/cloud-logging-field-definitions
  title: "Cloud Logging field definitions \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Agent Assist
Guides
Send feedback
Cloud Logging field definitions
Stay organized with collections
Save and categorize content based on your preferences.
After you enable Cloud Audit Logs, the Google Cloud console logging explorer records the contents of the following categories:
AuditLog proto
API-level log
Enable and view
Cloud Audit Logs allow you to view administrative activities and permissions within Google Cloud resources.
Enable logging
Follow these steps to enable the logs.
Navigate to the Google Cloud console, select IAM & Admin > Audit Logs .
Enter the Dialogflow API filter for Data access audit logs configuration , and select the following API types: Admin read , Data read , and Data write .
Note: To enable logging for either all or no methods in a category, you configure logging by data access type, not individual method.
View logs
You must acquire the project owner and private logs viewer IAM roles , then follow these steps to view the logs.
Navigate to the Google Cloud console, then select Logging > Logs Explorer .
Optional: In Logs Explorer, add a filter or adjust the timeline as preferred.
Select an entry to view details.
Note: Many fields in the request or response body are logged, but not all. Engineering annotates the RPC definition to indicate the fields to expose for logging. For example, the protoPayload filter exposes the JSON object with the audit log entry.
The logging proto
Each log entry will be an instance of the AuditLog proto , which contains the following fields:
Field Type
Field Name
string
service_name
string
method_name
string
resource_name
ResourceLocation
resource_location
current_locations
original_locations
google.protobuf.Struct
resource_original_state
int64
num_response_items
google.rpc.Status
status
AuthenticationInfo
authentication_info
principal_email
principal
authority_selector
third_party_principal
service_account_key_name
service_account_delegation_info
service_account_delegation_session_id
principal_subject
service_delegation_history
repeated AuthorizationInfo
authorization_info
authorization_logging_options
resource_attributes
admin_access_control_authorization_info
permission_type
ADMIN_READ
ADMIN_WRITE
DATA_READ
DATA_WRITE
impersonation_peer_borg_role
PolicyViolationInfo
policy_violation_info
repeated PolicyViolationInfo
policy_violations
RequestMetadata
request_metadata
caller_ip
caller_supplied_user_agent
caller_network
caller_location
caller_region_code
caller_internal_gce_vnid
caller_gce_network_project_number
caller_is_gce_client
request_attributes
destination_attributes
google.protobuf.Struct
request
google.protobuf.Struct
response
google.protobuf.Struct
metadata
bytes
audit_loggable_mint
bytes
loggable_ubermint
bytes
audit_loggable_service_control_token
Redaction
redactions
type
CLEARED
REPLACED
FAILED_TO_PROVIDE
NOT_REQUIRED
PARTIAL
field
reason
Depending on the enabled Cloud Audit Logs fields, the log explorer populates the API's request and response bodies into the request and response fields of the logging proto.
API-level logged fields
API
Logged field
AnalyzeContent
Request
participant
StreamingAnalyzeContent
Request
participant
Response
speech_model
CreateConversation
Request
parent
conversation
conversation_profile
Response
conversation_profile
lifecycle_state
name
start_time
CreateParticipant
Request
parent
participant
role
Response
name
role
SuggestConversationSummary
Request
conversation
Response
latest_message
answer_record
SearchKnowledge
Request
parent
conversation_profile
conversation
latest_message
Response
answer_record
SuggestKnowledgeAssist
Request
parent
latest_message
Response
latest_message
answer_record
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
