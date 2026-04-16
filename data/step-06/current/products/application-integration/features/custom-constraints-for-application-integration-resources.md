---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.464Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Custom constraints for Application Integration resources"
feature_slug: "custom-constraints-for-application-integration-resources"
latest_feature_date: "2025-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/cmek"
  - "https://docs.cloud.google.com/application-integration/docs/security-guidelines"
  - "https://docs.cloud.google.com/application-integration/docs/setup-application-integration"
keywords:
  - "organization"
  - "constraints"
  - "policy"
  - "resources"
  - "custom"
---

# Custom constraints for Application Integration resources

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Organization Policy custom constraints can now be applied to specific fields of certain Application Integration resources for finer-grained governance.

## Extended Definition

Organization Policy custom constraints can now be applied to specific fields of certain Application Integration resources for finer-grained governance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek)
- [https://docs.cloud.google.com/application-integration/docs/security-guidelines](https://docs.cloud.google.com/application-integration/docs/security-guidelines)
- [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)

## Supporting Pages

### "Customer-managed encryption keys \_|\_ Application Integration \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Additionally, grant the following IAM permissions for the project that stores your encryption keys: cloudkms.cryptoKeys.setIamPolicy cloudkms.keyRings.create cloudkms.cryptoKeys.create cloudkms.cryptoKeyVersions.useToEncrypt Caution: The Cloud KMS Admin role contains permissions for key maintenance and key version destruction.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Application Integration.
- After you set up your resources with CMEKs, the experience of accessing your Application Integration resources is similar to using Google default encryption.
- Select Use a Customer-managed encryption key (CMEK) , and do the following: Select a CMEK key from the available drop-down list.

### Application Integration security guidelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/security-guidelines](https://docs.cloud.google.com/application-integration/docs/security-guidelines)
- Source ID: `site-docs-root-2`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Custom roles are useful in managing access to your Google Cloud resources and ensuring that users and applications have only the permissions required to perform their intended tasks.
- For more information, see Managing secure-by-default organization resources .
- For example, you may create a custom role that allows a service account to read and write data to a Cloud Storage bucket, but not delete it.
- You can create custom roles using the Identity and Access Management (IAM) and assign the roles to users, groups, or service accounts.

### Set up Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to set up Application Integration, ask your administrator to grant you the following IAM roles on your project: Google Cloud Project Editor ( roles/editor ) Cloud KMS Admin ( roles/cloudkms.admin ) Application Integration Admin ( roles/integrations.integrationAdmin ) Connector Admin ( roles/connectors.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Perform the following steps under the Select region section: Region: Select the regional location where you want to deploy Application Integration resources and store data for your integrations.
- Customer-managed encryption key (CMEK): Use this method if you want to control and manage the encryption keys that protect your data in the selected region.
- Tip: You can use the Policy Troubleshooter if you encounter any access issues while assigning the IAM roles and permissions in your Google Cloud project.

