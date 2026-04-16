---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.572Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Environment service account scoped permissions"
feature_slug: "environment-service-account-scoped-permissions"
latest_feature_date: "2022-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/security-practices"
keywords:
  - "permissions"
  - "account"
  - "scoped"
  - "assign"
  - "environment"
  - "lets"
---

# Environment service account scoped permissions

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 2 lets you assign permissions for an environment's service account at the service-account level instead of the project level.

## Extended Definition

Cloud Composer 2 lets you assign permissions for an environment's service account at the service-account level instead of the project level.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/security-practices](https://docs.cloud.google.com/composer/docs/composer-1/security-practices)

## Supporting Pages

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Step 13. (Optional) Use a custom environment's bucket Warning: Because your environment runs DAGs on behalf of your environment's service account, users who can add and modify DAGs in the custom environment's bucket can run their code on behalf of the environment's service account and exercise all permissions of this account .
- Because your environment runs DAGs on behalf of your environment's service account, users who can add and modify DAGs in your environment's bucket can run their code on behalf of the environment's service account and exercise all permissions of this account .
- Make sure that you are familiar with security considerations for environment's service accounts and understand how this account interacts with permissions and roles that you grant to individual users in your project.
- Make sure that you are familiar with security considerations for environment's service accounts and understand how this account interacts with permissions and roles that you grant to individual users in your project.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Because your environment runs DAGs on behalf of your environment's service account, users who can add and modify DAGs in your environment's bucket can run their code on behalf of the environment's service account and exercise all permissions of this account .
- Make sure that you are familiar with security considerations for environment's service accounts and understand how this account interacts with permissions and roles that you grant to individual users in your project.
- In this case, if you grant extra permissions to access resources in your project to this account, all environments that use it will get the same permissions.
- Warning: Your environment's service account can have too broad permissions on your project .

### Security best practices \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/security-practices](https://docs.cloud.google.com/composer/docs/composer-1/security-practices)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Assign to these service accounts only permissions that are strictly necessary to operate these environments and perform operations defined in Airflow DAGs that they run.
- In this way, changes to your environment configuration can be reviewed before they are applied, and you can reduce the number of users who have permissions to change the configuration by assigning roles with less permissions.
- Make sure that you are familiar with security considerations for environment's service accounts and understand how this account interacts with permissions and roles that you grant to individual users in your project.
- While it is possible to create an environment that uses an account with broad permissions, such as those granted by the Editor basic role, this creates a risk of DAGs using broader permissions than intended.

