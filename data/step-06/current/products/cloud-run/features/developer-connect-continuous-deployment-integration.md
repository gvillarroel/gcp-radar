---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.405Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Developer Connect continuous deployment integration"
feature_slug: "developer-connect-continuous-deployment-integration"
latest_feature_date: "2025-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build"
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously"
keywords:
  - "continuous"
  - "integrates"
  - "developer"
  - "console"
  - "integration"
  - "connect"
  - "deployment"
---

# Developer Connect continuous deployment integration

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run console integrates with Developer Connect to set up continuous deployments from supported source repositories.

## Extended Definition

Cloud Run console integrates with Developer Connect to set up continuous deployments from supported source repositories.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously)

## Supporting Pages

### "Continuously deploy from a repository \_|\_ Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have source code or functions in a Git repository and want to automate builds and set up continuous deployments from a repository, you can use either Cloud Build or Developer Connect in the Cloud Run console.
- If you select Developer Connect, you can set up continuous deployments from GitHub, GitLab, and Bitbucket repositories.
- Set up continuous deployment from the Cloud Run console The setup procedure varies slightly depending on whether you are setting up continuous deployment on a new service or on an existing service.
- In the Cloud Run console: If you select Cloud Build, you can set up continuous deployments from GitHub.

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-reference-required-3`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use cases Use cases for sidecars in a Cloud Run service include: Application monitoring, logging and tracing Using Nginx , Envoy or Apache2 as a proxy in front of your application container Adding authentication and authorization filters (for example, Open Policy Agent) Running outbound connection proxies such as the Alloy DB Auth proxy Deploying a service with sidecar containers You can deploy multiple sidecars to a Cloud Run service using the Google Cloud console, the Google Cloud CLI, YAML, or Terraform.
- Click Containers, Networking, Security to set other optional settings in the appropriate tabs: Concurrency Container configuration CPU limits Memory limits Request timeout Secrets Environment variables Execution environment HTTP/2 Service accounts Cloud SQL connections VPC connection When you are finished configuring your service, click Create to deploy the image to Cloud Run and wait for the deployment to finish.
- Console In the Google Cloud console, go to the Cloud Run Services page: Go to Cloud Run To deploy to an existing service, locate it in the services list, and click to open, then click Edit and deploy a new revision to display the revision deployment form.

### "Quickstart: Deploy to Cloud Run from a Git repository \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can continuously deploy from a repository using Cloud Build or Developer Connect .
- What's next Quickstart: Build and deploy Continuous deployment with Cloud Build Building containers using Buildpacks Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Deploy from the repository To deploy from the repository: In the Google Cloud console, go to the Cloud Run page: Go to Cloud Run Select Services from the menu, and click Connect repo .
- Cloud Run is available in the following regions: Subject to Tier 1 pricing asia-east1 (Taiwan) asia-northeast1 (Tokyo) asia-northeast2 (Osaka) asia-south1 (Mumbai, India) asia-southeast3 (Bangkok) europe-north1 (Finland) Low CO 2 europe-north2 (Stockholm) Low CO 2 europe-southwest1 (Madrid) Low CO 2 europe-west1 (Belgium) Low CO 2 europe-west4 (Netherlands) Low CO 2 europe-west8 (Milan) europe-west9 (Paris) Low CO 2 me-west1 (Tel Aviv) northamerica-south1 (Mexico) us-central1 (Iowa) Low CO 2 us-east1 (South Carolina) us-east4 (Northern Virginia) us-east5 (Columbus) us-south1 (Dallas) Low CO 2 us-west1 (Oregon) Low CO 2 Subject to Tier 2 pricing africa-south1 (Johannesburg) asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast1 (Singapore) asia-southeast2 (Jakarta) asia-south2 (Delhi, India) australia-southeast1 (Sydney) australia-southeast2 (Melbourne) europe-central2 (Warsaw, Poland) europe-west10 (Berlin) europe-west12 (Turin) europe-west2 (London, UK) Low CO 2 europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) Low CO 2 me-central1 (Doha) me-central2 (Dammam) northamerica-northeast1 (Montreal) Low CO 2 northamerica-northeast2 (Toronto) Low CO 2 southamerica-east1 (Sao Paulo, Brazil) Low CO 2 southamerica-west1 (Santiago, Chile) Low CO 2 us-west2 (Los Angeles) us-west3 (Salt Lake City) us-west4 (Las Vegas) If you already created a Cloud Run service, you can view the region in the Cloud Run dashboard in the Google Cloud console .

