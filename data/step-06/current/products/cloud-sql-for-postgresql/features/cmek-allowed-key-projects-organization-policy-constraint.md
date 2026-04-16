---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.803Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "CMEK allowed key projects organization policy constraint"
feature_slug: "cmek-allowed-key-projects-organization-policy-constraint"
latest_feature_date: "2022-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
keywords:
  - "allowed"
  - "constraints"
  - "constraint"
  - "projects"
  - "organization"
  - "cmek"
  - "policy"
---

# CMEK allowed key projects organization policy constraint

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The constraints/gcp.restrictCmekCryptoKeyProjects policy constraint controls which projects can supply Cloud KMS keys for CMEK.

## Extended Definition

The constraints/gcp.restrictCmekCryptoKeyProjects policy constraint controls which projects can supply Cloud KMS keys for CMEK.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)

## Supporting Pages

### "Data residency overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview](https://docs.cloud.google.com/sql/docs/postgres/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use organizational policy constraints to enforce data residency requirements at the organization, project, or folder level.
- To enable or disable services for sets of users, you can combine organizational policy constraints using IAM policy configurations.
- You can also fine-tune policies for a constraint to specify multi-regions such as asia and europe , or regions such as us-east1 or europe-west1 , as allowed or denied locations.
- CMEK are intended for organizations that have sensitive or regulated data that requires them to manage their own encryption keys.

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "minLength" : integer , "complexity" : enum ( Complexity ) , "reuseInterval" : integer , "disallowUsernameSubstring" : boolean , "passwordChangeInterval" : string , "enablePasswordPolicy" : boolean , "disallowCompromisedCredentials" : boolean } Fields minLength integer Minimum number of characters allowed. complexity enum ( Complexity ) The complexity of the password. reuseInterval integer Number of previous passwords that cannot be reused. disallowUsernameSubstring boolean Disallow username as a part of the password. passwordChangeInterval string ( Duration format) Minimum interval after which the password can be changed.
- JSON representation { "allowedConsumerProjects" : [ string ] , "pscAutoConnections" : [ { object ( PscAutoConnectionConfig ) } ] , "networkAttachmentUri" : string , "pscEnabled" : boolean } Fields allowedConsumerProjects[] string Optional.
- The secret manager key storing the administrator credential. (e.g., projects/{project}/secrets/{secret}). organizationalUnit string Optional.
- When enabled, it enforces constraints on password complexity, length, and reuse.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- Source ID: `site-iam-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "minLength" : integer , "complexity" : enum ( Complexity ) , "reuseInterval" : integer , "disallowUsernameSubstring" : boolean , "passwordChangeInterval" : string , "enablePasswordPolicy" : boolean , "disallowCompromisedCredentials" : boolean } Fields minLength integer Minimum number of characters allowed. complexity enum ( Complexity ) The complexity of the password. reuseInterval integer Number of previous passwords that cannot be reused. disallowUsernameSubstring boolean Disallow username as a part of the password. passwordChangeInterval string ( Duration format) Minimum interval after which the password can be changed.
- JSON representation { "allowedConsumerProjects" : [ string ] , "pscAutoConnections" : [ { object ( PscAutoConnectionConfig ) } ] , "networkAttachmentUri" : string , "pscEnabled" : boolean } Fields allowedConsumerProjects[] string Optional.
- The secret manager key storing the administrator credential. (e.g., projects/{project}/secrets/{secret}). organizationalUnit string Optional.
- When enabled, it enforces constraints on password complexity, length, and reuse.

