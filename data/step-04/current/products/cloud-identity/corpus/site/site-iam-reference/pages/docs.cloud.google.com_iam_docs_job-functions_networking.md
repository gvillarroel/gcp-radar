---
title: "IAM roles for Networking-related Job Functions \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/job-functions/networking
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/job-functions/networking
  title: "IAM roles for Networking-related Job Functions \_|\_ Identity and Access\
    \ Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

IAM roles for Networking-related Job Functions | Identity and Access Management (IAM) | Google Cloud Documentation
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
Single team manages security & network for organization
Separate network & security teams
Each team can manage its own network
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
IAM roles for Networking-related Job Functions
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Single team manages security & network for organization
Separate network & security teams
Each team can manage its own network
Note: Identity and Access Management (IAM) offers predefined roles that are tailored to specific job
functions. If you want to give a user the necessary permissions to perform a specific job
function in your organization, consider granting one of these predefined roles. To determine if
IAM offers a predefined role for your use case, see Predefined roles for job functions .
This topic shows how to configure Identity and Access Management (IAM) permissions for
networking scenarios. It provides guidance on what IAM roles to
grant to the networking-related functional roles in your company for the
scenarios. This content is mainly targeted at network administrators and
employees who manage networking tasks for an organization. The scenarios
described below all assume that a Google Cloud organization is configured.
This document does not explain in detail the networking roles and permissions.
For a detailed description of roles and permissions associated with compute and
networking APIs, read Predefined Compute Engine IAM roles .
Single team manages security & network for organization
In this scenario, a large organization has a central team that manages security
and networking controls for the entire organization. Developers do not have
permissions to make changes to any network or security settings defined by the
security and networking team but they are granted permission to create resources
such as virtual machines in shared subnets.
To facilitate this the organization makes use of a shared VPC (Virtual
Private Cloud). A shared VPC allows creation of a VPC network of RFC 1918
IP spaces that associated projects (service projects) can then use. Developers
using the associated projects can create VM instances in the shared VPC network
spaces. The organization's network and security admins can create subnets, VPNs,
and firewall rules usable by all the projects in the VPC network.
The tables below explain the IAM roles that need to be granted
to the security and admin team and the development team, as well as the resource
level at which the roles are granted.
Resource:
Organization
Roles:
Shared VPC Admin
Network Admin
Security Admin
Principal:
Security & network admin team
Resource:
Host Project
This role grants permission to use subnets that the shared
VPC has shared.
Role:
Network user
Principal:
Developers
Resource:
Service project
Note this role allows the permission to use External IP
addresses. See the note below for guidance on how to prevent this action.
Role:
compute.instanceAdmin
Principal:
Developers
Note: If you need to prevent principals from associating external IP addresses
with instances in a project, you can apply an organization policy .
Organization administrators can override this policy when necessary.
For this scenario you need three separate allow policies: one for the
organization, one for the host project, and one for the service projects.
The first allow policy, which needs to be attached at the organization level,
grants the network and security team the roles they need to administer shared
VPC host projects. This includes the ability to associate service
projects with the host project. It also grants the network and security team the
ability to manage all network and security resources in all projects in the
organization.
{
"bindings" : [
{
"role" : "roles/compute.xpnAdmin" ,
"members" : [
"group:sec-net@example.com"
]
},
{
"role" : "roles/compute.networkAdmin" ,
"members" : [
"group:sec-net@example.com"
]
},
{
"role" : "roles/compute.securityAdmin" ,
"members" : [
"group:sec-net@example.com"
]
}
]
}
The second allow policy needs to be associated with the host project and enables
the developers in the organization the ability to use the shared networks in the
shared VPC host project.
{
"bindings" : [
{
"role" : "roles/compute.networkUser" ,
"members" : [
"group:developers@example.com"
]
}
]
}
The third allow policy needs to be associated with each service project. This
enables the developers using the project to manage instances in the service
project and the ability to use the shared subnets in the host project.
You could place all service projects in a folder and set this particular allow
policy at that level of the hierarchy. This would allow all projects created in
that folder to inherit the permissions set at the folder within which the
service project is created.
Note: If using folders place all host and service projects for a given shared
VPC setup within the same folder. The parent folder of the host
project should be in the parent hierarchy of the service projects, so that the
parent folder of the host project contains all the projects in the shared
VPC setup.
You also need to grant the developers the Network User role in the service
project.
{
"bindings" : [
{
"role" : "roles/compute.networkUser" ,
"members" : [
"group:developers@example.com"
]
},
{
"role" : "roles/compute.instanceAdmin" ,
"members" : [
"group:developers@example.com"
]
}
]
}
The best practice is to use groups to manage principals. In the example above,
you would add the user IDs of the users who manage the security & network
controls to the sec-net group, and developers into the developers group.
When you need to modify who is able to carry out the function, you simply need
to adjust the group membership, negating the need to update the allow policy.
Separate network & security teams
In this scenario, a large organization has two central teams: one that manages
security controls, and another that manages all other networking resources for
the entire organization. Developers do not have permissions to make changes to
any network or security settings defined by the security and networking team,
but they are granted permission to create resources such as virtual machines in
shared subnets.
As with the first scenario, a shared VPC will be used and the
appropriate permissions configured for the three groups network, security, and
developers.
The tables below explain the IAM roles that need to be granted to
the security and admin team and the development team, as well as the resource
level at which the roles are granted.
Resource:
Organization
Roles:
Shared VPC Admin
Network Admin
Principal:
Network Admin team
Resource:
Organization
Roles:
Security Admin
Organization Admin
Principal:
Security team
Resource:
Host Project
This role grants permission to use subnets that the shared
VPC has shared.
Role:
Network user
Principal:
Developers
Resource:
Service project
Note this role allows the permission to use External IP
addresses. See the note below for guidance on how to prevent this action.
Role:
compute.instanceAdmin
Principal:
Developers
Note: If you need to prevent principals from associating external IP addresses
with instances in a project, you can apply an organization policy .
Organization administrators can override this policy when necessary.
For this scenario you need three separate allow policies: one for the
organization, one for the host project, and one for the service projects.
The first allow policy, which needs to be attached at the organization level,
grants the network team the roles they need to administer shared
VPC host projects and to manage all network resources. This
includes the ability to associate service projects with the host project. The
network admin role also grants the network team the ability to view but not
modify firewall rules. It also grants the security team the ability to set allow
policies and manage firewall rules and SSL certificates in all projects in the
organization.
{
"bindings" : [
{
"role" : "roles/compute.xpnAdmin" ,
"members" : [
"group:networks@example.com"
]
},
{
"role" : "roles/compute.networkAdmin" ,
"members" : [
"group:networks@example.com"
]
},
{
"role" : "roles/compute.securityAdmin" ,
"members" : [
"group:security@example.com"
]
},
{
"role" : "roles/resourcemanager.organizationAdmin" ,
"members" : [
"group:security@example.com"
]
}
]
}
The second allow policy needs to be associated with the host project. This allow
policy enables the developers in the organization to use the shared networks in
the shared VPC host project.
{
"bindings" : [
{
"role" : "roles/compute.networkUser" ,
"members" : [
"group:developers@example.com"
]
}
]
}
The third allow policy needs to be associated with each service project. This
enables the developers using the project to manage instances in the service
project and the ability to use the shared subnets in the host project.
You could place all service projects in a folder and set this particular allow
policy at that level of the hierarchy. This would allow all projects created in
that folder to inherit the permissions set at the folder within which the
service project is created.
Note: You also need to grant the developers the network user role in the service
project.
{
"bindings" : [
{
"role" : "roles/compute.networkUser" ,
"members" : [
"group:developers@example.com"
]
},
{
"role" : "roles/compute.instanceAdmin" ,
"members" : [
"group:developers@example.com"
]
}
]
}
Each team can manage its own network
A digital native wants to give their development teams the ability to work in an
autonomous manner. They have no central IT admin teams and trust their teams to
manage all aspects of their projects.
Despite this, they equally want to be able to put in place some loose controls
to allow them to adopt a more formal set-up as they grow and their product goes
GA.
To implement this scenario, each team of developers is assigned its own folder.
This structure ensures that individual projects created under the folder inherit
the appropriate permissions, while allowing each team to work independently.
Each team should still follow the principle of least privilege when it sets
allow policies for its own resources.
Even though it will initially be the same team members who will be managing the
network resources and the actual resources in the projects, creating separate
groups for the logical duties is best practice.
This approach facilitates limiting access to those resources that temporary
staff need or maybe new staff that need training up before they can modify
network resources. It also allows the ability to change who has access to what
resources without having to modify the allow policy every time a personnel
change occurs.
Resource:
Folder
A service account can be used to create and own projects.
Roles:
Project creator
Folder Admin
Principal:
Dev Teamleads
Service account
Note: Refer to IAM roles for billing-related job functions
for the IAM settings to allow a service account or user to
associate a project with a billing account.
Resource:
Folder
Roles:
Network Admin Security Admin
Principal:
Network & security team
Resource:
Folder
These roles allow the developers to manage all aspects of
BigQuery and Compute engine.
Roles:
Instance Admin
BigQuery Admin
Principal:
Developers
This requires an allow policy bound at each team's allocated folder.
{
"bindings" : [
{
"role" : "roles/resourcemanager.foldersAdmin" ,
"members" : [
"group:devteamleads01@example.com" ,
"serviceAccount:dev01-project-creator@shared-resources-proj.iam.gserviceaccount.com"
]
},
{
"role" : "roles/resourcemanager.projectCreator" ,
"members" : [
"group:devteamleads01@example.com" ,
"serviceAccount:dev01-project-creator@shared-resources-proj.iam.gserviceaccount.com"
]
},
{
"role" : "roles/compute.securityAdmin" ,
"members" : [
"group:net-sec-dev01@example.com"
]
},
{
"role" : "roles/compute.networkAdmin" ,
"members" : [
"group:net-sec-dev01@example.com"
]
},
{
"role" : "roles/compute.instanceAdmin" ,
"members" : [
"group:dev01@example.com"
]
},
{
"role" : "roles/bigquery.admin" ,
"members" : [
"group:dev01@example.com"
]
}
]
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
