---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.790Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Port information in HTTP request IP log fields"
feature_slug: "port-information-in-http-request-ip-log-fields"
latest_feature_date: "2020-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/health-check-logging"
  - "https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain"
  - "https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https"
keywords:
  - "port"
  - "information"
  - "http"
  - "request"
  - "ip"
  - "log"
  - "fields"
  - "logs"
---

# Port information in HTTP request IP log fields

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

HTTP request logs can include port numbers in the httpRequest.remoteIp and httpRequest.serverIp fields.

## Extended Definition

HTTP request logs can include port numbers in the httpRequest.remoteIp and httpRequest.serverIp fields.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/health-check-logging](https://docs.cloud.google.com/load-balancing/docs/health-check-logging)
- [https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain](https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain)
- [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)

## Supporting Pages

### "Health check logging information \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-check-logging](https://docs.cloud.google.com/load-balancing/docs/health-check-logging)
- Source ID: `site-docs-reference-required-3`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Not supported for distributed Envoy health checks for hybrid NEGs and regional internet NEGs. probeRequest string For HTTP, HTTPS, and HTTP/2, this is the URL request path ( requestPath field in the resource config).
- The API provides ways to interactively filter logs that have specific fields set and export matching logs to Cloud Logging, Cloud Storage, BigQuery, or Pub/Sub.
- Not supported for distributed Envoy health checks for hybrid NEGs and regional internet NEGs. probeCompletionTimestamp google.protobuf.Timestamp Probe completion timestamp. connectLatency google.protobuf.Duration Time spent on setting up the connection for connection-oriented health check protocols TCP, SSL, HTTP, HTTPS, and HTTP/2.
- For example, the following filter shows all logs for a specified backend instance IP address: logName="projects/ PROJECT ID /logs/compute.googleapis.com%2Fhealthchecks" jsonPayload.healthCheckProbeResult.ipAddress=" IP ADDRESS " Log fields of type boolean typically only appear if they have a value of true .

### "Deliver HTTP and HTTPS content over the same published domain \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain](https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain)
- Source ID: `site-docs-reference-required-3`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When configuring the external Application Load Balancer, the frontend configuration includes four forwarding rules that use the reserved IP addresses: Name Protocol IP:Port ipv4-http HTTP 34.95.111.204:80 ipv4-https HTTPS 34.95.111.204:443 ipv6-http HTTP [2600:1901:0:b13e::]:80 ipv6-https HTTPS [2600:1901:0:b13e::]:443 For Cloud CDN cache misses, the load balancer distributes requests to the backend origins, based on settings defined in the load balancer's URL map.
- The proxy is the portion of the load balancer that holds the SSL certificate for HTTPS Load Balancing, so you also load your certificate in this step. gcloud compute target-https-proxies create https-lb-proxy \ --url-map=web-map --ssl-certificates=www-ssl-cert Create two global forwarding rules to route incoming requests to the proxy, one for each of the IP address(es) you created.
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create ipv4-http \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=ipv4-address \ --global \ --target-http-proxy=http-lb-proxy \ --ports=80 gcloud compute forwarding-rules create ipv4-https \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=ipv4-address \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 After creating the global forwarding rules, it can take several minutes for your configuration to propagate worldwide.
- If everything looks correct, click Update . gcloud Create a target HTTP proxy to route requests to your URL map. gcloud compute target-http-proxies create http-lb-proxy \ --url-map=web-map Create a target HTTPS proxy to route requests to your URL map.

### "Request routing to a multi-region classic Application Load Balancer \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The proxy is the portion of the load balancer that holds the SSL certificate for HTTPS Load Balancing, so you also load your certificate in this step. gcloud compute target-https-proxies create https-lb-proxy \ --url-map web-map --ssl-certificates www-ssl-cert Create two global forwarding rules to route incoming requests to the proxy, one for each of the IP addresses you created.
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create https-content-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=lb-ipv4-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 gcloud compute forwarding-rules create https-content-ipv6-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=lb-ipv6-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 After creating the global forwarding rule, it can take several minutes for your configuration to propagate worldwide.
- Repeat this step for each instance group. gcloud gcloud compute instance-groups unmanaged set-named-ports ig-video-us \ --named-ports http:80 \ --zone us-central1-b gcloud compute instance-groups unmanaged set-named-ports ig-www-us \ --named-ports http:80 \ --zone us-central1-b gcloud compute instance-groups unmanaged set-named-ports ig-video-eu \ --named-ports http:80 \ --zone europe-west1-b gcloud compute instance-groups unmanaged set-named-ports ig-www-eu \ --named-ports http:80 \ --zone europe-west1-b Reserving external IP addresses Now that your instances are up and running, set up the services needed for load balancing.
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute backend-services create video-backend-service \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --global-health-checks \ --protocol=HTTP \ --port-name=http \ --health-checks=http-basic-check \ --global gcloud compute backend-services create web-backend-service \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --global-health-checks \ --protocol=HTTP \ --port-name=http \ --health-checks=http-basic-check \ --global Add your instance groups as backends to the backend services.

