---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.883Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Multi-region service health for external traffic"
feature_slug: "multi-region-service-health-for-external-traffic"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/configure-service-health"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/deploying"
keywords:
  - "multi"
  - "region"
  - "health"
  - "for"
  - "external"
  - "traffic"
  - "run"
  - "supports"
---

# Multi-region service health for external traffic

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run service health supports highly available multi-region services with automated failover and failback for external traffic.

## Extended Definition

Cloud Run service health supports highly available multi-region services with automated failover and failback for external traffic.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)

## Supporting Pages

### "Automate cross-regional failover with service health \_|\_ Cloud Run \_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This designates the healthy region and the instance serving traffic: Success: You deployed a highly available, multi-region Cloud Run service with automated failover and failback for external traffic.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project What's next Learn more about multi-region configurations in other Google Cloud products: Firestore Spanner Cloud Storage Cloud SQL Learn how to configure health checks for Cloud Run services Set up a global external Application Load Balancer with Cloud Run Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This guide shows you how to deploy a highly available, multi-region Cloud Run service with automated failover and failback for external traffic.
- Set up a global external Application Load Balancer To set up a global external Application Load Balancer to route traffic between us-west1 and europe-west1 , follow these steps: Create a backend service: gcloud compute backend-services create $SERVICE-bs \ --load-balancing-scheme=EXTERNAL MANAGED \ --global Set up a global static external IP address to reach your load balancer: gcloud compute addresses create $SERVICE-ip \ --network-tier=PREMIUM \ --ip-version=IPV4 \ --global Create a URL map to route incoming requests to the backend service: gcloud compute url-maps create $SERVICE-lb \ --default-service $SERVICE-bs Create a target HTTP proxy to route requests to your URL map: gcloud compute target-http-proxies create $SERVICE-hp \ --url-map=$SERVICE-lb Create a forwarding rule to route incoming requests to the proxy: gcloud compute forwarding-rules create $SERVICE-fr \ --load-balancing-scheme=EXTERNAL MANAGED \ --network-tier=PREMIUM \ --address=$SERVICE-ip \ --target-http-proxy=$SERVICE-hp \ --global \ --ports=80 Add your services through a serverless NEG To add the services you deployed in us-west1 and europe-west1 using the Serverless NEG, follow these steps: Create a serverless network endpoint group (NEG) for your Cloud Run service in us-west1 and europe-west1 : gcloud compute network-endpoint-groups create $SERVICE-neg-$REGION A \ --region $REGION A \ --network-endpoint-type=serverless \ --cloud-run-service=$SERVICE gcloud compute network-endpoint-groups create $SERVICE-neg-$REGION B \ --region $REGION B \ --network-endpoint-type=serverless \ --cloud-run-service=$SERVICE Add the serverless NEG as a backend to the backend services in us-west1 and europe-west1 : gcloud compute backend-services add-backend $SERVICE-bs \ --global \ --network-endpoint-group=$SERVICE-neg-$REGION A \ --network-endpoint-group-region=$REGION A gcloud compute backend-services add-backend $SERVICE-bs \ --global \ --network-endpoint-group=$SERVICE-neg-$REGION B \ --network-endpoint-group-region=$REGION B For additional configuration options, see Set up a global external Application Load Balancer with Cloud Run .

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2026 Feature Deploy a highly available, multi-region Cloud Run service with automated failover and failback for external traffic using Cloud Run service health (Preview).
- November 21, 2025 Feature Deploy a highly available, multi-region Cloud Run service with automated failover and failback for internal traffic using Cloud Run service health (Preview).
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- September 23, 2025 Feature You can specify mount options when you configure Cloud Storage volume mounts for Cloud Run services , jobs , and worker pools . (GA) September 10, 2025 Feature You can deploy and configure a multi-region service from a single gcloud CLI command or by using a YAML or Terraform file (GA).

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Add the following to a google cloud run v2 service resource in your Terraform configuration: resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " ingress = "INGRESS TRAFFIC ALL" template { containers { name = " INGRESS CONTAINER NAME " ports { container port = CONTAINER PORT } image = " INGRESS IMAGE " depends on = [ " SIDECAR CONTAINER NAME " ] } containers { name = " SIDECAR CONTAINER NAME " image = " SIDECAR IMAGE " } } } The CONTAINER PORT represents the port where the ingress container listens for incoming requests.
- Add the following to a google cloud run v2 service resource in your Terraform configuration: provider "google" { project = " PROJECT-ID " } resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " client = "terraform" template { containers { image = " IMAGE URL " } } } resource "google cloud run v2 service iam member" "noauth" { location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name role = "roles/run.invoker" member = "allUsers" } Replace the following: PROJECT-ID : the Google Cloud project ID REGION : the Google Cloud region SERVICE : the name of your Cloud Run service.
- Use cases Use cases for sidecars in a Cloud Run service include: Application monitoring, logging and tracing Using Nginx , Envoy or Apache2 as a proxy in front of your application container Adding authentication and authorization filters (for example, Open Policy Agent) Running outbound connection proxies such as the Alloy DB Auth proxy Deploying a service with sidecar containers You can deploy multiple sidecars to a Cloud Run service using the Google Cloud console, the Google Cloud CLI, YAML, or Terraform.

