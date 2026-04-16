---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.145Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Server-Sent Events (SSE)"
feature_slug: "server-sent-events-sse"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
keywords:
  - "continuous"
  - "streaming"
  - "real"
  - "time"
  - "events"
  - "sent"
  - "server"
---

# Server-Sent Events (SSE)

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Server-Sent Events support continuous real-time streaming responses from SSE endpoints to clients.

## Extended Definition

Server-Sent Events support continuous real-time streaming responses from SSE endpoints to clients.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)

## Supporting Pages

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-3`
- Final score: 300
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apigee supports continuous response streaming from server-sent event (SSE) endpoints to clients in real time.
- Home Documentation Application development Apigee Guides Send feedback Streaming server-sent events Stay organized with collections Save and categorize content based on your preferences.
- You can use the SanitizeModelResponse policy to sanitize incoming server-sent events in an EventFlow .
- In the Create a proxy pane, under Proxy template , select Proxy with Server-Sent Events (SSE) .

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-3`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Proxy with Server-Sent Events (SSE) An API proxy that includes an EventFlow for streaming server-sent events (SSE).
- For more information, see Streaming server-sent events .
- Create the instance template gcloud compute instance - templates create $ MIG NAME \ -- project $ PROJECT ID \ -- region $ REGION \ -- network $ VPC NAME \ -- subnet $ VPC SUBNET \ -- tags = https - server , apigee - mig - proxy , gke - apigee - proxy \ -- machine - type e2 - medium -- image - family debian - 12 \ -- image - project debian - cloud -- boot - disk - size 20 GB \ -- no - address \ -- metadata ENDPOINT = $ APIGEE ENDPOINT , startup - script - url = gs : //apigee-5g-saas/apigee-envoy-proxy-release/latest/conf/startup-script.sh Create the managed instance group gcloud compute instance - groups managed create $MIG NAME \ -- project $PROJECT ID -- base - instance - name apigee - mig \ -- size 2 -- template $MIG NAME -- region $REGION Configure autoscaling gcloud compute instance - groups managed set - autoscaling $MIG NAME \ -- project $PROJECT ID -- region $REGION -- max - num - replicas 50 \ -- target - cpu - utilization 0.75 -- cool - down - period 90 Define a named port gcloud compute instance - groups managed set - named - ports $MIG NAME \ -- project $PROJECT ID -- region $REGION -- named - ports https: 443 Create a Google-managed SSL certificate and key for the load balancer gcloud compute ssl-certificates create $CERTIFICATE NAME \ --domains=$DOMAIN HOSTNAME \ --project $PROJECT ID \ --global Validate that the certificate is provisioned gcloud compute ssl-certificates describe $CERTIFICATE NAME \ --global \ --format="get(name,managed.status, managed.Status)" Create the Global Cloud Load Balancer (GCLB) Create a health check gcloud compute health-checks create https hc-apigee-envoy-443 \ --project $PROJECT ID --port 443 --global \ --request-path /healthz/ingress Create the backend service for http1 gcloud compute backend - services create YOUR BACKEND 1 \ -- project $ PROJECT ID \ -- protocol HTTPS \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Create the backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Add MIGs to the backend service.
- Create another backend service for http2 Create backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Attach the second backend service to the MIG gcloud compute backend - services add - backend YOUR BACKEND 2 \ -- project $PROJECT ID -- instance - group $MIG NAME \ -- instance - group - region $REGION \ -- balancing - mode UTILIZATION -- max - utilization 0.8 -- global List the URL map for the existing Apigee GCLB gcloud compute url-maps list -project $PROJECT ID Pick up the correct URL map name used for Apigee load balancing gcloud compute url - maps export APIGEE URL MAP NAME - project $ PROJECT ID Create a load balancing URL map YAML file If you already have an existing URL map, merge this configuration into that.

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- See Streaming server-sent events for more information. .
- See Streaming server-sent events for more information.
- See Streaming server-sent events for more information.
- Target request target.email.address String Read only Email address of the TLS/SSL certificate presented by the target server Target response target.evaluated.url String Read/Write The URL configured in the TargetEndpoint XML file or the dynamic target URL (if target.evaluated.url is set during the message flow).

