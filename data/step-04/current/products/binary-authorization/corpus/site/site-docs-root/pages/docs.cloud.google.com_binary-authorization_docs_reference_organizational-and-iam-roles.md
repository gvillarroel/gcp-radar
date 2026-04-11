---
title: "Separation of duties and Identity and Access Management roles \_|\_ Binary\
  \ Authorization \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/reference/organizational-and-iam-roles
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/reference/organizational-and-iam-roles
  title: "Separation of duties and Identity and Access Management roles \_|\_ Binary\
    \ Authorization \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Reference
Send feedback
Separation of duties and Identity and Access Management roles
Stay organized with collections
Save and categorize content based on your preferences.
This pages describes how to configure different projects with different
IAM roles to establish
separation of duties among individuals or
teams for typical activities associated with using Binary Authorization.
Activities and associated IAM roles
In Google Cloud, separation of duties is accomplished by assigning
IAM roles to accounts in different projects. These accounts
include service accounts, used by GKE and
Binary Authorization, and user accounts, accessed by people.
By providing different organizational roles with specific IAM
roles, you can enforce the
principle of least privilege ,
ensuring that the user and service accounts in your organization have only the
roles essential to performing their intended functions.
To see the underlying permissions for each IAM role, see
Understanding roles .
The following table describes typical Binary Authorization activities. Separation of
duties is achieved by having separate Google Cloud project. Each project is
only granted the minimum required IAM roles to accomplish the
activity and associated tasks.
For an end-to-end tutorial describing this scenario, see:
Multi-project setup .
Activity
Task
IAM roles on Deployer Project
IAM roles on Attestor Project
IAM roles on Attestations Project
Security Operations (SecOps) Management
Create attestors
None
roles/containeranalysis.notesEditor roles/binaryauthorization.attestorsAdmin
None
Config Binary Authorization policy
roles/binaryauthorization.policyEditor
roles/binaryauthorization.attestorsViewer
None
Deployment Management
Enable Binary Authorization for a cluster
roles/serviceusage.serviceUsageAdmin roles/container.clusterAdmin
None
None
Attestation management
Create attestations
None
roles/containeranalysis.notes.attacher
roles/containeranalysis.occurrences.editor
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
