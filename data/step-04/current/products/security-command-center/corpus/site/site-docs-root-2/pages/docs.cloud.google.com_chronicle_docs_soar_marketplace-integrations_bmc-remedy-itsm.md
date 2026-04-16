---
title: "BMC Remedy ITSM \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/bmc-remedy-itsm
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/bmc-remedy-itsm
  title: "BMC Remedy ITSM \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
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
BMC Remedy ITSM
This document describes how to integrate BMC Remedy ITSM with
Google Security Operations.
Configure BMC Remedy ITSM integration in Google Security Operations
For detailed instructions on how to configure an integration in
Google SecOps, see Configure
integrations .
Integration parameters
Use the following parameters to configure the integration:
Parameter Display Name
Type
Default Value
Is Mandatory
Description
API Root
String
https://{IP}:{port}
Yes
API root of the BMC Remedy ITSM instance.
Username
String
N/A
No
BMC Remedy ITSM username.
Password
Password
N/A
No
BMC Remedy ITSM password.
Verify SSL
Checkbox
Checked
Yes
If enabled, verify that the SSL certificate for the connection to the BMC Remedy ITSM server is valid.
Note: You can make changes at a later stage if needed. Once configured, the
Instances can be used in Playbooks. For detailed information on configuring and
supporting multiple instances, see
Supporting multiple instances .
Use Cases
Perform triaging action (Update/Create/Delete Records)
Actions
Ping
Description
Test connectivity to the BMC Remedy ITSM with parameters provided at the
integration configuration page in the Google Security Operations Marketplace tab.
Run On
The action doesn't run on entities, nor has mandatory input parameters.
Action Results
Script Result
Script Result Name
Value Options
Example
is_success
True/False
is_success:False
Case Wall
Result type
Value/Description
Type (Entity \ General)
Output message*
The action should not fail nor stop a playbook execution:
If successful: "Successfully connected to the BMC Remedy ITSM server with the provided connection parameters!"
The action should fail and stop a playbook execution:
If not successful: "Failed to connect to the BMC Remedy ITSM server! Error is {0}".format(exception.stacktrace)
General
Get Record Details
Description
Get detailed information about the record from BMC Remedy ITSM.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Record Type
String
N/A
Yes
Specify the type of the record for which you want to retrieve details.
Record IDs
CSV
N/A
Yes
Specify the IDs of records for which you want to return details.
Fields To Return
CSV
N/A
No
Specify the fields to return.
If invalid fields are provided, the action fails. If nothing is provided, the action returns all fields.
Run on
This action doesn't run on entities.
Action Results
Script Result
Script Result Name
Value Options
Example
is_success
True/False
is_success:False
JSON Result
[
{
"Request ID" : "X|X" ,
"Submitter" : "Remedy Application Service"
},
{
"Request ID" : "X|X" ,
"Submitter" : "Remedy Application Service"
},
{
"Request ID" : "X|X" ,
"Submitter" : "Remedy Application Service"
}
]
Case Wall
Result type
Value/Description
Type (Entity \ General)
Output message*
The action should not fail nor stop a playbook execution:
If data is available for at least one iD (is_success=true): "Successfully returned details regarding record type {Record Type} in BMC Remedy ITSM for the following ids: {record ids}".
If data is not available for at least one ID (is_success=true): "Action wasn't able to find details regarding record type {Record Type} in BMC Remedy ITSM for the following ids: {record ids}".
If data is not available for all (is_success=false): " No records were found."
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Record Details". Reason: {0}''.format(error.Stacktrace)
If 400: "Error executing action "Get Record Details". Reason: {0}''.format(messageText)
General
Case Wall Table
Table Name: Record {record Id} Details
Table Columns:
Key
Value
General
Update Record
Description
Update a record in BMC Remedy ITSM.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Record Type
String
N/A
Yes
Specify the type of the record that needs to be updated.
Record ID
String
N/A
Yes
Specify the ID of the record that needs to be updated.
Fields To Update
JSON
{
"field":"value"
}
Yes
Specify a JSON object containing all of the needed fields and values that need to be updated.
Run on
This action doesn't run on entities.
Action Results
Script Result
Script Result Name
Value Options
Example
is_success
True/False
is_success:False
Case Wall
Result type
Value/Description
Type (Entity \ General)
Output message*
The action should not fail nor stop a playbook execution:
If the 204 status code is reported (is_success=true):
"Successfully updated {record type} record with {record id} in BMC Remedy ITSM."
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Update Record". Reason: {0}''.format(error.Stacktrace)
If the 404, 400, or 500 status code is reported: "Error executing action "Update Record". Reason: {messageText}{messageAppendedText}.
If invalid JSON payload is provided: "Error executing action "Update Record". Reason: Invalid JSON payload provided in the parameter "Fields To Update". Please check the structure.
General
Delete Record
Description
Delete a record in BMC Remedy ITSM.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Record Type
String
N/A
Yes
Specify the type of the record that needs to be deleted.
Record ID
String
N/A
Yes
Specify the ID of the record that needs to be deleted.
Run on
This action doesn't run on entities.
Action Results
Script Result
Script Result Name
Value Options
Example
is_success
True/False
is_success:False
Case Wall
Result type
Value/Description
Type (Entity \ General)
Output message*
The action should not fail nor stop a playbook execution:
If the 204 status code is reported (is_success=true) "Successfully deleted {Record Type} record with ID {record id} in BMC Remedy ITSM."
If the 404 status code is reported and the message number is 302 (is_success=true): "{Record Type} Record with ID {record id} doesn't exist in BMC Remedy ITSM."
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Delete Record". Reason: {0}''.format(error.Stacktrace)
If the 404 status code is reported and the message number isn't 302 (is_success=false): "Error executing action "Delete Record". Reason: {messageText}"
General
Create Record
Description
Create a record in BMC Remedy ITSM.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Record Type
String
N/A
Yes
Specify the type of the record that needs to be created.
Record Payload
JSON
{
"field":"value"
}
Yes
Specify a JSON object containing all of the needed fields and values.
Run on
This action doesn't run on entities.
Action Results
Script Result
Script Result Name
Value Options
Example
is_success
True/False
is_success:False
JSON Result
{
"values" : {
"Work Log ID" : "X" ,
"Submitter" : "Admin" ,
"Submit Date" : "2022-01-06T10:42:43.000+0000" ,
"Assigned To" : null ,
"Last Modified By" : "Admin" ,
"Last Modified Date" : "2022-01-06T10:42:43.000+0000" ,
"Status" : "Enabled" ,
"Short Description" : "." ,
"Status History" : null ,
"Assignee Groups" : null
}
}
Case Wall
Result type
Value/Description
Type (Entity \ General)
Output message*
The action should not fail nor stop a playbook execution:
If the 201 status code is reported (is_success=true): "Successfully created {record type} record in BMC Remedy ITSM."
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Create Record". Reason: {0}''.format(error.Stacktrace)"
If the 400 status code is reported and the message number is 307: "Error executing action "Create Record". Reason: the following fields are mandatory: {csv of messageAppendedText}."
If the 400 status code is reported and message number isn't 307: "Error executing action "Create Record". Reason: {messageText}: {messageAppendedText}."
If invalid JSON payload is provided: "Error executing action "Create Record". Reason: Invalid JSON payload provided in the parameter "Record Payload". Please check the structure."
General
Wait For Record Fields Update
Description
Wait for record fields update in BMC Remedy ITSM.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Record Type
String
N/A
Yes
Specify the type of the record for which you are waiting an update.
Record ID
String
N/A
Yes
Specify the ID of the record that needs to be updated.
Fields To Check
JSON
{
"field":"value"
}
Yes
Specify a JSON object containing all of the needed fields and values.
Fail If Timeout
Checkbox
Checked
Yes
If enabled, the action fails, if not all of the fields are updated.
Run on
This action doesn't run on entities.
Action Results
Script Result
Script Result Name
Value Options
Example
is_success
True/False
is_success:False
JSON Result
{
"values" : {
"Work Log ID" : "X" ,
"Submitter" : "Admin" ,
"Submit Date" : "2022-01-06T10:42:43.000+0000" ,
"Assigned To" : null ,
"Last Modified By" : "Admin" ,
"Last Modified Date" : "2022-01-06T10:42:43.000+0000" ,
"Status" : "Enabled" ,
"Short Description" : "." ,
"Status History" : null ,
"Assignee Groups" : null
}
}
Case Wall
Result type
Value/Description
Type (Entity \ General)
Output message*
The action should not fail nor stop a playbook execution:
If the 200 status code (is_success=true): "{record type} record with ID {record id} was updated in BMC Remedy ITSM."
If one of the fields is not updated and the "Fail If Timeout" parameter is not enabled (is_success=false): "The following fields were not updated for {record type} record with ID {record id} in BMC Remedy ITSM: {fields that were not updated}"
Async Message: " Waiting for the following fields to be updated for {record type} record with ID {record id} in BMC Remedy ITSM: {fields that were not updated}"
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Wait For Fields Update". Reason: {0}''.format(error.Stacktrace)
If some fields are not found: "Error executing action "Wait For Fields Update". Reason: the following fields were not found in the structure of record: {fields that were not found}.
If the 404 status code is reported: "Error executing action "Wait For Record Fields Update". Reason: {messageText}."
If one of the fields is not updated and the "Fail If Timeout" parameter is enabled (is_success=false): "Error executing action "Wait For Fields Update". Reason: The following fields were not updated for {record type} record with ID {record id} in BMC Remedy ITSM: {fields that were not updated}"
If invalid JSON payload is provided: "Error executing action "Wait For Fields Update". Reason: Invalid JSON payload provided in the parameter "Fields To Check". Please check the structure.
General
Get Incident Details
Description
Get detailed information about the incidents from BMC Remedy ITSM.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Incident IDs
CSV
N/A
Yes
Specify the iDs of incidents for which you want to return details.
Fields To Return
CSV
N/A
No
Specify the fields to return.
If invalid fields are provided, the action fails.
If nothing is provided, the action returns all fields.
Fetch Work Notes
Checkbox
Checked
No
If enabled, action will return work notes related to the incident.
Max Work Notes To Return
Integer
50
No
Specify the number of work notes to return. If nothing is provided, the action returns 50 work notes.
Run on
This action doesn't run on entities.
Action Results
Script Result
Script Result Name
Value Options
Example
is_success
True/False
is_success:False
JSON Result
{
"Work Log ID" : "X" ,
"Submitter" : "Admin" ,
"Submit Date" : "2022-01-06T10:42:43.000+0000" ,
"Assigned To" : null ,
"Last Modified By" : "Admin" ,
"Last Modified Date" : "2022-01-06T10:42:43.000+0000" ,
"Status" : "Enabled" ,
"Short Description" : "." ,
"Status History" : null ,
"Assignee Groups" : "" ,
"Worknotes" : [
{
"Submitter" : "X" ,
"Detailed Description" : "asdasd" ,
"Work Log Type" : "X" ,
"Work Log Submit Date" : "2022-01-06T11:21:56.000+0000"
},
{
"Submitter" : "X" ,
"Detailed Description" : "Work Log Entry from Bob." ,
"Work Log Type" : "X" ,
"Work Log Submit Date" : "2008-11-07T00:30:41.000+0000"
}
]
}
Case Wall
Result type
Value/Description
Type (Entity \ General)
Output message*
The action should not fail nor stop a playbook execution:
If data is available for at least one ID (is_success=true): "Successfully returned details regarding incidents in BMC Remedy ITSM for the following ids: {record ids}."
If no data is available for at least one ID (is_success=true): "Action wasn't able to find details regarding incidents in BMC Remedy ITSM for the following ids: {record ids}."
If no data is available for all IDs (is_success=false): " No incidents were found."
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Incidents Details". Reason: {0}''.format(error.Stacktrace)
If the 400 status code is reported: "Error executing action "Get Incidents Details". Reason: {0}''.format(messageText)
General
Case Wall Table
Table Name: Incident Details
Table Columns:
Key
Value
General
Case Wall Table
Table Name: Incident {incident number} Worknotes
Table Columns:
Submitter
Text
Time
General
Update Incident
Description
Update an incident in BMC Remedy ITSM.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Incident ID
String
N/A
Yes
Specify the ID of the incident that needs to be updated.
Status
DDL
Select One
Possible values:
Select One
New
Assigned
In Progress
Pending
Resolved
Closed
Cancelled
No
Specify the status for the incident.
Note: If status is "Pending" or "Resolved", then you also need to provide "Status Reason" value.
Status Reason
String
N/A
No
Specify the status reason for the incident.
Impact
DDL
Select One
Possible Values:
Select One
Extensive/Widespread
Significant/Large
Moderate/Limited
Minor/Localized
No
Specify the impact for the incident.
Urgency
DDL
Select One
Possible values:
Select One
Critical
High
Medium
Low
NO
Specify the urgency for the incident.
Description
String
N/A
No
Specify the description of the incident
Incident Type
DDL
Select One
Possible Values:
User Service Restoration
User Service Request
Infrastructure Restoration
Infrastructure Event
No
Specify the incident type for the incident.
Assigned Group
String
N/A
No
Specify the assigned group for the incident.
Assignee
String
N/A
No
Specify the assignee for the incident.
Resolution
String
N/A
No
Specify the resolution for the incident.
Resolution Category Tier 1
String
N/A
No
Specify the resolution category tier 1 for the incident.
Resolution Category Tier 2
String
N/A
No
Specify the resolution category tier 2 for the incident.
Resolution Category Tier 3
String
N/A
No
Specify the resolution category tier 3 for the incident.
Resolution Product Category Tier 1
String
N/A
No
Specify the resolution category tier 1 for the incident.
Resolution Product Category Tier 2
String
N/A
No
Specify the resolution category tier 2 for the incident.
Resolution Product Category Tier 3
String
N/A
No
Specify the resolution category tier 3 for the incident.
Reported Source
DDL
Select One
Possible Values:
Direct Input
Email
External Escalation
Fax
Systems Management
Phone
Voice Mail
Walk In
Web
Other
BMC Impact Manager Event
No
Specify the reported source.
Custom Fields
JSON
N/A
No
Specify a JSON object containing all of the needed fields and values that need to be updated.
Note: This parameter overwrites other provided parameters.
Run on
This action doesn't run on entities.
Action Results
Script Result
Script Result Name
Value Options
Example
is_success
True/False
is_success:False
Case Wall
Result type
Value/Description
Type (Entity \ General)
Output message*
The action should not fail nor stop a playbook execution:
If the 204 status code is reported (is_success=true): "Successfully updated incident with {record id} in BMC Remedy ITSM."
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Update Incident". Reason: {0}''.format(error.Stacktrace"
If the 400 or 500 status code is reported: "Error executing action "Update Incident". Reason: {messageText}{messageAppendedText}.
If the incident is not found (is_success = true): "Error executing action "Update Incident". Reason: incident {incident id} wasn't found in BMC Remedy ITSM. Please check the spelling."
If invalid JSON payload is provided: "Error executing action "Update Incident". Reason: Invalid JSON payload provided in the parameter "Fields To Update". Please check the structure."
General
Create Incident
Description
Create an incident in BMC Remedy ITSM.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Status
DDL
Select One
Possible values:
Select One
New
Assigned
In Progress
Pending
Resolved
Closed
Cancelled
No
Specify the status for the incident.
Impact
DDL
Select One
Possible Values:
Select One
Extensive/Widespread
Significant/Large
Moderate/Limited
Minor/Localized
No
Specify the impact for the incident.
Urgency
DDL
Select One
Possible values:
Select One
Critical
High
Medium
Low
No
Specify the urgency for the incident.
Description
String
N/A
No
Specify the description of the incident
Company
String
N/A
No
Specify the company for the incident
Customer
String
N/A
No
Specify the customer for the incident.
Note: Customer needs to be provided in the "{Last Name} {First Name}" format.
Example: Allbrook Allen
Template Name
String
N/A
No
Specify the name of the template for the incident.
Note: The action tries to find the ID of the template in the background. For better precision you can provide the template ID directly through Custom Fields.
Incident Type
DDL
Select One
Possible Values:
User Service Restoration
User Service Request
Infrastructure Restoration
Infrastructure Event
No
Specify the incident type for the incident.
Assigned Group
String
N/A
No
Specify the assigned group for the incident.
Assignee
String
N/A
No
Specify the assignee for the incident.
Resolution
String
N/A
No
Specify the resolution for the incident.
Resolution Category Tier 1
String
N/A
No
Specify the resolution category tier 1 for the incident.
Resolution Category Tier 2
String
N/A
No
Specify the resolution category tier 2 for the incident.
Resolution Category Tier 3
String
N/A
No
Specify the resolution category tier 3 for the incident.
Resolution Product Category Tier 1
String
N/A
No
Specify the resolution category tier 1 for the incident.
Resolution Product Category Tier 2
String
N/A
No
Specify the resolution category tier 2 for the incident.
Resolution Product Category Tier 3
String
N/A
No
Specify the resolution category tier 3 for the incident.
Reported Source
DDL
Select One
Possible Values:
Direct Input
Email
External Escalation
Fax
Self Service
Systems Management
Phone
Voice Mail
Walk In
Web
Other
BMC Impact Manager Event
No
Specify the reported source.
Custom Fields
JSON
N/A
No
Specify a JSON object containing all of the needed fields and values that need to be used during the creation.
Note: This parameter will overwrite other provided parameters.
Run on
This action doesn't run on entities.
Action Results
Script Result
Script Result Name
Value Options
Example
is_success
True/False
is_success:False
JSON Result
{
"Request ID" : "X" ,
"Submitter" : "X" ,
"Create Date" : "2022-01-06T14:05:31.000+0000" ,
"Assigned To" : null ,
"Last Modified By" : "X" ,
"Modified Date" : "2022-01-06T14:05:31.000+0000" ,
"Status" : "X" ,
"Short Description" : "." ,
"Status History" : {
"New" : {
"user" : "X" ,
"timestamp" : "2022-01-06T14:05:31.000+0000"
},
"In Progress" : {
"user" : "X" ,
"timestamp" : "2022-01-06T14:05:31.000+0000"
}
},
"Assignee Groups" : null ,
"InstanceId" : "X" ,
"Vendor Assignee Groups" : null ,
"Vendor Assignee Groups_parent" : null ,
"Assignee Groups_parent" : null ,
"Product Categorization Tier 1" : null ,
"Product Categorization Tier 2" : null ,
"Product Categorization Tier 3" : null ,
}
Case Wall
Result type
Value/Description
Type (Entity \ General)
Output message*
The action should not fail nor stop a playbook execution:
If the 201 status code is reported (is_success=true): "Successfully created incident with in BMC Remedy ITSM."
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Create Incident". Reason: {0}''.format(error.Stacktrace)"
If the 400 status code is reported and the message number is 307: "Error executing action "Create Incident". Reason: the following fields are mandatory: {csv of messageAppendedText}."
If the 400 or 500 status code is reported and the message number isn't 307: "Error executing action "Create Incident". Reason: {messageText} {messageAppendedText}."
If invalid JSON payload is provided: "Error executing action "Create Incident". Reason: Invalid JSON payload provided in the parameter "Fields To Update". Please check the structure."
If template is not found: "Error executing action "Create Incident". Reason: template with name "{template Name}" was not found. Please check the spelling or provide template ID directly via custom fields."
General
Wait For Incident Fields Update
Description
Wait for incident fields update in BMC Remedy ITSM.
Parameters
Parameter Display Name
Type
Default Value
Is mandatory
Description
Incident ID
String
True
Specify the ID of the incident that needs to be updated.
Status
DDL
Select One
Possible values:
Select One
New
Assigned
In Progress
Pending
Resolved
Closed
Cancelled
False
Specify what is the expected status for the incident.
Fields To Check
JSON
{
"field":"value"
}
False
Specify a JSON object containing all of the needed fields and values. Note: This parameter has priority over the "Status" field.
Fail If Timeout
Bool
True
True
If enabled, action will be failed, if not all of the fields were updated.
Run On
N/A
Action Results
Script Result
is_success. Can be True or False. If action runs successfully (no errors
returned, server response is 200 OK ) on at least one of the entities
is_success should be set to True.
JSON Result
{
"values" : {
"Work Log ID" : "X" ,
"Submitter" : "X" ,
"Submit Date" : "2022-01-06T10:42:43.000+0000" ,
"Assigned To" : null ,
"Last Modified By" : "X" ,
"Last Modified Date" : "2022-01-06T10:42:43.000+0000" ,
"Status" : "X" ,
"Short Description" : "." ,
"Status History" : null ,
"Assignee Groups" : null
}
}
Case Wall
Result type
Value/Description
Type (Entity \ General)
Output message*
The action should not fail nor stop a playbook execution:
If the 200 status code is reported (is_success= rue): "Incident with ID {incident id} was updated in BMC Remedy ITSM."
If one of the fields is not updated and the "Fail If Timeout" parameter is not enabled (is_success=false): "The following fields were not updated for incident with ID {incident id} in BMC Remedy ITSM: {fields that were not updated}"
Async Message: " Waiting for the following fields to be updated for incident with ID {incident id} in BMC Remedy ITSM: {fields that were not updated}"
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Wait For Incident Fields Update". Reason: {0}''.format(error.Stacktrace)
If some fields are not found: "Error executing action "Wait For Incident Fields Update". Reason: the following fields were not found in the structure of the incident: {fields that were not found}.
If incident is not found: "Error executing action "Wait For Incident Fields Update". Reason: incident with ID {incident ID} was not found.
If one of the fields is not updated and the "Fail If Timeout" parameter is enabled (is_success=false): "Error executing action "Wait For Fields Update". Reason: The following fields were not updated for incident with ID {incident id} in BMC Remedy ITSM: {fields that were not updated}"
If invalid JSON payload is provided: "Error executing action "Wait For Fields Update". Reason: Invalid JSON payload provided in the parameter "Fields To Check". Please check the structure."
If the "Status" and "Fields To Check" parameters are not provided: "Error executing action "Wait For Fields Update". Reason: "Status" or "Fields To Check" parameter should have a value."
General
Add Work Note To Incident
Description
Add a work note to incidents in BMC Remedy ITSM.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Incident ID
String
N/A
Yes
Specify the ID of the incident to which you want to add a work note.
Work Note Text
String
N/A
Yes
Specify the text for the work note.
Run on
This action doesn't run on entities.
Action Results
Script Result
Script Result Name
Value Options
Example
is_success
True/False
is_success:False
Case Wall
Result type
Value/Description
Type (Entity \ General)
Output message*
The action should not fail nor stop a playbook execution:
If data is available for at least one ID (is_success=true): "Successfully added a note to incident "{incident id}" in BMC Remedy ITSM."
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Add Work Note To Incident". Reason: {0}''.format(error.Stacktrace)"
If the incident is not found (is_success = false): "Error executing action "Update Incident". Reason: incident {incident id} wasn't found in BMC Remedy ITSM. Please check the spelling."
General
Delete Incident
Description
Delete an incident in BMC Remedy ITSM.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Incident ID
String
N/A
Yes
Specify the ID of the incident that needs to be deleted.
Run on
This action doesn't run on entities.
Action Results
Script Result
Script Result Name
Value Options
Example
is_success
True/False
is_success:False
Case Wall
Result type
Value/Description
Type (Entity \ General)
Output message*
The action should not fail nor stop a playbook execution:
If the 204 status code is reported (is_success = true): "Successfully deleted incident with ID {record id} in BMC Remedy ITSM.
If the incident is not found (is_success=true): "Incident with ID {record id} doesn't exist in BMC Remedy ITSM."
The action should fail and stop a playbook execution:
If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Delete Incident". Reason: {0}''.format(error.Stacktrace)"
General
Jobs
Sync Closed Incidents By Tag
Description
Synchronizes BMC Remedy ITSM requests that are created within the
Google SecOps Case playbook and Google SecOps cases.
Note: In BMC Remedy ITSM, the "Cancelled", "Closed", and "Resolved" statuses are
treated as closed. Additionally, the case needs to have two tags for the job to
work. The first tag should be "BMC Remedy ITSM" and the second tag should start
with the "BMC Remedy ITSM:{Incident ID}" prefix. The job can only close
incidents that are assigned in BMC Remedy ITSM.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Incident Table
String
HPD:IncidentInterface
Yes
Specify the name of the table, which needs to be used to fetch details about the incidents.
API Root
String
https://{IP}:{port}
Yes
API root of the BMC Remedy ITSM instance.
Username
String
N/A
Yes
BMC Remedy ITSM username.
Password
Password
N/A
Yes
BMC Remedy ITSM password
Max Hours Backwards
Integer
24
No
Specify the number of hours backwards to synchronize statuses.
Verify SSL
Checkbox
Checked
Yes
If enabled, verify that the SSL certificate for the connection to the BMC Remedy ITSM server is valid.
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
