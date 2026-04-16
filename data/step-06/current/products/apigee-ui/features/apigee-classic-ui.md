---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.157Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Apigee Classic UI"
feature_slug: "apigee-classic-ui"
latest_feature_date: "2025-11-02"
deprecation_date: "2025-11-02"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
keywords:
  - "apigee"
  - "classic"
  - "ui"
  - "was"
  - "legacy"
  - "user"
  - "interface"
  - "prior"
---

# Apigee Classic UI

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

Apigee Classic UI was the legacy Apigee user interface prior to migration to the Google Cloud console; Apigee Classic UI was the legacy Apigee user interface prior to migration to the Google Cloud console; deprecated on 2025-11-02.

## Extended Definition

Apigee Classic UI was the legacy Apigee user interface prior to migration to the Google Cloud console; Apigee Classic UI was the legacy Apigee user interface prior to migration to the Google Cloud console; deprecated on 2025-11-02.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users)
- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)

## Supporting Pages

### "Manage users, roles, and permissions using the API \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles)
- Source ID: `site-iam-reference-required-2`
- Final score: 54
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- More Information For more information, see: Users and roles Manage users, roles, and permissions using the Apigee APIs described in the following table: API method Description Organizations list API List all Apigee organizations, and the related projects for which a user has permissions.
- Home Documentation Application development Apigee Guides Send feedback Manage users, roles, and permissions using the API Stay organized with collections Save and categorize content based on your preferences.
- Environments Test IAM Permissions API Tests the permissions of a user on an environment.
- Returns a subset of permissions that the user has on the environment.

### Manage users in the Apigee UI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users)
- Source ID: `site-iam-reference`
- Final score: 54
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: Before you can add a new user (and specify environment-specific access for that new user) in the Apigee UI, you must grant that user access to the Google Cloud project, as described in Managing access in Google Cloud .
- When you first configure Apigee and create the Google Cloud project to which the Apigee organization is bound, you typically add a few users with different roles like API Admin and Environment Admin .
- Home Documentation Application development Apigee Guides Send feedback Manage users in the Apigee UI Stay organized with collections Save and categorize content based on your preferences.
- Add user accounts in the Apigee UI To specify user permissions for an environment: Ensure that you have already added the user to your Google Cloud project.

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-14`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Note that the URL map http1 backend is default. defaultService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 2 weight : 100 Validate the URL map: gcloud compute url-maps validate --source /tmp/apigee-map.yaml --project $PROJECT ID Create the url map with header-based routing: gcloud compute url - maps import apigee - http1 - http2 \ -- source / tmp / apigee - map . yaml \ -- global -- project $ PROJECT ID Create a load balancing target HTTPS proxy gcloud compute target-https-proxies create apigee-envoy-https-proxy \ --project $PROJECT ID --url-map apigee-envoy-proxy-map \ --ssl-certificates $CERTIFICATE NAME Reserve an IPV4 External IP and create firewall rules for the load balancer gcloud compute addresses create lb - ipv4 - vip - 1 \ -- project $ PROJECT ID \ -- network - tier = PREMIUM \ -- ip - version = IPV4 \ -- global gcloud compute addresses describe lb - ipv4 - vip - 1 \ -- project $ PROJECT ID -- format = "get(address)" -- global gcloud compute forwarding - rules create apigee - envoy - https - lb - rule \ -- project $ PROJECT ID -- address lb - ipv4 - vip - 1 -- global \ -- target - https - proxy apigee - envoy - https - proxy -- ports 443 Create a firewall rule gcloud compute firewall-rules create k8s-allow-lb-to-apigee-envoy \ --description "Allow incoming from GLB on TCP port 443 to Apigee Proxy" \ --project $PROJECT ID --network $VPC NAME --allow=tcp:443 \ --source-ranges=130.211.0.0/22,35.191.0.0/16 --target-tags=gke-apigee-proxy Example gcloud CLI commands for creating routing for gRPC proxies for existing load balancers This section shows example commands for creating gRPC proxies using the gcloud CLI and an existing load balancer.
- For more information, see OpenAPI spec for the helloworld sample . openapi : 3.0.0 info : description : OpenAPI Specification for the Apigee mock target service endpoint . version : 1.0.0 title : Mock Target API paths : / : get : summary : View personalized greeting operationId : View a personalized greeting description : View a personalized greeting for the specified or guest user . parameters : - name : user in : query description : Your user name . required : false schema : type : string responses : "200" : description : Success / help : get : summary : Get help operationId : Get help description : View help information about available resources in HTML format . responses : "200" : description : Success ...
- Otherwise, create a YAML file at /tmp/apigee-map.yaml with this configuration. defaultService : projects / dg - runtime - test1 / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects / dg - runtime - test1 / global / backendServices / YOUR BACKEND 2 weight : 100 Apply the new YAML for gRPC routing gcloud compute url - maps import APIGEE URL MAP NAME \ -- source / tmp / apigee - map . yaml \ -- global - project $ PROJECT ID Adding security Proxy security is achieved by adding a policy to your proxy.
- Create the instance template gcloud compute instance - templates create $ MIG NAME \ -- project $ PROJECT ID \ -- region $ REGION \ -- network $ VPC NAME \ -- subnet $ VPC SUBNET \ -- tags = https - server , apigee - mig - proxy , gke - apigee - proxy \ -- machine - type e2 - medium -- image - family debian - 12 \ -- image - project debian - cloud -- boot - disk - size 20 GB \ -- no - address \ -- metadata ENDPOINT = $ APIGEE ENDPOINT , startup - script - url = gs : //apigee-5g-saas/apigee-envoy-proxy-release/latest/conf/startup-script.sh Create the managed instance group gcloud compute instance - groups managed create $MIG NAME \ -- project $PROJECT ID -- base - instance - name apigee - mig \ -- size 2 -- template $MIG NAME -- region $REGION Configure autoscaling gcloud compute instance - groups managed set - autoscaling $MIG NAME \ -- project $PROJECT ID -- region $REGION -- max - num - replicas 50 \ -- target - cpu - utilization 0.75 -- cool - down - period 90 Define a named port gcloud compute instance - groups managed set - named - ports $MIG NAME \ -- project $PROJECT ID -- region $REGION -- named - ports https: 443 Create a Google-managed SSL certificate and key for the load balancer gcloud compute ssl-certificates create $CERTIFICATE NAME \ --domains=$DOMAIN HOSTNAME \ --project $PROJECT ID \ --global Validate that the certificate is provisioned gcloud compute ssl-certificates describe $CERTIFICATE NAME \ --global \ --format="get(name,managed.status, managed.Status)" Create the Global Cloud Load Balancer (GCLB) Create a health check gcloud compute health-checks create https hc-apigee-envoy-443 \ --project $PROJECT ID --port 443 --global \ --request-path /healthz/ingress Create the backend service for http1 gcloud compute backend - services create YOUR BACKEND 1 \ -- project $ PROJECT ID \ -- protocol HTTPS \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Create the backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Add MIGs to the backend service.

