---
title: "SerializedTaxonomy \_|\_ Data Catalog Documentation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/SerializedTaxonomy
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-catalog/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/SerializedTaxonomy
  title: "SerializedTaxonomy \_|\_ Data Catalog Documentation \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Data Catalog API methods that are related to Data Catalog search and metadata are deprecated and will be discontinued on January 30, 2026. See Transition from Data Catalog to Dataplex Universal Catalog . Methods that are related to policy tags and policy tag taxonomies are not deprecated.
Home
Technology areas
Data Catalog
Documentation
Reference
Send feedback
SerializedTaxonomy
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
SerializedPolicyTag
JSON representation
A nested protocol buffer that represents a taxonomy and the hierarchy of its policy tags. Used for taxonomy replacement, import, and export.
JSON representation
{
"displayName" : string ,
"description" : string ,
"policyTags" : [
{
object ( SerializedPolicyTag )
}
] ,
"activatedPolicyTypes" : [
enum ( PolicyType )
]
}
Fields
displayName
string
Required. Display name of the taxonomy. At most 200 bytes when encoded in UTF-8.
description
string
Description of the serialized taxonomy. At most 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.
policyTags[]
object ( SerializedPolicyTag )
Top level policy tags associated with the taxonomy, if any.
activatedPolicyTypes[]
enum ( PolicyType )
A list of policy types that are activated per taxonomy.
SerializedPolicyTag
A nested protocol buffer that represents a policy tag and all its descendants.
JSON representation
{
"policyTag" : string ,
"displayName" : string ,
"description" : string ,
"childPolicyTags" : [
{
object ( SerializedPolicyTag )
}
]
}
Fields
policyTag
string
Resource name of the policy tag.
This field is ignored when calling ImportTaxonomies .
displayName
string
Required. Display name of the policy tag. At most 200 bytes when encoded in UTF-8.
description
string
Description of the serialized policy tag. At most 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.
childPolicyTags[]
object ( SerializedPolicyTag )
Children of the policy tag, if any.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
