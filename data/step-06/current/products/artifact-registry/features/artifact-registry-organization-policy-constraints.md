---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.908Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry organization policy constraints"
feature_slug: "artifact-registry-organization-policy-constraints"
latest_feature_date: "2024-10-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/custom-constraints"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/cmek"
keywords:
  - "organization"
  - "constraints"
  - "policy"
  - "supports"
  - "registry"
  - "artifact"
  - "now"
  - "for"
---

# Artifact Registry organization policy constraints

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry now supports organization policy constraints for governance configuration.

## Extended Definition

Artifact Registry now supports organization policy constraints for governance configuration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)

## Supporting Pages

### "Use custom organization policies \_|\_ Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following command creates a remote repository named my-repo in the region us-east1 in the Google Cloud project my-project and can authenticate to the upstream repository using the username my-username and secret version projects/my-project/secrets/my-secret/versions/1 . gcloud artifacts repositories create my-repo \ --project = my-project \ --repository-format = python \ --location = us-east1 \ --description = "Remote Python repository" \ --mode = remote-repository \ --remote-repo-config-desc = "PyPI" \ --remote-username = my-username \ --remote-password-secret-version = projects/my-project/secrets/my-secret/versions/1 \ --remote-python-repo = PYPI The output is the following: Operation denied by custom org policies: ["customConstraints/custom.enableDockerRemotes": "All remote repositories must be Docker format."] Artifact Registry supported resources Artifact Registry supports custom constraints, on all fields except labels , for create and update operations on the repository resource.
- Example custom organization policies for common use cases The following table provides the syntax of some custom organization policies that you might find useful: Description Constraint syntax Disable creating remote repositories name : organizations/ ORGANIZATION ID /customConstraints/custom.disableRemotes resourceTypes : - artifactregistry.googleapis.com/Repository methodTypes : - CREATE condition : "resource.mode in ['STANDARD', 'VIRTUAL']" actionType : ALLOW displayName : Disable remote repository creation description : All repositories must be standard or virtual mode.
- Required roles To get the permissions that you need to manage organization policies, ask your administrator to grant you the following IAM roles: Organization policy administrator ( roles/orgpolicy.policyAdmin ) on the organization resource To test your organization policy: Artifact Registry Admin ( roles/artifactregistry.admin ) on the organization resource For more information about granting roles, see Manage access to projects, folders, and organizations .
- Enforce tag immutability for Docker format repositories name : organizations/ ORGANIZATION ID /customConstraints/custom.enableAutoUpgrade resourceTypes : - artifactregistry.googleapis.com/Repository methodTypes : - CREATE condition : "resource.format == 'DOCKER' && !resource.dockerConfig.immutableTags" actionType : DENY displayName : Enforce tag immutability description : All new Docker repositories must have tag immutability enabled.

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- October 15, 2024 v1 Feature Organization policy constraints for Artifact Registry is available in General Availability .
- For more information, see Container scanning overview . v1 Feature Artifact Analysis now supports scanning for vulnerabilities in the following types of operating systems: AlmaLinux OS Chainguard Google Distroless Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry addressing these new operating systems, in addition to already supported operating system and language package vulnerabilities.
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.
- May 03, 2021 v1beta2 Feature Artifact Registry now supports audit logging for container images in Cloud Audit Logs.

### "Enabling customer-managed encryption keys \_|\_ Artifact Registry \_|\_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CMEK organization policies Artifact Registry supports organization policy constraints that can require CMEK protection.
- Required roles To get the permissions that you need to use Autokey to create protected repositories, ask your administrator to grant you the following IAM roles on the folder or project: Cloud KMS Autokey User ( roles/cloudkms.autokeyUser ) Artifact Registry Admin ( roles/artifactregistry.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- When constraints/gcp.restrictCmekCryptoKeyProjects is configured, Artifact Registry creates CMEK-protected repositories that are protected by a CryptoKey from an allowed project, folder, or organization.
- When Artifact Registry API is in the Deny policy list of services of constraint constraints/gcp.restrictNonCmekServices , Artifact Registry refuses to create new repositories that aren't CMEK-protected.

