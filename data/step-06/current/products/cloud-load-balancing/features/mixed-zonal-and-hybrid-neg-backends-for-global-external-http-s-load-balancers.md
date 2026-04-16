---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.784Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Mixed zonal and hybrid NEG backends for global external HTTP(S) load balancers"
feature_slug: "mixed-zonal-and-hybrid-neg-backends-for-global-external-http-s-load-balancers"
latest_feature_date: "2022-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics"
keywords:
  - "mixed"
  - "zonal"
  - "hybrid"
  - "neg"
  - "backends"
  - "global"
  - "external"
  - "http"
---

# Mixed zonal and hybrid NEG backends for global external HTTP(S) load balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Global external HTTP(S) load balancers can use a combination of zonal GCE_VM_IP_PORT NEGs and hybrid NON_GCP_PRIVATE_IP_PORT NEGs as backends.

## Extended Definition

Global external HTTP(S) load balancers can use a combination of zonal GCE_VM_IP_PORT NEGs and hybrid NON_GCP_PRIVATE_IP_PORT NEGs as backends.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics)

## Supporting Pages

### "Faster web performance and improved web protection for load balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection](https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection)
- Source ID: `site-docs-reference-required-3`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Improving web performance with Cloud CDN Using the external Application Load Balancer already improves web performance by setting up HTTP(S) connections on Google's global edge closer to the requesting client and by negotiating connections using modern protocols such as QUIC, HTTP/2, and TLS 1.3 to reduce the number of round trips and enhance throughput.
- Improving web protection with Cloud Armor Using the external Application Load Balancer already provides a measure of web protection by setting up HTTP(S) connections on Google's global edge, offloading your backend infrastructure from needing to handle this process.
- Automatically blocks most volumetric DDoS attacks Cloud Armor works with the external Application Load Balancer to automatically block network protocol and volumetric DDoS attacks such as protocol floods (SYN, TCP, HTTP, and ICMP) and amplification attacks (NTP, UDP, DNS).
- Google's edge locations are connected to our global private backbone network, which allows Google Cloud to optimize routing and reduce latency between the client, Google's edge, and your backends.

