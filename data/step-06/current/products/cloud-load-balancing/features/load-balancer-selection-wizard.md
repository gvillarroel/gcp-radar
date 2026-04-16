---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.775Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Load balancer selection wizard"
feature_slug: "load-balancer-selection-wizard"
latest_feature_date: "2024-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "load"
  - "balancer"
  - "selection"
  - "wizard"
  - "console"
  - "provides"
  - "guided"
  - "help"
---

# Load balancer selection wizard

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud Console provides a guided wizard to help users choose the appropriate load balancer type for a use case.

## Extended Definition

The Google Cloud Console provides a guided wizard to help users choose the appropriate load balancer type for a use case.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- The following table specifies the type of URL map required by internal Application Load Balancers in each mode: Load balancer mode URL map type Cross-region internal Application Load Balancer urlMaps Regional internal Application Load Balancer regionUrlMaps Backend service A backend service provides configuration information to the load balancer so that it can direct requests to its backends—for example, Compute Engine instance groups or network endpoint groups (NEGs).
- Session affinity Session affinity, configured on the backend service of Application Load Balancers, provides a best-effort attempt to send requests from a particular client to the same backend as long as the number of healthy backend instances or endpoints remains constant, and as long as the previously selected backend instance or endpoint is not at capacity.
- To configure the backend service timeout, use one of the following methods: Console Modify the Timeout field of the load balancer's backend service. gcloud Use the gcloud compute backend-services update command to modify the --timeout parameter of the backend service resource.
- The following resources are required for an internal Application Load Balancer deployment: Proxy-only subnet In the previous diagram, the proxy-only subnet provides a set of IP addresses that Google uses to run Envoy proxies on your behalf.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode SSL policies supported Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Backend services A backend service provides configuration information to the load balancer so that it can direct requests to its backends—for example, Compute Engine instance groups or network endpoint groups (NEGs).
- When you create a regional external Application Load Balancer in Premium Tier using the Google Cloud console, only regions supporting Standard Tier are available in the Google Cloud console.
- Console: HTTPS Note: Setting the HTTP/3 negotiation isn't currently supported on the target proxies page and must be configured by editing the load balancer configuration.
- The websocket protocol provides a full-duplex communication channel between clients and the load balancer.

### "Request routing to a multi-region classic Application Load Balancer \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- In the dialog, type the PROJECT ID , and then click Shut down to delete the project. gcloud Run the following command, replacing PROJECT ID with your project ID: gcloud projects delete PROJECT ID Deleting individual resources Console Deleting the load balancer In the Google Cloud console, go to the Load balancing page.
- Overview This guide provides instructions for creating a load balancer that directs traffic based on the path in the request URL and balances traffic across multiple regions.
- Record the IPv4 and IPv6 addresses of your load balancer: In the Google Cloud console, go to the External IP addresses page.
- The managed instance group provides VMs running the backend servers of an external HTTPS load balancer.

