---
title: "Tags and conditional access \_|\_ Identity and Access Management (IAM) \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/tags-access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/tags-access-control
  title: "Tags and conditional access \_|\_ Identity and Access Management (IAM) \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Tags and conditional access | Identity and Access Management (IAM) | Google Cloud Documentation
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
Overview of tags
Tag definitions and identifiers
Access to tagged resources Conditions that use permanent IDs
Conditions that use namespaced names and short names
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Tags and conditional access
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Overview of tags
Tag definitions and identifiers
Access to tagged resources Conditions that use permanent IDs
Conditions that use namespaced names and short names
What's next
This page describes how to use tags with Identity and Access Management (IAM) to help you
control access to your Google Cloud resources.
To learn more about tags, see Tags overview .
Overview of tags
A tag is a key-value pair that is attached to a
Google Cloud resource . You can
conditionally grant IAM roles or
conditionally deny IAM permissions based on
whether a resource has a specific tag.
Resources inherit tag values from their parent organization,
folders, and project. As a result, you can use tags to manage access to any
Google Cloud resource.
These are some common use cases for managing access with tags:
Development, staging, and production environments. For example, you could
add the tags environment: dev to your development environment and
environment: prod to your production environment.
Component types. For example, you could add the tags component: frontend
to front-end resources and component: batch to resources for batch
processing.
Project names. For example, if your team is working on a project with the
codename Atlas, you could add the tag project: atlas to the team's
development resources.
Important: Do not include sensitive information in tags. Sensitive information includes
personally identifiable information (PII), such as an individual's name or job title. Tags are not
intended to contain sensitive information.
Tag definitions and identifiers
Before you attach tags to resources, you must define the key for the tag, as
well as the values that the tag allows. You can create these definitions at
the organization or project level. You use Resource Manager to
manage tag definitions. To learn more, see
Creating and defining a new tag .
Each tag key and value has a few different identifiers:
A permanent ID , which is globally unique and can never be reused. For example, a tag
key could have the permanent ID tagKeys/123456789012 , and a tag value could have
the permanent ID tagValues/567890123456 .
A short name . The short name for each key must be unique within the project or
organization under which the key is defined, and the short name for each value must be unique
for its associated key. For example, a tag key could have the short name env , and
a tag value could have the short name prod .
A namespaced name , which adds your organization's numeric ID or project's ID to the
short name of a tag key. For example, a tag key created for an organization could have the
namespaced name 123456789012/env . To learn how to get your organization ID, see
Getting
your organization resource ID . A tag key created for a project could have the namespaced
name myproject/env . To learn how to get your project ID, see
Identifying
projects .
As explained on this page, after you attach tags to a resource, you can
write conditions to grant access based on tags . To write a
condition, you must choose which type of identifier to use in the condition.
Follow these guidelines to choose between them:
To experiment with tags, consider using the namespaced name (for keys) and
the short name (for values). These identifiers are easier to understand and
remember, especially as you get started.
If you manage your configuration declaratively, using a tool such as
Terraform, consider using the namespaced name (for keys) and the short name
(for values). You can reuse these identifiers over time, which means that a
declarative tool can delete and recreate them, and your conditions will
continue to work.
This approach comes with a tradeoff: Suppose you delete a tag key or value,
then create a new key or value with the same name but a different meaning.
If your condition refers to the namespaced name or short name, then the
condition continues to apply to the new key or value.
In some cases, this behavior might cause principals to get access that you
did not intend for them to have.
To help minimize risk, consider using permanent IDs, which can never be
reused.
Here's why permanent IDs help minimize risk: Suppose you delete a tag key or
value, then create a new key or value with the same name but a different
meaning. If your condition refers to the permanent ID, then the condition
does not apply to the new key or value. As a result, principals are less
likely to get access that you did not intend for them to have.
One drawback is that if you delete and recreate keys and values, and you
want to preserve principals' access, you must also update your allow
policies to refer to the new permanent IDs.
Access to tagged resources
You can use tags with IAM Conditions to grant a role
conditionally, depending on the tags that are attached to or inherited by a
resource. If a condition evaluates to true , then access is granted; otherwise,
access is not granted. To learn more, see the
overview of IAM Conditions .
Certain
areas of the Google Cloud console don't recognize allow policy role bindings
with tag-based conditions. As a result, if you have a role with a tag-based
condition, then the Google Cloud console might incorrectly prevent you from
performing certain actions. If you encounter this issue, then use an alternate
method, such as the gcloud CLI, to perform the action.
The following sections show examples of condition expressions that check the
tags on a resource. The condition calls different functions depending on whether
it checks the permanent ID or the short name. To learn more about these
functions, see Resource tags .
Conditions that use permanent IDs
This condition grants a role on resources with the tag
tagKeys/123456789012: tagValues/567890123456 :
resource.matchTagId('tagKeys/123456789012', 'tagValues/567890123456')
This condition grants a role on resources that have any tag with the key
tagKeys/123456789012 , regardless of its value:
resource.hasTagKeyId('tagKeys/123456789012')
This condition grants a role on resources that have both the tag
tagKeys/123456789012: tagValues/567890123456 , and any tag that uses the
key tagKeys/987654321098 :
resource.matchTagId('tagKeys/123456789012', 'tagValues/567890123456') &&
resource.hasTagKeyId('tagKeys/987654321098')
Conditions that use namespaced names and short names
This condition grants a role on resources with the tag env: prod , indicating
that the resource is in a production environment:
resource.matchTag('123456789012/env', 'prod')
This condition grants a role on resources that have any tag with the key env ,
regardless of its value:
resource.hasTagKey('123456789012/env')
This condition grants a role on resources that have both the tag env: prod and
any tag that uses the key project :
resource.matchTag('123456789012/env', 'prod') &&
resource.hasTagKey('123456789012/project')
What's next
Learn how to
manage tags and attach tags to resources .
Get details about checking tags in a condition .
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
