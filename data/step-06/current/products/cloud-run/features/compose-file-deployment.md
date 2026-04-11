---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.876Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Compose file deployment"
feature_slug: "compose-file-deployment"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build"
keywords:
  - "compose"
  - "file"
  - "deployment"
  - "run"
  - "supports"
  - "deploying"
  - "services"
  - "from"
---

# Compose file deployment

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports deploying services from a Compose file; Cloud Run supports deploying services from a Compose file.

## Extended Definition

Cloud Run supports deploying services from a Compose file; Cloud Run supports deploying services from a Compose file.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)

## Supporting Pages

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to download or view the configuration of an existing service, use the following command to save results to a YAML file: gcloud run services describe SERVICE --format export > service.yaml From a service configuration YAML file, modify any spec.template child attributes as needed to update revision settings, then deploy the new revision: gcloud run services replace service.yaml Cloud Code To deploy a new revision of an existing service with Cloud Code , read the IntelliJ and Visual Studio Code guides.
- To deploy a compose.yaml file as a Cloud Run service revision, follow these steps: In your project directory, create a compose.yaml file with your service definitions. services : web : image : IMAGE ports : - "8080:8080" Replace IMAGE URL with the URL of your container image.
- To deploy a compose.yaml file as a Cloud Run service, follow these steps: In your project directory, create a compose.yaml file with your service definitions. services : web : image : IMAGE ports : - "8080:8080" Replace IMAGE URL with the URL of your container image.
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- March 16, 2020 Feature Cloud Run (fully managed) now supports deploying container images from Cloud Artifact Registry February 12, 2020 Feature Cloud Run (fully managed) now supports rollbacks, gradual rollouts (blue/green deployments), and other traffic migration manipulations between revisions.
- Feature Cloud Run support for network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as Cloud Filestore and Cloud Storage FUSE , is now at general availability (GA.) November 17, 2022 Feature Logs from Cloud Run services can now be tailed or viewed in a command-line friendly format using gcloud beta run services logs tail and gcloud beta run services logs read October 07, 2022 Feature Cloud Run services can now use the Global External HTTP(S) Load Balancer to map Custom Domains using integrations (Preview).
- July 21, 2020 Feature Cloud Run resources are now available in Cloud Asset Inventory July 13, 2020 Feature The Cloud Run user interface now allows you to easily set up Continuous Deployment from Git using Cloud Build July 07, 2020 Feature External HTTP(S) Load Balancing is now supported for Cloud Run services via Serverless network endpoint groups .
- September 23, 2025 Feature You can specify mount options when you configure Cloud Storage volume mounts for Cloud Run services , jobs , and worker pools . (GA) September 10, 2025 Feature You can deploy and configure a multi-region service from a single gcloud CLI command or by using a YAML or Terraform file (GA).

### "Continuously deploy from a repository \_|\_ Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable the API If you select the Developer Connect option, enable the Developer Connect API: Enable the API Required roles To get the permissions that you need to deploy Cloud Run services from Git using Cloud Build or Developer Connect, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Administrator ( roles/artifactregistry.admin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Developer ( roles/run.developer ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) The service account running the build must have the following roles: Cloud Build Service Account ( roles/cloudbuild.builds.builder ) Cloud Run Admin ( roles/run.admin ) Service Account User ( roles/iam.serviceAccountUser ) If you select the Developer Connect option: Developer Connect Read Token Accessor ( roles/developerconnect.readTokenAccessor ) If you are connecting to GitLab or Bitbucket repositories: Secret Manager Secret Accessor ( roles/secretmanager.secretAccessor ) For a list of IAM roles and permissions that are associated with Cloud Run, see Cloud Run IAM roles and Cloud Run IAM permissions .
- If you have source code or functions in a Git repository and want to automate builds and set up continuous deployments from a repository, you can use either Cloud Build or Developer Connect in the Cloud Run console.
- Set up continuous deployment from the Cloud Run console The setup procedure varies slightly depending on whether you are setting up continuous deployment on a new service or on an existing service.
- In the Cloud Run console: If you select Cloud Build, you can set up continuous deployments from GitHub.

