---
title: "CustomFieldValue \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/CustomFieldValue
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/CustomFieldValue
  title: "CustomFieldValue \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Reference
Send feedback
CustomFieldValue
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Value
JSON representation
A value for a CustomField on a resource.
JSON representation
{
"customField" : string ,
"value" : {
object ( Value )
}
}
Fields
customField
string
Required. The custom field for which this is a value. Format: "networks/{networkCode}/customFields/{customFieldId}"
value
object ( Value )
Required. A typed value representation of the value.
Value
Represent custom field value type.
JSON representation
{
// Union field value can be only one of the following:
"dropdownValue" : string ,
"stringValue" : string ,
"numberValue" : number ,
"toggleValue" : boolean
// End of list of possible types for union field value .
}
Fields
Union field value . The value of this field. value can be only one of the following:
dropdownValue
string ( int64 format)
The customFieldOptionId, if the CustomFieldDataType is DROPDOWN.
stringValue
string
The value, if the CustomFieldDataType is STRING.
numberValue
number
The value, if the CustomFieldDataType is NUMBER.
toggleValue
boolean
The value, if the CustomFieldDataType is TOGGLE.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-05 UTC."],[],[]]
