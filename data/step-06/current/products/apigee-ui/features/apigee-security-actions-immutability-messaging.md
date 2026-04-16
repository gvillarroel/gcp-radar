---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.160Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Apigee Security actions immutability messaging"
feature_slug: "apigee-security-actions-immutability-messaging"
latest_feature_date: "2024-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/resource-files"
keywords:
  - "apigee"
  - "security"
  - "actions"
  - "immutability"
  - "messaging"
  - "action"
  - "creation"
  - "flow"
---

# Apigee Security actions immutability messaging

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The action creation flow for Apigee Security actions shows an informational message that actions cannot be edited or deleted.

## Extended Definition

The action creation flow for Apigee Security actions shows an informational message that actions cannot be edited or deleted.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/resource-files](https://docs.cloud.google.com/apigee/docs/api-platform/develop/resource-files)

## Supporting Pages

### "Best practices for API proxy design and development with Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- Source ID: `site-docs-reference-required-14`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- This can be used to redirect base API requests to a developer site, to return a custom response, or perform another action more useful than returning the default messaging.adaptors.http.flow.ApplicationNotFound .
- While many requirements can be met from a predefined set of steps/actions/policies like verifying a token or applying a quota or responding with a cached object, one often may require access to programmability.
- Due to longer-lived cache entries on the Apigee API servers, you may not see updated data immediately in your proxy flows, particularly if you are doing quick writes and then reads.
- Message payload size The message payload size in request or response flows for Apigee is restricted by default to 10MB.

### Managing resources \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/resource-files](https://docs.cloud.google.com/apigee/docs/api-platform/develop/resource-files)
- Source ID: `site-docs-reference-required-14`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Navigator view under Resources, position your cursor over the resource that you want to delete to display the actions menu.
- Under Actions , click more vert More , and then click Delete .
- Under Actions , click more vert More , and then click Edit .
- The following table shows the methods you can use to create, update, and delete resources for each repository: Repository Create View Update Delete API UI API UI API UI API UI API proxy revision Environment For example, all JavaScript files available to the test environment are stored in the following repository and are available to any API proxy running in the test environment: /organizations/ $ORG /environments/test/resourcefiles/jsc You can list all available resources by calling GET on the collection: curl https://api.enterprise.apigee.com/v1/organizations/ $ORG /resourcefiles/ $TYPE -u email The following request lists all JavaScript resources at the organization level: curl https://api.enterprise.apigee.com/v1/organizations/myorg/resourcefiles/jsc -u email The following request lists all JavaScript resources at the environment level, in the environment called prod : curl https://api.enterprise.apigee.com/v1/organizations/myorg/environments/prod/resourcefiles/jsc -u email The following request lists all JavaScript resources in an API proxy revision (the most specific level): curl https://api.enterprise.apigee.com/v1/organizations/myorg/apis/weatherapi/revisions/6/resourcefiles/jsc -u email Each request returns a list of resource names.

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-14`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Otherwise, create a YAML file at /tmp/apigee-map.yaml with this configuration. defaultService : projects / dg - runtime - test1 / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects / dg - runtime - test1 / global / backendServices / YOUR BACKEND 2 weight : 100 Apply the new YAML for gRPC routing gcloud compute url - maps import APIGEE URL MAP NAME \ -- source / tmp / apigee - map . yaml \ -- global - project $ PROJECT ID Adding security Proxy security is achieved by adding a policy to your proxy.
- Note that the URL map http1 backend is default. defaultService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 2 weight : 100 Validate the URL map: gcloud compute url-maps validate --source /tmp/apigee-map.yaml --project $PROJECT ID Create the url map with header-based routing: gcloud compute url - maps import apigee - http1 - http2 \ -- source / tmp / apigee - map . yaml \ -- global -- project $ PROJECT ID Create a load balancing target HTTPS proxy gcloud compute target-https-proxies create apigee-envoy-https-proxy \ --project $PROJECT ID --url-map apigee-envoy-proxy-map \ --ssl-certificates $CERTIFICATE NAME Reserve an IPV4 External IP and create firewall rules for the load balancer gcloud compute addresses create lb - ipv4 - vip - 1 \ -- project $ PROJECT ID \ -- network - tier = PREMIUM \ -- ip - version = IPV4 \ -- global gcloud compute addresses describe lb - ipv4 - vip - 1 \ -- project $ PROJECT ID -- format = "get(address)" -- global gcloud compute forwarding - rules create apigee - envoy - https - lb - rule \ -- project $ PROJECT ID -- address lb - ipv4 - vip - 1 -- global \ -- target - https - proxy apigee - envoy - https - proxy -- ports 443 Create a firewall rule gcloud compute firewall-rules create k8s-allow-lb-to-apigee-envoy \ --description "Allow incoming from GLB on TCP port 443 to Apigee Proxy" \ --project $PROJECT ID --network $VPC NAME --allow=tcp:443 \ --source-ranges=130.211.0.0/22,35.191.0.0/16 --target-tags=gke-apigee-proxy Example gcloud CLI commands for creating routing for gRPC proxies for existing load balancers This section shows example commands for creating gRPC proxies using the gcloud CLI and an existing load balancer.
- Proxy with Model Armor Enforces safe AI interactions by sanitizing user prompts and model responses.
- Create the instance template gcloud compute instance - templates create $ MIG NAME \ -- project $ PROJECT ID \ -- region $ REGION \ -- network $ VPC NAME \ -- subnet $ VPC SUBNET \ -- tags = https - server , apigee - mig - proxy , gke - apigee - proxy \ -- machine - type e2 - medium -- image - family debian - 12 \ -- image - project debian - cloud -- boot - disk - size 20 GB \ -- no - address \ -- metadata ENDPOINT = $ APIGEE ENDPOINT , startup - script - url = gs : //apigee-5g-saas/apigee-envoy-proxy-release/latest/conf/startup-script.sh Create the managed instance group gcloud compute instance - groups managed create $MIG NAME \ -- project $PROJECT ID -- base - instance - name apigee - mig \ -- size 2 -- template $MIG NAME -- region $REGION Configure autoscaling gcloud compute instance - groups managed set - autoscaling $MIG NAME \ -- project $PROJECT ID -- region $REGION -- max - num - replicas 50 \ -- target - cpu - utilization 0.75 -- cool - down - period 90 Define a named port gcloud compute instance - groups managed set - named - ports $MIG NAME \ -- project $PROJECT ID -- region $REGION -- named - ports https: 443 Create a Google-managed SSL certificate and key for the load balancer gcloud compute ssl-certificates create $CERTIFICATE NAME \ --domains=$DOMAIN HOSTNAME \ --project $PROJECT ID \ --global Validate that the certificate is provisioned gcloud compute ssl-certificates describe $CERTIFICATE NAME \ --global \ --format="get(name,managed.status, managed.Status)" Create the Global Cloud Load Balancer (GCLB) Create a health check gcloud compute health-checks create https hc-apigee-envoy-443 \ --project $PROJECT ID --port 443 --global \ --request-path /healthz/ingress Create the backend service for http1 gcloud compute backend - services create YOUR BACKEND 1 \ -- project $ PROJECT ID \ -- protocol HTTPS \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Create the backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Add MIGs to the backend service.