### "Custom metrics for Application Load Balancers \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics)
- Source ID: `site-docs-reference-required-5`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Supported load balancers and backends Custom metrics are supported for the following Application Load Balancers: Global external Application Load Balancer Regional external Application Load Balancer Cross-region internal Application Load Balancer Regional internal Application Load Balancer Custom metrics are supported with the following backend types: Managed instance groups Zonal NEGs (with GCE VM IP PORT endpoints) Hybrid connectivity NEGs How custom metrics work To enable your load balancer to make traffic distribution decisions based on custom metrics, you must first determine what the most relevant metrics are for your specific application.
- You use the --custom-metrics flag to specify your custom metric and the threshold to be used for load balancing decisions. gcloud compute backend-services add-backend BACKEND SERVICE NAME \ --network-endpoint-group= NEG NAME \ --network-endpoint-group-zone= NEG ZONE \ [--global region= REGION ] \ --balancing-mode=CUSTOM METRICS \ --custom-metrics='name=" BACKEND METRIC NAME 1 ",maxUtilization= MAX UTILIZATION FOR METRIC 1 ' \ --custom-metrics='name=" BACKEND METRIC NAME 2 ",maxUtilization= MAX UTILIZATION FOR METRIC 2 ' Replace the following: BACKEND SERVICE NAME : the name of the backend service NEG NAME : the name of the zonal or hybrid NEG NEG ZONE : the zone where the NEG was created REGION : for regional load balancers, the region where the load balancer was created BACKEND METRIC NAME : the custom metric names used here must match the custom metric names being reported by the backend's ORCA report MAX UTILIZATION FOR METRIC : the maximum utilization that the load balancing algorithms must target for each metric For example, if your backends are reporting two custom metrics, customUtilA and customUtilB (as demonstrated in the Configure backends to report metrics to the load balancer section), you use the following command to configure your load balancer to use these metrics: gcloud compute backend-services add-backend BACKEND SERVICE NAME \ --network-endpoint-group= NEG NAME \ --network-endpoint-group-zone= NEG ZONE \ [--global region= REGION ] \ --balancing-mode=CUSTOM METRICS \ --custom-metrics='name="customUtilA",maxUtilization=0.8' \ --custom-metrics='name="customUtilB",maxUtilization=0.9' Alternatively, you can provide a list of custom metrics in a structured JSON file: { "name" : " METRIC NAME 1 " , "maxUtilization" : MAX UTILIZATION FOR METRIC 1 , "dryRun" : true } { "name" : " METRIC NAME 2 " , "maxUtilization" : MAX UTILIZATION FOR METRIC 2 , "dryRun" : false } Then attach the metrics file in JSON format to the backend as follows: gcloud compute backend-services add-backend BACKEND SERVICE NAME \ --network-endpoint-group= NEG NAME \ --network-endpoint-group-zone= NEG ZONE \ [--global region= REGION ] \ --balancing-mode=CUSTOM METRICS \ --custom-metrics-file=' BACKEND METRIC FILE NAME ' If you want to test whether the metrics are being reported without actually affecting the load balancer, you can set the dryRun flag to true when configuring the metric as follows: gcloud compute backend-services add-backend BACKEND SERVICE NAME \ --network-endpoint-group= NEG NAME \ --network-endpoint-group-zone= NEG ZONE \ [--global region= REGION ] \ --balancing-mode=CUSTOM METRICS \ --custom-metrics 'name=" BACKEND METRIC NAME ",maxUtilization= MAX UTILIZATION FOR METRIC , dryRun=true ' When a metric is configured with dryRun set to true , the metric is reported to Monitoring but isn't actually used by the load balancer.
- For example, if you have a backend service that is already configured with the appropriate backends, you configure the load balancing locality policy as follows: gcloud compute backend-services update BACKEND SERVICE NAME \ [--global region= REGION ] \ --custom-metrics='name= BACKEND SERVICE METRIC NAME ,dryRun=false' \ --locality-lb-policy=WEIGHTED ROUND ROBIN As demonstrated previously for the backend level metrics, you can also provide a list of custom metrics in a structured JSON file at the backend service level.
- Backend configuration to report custom metrics After you determine the metrics you want the load balancer to use, you configure your backends to compile the required custom metrics in an ORCA load report and report their values in each HTTP response header sent to the load balancer.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- The following table summarizes the required source IP address ranges for the firewall rules: Load balancer mode Health check source ranges Request source ranges Global external Application Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 The source of GFE traffic depends on the backend type: Instance groups and zonal NEGs ( GCE VM IP PORT ): 130.211.0.0/22 35.191.0.0/16 For IPv6 traffic to the backends: 2600:2d00:1:1::/64 Hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 130.211.0.0/22 35.191.0.0/16 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing Classic Application Load Balancer 35.191.0.0/16 130.211.0.0/22 The source of GFE traffic depends on the backend type: Instance groups, zonal NEGs ( GCE VM IP PORT ), and hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 35.191.0.0/16 130.211.0.0/22 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing.
- Load balancer mode Supported backends on a backend service 1 Supports backend buckets Supports Cloud Armor Supports Cloud CDN 2 Supports IAP 2 Supports Service Extensions Instance groups 3 Zonal NEGs 4 Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs Global external Application Load Balancer Classic Application Load Balancer Premium Tier Regional external Application Load Balancer 1 Backends on a backend service must be the same type: all instance groups or all the same type of NEG.
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- The external Application Load Balancer distributes HTTP and HTTPS traffic to backends hosted on a variety of Google Cloud platforms (such as Compute Engine, Google Kubernetes Engine (GKE), and Cloud Storage), as well as external backends connected over the internet or through hybrid connectivity.

