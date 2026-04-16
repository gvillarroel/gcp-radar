---
title: "Use Compliance Manager with VPC Service Controls \_|\_ Security Command Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/compliance-manager-configure-vpc-sc
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/compliance-manager-configure-vpc-sc
  title: "Use Compliance Manager with VPC Service Controls \_|\_ Security Command\
    \ Center \_|\_ Google Cloud Documentation"
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
Use Compliance Manager with VPC Service Controls
Stay organized with collections
Save and categorize content based on your preferences.
Standard, Premium, and Enterprise service tiers (requires organization-level activation )
If you enable Compliance Manager within a VPC Service Controls
service perimeter, you must configure egress and ingress
rules .
You can adjust the following sample ingress and egress rules to meet your
business requirements.
For information about limitations, see Supported products and
limitations .
Note: Audit functionality is exclusive to Premium and Enterprise service
tiers .
Before you begin
Make sure that you have the required roles to configure
VPC Service Controls at the
organization level.
To ensure access to resources that exist in the organization or folders,
grant the Compliance Manager Admin ( roles/cloudsecuritycompliance.admin )
role at the organization level.
Make sure that you know the following:
The email address for the
Cloud Security Compliance service agent
( service-org- ORGANIZATION_ID @gcp-sa-csc-hpsa.iam.gserviceaccount.com ).
The email addresses of Compliance Manager users.
Compliance Manager users are the people who administer
Compliance Manager and perform activities such as audits.
Verify that the Cloud Security Compliance service agent has the required
permissions within the perimeter to complete an audit. For more information,
see Audit your environment with
Compliance Manager .
Add ingress and egress rules
Add the following ingress rule:
- ingressFrom :
identities :
- user : USER_EMAIL_ADDRESS
sources :
- accessLevel : "*"
ingressTo :
operations :
- serviceName : securitycenter.googleapis.com
methodSelectors :
- method : "*"
resources : "*"
Replace USER_EMAIL_ADDRESS with the email address of
the Compliance Manager user.
Add the following ingress rule to permit Compliance Manager to
monitor and audit the resources in your Google Cloud organization:
- ingressFrom :
identities :
- user : USER_EMAIL_ADDRESS
sources :
- accessLevel : "*"
ingressTo :
operations :
- serviceName : cloudsecuritycompliance.googleapis.com
methodSelectors :
- method : "*"
resources : "*"
Replace USER_EMAIL_ADDRESS with the email address of
the Compliance Manager user.
Configure the following ingress rule to run audits for a project:
- ingressFrom :
identities :
- serviceAccount : COMPLIANCE_MANAGER_SA_EMAIL_ADDRESS
- user : USER_EMAIL_ADDRESS
sources :
- accessLevel : "*"
ingressTo :
operations :
- serviceName : cloudasset.googleapis.com
methodSelectors :
- method : "*"
resources : "*"
Replace the following:
USER_EMAIL_ADDRESS : the email address of
the Compliance Manager user.
COMPLIANCE_MANAGER_SA_EMAIL_ADDRESS : the
email address of the Cloud Security Compliance service agent.
Configure the following ingress rule to run audits for a folder:
- ingressFrom :
identities :
- serviceAccount : COMPLIANCE_MANAGER_SA_EMAIL_ADDRESS
- user : USER_EMAIL_ADDRESS
sources :
- accessLevel : "*"
ingressTo :
operations :
- serviceName : "*"
resources : "*"
Replace the following:
USER_EMAIL_ADDRESS : the email address of
the Compliance Manager user.
COMPLIANCE_MANAGER_SA_EMAIL_ADDRESS : the
email address of the Cloud Security Compliance service agent.
Broad access is required to permit auditing of all the resources in the
projects within the folder.
Configure the following ingress rule to run an audit when the enrolled
Cloud Storage bucket is inside the perimeter:
- ingressFrom :
identities :
- serviceAccount : COMPLIANCE_MANAGER_SA_EMAIL_ADDRESS
- user : USER_EMAIL_ADDRESS
sources :
- accessLevel : "*"
ingressTo :
operations :
- serviceName : storage.googleapis.com
methodSelectors :
- method : google.storage.buckets.getIamPolicy
- method : google.storage.buckets.testIamPermissions
- method : google.storage.objects.getIamPolicy
- method : google.storage.buckets.setIamPolicy
- method : google.storage.objects.setIamPolicy
- method : google.storage.objects.create
- method : google.storage.objects.get
resources : "*"
Replace the following:
USER_EMAIL_ADDRESS : the email address of
the Compliance Manager user.
COMPLIANCE_MANAGER_SA_EMAIL_ADDRESS : the
email address of the Cloud Security Compliance service agent.
Configure the following egress rule to run an audit when the enrolled
Cloud Storage bucket is inside the perimeter:
- egressFrom :
identities :
- serviceAccount : COMPLIANCE_MANAGER_SA_EMAIL_ADDRESS
- user : USER_EMAIL_ADDRESS
sources :
- accessLevel : "*"
egressTo :
operations :
- serviceName : storage.googleapis.com
methodSelectors :
- method : google.storage.buckets.getIamPolicy
- method : google.storage.buckets.testIamPermissions
- method : google.storage.objects.getIamPolicy
- method : google.storage.buckets.setIamPolicy
- method : google.storage.objects.setIamPolicy
- method : google.storage.objects.create
- method : google.storage.objects.get
resources : "*"
Replace the following:
USER_EMAIL_ADDRESS : the email address of
the Compliance Manager user.
COMPLIANCE_MANAGER_SA_EMAIL_ADDRESS : the
email address of the Cloud Security Compliance service agent.
What's next
Diagnose issues by using the VPC Service Controls
troubleshooter or the
VPC Service Controls violation
analyzer .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
