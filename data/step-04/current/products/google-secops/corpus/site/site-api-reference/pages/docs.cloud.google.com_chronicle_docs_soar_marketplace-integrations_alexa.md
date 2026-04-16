---
title: "Integrate Alexa with Google SecOps \_|\_ Google Security Operations \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alexa
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alexa
  title: "Integrate Alexa with Google SecOps \_|\_ Google Security Operations \_|\_\
    \ Google Cloud Documentation"
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
Integrate Alexa with Google SecOps
This document describes how to integrate Alexa with
Google Security Operations (Google SecOps).
Integration version: 7.0
Important: Alexa Web Information Service (AWIS) was terminated in December 2022.
Before you begin
To retrieve the access key ID and the secret access key, complete the following
steps:
Sign in to your AWS
account .
Click your username at the top right and select My
Security Credentials from the menu.
In the Your Security Credentials page, expand the Access keys (access key
ID and secret access key) option and click Generate New Access Key .
Note: When you expand the Access keys (access key ID and secret access
key) option, you will see the list of your active and deleted access keys.
You cannot retrieve the existing secret key. To get a secret key, you need
to create a new one.
To display the generated key on the screen, click Show Access Key . To
download it, click Download Key File .
Note: Make sure to write down the key or download the key file before you
click Close as you will not be able to retrieve the AWS Secret Access
Key in the future.
Network
Function
Default port
Direction
Protocol
API
Multivalues
Outbound
apikey
Integration parameters
Use the following parameters to configure the integration:
Parameter name
Type
Default value
Is mandatory
Description
Instance Name
String
N/A
No
Name of the instance you intend to configure integration for.
Description
String
N/A
No
Description of the instance.
Access key id
String
N/A
Yes
Access key generated in Alexa's console.
Secret access key
String
N/A
Yes
Generated in Alexa's console with Access key ID.
Run Remotely
Checkbox
Unchecked
No
Check the field in order to run the configured integration remotely. Once checked, the option appears to select the remote user (agent).
For instructions about how to configure an integration in
Google SecOps, see Configure
integrations .
You can make changes at a later stage, if needed. After you configure an
integration instance, you can use it in playbooks. For more information about
how to configure and support multiple instances, see Supporting
multiple instances .
Actions
For more information about actions, see
Respond to pending actions from Your Workdesk and Perform a
manual action .
Get URL Rank
Query Alexa for URL rank information. Broadly, Alexa rank represents a measure
of a website's popularity, and shows how a website is doing compared to other
sites. The indicated makes it a great KPI for benchmarking, and competitive
analysis.
Parameters
Parameter name
Type
Default value
Is mandatory
Description
Threshold
String
N/A
Yes
Rank e.g. 5.
Run on
This action runs on the URL entity.
Action results
Script result
Script name
Value options
Example
is_risky
True or False
is_risky:False
JSON result
[
{
"EntityResult" :
{
"TrafficData" : [
{
"text" : " " ,
"DataUrl" : [
{
"text" : "domain.com" ,
"type" : "canonical"
}],
"Rank" : [
{
"text" : "5"
}
]
}
],
"text" : " " ,
"Request" : [
{
"text" : " " ,
"Arguments" : [
{
"text" : " " ,
"Argument" : [
{
"text" : " " ,
"Name" : [
{
"text" : "url"
}
],
"Value" : [
{
"text" : "domain.com"
}]}, {
"text" : " " ,
"Name" : [
{
"text" : "responsegroup"
}
],
"Value" : [
{
"text" : "Rank"
}]}]}]}]},
"Entity" : "domain.com"
}
]
Entity enrichment
Entities are marked as suspicious (True) if they exceed the threshold. Else:
False.
Enrichment field name
Logic - When to apply
Alexa_Rank
Returns if it exists in JSON result
TrafficData
Returns if it exists in JSON result
text
Returns if it exists in JSON result
Request
Returns if it exists in JSON result
Insights
Severity
Description
Warn
A warning insight is created when the enriched file has a malicious status. The insight is created when the number of detected engines equals or exceeds the minimum suspicious Threshold set before scan.
Ping
Test the connectivity to Alexa.
Parameters
N/A
Run on
This action runs on all entities.
Action results
Script result
Script result name
Value options
Example
is_succeed
True or False
is_succeed:False
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
