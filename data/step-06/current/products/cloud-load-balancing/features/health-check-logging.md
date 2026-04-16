---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.789Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Health check logging"
feature_slug: "health-check-logging"
latest_feature_date: "2020-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/health-check-logging"
  - "https://docs.cloud.google.com/load-balancing/docs/health-check-concepts"
  - "https://docs.cloud.google.com/load-balancing/docs/health-checks"
keywords:
  - "health"
  - "check"
  - "logging"
  - "records"
  - "load"
  - "balancer"
  - "activity"
  - "observability"
---

# Health check logging

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Health check logging records load balancer health check activity for observability and troubleshooting; Health check logging records load balancer health check activity for observability and troubleshooting.

## Extended Definition

Health check logging records load balancer health check activity for observability and troubleshooting; Health check logging records load balancer health check activity for observability and troubleshooting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/health-check-logging](https://docs.cloud.google.com/load-balancing/docs/health-check-logging)
- [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/health-checks](https://docs.cloud.google.com/load-balancing/docs/health-checks)

## Supporting Pages

### "Health check logging information \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-check-logging](https://docs.cloud.google.com/load-balancing/docs/health-check-logging)
- Source ID: `site-docs-reference-required-3`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform To create a health check for different protocols with logging, use the google compute health check resource . resource "google compute health check" "health check tcp with logging" { provider = google-beta name = "health-check-tcp" timeout sec = 1 check interval sec = 1 tcp health check { port = "22" } log config { enable = true } } For a regional load balancer, use the google compute region health check resource .
- Replace PROJECT ID with your project's ID. logName="projects/ PROJECT ID /logs/compute.googleapis.com%2Fhealthchecks" You can configure export of logs-based metrics for load balancer health checks.
- Connection draining works by just informing the load balancer that the new state is DRAINING , and it effectively overrides the true health state of the endpoint as observed by the health checker.
- Home Documentation Networking Load Balancing Guides Send feedback Health check logging information Stay organized with collections Save and categorize content based on your preferences.

### Health checks overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts)
- Source ID: `site-docs-reference-required-3`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows the source IP ranges to allow for each load balancer: Product Health check probe source IP ranges Global external Application Load Balancer Global external proxy Network Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 2600:2d00:1:1::/64 Regional external Application Load Balancer 1, 2 Cross-region internal Application Load Balancer 1 Regional internal Application Load Balancer 1, 2 Regional external proxy Network Load Balancer 1, 2 Regional internal proxy Network Load Balancer 1, 2 Cross-region internal proxy Network Load Balancer 1 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 Classic proxy Network Load Balancer Classic Application Load Balancer Cloud Service Mesh, except for internet NEG backends and hybrid NEG backends 35.191.0.0/16 130.211.0.0/22 Regional external passthrough Network Load Balancer 3 For IPv4 traffic to the backends: 35.191.0.0/16 209.85.152.0/22 209.85.204.0/22 For IPv6 traffic to the backends: 2600:1901:8001::/48 Internal passthrough Network Load Balancer For IPv4 traffic to the backends: 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 Cloud Service Mesh with internet NEG backends and hybrid NEG backends IP addresses of the VMs running the Envoy software For a sample configuration, see the Cloud Service Mesh documentation 1 Allowing traffic from Google's health check probe ranges isn't required for hybrid NEGs.
- Load balancer Health check category and scope Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cross-region internal Application Load Balancer Cross-region internal proxy Network Load Balancer Health check ( global ) Regional external Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Regional external proxy Network Load Balancer Health check ( regional ) Regional external passthrough Network Load Balancer Backend service-based load balancer: Health check ( regional ) Target pool-based load balancer: Legacy health check ( global with the HTTP protocol ) Internal passthrough Network Load Balancer Health check ( global or regional ) For external Application Load Balancers, legacy health checks are not recommended but are sometimes supported, depending on the load balancer mode.
- If you use a target pool-based regional external passthrough Network Load Balancer to balance TCP traffic, you need to run an HTTP service on the VMs being load balanced so that they can respond to health check probes.
- Load balancer mode Legacy health checks supported Global external Application Load Balancer Classic Application Load Balancer Yes, if both of the following are true: The backends are instance groups.

### Use health checks \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/health-checks](https://docs.cloud.google.com/load-balancing/docs/health-checks)
- Source ID: `site-docs-reference-required-3`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Application Load Balancers can reference more than one health check if it references more than one backend service. gcloud compute backend-services update BACKEND SERVICE NAME \ --global \ --health-checks HEALTH CHECK NAME \ --global-health-checks To change the health check for either a regional external Application Load Balancer, a regional external proxy Network Load Balancer, a regional internal Application Load Balancer, or a regional internal proxy Network Load Balancer: Both the backend service and health check are regional.
- It can reference a regional health check. gcloud compute backend-services update BACKEND SERVICE NAME \ --region= REGION \ --health-checks= HEALTH CHECK NAME \ --health-checks-region= REGION To change the health check for a global external proxy Network Load Balancer, classic proxy Network Load Balancer, global external Application Load Balancer, classic Application Load Balancer, or a cross-region internal Application Load Balancer: Both the backend service and health check are global for these load balancers.
- If you're using a global health check with your internal passthrough Network Load Balancer, use --global-health-checks instead of --health-checks-region . gcloud compute backend-services update BACKEND SERVICE NAME \ --region= REGION \ --health-checks= HEALTH CHECK NAME \ --health-checks-region= REGION To change the health check for a backend service-based regional external passthrough Network Load Balancer: A regional external passthrough Network Load Balancer's backend service is regional.
- Replace NETWORK NAME with the name of your VPC network and replace PORT with the ports used by your load balancer. gcloud compute firewall-rules create fw-allow-health-checks \ --network= NETWORK NAME \ --action=ALLOW \ --direction=INGRESS \ --source-ranges= SOURCE IP RANGE \ --target-tags=allow-health-checks \ --rules=tcp: PORT The value for SOURCE IP RANGE depends on your load balancer type, traffic type, and health check type.

