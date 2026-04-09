---
title: "Credential Access Boundaries overview \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/downscoping-short-lived-credentials
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/downscoping-short-lived-credentials
  title: "Credential Access Boundaries overview \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Credential Access Boundaries overview | Identity and Access Management (IAM) | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
IAM
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Get started
Grant roles in the Google Cloud console
Grant roles using client libraries
IAM and your security architecture
Identity management for Google Cloud
Configure identities for users
Identities for users
Create and manage Google groups in the Google Cloud console
Best practices for using Google groups
Federate identities for users
Workforce identity federation
SCIM provisioning for Workforce Identity Federation
Configure Workforce Identity Federation
Microsoft Entra ID
Microsoft Entra ID with a large number of groups
Okta
Other OIDC or SAML 2.0
Access BigQuery data in Power BI with Microsoft Entra
Configure SCIM
Microsoft Entra ID
Okta
OIDC or SAML 2.0
Obtain short-lived credentials for Workforce Identity Federation
Manage workforce identity pools and providers
Delete Workforce Identity Federation users and their data
Set up user access to console (federated)
Sign in to the gcloud CLI with your federated identity
Integrate OAuth applications
OAuth application integration overview
Manage OAuth applications
Configure identities for workloads
Identities for workloads
Create and manage service accounts
About service accounts
Service accounts
Service account credentials
Service account impersonation
Service account types
Roles for service account authentication
Create and grant roles to service agents
Create service accounts
Manage service accounts
List and edit service accounts
Disable and enable service accounts
Delete and undelete service accounts
Manage tags for service accounts
Attach service accounts to resources
Use custom organization policies for service accounts and keys
Service account best practices
Best practices for using service accounts
Best practices for using service accounts in deployment pipelines
Use managed workload identities
About managed workload identities
Compute Engine
Create managed workload identities for GCE
GKE
Create managed workload identities for GKE
Troubleshoot managed workload identities for GKE
Use custom organization policies
Federate identities for external workloads
Workload Identity Federation
Configure Workload Identity Federation
AWS or Azure
Active Directory
Deployment pipelines
Kubernetes
Workloads with X.509 certificates
Other identity providers
Authenticate workloads using Google auth libraries
Manage workload identity pools and providers
Best practices for using Workload Identity Federation
Let customers access their Google Cloud resources from your product or service
Download credential configuration and grant access
Integrate Cloud Run and Workload Identity Federation
Use custom organization policies
Create and manage service account keys
Migrate from service account keys
Service account key rotation
Create and delete service account keys
List and get service account keys
Upload a public key
Disable and enable service account keys
Best practices for managing service account keys
Built-in identities for resources
Control access to resources
About IAM access controls
Roles and permissions
Principals
Policy types
Allow policies
Allow policy inheritance
Deny policies
Principal access boundary policies
Access change propagation
IAM Conditions
Choose roles to grant
Choose which type of role to use
Find the right predefined roles
Get predefined role suggestions with Gemini assistance
View grantable roles
Roles for specific job functions
Predefined roles for job functions
Billing-related job functions
Networking-related job functions
Auditing-related job functions
Create and manage custom roles
Create and manage custom roles
Manage tags for custom roles
Use Deployment Manager to maintain custom roles
Grant access
Manage access to projects, folders, and organizations
Manage access to service accounts
Manage access to other resources
Test allow policy changes
Grant access conditionally
Manage conditional role bindings
Configure temporary access
Configure resource-based access
Tags and conditional access
Set limits on granting roles
Lint conditions in allow policies
Deny access
Restrict the resources that a principal can access
Create and apply principal access boundary policies
View principal access boundary policies
Edit principal access boundary policies
Remove principal access boundary policies
Temporary elevated access
Temporary elevated access overview
Control temporary elevated access with PAM
PAM overview
Permissions and setup
Create entitlements
View, update, and delete entitlements
Configure PAM settings
View and export PAM settings
View grants
Revoke grants
Audit entitlement and grant events
Best practices for PAM
Request temporary elevated access with PAM
Withdraw grants
Approve or deny grants with PAM
Create short-lived credentials for a service account
Create short-lived credentials for multiple service accounts
Restrict a credential's Cloud Storage permissions
Credential Access Boundaries overview
Create a downscoped short-lived credential
Migrate to the Service Account Credentials API
Test permissions for custom user interfaces
Use custom organization policies for allow policies
Use IAM to help prevent exfiltration from data pipelines
Optimize your IAM configuration
Use IAM securely
Optimize IAM policies by using Policy Intelligence tools
Help secure IAM using VPC Service Controls
Monitor
Audit logging
IAM API audit logging
IAM SCIM audit logging
Service Account Credentials API audit logging
Privileged Access Manager audit logging
Security Token Service API audit logging
Example logs for service accounts
Example logs for Workforce Identity Federation
Example logs for Workforce OAuth application integration
Example logs for Workload Identity Federation
Analyze access to resources
Monitor service account usage
Tools to understand service account usage
Monitor usage patterns for service accounts and keys
Review allow policy history
Review security insights
Troubleshoot
Troubleshoot permission error messages
Permission error messages
Request missing permissions
Resolve permission errors
Troubleshoot allow and deny policies
Troubleshoot organization policy errors for service accounts
Troubleshoot "withcond" in policies and role bindings
Troubleshoot Workforce Identity Federation
Troubleshoot Workload Identity Federation
Samples
All Identity and Access Management code samples
Code samples for all products
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
How Credential Access Boundaries work Components of a Credential Access Boundary
Examples of Credential Access Boundaries Limit permissions for a bucket
Limit permissions for multiple buckets
Limit permissions for specific objects
Limit permissions when listing objects
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Credential Access Boundaries overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
How Credential Access Boundaries work Components of a Credential Access Boundary
Examples of Credential Access Boundaries Limit permissions for a bucket
Limit permissions for multiple buckets
Limit permissions for specific objects
Limit permissions when listing objects
What's next
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
access Boundary
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
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
