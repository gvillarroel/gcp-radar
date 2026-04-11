---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.890Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Multi-region service health for internal traffic"
feature_slug: "multi-region-service-health-for-internal-traffic"
latest_feature_date: "2025-11-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/configure-service-health"
  - "https://docs.cloud.google.com/run/docs/container-contract"
keywords:
  - "multi"
  - "region"
  - "health"
  - "for"
  - "internal"
  - "traffic"
  - "run"
  - "supports"
---

# Multi-region service health for internal traffic

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run service health supports highly available multi-region services with automated failover and failback for internal traffic.

## Extended Definition

Cloud Run service health supports highly available multi-region services with automated failover and failback for internal traffic.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- November 21, 2025 Feature Deploy a highly available, multi-region Cloud Run service with automated failover and failback for internal traffic using Cloud Run service health (Preview).
- February 24, 2026 Feature Deploy a highly available, multi-region Cloud Run service with automated failover and failback for external traffic using Cloud Run service health (Preview).
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- September 23, 2025 Feature You can specify mount options when you configure Cloud Storage volume mounts for Cloud Run services , jobs , and worker pools . (GA) September 10, 2025 Feature You can deploy and configure a multi-region service from a single gcloud CLI command or by using a YAML or Terraform file (GA).

### "Automate cross-regional failover with service health \_|\_ Cloud Run \_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This designates the healthy region and the instance serving traffic: Success: You deployed a highly available, multi-region Cloud Run service with automated failover and failback for external traffic.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project What's next Learn more about multi-region configurations in other Google Cloud products: Firestore Spanner Cloud Storage Cloud SQL Learn how to configure health checks for Cloud Run services Set up a global external Application Load Balancer with Cloud Run Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This guide shows you how to deploy a highly available, multi-region Cloud Run service with automated failover and failback for external traffic.
- Set up a global external Application Load Balancer To set up a global external Application Load Balancer to route traffic between us-west1 and europe-west1 , follow these steps: Create a backend service: gcloud compute backend-services create $SERVICE-bs \ --load-balancing-scheme=EXTERNAL MANAGED \ --global Set up a global static external IP address to reach your load balancer: gcloud compute addresses create $SERVICE-ip \ --network-tier=PREMIUM \ --ip-version=IPV4 \ --global Create a URL map to route incoming requests to the backend service: gcloud compute url-maps create $SERVICE-lb \ --default-service $SERVICE-bs Create a target HTTP proxy to route requests to your URL map: gcloud compute target-http-proxies create $SERVICE-hp \ --url-map=$SERVICE-lb Create a forwarding rule to route incoming requests to the proxy: gcloud compute forwarding-rules create $SERVICE-fr \ --load-balancing-scheme=EXTERNAL MANAGED \ --network-tier=PREMIUM \ --address=$SERVICE-ip \ --target-http-proxy=$SERVICE-hp \ --global \ --ports=80 Add your services through a serverless NEG To add the services you deployed in us-west1 and europe-west1 using the Serverless NEG, follow these steps: Create a serverless network endpoint group (NEG) for your Cloud Run service in us-west1 and europe-west1 : gcloud compute network-endpoint-groups create $SERVICE-neg-$REGION A \ --region $REGION A \ --network-endpoint-type=serverless \ --cloud-run-service=$SERVICE gcloud compute network-endpoint-groups create $SERVICE-neg-$REGION B \ --region $REGION B \ --network-endpoint-type=serverless \ --cloud-run-service=$SERVICE Add the serverless NEG as a backend to the backend services in us-west1 and europe-west1 : gcloud compute backend-services add-backend $SERVICE-bs \ --global \ --network-endpoint-group=$SERVICE-neg-$REGION A \ --network-endpoint-group-region=$REGION A gcloud compute backend-services add-backend $SERVICE-bs \ --global \ --network-endpoint-group=$SERVICE-neg-$REGION B \ --network-endpoint-group-region=$REGION B For additional configuration options, see Set up a global external Application Load Balancer with Cloud Run .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists some of the available metadata server information: Path Description /computeMetadata/v1/project/project-id Project ID of the project the Cloud Run resource belongs to. /computeMetadata/v1/project/numeric-project-id Project number of the project the Cloud Run resource belongs to. /computeMetadata/v1/instance/region Region of this Cloud Run resource, returns projects/ PROJECT-NUMBER /regions/ REGION /computeMetadata/v1/instance/id Unique identifier of the instance (also available in logs ). /computeMetadata/v1/instance/service-accounts/default/email Email for the service identity of this Cloud Run resource. /computeMetadata/v1/instance/service-accounts/default/token Generates an OAuth2 access token for the service account of this Cloud Run resource .
- For a Cloud Run service consisting of multi-container instances, you can specify the sequence in which the containers are started within the instance by configuring the container startup order .
- Concurrency (services) For Cloud Run services, each Cloud Run instance by default is set to multiple concurrency , where the ingress container can receive more than one request at the same time.
- Startup For Cloud Run services, your instances must listen for requests within 4 minutes after being started and all containers within the instance need to be healthy.

