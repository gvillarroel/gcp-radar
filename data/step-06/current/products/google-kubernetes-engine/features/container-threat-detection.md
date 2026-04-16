---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.970Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Container Threat Detection"
feature_slug: "container-threat-detection"
latest_feature_date: "2020-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/shared-responsibility"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners"
keywords:
  - "container"
  - "threat"
  - "detection"
  - "detects"
  - "common"
  - "runtime"
  - "attacks"
  - "can"
---

# Container Threat Detection

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Detects common container runtime attacks and can alert in Security Command Center or Cloud Logging.

## Extended Definition

Detects common container runtime attacks and can alert in Security Command Center or Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/shared-responsibility](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/shared-responsibility)
- [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Upgrade your admin clusters and user clusters to one of the following versions: 1.8.3 1.7.4 High GCP-2021-017 Published: 2021-09-01 Updated: 2021-09-23 Reference: CVE-2021-33909 CVE-2021-33910 GKE Description Severity 2021-09-23 update: Containers running inside of GKE Sandbox are unaffected by this vulnerability for attacks originating inside the container.
- GKE platforms don't use components such as ingress-nginx and the CRI-O container runtime, and are unaffected by any vulnerabilities in those components.
- Built detection rules into Event Threat Detection (GKE CONTROL PLANE CREATE SENSITIVE BINDING) as part of Security Command Center.
- Users who have manually enabled the default container runtime seccomp profile on GKE Standard clusters are also protected.

### "Autopilot partners \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- The platform offers visibility into processes, connections, and Kubernetes RBAC security controls by providing security monitoring, compliance capabilities, and threat detection across containerized workloads and nodes.
- Its eBPF-based sensor for GKE Autopilot clusters provides runtime context for posture management, real-time threat detection, and defense measures, to help ensure security.
- It helps prevent pre-runtime and runtime vulnerabilities, attacks, and misconfigurations in containerized applications.
- Uptycs Uptycs Container Security Platform helps you implement security best practices for GKE Autopilot clusters through its eBPF runtime sensor-based monitoring solution.

### GKE shared responsibility \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/shared-responsibility](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/shared-responsibility)
- Source ID: `site-iam-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Building and operating threat detection for container-specific threats into the kernel with Container Threat Detection (priced separately with Security Command Center).
- This includes: vTPM-backed trusted bootstrap mechanism for issuing kubelet TLS certificates and auto-rotation of the certificates Hardened kubelet configuration following CIS benchmarks GKE metadata server for Workload identity GKE's native Container Network Interface plugin and Calico for NetworkPolicy GKE Kubernetes storage integrations such as the CSI driver GKE logging and monitoring agents Hardening and patching the control plane.
- Customer's responsibilities Maintain your workloads, including your application code, build files, container images, data, Role-based access control (RBAC)/IAM policy, and containers and pods that you are running.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

