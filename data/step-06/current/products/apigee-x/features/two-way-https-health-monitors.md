---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.170Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Two-way HTTPS health monitors"
feature_slug: "two-way-https-health-monitors"
latest_feature_date: "2024-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
keywords:
  - "monitors"
  - "health"
  - "https"
  - "http"
---

# Two-way HTTPS health monitors

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

HTTP health monitors can use TargetServer SSL parameters to perform two-way HTTPS health checks.

## Extended Definition

HTTP health monitors can use TargetServer SSL parameters to perform two-way HTTPS health checks.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)

## Supporting Pages

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-3`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the instance template gcloud compute instance - templates create $ MIG NAME \ -- project $ PROJECT ID \ -- region $ REGION \ -- network $ VPC NAME \ -- subnet $ VPC SUBNET \ -- tags = https - server , apigee - mig - proxy , gke - apigee - proxy \ -- machine - type e2 - medium -- image - family debian - 12 \ -- image - project debian - cloud -- boot - disk - size 20 GB \ -- no - address \ -- metadata ENDPOINT = $ APIGEE ENDPOINT , startup - script - url = gs : //apigee-5g-saas/apigee-envoy-proxy-release/latest/conf/startup-script.sh Create the managed instance group gcloud compute instance - groups managed create $MIG NAME \ -- project $PROJECT ID -- base - instance - name apigee - mig \ -- size 2 -- template $MIG NAME -- region $REGION Configure autoscaling gcloud compute instance - groups managed set - autoscaling $MIG NAME \ -- project $PROJECT ID -- region $REGION -- max - num - replicas 50 \ -- target - cpu - utilization 0.75 -- cool - down - period 90 Define a named port gcloud compute instance - groups managed set - named - ports $MIG NAME \ -- project $PROJECT ID -- region $REGION -- named - ports https: 443 Create a Google-managed SSL certificate and key for the load balancer gcloud compute ssl-certificates create $CERTIFICATE NAME \ --domains=$DOMAIN HOSTNAME \ --project $PROJECT ID \ --global Validate that the certificate is provisioned gcloud compute ssl-certificates describe $CERTIFICATE NAME \ --global \ --format="get(name,managed.status, managed.Status)" Create the Global Cloud Load Balancer (GCLB) Create a health check gcloud compute health-checks create https hc-apigee-envoy-443 \ --project $PROJECT ID --port 443 --global \ --request-path /healthz/ingress Create the backend service for http1 gcloud compute backend - services create YOUR BACKEND 1 \ -- project $ PROJECT ID \ -- protocol HTTPS \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Create the backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Add MIGs to the backend service.
- Create another backend service for http2 Create backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Attach the second backend service to the MIG gcloud compute backend - services add - backend YOUR BACKEND 2 \ -- project $PROJECT ID -- instance - group $MIG NAME \ -- instance - group - region $REGION \ -- balancing - mode UTILIZATION -- max - utilization 0.8 -- global List the URL map for the existing Apigee GCLB gcloud compute url-maps list -project $PROJECT ID Pick up the correct URL map name used for Apigee load balancing gcloud compute url - maps export APIGEE URL MAP NAME - project $ PROJECT ID Create a load balancing URL map YAML file If you already have an existing URL map, merge this configuration into that.
- Note that the URL map http1 backend is default. defaultService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 2 weight : 100 Validate the URL map: gcloud compute url-maps validate --source /tmp/apigee-map.yaml --project $PROJECT ID Create the url map with header-based routing: gcloud compute url - maps import apigee - http1 - http2 \ -- source / tmp / apigee - map . yaml \ -- global -- project $ PROJECT ID Create a load balancing target HTTPS proxy gcloud compute target-https-proxies create apigee-envoy-https-proxy \ --project $PROJECT ID --url-map apigee-envoy-proxy-map \ --ssl-certificates $CERTIFICATE NAME Reserve an IPV4 External IP and create firewall rules for the load balancer gcloud compute addresses create lb - ipv4 - vip - 1 \ -- project $ PROJECT ID \ -- network - tier = PREMIUM \ -- ip - version = IPV4 \ -- global gcloud compute addresses describe lb - ipv4 - vip - 1 \ -- project $ PROJECT ID -- format = "get(address)" -- global gcloud compute forwarding - rules create apigee - envoy - https - lb - rule \ -- project $ PROJECT ID -- address lb - ipv4 - vip - 1 -- global \ -- target - https - proxy apigee - envoy - https - proxy -- ports 443 Create a firewall rule gcloud compute firewall-rules create k8s-allow-lb-to-apigee-envoy \ --description "Allow incoming from GLB on TCP port 443 to Apigee Proxy" \ --project $PROJECT ID --network $VPC NAME --allow=tcp:443 \ --source-ranges=130.211.0.0/22,35.191.0.0/16 --target-tags=gke-apigee-proxy Example gcloud CLI commands for creating routing for gRPC proxies for existing load balancers This section shows example commands for creating gRPC proxies using the gcloud CLI and an existing load balancer.
- The full URL structure that clients use to call your API proxy is as follows: https://[host]/ BASE PATH / CONDITIONAL FLOW PATH Note : The base path must be unique; you cannot deploy two API proxies with the same base path.

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- For details, see Authentication element in the ServiceCallout policy reference. <Authentication> element error reference If you are using the <Authentication> element, you can find possible error messages and troubleshooting tips for deployment and runtime errors in the Errors section of the ServiceCallout policy documentation. <Authentication> element examples The following example shows how to call a service deployed on Cloud Run as the target using the Authentication element to generate an OpenID Connect token needed to authenticate the call: <TargetEndpoint name="TargetEndpoint-1"> <HTTPTargetConnection> <Properties/> <URL>https://cloudrun-hostname.a.run.app/test</URL> <Authentication> <GoogleIDToken> <Audience>https://cloudrun-hostname.a.run.app/test</Audience> </GoogleIDToken> </Authentication> </HTTPTargetConnection> </TargetEndpoint> The following example shows how to call a TargetService that points to Cloud Run using the Authentication element to generate an OpenID Connect token needed to authenticate the call.
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .
- For example, shown below is a target endpoint that uses a reference to the keystore: <SSLInfo> <Enabled>true</Enabled> <ClientAuthEnabled>false</ClientAuthEnabled> <KeyStore>ref://keystoreref</KeyStore> <KeyAlias>myKeyAlias</KeyAlias> </SSLInfo> Use the following POST API call to create the reference named keystoreref : curl "https://apigee.googleapis.com/v1/organizations/ {org} /environments/ {env} /references" \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -d '<ResourceReference name=" keystoreref "> <Refers> myTestKeystore </Refers> <ResourceType>KeyStore</ResourceType> </ResourceReference>' Where $TOKEN is set to your OAuth 2.0 access token, as described in Obtaining an OAuth 2.0 access token .
- The Authorization header, if present, is left unmodified and also sent in the request. < TargetEndpoint name = "TargetEndpoint-1" > < HTTPTargetConnection > < Authentication > < HeaderName>X - Serverless - Authorization < / HeaderName > < GoogleIDToken > < Audience ref = "flow.variable.audience" > https : // cloudrun - hostname . a . run . app < / Audience > < / GoogleIDToken > < / Authentication > < LoadBalancer > < Server name = "cloud-run-target" / > < / LoadBalancer > < / HTTPTargetConnection > < / TargetEndpoint > The following example shows how to call a TargetService that points to the Google Secret Manager service.

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Optional Type Complex type Parent Element <Set> Child Elements <HeaderName> <GoogleAccessToken> <GoogleIdToken> The Authentication element uses the following syntax: Syntax <AssignMessage> ... <Set> <Authentication> <HeaderName> HEADER NAME </HeaderName> --EITHER-- <GoogleAccessToken> <Scopes> <Scope> SCOPE </Scope> ... </Scopes> <GoogleAccessToken> --OR-- <GoogleIDToken> <Audience ref=" FLOW VARIABLE "> TARGET URL </Audience> </GoogleIDToken> </Authentication> </Set> ... </AssignMessage> Using Access Token The following example shows the GoogleAccessToken element: <Authentication> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scope> </Scopes> </GoogleAccessToken> </Authentication> Using ID Token The following example shows the GoogleIDToken element: <Authentication> <GoogleIDToken> <Audience>https://httpserver0-bar.run.app</Audience> </GoogleIDToken> </Authentication> Using HeaderName The following example shows the HeaderName element: <Authentication> <HeaderName>Authorization</HeaderName> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scopes> </Scopes> </GoogleAccessToken> </Authentication> <HeaderName> (child of <Authentication> ) By default, when an Authentication configuration is present, Apigee generates a bearer token and injects it into the Authorization header in the message sent to the target system.
- Type String Parent Element <Authentication> Child Elements <Audience> The GoogleIDToken element uses the following syntax: Syntax <AssignMessage> ... <Authentication> <GoogleIDToken> <Audience ref=" FLOW VARIABLE NAME "> TARGET URL </Audience> </GoogleIDToken> </Authentication> </AssignMessage> Example 1 The following example shows the GoogleIDToken element: <Authentication> <GoogleIDToken> <Audience>https://httpserver0-bar.run.app</Audience> </GoogleIDToken> </Authentication> <Audience> (child of <GoogleAccessToken> ) The audience for the generated authentication token, such as the API or account that the token grants access to.
- Type String Parent Element <Authentication> Child Elements <Scopes> The GoogleAccessToken element uses the following syntax: Syntax <AssignMessage> ... <Authentication> <GoogleAccessToken> <Scopes> <Scope> SCOPE 1 </Scope> ... </Scopes> /GoogleAccessToken> </Authentication> ... </AssignMessage> Example 1 The following example shows the GoogleAccessToken element: <Authentication> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scopes> </Scopes> </GoogleAccessToken> </Authentication> <Scopes> (child of <GoogleAccessToken> ) Identifies the scopes to be included in the OAuth 2.0 access token.
- Send a request to your API proxy; for example: curl -vL https://ahamilton-eval-test.apigee.net/myproxy Optionally, you can pipe the results through a utility such as xmllint so that the XML is displayed in a nicely formatted structure: curl -vL https://ahamilton-eval-test.apigee.net/myproxy xmllint --format - The body of the response should look like the following: 42 test gopher 7: Get ServiceCallout response headers In the following example, let's say that a ServiceCallout policy is in the API proxy request, and the callout response contains multiple headers of the same name ( Set-Cookie ).

