---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.904Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Security Command Center ingestion of Artifact Analysis findings"
feature_slug: "security-command-center-ingestion-of-artifact-analysis-findings"
latest_feature_date: "2025-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/access-control"
keywords:
  - "ingestion"
  - "security"
  - "findings"
  - "command"
  - "center"
  - "analysis"
  - "artifact"
  - "of"
---

# Security Command Center ingestion of Artifact Analysis findings

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Security Command Center now ingests Artifact Analysis findings from Artifact Registry image scans and supports exporting them to BigQuery.

## Extended Definition

Security Command Center now ingests Artifact Analysis findings from Artifact Registry image scans and supports exporting them to BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)

## Supporting Pages

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Security Command Center aggregates vulnerability findings from Artifact Registry scans, allowing you to view container image vulnerabilities within your running workloads, across all projects alongside your other security risks in Security Command Center.
- Centralized risk management with Security Command Center Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Security Command Center centralizes your cloud security, offering vulnerability scanning, threat detection, posture monitoring, and data management.
- Registry scanning This section outlines Artifact Analysis vulnerability scanning features based in Artifact Registry, and lists related Google Cloud products where you can enable complementary capabilities to support your security posture.

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- March 14, 2025 v1 Feature Security Command Center ingests Artifact Analysis scanning findings from images scanned in Artifact Registry and deployed to supported runtimes.
- For more information, see Container scanning overview . v1 Feature Artifact Analysis now supports scanning for vulnerabilities in the following types of operating systems: AlmaLinux OS Chainguard Google Distroless Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry addressing these new operating systems, in addition to already supported operating system and language package vulnerabilities.
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.
- For more information, see the Types of scanning in the Container Analysis documentation October 11, 2022 v1 Feature When users enable the Container Scanning API and push container images to Artifact Registry, automatic container scanning now generates metadata including a software bill of materials (SBOM) dependency list.

### Access control with IAM \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- To grant a role to a single principal, run the following command: gcloud artifacts repositories add-iam-policy-binding REPOSITORY \ --location = LOCATION \ --member = PRINCIPAL \ --role = ROLE where REPOSITORY is the ID of the repository.
- To revoke a role for a repository, run the following command: gcloud artifacts repositories remove-iam-policy-binding REPOSITORY --location = LOCATION \ --member = PRINCIPAL \ --role = ROLE where REPOSITORY is the ID of the repository.
- To grant a role to a single principal, run the following command: gcloud projects add-iam-policy-binding PROJECT \ --member = PRINCIPAL \ --role = ROLE where PROJECT is the ID of the project where Artifact Registry is running.
- Run the following command: gcloud artifacts repositories add-iam-policy-binding REPOSITORY \ --location = LOCATION --member = allUsers --role = ROLE where REPOSITORY is the ID of the repository.

