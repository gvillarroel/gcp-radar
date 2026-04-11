---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.247Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "External secret store support for Apigee Hybrid secrets"
feature_slug: "external-secret-store-support-for-apigee-hybrid-secrets"
latest_feature_date: "2024-08-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide"
keywords:
  - "AX hash salt"
  - "external secret store"
  - "vault secret store"
  - "additional hybrid secrets"
  - "external secrets"
  - "Redis password"
  - "HashiCorp Vault for Apigee secrets"
  - "encryption keys"
---

# External secret store support for Apigee Hybrid secrets

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Adds support for storing additional Apigee secrets such as AX hash salt, Redis password, and encryption keys in an external secret store like HashiCorp Vault.

## Extended Definition

Adds support for storing additional Apigee secrets such as AX hash salt, Redis password, and encryption keys in an external secret store like HashiCorp Vault.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)

## Supporting Pages

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- See Upgrading Apigee hybrid to version v1.13.0 and Step 3: Create the apigee namespace . v1.13.0 Feature Storing additional secrets in an external secret store Starting in version v1.13, You can now store AX Hash Salt, Redis password, and Encryption keys in an external secret store like Hashicorp Vault.

### "New Apigee hybrid installation and administration Preview \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you had not change the name of the encryption keys, then you can delete them by using: kubectl delete secret -n ${ APIGEE NAMESPACE } $APIGEE ENV -encryption-keys Delete Google Cloud service account secrets: kubectl delete secret -n ${ APIGEE NAMESPACE } $(kubectl get env $APIGEE ENV -n ${ APIGEE NAMESPACE } -o=jsonpath='{.spec.components. .appServiceAccountSecretName}') Delete kubernetes service accounts: kubectl delete secret -n ${ APIGEE NAMESPACE } $(kubectl get env $APIGEE ENV -n ${ APIGEE NAMESPACE } -o=jsonpath='{.spec.components. .podServiceAccountName}') Delete the Apigee environment custom resource: kubectl -n ${ APIGEE NAMESPACE } delete env $APIGEE ENV Deleting a hybrid setup Caution: This is how the steps will appear for normal apigee hybrid installation, steps will slightly differ for advanced cases like having second organization within same cluster etc.
- If you wish to create new service account and encryption keys for the new environment, copy the secrets.yaml into the new folder and rename the secrets appropriately to distinguish them from the other existing environments (this is usually done by adding the name of the environment as a suffix) Making appropriate changes to the apigee-environment.yaml , like: Changing the name of the environment If new service accounts and encryption keys are going to be created, they need to be correctly referenced in the yaml.
- Note: A basic installation has the following configuration: A single environment A single environment group A single Google Cloud service account is created and used for all the individual components Default values for all encryption keys and passwords.
- Delete the environment encryption keys.

