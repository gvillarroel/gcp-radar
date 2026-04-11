---
title: "Resource types with built-in identities \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/transcoder
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities
  title: "Resource types with built-in identities \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Reference
Send feedback
Resource types with built-in identities
Stay organized with collections
Save and categorize content based on your preferences.
Some Google Cloud resources have built-in
identities . These identities let the resources act
like principals . As a result, resources with built-in identities
can do the following:
Be granted IAM roles using the resource's
principal identifier
Access other resources without using service agents
Principal identifiers for single resources
The following table lists the resource types that have built-in identities. It
also lists the accepted formats for the resource's principal identifier. Use one
of the accepted formats for the principal identifier in your allow policies to
grant roles to the resource.
Resource type
Principal identifier format
Parameter Manager parameters
principal://parametermanager.googleapis.com/ projects/ PROJECT_NUMBER / uid/ locations/ global/ parameters/ PARAMETER_UID
Workload identity pool (preview)
principal://iam.googleapis.com/projects/ PROJECT_NUMBER /name/locations/global/workloadIdentityPools/ WORKLOAD_IDENTITY_POOL_NAME
Principal identifiers for sets of resources
Use the following formats in your allow policies to grant roles to sets of
resources with built-in identities:
Note: These principal sets don't include resources that don't have built-in
identities.
Description
Format
All resources for the specified service in the specified project
principalSet:// RESOURCE_SERVICE / projects/ PROJECT_NUMBER / *
All resources in the specified project with the specified type
principalSet:// RESOURCE_SERVICE / projects/ PROJECT_NUMBER / type/ RESOURCE_TYPE / *
All resources with the specified ancestor
principalSet:// RESOURCE_SERVICE / projects/ PROJECT_NUMBER / ancestor.name/ ANCESTOR_RESOURCE_TYPE / ANCESTOR_RESOURCE_NAME
principalSet:// RESOURCE_SERVICE / projects/ PROJECT_NUMBER / ancestor.uid/ ANCESTOR_RESOURCE_TYPE / ANCESTOR_RESOURCE_UID
All resources with the specified type and the specified ancestor
principalSet:// RESOURCE_SERVICE / projects/ PROJECT_NUMBER / type/ RESOURCE_TYPE / ancestor.name/ ANCESTOR_RESOURCE_TYPE / ANCESTOR_RESOURCE_NAME
principalSet:// RESOURCE_SERVICE / projects/ PROJECT_NUMBER / type/ RESOURCE_TYPE / ancestor.uid/ ANCESTOR_RESOURCE_TYPE / ANCESTOR_RESOURCE_UID
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
