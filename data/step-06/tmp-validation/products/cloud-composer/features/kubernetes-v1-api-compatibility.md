---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.810Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Kubernetes v1 API compatibility"
feature_slug: "kubernetes-v1-api-compatibility"
latest_feature_date: "2020-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
keywords:
  - "compatible"
  - "compatibility"
  - "kubernetes"
  - "uses"
---

# Kubernetes v1 API compatibility

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer uses the Kubernetes v1 API and is compatible with GKE 1.16.

## Extended Definition

Cloud Composer uses the Kubernetes v1 API and is compatible with GKE 1.16.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)

## Supporting Pages

### "Migrate to Cloud Composer\_3 from Cloud Composer\_1 (Airflow 2) \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that your DAGs are compatible with Cloud Composer 3 Make sure that your DAGs are compatible with Cloud Composer 3 by following these suggestions: The [list of packages][cc-versions] in the Cloud Composer 3 environment can be different than in your Cloud Composer 1 environment.
- Cloud Composer loads configuration overrides, environment variables, and PyPI packages from your Cloud Composer 1 environment's snapshot to Cloud Composer 3 without changing or adjusting them for compatibility.
- Note: Cloud Composer loads configuration overrides, environment variables, and PyPI packages from your Cloud Composer 1 environment to Cloud Composer 3 without changing or adjusting them for compatibility.
- In particular, KubernetesPodOperator workloads now scale independently from your environment and it's not possible to use Pod affinity configs.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
- DAG objects for this environment reside in a simulated directory with the given prefix. nodeCount integer The number of nodes in the Kubernetes Engine cluster that will be used to run this environment.
- Whether or not master authorized networks feature is enabled. cidrBlocks[] object ( CidrBlock ) Up to 50 external networks that could access Kubernetes master through HTTPS.
- Enums CONNECTION TYPE UNSPECIFIED No specific connection type was requested, so the environment uses the default value corresponding to the rest of its configuration.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- If your environment uses resource location restrictions , or installs PyPI packages from an Artifact Registry repository or from a private repository , then grant the Service Account User ( iam.serviceAccountUser ) role to the user-managed service account that runs your environment on itself (both the principal and the resource are the same service account).
- Python version If your environment uses Airflow 1.10. and earlier Airflow versions, you can make your environment use Python 2.
- Node count is the number of Google Kubernetes Engine nodes in the environment's cluster.
- Node count is the number of Google Kubernetes Engine nodes in the environment's cluster.

