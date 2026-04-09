---
title: "IAM roles for auditing-related job functions \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/job-functions/auditing
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/job-functions/auditing
  title: "IAM roles for auditing-related job functions \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

IAM roles for auditing-related job functions | Identity and Access Management (IAM) | Google Cloud Documentation
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
Scenario: Operational monitoring
Scenario: Development teams monitoring their audit logs
Scenario: External auditors
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
IAM roles for auditing-related job functions
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Scenario: Operational monitoring
Scenario: Development teams monitoring their audit logs
Scenario: External auditors
Note: Identity and Access Management (IAM) offers predefined roles that are tailored to specific job
functions. If you want to give a user the necessary permissions to perform a specific job
function in your organization, consider granting one of these predefined roles. To determine if
IAM offers a predefined role for your use case, see Predefined roles for job functions .
This topic describes how to configure Identity and Access Management permissions for a set of
sample auditing scenarios. It provides guidance on which IAM
roles to grant to the auditing-related functional roles in your company for each
scenarios. The examples in this topic are mainly targeted at security
administrators, auditors, and employees who manage auditing tasks for an
organization.
To learn about audit logs for Google Cloud, see
Cloud Audit Logs . To learn about the audit logs that
IAM generates, see
IAM audit logging for service accounts .
Scenario: Operational monitoring
In this scenario, an organization has a central security team that has the
ability to review logs that may contain sensitive information both in
Cloud Logging and when stored in long-term storage.
Historical audit data is stored in Cloud Storage. The organization uses an
application to provide access to the historical audit data. The application uses
a service account to access the log data. Due to the sensitivity of some of the
audit log data, it is redacted using Sensitive Data Protection before being made
accessible for viewing.
The table below explains the IAM roles that need to be
granted to the CTO, security team, and service account, as well as the resource
level at which the roles are granted.
Role
Resource
Principal
Description
resourcemanager.organizationAdmin
Organization
CTO
The resourcemanager.organizationAdmin role gives the CTO the ability to assign permissions to the security team and service account.
logging.viewer
Organization
Security team
The logging.viewer role gives the security admin team the ability to view the Admin Activity logs.
logging.privateLogViewer
Organization
Security team
The logging.privateLogViewer role gives the ability to view the Data Access logs.
Once log entries have been exported, access to the exported copies is controlled
entirely by IAM permissions and roles on any of the
destinations: Cloud Storage, BigQuery, or
Pub/Sub. In this scenario, Cloud Storage is the destination
for long term storage of audit logs.
Role
Resource
Principal
Description
logging.viewer
Organization
Service account
The logging.viewer role permits the service account to read the Admin Activity logs in Cloud Logging.
Data in the Data Access logs is deemed as personally identifiable information
(PII) for this organization. Integrating the application with
Sensitive Data Protection gives the ability to redact sensitive PII data
when viewing Data Access logs whether they are in the Data Access logs or from
the historical archive in Cloud Storage.
Role
Resource
Principal
Description
storage.objectViewer
Bucket
Service account
The storage.objectViewer role permits the service account to read the exported Admin Activity logs.
The allow policy bound to the organization resource for this scenario will look
similar to the following:
{
"bindings" : [{
"role" : "roles/resourcemanager.organizationAdmin" ,
"members" : [
"user:cto@example.com"
]
},
{
"role" : "roles/logging.viewer" ,
"members" : [
"group:security-team@example.com" ,
"serviceAccount:prod-logviewer@admin-resources.iam.gserviceaccount.com"
]
},
{
"role" : "roles/logging.privateLogViewer" ,
"members" : [
"group:security-team@example.com"
]
}
]
}
The allow policy bound at the bucket configured as the destination sink for this
scenario will look similar to the following:
{
"bindings" : [{
"role" : "roles/storage.objectViewer" ,
"members" : [
"serviceAccount:prod-logviewer@admin-resources.iam.gserviceaccount.com"
]
}]
}
Scenario: Development teams monitoring their audit logs
In this scenario, the organization's developers need to look at audit logs
generated while developing their applications. They are not permitted to review
production logs unless they have been redacted using Sensitive Data Protection. A
dashboard application is available to the developers that provides view-only
access to exported production data. The organization's security team has access
to all logs both in production and in the development environment.
The table below explains the IAM roles that need to be
granted to the security team, developers, and service account, as well as the
resource level at which the roles are granted.
Role
Resource
Principal
Description
logging.viewer
Organization
Security team
The logging.viewer role gives the security admin team the ability to view the Admin Activity logs.
logging.privateLogViewer
Organization
Security team
The logging.privateLogViewer role gives the ability to view the Data Access logs.
logging.viewer
Folder
Developer team
The logging.viewer role gives the developer team the ability to view the Admin Activity logs generated by the developer projects contained in a folder where all developer projects are located.
logging.privateLogViewer
Folder
Developer team
The logging.privateLogViewer role gives the ability to view the Data Access logs.
Access to the exported copies is controlled
entirely by IAM permissions and roles on any of the
destinations: Cloud Storage, BigQuery, or
Pub/Sub. In this scenario, BigQuery is the destination
for storage of audit logs.
Role
Resource
Principal
Description
bigquery.dataViewer
BigQuery dataset
Dashboard service account
The bigquery.dataViewer role permits the service account used by the dashboard application to read the exported Admin Activity logs.
The allow policy bound to the development team's folder resource for this
scenario will look similar to the following:
{
"bindings" : [{
"role" : "roles/logging.viewer" ,
"members" : [
"group:developer-team@example.com"
]
},
{
"role" : "roles/logging.privateLogViewer" ,
"members" : [
"group:developer-team@example.com"
]
}]
}
The allow policy bound to the organization resource for this scenario will look
similar to the following:
{
"bindings" : [{
"role" : "roles/logging.viewer" ,
"members" : [
"group:security-team@example.com"
]
},
{
"role" : "roles/logging.privateLogViewer" ,
"members" : [
"group:security-team@example.com"
]
}]
}
The allow policy bound at the BigQuery dataset that is configured
as the destination sink for this scenario will look similar to the following:
{
"bindings" : [{
"role" : "roles/bigquery.dataViewer" ,
"members" : [
"serviceAccount:prod-project-dashboard@admin-resources.iam.gserviceaccount.com"
]
}]
}
Scenario: External auditors
In this scenario, audit logs for an organization are aggregated and exported to
a central sink location. A third-party auditor is granted access several times a
year to review the organization's audit logs. The auditor is not authorized to
view PII data in the Admin Activity logs. To comply with this requirement, a
dashboard is available that provides access to the historic logs stored in
BigQuery, and on request, to the Cloud Logging Admin Activity
logs.
The organization creates a group for these external auditors and adds the
current auditor to the group. This group is monitored and is typically granted
access to the dashboard application.
During normal access, the auditors' group is only granted access to view
the historic logs stored in BigQuery. If any anomalies are
discovered, the group is granted permission to view the actual Cloud Logging
Admin Activity logs via the dashboard's elevated access mode. At the end of each
audit period, the group's access is then revoked.
Data is redacted using Sensitive Data Protection before being made accessible for
viewing via the dashboard application.
The table below explains IAM logging roles that an
Organization Administrator can grant to the service account used by the
dashboard, as well as the resource level at which the role is granted.
Role
Resource
Principal
Description
logging.viewer
Organization
Dashboard service account
The logging.viewer role permits the service account to read the Admin Activity logs in Cloud Logging.
bigquery.dataViewer
BigQuery dataset
Dashboard service account
The bigquery.dataViewer role permits the service account used by the dashboard application to read the exported Admin Activity logs.
The allow policy bound to the Organization resource for this scenario will look
similar to the following:
{
"bindings" : [{
"role" : "roles/logging.viewer" ,
"members" : [
"serviceAccount:prod-project-dashboard@admin-resources.iam.gserviceaccount.com"
]
}]
}
The allow policy bound at the BigQuery dataset that is configured
as the destination sink for this scenario will look similar to the following:
{
"bindings" : [{
"role" : "roles/bigquery.dataViewer" ,
"members" : [
"serviceAccount:prod-project-dashboard@admin-resources.iam.gserviceaccount.com"
]
}]
}
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
