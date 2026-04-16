---
title: "Create a custom metadata label detector \_|\_ Sensitive Data Protection \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/create-custom-infotypes-metadata-labels
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/create-custom-infotypes-metadata-labels
  title: "Create a custom metadata label detector \_|\_ Sensitive Data Protection\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Create a custom metadata label detector
Stay organized with collections
Save and categorize content based on your preferences.
You can configure Sensitive Data Protection to detect specific metadata
labels in your content. The metadata can be automatically extracted from
supported file types or provided by your application in the inspection
request. If Sensitive Data Protection finds content that matches your
metadata criteria, it generates a finding.
To scan for metadata labels, create a custom metadata label infoType. Then,
configure your inspection or discovery scan to search for that infoType.
Benefits and use cases
This feature lets you use your existing classification taxonomies for inspection
and policy enforcement. If you use a custom or third-party classification system
that applies metadata labels to your documents, you can configure
Sensitive Data Protection to detect these metadata labels during
your inspection or discovery operations.
Example use cases include the following:
Scan files for the presence of Microsoft sensitivity
labels
that contain specific key-value pairs.
Combine metadata label detection with standard infoType detection for a
multi-layered approach.
Scan metadata that is passed alongside the content by your application,
even if the metadata isn't embedded in the file.
Sanitize documents using Model Armor based on
specific metadata labels. To use this feature with
Model Armor—or services that use
Model Armor like Gemini Enterprise—you must
create an advanced Sensitive Data Protection configuration in
Model Armor
that references this custom metadata label detector.
Supported file types
DOCX
PDF
PPTX
XLSX
Supported metadata formats
This feature can detect Microsoft Purview Information Protection metadata
and client-provided metadata.
Microsoft Purview Information Protection metadata
This feature can detect Microsoft Purview Information Protection metadata
that have the following name format:
MSIP_Label_ GUID _ ATTRIBUTE
Replace the following:
GUID : The globally unique identifier of the metadata.
ATTRIBUTE : The Microsoft Information Protection
attribute of the metadata. Accepted values:
ActionId
ContentBits
Enabled
Method
Name
SetDate
SiteId
Client-provided metadata
You can provide custom metadata directly in an
InspectContent request. Client-provided
metadata is a list of key-value pairs that are passed in the
ContentMetadata field of the
ContentItem .
Limitations
Custom infoTypes of type
MetadataKeyValueExpression
aren't supported in the following:
Inspection rule sets
De-identification
transformations
Create a metadata label custom infoType detector
To create a metadata label custom infoType detector, define a
CustomInfoType of type
MetadataKeyValueExpression
within an InspectConfig object. The
CustomInfoType object has the following properties:
{
"inspect_config" : {
"custom_info_types" : [
{
"info_type" : {
"name" : " CUSTOM_METADATA_LABEL_NAME "
},
"likelihood" : " LIKELIHOOD " ,
"sensitivityScore" :{
"score" : " SENSITIVITY_SCORE "
},
"metadata_key_value_expression" : {
"key_regex" : " KEY_REGULAR_EXPRESSION " ,
"value_regex" : " VALUE_REGULAR_EXPRESSION "
}
}
]
}
}
Replace the following:
CUSTOM_METADATA_LABEL_NAME : The name to assign to the
custom infoType detector.
LIKELIHOOD : (Optional) The
Likelihood value to assign to
all findings that match this custom infoType. If you omit this field, the
default likelihood level is VERY_LIKELY .
SENSITIVITY_SCORE : (Optional) The
SensitivityScore to assign
to all findings that match this custom infoType. If you omit this field, the
default sensitivity score is HIGH .
Sensitivity scores are used in data profiles . When
profiling your data, Sensitive Data Protection uses the sensitivity scores of the infoTypes to
calculate the sensitivity level .
KEY_REGULAR_EXPRESSION : A regular expression to search
for in the keys of metadata labels.
VALUE_REGULAR_EXPRESSION : A regular expression to
search for in the values of metadata labels.
Example detector for a Microsoft sensitivity label
This inspect_config example defines a custom infoType named
CUSTOM_MIP_HIGHLY_CONFIDENTIAL . This custom infoType detects a Microsoft
Purview Information Protection label that contains the GUID
12345678-9012-3456-7890-123456789012 and is enabled:
{
"inspect_config" : {
"custom_info_types" : [
{
"info_type" : {
"name" : "CUSTOM_MIP_HIGHLY_CONFIDENTIAL"
},
"likelihood" : "VERY_LIKELY" ,
"metadata_key_value_expression" : {
"key_regex" : "MSIP_Label_12345678-9012-3456-7890-123456789012_Enabled" ,
"value_regex" : "true"
}
}
],
"min_likelihood" : "POSSIBLE"
}
}
When you use this configuration in an inspection job,
Sensitive Data Protection generates a CUSTOM_MIP_HIGHLY_CONFIDENTIAL
finding if it finds content where the metadata key
MSIP_Label_12345678-9012-3456-7890-123456789012_Enabled has the value true .
Scan for client-provided metadata
To scan for client-provided metadata labels, follow these steps:
Create a custom metadata label infoType detector.
Include the metadata that you want to scan in the ContentMetadata field of your
ContentItem .
Example request for scanning client-provided metadata
The following example shows an InspectContent request that includes both a
PDF file and client-provided metadata. The request uses a custom infoType
named CUSTOM_MIP_CONFIDENTIAL_INTERNAL_USE to scan both the file and the
provided metadata for files that are marked as "Confidential" or "Internal Use".
{
"inspect_config" : {
"custom_info_types" : [
{
"info_type" : {
"name" : "CUSTOM_MIP_CONFIDENTIAL_INTERNAL_USE"
},
"likelihood" : "VERY_LIKELY" ,
"metadata_key_value_expression" : {
"key_regex" : "MSIP_Label_.*_Name" ,
"value_regex" : "Confidential|Internal Use"
}
}
]
},
"item" : {
"byte_item" : {
"type" : "PDF" ,
"data" : " BASE64_ENCODED_PDF "
},
"content_metadata" : {
"properties" : [
{
"key" : "MSIP_Label_174b6716-c2ea-4041-b631-5633733fbe46_Name" ,
"value" : "Confidential"
}
]
}
}
}
Replace BASE64_ENCODED_PDF with a base64-encoded
file to scan.
If Sensitive Data Protection finds a match in the client-provided metadata,
the finding's MetadataType for
MetadataLocation is CLIENT_PROVIDED_METADATA . If the match is in the
file-extracted metadata, such as an MSIP label, the value is
CONTENT_METADATA .
The MetadataType for MetadataLocation is populated based on whether the
match is in file-extracted or client-supplied metadata.
What's next
Create an advanced Sensitive Data Protection configuration in
Model Armor .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
