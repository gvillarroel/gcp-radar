---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:09.991Z"
product_name: "Managed Service for Microsoft Active Directory"
product_slug: "managed-service-for-microsoft-active-directory"
feature_name: "User migration to Managed Microsoft AD"
feature_slug: "user-migration-to-managed-microsoft-ad"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-migration"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/enable-migrate-permissions"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust"
keywords:
  - "user"
  - "migration"
  - "managed"
  - "microsoft"
  - "ad"
  - "you"
  - "can"
  - "migrate"
---

# User migration to Managed Microsoft AD

Product: Managed Service for Microsoft Active Directory
Coverage: MEDIUM

## Step 02 Summary

You can migrate users from an existing domain to Managed Microsoft AD, including on-premises domains with SID History.

## Extended Definition

You can migrate users from an existing domain to Managed Microsoft AD, including on-premises domains with SID History.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-migration](https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-migration)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/enable-migrate-permissions](https://docs.cloud.google.com/managed-microsoft-ad/docs/enable-migrate-permissions)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust)

## Supporting Pages

### "Existing domain migration overview \_|\_ Managed Service for Microsoft Active\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-migration](https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-migration)
- Source ID: `site-docs-reference-required-1`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, if you want to use the same users from your on-premises domain in Managed Microsoft AD, you can use Active Directory Migration Toolkit (ADMT) that helps you automate the migration of AD objects between two trusted domains.
- Home Documentation Access and resource management Managed Microsoft AD Guides Send feedback Existing domain migration overview Stay organized with collections Save and categorize content based on your preferences.
- This page explains how Google Cloud can help you migrate an existing Active Directory domain from on-premises to Managed Service for Microsoft Active Directory while preserving SID history.
- In this approach, you must create and configure all the users, groups, and other AD objects from your on-premises domain again on the new Managed Microsoft AD domain.

### "Enable permissions for migrating an on-premises domain with SID history\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/enable-migrate-permissions](https://docs.cloud.google.com/managed-microsoft-ad/docs/enable-migrate-permissions)
- Source ID: `site-docs-reference-required-1`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Delegate permissions To delegate the ability to migrate an on-premises domain with SID history, add the global group or the single user to the following groups on Managed Microsoft AD: Cloud Service Administrators Cloud Service Migrate SID Administrators Managed Microsoft AD delegates the permissions to users added to the global group or the single user, which in turn lets them migrate SID history from the on-premises domain using ADMT.
- To add the global group or the user to the required Managed Microsoft AD groups and delegate the permissions, run the following commands in PowerShell: Add-ADGroupMember -Identity 'Cloud Service Administrators' \ -Members GROUP OR USER Add-ADGroupMember -Identity 'Cloud Service Migrate SID Administrators' \ -Members GROUP OR USER Replace GROUP OR USER with the name of your global group or user.
- To enable the permissions required for migrating your on-premises domain with SID history, run the following gcloud CLI command: gcloud beta active-directory domains migration enable DOMAIN NAME \ --onprem-domains= SOURCE DOMAIN NAME \ --disable-sid-filtering-domains= SID FILTERING DOMAIN NAME Replace the following: DOMAIN NAME : The name of your Managed Microsoft AD domain.
- Enable permissions on the Managed Microsoft AD domain When you enable the permissions required on Managed Microsoft AD using the gcloud CLI, Managed Microsoft AD creates a delegated group, Cloud Service Migrate SID Administrators , under the Cloud Service Objects OU .

### "Create a trust with an on-premises domain \_|\_ Managed Service for Microsoft\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust)
- Source ID: `site-docs-reference-required-1`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It can take up to 10 minutes for setup to complete. gcloud To create a one-way trust, run the following gcloud CLI command: gcloud active-directory domains trusts create DOMAIN \ --target-dns-ip-addresses= TARGET DNS IP ADDRESSES \ --target-domain-name= TARGET DOMAIN NAME \ --direction=OUTBOUND Replace the following: DOMAIN : The FQDN of the Managed Microsoft AD domain.
- Home Documentation Access and resource management Managed Microsoft AD Guides Send feedback Create a trust with an on-premises domain Stay organized with collections Save and categorize content based on your preferences.
- Configure the Managed Microsoft AD domain To establish the trust on the Managed Microsoft AD domain, complete the following steps: Console Open the Managed Microsoft AD page in the Google Cloud console.
- Create DNS conditional forwarder To configure the DNS conditional forwarders on your on-premises domain, use the DNS IP addresses for your Managed Microsoft AD domain to complete the following steps.

