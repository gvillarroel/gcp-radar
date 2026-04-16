---
title: "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty
  title: "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\
    \ \_|\_ Google Cloud Documentation"
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
Integrate Amazon GuardDuty with
Google SecOps
This document explains how to integrate Amazon GuardDuty with
Google Security Operations (Google SecOps).
Important: In the Google SecOps platform, the integration for
Amazon GuardDuty is called AWS GuardDuty .
Prerequisites
If you require read-only access to the integration, such as running the
connector, use the AmazonGuardDutyReadOnlyAccess policy.
To get full access to all integration features, use the
AmazonGuardDutyFullAccess policy.
For details about using policies, see
AWS managed
policies .
Integration parameters
Use the following parameters to configure the integration:
Parameter name
Type
Default value
Is mandatory
Description
AWS Access Key ID
String
N/A
Yes
AWS Access Key ID to use in integration.
AWS Secret Key
Password
N/A
Yes
AWS Secret Key to use in integration.
AWS Default Region
String
N/A
Yes
AWS default region to use in integration, for example us-west-1.
Run Remotely
Checkbox
Unchecked
No
Check the field in order to run the configured integration remotely.
Once checked, the option appears to select the remote user (agent).
For instructions about how to configure an integration in
Google SecOps, see Configure
integrations .
You can make changes at a later stage, if needed. After you configure an
integration instance, you can use it in playbooks. For more information about
how to configure and support multiple instances, see Supporting
multiple instances .
Use cases
Detect and manage threats in the AWS system using playbooks or manual
actions.
Ingest Amazon GuardDuty findings, which are then moved to the GuardDuty
archive.
Actions
For more information about actions, see
Respond to pending actions from Your Workdesk and Perform a
manual action .
Ping
Test the connectivity to Amazon GuardDuty.
Parameters
None.
Run on
This action doesn't run on entities, nor has mandatory input parameters.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
Case wall
Result type
Description
Type
Output message*
If successful: "Successfully connected to the AWS GuardDuty server with the provided connection parameters!"
Else: "Failed to connect to the AWS if successful: "Successfully connected to the AWS GuardDuty server with the provided connection parameters!"
Else: "Failed to connect to the AWS GuardDuty server! Error: {0}"
General
Create a Detector
Creates a single Amazon GuardDuty detector. A detector is a resource that
represents the GuardDuty service. You can have only one detector per account per
Region.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Enable
Checkbox
Unchecked
Yes
Specifies whether the detector is to be enabled.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
Is successful: "The detector <new detector ID> has been created."
If the detector is not created (is_success=false): "Action wasn't able to create a detector. Reason: a detector already exists for the current account.
If "ErrorCode" is reported (is_success=false): "Action wasn't able to create a detector. Error: {}".format (ErrorMessage)"
The action should fail and stop a playbook execution:
Invalid detector ID should raise an exception as well, stop the playbook and set is_success to false.
If a fatal error, SDK error, like wrong credentials, no connection, other is reported: "Error executing action "Create a Detector". Reason: {0}''.format(error.Stacktrace)
General
Delete a Detector
Delete an Amazon GuardDuty detector that is specified by the detector ID.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
The unique ID of the detector that you want to delete.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If the detector is not deleted (is_success=false): "Action wasn't able to delete <detector_ID> detector. Error: {}".format(ErrorMessage)"
If the detector is successfully deleted (is_success=true): "The detector <detector ID> has been deleted."
The action should fail and stop a playbook execution:
Invalid detector ID should raise an exception as well, stop the playbook and set is_success to false.
If a fatal error, SDK error, like wrong credentials, no connection, other is reported: "Error executing action "Delete a Detector". Reason: {0}''.format(error.Stacktrace)
General
Update a Detector
Update the Amazon GuardDuty detector specified by the detector ID.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
The unique ID of the detector that you want to update.
Enable
Checkbox
Unchecked
No
Specifies whether the detector should be enabled.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If "ErrorCode" is reported (is_success=false): "Action wasn't able to create a detector. Error: {}".format(ErrorMessage)"
If the detector is successfully updated (is_success=true): "The detector <detector ID> has been updated."
The action should fail and stop a playbook execution:
Invalid detector ID should raise an exception as well, stop the playbook and set is_ success to false.
If a fatal error, SDK error, like wrong credentials, no connection, other is reported: "Error executing action "Update a Detector". Reason: {0}''.format(error.Stacktrace)
General
Get Detector Details
Retrieve an Amazon GuardDuty detector specified by the detector ID.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
The unique ID of the detector that you want to retrieve. Comma-separated values.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
{
"DetectorId" : " DETECTOR_ID " ,
"CreatedAt" : "response['CreatedAt']" ,
"ServiceRole" : "response['ServiceRole']" ,
"Status" : "response['Status']" ,
"UpdatedAt" : "response['UpdatedAt']" ,
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successful: "Successfully retrieved information about <Indicator ID> indicator."
Note : If some detector ID s found, and some not - display both messages based on the relevant detector ID.
The action should fail and stop a playbook execution:
Invalid detector ID should raise an exception as well, stop the playbook and set is_success to false.
If a fatal error, SDK error, like wrong credentials, no connection, other is reported: "Error executing action "Get a Detector Details". Reason: {0}''.format(error.Stacktrace)
General
CSV Table
Table Title: Detectors Details
Table Columns:
Detector ID
Status
Service Role
Created at
Updated at
General
List Detectors
Lists detectorIds of all the existing Amazon GuardDuty detector resources.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Max Detectors To Return
Integer
50
No
Specify the number of detectors to return.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
{
"detectorIds" : [ "ID1,ID2" ]
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If the 200 status code is reported (is_success=true): "Successfully listed available detectors in Amazon GuardDuty. Indicator ID:<value>"
If other status code is reported (is_success=false): "Action wasn't able to list available detectors"
The action should fail and stop a playbook execution:
If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Detectors". Reason: {0}''.format(error.Stacktrace)
General
List Findings for a Detector
Lists all Amazon GuardDuty findings for the specified detector ID.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
The unique ID of the detector that you want to retrieve.
Max Findings To Return
Integer
50
No
Specify the number of detectors to return.
Sort By
String
N/A
No
Represents the finding attribute (for example, accountId) to sort findings by.
Order By
DDL
ASC
Possible values:
ASC
DESC
No
The order by which the sorted findings are to be displayed.
AWS Region
String
N/A
No
Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
{ "FindingIds" : [ "10ba96ae50733ae38b9cae95431b7558" ]}
Case wall
Result type
Description
Type
Output message*
The action should not fail and stop a playbook execution:
If "ErrorCode" is reported (is_success=false): "Action wasn't able to get findings for <detector ID> detector. Error: {}".format(ErrorMessage)"
If successful: "Successfully retrieved available findings IDs for detector {detector ID}"
The action should fail and stop a playbook execution:
If a fatal error, SDK error, like wrong credentials, no connection, other is reported: "Error executing action "List Findings for a Detector". Reason: {0}''.format(error.Stacktrace)
General
Archive Findings
Archive GuardDuty findings that are specified by finding IDs.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Finding IDs
String
N/A
Yes
The IDs of the findings that you want to retrieve.
Comma-separated IDs.
Detector ID
String
N/A
Yes
The unique ID of the detector
AWS Region
String
N/A
No
Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.
AWS IAM Policy Permission:
Effect: Allow
Action: guardduty:ArchiveFindings
Only the administrator account can archive findings. Member accounts don't have
permission to archive findings from their accounts.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action shouldn't fail nor stop a playbook execution:
If "ErrorCode" is reported (is_success=false): "Action wasn't able to archive Findings. Error: {}".format(ErrorMessage). Please check if all Finding IDs are correct."
If successful: "Findings were successfully archived" → Changed to: "The following findings were successfully archived: <ids>
In case of one/all invalid finding IDs, the action shouldn't fail, but is_success should be set to false: "Couldn't archive the following findings: <ids>"
Note: The error code cannot be for one of the IDs. In case of wrong finding ID, an exception is thrown with the following error: "When calling the ArchiveFindings operation (reached max retries: 4): Internal server error."
Same here: Check first if finding is valid.
Successfully archived the following findings: 88bac20f959084244a2b91778d12e883
Failed to archived the following findings: 1abac689941ae6f3e3e24d02ac4cf612
The action should fail and stop a playbook execution:
Invalid detector ID should raise an exception as well, stop the playbook and set is_success to false.
If a fatal error, SDK error, like wrong credentials, no connection, other is reported: "Error executing action "Archive Findings". Reason: {0}''.format(error.Stacktrace)"
General
Unarchive Findings
Extract GuardDuty findings that are specified by finding IDs.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Finding IDs
String
N/A
Yes
The IDs of the findings that you want to retrieve. Comma-separated values.
Detector ID
String
N/A
Yes
The unique ID of the detector.
AWS IAM Policy Permission:
Effect: Allow
Action: guardduty:UnarchiveFindings
Only the administrator account can archive findings. Member accounts don't have
permission to archive findings from their accounts.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action shouldn't fail nor stop a playbook execution:
If successful: "The following findings were successfully archived: <ids>"
In case of one/all invalid finding IDs, the action shouldn't fail, but is_success should set to false: "Couldn't unarchive the following findings: <ids>
The action should fail and stop a playbook execution:
Invalid detector ID should raise an exception as well, stop the playbook and set is_success to false.
If a fatal error, SDK error, like wrong credentials, no connection, other is reported: "Error executing action "Unarchive Findings". Reason: {0}''.format(error.Stacktrace)"
Note: The error code cannot be for one of the IDs. In case of wrong finding ID, an exception is thrown with the following error: "When calling the ArchiveFindings operation (reached max retries: 4): Internal server error."
Same here: Check first if finding is valid.
Successfully archived the following findings: 88bac20f959084244a2b91778d12e883
Failed to archive the following findings: 1abac689941ae6f3e3e24d02ac4cf612
General
Create Sample Findings
Generates example findings of types specified by the list of findings.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
The unique ID of the detector to create sample findings for.
Finding Types
String
N/A
No
The types of sample findings to generate. Comma-separated values.
Types can be found in the UI in the Findings section under the Finding Type column.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If "ErrorCode" is reported (is_success=false): "Action wasn't able to create sample findings. Error: {}".format(ErrorMessage)"
If successful: "Successfully created sample findings"
If one of the inputs (Findings Types) is invalid, catch the following exception: "The request is rejected because an invalid or out-of-range value is specified as an input parameter." set, is_sucess=false: "Action wasn't able to create sample findings because an invalid value was found as Finding Types parameter.
Updated: In case of invalid finding type, the action should fail, with this msg: "Action wasn't able to create sample findings because an invalid value was found as Finding Types parameter. Error: <traceback>
invalid finding type + invalid detector → action should fail, is_success=false
Multiple findings - invalid + invalid - action will still fail!
The action should fail and stop a playbook execution:
Invalid detector ID should raise an exception as well, stop the playbook and set is_success to false.
If a fatal error, SDK error, like wrong credentials, no connection, other is reported: "Error executing action "Create Sample Findings". Reason: {0}''.format(error.Stacktrace)
General
Update Findings Feedback
Mark the specified Amazon GuardDuty findings as useful or not useful.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
The unique ID of the detector associated with the findings to update feedback for.
Useful?
Checkbox
Unchecked
Yes
The feedback for the finding.
Findings IDs
String
N/A
Yes
The IDs of the findings that you want to mark as useful or not useful. Comma-separated values.
Comment
String
N/A
No
Additional feedback about the GuardDuty findings.
AWS Region
String
N/A
No
Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If "ErrorCode" is reported (is_success=false): "Action wasn't able to update findings feedback. Error: {}".format(ErrorMessage)
If successful: "Findings feedback was updated."
If an error/not found for one of the finding IDs, the response object still returns an empty response, although one of the IDs does not exist.
If findings are not found: "Cannot update feedback. <finding id> is not valid."
The action should fail and stop a playbook execution:
Invalid detector ID should raise an exception as well, stop the playbook and set is_success to false.
If a fatal error, SDK error, like wrong credentials, no connection, other is reported: "Error executing action "Update Findings Feedback". Reason: {0}''.format(error.Stacktrace)"
General
Delete a Trusted IP List
Delete the IPSet specified by the ID.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
Specify the detector ID that should be used to delete an IP set.
This parameter can be found in the Settings tab.
Trusted IP List IDs
String
N/A
Yes
Specify the comma-separated list of IDs of IP sets.
Example: id_1,id_2
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successful (is_success=true): "Successfully deleted the following Trusted IP lists: <ids>"
If not successful for some of the IDs (is_success=true): "Action wasn't able to delete the following Trusted IP Lists from Amazon GuardDuty:\n{0}.".format(list_of_ids)"
The action should fail and stop a playbook execution:
Invalid detector ID should raise an exception as well, stop the playbook and set is_success to false.
If a fatal error, SDK error, like wrong credentials, no connection to server, other is reported: "Error executing action "Delete a Trusted IP List". Reason: {0}''.format(error.Stacktrace"
General
Get Finding Details
Return detailed information about a finding in AWS Guard Duty.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Finding IDs
String
N/A
Yes
The IDs of the findings that you want to retrieve. Comma-separated IDs.
Detector ID
String
N/A
Yes
The unique ID of the detector that you want to retrieve.
AWS Region
String
N/A
No
Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
{
"Findings" : [{
"AccountId" : " ACCOUNT_ID " ,
"Arn" : "arn:aws:guardduty:us-east-1: ACCOUNT_ID :detector/ DETECTOR_ID /finding/ FINDING_ID " ,
"CreatedAt" : "2020-10-06T05:19:50.794Z" ,
"Description" : "203.0.113.9 is performing RDP brute force attacks against i- INSTANCE_ID . Brute force attacks are used to gain unauthorized access to your instance by guessing the RDP password." , "Id" : " ID " ,
"Partition" : "aws" ,
"Region" : "us-east-1" ,
"Resource" : {
"InstanceDetails" : {
"AvailabilityZone" : "us-east-1e" ,
"ImageId" : "ami- IMAGE_ID " ,
"InstanceId" : "i- INSTANCE_ID " ,
"InstanceState" : "running" ,
"InstanceType" : "t2.micro" ,
"LaunchTime" : "2020-05-27T08:54:03Z" , "NetworkInterfaces" : [{
"Ipv6Addresses" : [],
"NetworkInterfaceId" : "eni-012d9b8a1a3b4e40a" ,
"PrivateDnsName" : "ip-192.0.2.1.ec2.internal" ,
"PrivateIpAddress" : "192.0.2.1" ,
"PrivateIpAddresses" : [{
"PrivateDnsName" : "ip-192.0.2.1.ec2.internal" ,
"PrivateIpAddress" : "192.0.2.1"
}],
"PublicDnsName" : "ec2-54-234-69-236.compute-1.amazonaws.com" ,
"PublicIp" : "198.51.100.236" ,
"SecurityGroups" : [{
"GroupId" : "sg-0fa42e04e9cd15407" ,
"GroupName" : "Windows Server 2016"
}],
"SubnetId" : "subnet-2edddf10" ,
"VpcId" : "vpc-48a7ac32"
}],
"Platform" : "windows" ,
"ProductCodes" : [],
"Tags" : [{
"Key" : "Name" ,
"Value" : "CiscoAMP-win2012"
}]},
"ResourceType" : "Instance"
},
"SchemaVersion" : "2.0" ,
"Service" : {
"Action" : {
"ActionType" : "NETWORK_CONNECTION" , "NetworkConnectionAction" : {
"Blocked" : false ,
"ConnectionDirection" : "INBOUND" ,
"LocalPortDetails" : {
"Port" : 3389 , "PortName" : "RDP"
},
"Protocol" : "TCP" ,
"LocalIpDetails" : {
"IpAddressV4" : "192.0.2.1"
},
"RemoteIpDetails" : {
"IpAddressV4" : "203.0.113.9" ,
"Organization" : {
"Asn" : "24875" ,
"AsnOrg" : "Example Inc." ,
"Isp" : "Example Inc." ,
"Org" : "Example Inc."
}},
"RemotePortDetails" : {
"Port" : 1549 ,
"PortName" : "Unknown"
}}},
"Archived" : false ,
"Count" : 5 ,
"DetectorId" : " DETECTOR_ID " ,
"EventFirstSeen" : "2020-10-06T05:10:58Z" ,
"EventLastSeen" : "2020-10-06T05:46:59Z" ,
"ResourceRole" : "TARGET" ,
"ServiceName" : "guardduty"
},
"Severity" : 2 ,
"Title" : "203.0.113.9 is performing RDP brute force attacks against i- INSTANCE_ID ." ,
"Type" : "UnauthorizedAccess:EC2/RDPBruteForce" ,
"UpdatedAt" : "2020-10-06T06:01:46.380Z"
}]
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If "ErrorCode" is reported (is_success=false): "Action wasn't able to get Findings details. Error: {}".format(ErrorMessage)"
If successful: "Successfully retrieved information for the following findings <finding ids that retrieved>"
If an error for one of the IDs is reported, the response object has results only for the good IDs. Check if the response object didn't have some of the IDs and print out a proper message.
E.g. data = ['4cba8180b5959ae56a3be24cc722aaaa', '6eba7eae0e24ffe28a4109f2594febff', '24ba6761dc4cf85cfc292bbadd1c2655']
The first ID does not exist, therefore I will not get a result for that one. Output message:
"Successfully retrieved information for the following findings: 6eba7eae0e24ffe28a4109f2594febff,24ba6761dc4cf85cfc292bbadd1c2655. Failed to retrieve information for the following findings: 4cba8180b5959ae56a3be24cc722aaaa
The action should fail and stop a playbook execution:
If a fatal error, SDK error, like wrong credentials, no connection, other is reported: "Error executing action "Get Findings". Reason: {0}''.format(error.Stacktrace)"
General
Case Wall Table
Note: if exists.
Table Columns:
Finding ID
Title
Description
Type
Severity
Count
Resource ID
Created at
Updated at
Account ID
General
Get all Trusted IP lists
Description
Get all trusted IP lists (IPSets) of the GuardDuty service specified by the
detector ID.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
Specify the detector ID that should be used to list IP sets.
This parameter can be found in the Settings tab.
Max Trusted IP Lists To Return
Integer
50
No
Specify the number of Trusted IP lists to return.
AWS Region
String
N/A
No
Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
{
"IpSetIds" : [ '' , '' , '' ]
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successfully listed available sets (is_success=true): "Successfully retrieved available Trusted IP lists."
The action should fail and stop a playbook execution:
If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Get all Trusted IP Lists". Reason: {0}''.format(error.Stacktrace)
General
Get a Trusted IP list
Description
Get details about a trusted IP list in Amazon GuardDuty.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
Specify the detector ID that should be used to get an IP set.
This parameter can be found in the Settings tab.
Trusted IP List IDs
CSV
N/A
Yes
Specify the comma-separated list of IDs for IP sets, such as
id_1,id_2 .
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
{
"ip_set_id" : {
"Format" : "response['Format']" ,
"Location" : "response['Location']" ,
"Name" : "response['Name']" ,
"Status" : "response['Status']"
}
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successfully returned details (is_success=true): "Successfully retrieved details about the following Trusted IP Lists from Amazon GuardDuty:\n{0}.".format(list_of_ids)"
If not successful for some of the IDs (is_success=true) : "Action wasn't able to retrieve details about the following Trusted IP Lists from Amazon GuardDuty:\n{0}.".format(list_of_ids)
If no IDs are used (is_success=false): "No details were retrieved about the provided Trusted IP Lists".format(list_of_ids)"
The action should fail and stop a playbook execution:
If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Trusted IP Lists". Reason: {0}''.format(error.Stacktrace)
General
CSV
Table Name: Trusted IP Lists Details
Table Columns:
Name (mapped as Name)
Trusted IP List ID (from action parameter)
Location (mapped as Location)
Status (mapped as Status)
General
Update a Trusted IP list
Description
Update a trusted IP list in Amazon GuardDuty.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
Specify the detector ID that should be used to update a Trusted IP List.
This parameter can be found in the Settings tab.
Trusted IP List ID
String
N/A
Yes
Specify the ID of the Trusted IP List that should be updated.
Name
String
N/A
No
Specify the new name of the Trusted IP List.
File Location
String
https://s3.amazonaws.com/{bucket-name}/file.txt
No
Specify a new URI location, where the file is located.
Activate
Checkbox
Checked
Yes
If enabled, the Trusted IP List will be activated.
AWS Region
String
N/A
No
Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.
Run on
This action doesn't run on entities.
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
N/A
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successfully updated one set (is_success=true) : "Successfully updated the trusted IP list '{0}' in Amazon GuardDuty.".format(Threat ID)
If unsuccessful to update one set (is_success=false): "Action wasn't able to update the trusted IP list '{0}' in Amazon GuardDuty.".format(Threat ID)
The action should fail and stop a playbook execution:
If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Update Trusted IP list". Reason: {0}''.format(error.Stacktrace)
General
Create a Trusted IP list
Creates a new list of trusted IP addresses (IPSet) that were in the dynamic list
for secure communication with the AWS infrastructure and applications.
Note: Only one Trusted IP set can be created and activated.
GuardDuty doesn't generate findings for IP addresses that are included in
IPSets. Only users from the administrator account can use this operation.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
Specify the detector ID that should be used to create a Trusted IP List.
This parameter can be found in the Settings tab.
Name
String
N/A
Yes
Specify the name of the Trusted IP List.
File Format
DDL
Plaintext
Yes
Select the format of the file that should be used to create a Trusted IP List.
Possible values:
Plaintext Structured Threat Information Expression (STIX)
Open Threat Exchange (OTX) CSV
FireEye iSIGHT Threat Intelligence CSV
Proofpoint ET Intelligence Feed CSV
AlienVault Reputation Feed
File Location
String
https://s3.amazonaws.com/{bucket-name}/file.txt
Yes
Specify the URI location, where the file is located
Activate
Checkbox
Checked
Yes
If enabled, the newly created Trusted IP List is activated.
AWS Region
String
N/A
No
Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
{
"TrustedIPID" : " TRUSTED_IP_ID "
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successfully created a set (is_success=true): "Successfully created new Trusted IP List '{0}' in Amazon GuardDuty.".format(Name)"
If unsuccessful to create a set (is_success=false): "Action wasn't able to create new Trusted IP List '{0}' in Amazon GuardDuty.".format(name)"
The action should fail and stop a playbook execution:
If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Create Trusted IP List". Reason: {0}''.format(error.Stacktrace)"
General
List Threat Intelligence Sets
List available threat intelligence sets in Amazon GuardDuty.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
Specify the detector ID that should be used to list threat intelligence sets.
This parameter can be found in the Settings tab.
Max Threat Intelligence Sets To Return
Integer
50
No
Specify the number of threat intelligence sets to return.
AWS Region
String
N/A
No
Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
{
"ThreatIntelSetIds" : [ "14ba8b942b76c1be6d985715eb7443eb" ,
"32ba8b92e553fe04d06dab543ed57a70" ,
"8aba8b93ba6e08e8fd5349b2c2b57709"
]
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successfully listed available sets (is_success=true): "Successfully listed available Threat Intelligence Sets."
The action should fail and stop a playbook execution:
If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Threat Intelligence Sets". Reason: {0}''.format(error.Stacktrace)
General
Get Threat Intelligence Set Details
Get details about a threat intelligence set in Amazon GuardDuty.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
Specify the detector ID that should be used to get threat intelligence sets details.
This parameter can be found in the Settings tab.
Threat Intelligence Set IDs
String
50
Yes
Specify the comma-separated list of IDs of threat intelligence sets.
Example: id_1,id_2
AWS Region
String
N/A
No
Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
{
"Format" : "TXT" ,
"Location" : "https: //example.s3.amazonaws.com/test.txt" ,
"Name" : "API Test" ,
"ResponseMetadata" : {
"HTTPHeaders" : {
"connection" : "keep-alive" ,
"content-length" : "149" ,
"content-type" : "application/json" ,
"date" : "Mon,19 Oct 2020 06: 23: 22 GMT" ,
"x-amz-apigw-id" : " ID " ,
"x-amzn-requestid" : " REQUEST_ID " ,
"x-amzn-trace-id" : " TRACE_ID "
},
"HTTPStatusCode" : 200 ,
"RequestId" : " REQUEST_ID " ,
"RetryAttempts" : 0
},
"Status" : "ERROR" ,
"Tags" : {}
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successfully returned details about at list one set (is_success=true): "Successfully retrieved details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list_of_ids)"
If unsuccessful for some of the IDs (is_success=true): "Action wasn't able to retrieve details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list_of_ids)"
If no IDs are used: "No details were retrieved about the provided Threat Intelligence Sets.".format(list_of_ids)
The action should fail and stop a playbook execution:
If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Threat Intelligence Sets". Reason: {0}''.format(error.Stacktrace)
General
CSV
Table Name: Threat Intelligence Set Details
Table Column:
Name (mapped as Name)
ID (from action parameter)
Location (mapped as Location)
Status (mapped as Status)
Create Threat Intelligence Set
Create a threat intelligence set in Amazon GuardDuty.
Note: iam:PutRolePolicy permission. The maximum number of the Threat Intel sets
is 6.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
Specify the detector ID that should be used to create a Threat Intelligence Set.
This parameter can be found in the Settings tab.
Name
String
N/A
Yes
Specify the name of the Threat Intelligence Set.
File Format
DDL
Plaintext
Possible values:
Plaintext
Structured Threat Information Expression (STIX)
Open Threat Exchange (OTX) CSV
FireEye iSIGHT Threat Intelligence CSV
Proofpoint ET Intelligence Feed CSV
AlienVault Reputation Feed
Yes
Select the format of the file that is used to create a threat intelligence set.
File Location
String
https://s3.amazonaws.com/{bucket-name}/file.txt
Yes
Specify the URI location, where the file is located.
Active
Checkbox
Checked
Yes
If enabled, the newly created Threat Intelligence Set is activated.
Tags
CSV
N/A
No
Specify additional tags that should be added to the Threat Intelligence Set.
Format: key_1:value_1,key_2:value_1
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
JSON result
{
"ThreatIntelSetId" : "b6f0c884a54449cc8e29eed3094e9c31"
}
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successfully created a set (is_success=true): "Successfully created the Threat Intelligence Set '{0}' in Amazon GuardDuty.".format(Name)
If unsuccessful to create a set (is_success=false): "Action wasn't able to create the Threat Intelligence Set '{0}' in Amazon GuardDuty.".format(name)
The action should fail and stop a playbook execution:
If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Create Threat Intelligence Set". Reason: {0}''.format(error.Stacktrace)
General
Update Threat Intelligence Set
Update a threat intelligence set in Amazon GuardDuty.
Note: iam:PutRolePolicy permission.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Detector ID
String
N/A
Yes
Specify the detector ID that should be used to update a Threat Intelligence Set.
This parameter can be found in the Settings tab.
ID
String
N/A
Yes
Specify the ID of the Threat Intelligence set that should be updated.
Name
String
N/A
No
Specify the new name of the Threat Intelligence Set.
File Location
String
https://s3.amazonaws.com/{bucket-name}/file.txt
No
Specify a new URI location, where the file is located.
Active
Checkbox
Checked
Yes
If enabled, the Threat Intelligence Set is activated.
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successfully updated one set (is_success=true): "Successfully updated the Threat Intelligence Set '{0}' in Amazon GuardDuty.".format(Threat ID)
If unsuccessful to update a set (is_success=false): "Action wasn't able to update the Threat Intelligence Set '{0}' in Amazon GuardDuty.".format(Threat ID)
The action should fail and stop a playbook execution:
If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Update Threat Intelligence Set". Reason: {0}''.format(error.Stacktrace)
General
Delete Threat Intelligence Set
Delete a threat intelligence set in Amazon GuardDuty.
Parameters
Parameter name
Type
Default value
Watermark
Is mandatory
Description
Detector ID
String
N/A
N/A
Yes
Specify the detector ID that should be used to get threat intelligence sets details.
This parameter can be found in the Settings tab.
Threat Intelligence Set IDs
CSV
N/A
N/A
Yes
Specify the comma-separated list of IDs of threat intelligence sets.
Example: id_1,id_2
Run on
This action doesn't run on entities.
Action results
Script result
Script result name
Value options
Example
is_success
True or False
is_success=False
Case wall
Result type
Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successfully returned details about at list one set (is_success=true): "Successfully deleted the following Threat Intelligence Sets in Amazon GuardDuty:\n{0}.".format(list_of_ids)
If unsuccessful for some of the IDs (is_success=true): "Action wasn't able to delete the following Threat Intelligence Sets in Amazon GuardDuty:\n{0}.".format(list_of_ids)
If no IDs are used: "No Threat Intelligence Sets were deleted.".format(list_of_ids)
The action should fail and stop a playbook execution:
Invalid detector ID should raise an exception as well, stop the playbook and set is_success to false.
If a fatal error, SDK error, like wrong credentials, no connection to the server, other: "Error executing action "Delete Threat Intelligence Sets". Reason: {0}''.format(error.Stacktrace)
General
Connectors
To learn more about configuring connectors in Google SecOps,
see Ingest your data (connectors) .
Note: To prevent data loss, connectors utilize Event Flattening . If a raw alert
contains a list of entities (such as multiple email addresses, hostnames, or IP addresses),
connectors automatically flatten them into separate, unique events.
For example, a single raw alert containing three different email addresses is ingested as three
separate events, each containing one distinct email address.
This process ensures that every entity is correctly indexed as a unique asset, making it fully
searchable and actionable in playbooks.
AWS GuardDuty - Findings Connector
Pull findings from Amazon GuardDuty.
Note: The dynamic list works with Finding types, for example,
UnauthorizedAccess:EC2/RDPBruteForce .
Connector inputs
Use the following parameters to configure the connector:
Parameter name
Type
Default value
Is mandatory
Description
Product Field Name
String
Product Name
Yes
The name of the field where the product name is stored.
The product name primarily impacts mapping. To streamline and improve the mapping process for
the connector, the default value resolves to a fallback value that is referenced
from the code. Any invalid input for this parameter resolves to a fallback
value by default.
The default value is Product Name .
Event Field Name
String
Type
Yes
The name of the field that determines the event name (subtype).
Environment Field Name
String
""
No
The name of the field where the environment name is stored.
If the
environment field is missing, the connector uses the default value.
Environment Regex Pattern
String
.*
No
A regular expression pattern to run on the value found in the
Environment Field Name field. This parameter lets you manipulate
the environment field using the regular expression logic.
Use the default value .* to retrieve the required raw
Environment Field Name value.
If the regular expression pattern is null or empty, or the environment
value is null, the final environment result is the default environment.
Script Timeout (Seconds)
Integer
180
Yes
The timeout limit, in seconds, for the Python process that runs the
current script.
AWS Access Key ID
String
N/A
Yes
AWS Access Key ID to use in integration.
AWS Secret Key
Password
N/A
Yes
AWS Secret Key to use in integration.
AWS Default Region
String
N/A
Yes
AWS default region to use in integration.
Example: us-west-2
Detector ID
String
N/A
Yes
ID of the detector. It can be found in the Settings tab.
Lowest Severity To Fetch
Integer
1
Yes
The lowest severity of the alerts to retrieve.
If you don't
configure this parameter, the connector ingests alerts with all severity levels.
Possible values are in range from 1 to 8 .
Note: Amazon GuardDuty maps the integer value in the
following order:
1,2,3 - Low
4,5,6 - Medium
7,8 - High
Fetch Max Hours Backwards
Integer
1
No
The number of hours prior to now to retrieve findings.
This parameter can apply to the initial connector iteration after you enable
the connector for the first time, or the fallback value for an expired connector
timestamp.
Max Findings To Fetch
Integer
50
No
Number of findings to process per one connector iteration.
Maximum: 50
This is a GuardDuty limitation.
Use whitelist as a blacklist
Checkbox
Unchecked
Yes
If selected, the connector uses the dynamic list as a blocklist.
Proxy Server Address
String
N/A
No
The address of the proxy server to use.
Proxy Username
String
N/A
No
The proxy username to authenticate with.
Proxy Password
Password
N/A
No
The proxy password to authenticate with.
Connector rules
The connector supports proxies.
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
