---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.928Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry regional availability in europe-southwest1"
feature_slug: "artifact-registry-regional-availability-in-europe-southwest1"
latest_feature_date: "2022-05-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers"
  - "https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins"
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
keywords:
  - "southwest1"
  - "availability"
  - "regional"
  - "europe"
  - "registry"
  - "artifact"
  - "is"
  - "in"
---

# Artifact Registry regional availability in europe-southwest1

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry is available in the europe-southwest1 region (Madrid, Spain).

## Extended Definition

Artifact Registry is available in the europe-southwest1 region (Madrid, Spain).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- [https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins](https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins)
- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)

## Supporting Pages

### "Migrate container images from a third-party registry \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Keep track of new image pulls by running the following query in the BigQuery console: SELECT FORMAT TIMESTAMP ( "%D %R" , timestamp ) as timeOfImagePull , REGEXP EXTRACT ( jsonPayload . message , r '"(. ?)"' ) AS imageName , COUNT ( ) AS numberOfPulls FROM image pull logs . events ` GROUP BY timeOfImagePull , imageName ORDER BY timeOfImagePull DESC , numberOfPulls DESC All new image pulls should be from Artifact Registry and contain the string docker.pkg.dev .
- GO111MODULE = on go get github.com/google/go-containerregistry/cmd/gcrane Create a script named copy images.sh to copy your list of files. #!/bin/bash images = $( cat images.txt ) if [ -z " ${ AR PROJECT } " ] then echo ERROR: AR PROJECT must be set before running this exit 1 fi for img in ${ images } do gcrane cp ${ img } LOCATION -docker.pkg.dev/ ${ AR PROJECT } / ${ img } done Replace LOCATION with the regional or multi-regional location of the repository.
- Costs This guide uses the following billable components of Google Cloud: GKE Artifact Registry BigQuery Logging Identify images to migrate Search the files you use to build and deploy your container images for references to third-party registries, then check how often you pull the images.
- Enable the Artifact Registry API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### Integrating with Jenkins \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins](https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Artifact Registry Guides Send feedback Integrating with Jenkins Stay organized with collections Save and categorize content based on your preferences.
- Console To create a cluster using Google Cloud console, perform the following steps: Visit the Artifact Registry menu in Google Cloud console.
- In the project that contains the repository, grant the Artifact Registry Writer role to the Jenkins service account that you created.
- Configuring access to your repository Create a dedicated service account for Jenkins to use with Artifact Registry.

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Security Command Center aggregates vulnerability findings from Artifact Registry scans, allowing you to view container image vulnerabilities within your running workloads, across all projects alongside your other security risks in Security Command Center.
- Registry scanning This section outlines Artifact Analysis vulnerability scanning features based in Artifact Registry, and lists related Google Cloud products where you can enable complementary capabilities to support your security posture.
- Home Documentation Application development Artifact Registry Guides Send feedback Artifact analysis and vulnerability scanning Stay organized with collections Save and categorize content based on your preferences.
- Its detection points are built into a number of Google Cloud products such as Artifact Registry and Google Kubernetes Engine (GKE) for quick enablement.

