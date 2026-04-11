---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.254Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Customer-installed Anthos Service Mesh"
feature_slug: "customer-installed-anthos-service-mesh"
latest_feature_date: "2023-02-01"
deprecation_date: "2023-02-01"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
keywords:
  - "deprecation 2023-02-01"
  - "customer-installed Anthos Service Mesh"
  - "customer-installed ASM"
  - "ASM deprecation"
  - "customer ASM"
  - "supported ingress option"
  - "Apigee Ingress gateway"
---

# Customer-installed Anthos Service Mesh

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Support for customer-installed Anthos Service Mesh in Apigee hybrid was deprecated, with Apigee Ingress gateway becoming the supported ingress option; deprecated on 2023-02-01.

## Extended Definition

Support for customer-installed Anthos Service Mesh in Apigee hybrid was deprecated, with Apigee Ingress gateway becoming the supported ingress option; deprecated on 2023-02-01.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)

## Supporting Pages

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- See Cassandra CSI backup and restore . v1.9.0 Deprecated Support for customer-installed Anthos Service Mesh deprecated Starting in version 1.9, Apigee hybrid only supports the Apigee Ingress gateway for ingress, and no longer supports customer-installed Anthos Service Mesh.
- This applies to both Apigee Ingress gateway and to the Istio ingress gateway when are using customer-installed Anthos Service Mesh.
- This applies to both Apigee Ingress gateway and to the Istio ingress gateway when are using customer-installed Anthos Service Mesh.
- If you are migrating from ASM to Apigee ingress gateway, and followed the instructions in the community post to enable Port 80, it will not work with Apigee Ingress gateway. (Fixed in Apigee hybrid v1.8.6 and v1.9.1) v1.10.0 Security Bug ID Description 262576079 Security fix for for apigee-envoy . (Fixed in Apigee hybrid v1.10) This addresses the following vulnerability: CVE-2022-23806 273797045 Security fix for for apigee-diagnostics-collector apigee-synchronizer apigee-udca . (Fixed in Apigee hybrid v1.8.8) This addresses the following vulnerability: CVE-2021-22573 273800345 , 281572616 Security fixes for apigee-diagnostics-collector , apigee-mart-server , apigee-mint-task-scheduler , apigee-runtime , apigee-synchronizer , and apigee-udca . (Fixed in Apigee hybrid v1.8.8 and v1.9.3 This addresses the following vulnerabilities: CVE-2022-3510 CVE-2022-3509 CVE-2022-3171 273800717 Security fixes for apigee-emulator , apigee-diagnostics-collector , apigee-mart-server , apigee-mint-task-scheduler , apigee-mock-server , apigee-runtime , and apigee-synchronizer . (Fixed in Apigee hybrid v1.8.7 and v1.9.2) This addresses the following vulnerabilities: CVE-2022-46364 CVE-2022-46363 273800965 Security fix for apigee-diagnostics-collector , apigee-mart-server , apigee-mint-task-scheduler , apigee-runtime , and apigee-synchronizer . (Fixed in Apigee hybrid v1.8.7, v1.9.2, and v1.9.3) This addresses the following vulnerability: CVE-2019-10172 273801301 Security fixes for apigee-mart-server and apigee-runtime . (Fixed in Apigee hybrid v1.8.8 and v1.9.3) This addresses the following vulnerability: CVE-2020-13936 274112103 Security fixes to the Apigee Controller and Apigee Watcher. (Fixed in Apigee hybrid v1.8.6 and v1.9.1) This addresses the following vulnerabilities: CVE-2022-1996 CVE-2022-27191 CVE-2022-27664 CVE-2022-32149 CVE-2022-41723 275002360 Security fixes for fluent-bit . (Fixed in Apigee hybrid v1.8.6 and v1.9.1) This addresses the following vulnerabilities: CVE-2021-46848 CVE-2022-1304 CVE-2022-2097 CVE-2022-42898 277367440 Security fixes for Apigee Controller, Watcher, and apigeectl . (Fixed in Apigee hybrid v1.8.7 and v1.9.2) This addresses the following vulnerabilities: CVE-2022-41723 CVE-2022-41717 CVE-2022-28948 278313047 Security fixes for apigee-stackdriver-logging-agent . (Fixed in Apigee hybrid v1.9.2) This addresses the following vulnerabilities: CVE-2022-32511 CVE-2022-29181 CVE-2022-24836 CVE-2022-0759 CVE-2021-41817 CVE-2021-41098 CVE-2021-32740 CVE-2021-28965 CVE-2020-8130 CVE-2020-25613 CVE-2019-3881 279194142 Fixes build issues to achieve FIPS compliance. (Fixed in Apigee hybrid v1.8.7 and v1.9.2) 281561243 Security fix for apigee-diagnostics-collector , apigee-mint-task-scheduler , apigee-runtime , and apigee-synchronizer . (Fixed in Apigee hybrid v1.8.8 and v1.9.3) This addresses the following vulnerability: CVE-2022-1471 283826216 Security fixes for apigee-ingressgateway . (Fixed in Apigee hybrid v1.9.3) This addresses the following vulnerabilities: CVE-2022-41723 CVE-2022-41721 283826785 Security fixes for istiod . (Fixed in Apigee hybrid v1.9.3) This addresses the following vulnerabilities: CVE-2023-25165 CVE-2022-41723 CVE-2022-41721 CVE-2022-23526 CVE-2022-23525 CVE-2022-23524 June 14, 2023 v1.8.8 Announcement hybrid v1.8.8 On June 14, 2023 we released an updated version of the Apigee hybrid software, v1.8.8.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Default access log format: '{"start time":"%START TIME%","remote address":"%DOWNSTREAM DIRECT REMOTE ADDRESS%","user agent":"%REQ(USER-AGENT)%","host":"%REQ(:AUTHORITY)%","request":"%REQ(:METHOD)% %REQ(X-ENVOY-ORIGINAL-PATH?:PATH)% %PROTOCOL%","request time":"%DURATION%","status":"%RESPONSE CODE%","status details":"%RESPONSE CODE DETAILS%","bytes received":"%BYTES RECEIVED%","bytes sent":"%BYTES SENT%","upstream address":"%UPSTREAM HOST%","upstream response flags":"%RESPONSE FLAGS%","upstream response time":"%RESPONSE DURATION%","upstream service time":"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%","upstream cluster":"%UPSTREAM CLUSTER%","x forwarded for":"%REQ(X-FORWARDED-FOR)%","request method":"%REQ(:METHOD)%","request path":"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%","request protocol":"%PROTOCOL%","tls protocol":"%DOWNSTREAM TLS VERSION%","request id":"%REQ(X-REQUEST-ID)%","sni host":"%REQUESTED SERVER NAME%","apigee dynamic data":"%DYNAMIC METADATA(envoy.lua)%"}' The following is a copy of the default access log format with line breaks added for readability. '{"start time":"%START TIME%", "remote address":"%DOWNSTREAM DIRECT REMOTE ADDRESS%", "user agent":"%REQ(USER-AGENT)%", "host":"%REQ(:AUTHORITY)%", "request":"%REQ(:METHOD)% %REQ(X-ENVOY-ORIGINAL-PATH?:PATH)% %PROTOCOL%", "request time":"%DURATION%", "status":"%RESPONSE CODE%", "status details":"%RESPONSE CODE DETAILS%", "bytes received":"%BYTES RECEIVED%", "bytes sent":"%BYTES SENT%", "upstream address":"%UPSTREAM HOST%", "upstream response flags":"%RESPONSE FLAGS%", "upstream response time":"%RESPONSE DURATION%", "upstream service time":"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%", "upstream cluster":"%UPSTREAM CLUSTER%", "x forwarded for":"%REQ(X-FORWARDED-FOR)%", "request method":"%REQ(:METHOD)%", "request path":"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%", "request protocol":"%PROTOCOL%", "tls protocol":"%DOWNSTREAM TLS VERSION%", "request id":"%REQ(X-REQUEST-ID)%", "sni host":"%REQUESTED SERVER NAME%", "apigee dynamic data":"%DYNAMIC METADATA(envoy.lua)%"}' istiod.forwardClientCertDetails Advanced Introduced in version: 1.9.2 Default value: SANITIZE SET Chart: apigee-ingress-manager Determines how the Envoy proxy (for the Apigee ingress gateway) handles the x-forwarded-client-cert (XFCC) HTTP header.
- In that case, runtime's debug or analytics data will use the proxy shared at the org level, whereas backend/proxy traffic will continue to use the environment level proxy (this includes calls to googleapis.com as well). httpProxy.username Basic Introduced in version: 1.1.1 Default value: None Chart: apigee-operator , apigee-datastore , apigee-telemetry , apigee-ingress-manager , apigee-org , apigee-env , apigee-virtualhost If the HTTP proxy requires basic authentication, then use this property to provide a username. ingressGateways Configures each individual instance of the Apigee ingress gateway.
- If you change this setting after installing Hybrid, apply it with apigeectl init and then restart your Apigee ingress gateway pods. istiod.healthCheckUserAgents Advanced Introduced in version: 1.12.0 Default values: - "GoogleStackdriverMonitoring-UptimeChecks(https://cloud.google.com/monitoring)" - "Edge Health Probe" Chart: apigee-ingress-manager Enables non-Google Cloud loadbalancers to check the ingress gateway's health check endpoints ( /healthz/ingress and /healthz ) by overriding the default user-agent allow list in hybrid.
- The minimum value is 1. virtualhosts[].selector Basic Introduced in version: 1.2.0 Default value: app: apigee-ingressgateway Chart: apigee-virtualhost Required A key-value selector-value pair for pointing to different ingress selectors. apigee-ingressgateway : for Apigee hybrid installations using Apigee ingress gateway. istio-ingressgateway : for Apigee hybrid installations using Cloud Service Mesh (Apigee hybrid versions 1.8 and earlier).

