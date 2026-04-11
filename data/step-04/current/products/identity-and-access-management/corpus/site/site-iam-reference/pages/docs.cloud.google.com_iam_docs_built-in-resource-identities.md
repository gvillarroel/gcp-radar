---
title: "Built-in identities for resources \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/built-in-resource-identities
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/built-in-resource-identities
  title: "Built-in identities for resources \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Guides
Send feedback
Built-in identities for resources
Stay organized with collections
Save and categorize content based on your preferences.
This page describes built-in identities for resources, which let you grant
roles to resources in your IAM allow policies.
Built-in identities
Some resources have built-in identities. These identities let the resources act
like principals . As a result, resources with built-in identities
can do the following:
Be granted IAM roles using the resource's
principal identifier
Access other resources without using service agents
For example, consider Parameter Manager parameters, which have built-in
identities. Parameters sometimes need access to Secret Manager to
function properly. To let a parameter access Secret Manager, you use
its identifier to grant it the Secret Manager Secret Accessor role
( roles/secretmanager.secretAccessor ). Then, the parameter can access
Secret Manager secrets on your behalf.
For a list of resources with built-in identities, see Resources with built-in
identities .
You can't use a resource's built-in identity to authenticate customer-managed
workloads, like workloads running on Compute Engine instances. If you
need to authenticate a workload, use one of the methods described in
Authentication methods at Google .
Granting roles to resources with built-in identities
If a resource has a built-in identity, you can grant roles to the resource by
including the resource's principal identifier in your allow policies. To see
what format to use for each resource's principal identifier, see Principal
identifiers for single resources .
IAM also offers identifiers for sets of resources with built-in
identities that share certain characteristics, such as type or ancestor. You can
use these identifiers in your allow policies to grant the same role to multiple
resources. To see what formats are supported, see Principal identifiers for
sets of resources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
