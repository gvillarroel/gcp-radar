---
title: "Activate the Security Command Center Enterprise tier \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier
  title: "Activate the Security Command Center Enterprise tier \_|\_ Google Cloud\
    \ Documentation"
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
Activate the Security Command Center Enterprise tier
Stay organized with collections
Save and categorize content based on your preferences.
Enterprise service tier
The Security Command Center Enterprise tier provides security enhancements, including the
following:
Advanced security operations using Google Security Operations
Integrations with other Google Cloud products, such as Mandiant Attack Surface Management,
Sensitive Data Protection, and Assured OSS
Multi-cloud support
Risk analysis
Compliance support ( Preview )
For a description of the Enterprise tier features, see
Service tiers .
You can complete the activation process for the Enterprise tier using the setup
guide in the Google Cloud console. After the initial mandatory tasks, complete
additional steps to set up optional features that your organization
requires.
For information about pricing and getting a subscription, see
Security Command Center pricing .
For instructions on activating Security Command Center with a different service tier,
see the following:
Activate Security Command Center Standard tier
Activate Security Command Center Premium tier
Before you begin
Before you activate Security Command Center for the first time, complete the following:
Plan for the activation
Create an organization
Create the management project
Configure permissions and APIs
Configure notification contacts
Plan for the activation
This section describes decisions and information you need to prepare for the
activation.
Decide whether to enable data residency support
When you activate Security Command Center, you can enable support for
data residency , which gives you more
control over where your Security Command Center data is located. For
Google SecOps, data residency is always enabled.
Caution: Security Command Center doesn't validate your data residency location against any
organization policies that enforce the
resource locations
constraint , gcp.resourceLocations . When you activate Security Command Center, you must
select a location that's consistent with your organization policies.
For the Enterprise service tier, before you activate Security Command Center with data residency
controls, you must contact your Google Cloud account representative and schedule a date and
time when you will activate Security Command Center. After activation, your account representative will
help ensure that your Google SecOps instance is configured to fully support data
residency controls.
After support for data residency is enabled in your organization, you cannot
disable it.
If you use the Standard or Premium service tier, then upgrading to the Enterprise tier does not
change the location of your Security Command Center data. If you did not enable Security Command Center data
residency for the Standard or Premium tier, then you cannot enable it when you upgrade to the
Enterprise tier.
Determine the support contact
When you activate a new Google SecOps instance, you provide your
company name and an email address of a point of contact. Identify a point of
contact from your organization.
This configuration is not related to Essential Contacts .
Choose the Google SecOps configuration
During activation, you connect Security Command Center Enterprise to a
Google SecOps instance.
You can connect to an existing instance .
You can provision and connect to a new instance . You can
provision and connect to a new instance even if you have an existing instance.
Connect to an existing instance
You can't connect Security Command Center Enterprise to an existing
Google SecOps SIEM standalone
or
Google SecOps SOAR standalone
instance. If you have questions about the type of Google SecOps
instance you have, contact your Google Cloud sales representative.
When you select an existing Google SecOps instance,
the Connect to a SecOps instance page provides a link to the instance so you
can verify your selection. You must have access to that instance to verify it.
You need at least the
Chronicle API Restricted Data Access Viewer
( roles/chronicle.restrictedDataAccessViewer ) role on the management project
to sign in to the instance.
If you provision Security Command Center using an existing Google SecOps
instance that is configured to use
Workforce Identity Federation ,
you must update the workforce identity pools with additional permissions to
access features in Security Operations console pages that are available with
Security Command Center Enterprise. For more information, see
Control access to features in Security Operations console pages .
Provision a new instance
When you provision a new instance, only the new instance is associated with
Security Command Center. When using Security Command Center, you navigate between
Google Cloud console and the newly provisioned Security Operations console pages.
During activation, you specify the location where the new Google SecOps
instance is to be provisioned. For a list of supported regions and multi-regions,
see SecOps Services Locations Page .
This location applies to only Google SecOps, and not other
Security Command Center features or services.
Each Google SecOps instance must have a dedicated management
project that you own and manage. This project must be in the same organization
where you activate Security Command Center Enterprise. You can't use the same
management project for multiple Google SecOps instances.
When you have an existing Google SecOps instance and provision a
new instance for Security Command Center Enterprise, both instances use the same
configuration for the
direct ingestion of Google Cloud data .
The same configuration settings control the ingestion to both Google SecOps
instances and they receive the same data.
During activation of Security Command Center Enterprise, the activation process
modifies the Google Cloud log ingestion settings to set all data type fields
to enabled: Google Cloud Logging , Cloud Asset Metadata , and
Security Command Center Premium findings . The export filter settings are not
changed. Security Command Center Enterprise requires these data types for all
features to function as designed.
You can change the Google Cloud log ingestion settings after activation is
complete.
Create an organization
Security Command Center requires an organization resource that is associated with a
domain. If you haven't created an organization, see
Creating and managing organizations .
If you have multiple organizations, identify which organizations you will activate
Security Command Center Enterprise in. You must follow these activation steps for each
organization where you plan to activate Security Command Center Enterprise.
Verify organization policies
If your organization policies are set to
restrict resource usage ,
verify that the following APIs are permitted:
chronicle.googleapis.com
cloudsecuritycompliance.googleapis.com
securitycenter.googleapis.com
securitycentermanagement.googleapis.com
Create a management project
Security Command Center Enterprise requires a project, which is called the
management project , to enable Google SecOps and Mandiant Attack Surface Management
integration. We recommend that you use this project exclusively for Security Command Center Enterprise.
If you enabled Google SecOps previously ,
and you want to connect to the existing instance, use the existing
management project that is connected to Google SecOps.
If you plan to provision a new Google SecOps instance, create a new
management project that is dedicated to the new instance. Don't reuse a management
project that is connected to another Google SecOps instance.
Google SecOps does not support using a management project
that exists within a VPC Service Controls service perimeter .
Learn more about creating and managing projects .
Configure permissions and APIs
Use information in this section to configure permissions required to activate
Security Command Center Enterprise:
Configure permissions on the organization
Configure permissions and enable APIs on the management project
Create a service account if you plan to connect to an existing Google SecOps instance
Learn more about Security Command Center roles and
Google Cloud APIs .
Configure permissions on the organization
Make sure that you have the following role or roles on the organization:
Organization Administrator ( roles/resourcemanager.organizationAdmin )
Cloud Asset Owner ( roles/cloudasset.owner )
Security Center Admin ( roles/securitycenter.admin )
Security Admin ( roles/iam.securityAdmin )
Chronicle Service Viewer ( roles/chroniclesm.viewer )
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the organization.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the organization.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Configure permissions and enable APIs on the management project
In the Google Cloud console, verify that you are viewing the organization where you
want to activate the Security Command Center Enterprise tier.
Select the management project that you created previously .
Make sure that you have the following role or roles on the project:
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
Service Account Token Creator ( roles/iam.serviceAccountTokenCreator )
Chronicle API Admin ( roles/chronicle.admin )
Chronicle Service Admin ( roles/chroniclesm.admin )
Chronicle SOAR Admin ( roles/chronicle.soarAdmin )
Service Account Key Admin ( roles/iam.serviceAccountKeyAdmin )
Service Account Admin ( roles/iam.serviceAccountAdmin )
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Enable the Cloud Asset, Cloud Pub/Sub, Cloud Resource Manager,
Compute Engine, Policy Analyzer, and Recommender APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account when using an existing Google SecOps instance
If you plan to connect to an existing Google SecOps instance ,
create a user-managed service account and
grant the service account the following roles:
Chronicle SOAR Service Agent ( roles/chronicle.soarServiceAgent )
and
Pub/Sub Admin
( roles/pubsub.admin ) on the organization level where you plan to activate
Security Command Center.
Chronicle Service Agent ( roles/chronicle.serviceAgent ) on the
management project.
Configure notification contacts
Configure your Essential Contacts so that your security administrators
can receive important notifications. For instructions, see Managing contacts
for notifications .
Activate the Security Command Center Enterprise tier
The activation process automatically configures the service accounts, permissions,
and services included with Security Command Center Enterprise.
You can connect to an existing Google SecOps Standard,
Enterprise, or Enterprise Plus instance or provision a new one.
Important :
You must use the jurisdictional Google Cloud console to activate Security Command Center with data
residency controls. For details, see
About the jurisdictional
Google Cloud console .
For the Enterprise service tier, before you activate Security Command Center with data residency
controls, you must contact your Google Cloud account representative and schedule a date and
time when you will activate Security Command Center. After activation, your account representative will
help ensure that your Google SecOps instance is configured to fully support data
residency controls.
On the Google Cloud console, go to the Security Command Center Risk Overview page.
Go to Security Command Center
Verify that you are viewing the organization where you want to activate the
Security Command Center Enterprise tier.
On the Security Command Center page, click
Get Security Command Center .
On the Get started with Security Command Center Enterprise page,
review the service accounts and APIs that will be configured, and then click
Next .
To view the service accounts that will be created,
click View service accounts and permissions .
To view APIs that will be enabled, click
View Security Command Center Enterprise APIs .
To view the terms and conditions, click
Security Command Center Enterprise terms and conditions .
If you don't see the Get started with Security Command Center Enterprise
page, contact Google Cloud sales to verify that your
subscription entitlement is active.
The next page displays a different view depending on your environment.
If you have an existing Google SecOps
instance, you are prompted to use the existing one or create a new one.
Continue with step 5 to choose the instance type .
If you don't have an existing Google SecOps instance, continue
with step 6 to create a new Google SecOps instance .
If the organization is linked to a Google SecOps
instance, choose one of the following. If it's not linked to a Google SecOps instance, continue with
step 6 to create a new Google SecOps instance .
Select Yes, connect to an existing Google Security Operations instance for me ,
and then choose an instance from the menu. Continue with step 7 to start the activation .
The menu displays Google SecOps instances that are associated
with the organization where you are activating Security Command Center Enterprise.
Each item includes the Google SecOps customer ID, the
region where it is provisioned, and the Google Cloud project name that it
is associated with. You cannot select an instance that is incompatible
with Security Command Center Enterprise.
The page provides a link to the selected Google SecOps instance
so you can verify it. If you get an error when opening the instance,
check that you have the required IAM permissions
to access the instance.
Select No, create a new Google Security Operations instance , and then continue
with step 6 to create a new Google SecOps instance .
To create a new Google SecOps instance, provide additional
setup details.
Specify your company contact information.
Technical support contact : enter an individual email address or group email address.
Company name : enter your company name.
Select the Location type where Google Security Operations will be provisioned.
Region : select a single region.
Multi-region : select a multi-regional location.
This location is used for only Google SecOps, and not for
other Security Command Center features.
For a list of supported regions and multi-regions, see
SecOps Services Locations Page .
Click Next , and then select the dedicated Management project . You
created the dedicated management project in a
previous step.
If you select a project that is linked to an existing Google SecOps
instance, you will get an error when you start the activation.
Continue with step 7 to start the activation .
Click Activate . The Risk overview page appears.
Certain services are automatically enabled, such as Security Health Analytics,
Event Threat Detection, and Virtual Machine Threat Detection. It can take some time before security
operations features are ready and findings become available.
Continue with
Monitor activation progress and configure services .
Monitor activation progress and configure services
The Setup guide displays the provisioning status and lets you view the
services that are enabled. You can configure additional services and configure
connections to other cloud service providers.
On the Google Cloud console, go to the Security Command Center Set up guide .
Go to Setup guide
Select the organization where you activated Security Command Center Enterprise.
Expand the Review security capabilities summary panel. Each panel
displays the enablement status of related services.
To connect to Amazon Web Services (AWS) or Microsoft Azure,
click add Add a connector .
This opens the Connectors tab on the Settings page.
For additional instructions, see the following:
Connect to AWS for configuration and resource data collection
Connect to Microsoft Azure for configuration and resource data collection .
Click Set up in any panel to configure additional services and capabilities.
Use links in the following table to learn more about each capability.
Capabilities panel name
Learn more about these capabilities
AI protection
AI Protection
overview
Model Armor Overview
Code security
Google Cloud Armor Overview
Integrate with Assured OSS for code security .
Cloud threat detection
Container Threat Detection overview
Overview of Event Threat Detection
Virtual Machine Threat Detection overview
Connect to AWS for configuration and resource data collection
Identity and access security
Overview of the IAM recommender integrated service
Overview of Cloud Infrastructure Entitlement Management (CIEM)
Data security
Review and customize data security frameworks
Enable Event Threat Detection
Enable Sensitive Data Protection
Enable discovery
Compliance
Apply a framework
Grant roles in IAM
Posture and compliance
Manage a security posture
Overview of Security Health Analytics
Overview of Web Security Scanner
Response platform
Map and authenticate
users to enable SOAR-related features
Integrate
Security Command Center Enterprise with ticketing systems
Update the Enterprise use case
Work with playbooks
Vulnerability assessment
Assess software vulnerabilities overview
Configure permissions for ongoing Security Command Center Enterprise use
To change the configuration of your organization, you need both of the following roles
at the organization level:
Organization Administrator ( roles/resourcemanager.organizationAdmin )
Security Center Admin ( roles/securitycenter.admin )
If a user doesn't require edit permissions, consider granting them viewer roles.
To view all assets, findings, and attack paths in Security Command Center, users need the
Security Center Admin Viewer
( roles/securitycenter.adminViewer ) role at the organization level.
To view settings, users need the
Security Center Admin ( roles/securitycenter.admin ) role at the organization level.
To restrict access to individual folders and projects, don't grant all roles at the organization
level. Instead, grant the following roles at the folder or
project level:
Security Center Assets Viewer ( roles/securitycenter.assetsViewer )
Security Center Findings Viewer
( roles/securitycenter.findingsViewer )
Each detection service may require
additional permissions to enable or configure it. See the documentation specific to each service
for more information.
To use Security Operations console features that are
supported with Security Command Center Enterprise ,
see
Control access to features in Security Operations console pages .
Modify your Security Command Center service
For more information about tier management, see
Modify Security Command Center Enterprise tier .
What's next
Learn how to work with
Security Command Center findings .
Learn about
Google Cloud security sources .
Investigate threats with Google Security Operations curated detections .
Apply frameworks to your
environment to align
your environment with your compliance and security requirements.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
