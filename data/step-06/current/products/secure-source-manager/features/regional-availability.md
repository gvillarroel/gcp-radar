---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.039Z"
product_name: "Secure Source Manager"
product_slug: "secure-source-manager"
feature_name: "Regional availability"
feature_slug: "regional-availability"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-source-manager/docs/locations"
  - "https://docs.cloud.google.com/secure-source-manager/docs/create-issues-pull-request-templates"
  - "https://docs.cloud.google.com/secure-source-manager/docs/resources"
  - "https://docs.cloud.google.com/secure-source-manager/docs/overview"
keywords:
  - "regional"
  - "availability"
  - "secure"
  - "source"
  - "manager"
  - "is"
  - "now"
  - "available"
---

# Regional availability

Product: Secure Source Manager
Coverage: MEDIUM

## Step 02 Summary

Secure Source Manager is now available in us-east1; Secure Source Manager is now available in me-west1.

## Extended Definition

Secure Source Manager is now available in us-east1; Secure Source Manager is now available in me-west1.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-source-manager/docs/locations](https://docs.cloud.google.com/secure-source-manager/docs/locations)
- [https://docs.cloud.google.com/secure-source-manager/docs/create-issues-pull-request-templates](https://docs.cloud.google.com/secure-source-manager/docs/create-issues-pull-request-templates)
- [https://docs.cloud.google.com/secure-source-manager/docs/resources](https://docs.cloud.google.com/secure-source-manager/docs/resources)
- [https://docs.cloud.google.com/secure-source-manager/docs/overview](https://docs.cloud.google.com/secure-source-manager/docs/overview)

## Supporting Pages

### Secure Source Manager locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/locations](https://docs.cloud.google.com/secure-source-manager/docs/locations)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To access resources, Secure Source Manager provides two types of service endpoints: A global endpoint - The default endpoint for requests: securesourcemanager.googleapis.com Regional endpoints - A regional endpoint only allows requests for resources in the same region.
- Regional endpoints are in the following format: securesourcemanager. region .rep.googleapis.com For more information about these service endpoints, see Configure data locality by using regional endpoints .
- Regions The following tables list the regions where Secure Source Manager is available.
- This document provides a list of regions where Secure Source Manager is available.

### "Create issue and pull request templates \_|\_ Secure Source Manager \_|\_\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/create-issues-pull-request-templates](https://docs.cloud.google.com/secure-source-manager/docs/create-issues-pull-request-templates)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This template should be defined in one of the following locations: /.securesourcemanager/ISSUE TEMPLATE.md /.securesourcemanager/issue template.md When a user creates a new issue, Secure Source Manager prompts that user to select a template, if any are available, or selects the default template.
- The more detail, the easier the review! --> User facing changes (remove if N/A) <!-- Describe any user facing changes this PR introduces. --> <!-- "Before" and "After" sections work great - bonus points for screenshots! --> <!-- Be sure all docs have been updated as well! --> Follow-up Work (remove if N/A) <!-- Mention any related follow up work to this PR. --> What's next Visit Work with issues and pull requests for details on how to work with issues and pull requests in Secure Source Manager.
- Required roles To get the permissions that you need to work with issues and pull request templates, ask your administrator to grant you the following IAM roles: Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) on the Secure Source Manager instance Secure Source Manager Repo Writer ( roles/securesourcemanager.repoWriter ) on the repository For more information about granting roles, see Manage access to projects, folders, and organizations .
- Save the template as a Markdown file in one of the following locations inside a repository: /.securesourcemanager/PULL REQUEST TEMPLATE.md /.securesourcemanager/pull request template.md When you create a new pull request, Secure Source Manager checks if a template exists in any of the defined locations and loads it.

### Resources \_|\_ Secure Source Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/resources](https://docs.cloud.google.com/secure-source-manager/docs/resources)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Secure Source Manager Resources Send feedback Resources Stay organized with collections Save and categorize content based on your preferences.
- Regulatory compliance Regulatory compliance details for Secure Source Manager.
- Quotas and limits Quotas and request limits for Secure Source Manager.
- Release notes Details about updates to Secure Source Manager.

### Secure Source Manager overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/overview](https://docs.cloud.google.com/secure-source-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instances and repositories Secure Source Manager instances are deployed to an available Google Cloud region and are accessible through their instance URIs.
- Secure Source Manager is a regionally deployed, single-tenant managed source code repository hosted on Google Cloud.
- Security compliance Secure Source Manager is in compliance with the following certifications: FedRAMP High compliant HIPAA compliant Configure a private Secure Source Manager instance in a VPC Service Controls perimeter You can use Secure Source Manager in a VPC Service Controls perimeter in order to guard against data exfiltration.
- This enables features like Private Google Access for Secure Source Manager repositories, letting you fetch code from Secure Source Manager without exposing your instance to the public internet.

