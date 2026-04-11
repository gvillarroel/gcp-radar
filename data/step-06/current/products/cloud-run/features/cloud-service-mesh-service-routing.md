---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.911Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Service Mesh service routing"
feature_slug: "cloud-service-mesh-service-routing"
latest_feature_date: "2024-08-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/configure-service-health"
keywords:
  - "mesh"
  - "routing"
  - "lets"
  - "run"
  - "route"
  - "traffic"
  - "to"
  - "gke"
---

# Cloud Service Mesh service routing

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Service Mesh service routing lets Cloud Run route traffic to Cloud Run, GKE, and Compute Engine services and automatically authenticate calls with service account credentials.

## Extended Definition

Cloud Service Mesh service routing lets Cloud Run route traffic to Cloud Run, GKE, and Compute Engine services and automatically authenticate calls with service account credentials.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)

## Supporting Pages

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- When prompted for your password, enter the value of your API key that you copied from the Heroku console, not the password you use to sign in to the console. heroku login --interactive Clone the source repository In Cloud Shell, clone the sample Tasks app GitHub repository: git clone https://github.com/GoogleCloudPlatform/migrate-webapp-heroku-to-cloudrun-node.git Change directories to the directory created by cloning the repository: cd migrate-webapp-heroku-to-cloudrun-node The directory contains the following files: A Node.js script called index.js with the code for the routes served by the web app. package.json and package-lock.json files that outline the web app's dependencies.
- Create a SQL format backup of your Heroku Postgres database: docker run \ -it --rm \ -e PGPASSWORD=$HEROKU PG PASSWORD \ -v $(pwd):/tmp \ --entrypoint "pg dump" \ postgres \ -Fp \ --no-acl \ --no-owner \ -h $HEROKU PG HOST \ -U $HEROKU PG USER \ $HEROKU PG DBNAME > herokudump.sql Create an environment variable to hold the name of your Cloud Storage bucket: export PG BACKUP BUCKET=gs:// PROJECT ID -pg-backup-bucket Create a Cloud Storage bucket: gcloud storage buckets create $PG BACKUP BUCKET \ --location=us-central1 \ --public-access-prevention \ --uniform-bucket-level-access Upload the SQL file to this bucket: gcloud storage cp herokudump.sql $PG BACKUP BUCKET/herokudump.sql Authorize your Cloud SQL instance with the necessary roles to import the SQL file from the Cloud Storage bucket: gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud sql instances describe $CLOUDSQL DB NAME --format='get("serviceAccountEmailAddress")') \ --role=roles/storage.objectAdmin gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:$(gcloud sql instances describe $CLOUDSQL DB NAME --format='get("serviceAccountEmailAddress")') \ --role=roles/cloudsql.editor Import the SQL file to the Cloud SQL instance: gcloud sql import sql $CLOUDSQL DB NAME $PG BACKUP BUCKET/herokudump.sql \ --database=postgres \ --user=postgres When prompted do you want to continue (y/n) , enter "y".
- Enable the APIs Make sure that you have the following role or roles on the project: Cloud Run > Cloud Run Admin, Cloud Storage > Storage Admin, Cloud SQL > Cloud SQL Admin, Compute Engine > Compute Network Admin, Resource Manager > Project IAM Admin, Cloud Build > Cloud Build Editor, Serverless VPC Access > Serverless VPC Access Admin, Logging > Logs Viewer, Service Accounts > Service Account Admin, Service Accounts > Service Account User, and Service Usage > Service Usage Consumer Check for the roles In the Google Cloud console, go to the IAM page.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- August 26, 2024 Feature You can now configure traffic routing between Cloud Run and Cloud Run, Google Kubernetes Engine, and Google Compute Engine services using Cloud Service Mesh service routing APIs .
- February 27, 2023 Change When session affinity is enabled on a Cloud Run service that is splitting traffic between multiple revisions, requests from the same clients are now routed to the same revision .
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- January 24, 2025 Feature You can now use dual-stack subnets with internal IPv6 to let your Cloud Run services and jobs send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress. (Preview) January 22, 2025 Feature The Cloud Run Builder ( roles/run.builder ) IAM role is now available in preview.

### "Automate cross-regional failover with service health \_|\_ Cloud Run \_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set up a global external Application Load Balancer To set up a global external Application Load Balancer to route traffic between us-west1 and europe-west1 , follow these steps: Create a backend service: gcloud compute backend-services create $SERVICE-bs \ --load-balancing-scheme=EXTERNAL MANAGED \ --global Set up a global static external IP address to reach your load balancer: gcloud compute addresses create $SERVICE-ip \ --network-tier=PREMIUM \ --ip-version=IPV4 \ --global Create a URL map to route incoming requests to the backend service: gcloud compute url-maps create $SERVICE-lb \ --default-service $SERVICE-bs Create a target HTTP proxy to route requests to your URL map: gcloud compute target-http-proxies create $SERVICE-hp \ --url-map=$SERVICE-lb Create a forwarding rule to route incoming requests to the proxy: gcloud compute forwarding-rules create $SERVICE-fr \ --load-balancing-scheme=EXTERNAL MANAGED \ --network-tier=PREMIUM \ --address=$SERVICE-ip \ --target-http-proxy=$SERVICE-hp \ --global \ --ports=80 Add your services through a serverless NEG To add the services you deployed in us-west1 and europe-west1 using the Serverless NEG, follow these steps: Create a serverless network endpoint group (NEG) for your Cloud Run service in us-west1 and europe-west1 : gcloud compute network-endpoint-groups create $SERVICE-neg-$REGION A \ --region $REGION A \ --network-endpoint-type=serverless \ --cloud-run-service=$SERVICE gcloud compute network-endpoint-groups create $SERVICE-neg-$REGION B \ --region $REGION B \ --network-endpoint-type=serverless \ --cloud-run-service=$SERVICE Add the serverless NEG as a backend to the backend services in us-west1 and europe-west1 : gcloud compute backend-services add-backend $SERVICE-bs \ --global \ --network-endpoint-group=$SERVICE-neg-$REGION A \ --network-endpoint-group-region=$REGION A gcloud compute backend-services add-backend $SERVICE-bs \ --global \ --network-endpoint-group=$SERVICE-neg-$REGION B \ --network-endpoint-group-region=$REGION B For additional configuration options, see Set up a global external Application Load Balancer with Cloud Run .
- This designates the healthy region and the instance serving traffic: Success: You deployed a highly available, multi-region Cloud Run service with automated failover and failback for external traffic.
- This guide shows you how to deploy a highly available, multi-region Cloud Run service with automated failover and failback for external traffic.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project What's next Learn more about multi-region configurations in other Google Cloud products: Firestore Spanner Cloud Storage Cloud SQL Learn how to configure health checks for Cloud Run services Set up a global external Application Load Balancer with Cloud Run Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

