---
title: "RoleGrant \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RoleGrant
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RoleGrant
  title: "RoleGrant \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Integration Connectors
Reference
Send feedback
RoleGrant
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Principal
Resource
JSON representation
Type
This configuration defines all the Cloud IAM roles that needs to be granted to a particular Google Cloud resource for the selected principal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user.
JSON representation
{
"principal" : enum ( Principal ) ,
"roles" : [
string
] ,
"resource" : {
object ( Resource )
} ,
"helperTextTemplate" : string
}
Fields
principal
enum ( Principal )
Optional. Principal/Identity for whom the role need to assigned.
roles[]
string
Optional. List of roles that need to be granted.
resource
object ( Resource )
Optional. Resource on which the roles needs to be granted for the principal.
helperTextTemplate
string
Optional. Template that UI can use to provide helper text to customers.
Principal
Supported Principal values.
Enums
PRINCIPAL_UNSPECIFIED
Value type is not specified.
CONNECTOR_SA
Service Account used for Connector workload identity This is either the default service account if unspecified or Service Account provided by Customers through BYOSA.
Resource
Resource definition
JSON representation
{
"type" : enum ( Type ) ,
"pathTemplate" : string
}
Fields
type
enum ( Type )
Optional. Different types of resource supported.
pathTemplate
string
Optional. Template to uniquely represent a Google Cloud resource in a format IAM expects This is a template that can have references to other values provided in the config variable template.
Type
Resource Type definition.
Enums
TYPE_UNSPECIFIED
Value type is not specified.
GCP_PROJECT
Google Cloud Project Resource.
GCP_RESOURCE
Any Google Cloud Resource which is identified uniquely by IAM.
GCP_SECRETMANAGER_SECRET
Google Cloud Secret Resource.
GCP_SECRETMANAGER_SECRET_VERSION
Google Cloud Secret Version Resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
