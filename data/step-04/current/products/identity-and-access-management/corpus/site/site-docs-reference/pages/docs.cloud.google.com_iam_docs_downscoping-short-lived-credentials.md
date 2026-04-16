---
title: "Credential Access Boundaries overview \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/downscoping-short-lived-credentials
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/downscoping-short-lived-credentials
  title: "Credential Access Boundaries overview \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Guides
Send feedback
Credential Access Boundaries overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes Credential Access Boundaries, which you can use to
downscope , or restrict, the Identity and Access Management (IAM) permissions that a
short-lived credential can use.
You can use Credential Access Boundaries to generate OAuth 2.0 access tokens
that represent a service account but have fewer permissions than the service
account. For example, if one of your customers needs to access Cloud Storage data
that you control, you can do the following:
Create a service account that can access every Cloud Storage bucket
that you own.
Generate an OAuth 2.0 access token for the service account.
Apply a Credential Access Boundary that only allows access to the bucket
that contains your customer's data.
How Credential Access Boundaries work
To downscope permissions, you define a Credential Access Boundary that specifies
which resources the short-lived credential can access, as well as an upper bound
on the permissions that are available on each resource. You can then create a
short-lived credential, then exchange it for a new credential that respects the
Credential Access Boundary.
Note: Only Cloud Storage supports Credential Access Boundaries. Other
Google Cloud services don't support this feature.
If you need to give principals a distinct set of permissions for each session,
using Credential Access Boundaries can be more efficient than creating many
different service accounts and granting each service account a different set of
roles.
Components of a Credential Access Boundary
A Credential Access Boundary is an object that contains a list of access
boundary rules . Each rule contains the following information:
The resource that the rule applies to.
The upper bound of the permissions that are available on that resource.
Optional: A condition that further restricts permissions. A condition includes
the following:
A condition expression that evaluates to true or false . If it
evaluates to true , access is allowed; otherwise, access is denied.
Optional: A title that identifies the condition.
Optional: A description with more information about the condition.
If you apply a Credential Access Boundary to a short-lived credential, then the
credential can access only the resources in the Credential Access Boundary. No
permissions are available on other resources.
A Credential Access Boundary can contain up to
10 access boundary rules. You can apply only one
Credential Access Boundary to each short-lived credential.
When represented as a JSON object, a Credential Access Boundary contains the
following fields:
Fields
accessBoundary
object
A wrapper for the Credential Access Boundary.
accessBoundary.accessBoundaryRules[]
object
A list of access boundary rules to apply to a short-lived
credential.
accessBoundary.accessBoundaryRules[].availablePermissions[]
string
A list that defines the upper bound on the available permissions for
the resource.
Each value is the identifier for an IAM
predefined role or
custom role , with
the prefix inRole: . For example:
inRole:roles/storage.objectViewer . Only the permissions
in these roles will be available.
Note: You cannot specify the names of permissions directly.
Instead, specify a role that the permission appears in. If necessary,
create a custom role
that includes only the permissions you need.
accessBoundary.accessBoundaryRules[].availableResource
string
The full resource name of the Cloud Storage bucket that the rule
applies to. Use the format
//storage.googleapis.com/projects/_/buckets/ bucket-name .
accessBoundary.accessBoundaryRules[].availabilityCondition
object
Optional. A condition that restricts the availability of permissions
to specific Cloud Storage objects.
Use this field if you want to make permissions available for specific
objects, rather than all objects in a Cloud Storage bucket.
accessBoundary.accessBoundaryRules[].availabilityCondition.expression
string
A condition
expression that specifies the Cloud Storage objects where
permissions are available.
To learn how to refer to specific objects in a condition expression, see resource.name
attribute and api.getAttribute("storage.googleapis.com/objectListPrefix") attribute .
Note: If any of your applications
list
Cloud Storage objects and use the prefix
parameter to filter the response, you must take extra steps to prevent
a conflict between the IAM condition expression and
the Cloud Storage filter. For details, see
Limit permissions when listing
objects on this page.
accessBoundary.accessBoundaryRules[].availabilityCondition.title
string
Optional. A short string that identifies the purpose of the condition.
accessBoundary.accessBoundaryRules[].availabilityCondition.description
string
Optional. Details about the purpose of the condition.
For examples in JSON format, see
Examples of Credential Access Boundaries on this page.
Examples of Credential Access Boundaries
The following sections show examples of Credential Access Boundaries for common
use cases. You use the Credential Access Boundary when you
exchange an OAuth 2.0 access token for a downscoped token .
Limit permissions for a bucket
The following example shows a simple Credential Access Boundary. It applies to
the Cloud Storage bucket example-bucket , and it sets the upper bound to
the permissions included in the Storage Object Viewer role
( roles/storage.objectViewer ):
{
"accessBoundary" : {
"accessBoundaryRules" : [
{
"availablePermissions" : [
"inRole:roles/storage.objectViewer"
],
"availableResource" : "//storage.googleapis.com/projects/_/buckets/example-bucket"
}
]
}
}
Limit permissions for multiple buckets
The following example shows a Credential Access Boundary that includes rules for
multiple buckets:
The Cloud Storage bucket example-bucket-1 : For this bucket, only the
permissions in the Storage Object Viewer role ( roles/storage.objectViewer ) are
available.
The Cloud Storage bucket example-bucket-2 : For this bucket, only the
permissions in the Storage Object Creator role ( roles/storage.objectCreator )
are available.
{
"accessBoundary" : {
"accessBoundaryRules" : [
{
"availablePermissions" : [
"inRole:roles/storage.objectViewer"
],
"availableResource" : "//storage.googleapis.com/projects/_/buckets/example-bucket-1"
},
{
"availablePermissions" : [
"inRole:roles/storage.objectCreator"
],
"availableResource" : "//storage.googleapis.com/projects/_/buckets/example-bucket-2"
}
]
}
}
Limit permissions for specific objects
You can also use IAM Conditions to specify
which Cloud Storage objects a principal can access. For example, you can
add a condition that makes permissions available for objects whose name starts
with customer-a :
{
"accessBoundary" : {
"accessBoundaryRules" : [
{
"availablePermissions" : [
"inRole:roles/storage.objectViewer"
],
"availableResource" : "//storage.googleapis.com/projects/_/buckets/example-bucket" ,
"availabilityCondition" : {
"expression" : "resource.name.startsWith('projects/_/buckets/example-bucket/objects/customer-a')"
}
}
]
}
}
Limit permissions when listing objects
When you list the objects in a Cloud Storage bucket , you
are calling a method on a bucket resource, not an object resource. As a result,
if a condition is evaluated for a list request, and the condition refers to the
resource name , then the resource name identifies the bucket,
not an object within the bucket. For example, when you list objects in
example-bucket , the resource name is projects/_/buckets/example-bucket .
This naming convention can lead to unexpected behavior when you list objects.
For example, suppose you want a Credential Access Boundary that allows view
access to objects in example-bucket with the prefix customer-a/invoices/ .
You might try to use the following condition in the Credential Access Boundary:
Incomplete: Condition that checks only the resource
name
resource.name.startsWith('projects/_/buckets/example-bucket/objects/customer-a/invoices/')
This condition works for reading objects, but not for listing objects:
When a principal tries to read an object in example-bucket with the prefix
customer-a/invoices/ , the condition evaluates to true .
When a principal tries to list objects with that prefix, the condition
evaluates to false . The value of resource.name is
projects/_/buckets/example-bucket , which does not start with
projects/_/buckets/example-bucket/objects/customer-a/invoices/ .
To prevent this issue, in addition to using resource.name.startsWith() , your
condition can check an API attribute named
storage.googleapis.com/objectListPrefix . This attribute contains the value of
the prefix parameter that was used to filter the list of objects. As a result,
you can write a condition that refers to the value of the prefix parameter.
Warning: API attributes for Cloud Storage are supported only in Credential Access Boundaries. If you use Cloud Storage API attributes in a conditional role binding, then Cloud Storage methods will work incorrectly and fail unexpectedly. In addition, it might take longer to check IAM permissions when you access Cloud Storage.
The following example shows how to use the API attribute in a condition. It
allows reading and listing objects in example-bucket with the prefix
customer-a/invoices/ :
Complete: Condition that checks the resource name and
the prefix
resource.name.startsWith('projects/_/buckets/example-bucket/objects/customer-a/invoices/') ||
api.getAttribute('storage.googleapis.com/objectListPrefix', '')
.startsWith('customer-a/invoices/')
You can now use this condition in a Credential Access Boundary:
{
"accessBoundary" : {
"accessBoundaryRules" : [
{
"availablePermissions" : [
"inRole:roles/storage.objectViewer"
],
"availableResource" : "//storage.googleapis.com/projects/_/buckets/example-bucket" ,
"availabilityCondition" : {
"expression" :
"resource.name.startsWith('projects/_/buckets/example-bucket/objects/customer-a/invoices/') || api.getAttribute('storage.googleapis.com/objectListPrefix', '').startsWith('customer-a/invoices/')"
}
}
]
}
}
What's next
Learn how to create a downscoped short-lived credential .
Learn about access control for Cloud Storage .
See the permissions in each predefined role .
Learn about custom roles .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
