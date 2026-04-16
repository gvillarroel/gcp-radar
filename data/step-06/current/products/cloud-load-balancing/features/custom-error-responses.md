---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.776Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Custom error responses"
feature_slug: "custom-error-responses"
latest_feature_date: "2024-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics"
  - "https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb"
keywords:
  - "custom"
  - "error"
  - "responses"
  - "global"
  - "external"
  - "application"
  - "load"
  - "balancers"
---

# Custom error responses

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Global external Application Load Balancers can return customized HTTP 4xx and 5xx error responses for load balancer, backend, and Cloud Armor-denied traffic.

## Extended Definition

Global external Application Load Balancers can return customized HTTP 4xx and 5xx error responses for load balancer, backend, and Cloud Armor-denied traffic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics)
- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)

## Supporting Pages

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode Target proxy types Proxy-added headers Custom headers supported Global external Application Load Balancer Global HTTP , Global HTTPS The proxies set HTTP request/response headers as follows: Via: 1.1 google (requests and responses) X-Forwarded-Proto : [http https] (requests only) X-Forwarded-For : [<supplied-value>,]<client-ip>,<load-balancer-ip> (see X-Forwarded-For header ) (requests only) The proxies also set the X-Cloud-Trace-Context header if it is not already present.
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Load balancer mode Health check type Global external Application Load Balancer Global Classic Application Load Balancer Global Regional external Application Load Balancer Regional For more information about health checks, see the following: Health checks overview Creating health checks Firewall rules The load balancer requires the following firewall rules: For the global external Application Load Balancers, an ingress allow rule to permit traffic from Google Front Ends (GFEs) to reach your backends.
- TLS 1.3 early data is supported on the target HTTPS proxy of the following external Application Load Balancers for both HTTPS over TCP (HTTP/1.1, HTTP/2) and HTTP/3 over QUIC: Global external Application Load Balancers Classic Application Load Balancers TLS 1.3 was defined in RFC 8446 and introduces the concept of early data , also known as zero-round-trip time (0-RTT) data , which can improve application performance for resumed connections by 30 to 50%.

