---
title: "Activate Security Command Center Premium tier for an organization \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/activate-premium-tier
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/activate-premium-tier
  title: "Activate Security Command Center Premium tier for an organization \_|\_\
    \ Google Cloud Documentation"
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
Activate Security Command Center Premium tier for an organization
Stay organized with collections
Save and categorize content based on your preferences.
Premium service tier (requires organization-level activation )
This document describes how to activate Security Command Center Premium for an organization
through the Google Cloud console. Activating Security Command Center Premium automatically
enables a variety of services .
For more information about Security Command Center Premium, see Security Command Center service tiers .
To activate Security Command Center for a different service tier, see the following:
Activate the Security Command Center Standard tier for an organization
Activate the Security Command Center Enterprise tier
To activate Security Command Center for a project only, see
Activate Security Command Center for a project .
Before you begin
Before you activate Security Command Center Premium for an organization, you need to
do the following:
Obtain specific Identity and Access Management (IAM) roles and permissions.
Review your organization policies, if applicable to your organization.
If you plan to enable data residency, review Planning for data residency
and determine which location to use.
If you plan to use a customer-managed encryption key (CMEK), complete the
required tasks for enabling CMEK for Security Command Center .
Required roles
To get the permissions that
you need to activate Security Command Center for an organization,
ask your administrator to grant you the
following IAM roles on your organization:
Security Center Admin ( roles/securitycenter.admin )
Organization Administrator ( roles/resourcemanager.organizationAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Review organization policies
If your organization policies are set to restrict identities by domain ,
confirm the following:
You must be signed in to the Google Cloud console on an account that's in an
allowed domain.
Your service accounts must be in an allowed domain, or members of a group
within your domain. This requirement lets you allow services that use the
@*.gserviceaccount.com service account to access
resources when domain restricted sharing is enabled.
If your organization policies are set to restrict resource usage ,
verify that the following APIs are allowed by your policy :
cloudsecuritycompliance.googleapis.com
securitycenter.googleapis.com
securitycentermanagement.googleapis.com
Activate Security Command Center Premium
You can activate Security Command Center Premium for an organization through
the Google Cloud console.
In the Google Cloud console, go to the Security Command Center welcome page.
Go to Security Command Center
Important: You must use the jurisdictional Google Cloud console to activate Security Command Center with data
residency controls. For details, see
About the jurisdictional
Google Cloud console .
Select the organization that you want to enable Security Command Center Premium
for, and then click Select .
On the welcome page, select Start a Premium free trial .
Note: Your Premium free trial lasts for 30 days. When your trial ends, your
organization will automatically transition to the Premium pay-as-you-go plan,
and your billing account will be charged accordingly.
To cancel your Premium trial and avoid pay-as-you-go charges, you must
downgrade to the Standard tier before the trial period ends. You can
downgrade at any time during the trial. For detailed instructions, see
Downgrade from the Premium tier to the Standard tier .
If you want to purchase a Premium subscription, see
Premium tier: Subscription-based pricing
for details.
Optional: To enable data residency and data encryption, click Show more .
Caution: You must configure data residency and data encryption during
Security Command Center activation. You can't change these settings after you
activate Security Command Center.
For more information about data residency, see Planning for data residency .
Caution: Security Command Center doesn't validate your data residency location against any
organization policies that enforce the
resource locations
constraint , gcp.resourceLocations . When you activate Security Command Center, you must
select a location that's consistent with your organization policies.
For more information about data encryption, see Enable CMEK for Security Command Center .
If your organization uses CMEK organization policies
you might only have the option to choose CMEK or specific keys. If you don't
use CMEK with Security Command Center, then Google encrypts data at rest using
Google-owned and Google-managed encryption keys.
Click Activate .
As results become available, they are displayed in the console. Then you can use
the Google Cloud console to review and remediate Google Cloud security
and data risks.
Security Command Center completes its first full scan within 24 hours. There might be
a delay before scans are started for some services. For more information, see
When to expect findings in Security Command Center .
Services for Security Command Center Premium
After you activate Security Command Center Premium, specific services are
automatically enabled, and service agents are created so that these services can
act on your behalf.
Services
Security Command Center uses detection services
to detect security issues in your cloud environments. The following services are
enabled when you activate Security Command Center Premium:
AI Protection
Compliance Manager
Container Threat Detection
For Container Threat Detection to function, make sure that your clusters are on a
supported version of Google Kubernetes Engine (GKE) and that your GKE
clusters are configured correctly. For more information, see
Use Container Threat Detection .
Data Security Posture Management (DSPM)
Event Threat Detection
Event Threat Detection relies on logs generated by Google Cloud. To use
Event Threat Detection, enable logs
for your organization, folders, and projects.
Security Health Analytics
Security posture
Virtual Machine Threat Detection
Vulnerability Assessment
Web Security Scanner
Refer to each service's documentation for usage and optimization instructions.
As an example, Event Threat Detection relies on logs generated by
Google Cloud. Some logs are always on, so Event Threat Detection can start
scanning these logs as soon as it is enabled. Other logs, such as most data
access audit logs, must be activated before Event Threat Detection can scan them.
The services outlined in this section, and additional services, can be enabled
or disabled by following the steps in Configure Security Command Center services .
Service agents
A service agent is a service
account created and managed by Google Cloud to access resources on your
behalf. After a service agent is created, Security Command Center automatically
grants required IAM roles to the service agent. Security Command Center
Premium activation includes the following service agents:
Cloud Security Command Center Service Agent
for Event Threat Detection, Security Health Analytics, Virtual Machine Threat Detection, and Vulnerability
Assessment
Cloud Security Compliance Service Agent
for AI Protection and Compliance Manager
Container Threat Detection Service Agent
for Container Threat Detection
Data Security Posture Management Service Agent for DSPM
Note: If you use service perimeters ,
you must configure
ingress and egress policies for service agents to allow them access to
each service. See the following service-specific documentation for details:
Compliance Manager
Container Threat Detection
DSPM
Security Health Analytics
Vulnerability Assessment
Modify your Security Command Center service
For more information about tier management, see
Modify Security Command Center Premium tier for an organization .
What's next
Learn how to
configure Security Command Center services .
Learn how to
use Security Command Center in the Google Cloud console .
Learn how to work with
Security Command Center findings .
Learn about
Google Cloud security sources .
Find out how Model Armor can help protect
your AI workloads.
Enable Sensitive Data Protection
to help protect your sensitive data.
Learn how to monitor your costs using
Cloud Billing.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
