---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.490Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry gcr.io domain support"
feature_slug: "artifact-registry-gcr-io-domain-support"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/gcr-repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
keywords:
  - "were"
  - "domain"
  - "introduced"
  - "repositories"
---

# Artifact Registry gcr.io domain support

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry repositories with gcr.io domain support were introduced in general availability, enabling automatic redirection of gcr.io host requests.

## Extended Definition

Artifact Registry repositories with gcr.io domain support were introduced in general availability, enabling automatic redirection of gcr.io host requests.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/transition/gcr-repositories](https://docs.cloud.google.com/artifact-registry/docs/transition/gcr-repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)

## Supporting Pages

### gcr.io repositories | Artifact Registry | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/gcr-repositories](https://docs.cloud.google.com/artifact-registry/docs/transition/gcr-repositories)
- Source ID: `feature-recovery-http`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Effective March 18, 2025, Container Registry is shut down and writing images to Container Registry is unavailable. gcr.io URLs hosted on Artifact Registry, including Google-owned images with gcr.io URLs, are not affected by the Container Registry shutdown. gcr.io domain support Artifact Registry supports requests to the gcr.io domain in gcr.io repositories in multi-regional locations corresponding with Container Registry host locations.
- For example, if you programmatically grant Cloud Storage permissions on storage buckets for Container Registry, you must update that automation to grant Artifact Registry permissions on the Artifact Registry repositories that host images for the gcr.io domain.
- Since pkg.dev repositories don't have any support for the gcr.io domain, this transition approach requires more changes to your existing automation and workflows.
- Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Artifact Registry Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Product overview Software supply chain security Get started Enable and disable Artifact Registry Supported formats Set defaults for gcloud commands Repository overview Remote repository overview Virtual repository overview Quickstarts Create a Docker Hub remote repository Store Docker container images Store Go modules Store Helm charts Store Java packages Store Node.js packages Store Python packages Store Ruby gems Store Apt packages Store RPM packages Store other formats Create Create standard repositories Create remote repositories Create virtual repositories Store artifact metadata in attachments Configure Configure authentication to remote repository upstreams Cleanup policies Cleanup policy overview Configure cleanup policies Provision Artifact Registry resources with Terraform Manage View and list repositories Update repository settings Label repositories Tag repositories Manage artifact metadata Download files Delete repositories Manage container images Container concepts Container images Overview Configure Docker authentication to Artifact Registry Configure remote repository authentication to Docker Hub Push and pull container images Pull cached container images from mirror.gcr.io Reduce latency with image prewarming Manage container images Learn about your container images with Gemini assistance Copy container images between repositories Migrate container images from a third-party registry Repository and container image names Helm charts Overview Set up authentication Manage charts Manage language packages Go Overview Configure authentication to Artifact Registry Manage modules Java Overview Configure authentication to Artifact Registry Configure authentication to remote repository upstreams Manage packages Node.js Overview Configure authentication to Artifact Registry Configure authentication to remote repository upstreams Manage packages Python Overview Configure authentication to Artifact Registry Configure authentication to remote repository upstreams Manage packages Ruby Overview Configure authentication to Artifact Registry Manage packages Troubleshoot Ruby repository errors Manage OS packages Overview Debian packages Overview Configure VMs to install packages Manage packages RPM Overview Configure VMs to install packages Manage packages Manage other artifacts Work with Kubeflow Pipeline templates Work with other artifact formats Transition from Container Registry Overview gcr.io repositories in Artifact Registry Control access and protect artifacts Overview Access control with IAM Use custom organization policies Restrict artifact downloads Protect repositories in a service perimeter Configure restricted access for GKE private clusters Use customer-managed encryption keys Artifact Registry Service Agent Use fingerprints to verify package version identities Connect Artifact analysis and vulnerability scanning Connect GitLab to Artifact Registry Connect to build services Overview Connect to Cloud Build Connect to Jenkins Connect to deploy services Overview Connect to Cloud Run functions Connect to Cloud Run Connect to App Engine Connect to Google Kubernetes Engine Connect to Compute Engine Control deployments Monitor and notify Observability in Artifact Registry Audit logging Chart request counts per repository in the Metrics Explorer Configure monitoring notifications for repository growth Configure Pub/Sub notifications Troubleshoot General troubleshooting Remote repositories Docker repositories Container images Helm charts Language package repositories Java Node.js Python OS package repositories AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development Artifact Registry Guides Send feedback gcr.io repositories Stay organized with collections Save and categorize content based on your preferences.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Transition to repositories with gcr.io domain support Project structure Your resource hierarchy is the way that you organize your resources across Google Cloud projects.
- These repositories provide: Redirection of requests to the gcr.io domain.
- If you are transitioning from Container Registry to Artifact Registry, you can set up gcr.io repositories Artifact Registry to minimize changes to your existing automation and workflows.
- To create and apply cleanup policies to your repository, see Configure cleanup policies . gcr.io domain support Artifact Registry supports hosting of images on the gcr.io domain.

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Domain name gcr.io pkg.dev Artifact Registry can also store images for the gcr.io domain if you set up gcr.io repositories .
- The initial setup includes automatic creation of Artifact Registry repositories for each Container Registry host in your project and redirection of gcr.io to the corresponding Artifact Registry repositories.
- Existing Container Registry images maintained by Google Most Google-owned images previously hosted on Container Registry are now hosted on Artifact Registry in gcr.io repositories.
- For backwards compatibility, you can set up gcr.io repositories .

