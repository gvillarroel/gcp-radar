---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.795Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "HTTP(S) Load Balancing logging"
feature_slug: "http-s-load-balancing-logging"
latest_feature_date: "2019-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring"
  - "https://docs.cloud.google.com/load-balancing/docs/health-check-logging"
  - "https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https"
keywords:
  - "http"
  - "load"
  - "balancing"
  - "logging"
  - "records"
  - "request"
  - "response"
  - "details"
---

# HTTP(S) Load Balancing logging

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

HTTP(S) Load Balancing logging records request and response details for observability and analysis.

## Extended Definition

HTTP(S) Load Balancing logging records request and response details for observability and analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)
- [https://docs.cloud.google.com/load-balancing/docs/health-check-logging](https://docs.cloud.google.com/load-balancing/docs/health-check-logging)
- [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)

## Supporting Pages

### "Request routing to a multi-region classic Application Load Balancer \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- The proxy is the portion of the load balancer that holds the SSL certificate for HTTPS Load Balancing, so you also load your certificate in this step. gcloud compute target-https-proxies create https-lb-proxy \ --url-map web-map --ssl-certificates www-ssl-cert Create two global forwarding rules to route incoming requests to the proxy, one for each of the IP addresses you created.
- In this how-to document, you create the configuration that is illustrated in the following diagram: Multi-regional HTTPS Load Balancing (click to enlarge) The sequence of events in the diagram is: A client accesses the https://www.example.com/video/concert URL, sending a content request to the external IP address defined in the forwarding rule.
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create https-content-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=lb-ipv4-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 gcloud compute forwarding-rules create https-content-ipv6-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=lb-ipv6-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 After creating the global forwarding rule, it can take several minutes for your configuration to propagate worldwide.
- Repeat this step for each instance group. gcloud gcloud compute instance-groups unmanaged set-named-ports ig-video-us \ --named-ports http:80 \ --zone us-central1-b gcloud compute instance-groups unmanaged set-named-ports ig-www-us \ --named-ports http:80 \ --zone us-central1-b gcloud compute instance-groups unmanaged set-named-ports ig-video-eu \ --named-ports http:80 \ --zone europe-west1-b gcloud compute instance-groups unmanaged set-named-ports ig-www-eu \ --named-ports http:80 \ --zone europe-west1-b Reserving external IP addresses Now that your instances are up and running, set up the services needed for load balancing.

### "Regional external passthrough Network Load Balancer logging and monitoring\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)
- Source ID: `site-docs-reference-required-3`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Example API requests Get all bytes sent from all regional external passthrough Network Load Balancers in the project during 12:00-12:02 PM UTC on 2019-07-01 with 1m aggregates. timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "tcp lb rule" AND metric.name="loadbalancing.googleapis.com/l3/external/egress bytes count" interval.start time: 2019-07-01T12:00:00Z interval.end time: 2019-07-01T12:02:00Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.perSeriesAligner: ALIGN SUM Get median RTT measurement over all regional external passthrough Network Load Balancers in the project during 12:19-12:20 PM UTC on 2019-07-01, broken down by client country. timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "tcp lb rule" AND metric.name="loadbalancing.googleapis.com/l3/external/rtt latencies" interval.start time: 2019-07-01T12:19:00Z interval.end time: 2019-07-01T12:20:00Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.groupByFields: metric.label.client country aggregation.perSeriesAligner: ALIGN PERCENTILE 50 Get total bytes from a specific regional external passthrough Network Load Balancer during 12:19-12:20 PM UTC on 2019-07-01, broken down by endpoint zone and client continent. timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "tcp lb rule" AND resource.label.load balancer name = "netlb-bs-1" AND metric.name="loadbalancing.googleapis.com/l3/external/ingress bytes count" interval.start time: 2019-07-01T12:19:00Z interval.end time: 2017-07-01T12:20:00Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.groupByFields: metric.label.client continent aggregation.groupByFields: resource.label.endpoint zone aggregation.perSeriesAligner: ALIGN SUM What's next Read conceptual information about regional external passthrough Network Load Balancers Set up a regional external passthrough Network Load Balancer Read about Monitoring Metrics, time series, and resources Read about forwarding rules Read about troubleshoot logging issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /backendServices Exclude all optional fields { "name": " BACKEND SERVICE ", "loadBalancingScheme": "EXTERNAL", "logConfig": { "enable": true, "sampleRate": SAMPLE RATE } } Include all optional fields { "name": " BACKEND SERVICE ", "loadBalancingScheme": "EXTERNAL", "logConfig": { "enable": true, "sampleRate": SAMPLE RATE , "optionalMode": "INCLUDE ALL OPTIONAL" } } Include a custom list of optional fields { "name": " BACKEND SERVICE ", "loadBalancingScheme": "EXTERNAL", "logConfig": { "enable": true, "sampleRate": SAMPLE RATE , "optionalMode": "CUSTOM", "optionalFields": ["field1","field2",...] } } Enable logging on an existing backend service Console In the Google Cloud console, go to the Load balancing page.
- PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /backendServices/ BACKEND SERVICE Exclude all optional fields "logConfig": { "enable": true, "sampleRate": SAMPLE RATE , "optionalMode": "EXCLUDE ALL OPTIONAL" } Include all optional fields { "name": " BACKEND SERVICE ", "loadBalancingScheme": "EXTERNAL", "logConfig": { "enable": true, "sampleRate": SAMPLE RATE , "optionalMode": "INCLUDE ALL OPTIONAL" } } Include a custom list of optional fields { "name": " BACKEND SERVICE ", "loadBalancingScheme": "EXTERNAL", "logConfig": { "enable": true, "sampleRate": SAMPLE RATE , "optionalMode": "CUSTOM", "optionalFields": ["field1","field2",...] } } Disable logging on an existing backend service Console In the Google Cloud console, go to the Load balancing page.
- The packet sampling process used by regional external passthrough Network Load Balancer logging omits any response packets from backend VMs if those response packets have sources that don't match an IP address of a forwarding rule for a regional external passthrough Network Load Balancer.

### "Health check logging information \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-check-logging](https://docs.cloud.google.com/load-balancing/docs/health-check-logging)
- Source ID: `site-docs-reference-required-3`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Load Balancing Guides Send feedback Health check logging information Stay organized with collections Save and categorize content based on your preferences.
- Terraform To create a health check for different protocols with logging, use the google compute health check resource . resource "google compute health check" "health check tcp with logging" { provider = google-beta name = "health-check-tcp" timeout sec = 1 check interval sec = 1 tcp health check { port = "22" } log config { enable = true } } For a regional load balancer, use the google compute region health check resource .
- Not supported for distributed Envoy health checks for hybrid NEGs and regional internet NEGs. probeRequest string For HTTP, HTTPS, and HTTP/2, this is the URL request path ( requestPath field in the resource config).
- Not supported for distributed Envoy health checks for hybrid NEGs and regional internet NEGs. responseLatency google.protobuf.Duration Latency between request and response, as measured by the prober.

