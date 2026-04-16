---
title: "AWS S3 \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-s3
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-s3
  title: "AWS S3 \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
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
AWS S3
This document describes how to integrate AWS S3 with
Google Security Operations.
Use Cases
Manage buckets
Download files from buckets
Upload files to buckets
Configure AWS S3 Integration in Google Security Operations
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
Instance Name
String
N/A
No
Name of the Instance you intend to configure integration for.
Description
String
N/A
No
Description of the Instance.
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
AWS default region to use in integration, for example us-west-2.
Run Remotely
Checkbox
Unchecked
No
Check the field in order to run the configured integration remotely. Once checked, the option appears to select the remote user (agent).
Note: You can make changes at a later stage if needed. Once configured, the
Instances can be used in Playbooks. For detailed information on configuring and
supporting multiple instances, see
Supporting multiple instances .
Actions
Ping
Description
Test connectivity to AWS S3 with parameters provided at the integration
configuration page in the Google Security Operations Marketplace tab.
Use cases
Test Connectivity.
Run On
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
Result Type
Value / Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If successful:
"Successfully connected to the AWS S3 server with the provided connection parameters!"
The action should fail and stop a playbook execution:
If not successful:
"Failed to connect to the AWS S3 server! Error is {0}".format(exception.stacktrace)
General
List Buckets
Description
Retrieve a list of buckets from AWS S3.
Run On
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
"Buckets" : [
{
"CreationDate" : %Y - %m - %dT%H : %M : %S ,
"Name" : "testsiemplify"
}
],
"Owner" : {
"DisplayName" : "lab_aws" ,
"ID" : "935dc3fed0e1d2c5b12242cf9927370824f2438681a2d3c0523f254dbde41aba"
},
Case Wall
Result Type
Value / Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If status code == 200 (is_success = true) "Successfully listed available buckets in AWS S3".
If other status code (is_success=false): "Action wasn't able to list available buckets in AWS S3.
The action should fail and stop a playbook execution:
If fatal error, like wrong credentials, no connection to the server, other: "Error executing action "List Buckets". Reason: {0}''.format(error.Stacktrace)
General
Get Bucket Policy
Description
Retrieve information about the bucket policy from AWS S3.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Bucket Name
String
N/A
Yes
Specify name of the bucket from which to retrieve policy information.
Run On
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
"Policy" : {
"Version" : "2012-10-17" ,
"Statement" : [
{
"Sid" : "AddPerm" ,
"Effect" : "Allow" ,
"Principal" : "*" ,
"Action" : "s3:GetObject" ,
"Resource" : "arn:aws:s3:::testsiemplify/*"
}
]
}
Case Wall
Result Type
Value / Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If status code == 200 (is_success = true) "Successfully retrieved information about the policy of the "{0}" bucket in AWS S3".format(bucket_name)
If other status code (is_success=false): "Action wasn't able to return information about the policy of the '{0}' bucket in AWS S3".format(bucket_name)
The action should fail and stop a playbook execution:
If fatal error, like wrong credentials, no connection to the server, other: "Error executing action "Get Bucket Policy". Reason: {0}''.format(error.Stacktrace)
General
Set Bucket Policy
Description
Set a policy in the bucket from AWS S3.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Bucket Name
String
N/A
Yes
Specify the name of the bucket on which you want to update the policy.
Policy JSON Object
String
N/A
Yes
Specify the JSON object of the policy that you want to set for the bucket. Examples can be found here: https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html.
Run On
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
bucke t _policy = {
'Versio n ' : ' 2012-10-17 ' ,
'S tate me nt ' : [{
'Sid' : 'AddPerm' ,
'E ffe c t ' : 'Allow' ,
'Pri n cipal' : '*' ,
'Ac t io n ' : [ 's 3 : Ge t Objec t ' ],
'Resource' : f 'ar n : aws : s 3 :::{ bucke t _ na me } /*'
}]
}
Case Wall
Result Type
Value / Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If status code == 204 (is_success = true) "Successfully updated policy of the "{0}" bucket in AWS S3".format(bucket_name)
If other status code (is_success=false): "Action wasn't able to update the policy of the '{0}' bucket in AWS S3".format(bucket_name)
The action should fail and stop a playbook execution:
If fatal error, like wrong credentials, no connection to the server, other: "Error executing action "Set Bucket Policy". Reason: {0}''.format(error.Stacktrace)
List Bucket Objects
Description
Enables the user to deactivate a user account. The request body contains the
user to disable. The account enabled property of the account should be set to
false.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Bucket Name
String
N/A
Yes
Specify the name of the bucket from which to retrieve objects.
Max Objects to Return
Integer
N/A
No
Specify how many objects to return.
Run On
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
"Contents" : [
{
"Key" : "text.txt" ,
"LastModified" : %Y - %m - %dT%H : %M : %S ,
"ETag" : "d41d8cd98f00b204e9800998ecf8427e" ,
"Size" : 0 ,
"StorageClass" : "STANDARD" ,
"Owner" : {
"DisplayName" : "lab_aws" ,
"ID" : "935dc3fed0e1d2c5b12242cf9927370824f2438681a2d3c0523f254dbde41aba"
}
},
{
"Key" : "text_1.txt" ,
"LastModified" : %Y - %m - %dT%H : %M : %S ,
"ETag" : "d41d8cd98f00b204e9800998ecf8427e" ,
"Size" : 0 ,
"StorageClass" : "STANDARD" ,
"Owner" : {
"DisplayName" : "lab_aws" ,
"ID" : "935dc3fed0e1d2c5b12242cf9927370824f2438681a2d3c0523f254dbde41aba"
}
}
]
Case Wall
Result Type
Value / Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If status code == 200 (is_success = true) "Successfully returned objects of the "{0}" bucket in AWS S3".format(bucket_name)
If other status code (is_success=false): "Action wasn't able to return objects of the '{0}' bucket in AWS S3".format(bucket_name)
The action should fail and stop a playbook execution:
If fatal error, like wrong credentials, no connection to the server, other: "Error executing action "List Bucket Objects". Reason: {0}''.format(error.Stacktrace)
General
Case Wall Table
Table Name: '{0}' Bucket Objects
Columns:
Key (mapped as Key)
Last Modified (mapped as LastModified)
Size (Bytes) (mapped as Size)
Owner (mapped as Owner/DisplayName)
Storage Class (mapped as Storage Class)
General
Download File From Bucket
Description
Download file from bucket in AWS S3.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
Bucket File Path
String
s3://{bucket_name}/{file_name}
Yes
Specify the path to the file in the bucket. Example: s3://siemplify/syslog/log.txt
Download Path
String
N/A
Yes
Specify the path, where to download the file.
Run On
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
"bucket_file_path" : "s3://testsiemplify/test/123.txt"
"download_path" : "/usr/bin/share/download.txt"
}
Case Wall
Result Type
Value / Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If status code == 200 (is_success = true) "Successfully downloaded '{0}' from AWS S3".format(bucket_file_path)
If other status code (is_success=false): "Action wasn't able to download '{0}' from AWS S3. Reason: file with that download path already exists."
The action should fail and stop a playbook execution:
If fatal error, like wrong credentials, no connection to the server, SDK errors, other: "Error executing action "Download File From Bucket". Reason: {0}''.format(error.Stacktrace)
General
Upload File To Bucket
Description
Upload file to bucket in AWS S3.
Parameters
Parameter Display Name
Type
Default Value
Is Mandatory
Description
File Path
String
N/A
Yes
Specify the path to the file that needs to be uploaded.
Bucket Upload Path
String
s3://{bucket_name}/{file_name}
Yes
Specify the path in the bucket to where the path should be uploaded. Example: s3://siemplify/syslog/log.txt
Run On
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
"bucket_upload_path" : "s3://testsiemplify/test/123.txt"
"file_path" : "/usr/bin/share/download.txt"
}
Case Wall
Result Type
Value / Description
Type
Output message*
The action should not fail nor stop a playbook execution:
If status code == 200 (is_success = true) "Successfully uploaded '{0}' to AWS S3 {1} bucket".format(file_path, bucket name aka first string after s3://)
If the file does not exist (is_success = false) "Action wasn't able to upload '{0}' to AWS S3. Reason: file with that upload path does not exist."
The action should fail and stop a playbook execution:
If fatal error, like wrong credentials, no connection to the server, SDK errors, other: "Error executing action "Upload File To Bucket". Reason: {0}''.format(error.Stacktrace)
General
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
