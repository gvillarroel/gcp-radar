---
title: "Rule \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/Rule
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/Rule
  title: "Rule \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Reference
Send feedback
Rule
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
CELExpression
JSON representation
RuleActionType
A rule in the cloud control.
JSON representation
{
"description" : string ,
"ruleActionTypes" : [
enum ( RuleActionType )
] ,
// Union field implementation can be only one of the following:
"celExpression" : {
object ( CELExpression )
}
// End of list of possible types for union field implementation .
}
Fields
description
string
Optional. The rule description. The maximum length is 2000 characters.
ruleActionTypes[]
enum ( RuleActionType )
Required. The functionality that's enabled by the rule.
Union field implementation . The rule implementation. implementation can be only one of the following:
celExpression
object ( CELExpression )
The rule's logic expression in Common Expression Language (CEL).
CELExpression
A Common Expression Language (CEL) expression that's used to create a rule.
JSON representation
{
"expression" : string ,
// Union field criteria can be only one of the following:
"resourceTypesValues" : {
object ( StringList )
}
// End of list of possible types for union field criteria .
}
Fields
expression
string
Required. The logical expression in CEL. The maximum length of the condition is 1000 characters. For more information, see CEL expression .
Union field criteria . The criteria of the CEL expression. criteria can be only one of the following:
resourceTypesValues
object ( StringList )
The resource instance types on which this expression is defined. The format is <SERVICE_NAME>/<type> . For example: compute.googleapis.com/Instance
RuleActionType
The action type of the rule.
Enums
RULE_ACTION_TYPE_UNSPECIFIED
Default value. This value is unused.
RULE_ACTION_TYPE_PREVENTIVE
The rule is intended to prevent non-compliance.
RULE_ACTION_TYPE_DETECTIVE
The rule is intended to detect non-compliance.
RULE_ACTION_TYPE_AUDIT
The rule is intended to audit non-compliance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-07 UTC."],[],[]]
