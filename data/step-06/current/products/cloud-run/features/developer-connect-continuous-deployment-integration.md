---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.889Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Developer Connect continuous deployment integration"
feature_slug: "developer-connect-continuous-deployment-integration"
latest_feature_date: "2025-12-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/deploying"
keywords:
  - "developer"
  - "connect"
  - "continuous"
  - "deployment"
  - "integration"
  - "run"
  - "console"
  - "integrates"
---

# Developer Connect continuous deployment integration

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run console integrates with Developer Connect to set up continuous deployments from supported source repositories.

## Extended Definition

Cloud Run console integrates with Developer Connect to set up continuous deployments from supported source repositories.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)

## Supporting Pages

### "Continuously deploy from a repository \_|\_ Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you have source code or functions in a Git repository and want to automate builds and set up continuous deployments from a repository, you can use either Cloud Build or Developer Connect in the Cloud Run console.
- Set up continuous deployment from the Cloud Run console The setup procedure varies slightly depending on whether you are setting up continuous deployment on a new service or on an existing service.
- If you select Developer Connect, you can set up continuous deployments from GitHub, GitLab, and Bitbucket repositories.
- In the Cloud Run console: If you select Cloud Build, you can set up continuous deployments from GitHub.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- December 01, 2025 Feature You can use Developer Connect in the Cloud Run console to set up continuous deployments from GitHub, GitLab, and Bitbucket repositories (Preview).
- March 22, 2024 Feature Direct VPC egress (Preview) is now available in the following additional regions : africa-south1 asia-south1 asia-southeast2 australia-southeast2 europe-central2 europe-west2 europe-west6 europe-west8 europe-west9 europe-west10 me-central1 me-central2 southamerica-west1 us-east5 us-west2 us-west3 us-west8 Feature Cloud Run services can now connect to Vertex AI to access generative AI models using integrations (Preview).
- July 21, 2020 Feature Cloud Run resources are now available in Cloud Asset Inventory July 13, 2020 Feature The Cloud Run user interface now allows you to easily set up Continuous Deployment from Git using Cloud Build July 07, 2020 Feature External HTTP(S) Load Balancing is now supported for Cloud Run services via Serverless network endpoint groups .
- June 09, 2023 Feature You can now create and then configure a Serverless VPC Access connector for your service or job directly from the Create form in the Google Cloud console. (Preview) May 17, 2023 Feature Allocating up to 32 GiB of memory and up to 8 CPU to your Cloud Run services is now at general availability (GA).

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use cases Use cases for sidecars in a Cloud Run service include: Application monitoring, logging and tracing Using Nginx , Envoy or Apache2 as a proxy in front of your application container Adding authentication and authorization filters (for example, Open Policy Agent) Running outbound connection proxies such as the Alloy DB Auth proxy Deploying a service with sidecar containers You can deploy multiple sidecars to a Cloud Run service using the Google Cloud console, the Google Cloud CLI, YAML, or Terraform.
- Click Containers, Networking, Security to set other optional settings in the appropriate tabs: Concurrency Container configuration CPU limits Memory limits Request timeout Secrets Environment variables Execution environment HTTP/2 Service accounts Cloud SQL connections VPC connection When you are finished configuring your service, click Create to deploy the image to Cloud Run and wait for the deployment to finish.
- Console In the Google Cloud console, go to the Cloud Run Services page: Go to Cloud Run To deploy to an existing service, locate it in the services list, and click to open, then click Edit and deploy a new revision to display the revision deployment form.

