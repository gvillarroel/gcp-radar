---
title: "Custom roles \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/reference/custom-roles
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/reference/custom-roles
  title: "Custom roles \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
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
Custom roles
Stay organized with collections
Save and categorize content based on your preferences.
Overview
IAM provides the ability to create
custom roles . You can create a custom
IAM role with one or more permissions and then grant that custom
role to users who are part of your organization. Custom roles enable you to
enforce the
principle of least privilege ,
ensuring that the user and service accounts in your organization have only the
permissions essential to performing their intended functions. For information
about creating custom roles, see
Creating and managing custom roles .
Common user flows and permissions
The following table lists common user flows and the
required permissions for performing Binary Authorization operations.
The user flows and required permissions listed in the table are not exhaustive.
To learn more about Binary Authorization-related permissions, see
Permissions .
To learn more about all Google Cloud permissions, see
IAM Permissions .
User flow
Required permissions
Enable the API
On the attestor and deployer project:
serviceusage.services.get
serviceusage.services.list
serviceusage.services.enable
serviceusage.services.disable
serviceusage.services.use
serviceusage.services.generateServiceIdentity
serviceusage.services.getServiceIdentity
serviceusage.quotas.get
serviceusage.quotas.update
serviceusage.operations.cancel
serviceusage.operations.delete
serviceusage.operations.get
serviceusage.operations.list
Configure a policy
On the deployer project:
resourcemanager.projects.get
resourcemanager.projects.list
binaryauthorization.policy.get
binaryauthorization.policy.update
On the attestor project:
resourcemanager.projects.get
resourcemanager.projects.list
binaryauthorization.attestors.get
binaryauthorization.attestors.list
Update a policy
On the deployer project:
binaryauthorization.policy.update
Create an attestor
On the attestor project:
containeranalysis.notes.list
resourcemanager.projects.get
resourcemanager.projects.list
binaryauthorization.attestors.get
binaryauthorization.attestors.list
binaryauthorization.attestors.create
Update an attestor
On the containing attestor:
binaryauthorization.attestors.update
Create an attestation
On the note resource (or project):
containeranalysis.notes.get
containeranalysis.notes.attachOccurrence
On the attestation project:
containeranalysis.occurrences.create
containeranalysis.occurrences.update
containeranalysis.occurrences.get
containeranalysis.occurrences.list
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
