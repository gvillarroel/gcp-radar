---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.930Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "On-Demand Scanning for Go packages"
feature_slug: "on-demand-scanning-for-go-packages"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications"
  - "https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins"
keywords:
  - "packages"
  - "demand"
  - "scanning"
  - "go"
  - "on"
  - "artifact"
  - "for"
  - "in"
---

# On-Demand Scanning for Go packages

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

On-Demand Scanning for Go packages in Artifact Registry is generally available for container images to identify Go package vulnerabilities.

## Extended Definition

On-Demand Scanning for Go packages in Artifact Registry is generally available for container images to identify Go package vulnerabilities.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications](https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications)
- [https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins](https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins)

## Supporting Pages

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- On-demand scanning The Google Cloud CLI command gcloud artifacts docker images scan scans for vulnerabilities in local images or images in the Container Registry.
- On-demand scanning The Google Cloud CLI command gcloud artifacts docker images scan scans for vulnerabilities in local images or images in the Artifact Registry.
- Metadata storage and analysis with Artifact Analysis Scans for OS and language package vulnerabiities with on-demand scanning in images with a supported OS.
- Feature Container Registry Artifact Registry Supported formats Container images only Multiple artifact formats , including container images, language packages, and OS packages.

### "Configure monitoring notifications for repository growth \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications](https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Artifact Registry Guides Send feedback Configure monitoring notifications for repository growth Stay organized with collections Save and categorize content based on your preferences.
- Before you begin To get the permissions that you need to create and modify alerting policies by using the Google Cloud console, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- These instructions are for the Google Cloud console.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Integrating with Jenkins \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins](https://docs.cloud.google.com/artifact-registry/docs/configure-jenkins)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Console To create a cluster using Google Cloud console, perform the following steps: Visit the Artifact Registry menu in Google Cloud console.
- Run the following command to list packages in the repository: gcloud artifacts packages list --repository = mvn-jenkins --location = LOCATION The output looks similar to the following example: Listing items under project {YOUR PROJECT}, repository mvn-jenkins.
- Home Documentation Application development Artifact Registry Guides Send feedback Integrating with Jenkins Stay organized with collections Save and categorize content based on your preferences.
- Configuring access to your repository Create a dedicated service account for Jenkins to use with Artifact Registry.

