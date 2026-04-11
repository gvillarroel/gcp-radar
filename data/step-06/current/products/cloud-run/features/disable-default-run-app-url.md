---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.913Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Disable default run.app URL"
feature_slug: "disable-default-run-app-url"
latest_feature_date: "2024-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
  - "https://docs.cloud.google.com/run/docs/mapping-custom-domains"
  - "https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run"
keywords:
  - "disable"
  - "default"
  - "run"
  - "app"
  - "url"
  - "disabling"
  - "the"
  - "lets"
---

# Disable default run.app URL

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Disabling the default run.app URL lets you turn off the default Cloud Run service URL.

## Extended Definition

Disabling the default run.app URL lets you turn off the default Cloud Run service URL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)

## Supporting Pages

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- Add the Heroku Postgres add-on to provision a PostgreSQL database: heroku addons:create heroku-postgresql:mini Make sure the add-on was successfully added: heroku addons If the Postgres add-on was successfully added, you see a message similar to the following: Add-on Plan Price State ----------------- ----- -------- ----- heroku-postgresql mini 5$/month created Deploy the app to Heroku: git push heroku master Run the following command to confirm the value of DATABASE URL. heroku config Make note of the retrieved value for DATABASE URL.
- In the Docker container, create the TASKS table by using the following command: CREATE TABLE TASKS (DESCRIPTION TEXT NOT NULL); Exit the container: exit In Cloud Shell, get the Web URL for your Heroku app by running the following command: heroku info Open the web URL in a browser window.
- Test the application In Cloud Shell, get the URL at which Cloud Run serves traffic: gcloud run services list You can also review the Cloud Run Service in the Google Cloud console.

### Mapping custom domains \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Audience is usually the full URL of the target service, which by default for Cloud Run services is a generated URL ending in run.app .
- Map your Cloud Run service to the custom domain: data "google project" "project" {} resource "google cloud run domain mapping" "default" { name = "verified-domain.com" location = google cloud run v2 service.default.location metadata { namespace = data.google project.project.project id } spec { route name = google cloud run v2 service.default.name } } Replace verified-domain.com with your custom verified domain, for example, example.com or subdomain.example.com .
- For example, it lets you use your own TLS certificate or route specific URL paths to the Cloud Run service.
- To create a Cloud Run service, add the following to your existing main.tf file: resource "google cloud run v2 service" "default" { name = "custom-domain" # Replace with your service name location = "us-central1" deletion protection = false # set to true to prevent destruction of the resource template { containers { image = "us-docker.pkg.dev/cloudrun/container/hello" # Replace with your container image } } } Replace: custom-domain with your Cloud Run service name. us-docker.pkg.dev/cloudrun/container/hello with a reference to your container image.

### Configure IAP for Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To save the configuration, click Save . gcloud To disable IAP directly from Cloud Run, add the --no-iap flag when deploying your app as follows: Deploy your Cloud Run service using either of the following commands: For a new service: gcloud run deploy SERVICE NAME \ --region = REGION \ --image = IMAGE URL \ --no-iap For an existing service: gcloud run services update SERVICE NAME \ --region = REGION \ --no-iap Replace the following: SERVICE NAME : the name of your Cloud Run service.
- To create or deploy the service, click Create or Deploy . gcloud To enable IAP directly from Cloud Run, add the --iap flag when deploying your app and grant invoker permission to the IAP service agent: Deploy your Cloud Run service using one of the following commands: For a new service: gcloud run deploy SERVICE NAME \ --region = REGION \ --image = IMAGE URL \ --no-allow-unauthenticated \ --iap If you enable IAP for the first time in a project without an organization, you might see the following warning: Deploying services with IAP enabled in a project without an organization may require initial setup via the Cloud Console.
- To retrieve the current IAM policy data, add the following to a google cloud run v2 service iam policy resource in your Terraform configuration. data "google cloud run v2 service iam policy" "policy" { project = google cloud run v2 service.default.project location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name } Manage user or group access By default, IAP for Cloud Run uses a Google-managed OAuth client that lets you add in-organization identities with an email address associated with a user.
- By enabling IAP on Cloud Run directly, you can secure traffic with a single click from all ingress paths, including default run.app URLs and load balancers.

