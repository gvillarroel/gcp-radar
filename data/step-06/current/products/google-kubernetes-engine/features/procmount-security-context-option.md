---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.737Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "procMount security context option"
feature_slug: "procmount-security-context-option"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-configuration-scanning"
keywords:
  - "procmount"
  - "security"
  - "context"
  - "option"
  - "feature"
  - "adds"
  - "beta"
  - "default"
---

# procMount security context option

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This feature adds a beta, default-on procMount option in the security context; This feature adds a beta, default-on procMount option in the security context.

## Extended Definition

This feature adds a beta, default-on procMount option in the security context; This feature adds a beta, default-on procMount option in the security context.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-configuration-scanning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-configuration-scanning)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW What vulnerability is addressed by this patch?
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW What vulnerability is addressed by this patch?

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SELinux is also not mandatory in the Pod Security Standards. /proc mount type In GKE version 1.33 and later, if the Pod securityContext sets procMount to Unmasked , Autopilot rejects the Pod.
- For a list of enabled and optional security features, refer to security features in Autopilot .
- Linux capabilities You can use the following Linux capabilities : "SETPCAP", "MKNOD", "AUDIT WRITE", "CHOWN", "DAC OVERRIDE", "FOWNER", "FSETID", "KILL", "SETGID", "SETUID", "NET BIND SERVICE", "SYS CHROOT", "SETFCAP", "SYS PTRACE" You can also manually enable the following capabilities: NET RAW for ping: Add to Pod SecurityContext .
- You can manually enable the following capabilities: NET RAW for ping and SYS PTRACE for debugging: Add to Pod SecurityContext NET ADMIN for service meshes such as Istio: Specify --workload-policies=allow-net-admin in your cluster creation command.

### "About Kubernetes security posture scanning \_|\_ GKE security \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-configuration-scanning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-configuration-scanning)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using a non-default type increases these risks. spec.containers[ ].securityContext.procMount spec.initContainers[ ].securityContext.procMount spec.ephemeralContainers[ ].securityContext.procMount Undefined or nil Default Medium Unsafe sysctls mask A Pod can be configured to allow modification of unsafe kernel parameters using the /proc/sys virtual file system.
- They share namespaces with the host, and lack control group, seccomp, AppArmor, and capability restrictions. spec.containers[ ].securityContext.privileged spec.initContainers[ ].securityContext.privileged spec.ephemeralContainers[ ].securityContext.privileged Undefined or nil false High Host port access Exposing a host port to a container potentially allows the container to intercept network traffic to a host service using that port or to bypass network access control rules, such as the rules in a NetworkPolicy. spec.containers[ ].ports[ ].hostPort spec.initContainers[ ].ports[ ].hostPort spec.ephemeralContainers[ ].ports[ ].hostPort Undefined or nil 0 High Non-default capabilities A container has assigned capabilities that could allow a container escape. spec.containers[ ].securityContext.capabilities.add spec.initContainers[ ].securityContext.capabilities.add spec.ephemeralContainers[ ].securityContext.capabilities.add Undefined or nil AUDIT WRITE CHOWN DAC OVERRIDE FOWNER FSETID KILL MKNOD NET BIND SERVICE SETFCAP SETGID SETPCAP SETUID SYS CHROOT Medium Mounting host path volumes hostPath volumes mount files or directories from the host.
- The disabled preventive security control increases the risk of container escape. metadata.annotations["container.apparmor.security.beta.kubernetes.io/ "] false Low Additionally, GKE checks for any RBAC RoleBindings or ClusterRoleBindings that reference one of the following users or groups: system:anonymous system:authenticated system:unauthenticated If any RBAC bindings that reference these users or groups exist, a finding named Effectively Anonymous Users Granted GKE Cluster Access with a severity of Medium appears in the security posture dashboard.
- Unsafe parameters don't support namespacing, don't properly isolate their effect between Pods, could harm the node's health, or might allow the Pod to gain resources beyond its limits. spec.securityContext.sysctls[ ].name Undefined or nil kernel.shm rmid forced net.ipv4.ip local port range net.ipv4.ip unprivileged port start net.ipv4.tcp syncookies net.ipv4.ping group range Medium Running as non-root You can explicitly allow a container to run as the root user if the runAsUser or the USER directive in the image specifies the root user.

