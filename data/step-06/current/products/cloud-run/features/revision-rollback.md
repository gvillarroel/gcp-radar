---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.613Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Revision rollback"
feature_slug: "revision-rollback"
latest_feature_date: "2020-02-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting"
  - "https://docs.cloud.google.com/run/docs/securing/service-identity"
  - "https://docs.cloud.google.com/run/docs/tutorials/configure-service-health"
keywords:
  - "rollback"
  - "rolling"
  - "earlier"
  - "back"
  - "revision"
  - "traffic"
  - "supports"
---

# Revision rollback

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports rolling back service traffic to earlier revisions.

## Extended Definition

Cloud Run supports rolling back service traffic to earlier revisions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)
- [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)
- [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)

## Supporting Pages

### Introduction to service identity \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)
- Source ID: `site-docs-reference-required-6`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting Cloud Run Guides Send feedback Introduction to service identity Stay organized with collections Save and categorize content based on your preferences.
- The Cloud Run service identity is a service account that was assigned as the Cloud Run instance's identity when you deploy a revision or execute a job.
- The following diagram shows how a user account calls the Cloud Run Admin API to deploy a new revision from the Google Cloud console: Figure 1.

### "Tutorial: Local troubleshooting of a Cloud Run service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Read more about viewing logs in Cloud Run Rollback to a healthy version If this is an established service, known to work, there will be a previous revision of the service on Cloud Run.
- However, if you have a service with previous versions you can roll back to, follow Viewing revision details to extract the container name and configuration details necessary to create a new working deployment of your service.
- Each deployment to a service creates a new revision and automatically starts serving traffic when ready.
- Relieve user impact by deciding to push forward in a fix or rollback to a known-healthy version.

### "Automate cross-regional failover with service health \_|\_ Cloud Run \_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- Source ID: `site-docs-root-2`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Set up a global external Application Load Balancer To set up a global external Application Load Balancer to route traffic between us-west1 and europe-west1 , follow these steps: Create a backend service: gcloud compute backend-services create $SERVICE-bs \ --load-balancing-scheme=EXTERNAL MANAGED \ --global Set up a global static external IP address to reach your load balancer: gcloud compute addresses create $SERVICE-ip \ --network-tier=PREMIUM \ --ip-version=IPV4 \ --global Create a URL map to route incoming requests to the backend service: gcloud compute url-maps create $SERVICE-lb \ --default-service $SERVICE-bs Create a target HTTP proxy to route requests to your URL map: gcloud compute target-http-proxies create $SERVICE-hp \ --url-map=$SERVICE-lb Create a forwarding rule to route incoming requests to the proxy: gcloud compute forwarding-rules create $SERVICE-fr \ --load-balancing-scheme=EXTERNAL MANAGED \ --network-tier=PREMIUM \ --address=$SERVICE-ip \ --target-http-proxy=$SERVICE-hp \ --global \ --ports=80 Add your services through a serverless NEG To add the services you deployed in us-west1 and europe-west1 using the Serverless NEG, follow these steps: Create a serverless network endpoint group (NEG) for your Cloud Run service in us-west1 and europe-west1 : gcloud compute network-endpoint-groups create $SERVICE-neg-$REGION A \ --region $REGION A \ --network-endpoint-type=serverless \ --cloud-run-service=$SERVICE gcloud compute network-endpoint-groups create $SERVICE-neg-$REGION B \ --region $REGION B \ --network-endpoint-type=serverless \ --cloud-run-service=$SERVICE Add the serverless NEG as a backend to the backend services in us-west1 and europe-west1 : gcloud compute backend-services add-backend $SERVICE-bs \ --global \ --network-endpoint-group=$SERVICE-neg-$REGION A \ --network-endpoint-group-region=$REGION A gcloud compute backend-services add-backend $SERVICE-bs \ --global \ --network-endpoint-group=$SERVICE-neg-$REGION B \ --network-endpoint-group-region=$REGION B For additional configuration options, see Set up a global external Application Load Balancer with Cloud Run .
- This designates the healthy region and the instance serving traffic: Success: You deployed a highly available, multi-region Cloud Run service with automated failover and failback for external traffic.
- This guide shows you how to deploy a highly available, multi-region Cloud Run service with automated failover and failback for external traffic.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project What's next Learn more about multi-region configurations in other Google Cloud products: Firestore Spanner Cloud Storage Cloud SQL Learn how to configure health checks for Cloud Run services Set up a global external Application Load Balancer with Cloud Run Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

