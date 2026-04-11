---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.255Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Apigee ingress gateway"
feature_slug: "apigee-ingress-gateway"
latest_feature_date: "2022-08-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide"
keywords:
  - "without Anthos Service Mesh"
  - "manage ingress for hybrid"
  - "ingress gateway feature"
  - "hybrid ingress management"
  - "Apigee ingress gateway"
  - "gateway ingress"
  - "ingress for hybrid"
  - "Apigee ingress"
---

# Apigee ingress gateway

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Apigee hybrid 1.8 adds an ingress gateway feature to manage ingress for a hybrid installation without requiring Anthos Service Mesh.

## Extended Definition

Apigee hybrid 1.8 adds an ingress gateway feature to manage ingress for a hybrid installation without requiring Anthos Service Mesh.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)

## Supporting Pages

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- If you are migrating from ASM to Apigee ingress gateway, and followed the instructions in the community post to enable Port 80, it will not work with Apigee Ingress gateway. (Fixed in Apigee hybrid v1.8.6 and v1.9.1) v1.10.0 Security Bug ID Description 262576079 Security fix for for apigee-envoy . (Fixed in Apigee hybrid v1.10) This addresses the following vulnerability: CVE-2022-23806 273797045 Security fix for for apigee-diagnostics-collector apigee-synchronizer apigee-udca . (Fixed in Apigee hybrid v1.8.8) This addresses the following vulnerability: CVE-2021-22573 273800345 , 281572616 Security fixes for apigee-diagnostics-collector , apigee-mart-server , apigee-mint-task-scheduler , apigee-runtime , apigee-synchronizer , and apigee-udca . (Fixed in Apigee hybrid v1.8.8 and v1.9.3 This addresses the following vulnerabilities: CVE-2022-3510 CVE-2022-3509 CVE-2022-3171 273800717 Security fixes for apigee-emulator , apigee-diagnostics-collector , apigee-mart-server , apigee-mint-task-scheduler , apigee-mock-server , apigee-runtime , and apigee-synchronizer . (Fixed in Apigee hybrid v1.8.7 and v1.9.2) This addresses the following vulnerabilities: CVE-2022-46364 CVE-2022-46363 273800965 Security fix for apigee-diagnostics-collector , apigee-mart-server , apigee-mint-task-scheduler , apigee-runtime , and apigee-synchronizer . (Fixed in Apigee hybrid v1.8.7, v1.9.2, and v1.9.3) This addresses the following vulnerability: CVE-2019-10172 273801301 Security fixes for apigee-mart-server and apigee-runtime . (Fixed in Apigee hybrid v1.8.8 and v1.9.3) This addresses the following vulnerability: CVE-2020-13936 274112103 Security fixes to the Apigee Controller and Apigee Watcher. (Fixed in Apigee hybrid v1.8.6 and v1.9.1) This addresses the following vulnerabilities: CVE-2022-1996 CVE-2022-27191 CVE-2022-27664 CVE-2022-32149 CVE-2022-41723 275002360 Security fixes for fluent-bit . (Fixed in Apigee hybrid v1.8.6 and v1.9.1) This addresses the following vulnerabilities: CVE-2021-46848 CVE-2022-1304 CVE-2022-2097 CVE-2022-42898 277367440 Security fixes for Apigee Controller, Watcher, and apigeectl . (Fixed in Apigee hybrid v1.8.7 and v1.9.2) This addresses the following vulnerabilities: CVE-2022-41723 CVE-2022-41717 CVE-2022-28948 278313047 Security fixes for apigee-stackdriver-logging-agent . (Fixed in Apigee hybrid v1.9.2) This addresses the following vulnerabilities: CVE-2022-32511 CVE-2022-29181 CVE-2022-24836 CVE-2022-0759 CVE-2021-41817 CVE-2021-41098 CVE-2021-32740 CVE-2021-28965 CVE-2020-8130 CVE-2020-25613 CVE-2019-3881 279194142 Fixes build issues to achieve FIPS compliance. (Fixed in Apigee hybrid v1.8.7 and v1.9.2) 281561243 Security fix for apigee-diagnostics-collector , apigee-mint-task-scheduler , apigee-runtime , and apigee-synchronizer . (Fixed in Apigee hybrid v1.8.8 and v1.9.3) This addresses the following vulnerability: CVE-2022-1471 283826216 Security fixes for apigee-ingressgateway . (Fixed in Apigee hybrid v1.9.3) This addresses the following vulnerabilities: CVE-2022-41723 CVE-2022-41721 283826785 Security fixes for istiod . (Fixed in Apigee hybrid v1.9.3) This addresses the following vulnerabilities: CVE-2023-25165 CVE-2022-41723 CVE-2022-41721 CVE-2022-23526 CVE-2022-23525 CVE-2022-23524 June 14, 2023 v1.8.8 Announcement hybrid v1.8.8 On June 14, 2023 we released an updated version of the Apigee hybrid software, v1.8.8.
- N/A Updates to security, infrastructure, and libraries. (also fixed in Apigee 1-16-0-apigee-4 ) v1.16.0 Fixed Fixed since last minor release Bug ID Description 451841788 Apigee hybrid required the mintTaskScheduler.serviceAccountPath property even when Monetization was not enabled. (Fixed in v1.15.1 & v1.14.3 ) 451375397 The apigee-pull-push.sh script could return a No such image error message. (Fixed in v1.15.1 & v1.14.3 ) 445912919 Unused files and folders have been removed from the Apigee hybrid Helm charts to prevent potential security exposure and streamline the product installation and upgrade process. (Fixed in v1.15.1 ) 442501403 Fixed an issue that caused incorrect target latency metrics in Apigee Analytics when a TargetEndpoint is configured with a <LoadBalancer> . (Fixed in v1.15.1 ) 437999897 Reduced the log level for failed geo IP lookups to address excessive log messages for private IP addresses. (Fixed in v1.15.1 ) 431930277 , 395272878 When the configuration property envs.managementCallsSkipProxy is set to true via helm for environment-level forward proxy, trace and analytics (which use googleapis.com ) will skip forward proxy. (Fixed in v1.15.1 ) 423597917 Post of an AppGroupAppKey scopes should result in insert operation instead of update. (Fixed in v1.15.1 & v1.14.3 ) 420675540 Fixed Cassandra based replication for runtime contracts in synchronizer. (Fixed in v1.15.1 , v1.14.3 & v1.13.4 ) 419578402 Mint-Mart forward proxy compatible. (Fixed in v1.15.1 & v1.14.3 ) 416634326 Presence of istio.io Custom Resource Definitions (CRDs) in an Apigee hybrid cluster could cause failure in apigee-ingressgateway-manager pods. (Fixed in v1.15.1 , v1.14.3 & v1.13.4 ) 414499328 ApigeeTelemetry could become stuck in creating state (Fixed in v1.14.3 & v1.13.4 ) 412740465 Fixed issue where zipkin headers were not generated by Apigee Ingress Gateway. (Fixed in v1.15.1 & v1.14.3 ) 409048431 Fixes a vulnerability which could allow a SAML signature verification to be bypassed. (Fixed in v1.15.1 & v1.14.3 ) 401746333 Fixed a java.lang.ClassCircularityError that could occur in Java Callouts due to an issue with the class loading mechanism. (Fixed in v1.15.1 & v1.14.3 ) 395272878 Separate Forward proxy support for googleapis.com and non-googleapis.com runtime traffic. (Fixed in v1.14.3 ) 393615439 OASValidation behavior for allOf with additionalProperties: true . (Fixed in 1.14.2-hotfix.1 ) 382565315 A memory leak within the Security Policy has been addressed, improving system stability. (Fixed in v1.13.4 ) 378686709 The use of wildcards ( ) in Apigee proxy basepaths would conflict with other explicit basepaths, resulting in a 404 error.
- This is because in certain circumstances Watcher did not send the correct deployment status due to using the wrong selector for the Apigee Ingress Gateway. (Fixed in Apigee hybrid v1.8.3) 251435916 Fixed an issue where in certain circumstances, MP pods would scale without traffic. (Fixed in Apigee hybrid v1.7.5) 249144084 Reuse existing target IPs if DNS resolution fail on DNS cache refresh. (Fixed in Apigee hybrid v1.8.1) 245664917 During the upgrade to Apigee hybrid 1.8.x, after running apigeectl init and confirming that check-ready succeeded, the Cassandra schema validation job was in an error state.
- Also fixed in Apigee hybrid v1.8.4 and newer (Fixed in Apigee hybrid v1.9.0 and v1.8.4) 260324159 Solved up to 30 minute delay proxy deployment due to socket closed error in synchronizer. (Fixed in Apigee hybrid v1.9.0) 259738092 Intermittent 404's were seen at the Apigee Ingress Gateway due to an inconsistent configuration delivery mechanism. (Fixed in Apigee hybrid v1.8.3) 258699204 The default memory requests and limits for metrics pods that were inadvertently changed in 1.8.x. have been fixed.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Default access log format: '{"start time":"%START TIME%","remote address":"%DOWNSTREAM DIRECT REMOTE ADDRESS%","user agent":"%REQ(USER-AGENT)%","host":"%REQ(:AUTHORITY)%","request":"%REQ(:METHOD)% %REQ(X-ENVOY-ORIGINAL-PATH?:PATH)% %PROTOCOL%","request time":"%DURATION%","status":"%RESPONSE CODE%","status details":"%RESPONSE CODE DETAILS%","bytes received":"%BYTES RECEIVED%","bytes sent":"%BYTES SENT%","upstream address":"%UPSTREAM HOST%","upstream response flags":"%RESPONSE FLAGS%","upstream response time":"%RESPONSE DURATION%","upstream service time":"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%","upstream cluster":"%UPSTREAM CLUSTER%","x forwarded for":"%REQ(X-FORWARDED-FOR)%","request method":"%REQ(:METHOD)%","request path":"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%","request protocol":"%PROTOCOL%","tls protocol":"%DOWNSTREAM TLS VERSION%","request id":"%REQ(X-REQUEST-ID)%","sni host":"%REQUESTED SERVER NAME%","apigee dynamic data":"%DYNAMIC METADATA(envoy.lua)%"}' The following is a copy of the default access log format with line breaks added for readability. '{"start time":"%START TIME%", "remote address":"%DOWNSTREAM DIRECT REMOTE ADDRESS%", "user agent":"%REQ(USER-AGENT)%", "host":"%REQ(:AUTHORITY)%", "request":"%REQ(:METHOD)% %REQ(X-ENVOY-ORIGINAL-PATH?:PATH)% %PROTOCOL%", "request time":"%DURATION%", "status":"%RESPONSE CODE%", "status details":"%RESPONSE CODE DETAILS%", "bytes received":"%BYTES RECEIVED%", "bytes sent":"%BYTES SENT%", "upstream address":"%UPSTREAM HOST%", "upstream response flags":"%RESPONSE FLAGS%", "upstream response time":"%RESPONSE DURATION%", "upstream service time":"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%", "upstream cluster":"%UPSTREAM CLUSTER%", "x forwarded for":"%REQ(X-FORWARDED-FOR)%", "request method":"%REQ(:METHOD)%", "request path":"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%", "request protocol":"%PROTOCOL%", "tls protocol":"%DOWNSTREAM TLS VERSION%", "request id":"%REQ(X-REQUEST-ID)%", "sni host":"%REQUESTED SERVER NAME%", "apigee dynamic data":"%DYNAMIC METADATA(envoy.lua)%"}' istiod.forwardClientCertDetails Advanced Introduced in version: 1.9.2 Default value: SANITIZE SET Chart: apigee-ingress-manager Determines how the Envoy proxy (for the Apigee ingress gateway) handles the x-forwarded-client-cert (XFCC) HTTP header.
- In that case, runtime's debug or analytics data will use the proxy shared at the org level, whereas backend/proxy traffic will continue to use the environment level proxy (this includes calls to googleapis.com as well). httpProxy.username Basic Introduced in version: 1.1.1 Default value: None Chart: apigee-operator , apigee-datastore , apigee-telemetry , apigee-ingress-manager , apigee-org , apigee-env , apigee-virtualhost If the HTTP proxy requires basic authentication, then use this property to provide a username. ingressGateways Configures each individual instance of the Apigee ingress gateway.
- If you change this setting after installing Hybrid, apply it with apigeectl init and then restart your Apigee ingress gateway pods. istiod.healthCheckUserAgents Advanced Introduced in version: 1.12.0 Default values: - "GoogleStackdriverMonitoring-UptimeChecks(https://cloud.google.com/monitoring)" - "Edge Health Probe" Chart: apigee-ingress-manager Enables non-Google Cloud loadbalancers to check the ingress gateway's health check endpoints ( /healthz/ingress and /healthz ) by overriding the default user-agent allow list in hybrid.
- The minimum value is 1. virtualhosts[].selector Basic Introduced in version: 1.2.0 Default value: app: apigee-ingressgateway Chart: apigee-virtualhost Required A key-value selector-value pair for pointing to different ingress selectors. apigee-ingressgateway : for Apigee hybrid installations using Apigee ingress gateway. istio-ingressgateway : for Apigee hybrid installations using Cloud Service Mesh (Apigee hybrid versions 1.8 and earlier).

### "New Apigee hybrid installation and administration Preview \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition to this, you may also want to use a private image for the controller and Apigee ingress gateway, for which, you will have to edit the apigee-controller-deployment.yaml and apigee-ingressgateway-manager-deployment.yaml files and replace all the image fields with the image from their private repo.
- Refer to the Managing Apigee ingress gateway for information on configuring the load balancer ip for the other instance Note: It is recommended not to modify the configurations of the rest of the components except the ones listed out in the upcoming steps.

