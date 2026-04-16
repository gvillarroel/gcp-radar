---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.495Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Service Mesh service routing"
feature_slug: "cloud-service-mesh-service-routing"
latest_feature_date: "2024-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
  - "https://docs.cloud.google.com/run/docs/tutorials/configure-service-health"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
keywords:
  - "mesh"
  - "routing"
  - "compute"
  - "route"
  - "traffic"
  - "lets"
---

# Cloud Service Mesh service routing

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Service Mesh service routing lets Cloud Run route traffic to Cloud Run, GKE, and Compute Engine services and automatically authenticate calls with service account credentials.

## Extended Definition

Cloud Service Mesh service routing lets Cloud Run route traffic to Cloud Run, GKE, and Compute Engine services and automatically authenticate calls with service account credentials.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)

## Supporting Pages

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Traffic Target Holds a single traffic routing entry for the Service.
- Builder Holds a single traffic routing entry for the Service.
- Builder Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. com. google. cloud. run. v2.
- Probe Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. com. google. cloud. run. v2.

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- Cloud Run is a managed compute platform that lets you run stateless containers that are invocable through HTTP requests.
- A /tasks route at that URL lets you create new tasks.
- Prepare your network for Cloud SQL with a private IP address. gcloud compute addresses create google-managed-services-default \ --global \ --purpose=VPC PEERING \ --prefix-length=16 \ --description="peering range for CloudSQL Private Service Access" \ --network=default gcloud services vpc-peerings connect \ --service=servicenetworking.googleapis.com \ --ranges=google-managed-services-default \ --network=default \ --project= PROJECT ID Create an environment variable called CLOUDSQL DB NAME to hold the name of the database instance that you create in the next step: export CLOUDSQL DB NAME=tasks-db Create the database: gcloud sql instances create $CLOUDSQL DB NAME \ --cpu=1 \ --memory=4352Mib \ --database-version=POSTGRES 15 \ --region=us-central1 \ --network default \ --no-assign-ip The instance might take a few minutes to initialize.

### "Automate cross-regional failover with service health \_|\_ Cloud Run \_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- Source ID: `site-docs-root-2`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up a global external Application Load Balancer To set up a global external Application Load Balancer to route traffic between us-west1 and europe-west1 , follow these steps: Create a backend service: gcloud compute backend-services create $SERVICE-bs \ --load-balancing-scheme=EXTERNAL MANAGED \ --global Set up a global static external IP address to reach your load balancer: gcloud compute addresses create $SERVICE-ip \ --network-tier=PREMIUM \ --ip-version=IPV4 \ --global Create a URL map to route incoming requests to the backend service: gcloud compute url-maps create $SERVICE-lb \ --default-service $SERVICE-bs Create a target HTTP proxy to route requests to your URL map: gcloud compute target-http-proxies create $SERVICE-hp \ --url-map=$SERVICE-lb Create a forwarding rule to route incoming requests to the proxy: gcloud compute forwarding-rules create $SERVICE-fr \ --load-balancing-scheme=EXTERNAL MANAGED \ --network-tier=PREMIUM \ --address=$SERVICE-ip \ --target-http-proxy=$SERVICE-hp \ --global \ --ports=80 Add your services through a serverless NEG To add the services you deployed in us-west1 and europe-west1 using the Serverless NEG, follow these steps: Create a serverless network endpoint group (NEG) for your Cloud Run service in us-west1 and europe-west1 : gcloud compute network-endpoint-groups create $SERVICE-neg-$REGION A \ --region $REGION A \ --network-endpoint-type=serverless \ --cloud-run-service=$SERVICE gcloud compute network-endpoint-groups create $SERVICE-neg-$REGION B \ --region $REGION B \ --network-endpoint-type=serverless \ --cloud-run-service=$SERVICE Add the serverless NEG as a backend to the backend services in us-west1 and europe-west1 : gcloud compute backend-services add-backend $SERVICE-bs \ --global \ --network-endpoint-group=$SERVICE-neg-$REGION A \ --network-endpoint-group-region=$REGION A gcloud compute backend-services add-backend $SERVICE-bs \ --global \ --network-endpoint-group=$SERVICE-neg-$REGION B \ --network-endpoint-group-region=$REGION B For additional configuration options, see Set up a global external Application Load Balancer with Cloud Run .
- Test failover To test failover for ensuring the reliability and resilience of your Cloud Run services, follow these steps: Run the following command to get your load balancer's IP address: LBIP=$(gcloud compute addresses describe $SERVICE-ip --global --format='value(address)') Optional: Send a request to your load balancer if your services require authentication: curl -H "Authorization: Bearer $(gcloud auth print-identity-token)" $LBIP Obtain the value of the LBIP variable by running the echo $LBIP command.
- For Cloud Build to build your sources, ask your administrator to grant Cloud Run Builder ( roles/run.builder ) to the Compute Engine default service account on your project: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/run.builder Replace PROJECT NUMBER with your Google Cloud project number, and PROJECT ID with your Google Cloud project ID.
- Click to view required roles for the Cloud Build service account Cloud Build automatically uses the Compute Engine default service account as the default Cloud Build service account to build your source code and Cloud Run resource, unless you override this behavior.

