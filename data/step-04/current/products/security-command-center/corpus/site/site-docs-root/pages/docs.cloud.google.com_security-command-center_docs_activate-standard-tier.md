---
title: "Activate Security Command Center Standard tier for an organization \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/activate-standard-tier
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/activate-standard-tier
  title: "Activate Security Command Center Standard tier for an organization \_|\_\
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
Activate Security Command Center Standard tier for an organization
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy and Standard service tiers (requires organization-level activation )
This document describes how to activate Security Command Center Standard for an organization
through the Google Cloud console.
For more information about Security Command Center Standard and Standard-legacy, see
Security Command Center service tiers .
To activate Security Command Center for a different service tier, see the following:
Activate the Security Command Center Premium tier for an organization
Activate the Security Command Center Enterprise tier
To activate Security Command Center for a project, see Activate Security Command Center for a project .
Before you begin
Before you activate Security Command Center Standard for an organization, you need to
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
securitycenter.googleapis.com
securitycentermanagement.googleapis.com
Activate Security Command Center Standard
You can activate Security Command Center Standard for an organization through the
Google Cloud console.
In the Google Cloud console, go to the Security Command Center welcome page.
Go to Security Command Center
Important: You must use the jurisdictional Google Cloud console to activate Security Command Center with data
residency controls. For details, see
About the jurisdictional
Google Cloud console .
Select the organization that you want to enable Security Command Center Standard
for, and then click Get Standard .
On the welcome page, click Select .
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
If your organization uses CMEK organization policies, you might only have
the option to choose CMEK or specific keys. If you don't use CMEK with
Security Command Center, then Google encrypts data at rest using Google-owned and Google-managed encryption keys.
Click Activate .
As results become available, they are displayed in the console. Then you can use
the Google Cloud console to review and remediate Google Cloud security
and data risks.
Security Command Center completes its first full scan within 24 hours. There might be
a delay before scans are started for some services. For more information, see
When to expect findings in Security Command Center .
If you upgrade from Security Command Center Standard to Premium ,
you gain access to charts that show the scan progress for features such as
issues, threats, and frameworks. Existing charts are also updated with scan
results from Premium detectors as results become available.
Services for Security Command Center Standard
Activating Security Command Center Standard automatically enables Security Health Analytics
and grants its service agent
the roles and permissions required for the service to function.
Note: If you use service perimeters ,
you must grant inbound access to the Cloud Security Command Center Service Agent .
Additional services can be enabled by following the steps in
Configure Security Command Center services .
Modify your Security Command Center service
For more information about tier management, see Modify Security Command Center Standard tier for an organization .
What's next
Learn how to
configure Security Command Center services .
Learn how to
use Security Command Center in the Google Cloud console .
Learn how to work with
Security Command Center findings .
Learn about
Google Cloud security sources .
Find out how Model Armor
can help protect your AI workloads.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
