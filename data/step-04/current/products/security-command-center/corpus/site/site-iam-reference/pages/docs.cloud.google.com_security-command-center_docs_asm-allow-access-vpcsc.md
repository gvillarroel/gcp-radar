---
title: "Use Mandiant Attack Surface Management with VPC Service Controls \_|\_ Security\
  \ Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/asm-allow-access-vpcsc
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/asm-allow-access-vpcsc
  title: "Use Mandiant Attack Surface Management with VPC Service Controls \_|\_ Security\
    \ Command Center \_|\_ Google Cloud Documentation"
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
Use Mandiant Attack Surface Management with VPC Service Controls
Stay organized with collections
Save and categorize content based on your preferences.
Enterprise service tier (not available if data residency controls are enabled)
This document describes how to add ingress rules to allow
Mandiant Attack Surface Management within VPC Service Controls perimeters. To restrict services in
projects that you want Mandiant Attack Surface Management to monitor if your organization
uses VPC Service Controls, perform this task. For more information about
Mandiant Attack Surface Management, see Mandiant Attack Surface Management overview .
Required roles
To get the permissions that
you need to use Mandiant Attack Surface Management within VPC Service Controls perimeters. ,
ask your administrator to grant you the
Access Context Manager Editor ( roles/accesscontextmanager.policyEditor )
IAM role on your organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create the ingress rules
To allow Mandiant Attack Surface Management in Security Command Center within
VPC Service Controls perimeters, add the required ingress rules in those
perimeters. Perform these steps for each perimeter that you want Mandiant Attack Surface Management
to monitor.
For more information, see
Updating ingress and egress policies for a service perimeter .
Console
Navigate to the service perimeter
In the Google Cloud console, go to the VPC Service Controls page.
Go to VPC Service Controls
Select your organization.
In the drop-down list, select the access policy that contains the service perimeter
that you want to grant access to.
The service perimeters associated with the access policy appear in the list.
Click the name of the service perimeter that you want to update.
To find the service perimeter you need to modify, you can check your logs for entries
that show RESOURCES_NOT_IN_SAME_SERVICE_PERIMETER violations. In those
entries, check the servicePerimeterName field:
accessPolicies/ ACCESS_POLICY_ID /servicePerimeters/ SERVICE_PERIMETER_NAME
Click edit Edit .
Add an ingress rule
Click Ingress policy .
Click Add an ingress rule .
In the From section, set the following details:
For Identities > Identity , select Select identities & groups .
Click Add identities .
Enter the email address that identifies the Attack Surface Management Service Agent. This address has the
following format:
service-org- ORGANIZATION_ID @gcp-sa-asm-hpsa.iam.gserviceaccount.com
Replace ORGANIZATION_ID with your organization ID.
Select the service agent or press ENTER , and then click Add
identities .
In the To section, set the following details:
For Resources > Projects , select All projects .
For Operations or IAM roles , select
Select operations .
Click Add operations , and then add the following operations:
Add the cloudasset.googleapis.com service.
Click All methods .
Click Add all methods .
Add the cloudresourcemanager.googleapis.com service.
Click All methods .
Click Add all methods .
Add the dns.googleapis.com service.
Click All methods .
Click Add all methods .
Click Save .
gcloud
If a quota project isn't already set, then set it. Choose a project that has the
Access Context Manager API enabled.
gcloud config set billing/quota_project QUOTA_PROJECT_ID
Replace QUOTA_PROJECT_ID with the ID of the project that you
want to use for billing and quota.
Create a file named ingress-rule.yaml with the following contents:
- ingressFrom :
identities :
- serviceAccount:service-org- ORGANIZATION_ID @gcp-sa-asm-hpsa. iam.gserviceaccount.com
sources :
- accessLevel : '*'
ingressTo :
operations :
- serviceName : cloudasset.googleapis.com
methodSelectors :
- method : '*'
- serviceName : cloudresourcemanager.googleapis.com
methodSelectors :
- method : '*'
- serviceName : dns.googleapis.com
methodSelectors :
- method : '*'
resources :
- '*'
Replace ORGANIZATION_ID with your organization ID.
Add the ingress rule to the perimeter:
gcloud access-context-manager perimeters update PERIMETER_NAME \
--set-ingress-policies = ingress-rule.yaml
Replace the following:
PERIMETER_NAME : the name of the perimeter. For example,
accessPolicies/1234567890/servicePerimeters/example_perimeter .
To find the service perimeter you need to modify, you can check your logs for
entries that show RESOURCES_NOT_IN_SAME_SERVICE_PERIMETER violations.
In those entries, check the servicePerimeterName field:
accessPolicies/ ACCESS_POLICY_ID /servicePerimeters/ SERVICE_PERIMETER_NAME
For more information, see Ingress and egress rules .
What's next
Learn more about
Mandiant Attack Surface Management .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
