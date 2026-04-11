---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.928Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Artifact Registry image deployment"
feature_slug: "artifact-registry-image-deployment"
latest_feature_date: "2020-03-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/deploy-functions"
keywords:
  - "artifact"
  - "registry"
  - "image"
  - "deployment"
  - "run"
  - "supports"
  - "deploying"
  - "container"
---

# Artifact Registry image deployment

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports deploying container images from Artifact Registry.

## Extended Definition

Cloud Run supports deploying container images from Artifact Registry.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)

## Supporting Pages

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Run does not support container image layers larger than 9.9 GB when deploying from Docker Hub or an Artifact Registry remote repository with an external registry.
- The container image is imported by Cloud Run when deployed, so after the deployment, you can delete the image from Artifact Registry .
- Required roles To get the permissions that you need to deploy Cloud Run services, ask your administrator to grant you the following IAM roles: Cloud Run Developer ( roles/run.developer ) on the Cloud Run service Service Account User ( roles/iam.serviceAccountUser ) on the service identity Artifact Registry Reader ( roles/artifactregistry.reader ) on the Artifact Registry repository of the deployed container image If you are using a cross-project service account to deploy a service: Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) on the service identity For a list of IAM roles and permissions that are associated with Cloud Run, see Cloud Run IAM roles and Cloud Run IAM permissions .
- Alternatively, if using an Artifact Registry remote repository is not an option, you can temporarily pull and push container images to Artifact Registry using docker push in order to deploy them to Cloud Run.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- March 16, 2020 Feature Cloud Run (fully managed) now supports deploying container images from Cloud Artifact Registry February 12, 2020 Feature Cloud Run (fully managed) now supports rollbacks, gradual rollouts (blue/green deployments), and other traffic migration manipulations between revisions.
- February 04, 2025 Feature When deploying a function in Cloud Run, you can now specify an Artifact Registry image repository to store the container (Preview).
- May 03, 2023 Feature CPU allocation recommender now automatically recommends CPU allocation changes based on traffic received by your Cloud Run service over the past month. (In Preview) April 26, 2023 Announcement Cloud Run source deployment now supports Ubuntu 22 LTS base images.
- When using Artifact Registry, ensure the principal has the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role on the project or repository containing the container image(s) to deploy.

### Deploy a Cloud Run function \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Specify an image repository Cloud Run function deployments use Artifact Registry to store artifacts and manage container images.
- Cloud Run function deployments also use Artifact Registry to store artifacts and manage container images.
- To specify a self-created Artifact Registry repository, use the following command: gcloud gcloud run deploy FUNCTION \ --source . \ --function FUNCTION ENTRYPOINT \ --base-image BASE IMAGE \ --region REGION \ --image IMAGE URL Replace the following: FUNCTION with the name of the function you are deploying.
- If it is not needed or to increase deployment speed, the deployment health check can be disabled: gcloud To disable the deployment health check, use the --no-deploy-health-check flag: gcloud run deploy --image IMAGE URL --no-deploy-health-check Replace the following: IMAGE URL : a reference to the container image, for example, us-docker.pkg.dev/cloudrun/container/hello:latest .

