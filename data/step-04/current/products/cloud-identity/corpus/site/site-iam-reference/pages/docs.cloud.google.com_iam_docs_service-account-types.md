---
title: "Types of service accounts \_|\_ Identity and Access Management (IAM) \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/service-account-types
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/service-account-types
  title: "Types of service accounts \_|\_ Identity and Access Management (IAM) \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Types of service accounts | Identity and Access Management (IAM) | Google Cloud Documentation
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
User-managed service accounts Default service accounts
Service agents Service-specific service agents
Google APIs Service Agent
Role manager for service agents
Service agent creation
IAM roles for service agents Primary service agents
Service agent audit logs
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Types of service accounts
Stay organized with collections
Save and categorize content based on your preferences.
On this page
User-managed service accounts Default service accounts
Service agents Service-specific service agents
Google APIs Service Agent
Role manager for service agents
Service agent creation
IAM roles for service agents Primary service agents
Service agent audit logs
What's next
Service accounts can be divided into the
following categories:
User-managed service accounts , which you create and manage yourself
Service agents , which Google Cloud creates and manages
This page describes how each type of service account is created and used.
User-managed service accounts
User-managed service accounts are service accounts that you create in your
projects. You can update, disable, enable, and delete these service accounts at
your discretion. You can also manage other principals' access to these service
accounts.
You can create user-managed service accounts in your project using the
IAM API, the Google Cloud console, or the Google Cloud CLI.
The number of service accounts that you can have in each project depends on your
project. To view the quota for a project, view your project's quotas in the
Google Cloud console and search for Service Account Count .
When you create a user-managed service account in your project, you choose a
name for the service account. This name appears in the email address that
identifies the service account, which uses the following format:
service-account-name @ project-id .iam.gserviceaccount.com
To learn how to create a service account, see Create service accounts .
Default service accounts
Default service accounts are user-managed service accounts that are created
automatically when you enable or use certain Google Cloud services. These
service accounts let the service deploy jobs that access other
Google Cloud resources. You are responsible for managing default service
accounts after they are created.
If your application runs in a Google Cloud environment that has
a default service account, your application can use the credentials for the
default service account to call Google Cloud APIs. Alternatively, you can
create your own user-managed service account and use it to authenticate. For
details, see Set up Application Default Credentials .
Depending on your organization policy configuration, the default service account might
automatically be granted the Editor role on your
project. We strongly recommend that you disable the automatic role grant by
enforcing the iam.automaticIamGrantsForDefaultServiceAccounts organization policy
constraint . If you created your organization after May 3, 2024, this
constraint is enforced by default.
If you disable the automatic role grant, you must decide which roles to grant to the default
service accounts, and then grant these
roles yourself.
If the default service account already has the Editor role, we recommend that you replace the
Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of
the change, and then grant and revoke the
appropriate roles .
Note: If you are replacing a role binding that has existed for more than
90 days, role recommendations
can help you determine which roles to grant instead. You can also use the
Policy Simulator to help ensure that changing the role won't
affect the service account's access.
The following table lists the services that create default service accounts:
Service
Service account name
Email address
App Engine, and any Google Cloud service that uses
App Engine
App Engine default service account
project-id @appspot.gserviceaccount.com
Compute Engine, and any Google Cloud service that uses
Compute Engine
Compute Engine default service account
project-number -compute@developer.gserviceaccount.com
Note: Both the creation time and the email address format for default service accounts are subject to change.
Service agents
Some Google Cloud services need access to your resources so that they can
act on your behalf. For example, when you use Cloud Run to run a
container, the service needs access to any Pub/Sub topics that can
trigger the container.
To meet this need, Google Cloud creates and manages service accounts for
many Google Cloud services. These service accounts are known as service
agents . You might see service agents in your project's allow policy, in audit
logs, or on the IAM page in the Google Cloud console. For a
full list of service agents, see Service agents .
Service agents aren't created in your projects, so you won't see them when
viewing your projects' service accounts. You can't access them directly.
By default, service agents aren't listed in the IAM page in the
Google Cloud console, even if they've been granted a role on your project. To
view role grants for service agents, select the Include Google-provided role
grants checkbox.
Note: Both the creation time and the email address format for service agents are subject to change.
Google Cloud has the following types of service agents:
Service-specific service agents
Google APIs Service Agent
Role manager for service agents
Service-specific service agents
Most service agents are service-specific —they act on behalf of
individual services. In many cases, these service agents are required for
services to function properly. For example, service agents are what allow
Cloud Logging sinks to write logs to Cloud Storage buckets.
Each service agent is associated with a resource. This resource is typically a
project, folder, or organization, though it can also be a service-specific
resource—for example, a Cloud SQL instance. This resource defines the
scope of the service agent's actions. For example, if a service agent is
associated with a project, it will act on behalf of a service for the project
and its descendant resources.
You can determine which type of resource a service agent is associated with by
looking at its email address:
If the service agent is associated with a project, folder, or organization,
its email address contains the numeric ID for that project, folder, or
organization.
If the service agent is associated with a service-specific resource, its email
address contains a numeric project ID and a unique identifier. The numeric
project ID indicates which project owns the resource that the service agent is
associated with. The unique identifier distinguishes the service agent from
other similar service agents in the same project.
Google APIs Service Agent
Your project's allow policy is likely to refer to a service account named the
Google APIs Service Agent, with an email address that uses the following format:
project-number @cloudservices.gserviceaccount.com .
This service account runs internal Google Cloud processes on your behalf.
It is automatically granted the Editor role ( roles/editor ) on the project.
Warning: Unless a role recommendation suggests it, don't
revoke the roles that are granted to the Google APIs Service Agent. If you
revoke these roles in a way that is not suggested by a role recommendation,
some Google Cloud services will no longer work.
Role manager for service agents
Your audit logs for IAM might refer to the service
account service-agent-manager@system.gserviceaccount.com .
This service account manages the roles that are granted to other service agents.
It is visible only in audit logs.
For example, if you use a new API, Google Cloud might automatically create
a new service agent and grant it roles on your project. Granting these roles
generates an audit log entry, which shows that service-agent-manager@system.gserviceaccount.com set the
allow policy for the project.
Service agent creation
The exact time that a service agent is created depends on what type of resource
it's associated with.
Service agents that are associated with a service-specific resource are created
when you create the resource. For more information on how to identify and
configure these service agents, review the documentation for the associated
resource.
Service agents that are associated with projects, folders, and organizations are
created as you need them, usually when you first use a service. If necessary,
you can also ask Google Cloud to create service agents for a service
before you use the service. For more information, see Create and grant roles to
service agents .
Note: If multiple service agents are created at the same time, then you might
get a concurrent policy change error while the Service Agent
Manager tries to grant roles to the service agents. No
action is required to resolve this error—the Service Agent Manager
automatically retries the action until all service agents have the correct
roles.
IAM roles for service agents
Some actions in Google Cloud require service agents to create and access
resources on your behalf. For example, when you create a Dataproc
cluster, the Dataproc service agent needs permission to create
Compute Engine instances in your project in order to create the cluster.
To get this access, service agents need specific IAM roles. Many
project-level service agents are automatically granted the roles that they need.
The names of these automatically granted roles typically end in serviceAgent
or ServiceAgent . For other service agents, you need to grant them roles so
that the service works correctly. To find out which service agents are granted
roles automatically, see the service agent reference .
If you need to deny certain permissions to principal sets that include
service agents—for example, the principal set
principalSet://goog/public:all —then we recommend adding your service
agents as exceptions in the deny rule. This helps ensure that your services
continue to function properly.
When adding service agents as exceptions, use the
project, folder, or organization's service agent principal
set .
Warning: Unless a role recommendation suggests it, don't revoke
the roles that are granted to service agents. If you revoke these roles in a way
that is not suggested by a role recommendation, some Google Cloud services
will no longer work. To ensure that these roles aren't revoked, you can implement a custom organization policy that prevents users from revoking service agent roles .
If you ask Google Cloud to create service agents before you use a service,
you must grant the service agents the roles that they are typically granted
automatically. This is because service agents that are created at a user's
request aren't automatically granted roles. If you don't grant the service
agents these roles, some services might not function properly. To learn how to
grant these roles to service agents, see Create and grant roles to service
agents .
Primary service agents
In the service agent reference , some service agents are
identified as primary service agents . Primary service agents are service
agents whose email address is returned when you trigger service agent
creation for a service.
Service agent audit logs
Sometimes, when a principal initiates an operation, a service agent executes an action
on the principal's behalf. However, when you're reviewing audit logs for a service agent, it can
be hard to tell who the service agent was acting on behalf of, and why.
To help you understand the context for a service agent's actions, some service agents include
additional details in their audit logs, like the job the action is associated with and the
principal that created the job.
The following service agents include these additional details in their audit logs:
BigQuery Connection Service Agent
BigQuery Connection Delegation Service Agent
These additional details are in the serviceDelegationHistory field of the audit log,
which is nested in the authenticationInfo field. This field contains the following
information:
The original principal who created the job
The service agent that executed the action
The service that the service agent belongs to
The job ID
For example, suppose
example-user@example.com
creates a job using the BigQuery Connection API. This job requires one of the BigQuery Connection API's
service agents to execute an action. In this case, the audit log for the service agent's action
would contain a serviceDelegationHistory field similar to the following:
{
"protoPayload" : {
"@type" : "type.googleapis.com/google.cloud.audit.AuditLog" ,
"authenticationInfo" : {
"principalEmail" : "bqcx-442188550395-jujw@gcp-sa-bigquery-condel.iam.gserviceaccount.com" ,
"serviceDelegationHistory" : {
"originalPrincipal" : "user:my-user@example.com" ,
"serviceMetadata" : [
{
"principalSubject" : "serviceAccount:bqcx-442188550395-jujw@gcp-sa-bigquery-condel.iam.gserviceaccount.com" ,
"serviceDomain" : "bigquery.googleapis.com" ,
}
]
}
}
}
}
What's next
Find out how to create and manage service accounts .
Learn how to create and manage service account keys .
Get best practices for working with service accounts .
Review best practices for managing service account keys .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how our
products perform in real-world scenarios. New customers also get $300 in
free credits to run, test, and deploy workloads.
Get started for free
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
