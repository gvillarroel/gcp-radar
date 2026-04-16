---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.184Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Private Service Connect for northbound traffic"
feature_slug: "private-service-connect-for-northbound-traffic"
latest_feature_date: "2022-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls"
keywords:
  - "northbound"
  - "client"
  - "enables"
  - "routing"
  - "connect"
  - "private"
  - "traffic"
---

# Private Service Connect for northbound traffic

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect enables private client-to-Apigee northbound traffic routing; Private Service Connect enables clients to connect to Apigee without managed instance groups for northbound traffic.

## Extended Definition

Private Service Connect enables private client-to-Apigee northbound traffic routing; Private Service Connect enables clients to connect to Apigee without managed instance groups for northbound traffic.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Without this EKU, mTLS connections will fail for both northbound (client to Apigee) and southbound (Apigee to backend) traffic.
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .
- Enabling two-way TLS typically requires that you set up both a truststore and a keystore on Apigee. false No KeyStore A keystore containing private keys used for outbound client authentication N/A Yes (if ClientAuthEnabled is true) KeyAlias The key alias of the private key used for outbound client authentication N/A Yes (if ClientAuthEnabled is true) IgnoreValidationErrors Indicates whether validation errors are ignored.
- N/A No ClientAuthEnabled If set to true , enables two-way TLS (also known as mutual TLS or mTLS) between Apigee and the remote peer - either the API client, or the target backend.

### Options for configuring TLS \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls)
- Source ID: `site-docs-reference-required-3`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- About setting TLS options in a target endpoint or target server A target can be represented by an XML object like the one below: <HTTPTargetConnection> <Properties/> <URL> https:myTargetAddress </URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>ref://myKeystoreRef</KeyStore> <KeyAlias>myKeyAlias</KeyAlias> <TrustStore>ref://myTruststoreRef</TrustStore> <IgnoreValidationErrors>false</IgnoreValidationErrors> <Protocols>myProtocols</Protocols> <Ciphers>myCipher</Ciphers> </SSLInfo> </HTTPTargetConnection> The area of the target endpoint configuration that you modify to configure TLS is defined by the <SSLInfo> tag.
- Enabling two-way TLS typically requires that you set up a truststore on Apigee and a truststore. <KeyStore> A keystore containing private keys used for outbound client authentication <KeyAlias> The alias specified when you uploaded a cert and private key to the keystore. <TrustStore> A keystore containing trusted server certificates. <IgnoreValidationErrors> Indicates whether validation errors are ignored.
- A success response ( 2xx ) can occur under certain conditions, if <IgnoreValidationErrors> is set to true . <ClientAuthEnabled> Enables two-way TLS (also known as mutual TLS or mTLS) between Apigee and the API client, or between Apigee and the target backend.
- If the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-3`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- With passthrough support , the gRPC payload is itself opaque to Apigee and the traffic is routed from the gRPC client to the preconfigured gRPC target server in the target configuration.
- Create the instance template gcloud compute instance - templates create $ MIG NAME \ -- project $ PROJECT ID \ -- region $ REGION \ -- network $ VPC NAME \ -- subnet $ VPC SUBNET \ -- tags = https - server , apigee - mig - proxy , gke - apigee - proxy \ -- machine - type e2 - medium -- image - family debian - 12 \ -- image - project debian - cloud -- boot - disk - size 20 GB \ -- no - address \ -- metadata ENDPOINT = $ APIGEE ENDPOINT , startup - script - url = gs : //apigee-5g-saas/apigee-envoy-proxy-release/latest/conf/startup-script.sh Create the managed instance group gcloud compute instance - groups managed create $MIG NAME \ -- project $PROJECT ID -- base - instance - name apigee - mig \ -- size 2 -- template $MIG NAME -- region $REGION Configure autoscaling gcloud compute instance - groups managed set - autoscaling $MIG NAME \ -- project $PROJECT ID -- region $REGION -- max - num - replicas 50 \ -- target - cpu - utilization 0.75 -- cool - down - period 90 Define a named port gcloud compute instance - groups managed set - named - ports $MIG NAME \ -- project $PROJECT ID -- region $REGION -- named - ports https: 443 Create a Google-managed SSL certificate and key for the load balancer gcloud compute ssl-certificates create $CERTIFICATE NAME \ --domains=$DOMAIN HOSTNAME \ --project $PROJECT ID \ --global Validate that the certificate is provisioned gcloud compute ssl-certificates describe $CERTIFICATE NAME \ --global \ --format="get(name,managed.status, managed.Status)" Create the Global Cloud Load Balancer (GCLB) Create a health check gcloud compute health-checks create https hc-apigee-envoy-443 \ --project $PROJECT ID --port 443 --global \ --request-path /healthz/ingress Create the backend service for http1 gcloud compute backend - services create YOUR BACKEND 1 \ -- project $ PROJECT ID \ -- protocol HTTPS \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Create the backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Add MIGs to the backend service.
- Note that the URL map http1 backend is default. defaultService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 2 weight : 100 Validate the URL map: gcloud compute url-maps validate --source /tmp/apigee-map.yaml --project $PROJECT ID Create the url map with header-based routing: gcloud compute url - maps import apigee - http1 - http2 \ -- source / tmp / apigee - map . yaml \ -- global -- project $ PROJECT ID Create a load balancing target HTTPS proxy gcloud compute target-https-proxies create apigee-envoy-https-proxy \ --project $PROJECT ID --url-map apigee-envoy-proxy-map \ --ssl-certificates $CERTIFICATE NAME Reserve an IPV4 External IP and create firewall rules for the load balancer gcloud compute addresses create lb - ipv4 - vip - 1 \ -- project $ PROJECT ID \ -- network - tier = PREMIUM \ -- ip - version = IPV4 \ -- global gcloud compute addresses describe lb - ipv4 - vip - 1 \ -- project $ PROJECT ID -- format = "get(address)" -- global gcloud compute forwarding - rules create apigee - envoy - https - lb - rule \ -- project $ PROJECT ID -- address lb - ipv4 - vip - 1 -- global \ -- target - https - proxy apigee - envoy - https - proxy -- ports 443 Create a firewall rule gcloud compute firewall-rules create k8s-allow-lb-to-apigee-envoy \ --description "Allow incoming from GLB on TCP port 443 to Apigee Proxy" \ --project $PROJECT ID --network $VPC NAME --allow=tcp:443 \ --source-ranges=130.211.0.0/22,35.191.0.0/16 --target-tags=gke-apigee-proxy Example gcloud CLI commands for creating routing for gRPC proxies for existing load balancers This section shows example commands for creating gRPC proxies using the gcloud CLI and an existing load balancer.
- Create another backend service for http2 Create backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Attach the second backend service to the MIG gcloud compute backend - services add - backend YOUR BACKEND 2 \ -- project $PROJECT ID -- instance - group $MIG NAME \ -- instance - group - region $REGION \ -- balancing - mode UTILIZATION -- max - utilization 0.8 -- global List the URL map for the existing Apigee GCLB gcloud compute url-maps list -project $PROJECT ID Pick up the correct URL map name used for Apigee load balancing gcloud compute url - maps export APIGEE URL MAP NAME - project $ PROJECT ID Create a load balancing URL map YAML file If you already have an existing URL map, merge this configuration into that.

