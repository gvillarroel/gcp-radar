---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.170Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Provisioning wizard auto-allocation of /22 and /28 IP ranges"
feature_slug: "provisioning-wizard-auto-allocation-of-22-and-28-ip-ranges"
latest_feature_date: "2022-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
  - "https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development"
keywords:
  - "provisioning"
  - "wizard"
  - "auto"
  - "allocation"
  - "22"
  - "28"
  - "ip"
  - "ranges"
---

# Provisioning wizard auto-allocation of /22 and /28 IP ranges

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The Apigee provisioning wizard can automatically allocate /22 and /28 IP address ranges instead of requiring a larger /21 range.

## Extended Definition

The Apigee provisioning wizard can automatically allocate /22 and /28 IP address ranges instead of requiring a larger /21 range.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)

## Supporting Pages

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-14`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Create the instance template gcloud compute instance - templates create $ MIG NAME \ -- project $ PROJECT ID \ -- region $ REGION \ -- network $ VPC NAME \ -- subnet $ VPC SUBNET \ -- tags = https - server , apigee - mig - proxy , gke - apigee - proxy \ -- machine - type e2 - medium -- image - family debian - 12 \ -- image - project debian - cloud -- boot - disk - size 20 GB \ -- no - address \ -- metadata ENDPOINT = $ APIGEE ENDPOINT , startup - script - url = gs : //apigee-5g-saas/apigee-envoy-proxy-release/latest/conf/startup-script.sh Create the managed instance group gcloud compute instance - groups managed create $MIG NAME \ -- project $PROJECT ID -- base - instance - name apigee - mig \ -- size 2 -- template $MIG NAME -- region $REGION Configure autoscaling gcloud compute instance - groups managed set - autoscaling $MIG NAME \ -- project $PROJECT ID -- region $REGION -- max - num - replicas 50 \ -- target - cpu - utilization 0.75 -- cool - down - period 90 Define a named port gcloud compute instance - groups managed set - named - ports $MIG NAME \ -- project $PROJECT ID -- region $REGION -- named - ports https: 443 Create a Google-managed SSL certificate and key for the load balancer gcloud compute ssl-certificates create $CERTIFICATE NAME \ --domains=$DOMAIN HOSTNAME \ --project $PROJECT ID \ --global Validate that the certificate is provisioned gcloud compute ssl-certificates describe $CERTIFICATE NAME \ --global \ --format="get(name,managed.status, managed.Status)" Create the Global Cloud Load Balancer (GCLB) Create a health check gcloud compute health-checks create https hc-apigee-envoy-443 \ --project $PROJECT ID --port 443 --global \ --request-path /healthz/ingress Create the backend service for http1 gcloud compute backend - services create YOUR BACKEND 1 \ -- project $ PROJECT ID \ -- protocol HTTPS \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Create the backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Add MIGs to the backend service.
- Note that the URL map http1 backend is default. defaultService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 2 weight : 100 Validate the URL map: gcloud compute url-maps validate --source /tmp/apigee-map.yaml --project $PROJECT ID Create the url map with header-based routing: gcloud compute url - maps import apigee - http1 - http2 \ -- source / tmp / apigee - map . yaml \ -- global -- project $ PROJECT ID Create a load balancing target HTTPS proxy gcloud compute target-https-proxies create apigee-envoy-https-proxy \ --project $PROJECT ID --url-map apigee-envoy-proxy-map \ --ssl-certificates $CERTIFICATE NAME Reserve an IPV4 External IP and create firewall rules for the load balancer gcloud compute addresses create lb - ipv4 - vip - 1 \ -- project $ PROJECT ID \ -- network - tier = PREMIUM \ -- ip - version = IPV4 \ -- global gcloud compute addresses describe lb - ipv4 - vip - 1 \ -- project $ PROJECT ID -- format = "get(address)" -- global gcloud compute forwarding - rules create apigee - envoy - https - lb - rule \ -- project $ PROJECT ID -- address lb - ipv4 - vip - 1 -- global \ -- target - https - proxy apigee - envoy - https - proxy -- ports 443 Create a firewall rule gcloud compute firewall-rules create k8s-allow-lb-to-apigee-envoy \ --description "Allow incoming from GLB on TCP port 443 to Apigee Proxy" \ --project $PROJECT ID --network $VPC NAME --allow=tcp:443 \ --source-ranges=130.211.0.0/22,35.191.0.0/16 --target-tags=gke-apigee-proxy Example gcloud CLI commands for creating routing for gRPC proxies for existing load balancers This section shows example commands for creating gRPC proxies using the gcloud CLI and an existing load balancer.
- For step-by-step instructions on creating proxies, see the following topics: Tutorial: Build your first API proxy Creating an API proxy Creating an API proxy using the UI The easiest way to create an API proxy is using the Create Proxy wizard.
- The wizard enables you to create an API proxy from the following sources: Category Type Description General template Reverse proxy (most common) An API proxy that routes inbound requests to existing HTTP backend services.

### Auto-register Apigee proxies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies)
- Source ID: `site-docs-reference-required-10`
- Final score: 51
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback Auto-register Apigee proxies Stay organized with collections Save and categorize content based on your preferences.
- Auto-register Apigee proxies In the Google Cloud console, go to the API hub page.
- Before you begin You must have completed the API hub provisioning steps.

### "Best practices for API proxy design and development with Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- Source ID: `site-docs-reference-required-14`
- Final score: 50
- Re-rank relevance: N/A

