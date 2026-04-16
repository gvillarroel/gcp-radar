---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.782Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "AWS CIEM identity and access findings"
feature_slug: "aws-ciem-identity-and-access-findings"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/ciem-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
keywords:
  - "aws"
  - "ciem"
  - "identity"
  - "access"
  - "findings"
  - "security"
  - "command"
  - "center"
---

# AWS CIEM identity and access findings

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center can generate CIEM findings for inactive identities, overly permissive trust policies, and lateral movement through impersonation in AWS environments.

## Extended Definition

Security Command Center can generate CIEM findings for inactive identities, overly permissive trust policies, and lateral movement through impersonation in AWS environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/ciem-overview](https://docs.cloud.google.com/security-command-center/docs/ciem-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)

## Supporting Pages

### "Overview of Cloud Infrastructure Entitlement Management \_|\_ Security Command\

- URL: [https://docs.cloud.google.com/security-command-center/docs/ciem-overview](https://docs.cloud.google.com/security-command-center/docs/ciem-overview)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Many different Security Command Center detection services (such as IAM recommender, Security Health Analytics, and CIEM) produce the identity and access findings that are considered part of Security Command Center's CIEM capabilities.
- With CIEM, Security Command Center presents Google Cloud, AWS, and Microsoft Azure ( Preview ) identity and access findings categorically on the Identity and access findings card of the Security Command Center Risk Overview page.
- This card provides quick access to a filtered view of identity and access misconfiguration findings on the Security Command Center Findings page.
- Security Command Center's CIEM capabilities provide a comprehensive view of the security of your identity and access configuration.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- November 21, 2024 Feature As of November 13, 2024, Security Command Center can produce Cloud Entitlement Infrastructure Management (CIEM) findings for the following identity and access issues in AWS environments: Users, groups, or assumed IAM roles that are inactive and have one or more permissions.
- December 16, 2024 Feature Security Command Center can now produce Cloud Infrastructure Entitlement Management (CIEM) misconfiguration findings for federated identities that are connected to your AWS environment through the AWS IAM Identity Center.
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
- For more information, see the following: IAM roles for Event Threat Detection custom modules IAM roles for Security Health Analytics custom modules December 11, 2023 Change New Container Threat Detection service account with new activations For activations of Security Command Center after December 7, 2023, Container Threat Detection uses a new service account for Identity and Access Management (IAM) permissions.

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AWS Identity and Access Management (IAM) This document describes how to integrate AWS Identity and Access Management (IAM) with Google Security Operations.
- Create Users(Dev need to be able to create their data in the company bucket) Create Groups (Developers as a group) Create Policies (John need to assign permissions to the users/group) Attach Policies (John attaches a policy to the group that lets devs read,write,list objects in AWS S3) Add/remove users from group (One of the devs becomes a manager, access should be changed) Before you begin This integration provides native platform capabilities and doesn't require external third-party API keys or credentials for authentication.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Policy was attached to <Identity Type>: <Identity Name>" The action should fail and stop a playbook execution: If error -: Print "Could not create <policy name> policy.
- Reason: {exception.stacktrace} General CSV Table Title: IAM Policies Columns: Policy Name Policy ID Create Date Update Date General Attach a Policy Description Attach the specified managed policy to an identity (user, group, role).

