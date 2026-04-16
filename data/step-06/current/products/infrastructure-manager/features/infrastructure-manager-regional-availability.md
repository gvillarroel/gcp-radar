---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:30.393Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "Infrastructure Manager regional availability"
feature_slug: "infrastructure-manager-regional-availability"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/authentication"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries"
keywords:
  - "infrastructure"
  - "manager"
  - "regional"
  - "availability"
  - "became"
  - "available"
  - "in"
  - "additional"
---

# Infrastructure Manager regional availability

Product: Infrastructure Manager
Coverage: MEDIUM

## Step 02 Summary

Infrastructure Manager became available in additional regions across Asia Pacific, Europe, and the Americas.

## Extended Definition

Infrastructure Manager became available in additional regions across Asia Pacific, Europe, and the Americas.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- [https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints](https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication)
- [https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries](https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries)

## Supporting Pages

### Deploy infrastructure using Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Infrastructure Manager Guides Send feedback Deploy infrastructure using Infrastructure Manager Stay organized with collections Save and categorize content based on your preferences.
- ENFORCED : Enforce quota validation so that your deployment will fail if there isn't sufficient quota available for the infrastructure defined in your Terraform configuration file.
- ENFORCED : Enforce quota validation so that your deployment will fail if there isn't sufficient quota available for the infrastructure defined in your Terraform configuration file.
- ENFORCED : Enforce quota validation so that your deployment will fail if there isn't sufficient quota available for the infrastructure defined in your Terraform configuration file.

### "Manage Infrastructure Manager resources using custom constraints \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints](https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Constraint syntax Disable importing existing resources for new deployments name : organizations/ ORGANIZATION ID /customConstraints/custom.disallowImportExistingResources resourceTypes : ‐ config.googleapis.com/Deployment methodTypes : ‐ CREATE condition : "resource.importExistingResources == true" actionType : DENY displayName : Reject existing resources description : New deployments disallow the import of existing resources Infrastructure Manager supported resources The following table lists the Infrastructure Manager resources that you can reference in custom constraints.
- Home Documentation Infrastructure as code Infrastructure Manager Guides Send feedback Manage Infrastructure Manager resources using custom constraints Stay organized with collections Save and categorize content based on your preferences.
- Test the policy Try to create a Infra Manager deployment that imports existing resources in the project: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/us-central1/deployments/quickstart-deployment \ --service-account = projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --git-source-repo = https://github.com/terraform-google-modules/terraform-google-network \ --git-source-directory = modules/vpc \ --git-source-ref = main \ --input-values = project id = PROJECT ID ,network name = quickstart-vpc The output is the following: Operation denied by custom org policies: ["customConstraints/custom.disallowImportExistingResources": "New deployments disallow the import of existing resources."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Required roles To get the permissions that you need to manage organization policies, ask your administrator to grant you the following IAM roles: Organization Policy Administrator ( roles/orgpolicy.policyAdmin ) on the organization resource To create or update a deployment or preview deployment: Infra Manager Admin ( roles/config.admin ) on the project resource For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Authenticate to Infra Manager \_|\_ Infrastructure Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Infrastructure Manager Reference Send feedback Authenticate to Infra Manager Stay organized with collections Save and categorize content based on your preferences.
- How you authenticate to Infrastructure Manager depends on the interface you use to access the API and the environment where your code is running.
- Before you complete these instructions, you must complete the basic setup for Infra Manager, as described in Enable Infrastructure Manager .
- This document describes how to authenticate to Infrastructure Manager programmatically.

### "Infra Manager client libraries \_|\_ Infrastructure Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries](https://docs.cloud.google.com/infrastructure-manager/docs/reference/libraries)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Infrastructure Manager Reference Send feedback Infra Manager client libraries Stay organized with collections Save and categorize content based on your preferences.
- This page shows how to get started with the Cloud Client Libraries for the Infrastructure Manager API.
- Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Java If you are using Maven, add this to your pom.xml file: <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-infra-manager</artifactId> <version>0.5.0</version> </dependency> If you are using Gradle, add this to your dependencies: implementation 'com.google.cloud:google-cloud-infra-manager:0.5.0' For more information, see Setting Up a Java Development Environment .

