---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.497Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Cloud External Key Manager integration"
feature_slug: "artifact-registry-cloud-external-key-manager-integration"
latest_feature_date: "2021-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/access-control"
  - "https://docs.cloud.google.com/artifact-registry/docs/cmek"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/authentication"
keywords:
  - "manager"
  - "integration"
  - "external"
  - "when"
  - "adds"
---

# Artifact Registry Cloud External Key Manager integration

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry adds support for Cloud External Key Manager when using customer-managed encryption keys.

## Extended Definition

Artifact Registry adds support for Cloud External Key Manager when using customer-managed encryption keys.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)

## Supporting Pages

### Access control with IAM \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: When managing access for users in external identity providers , replace instances of Google Account principal identifiers—like user:kiran@example.com , group:support@example.com , and domain:example.com —with appropriate Workforce Identity Federation principal identifiers .
- For example, to remove a policy binding for the role roles/artifactregistry.writer for the user write@gmail.com with the repository my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = user:write@gmail.com \ --role = roles/artifactregistry.writer To revoke public access to my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = allUsers \ --role = roles/artifactregistry.reader Granting conditional access with tags Project administrators can create tags for resources across Google Cloud and manage them in Resource Manager .
- Container images: Docker , Helm Language packages: Java , Node.js , Python , Go OS packages: Debian , RPM Other: Kubeflow Pipeline templates GitLab on Google Cloud The GitLab on Google Cloud integration uses Workload Identity Federation for authorization and authentication for GitLab workloads on Google Cloud without the need for service accounts or service account keys.
- To specify access scopes when creating a cluster, run the following command: gcloud container clusters create NAME --scopes = SCOPES To specify access scopes when creating a node pool, run the following command: gcloud container node-pools create NAME --scopes = SCOPES Replace the following values: NAME is the name of the cluster or node pool.

### "Configure authentication to Artifact Registry for Docker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the service account key to configure integration with Docker: Run the following command: Linux / macOS cat KEY-FILE docker login -u KEY-TYPE --password-stdin \ https:// LOCATION -docker.pkg.dev Windows Get-Content KEY-FILE docker login -u KEY-TYPE --password-stdin https:// LOCATION -docker.pkg.dev Replace the following: KEY-TYPE is one of the following: json key if you are using the service account key in JSON format as it was provided when you created the file. json key base64 if you base64-encoded the all contents of the file.
- ARCH = amd64 # or "386" for 32-bit OSs curl -fsSL "https://github.com/GoogleCloudPlatform/docker-credential-gcr/releases/download/v ${ VERSION } /docker-credential-gcr ${ OS } ${ ARCH } - ${ VERSION } .tar.gz" \ tar xz docker-credential-gcr \ && chmod +x docker-credential-gcr && sudo mv docker-credential-gcr /usr/bin/ Configure Docker to use your Artifact Registry credentials when interacting with Artifact Registry (you are only required to do this once): docker-credential-gcr configure-docker --registries = HOSTNAME-LIST Where HOSTNAME-LIST is a comma-separated list of repository hostnames to add to the credential helper configuration.
- After installation, initialize the Google Cloud CLI by running the following command: gcloud init If you're using an external identity provider (IdP), you must first sign in to the gcloud CLI with your federated identity . (Optional) Configure defaults for gcloud CLI commands .
- Service account key Note: When possible, use an access token or credential helper to reduce the risk of unauthorized access to your artifacts.

### "Enabling customer-managed encryption keys \_|\_ Artifact Registry \_|\_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 65
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use a key created directly in Cloud KMS or an externally-managed key that you make available with Cloud External Key Manager .
- When you activate the Artifact Registry API in a Google Cloud project, Artifact Registry tries to automatically create a Pub/Sub topic with the topic ID gcr using Google-owned and Google-managed encryption keys.
- When constraints/gcp.restrictCmekCryptoKeyProjects is configured, Artifact Registry creates CMEK-protected repositories that are protected by a CryptoKey from an allowed project, folder, or organization.
- When Artifact Registry API is in the Deny policy list of services of constraint constraints/gcp.restrictNonCmekServices , Artifact Registry refuses to create new repositories that aren't CMEK-protected.

