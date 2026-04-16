---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.478Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Security Command Center ingestion of Artifact Analysis findings"
feature_slug: "security-command-center-ingestion-of-artifact-analysis-findings"
latest_feature_date: "2025-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
  - "https://docs.cloud.google.com/artifact-registry/docs/access-control"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/authentication"
keywords:
  - "ingestion"
  - "security"
  - "findings"
  - "command"
  - "center"
  - "analysis"
---

# Security Command Center ingestion of Artifact Analysis findings

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Security Command Center now ingests Artifact Analysis findings from Artifact Registry image scans and supports exporting them to BigQuery.

## Extended Definition

Security Command Center now ingests Artifact Analysis findings from Artifact Registry image scans and supports exporting them to BigQuery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)

## Supporting Pages

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Security Command Center aggregates vulnerability findings from Artifact Registry scans, allowing you to view container image vulnerabilities within your running workloads, across all projects alongside your other security risks in Security Command Center.
- Centralized risk management with Security Command Center Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Security Command Center centralizes your cloud security, offering vulnerability scanning, threat detection, posture monitoring, and data management.
- Registry scanning This section outlines Artifact Analysis vulnerability scanning features based in Artifact Registry, and lists related Google Cloud products where you can enable complementary capabilities to support your security posture.

### Access control with IAM \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- For example, to add an IAM policy binding for the role roles/artifactregistry.writer for the user write@gmail.com with the repository my-repo in the location --us-west1 , run: gcloud artifacts repositories add-iam-policy-binding my-repo \ --location = us-west1 --member = user:write@gmail.com --role = roles/artifactregistry.writer To grant roles using a policy file, use the procedure described in Grant or revoke multiple roles programmatically with the gcloud artifacts repositories get-iam-policy and gcloud artifacts repositories set-iam-policy commands.
- To specify access scopes when creating a cluster, run the following command: gcloud container clusters create NAME --scopes = SCOPES To specify access scopes when creating a node pool, run the following command: gcloud container node-pools create NAME --scopes = SCOPES Replace the following values: NAME is the name of the cluster or node pool.
- If you're granting roles using the gcloud command, you can specify a single role binding for a principal or you can make large-scale policy changes by getting a resource's allow policy, modifying it, and then setting the modified allow policy.
- To grant a role to a single principal, run the following command: gcloud artifacts repositories add-iam-policy-binding REPOSITORY \ --location = LOCATION \ --member = PRINCIPAL \ --role = ROLE where REPOSITORY is the ID of the repository.

### "Configure authentication to Artifact Registry for Docker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- Source ID: `site-docs-root-2`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- If you want to use sudo with docker commands instead of using the Docker security group, configure credentials with sudo docker-credential-gcr configure-docker instead.
- If you want to use sudo with docker commands instead of using the Docker security group, configure credentials with sudo gcloud auth configure-docker instead.
- To add your username, run the following command: sudo usermod -a -G docker ${USER} Windows The Docker security group is called docker-users .
- On Linux or Windows, add the user that you use to run Docker commands to the Docker security group.

