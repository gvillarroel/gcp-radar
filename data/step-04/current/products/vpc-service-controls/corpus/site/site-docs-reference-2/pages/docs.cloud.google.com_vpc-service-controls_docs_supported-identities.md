---
title: "Supported identities for ingress and egress rules \_|\_ VPC Service Controls\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities
  title: "Supported identities for ingress and egress rules \_|\_ VPC Service Controls\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Supported identities for ingress and egress rules
Stay organized with collections
Save and categorize content based on your preferences.
VPC Service Controls uses ingress and egress rules
to control access to and from resources and clients within service perimeters. To
refine access further, you can specify supported identities in ingress and egress
rules.
This page lists the identities supported by VPC Service Controls and their identifier formats.
Supported identities
VPC Service Controls supports the following identities from Principal identifiers
for allow policies , which use the IAM
v1 API:
Identity type
Principal type
Identifier
Single principals
User accounts
user: USER_EMAIL_ADDRESS
Service accounts
serviceAccount: SA_EMAIL_ADDRESS
Identity groups and third-party identities
Group
group: GROUP_EMAIL_ADDRESS
Single identity in a workforce identity pool
principal://iam.googleapis.com/locations/global/workforcePools/ POOL_ID /subject/ SUBJECT_ATTRIBUTE_VALUE
All workforce identities in a group
principalSet://iam.googleapis.com/locations/global/workforcePools/ POOL_ID /group/ GROUP_ID
All workforce identities with a specific attribute value
principalSet://iam.googleapis.com/locations/global/workforcePools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
All identities in a workforce identity pool
principalSet://iam.googleapis.com/locations/global/workforcePools/ POOL_ID /*
Single identity in a workload identity pool
principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /subject/ SUBJECT_ATTRIBUTE_VALUE
Workload identity pool group
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /group/ GROUP_ID
All identities in a workload identity pool with a certain attribute
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
All identities in a workload identity pool
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /*
Agent identities ( Preview )
Agent identity ( Preview )
principal:// TRUST_DOMAIN / AGENT_UNIQUE_IDENTIFIER
All agent identities in a trust domain with a certain attribute ( Preview )
principalSet:// TRUST_DOMAIN /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
All agent identities in a trust domain ( Preview )
principalSet:// TRUST_DOMAIN /*
For more information about these identities, see Principal identifiers for
allow policies .
VPC Service Controls also supports the following SPIFFE
formats for third-party workforce and workload identities:
Identity type
Principal type
Identifier
Workforce identities in SPIFFE format ( Preview )
Single identity in a workforce identity pool ( Preview )
principal:// POOL_ID .global.workforce.id.goog/ SUBJECT_ATTRIBUTE_VALUE
All identities in a workforce identity pool as a trust domain with a certain attribute ( Preview )
principalSet:// POOL_ID .global.workforce.id.goog/attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
All identities in a workforce identity pool as a trust domain ( Preview )
principalSet:// POOL_ID .global.workforce.id.goog/*
Workload identities in SPIFFE format ( Preview )
Single identity in a workload identity pool ( Preview )
principal:// POOL_ID .global. ORGANIZATION_ID .workload.id.goog/ SUBJECT_ATTRIBUTE_VALUE
All identities in a workload identity pool as a trust domain with a certain attribute ( Preview )
principalSet:// POOL_ID .global. ORGANIZATION_ID .workload.id.goog/attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
All identities in a workload identity pool as a trust domain ( Preview )
principalSet:// POOL_ID .global. ORGANIZATION_ID .workload.id.goog/*
What's next
Configure identity groups and third-party identities in ingress and egress
rules
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
