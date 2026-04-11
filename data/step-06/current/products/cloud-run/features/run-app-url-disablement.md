---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.897Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "run.app URL disablement"
feature_slug: "run-app-url-disablement"
latest_feature_date: "2025-07-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/mapping-custom-domains"
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
keywords:
  - "run"
  - "app"
  - "url"
  - "disablement"
  - "can"
  - "disable"
  - "built"
  - "in"
---

# run.app URL disablement

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run can disable a service's built-in run.app URL so traffic only enters through explicitly configured paths.

## Extended Definition

Cloud Run can disable a service's built-in run.app URL so traffic only enters through explicitly configured paths.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)

## Supporting Pages

### Mapping custom domains \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- There are a few ways to set up a custom domain for a Cloud Run service: Use a global external Application Load Balancer (Recommended) Use Cloud Run domain mapping (Limited availability and Preview) Use Firebase Hosting You can map multiple custom domains to the same Cloud Run service.
- To view a list of your service accounts, open the Service Accounts page in the Google Cloud console: Go to Service Accounts page Delete a Cloud Run domain mapping You can use the Google Cloud console or the gcloud CLI to delete a domain mapping.
- Audience is usually the full URL of the target service, which by default for Cloud Run services is a generated URL ending in run.app .
- Map your Cloud Run service to the custom domain: data "google project" "project" {} resource "google cloud run domain mapping" "default" { name = "verified-domain.com" location = google cloud run v2 service.default.location metadata { namespace = data.google project.project.project id } spec { route name = google cloud run v2 service.default.name } } Replace verified-domain.com with your custom verified domain, for example, example.com or subdomain.example.com .

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If it is not needed or to increase deployment speed, the deployment health check can be disabled: gcloud To disable the deployment health check, use the --no-deploy-health-check flag: gcloud run deploy --image IMAGE URL --no-deploy-health-check Replace the following: IMAGE URL : a reference to the container image, for example, us-docker.pkg.dev/cloudrun/container/hello:latest .
- Use cases Use cases for sidecars in a Cloud Run service include: Application monitoring, logging and tracing Using Nginx , Envoy or Apache2 as a proxy in front of your application container Adding authentication and authorization filters (for example, Open Policy Agent) Running outbound connection proxies such as the Alloy DB Auth proxy Deploying a service with sidecar containers You can deploy multiple sidecars to a Cloud Run service using the Google Cloud console, the Google Cloud CLI, YAML, or Terraform.
- For example, using curl : curl -H "Content-Type: application/json" \ -H "Authorization: Bearer ACCESS TOKEN " \ -X POST \ -d '{template: {containers: [{image: " IMAGE URL "}]}}' \ https://run.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /services?serviceId = SERVICE Replace the following: ACCESS TOKEN : a valid access token for an account that has the IAM permissions to deploy services .

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Test the application In Cloud Shell, get the URL at which Cloud Run serves traffic: gcloud run services list You can also review the Cloud Run Service in the Google Cloud console.
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- Add the Heroku Postgres add-on to provision a PostgreSQL database: heroku addons:create heroku-postgresql:mini Make sure the add-on was successfully added: heroku addons If the Postgres add-on was successfully added, you see a message similar to the following: Add-on Plan Price State ----------------- ----- -------- ----- heroku-postgresql mini 5$/month created Deploy the app to Heroku: git push heroku master Run the following command to confirm the value of DATABASE URL. heroku config Make note of the retrieved value for DATABASE URL.
- In the Docker container, create the TASKS table by using the following command: CREATE TABLE TASKS (DESCRIPTION TEXT NOT NULL); Exit the container: exit In Cloud Shell, get the Web URL for your Heroku app by running the following command: heroku info Open the web URL in a browser window.

