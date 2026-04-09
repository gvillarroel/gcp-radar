---
title: "Troubleshooting \"withcond\" in policies and role bindings \_|\_ Identity\
  \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/troubleshooting-withcond
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/troubleshooting-withcond
  title: "Troubleshooting \"withcond\" in policies and role bindings \_|\_ Identity\
    \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshooting "withcond" in policies and role bindings | Identity and Access Management (IAM) | Google Cloud Documentation
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
Policy versions and conditional role bindings
Solution: Specify policy version 3 Update the gcloud tool
Update client libraries
Update REST API calls
Update management tools for policies
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Troubleshooting "withcond" in policies and role bindings
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Policy versions and conditional role bindings
Solution: Specify policy version 3 Update the gcloud tool
Update client libraries
Update REST API calls
Update management tools for policies
What's next
When you view an allow policy , you might see role names that include
the string withcond , followed by a hash value. For example, you might see a
role name like roles/iam.serviceAccountAdmin_withcond_2b17cc25d2cd9e2c54d8 .
This page explains when and why you might see the string withcond in an allow
policy. It also recommends actions you should take if you see this string.
Policy versions and conditional role bindings
An allow policy can be represented in several different forms. Each form is
known as an allow policy version .
In an allow policy that uses version 1 , some role bindings might contain the
string withcond in a role name, followed by a hash value:
See more code actions.
Light code theme
Dark code theme
{
"bindings" : [
{
"members" : [
"user:dana@example.com"
],
"role" : "roles/iam.serviceAccountAdmin_withcond_2b17cc25d2cd9e2c54d8"
}
],
"etag" : "BwUjMhCsNvY=" ,
"version" : 1
}
This format indicates that the role binding is
conditional . In other words, the role is granted
only if specific conditions are met.
Version 1 allow policies don't show these conditions. If you see the string
withcond and a hash value, then the role binding includes a condition that you
cannot see.
Solution: Specify policy version 3
To ensure that you can view and update the entire allow policy, including its
conditions, you must always specify version 3 when you
get or set an allow policy. To specify version 3 ,
complete the tasks in the following sections.
Update the gcloud tool
If you use the Google Cloud CLI, run gcloud version to check its version
number. The output includes a string similar to Google Cloud CLI 279.0.0 .
If the version number is less than 263.0.0, run
gcloud components update to update the gcloud CLI. In version
263.0.0 and later, the gcloud CLI
automatically specifies an allow policy version that supports conditions.
Update client libraries
If your application uses a client library, follow these steps:
Find the name and version number for the client library, then check the list
of
client libraries that support allow policy versions .
If you already use a recent version of the client library, and it supports
allow policy versions, you don't need to update your client library.
Continue to the next step.
If you use an older version of the client library, and a later version
supports allow policy versions, update your client library to the latest
version.
If you use a client library that does not support allow policy versions,
you can add another client library that supports allow policy versions to
your application. Use that client library to work with allow policies.
Alternatively, you can use the
IAM REST API directly.
Update any code in your application that gets and sets allow policies:
When you get an allow policy, always
specify version 3 in the request.
When you set an allow policy, always
set the version field of the allow policy to 3 ,
and include the etag field in your request.
Important: If you omit the etag field, IAM allows you
to overwrite the old allow policy with the new allow policy, even if this
action causes data loss.
Update REST API calls
If your application uses the IAM REST API
directly, update any code that gets and sets allow policies:
When you get an allow policy, always
specify version 3 in the request.
When you set an allow policy, always
set the version field of the allow policy to 3 ,
and include the etag field in your request.
Important: If you omit the etag field, IAM allows you
to overwrite the old allow policy with the new allow policy, even if this
action causes data loss.
Update management tools for policies
If you keep local copies of your allow policies—for example, if you store them
in a version control system and treat them as code—make sure that all of the
tools you use meet these criteria:
All requests to get or set an allow policy specify version
3
All requests to set an allow policy include the etag field in the request
If a tool does not meet these criteria, check for an updated version of the
tool.
Also, make sure your management tools preserve conditional role grants, rather
than adding a duplicate role grant that does not include a condition. For
example, consider the following scenario:
You grant the Create Service Accounts role
( roles/iam.serviceAccountCreator ) to the user Mahan on the
folder my-folder . The allow policy for the folder looks similar to this
example:
{
"bindings" : [
{
"members" : [
"user:mahan@example.com"
],
"role" : "roles/iam.serviceAccountCreator"
}
],
"etag" : "BuFmmMhCsNY=" ,
"version" : 1
}
You use a tool to retrieve the allow policy and store it in a version
control system.
You add a condition so that Mahan can create service accounts only during
the normal work week, based on the date and time in Berlin, Germany. The
updated allow policy looks similar to this example:
{
"bindings" : [
{
"members" : [
"user:mahan@example.com"
],
"role" : "roles/iam.serviceAccountCreator" ,
"condition" : {
"title" : "work_week_only" ,
"expression" : "request.time.getDayOfWeek('Europe/Berlin') >= 1 && request.time.getDayOfWeek('Europe/Berlin') <= 5"
}
}
],
"etag" : "BwWcR/B3tNk=" ,
"version" : 3
}
You use a tool to retrieve the updated allow policy. The tool does not
specify an allow policy version when it requests the allow policy, so you
receive a version 1 allow policy with a modified role name:
{
"bindings" : [
{
"members" : [
"user:mahan@example.com"
],
"role" : "roles/iam.serviceAccountCreator_withcond_a75dc089e6fa084bd379"
}
],
"etag" : "BwWcR/B3tNk=" ,
"version" : 1
}
At this point, the management tool might decide that the binding from Mahan to
the role roles/iam.serviceAccountCreator has disappeared, and that it should
restore the original role binding to the allow policy:
Avoid: Additional role binding with no condition
{
"bindings" : [
{
"members" : [
"user:mahan@example.com"
],
"role" : "roles/iam.serviceAccountCreator_withcond_a75dc089e6fa084bd379"
},
{
"members" : [
"user:mahan@example.com"
],
"role" : "roles/iam.serviceAccountCreator"
}
],
"etag" : "BwWd3HjhKxE=" ,
"version" : 1
}
This change is not correct. It grants the role
roles/iam.serviceAccountCreator to Mahan regardless of the day of the week. As
a result, the condition in the first role binding has no effect.
If your management tools try to make this type of change, don't approve the
change. Instead, you must update your management tools to specify version
3 in requests.
What's next
Learn more about allow policies .
Find out how to specify an allow policy version when you
get an allow policy or set an allow policy .
Understand how to grant access conditionally with
IAM Conditions .
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