### "Custom metrics for Application Load Balancers \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics)
- Source ID: `site-docs-reference-required-5`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported load balancers and backends Custom metrics are supported for the following Application Load Balancers: Global external Application Load Balancer Regional external Application Load Balancer Cross-region internal Application Load Balancer Regional internal Application Load Balancer Custom metrics are supported with the following backend types: Managed instance groups Zonal NEGs (with GCE VM IP PORT endpoints) Hybrid connectivity NEGs How custom metrics work To enable your load balancer to make traffic distribution decisions based on custom metrics, you must first determine what the most relevant metrics are for your specific application.
- You use the --custom-metrics flag to specify your custom metric and the threshold to be used for load balancing decisions. gcloud compute backend-services add-backend BACKEND SERVICE NAME \ --network-endpoint-group= NEG NAME \ --network-endpoint-group-zone= NEG ZONE \ [--global region= REGION ] \ --balancing-mode=CUSTOM METRICS \ --custom-metrics='name=" BACKEND METRIC NAME 1 ",maxUtilization= MAX UTILIZATION FOR METRIC 1 ' \ --custom-metrics='name=" BACKEND METRIC NAME 2 ",maxUtilization= MAX UTILIZATION FOR METRIC 2 ' Replace the following: BACKEND SERVICE NAME : the name of the backend service NEG NAME : the name of the zonal or hybrid NEG NEG ZONE : the zone where the NEG was created REGION : for regional load balancers, the region where the load balancer was created BACKEND METRIC NAME : the custom metric names used here must match the custom metric names being reported by the backend's ORCA report MAX UTILIZATION FOR METRIC : the maximum utilization that the load balancing algorithms must target for each metric For example, if your backends are reporting two custom metrics, customUtilA and customUtilB (as demonstrated in the Configure backends to report metrics to the load balancer section), you use the following command to configure your load balancer to use these metrics: gcloud compute backend-services add-backend BACKEND SERVICE NAME \ --network-endpoint-group= NEG NAME \ --network-endpoint-group-zone= NEG ZONE \ [--global region= REGION ] \ --balancing-mode=CUSTOM METRICS \ --custom-metrics='name="customUtilA",maxUtilization=0.8' \ --custom-metrics='name="customUtilB",maxUtilization=0.9' Alternatively, you can provide a list of custom metrics in a structured JSON file: { "name" : " METRIC NAME 1 " , "maxUtilization" : MAX UTILIZATION FOR METRIC 1 , "dryRun" : true } { "name" : " METRIC NAME 2 " , "maxUtilization" : MAX UTILIZATION FOR METRIC 2 , "dryRun" : false } Then attach the metrics file in JSON format to the backend as follows: gcloud compute backend-services add-backend BACKEND SERVICE NAME \ --network-endpoint-group= NEG NAME \ --network-endpoint-group-zone= NEG ZONE \ [--global region= REGION ] \ --balancing-mode=CUSTOM METRICS \ --custom-metrics-file=' BACKEND METRIC FILE NAME ' If you want to test whether the metrics are being reported without actually affecting the load balancer, you can set the dryRun flag to true when configuring the metric as follows: gcloud compute backend-services add-backend BACKEND SERVICE NAME \ --network-endpoint-group= NEG NAME \ --network-endpoint-group-zone= NEG ZONE \ [--global region= REGION ] \ --balancing-mode=CUSTOM METRICS \ --custom-metrics 'name=" BACKEND METRIC NAME ",maxUtilization= MAX UTILIZATION FOR METRIC , dryRun=true ' When a metric is configured with dryRun set to true , the metric is reported to Monitoring but isn't actually used by the load balancer.
- The load balancer uses weights computed from these reported metrics to assign load to individual backends. orca.rps fractional (requests per second) orca.eps (errors per second) a utilization metric with the following order of precedence: orca.application utilization orca.cpu utilization user-defined metrics in the orca.named metrics map Limits and requirements There is a limit of two custom metrics per backend.
- What's next Troubleshoot issues with external Application Load Balancers Troubleshoot issues with internal Application Load Balancers Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Set up authorization policies for Application Load Balancers \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- Source ID: `site-docs-reference-required-3`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "name: "projects/12345567/locations/global/authzPolicies/deny-authz-policy-test"" result: "DENIED" } ] result: "DENIED" } backendTargetProjectNumber: "projects/12345567" cacheDecision: [2] remoteIp: "00.100.11.104" statusDetails: "denied by authz policy" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, proxyStatus is set to error=\"http request error\"; details=\"denied by authz policy\" and the name of the policy is logged in policies .
- The following example command imports the previously created policy file and creates an authorization policy: gcloud network-security authz-policies import my-authz-policy-custom \ --source=authz-policy-custom.yaml \ --location=global Regional If you're using a regional external Application Load Balancer or a regional internal Application Load Balancer, follow these steps to create and import an authorization policy: Create an authorization policy YAML file to delegate certain requests to an external service.
- Note: Authorization policy based on principals is not supported on global external Application Load Balancers.
- See the following example: { httpRequest: {8} insertId: "example-id" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" authzPolicyInfo: { policies: [ 0: { details: "allowed as no deny policies matched request" result: "ALLOWED" } 1: { details: "denied as no allow policies matched request" result: "DENIED" } ] result: "DENIED" } backendTargetProjectNumber: "projects/12345567" remoteIp: "00.100.11.104" statusDetails: "denied by authz policy" } logName: "projects/example-project/logs/requests" receiveTimestamp: "2024-08-28T15:33:56.046651035Z" resource: {2} severity: "WARNING" spanId: "3e1a09a8e5e3e14d" timestamp: "2024-08-28T15:33:55.355042Z" trace: "projects/example-project/traces/8c8b3dbf9a19c85954d0fa2d958ca509" } If you're using a regional internal Application Load Balancer, regional external Application Load Balancer, or cross-region internal Application Load Balancer, proxyStatus is set to error=\"http request error\"; details=\"denied by authz policy\" in the log.

