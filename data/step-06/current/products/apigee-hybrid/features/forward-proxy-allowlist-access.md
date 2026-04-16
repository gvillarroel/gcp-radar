---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.837Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Forward proxy allowlist access"
feature_slug: "forward-proxy-allowlist-access"
latest_feature_date: "2024-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
keywords:
  - "allowlist"
  - "forward"
  - "access"
  - "proxy"
  - "allows"
---

# Forward proxy allowlist access

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Apigee Hybrid forward proxy now allows pass-through access to allowlisted URLs, requiring allowlists only for googleapis.com endpoints on the proxy server.

## Extended Definition

Apigee Hybrid forward proxy now allows pass-through access to allowlisted URLs, requiring allowlists only for googleapis.com endpoints on the proxy server.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls](https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)

## Supporting Pages

### Google Cloud URLs to allow for Hybrid | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls](https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls)
- Source ID: `feature-recovery-direct-http`
- Final score: 354
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see: Proxy and firewall rules for Anthos on-prem Proxy allowlist for Anthos multi-cloud Google Cloud URLs for data residency If you are using forward proxy with data residency , you must allowlist: CONTROL_PLANE_LOCATION -apigee.googleapis.com for each control plane location.
- Tip: If your security protocols permit, you can allowlist *-apigee.googleapis.com Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- So the runtime needs to get an access token before making the call to apigee.googleapis.com. logging.googleapis.com This API is needed for the logging agent to send logs to Cloud Logging. monitoring.googleapis.com Cloud Monitoring service endpoint to export metrics. oauth2.googleapis.com Authentication and authorization pubsub.googleapis.com The runtime subscribes to a pubsub topic to learn when to initialize debug sessions. quay.io Container registry used by cert-manager .
- Only for Anthos if binary authorization is enabled gcr.io Contanier images are hosted in Google Container Registry. iamcredentials.googleapis.com Required for generating access tokens used by other Google Cloud API calls.

### Configure forward proxying for API proxies | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy)
- Source ID: `feature-recovery-direct-http`
- Final score: 316
- Re-rank relevance: N/A

Evidence snippets:
- If you only specify httpProxy , you must also ensure that *.googleapis.com is allowlisted for your Apigee Runtime pods to enable connectivity to these services.
- This includes API proxy requests to Target Endpoints and communication with *.googleapis.com that the hybrid runtime makes for its debug and analytics pipeline and for policies like MessageLogging .
- Logging Logging overview View logs Access logs Cassandra logs MART logs Runtime logs Synchronizer logs UDCA logs Metrics collection Metrics collection overview Configure metrics collection View metrics Other data collection Runtime Services Runtime service configuration overview Manage runtime plane components Cassandra Configure Cassandra for production StorageClass configuration Backup and recovery TLS configuration Scale down Environments About environments Managing environments Create environments Delete environments Base path routing Generate self-signed TLS certificates MART MART configuration Add the MART IP to an org Synchronizer Service accounts About service accounts Service account validation Obtain TLS credentials: An example Cluster Management Cluster requirements Overview GKE non-production GKE production Anthos GKE non-production Anthos GKE production Configure ports and set up firewalls Secure the runtime installation Data encryption Multi-region deployments on GKE and GKE on-prem Multi-region deployments on AKS Configure static IP addresses Scale and autoscale services Configure dedicated node pools Download signed runtime images Apigee deployment services Rolling updates Upgrading Apigee hybrid Configuration property reference Release notes LOGGING Audit logging Audit logging for Apigee Connect Logging Apigee access logs TEST Customer security testing requests Performance testing TROUBLESHOOT Troubleshooting the Apigee installation Logging Apigee access logs AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development Apigee Guides Send feedback Configure forward proxying for API proxies Stay organized with collections Save and categorize content based on your preferences.
- Configure forward proxying for API proxies | Apigee | Google Cloud Documentation orgs_path.developers.apps.keys.create API % endsetvar % --> orgs_path.environments.analytics.reports.dailysupp API % endsetvar % --> orgs_path.environments_analytics_reports_dailysummary_d1_results API % endsetvar % --> Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Apigee Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console DISCOVER What is Apigee?

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 247
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- By default, it uses HTTPS . envs[].httpProxy.username Basic Introduced in version: 1.2.0 Default value: None Chart: apigee-env If the HTTP proxy requires basic authentication, then use this property to provide a username. envs[].httpProxy.password Basic Introduced in version: 1.2.0 Default value: None Chart: apigee-env If the HTTP proxy requires basic authentication, then use this property to provide a password. envs[].managementCallsSkipProxy Advanced Introduced in version: 1.15.1 Default value: false Chart: apigee-env If set to true for environment-level forward proxy, trace and analytics (which use googleapis.com ) will skip forward proxy.
- The NO PROXY variable should be defined as a comma-separated string of host names, in the format: logger: ... envVars: NO PROXY: ' <comma-separated-values> ' for example: envVars: NO PROXY: 'kubernetes.default.svc,oauth2.googleapis.com,logging.googleapis.com' Use envVars: NO PROXY optionally when you have HTTP forward proxy enabled.
- Targets in the proxy (including googleapis.com ) will be routed via the forward proxy.
- In that case, runtime's debug or analytics data will use the proxy shared at the org level, whereas backend/proxy traffic will continue to use the environment level proxy (this includes calls to googleapis.com as well). httpProxy.username Basic Introduced in version: 1.1.1 Default value: None Chart: apigee-operator , apigee-datastore , apigee-telemetry , apigee-ingress-manager , apigee-org , apigee-env , apigee-virtualhost If the HTTP proxy requires basic authentication, then use this property to provide a username. ingressGateways Configures each individual instance of the Apigee ingress gateway.

