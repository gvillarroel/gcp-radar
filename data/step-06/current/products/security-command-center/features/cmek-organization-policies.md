---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.607Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "CMEK organization policies"
feature_slug: "cmek-organization-policies"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/cmek"
  - "https://docs.cloud.google.com/security-command-center/docs/activate-premium-tier"
  - "https://docs.cloud.google.com/security-command-center/docs/activate-standard-tier"
keywords:
  - "cmek"
  - "organization"
  - "policies"
  - "security"
  - "command"
  - "center"
  - "can"
  - "use"
---

# CMEK organization policies

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center can use customer-managed encryption keys organization policies.

## Extended Definition

Security Command Center can use customer-managed encryption keys organization policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/cmek](https://docs.cloud.google.com/security-command-center/docs/cmek)
- [https://docs.cloud.google.com/security-command-center/docs/activate-premium-tier](https://docs.cloud.google.com/security-command-center/docs/activate-premium-tier)
- [https://docs.cloud.google.com/security-command-center/docs/activate-standard-tier](https://docs.cloud.google.com/security-command-center/docs/activate-standard-tier)

## Supporting Pages

### Enable CMEK for Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/cmek](https://docs.cloud.google.com/security-command-center/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported resource types CMEK encrypts data for the following Security Command Center resource types: Findings Notification configurations BigQuery exports Mute configs CMEK organization policy constraints To enforce CMEK usage for Security Command Center, you can enforce the following organization policy constraints at the organization, folder, or project level: constraints/gcp.restrictNonCmekServices : Requires you to use CMEK.
- Resolve errors creating protected resources If you choose Google-owned and Google-managed encryption keys when you activate Security Command Center, and then you enforce a CMEK organization policy constraint within that organization, you won't be able to create new resources that support CMEK .
- To learn more, see the following: Activate Security Command Center Standard tier for an organization Activate Security Command Center Premium tier for an organization You can use CMEK organization policy constraints to enforce your encryption settings when you activate Security Command Center.
- If you enforce constraints/gcp.restrictNonCmekServices on an organization, and you've listed Security Command Center as a restricted service that's required to use CMEK, then you must enable CMEK when you activate Security Command Center.

### "Activate Security Command Center Premium tier for an organization \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-premium-tier](https://docs.cloud.google.com/security-command-center/docs/activate-premium-tier)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your organization policies are set to restrict resource usage , verify that the following APIs are allowed by your policy : cloudsecuritycompliance.googleapis.com securitycenter.googleapis.com securitycentermanagement.googleapis.com Activate Security Command Center Premium You can activate Security Command Center Premium for an organization through the Google Cloud console.
- Caution: Security Command Center doesn't validate your data residency location against any organization policies that enforce the resource locations constraint , gcp.resourceLocations .
- When you activate Security Command Center, you must select a location that's consistent with your organization policies.
- Security Command Center Premium activation includes the following service agents: Cloud Security Command Center Service Agent for Event Threat Detection, Security Health Analytics, Virtual Machine Threat Detection, and Vulnerability Assessment Cloud Security Compliance Service Agent for AI Protection and Compliance Manager Container Threat Detection Service Agent for Container Threat Detection Data Security Posture Management Service Agent for DSPM Note: If you use service perimeters , you must configure ingress and egress policies for service agents to allow them access to each service.

### "Activate Security Command Center Standard tier for an organization \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-standard-tier](https://docs.cloud.google.com/security-command-center/docs/activate-standard-tier)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your organization policies are set to restrict resource usage , verify that the following APIs are allowed by your policy : securitycenter.googleapis.com securitycentermanagement.googleapis.com Activate Security Command Center Standard You can activate Security Command Center Standard for an organization through the Google Cloud console.
- Caution: Security Command Center doesn't validate your data residency location against any organization policies that enforce the resource locations constraint , gcp.resourceLocations .
- When you activate Security Command Center, you must select a location that's consistent with your organization policies.
- Required roles To get the permissions that you need to activate Security Command Center for an organization, ask your administrator to grant you the following IAM roles on your organization: Security Center Admin ( roles/securitycenter.admin ) Organization Administrator ( roles/resourcemanager.organizationAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

