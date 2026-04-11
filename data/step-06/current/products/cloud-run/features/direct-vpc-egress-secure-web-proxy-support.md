---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.910Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Direct VPC egress Secure Web Proxy support"
feature_slug: "direct-vpc-egress-secure-web-proxy-support"
latest_feature_date: "2024-09-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
  - "https://docs.cloud.google.com/run/docs/tutorials/secure-services"
keywords:
  - "direct"
  - "vpc"
  - "egress"
  - "secure"
  - "web"
  - "proxy"
  - "can"
  - "route"
---

# Direct VPC egress Secure Web Proxy support

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Direct VPC egress can route Cloud Run traffic through Secure Web Proxy.

## Extended Definition

Direct VPC egress can route Cloud Run traffic through Secure Web Proxy.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- September 17, 2024 Feature The Direct VPC egress feature of Cloud Run now supports Secure Web Proxy .
- March 22, 2024 Feature Direct VPC egress (Preview) is now available in the following additional regions : africa-south1 asia-south1 asia-southeast2 australia-southeast2 europe-central2 europe-west2 europe-west6 europe-west8 europe-west9 europe-west10 me-central1 me-central2 southamerica-west1 us-east5 us-west2 us-west3 us-west8 Feature Cloud Run services can now connect to Vertex AI to access generative AI models using integrations (Preview).
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- January 24, 2025 Feature You can now use dual-stack subnets with internal IPv6 to let your Cloud Run services and jobs send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress. (Preview) January 22, 2025 Feature The Cloud Run Builder ( roles/run.builder ) IAM role is now available in preview.

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- When prompted for your password, enter the value of your API key that you copied from the Heroku console, not the password you use to sign in to the console. heroku login --interactive Clone the source repository In Cloud Shell, clone the sample Tasks app GitHub repository: git clone https://github.com/GoogleCloudPlatform/migrate-webapp-heroku-to-cloudrun-node.git Change directories to the directory created by cloning the repository: cd migrate-webapp-heroku-to-cloudrun-node The directory contains the following files: A Node.js script called index.js with the code for the routes served by the web app. package.json and package-lock.json files that outline the web app's dependencies.
- A views directory, with the HTML content served by the web app on the "/" route.
- The database doesn't need to have external IP addresses approved because all the communication that it receives is from the proxy using secure TCP.

### Secure Cloud Run services tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands . resource "google cloud run v2 service" "renderer" { name = "renderer" location = "us-central1" deletion protection = false # set to "true" in production template { containers { Replace with the URL of your Secure Services > Renderer image. gcr.io/<PROJECT ID>/renderer image = "us-docker.pkg.dev/cloudrun/container/hello" } service account = google service account.renderer.email } } Try out the private Markdown rendering service Private services cannot be directly loaded by a web browser.
- Cloud Run is available in the following regions: Subject to Tier 1 pricing asia-east1 (Taiwan) asia-northeast1 (Tokyo) asia-northeast2 (Osaka) asia-south1 (Mumbai, India) asia-southeast3 (Bangkok) europe-north1 (Finland) Low CO 2 europe-north2 (Stockholm) Low CO 2 europe-southwest1 (Madrid) Low CO 2 europe-west1 (Belgium) Low CO 2 europe-west4 (Netherlands) Low CO 2 europe-west8 (Milan) europe-west9 (Paris) Low CO 2 me-west1 (Tel Aviv) northamerica-south1 (Mexico) us-central1 (Iowa) Low CO 2 us-east1 (South Carolina) us-east4 (Northern Virginia) us-east5 (Columbus) us-south1 (Dallas) Low CO 2 us-west1 (Oregon) Low CO 2 Subject to Tier 2 pricing africa-south1 (Johannesburg) asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast1 (Singapore) asia-southeast2 (Jakarta) asia-south2 (Delhi, India) australia-southeast1 (Sydney) australia-southeast2 (Melbourne) europe-central2 (Warsaw, Poland) europe-west10 (Berlin) europe-west12 (Turin) europe-west2 (London, UK) Low CO 2 europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) Low CO 2 me-central1 (Doha) me-central2 (Dammam) northamerica-northeast1 (Montreal) Low CO 2 northamerica-northeast2 (Toronto) Low CO 2 southamerica-east1 (Sao Paulo, Brazil) Low CO 2 southamerica-west1 (Santiago, Chile) Low CO 2 us-west2 (Los Angeles) us-west3 (Salt Lake City) us-west4 (Las Vegas) If you already created a Cloud Run service, you can view the region in the Cloud Run dashboard in the Google Cloud console .
- Remove the gcloud default configurations you added during tutorial setup. gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the editor container image named REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /editor from Artifact Registry Delete the render container image named REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /renderer from Artifact Registry Delete the editor service account editor-identity@PROJECT ID.iam.gserviceaccount.com Delete the render service account renderer-identity@PROJECT ID.iam.gserviceaccount.com What's next Further secure your project by walking through the using IAM securely checklist Extend this sample application to track Markdown usage with Cloud Monitoring custom metrics Review the Pub/Sub tutorial for an approach to secure, asynchronous microservices Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Deploy the editor service: resource "google cloud run v2 service" "editor" { name = "editor" location = "us-central1" deletion protection = false # set to "true" in production template { containers { Replace with the URL of your Secure Services > Editor image. gcr.io/<PROJECT ID>/editor image = "us-docker.pkg.dev/cloudrun/container/hello" env { name = "EDITOR UPSTREAM RENDER URL" value = google cloud run v2 service.renderer.uri } } service account = google service account.editor.email } } Grant allUsers permission to invoke the service: data "google iam policy" "noauth" { binding { role = "roles/run.invoker" members = [ "allUsers" , ] } } resource "google cloud run service iam policy" "noauth" { location = google cloud run v2 service.editor.location project = google cloud run v2 service.editor.project service = google cloud run v2 service.editor.name policy data = data.google iam policy.noauth.policy data } Understand the HTTPS traffic There are three HTTP requests involved in rendering markdown using these services.

