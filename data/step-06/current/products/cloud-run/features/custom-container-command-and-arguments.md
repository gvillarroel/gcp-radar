---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.618Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Custom container command and arguments"
feature_slug: "custom-container-command-and-arguments"
latest_feature_date: "2020-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/mapping-custom-domains"
keywords:
  - "arguments"
  - "containers"
  - "command"
  - "custom"
  - "container"
  - "deployed"
  - "lets"
---

# Custom container command and arguments

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run lets deployed containers specify custom startup commands and arguments.

## Extended Definition

Cloud Run lets deployed containers specify custom startup commands and arguments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)

## Supporting Pages

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Run is a managed compute platform that lets you run stateless containers that are invocable through HTTP requests.
- Deploy the sample app to Cloud Run In Cloud Shell, configure serverless vpc access to allow private traffic from Cloud Run to Cloud SQL: gcloud compute networks subnets create serverless-connector-subnet \ --network=default \ --range=10.0.0.0/28 \ --region=us-central1 gcloud compute networks vpc-access connectors create serverless-connector \ --region=us-central1 \ --subnet=serverless-connector-subnet In Cloud Shell, create an environment variable that holds the connection name of the Cloud SQL instance that you created: export DB CONN NAME=$(gcloud sql instances describe $CLOUDSQL DB NAME --format='value(connectionName)') Create an environment variable called DATABASE URL to hold the connection string to connect to the Cloud SQL Proxy over a UNIX port. export DATABASE URL="socket:/cloudsql/${DB CONN NAME}?db=postgres&user=postgres&password= POSTGRES PASSWORD " Create a service account for Cloud Run with an IAM role to connect to the database: gcloud iam service-accounts create sa-run-db-client gcloud projects add-iam-policy-binding PROJECT ID \ --member=serviceAccount:sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --role=roles/cloudsql.client Deploy the web app to Cloud Run: gcloud run deploy tasksapp- PROJECT ID \ --image=$IMAGE NAME \ --service-account=sa-run-db-client@ PROJECT ID .iam.gserviceaccount.com \ --set-env-vars=DATABASE URL=$DATABASE URL \ --add-cloudsql-instances $DB CONN NAME \ --vpc-connector serverless-connector \ --allow-unauthenticated The preceding command also links your Cloud Run container to the Cloud SQL database instance that you created.
- Set the pack CLI to use the Heroku builder by default: pack config default-builder heroku/buildpacks:22 Create an environment variable to hold the Docker image name: export IMAGE NAME=gcr.io/ PROJECT ID / APP NAME :1 Build the image using the pack command and push or publish the image to Container Registry: pack build --publish $IMAGE NAME Create a Cloud SQL for PostgreSQL instance You create a Cloud SQL for PostgreSQL instance to serve as the backend for the web app.
- In the Docker container, create the TASKS table by using the following command: CREATE TABLE TASKS (DESCRIPTION TEXT NOT NULL); Exit the container: exit In Cloud Shell, get the Web URL for your Heroku app by running the following command: heroku info Open the web URL in a browser window.

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-reference-required-3`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify that root containers are compatible with user namespaces Test your changes locally or in a VM by evaluating your code when running under user namespaces, such as when using Docker's userns-remap feature, running your container in rootless Podman , or deploying those changes to VMs running the Container-Optimized OS from Google with the --userns-remap=default argument in the docker run command.
- To deploy multiple containers to a service, run the following command: gcloud run deploy SERVICE \ --container INGRESS CONTAINER NAME \ --image = ' INGRESS IMAGE ' \ --port = ' CONTAINER PORT ' \ --container SIDECAR CONTAINER NAME \ --image = ' SIDECAR IMAGE ' Replace the following: SERVICE : the name of the service you are deploying to.
- After you update the YAML to include the ingress and sidecar containers, deploy to Cloud Run using the command: gcloud run services replace service.yaml Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Required roles To get the permissions that you need to deploy Cloud Run services, ask your administrator to grant you the following IAM roles: Cloud Run Developer ( roles/run.developer ) on the Cloud Run service Service Account User ( roles/iam.serviceAccountUser ) on the service identity Artifact Registry Reader ( roles/artifactregistry.reader ) on the Artifact Registry repository of the deployed container image If you are using a cross-project service account to deploy a service: Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) on the service identity For a list of IAM roles and permissions that are associated with Cloud Run, see Cloud Run IAM roles and Cloud Run IAM permissions .

### Mapping custom domains \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a Cloud Run service, add the following to your existing main.tf file: resource "google cloud run v2 service" "default" { name = "custom-domain" # Replace with your service name location = "us-central1" deletion protection = false # set to true to prevent destruction of the resource template { containers { image = "us-docker.pkg.dev/cloudrun/container/hello" # Replace with your container image } } } Replace: custom-domain with your Cloud Run service name. us-docker.pkg.dev/cloudrun/container/hello with a reference to your container image.
- You can determine whether the custom domain you want to use has been verified by running the following command: gcloud domains list-user-verified If your ownership of the domain needs to be verified, open the Search Console verification page: gcloud domains verify BASE-DOMAIN where BASE-DOMAIN is the base domain you want to verify.
- You can set up a custom domain rather than the default address that Cloud Run provides for a deployed service.
- Map your Cloud Run service to the custom domain: data "google project" "project" {} resource "google cloud run domain mapping" "default" { name = "verified-domain.com" location = google cloud run v2 service.default.location metadata { namespace = data.google project.project.project id } spec { route name = google cloud run v2 service.default.name } } Replace verified-domain.com with your custom verified domain, for example, example.com or subdomain.example.com .

