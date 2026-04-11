---
title: "ListAvailableOrgPolicyConstraintsResponse \_|\_ Resource Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListAvailableOrgPolicyConstraintsResponse
  title: "ListAvailableOrgPolicyConstraintsResponse \_|\_ Resource Manager \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Resource Manager
Reference
Send feedback
ListAvailableOrgPolicyConstraintsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Constraint
JSON representation
ConstraintDefault
ListConstraint
JSON representation
BooleanConstraint
The response returned from the projects.listAvailableOrgPolicyConstraints method. Returns all Constraints that could be set at this level of the hierarchy (contrast with the response from ListPolicies , which returns all policies which are set).
JSON representation
{
"constraints" : [
{
object ( Constraint )
}
] ,
"nextPageToken" : string
}
Fields
constraints[]
object ( Constraint )
The collection of constraints that are settable on the request resource.
nextPageToken
string
Page token used to retrieve the next page. This is currently not used.
Constraint
A Constraint describes a way in which a resource's configuration can be restricted. For example, it controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. Constraints can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for Constraints at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about Policies .
Constraints have a default behavior determined by the constraintDefault field, which is the enforcement behavior that is used in the absence of a Policy being defined or inherited for the resource in question.
JSON representation
{
"version" : integer ,
"name" : string ,
"displayName" : string ,
"description" : string ,
"constraintDefault" : enum ( ConstraintDefault ) ,
// Union field constraint_type can be only one of the following:
"listConstraint" : {
object ( ListConstraint )
} ,
"booleanConstraint" : {
object ( BooleanConstraint )
}
// End of list of possible types for union field constraint_type .
}
Fields
version
integer
Version of the Constraint . Default version is 0;
name
string
Immutable value, required to globally be unique. For example, constraints/serviceuser.services
displayName
string
The human readable name.
Mutable.
description
string
Detailed description of what this Constraint controls as well as how and where it is enforced.
Mutable.
constraintDefault
enum ( ConstraintDefault )
The evaluation behavior of this constraint in the absence of 'Policy'.
Union field constraint_type . The type of restrictions for this Constraint .
Immutable after creation. constraint_type can be only one of the following:
listConstraint
object ( ListConstraint )
Defines this constraint as being a ListConstraint.
booleanConstraint
object ( BooleanConstraint )
Defines this constraint as being a BooleanConstraint.
ConstraintDefault
Specifies the default behavior in the absence of any Policy for the Constraint . This must not be CONSTRAINT_DEFAULT_UNSPECIFIED .
Immutable after creation.
Enums
CONSTRAINT_DEFAULT_UNSPECIFIED
This is only used for distinguishing unset values and should never be used.
ALLOW
Indicate that all values are allowed for list constraints. Indicate that enforcement is off for boolean constraints.
DENY
Indicate that all values are denied for list constraints. Indicate that enforcement is on for boolean constraints.
ListConstraint
A Constraint that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a Policy .
JSON representation
{
"suggestedValue" : string ,
"supportsUnder" : boolean
}
Fields
suggestedValue
string
Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this Constraint .
supportsUnder
boolean
Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in Policy.allowed_values and Policy.denied_values . For example, "under:folders/123" would match any resource under the 'folders/123' folder.
BooleanConstraint
This type has no fields.
A Constraint that is either enforced or not.
For example a constraint constraints/compute.disableSerialPortAccess . If it is enforced on a VM instance, serial port connections will not be opened to that instance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-11 UTC."],[],[]]
