---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.891Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Direct source artifact deployment"
feature_slug: "direct-source-artifact-deployment"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/deploy-functions"
  - "https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service"
keywords:
  - "direct"
  - "source"
  - "artifact"
  - "deployment"
  - "run"
  - "can"
  - "deploy"
  - "artifacts"
---

# Direct source artifact deployment

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run can deploy source artifacts directly without using a Cloud Build step.

## Extended Definition

Cloud Run can deploy source artifacts directly without using a Cloud Build step.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service)

## Supporting Pages

### Deploy a Cloud Run function \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specify an image repository Cloud Run function deployments use Artifact Registry to store artifacts and manage container images.
- Cloud Run function deployments also use Artifact Registry to store artifacts and manage container images.
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } Source bucket Your source code must be accessible to the build process and the Google Cloud console source editor.
- If it is not needed or to increase deployment speed, the deployment health check can be disabled: gcloud To disable the deployment health check, use the --no-deploy-health-check flag: gcloud run deploy --image IMAGE URL --no-deploy-health-check Replace the following: IMAGE URL : a reference to the container image, for example, us-docker.pkg.dev/cloudrun/container/hello:latest .

### "Continuously deploy from a repository \_|\_ Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you have source code or functions in a Git repository and want to automate builds and set up continuous deployments from a repository, you can use either Cloud Build or Developer Connect in the Cloud Run console.
- In the Cloud Run console: If you select Cloud Build, you can set up continuous deployments from GitHub.
- Enable the API If you select the Developer Connect option, enable the Developer Connect API: Enable the API Required roles To get the permissions that you need to deploy Cloud Run services from Git using Cloud Build or Developer Connect, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Administrator ( roles/artifactregistry.admin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Developer ( roles/run.developer ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) The service account running the build must have the following roles: Cloud Build Service Account ( roles/cloudbuild.builds.builder ) Cloud Run Admin ( roles/run.admin ) Service Account User ( roles/iam.serviceAccountUser ) If you select the Developer Connect option: Developer Connect Read Token Accessor ( roles/developerconnect.readTokenAccessor ) If you are connecting to GitLab or Bitbucket repositories: Secret Manager Secret Accessor ( roles/secretmanager.secretAccessor ) For a list of IAM roles and permissions that are associated with Cloud Run, see Cloud Run IAM roles and Cloud Run IAM permissions .
- Set up continuous deployment from the Cloud Run console The setup procedure varies slightly depending on whether you are setting up continuous deployment on a new service or on an existing service.

### "Quickstart: Build and deploy an AI agent to Cloud Run using the Agent Development\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information on how the Python buildpack determines the default entrypoint for Cloud Run source deployments, see Build a Python application .
- In your source code directory ( parent folder ), deploy to Cloud Run using the following command: gcloud run deploy --source .
- Delete a Google Cloud project: gcloud projects delete PROJECT ID What's next For more information on building a container from code source and pushing to a repository, see: Developing Cloud Run services Building Containers Test a Cloud Run service locally Deploying from source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Navigate to the parent folder directory parent folder , and create a requirements.txt file to add the google-adk dependency: google-adk Your source project includes the following structure: parent folder/ ├── requirements.txt └── multi tool agent/ ├── init .py ├── agent.py └── .env Your app is finished and ready to be deployed.

