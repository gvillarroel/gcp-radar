---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.185Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Private Service Connect northbound routing for multi-region deployments"
feature_slug: "private-service-connect-northbound-routing-for-multi-region-deployments"
latest_feature_date: "2022-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference"
keywords:
  - "deployments"
  - "multi"
  - "northbound"
  - "routing"
  - "region"
  - "connect"
  - "private"
  - "supports"
---

# Private Service Connect northbound routing for multi-region deployments

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect supports northbound routing for Apigee multi-region configurations.

## Extended Definition

Private Service Connect supports northbound routing for Apigee multi-region configurations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- If not, then the inbound request is forwarded to http://api.mycompany.com/v2 . <RouteRule name="MyRoute"> <Condition>request.header.routeTo = "TargetEndpoint1"</Condition> <TargetEndpoint>TargetEndpoint1</TargetEndpoint> </RouteRule> <RouteRule name="default"> <URL>http://api.mycompany.com/v2</URL> </RouteRule> Note: More dynamic routing The Apigee community article specifying proxy endpoint shows dynamic routing to different world regions based on variables extracted from the request URI.
- Without this EKU, mTLS connections will fail for both northbound (client to Apigee) and southbound (Apigee to backend) traffic.
- For details, see Authentication element in the ServiceCallout policy reference. <Authentication> element error reference If you are using the <Authentication> element, you can find possible error messages and troubleshooting tips for deployment and runtime errors in the Errors section of the ServiceCallout policy documentation. <Authentication> element examples The following example shows how to call a service deployed on Cloud Run as the target using the Authentication element to generate an OpenID Connect token needed to authenticate the call: <TargetEndpoint name="TargetEndpoint-1"> <HTTPTargetConnection> <Properties/> <URL>https://cloudrun-hostname.a.run.app/test</URL> <Authentication> <GoogleIDToken> <Audience>https://cloudrun-hostname.a.run.app/test</Audience> </GoogleIDToken> </Authentication> </HTTPTargetConnection> </TargetEndpoint> The following example shows how to call a TargetService that points to Cloud Run using the Authentication element to generate an OpenID Connect token needed to authenticate the call.
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-3`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Create the instance template gcloud compute instance - templates create $ MIG NAME \ -- project $ PROJECT ID \ -- region $ REGION \ -- network $ VPC NAME \ -- subnet $ VPC SUBNET \ -- tags = https - server , apigee - mig - proxy , gke - apigee - proxy \ -- machine - type e2 - medium -- image - family debian - 12 \ -- image - project debian - cloud -- boot - disk - size 20 GB \ -- no - address \ -- metadata ENDPOINT = $ APIGEE ENDPOINT , startup - script - url = gs : //apigee-5g-saas/apigee-envoy-proxy-release/latest/conf/startup-script.sh Create the managed instance group gcloud compute instance - groups managed create $MIG NAME \ -- project $PROJECT ID -- base - instance - name apigee - mig \ -- size 2 -- template $MIG NAME -- region $REGION Configure autoscaling gcloud compute instance - groups managed set - autoscaling $MIG NAME \ -- project $PROJECT ID -- region $REGION -- max - num - replicas 50 \ -- target - cpu - utilization 0.75 -- cool - down - period 90 Define a named port gcloud compute instance - groups managed set - named - ports $MIG NAME \ -- project $PROJECT ID -- region $REGION -- named - ports https: 443 Create a Google-managed SSL certificate and key for the load balancer gcloud compute ssl-certificates create $CERTIFICATE NAME \ --domains=$DOMAIN HOSTNAME \ --project $PROJECT ID \ --global Validate that the certificate is provisioned gcloud compute ssl-certificates describe $CERTIFICATE NAME \ --global \ --format="get(name,managed.status, managed.Status)" Create the Global Cloud Load Balancer (GCLB) Create a health check gcloud compute health-checks create https hc-apigee-envoy-443 \ --project $PROJECT ID --port 443 --global \ --request-path /healthz/ingress Create the backend service for http1 gcloud compute backend - services create YOUR BACKEND 1 \ -- project $ PROJECT ID \ -- protocol HTTPS \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Create the backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Add MIGs to the backend service.
- Create another backend service for http2 Create backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Attach the second backend service to the MIG gcloud compute backend - services add - backend YOUR BACKEND 2 \ -- project $PROJECT ID -- instance - group $MIG NAME \ -- instance - group - region $REGION \ -- balancing - mode UTILIZATION -- max - utilization 0.8 -- global List the URL map for the existing Apigee GCLB gcloud compute url-maps list -project $PROJECT ID Pick up the correct URL map name used for Apigee load balancing gcloud compute url - maps export APIGEE URL MAP NAME - project $ PROJECT ID Create a load balancing URL map YAML file If you already have an existing URL map, merge this configuration into that.
- PROJECT ID = YOUR PROJECT ID MIG NAME = YOUR MIG NAME VPC NAME = default VPC SUBNET = default REGION = REGION NAME APIGEE ENDPOINT = ENDPOINT CERTIFICATE NAME = CERTIFICATE NAME DOMAIN HOSTNAME = DOMAIN HOSTNAME Example gcloud CLI commands for creating routing for gRPC proxies using new load balancers This section shows example commands for creating gRPC proxies using the gcloud CLI and a new load balancer.
- Note that the URL map http1 backend is default. defaultService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 2 weight : 100 Validate the URL map: gcloud compute url-maps validate --source /tmp/apigee-map.yaml --project $PROJECT ID Create the url map with header-based routing: gcloud compute url - maps import apigee - http1 - http2 \ -- source / tmp / apigee - map . yaml \ -- global -- project $ PROJECT ID Create a load balancing target HTTPS proxy gcloud compute target-https-proxies create apigee-envoy-https-proxy \ --project $PROJECT ID --url-map apigee-envoy-proxy-map \ --ssl-certificates $CERTIFICATE NAME Reserve an IPV4 External IP and create firewall rules for the load balancer gcloud compute addresses create lb - ipv4 - vip - 1 \ -- project $ PROJECT ID \ -- network - tier = PREMIUM \ -- ip - version = IPV4 \ -- global gcloud compute addresses describe lb - ipv4 - vip - 1 \ -- project $ PROJECT ID -- format = "get(address)" -- global gcloud compute forwarding - rules create apigee - envoy - https - lb - rule \ -- project $ PROJECT ID -- address lb - ipv4 - vip - 1 -- global \ -- target - https - proxy apigee - envoy - https - proxy -- ports 443 Create a firewall rule gcloud compute firewall-rules create k8s-allow-lb-to-apigee-envoy \ --description "Allow incoming from GLB on TCP port 443 to Apigee Proxy" \ --project $PROJECT ID --network $VPC NAME --allow=tcp:443 \ --source-ranges=130.211.0.0/22,35.191.0.0/16 --target-tags=gke-apigee-proxy Example gcloud CLI commands for creating routing for gRPC proxies for existing load balancers This section shows example commands for creating gRPC proxies using the gcloud CLI and an existing load balancer.

### "Analytics metrics, dimensions, and filters reference \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- The rate charged for a transaction is calculated using the following formula: x apigee mintng rate = (consumption-based pricing rate) perUnitPriceMultiplier value The value of the consumption-based pricing rate is fetched from your rate plan and the perUnitPriceMultiplier value is multiplied only if the variable is captured by the DataCapture policy.
- Target URL target url Full URL of the target service defined in an API proxy's TargetEndpoint. <TargetEndpoint name="default"> ... <HTTPTargetConnection> <URL>http://mocktarget.apigee.net/user?user=Dude</URL> </HTTPTargetConnection> In this example, the target url is http://mocktarget.apigee.net/user?user=Dude .
- For example, say an API proxy calls the following target: <TargetEndpoint name="default"> ... <HTTPTargetConnection> <URL>http://mocktarget.apigee.net/user?user=Dude</URL> </HTTPTargetConnection> In this example, the target basepath is /user .
- Note that when using routing products such as Akamai to capture the true IP addresses of clients, the client IP is passed to Apigee in the HTTP header True-Client-IP , which is then used to set the ax true client ip dimension.

