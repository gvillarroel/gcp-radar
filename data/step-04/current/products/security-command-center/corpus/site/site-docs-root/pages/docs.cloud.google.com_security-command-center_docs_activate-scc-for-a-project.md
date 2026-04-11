---
title: "Activate Security Command Center for a project \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/activate-scc-for-a-project
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/activate-scc-for-a-project
  title: "Activate Security Command Center for a project \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Activate Security Command Center for a project
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy and Premium service tiers
This page explains how to activate the Security Command Center Standard tier or Premium
tier for a Google Cloud project.
Note: If you are using an organization-level activation of Security Command Center
Premium, set up project-level activations before the organization-level
activation ends to avoid a lapse in your coverage. If you use an
organization-level subscription, when the subscription expires, Security Command Center
Premium coverage continues for only those projects for which the Premium tier is
already selected. If you use pay-as-you-go pricing at the organization level,
you must downgrade the organization-level activation to the Standard tier
for the project-level activations to take effect.
To activate Security Command Center for an entire organization, see one of the following:
Activate the Security Command Center Standard tier for an organization
Activate the Security Command Center Premium tier for an organization
Activate the Security Command Center Enterprise tier
Prerequisites
To activate Security Command Center on a project, you need the following
prerequisites, which are explained in the following subsections:
Read the prerequisite information to understand how a project-level
activation of Security Command Center differs from an organization-level
activation.
You need to have a Google Cloud project that is associated
with an organization.
Your user account needs to be granted Identity and Access Management (IAM) roles
that contain the required permissions.
If your project inherits organization policies that are set to restrict
identities by domain, your user and service accounts must be in an allowed
domain.
If you will use Container Threat Detection, your Google Kubernetes Engine clusters must support
Container Threat Detection.
Prerequisite information
To understand how a project-level activation of Security Command Center
differs from an organization-level activation, see
Overview of project-level enablement of Security Command Center .
To learn about the services and Security Command Center findings that are not
supported with project-level activations, see
Project-level activation service limitations .
Project requirements
To activate Security Command Center for a project, the project must be
associated with an organization. If you
need to create a project, see Creating and managing projects .
Required roles
To get the permissions that
you need to activate Security Command Center for a project,
ask your administrator to grant you the
following IAM roles on your project:
Security Admin ( roles/iam.securityAdmin )
Security Center Admin ( roles/securitycenter.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Verify organization policies
If your project inherits organization policies that are set to
restrict identities by domain ,
you need to meet the following requirements:
You must be signed in to the Google Cloud console on an account that's in
an allowed domain.
Your service accounts must be in an allowed domain, or members of a group
within your domain. This requirement lets you allow
@*.gserviceaccount.com services access to
resources when domain restricted sharing is enabled.
Confirm software versions for Container Threat Detection
If you plan to use Container Threat Detection with Google Kubernetes Engine
(GKE), make sure that your clusters are on a supported
version of GKE and that the
clusters are properly configured. For more information, see
Using Container Threat Detection .
Activation scenarios for a project
This page covers the following activation scenarios:
In an organization that has never activated Security Command Center,
activate either the Premium or Standard Tier of Security Command Center
for a project.
In an organization that uses the Standard Tier, activate the
Security Command Center Premium tier for a project.
In an organization that uses an expiring Premium tier subscription,
activate the Premium tier of Security Command Center
for a project.
Depending on whether your organization is using Security Command Center,
you activate Security Command Center for a project by using different methods.
If your organization is not using Security Command Center,
the Google Cloud console guides you through a series of setup pages.
If your organization is using Security Command Center,
you activate Security Command Center Premium for a project by using the
Tier details tab of the Settings page.
Determine if Security Command Center is already active in your organization
How you activate Security Command Center for a project is different
depending on whether Security Command Center is already active in your
organization.
To check if Security Command Center is already active in your
organization, complete the following steps:
Go to the Security Command Center Overview page in the Google Cloud console.
Go to Security Command Center
Select the name of the project for which you need to activate
Security Command Center.
After you select the project, one of the following pages opens:
If Security Command Center is active in your organization,
the Risk overview page opens.
If Security Command Center has not been activated in the
organization, the Get Security Command Center page opens from which
you can start the activation process for your project.
If Security Command Center is already active in your organization, check
the service tier that is currently active.
Open the Security Command Center Settings page:
Go to Settings
On the Settings page, click Tier details . The Tier page
opens.
On the Tier row, the service tier that the project is inheriting
is listed.
To activate Security Command Center for a project, follow the procedure
for the activation state of Security Command Center in the parent organization:
Activate for a project when Security Command Center is active in the organization
Activate for a project when Security Command Center is not active in the organization
Activate for a project when Security Command Center is active in the organization
If Security Command Center is already active in an organization, the only
service tier you would need to activate at the project level is the
Premium tier, because, at a minimum, the project will inherit the use of
the Standard tier.
To review the features that are included with each tier, see
Service tiers .
Note: If you are using an organization-level activation of Security Command Center
Premium, set up project-level activations before the organization-level
activation ends to avoid a lapse in your coverage. If you use an
organization-level subscription, when the subscription expires, Security Command Center
Premium coverage continues for only those projects for which the Premium tier is
already selected. If you use pay-as-you-go pricing at the organization level,
you must downgrade the organization-level activation to the Standard tier )
for the project-level activations to take effect.
Select your service tier, Standard or Standard-legacy, and follow the steps to
upgrade your project to the Premium tier. For more information, see Migration and activation of the Standard tier .
Standard
In the Google Cloud console, go to the Tier details page.
Go to Tier details
Select the project that you want to upgrade the Security Command Center
tier for, and then click Select .
Click Manage project tier .
In the Manage tier pane, click Select for the Premium tier. Then, click Update .
Standard-legacy
In the Google Cloud console, go to the Tier details page.
Go to Tier details
Select the project that you want to upgrade the Security Command Center
tier for, and then click Select .
Click either of the following options:
Manage project tier
Get Premium
The Manage your tier page opens.
On the Manage your tier page, select Premium .
Click Next . The Services page opens.
On the Services page, enable or disable each built-in service as
needed by selecting one of the following values
from the menu to the left of the listed service:
Inherit (the default entry)
Enable
Disable
Caution: Enabling certain services can impact your operating environment.
For example, if you enable Container Threat Detection, a DaemonSet object is
deployed in your GKE clusters. Ensure your clusters have
sufficient resources available to run these DaemonSets. For more
information, see Resource usage .
You have completed the activation of Security Command Center Premium for your project. Next, wait for the initial scans to complete .
Activate for a project when Security Command Center is not active in the organization
If your organization does not use Security Command Center,
the Google Cloud console guides you through a series of setup pages
when you activate Security Command Center for a project.
Step 1: Select your tier
If Security Command Center isn't active in your organization, the
Get Security Command Center page is displayed when you open Security Command Center in the Google Cloud console. You start the activation
process by selecting a tier.
Security Command Center has three tiers: Standard, Premium, and Enterprise.
The tier that you select determines the features that are available to you and
the cost of using Security Command Center. You can only activate Enterprise tier at
the organization level. For more information, see
Activate the Security Command Center Enterprise tier .
To review the features that are included with each tier, see
Service tiers .
To select your tier and start the Security Command Center activation
process, complete the following steps:
Go to the Security Command Center overview page in the Google Cloud console.
Go to Security Command Center
Select the name of the project for which you need to activate
Security Command Center.
After you select the project, Security Command Center opens to the
Get Security Command Center page where you start the activation process
by selecting a tier. If the Security Command Center console opens,
Security Command Center is already active in your organization or project.
Select either the Premium or Standard tier,
depending on the services you need.
Click Next . The Select services page opens.
In the next section, you select the built-in services that you want to
enable for your project.
Step 2: Select services
On the Select services page ,
all of the built-in services of Security Command Center are displayed.
On the Services page, enable or disable each built-in service as
needed by selecting one of the following values
from the menu to the left of the listed service:
Inherit
Enable
Disable
Caution: Enabling certain services can impact your operating environment. For
example, if you enable Container Threat Detection, a DaemonSet object is deployed
in your GKE clusters. Ensure your clusters have sufficient
resources available to run these DaemonSets. For more information, see
Resource usage .
After you complete the activation process, for each service that you
enable, check the documentation for that service for any additional
steps that might be required for each service.
Click Next . The Grant roles page opens.
Step 3: Configure the service agents
When you activate Security Command Center for the first time, Google Cloud
automatically creates IAM service agents
for Security Command Center and its detection services.
As described in the following procedure, you grant IAM
roles to these service agents that provide the permissions that
Security Command Center and its detection services need to perform their functions.
When you activate Security Command Center at the project level and
Security Command Center is not already active in your organization,
the following project-level service agents are created:
service-project- PROJECT_NUMBER @security-center-api.iam.gserviceaccount.com .
You grant the securitycenter.serviceAgent
IAM role to this service account.
service-project- PROJECT_NUMBER @gcp-sa-ktd-hpsa.iam.gserviceaccount.com .
You grant the roles/containerthreatdetection.serviceAgent
IAM role to this service account.
In place of PROJECT_NUMBER , the service account
contains the number of your project.
Note: If you use service perimeters ,
you must also grant inbound access to the service agents .
To grant the IAM roles to the service agents, follow these
steps:
Optionally, on the Grant roles page, review the role and permissions
that you are about to grant by clicking Review permissions .
Grant the required roles automatically by clicking
Grant roles .
Alternatively, you can grant the role manually, by completing the
following steps:
Click Alternately: grant roles manually (gcloud) .
Copy the gcloud CLI commands.
On the Google Cloud console toolbar, click Activate Cloud Shell .
In the terminal window that appears, paste the gcloud CLI
commands you copied, and then press Enter .
Click Next . The Complete setup page opens.
Step 4: Confirm activation
Complete Security Command Center activation by following these steps:
On the Complete setup page, click Finish .
When you finish setup, Security Command Center starts an initial asset scan, after
which you can use the console to review and remediate Google Cloud
security and data risks across your project.
There might be a delay before scans are started for some services.
As you might expect, the delay, or scan latency , for services in an
individual project is typically shorter than it is for an organization,
but most of the reasons for latency still apply. For more information about
latencies as they apply to organizations, see
Security Command Center latency overview
to learn more about the activation process.
For all activation scenarios, optimize and test the built-in services
After you activate Security Command Center, check the documentation for each
service to see if you can test or optimize the service further.
For example, Event Threat Detection relies on logs generated by
Google Cloud. Some logs are always on, so Event Threat Detection
can start scanning them as soon as it is enabled. Other logs, such as
most data access audit logs, you must activate before Event Threat Detection
can scan them. For more information, see
Log types and activation requirements .
For more information about testing and using each of the built-in services, see
the following pages:
Use Container Threat Detection
Use Event Threat Detection
Use Security Health Analytics
Use Virtual Machine Threat Detection
Use Web Security Scanner
What's next
Learn more about Security Command Center and its built-in services.
Learn how to review assets, findings, and vulnerabilities by
using Security Command Center .
Learn about
Google Cloud security sources .
Learn how to
add security sources to Security Command Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
