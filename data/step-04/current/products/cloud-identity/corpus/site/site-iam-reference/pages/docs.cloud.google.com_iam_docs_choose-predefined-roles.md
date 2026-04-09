---
title: "Find the right predefined roles \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/choose-predefined-roles
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/choose-predefined-roles
  title: "Find the right predefined roles \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Find the right predefined roles | Identity and Access Management (IAM) | Google Cloud Documentation
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
Identify the necessary permissions
Find roles that contain the permissions
Choose the most appropriate roles
Decide where to grant the roles
Grant the roles to a principal
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Find the right predefined roles
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Identify the necessary permissions
Find roles that contain the permissions
Choose the most appropriate roles
Decide where to grant the roles
Grant the roles to a principal
What's next
Identity and Access Management (IAM) provides multiple
predefined roles for most Google Cloud services. Each
predefined role contains the permissions that are needed to perform a task, or a
group of related tasks. This document helps you choose the right predefined
roles for a given task.
For some tasks, finding an appropriate predefined role is often
straightforward. For example, if a principal needs to view objects in a
Cloud Storage bucket, then the Storage Object Viewer role
( roles/storage.objectViewer ) is likely to be a good fit.
However, there are hundreds of predefined roles, which can make it difficult to
identify the most appropriate roles to grant to your principals. It can also be
challenging to find roles that follow the principle of least privilege, which
states that principals should have no more permissions than they actually need.
Note: If you're getting started with Google Cloud, you can identify and grant
core IAM roles as part of the
Google Cloud setup process .
This page walks you through the process of manually choosing the most
appropriate predefined roles:
Identify the necessary permissions .
Find roles that contain the permissions .
Choose the most appropriate roles .
Decide where to grant the roles .
Grant the roles to a principal .
Alternatively, you can ask Gemini to suggest the predefined roles
that a principal needs to perform a given task. For more information about this
feature, see Get predefined role suggestions with
Gemini assistance .
Identify the necessary permissions
To identify the permissions that a principal needs, start by listing the tasks
that they need to perform, and the Google Cloud services that they'll use
for those tasks. For example, a principal might need to use Compute Engine to
create virtual machine instances.
After you identify the tasks and services, there are a few strategies you can
use to identify the necessary permissions for each task:
Check the documentation for the Google Cloud services.
For some services, the task-oriented how-to guides list the roles or
permissions that you need for each task, either in a "Before you begin"
section or with the instructions for each task. For example, see the
Compute Engine
prerequisites for importing and exporting VM images .
Some other services identify required roles and permissions on a page about
access control. For example, see the Pub/Sub
required permissions for calling Pub/Sub methods .
Identify the REST or RPC API methods that you would use to complete the tasks,
and check the API reference documentation for the required IAM
permissions.
For some services, the REST and RPC API documentation lists the permissions
that each method requires. For example, see the Compute Engine
documentation for the instances.get method .
Look at the list of permissions for each service, and use your judgment to
find the relevant permissions.
In most cases, the name of each permission also describes what the
permission lets you do with it. For example, the permission for
creating a Compute Engine VM instance is named
compute.instances.create .
To help you understand each permission name, remember that permission names
use the format
SERVICE . RESOURCE_TYPE . ACTION .
In general, you don't need to identify every permission that's required for
every task. Instead, focus on identifying the most relevant permission for each
task. If a predefined role contains that permission, it's likely to contain
related permissions as well.
As part of this process, you should also try to identify which of the required
permissions are the most powerful. In general, more powerful permissions are
included in a smaller number of predefined roles. As a result, if you focus on
these permissions, you'll have a shorter list of potential roles to choose from.
For example, the following types of permissions are especially powerful:
Permissions to create and delete resources
Permissions to access sensitive data, such as encryption keys or personally
identifiable information (PII)
Permissions to set the allow policy or deny policy for a resource
Permissions to update organizations, folders, and projects, which can cause
other resources to inherit the updates
In contrast, the following types of permissions are less powerful:
Permissions to list resources
Permissions to access data that is not sensitive
Permissions to update settings that have limited risk, such as the minimum
CPU platform for Compute Engine virtual machine instances
Find roles that contain the permissions
Note: Identity and Access Management (IAM) offers predefined roles that are tailored to specific job
functions. If you want to give a user the necessary permissions to perform a specific job
function in your organization, consider granting one of these predefined roles. To determine if
IAM offers a predefined role for your use case, see Predefined roles for job functions .
After you identify the required permissions, you can search for predefined roles
that contain those permissions and make a list of roles that might be a good
fit. The easiest way to find these roles is by searching the IAM
roles and permissions index for a permission and
clicking on the permission name. The reference for each permission tells you the
roles that contain the permission.
To follow the principle of least privilege, you might need to identify more than
one predefined role to grant, especially if the required permissions belong to
multiple Google Cloud services. For example, if a principal needs to view
Cloud Storage objects and administer Cloud SQL databases, it's
unlikely that a single predefined role contains the appropriate permissions for
both services. If such a role exists, it might also include a large number of
unrelated permissions that the principal doesn't need. To reduce risk, look for
one role that contains the required permissions for Cloud Storage, and
another role that contains the required permissions for Cloud SQL.
Choose the most appropriate roles
Now that you have a list of predefined roles that might be a good fit, you can
choose the most appropriate roles from the list.
Start by eliminating the following types of roles:
For production environments: Basic roles, including Owner ( roles/owner ),
Editor ( roles/editor ), and Viewer ( roles/viewer ).
Basic roles include thousands of permissions across all Google Cloud services. In production environments, do not grant basic roles unless there is no alternative. Instead, grant the most limited predefined roles or custom roles that meet your needs.
Service agent roles, which typically have titles that end in "Service Agent"
and names that end in serviceAgent .
These roles are intended for service agents , which are a
special type of service account that a Google Cloud service uses to
access your resources. Service agent roles tend to contain permissions for
multiple services, which might include services that your principal doesn't
need to access.
Next, use the predefined roles reference or the
Roles page in the Google Cloud console
to list the permissions that each role contains. Check each role for permissions
that you don't want the principal to have, and eliminate any roles that contain
unwanted permissions.
If this process eliminates all of the predefined roles, consider creating a
custom role to fit your use case. Otherwise,
choose the role or roles that contain the fewest number of permissions, while
still meeting your needs.
Decide where to grant the roles
When you grant a role, you always grant it on a specific Google Cloud
resource , which belongs to a resource hierarchy .
Lower-level resources, such as Compute Engine VM instances, inherit the
roles granted on higher-level resources, such as projects, folders, and
organizations.
Note: Granting a role is also known as creating a role binding in an allow
policy . Lower-level resources inherit the allow policies and role bindings of
higher-level resources.
Choose where to grant the predefined roles that you identified:
If the principal needs access to specific lower-level resources, grant the
roles on those resources.
If the principal needs access to many resources within a project, folder, or
organization, grant the roles on the project, folder, or organization. Choose
the lowest-level resource that meets the principal's needs.
Also, consider using IAM Conditions to
grant the roles only on specific resources
within the project, folder, or organization.
If you identified multiple predefined roles, consider whether you should grant
the roles at different levels of the resource hierarchy. For example, if a
principal needs access to a single Cloud SQL database, but many
different Compute Engine VM instances, you might want to grant the role
for Cloud SQL on the database and the role for Compute Engine
on the project.
Grant the roles to a principal
Now you're ready to grant the roles to your principal. To learn how to grant
roles, see the following:
Manage access to projects, folders, and organizations
Manage access to service accounts
Manage access to other resources
After you grant the roles, you can use the
Policy Analyzer and Policy Troubleshooter to check
which resources the principal can access and troubleshoot access issues.
If the principal has the intended permissions on the correct resources, but they
are unable to complete their tasks, it's possible that you overlooked a
permission that the principal needs. Iterate on your previous attempt by adding
required permissions to the list; finding roles that contain those permissions;
and choosing the most appropriate roles.
If you accidentally grant a role with too many permissions, then a
role recommendation might suggest a less permissive role
that would meet the principal's needs. Some role bindings
don't get role recommendations .
What's next
Learn how the Policy Simulator can help you test
changes to a principal's roles.
Find out how the Policy Analyzer can tell you what access a
principal has to a resource.
Get details about troubleshooting access issues .
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
