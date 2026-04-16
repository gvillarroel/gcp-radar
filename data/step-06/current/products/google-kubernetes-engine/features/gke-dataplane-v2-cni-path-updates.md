---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.685Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Dataplane V2 CNI path updates"
feature_slug: "gke-dataplane-v2-cni-path-updates"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide"
keywords:
  - "gke"
  - "dataplane"
  - "v2"
  - "cni"
  - "path"
  - "updates"
  - "changes"
  - "removing"
---

# GKE Dataplane V2 CNI path updates

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Dataplane V2 changes its CNI path by removing the ptp plugin and moving CNI configuration into the anetd cni-writer container.

## Extended Definition

GKE Dataplane V2 changes its CNI path by removing the ptp plugin and moving CNI configuration into the anetd cni-writer container.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- To list the MCG managed firewall rules in your current environment, run the following command: gcloud compute firewall-rules list --format = "json" --filter = "name:gkemcg1-l7- " jq -r '.[] "\(.name): \(.sourceRanges // "No source range")"' awk -F: '{if ($2 /No source range ^\s $/) print "Rule "$1" has an EMPTY or MISSING source range."; else print "Rule "$1" has source range(s): "$2;}' To search logs for updates to MCG managed firewall configurations, use the Logs Explorer with the below query: protoPayload.serviceName="compute.googleapis.com" resource.type="gce firewall rule" protoPayload.resourceName= "projects/[^/]+/global/firewalls/gkemcg1-" -operation.last="true" To list the MCG managed firewall rules across your organization, run the following command to query Cloud Asset Inventory: gcloud asset search-all-resources --scope = 'organizations/ ' --asset-types = 'compute.googleapis.com/Firewall' --query 'name: //compute.googleapis.com/projects/ / /firewalls/gkemcg ' The following additional controls provide defense in depth against untrusted networks and can be considered to strengthen security posture: Use private GKE nodes to ensure your nodes only get private IPs.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.
- We recommend you to upgrade your node pools to one of the following versions or above to take advantage of the latest patches: 1.21.4-gke.301 1.20.10-gke.301 1.19.14-gke.301 1.18.20-gke.4501 The following versions also contain the fix: 1.21.3-gke.2001 1.20.8-gke.2101 1.20.9-gke.701 1.20.9-gke.1001 1.19.12-gke.2101 1.19.13-gke.701 1.18.20-gke.3001 High GKE clusters on Description Severity A security issue was discovered in Kubernetes , CVE-2021-25741, where a user may be able to create a container with subpath volume mounts to access files & directories outside of the volume, including on the host filesystem.

### "Modern CI/CD with GKE: A software delivery framework \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)
- Source ID: `site-docs-reference-required-5`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- As operators commit changes to their repositories, application configuration updates (and subsequent deployments) can be triggered automatically.
- We recommend that your business teams and technical teams align on the four key software delivery measures defined by DevOps Research and Assessment (DORA) : lead time for changes, deployment frequency, time to restore service, and change failure rate.
- Using the consistent infrastructure offered by the GKE platform, uniform CI/CD methods, and best practices in implementation, your organization can gain the following benefits for development and operations: Reducing lead time for changes.
- The following diagram shows how various teams interact with a centralized repository for all changes: The following sections explain how operators, developers, and security engineers employ the Git repository in a modern CI/CD system.

### "Node upgrade strategies \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- When GKE uses surge upgrades If enabled, GKE uses surge upgrades when the following types of changes occur: Version changes (upgrades) Vertically scaling the nodes by changing the node machine attributes , including machine type, disk type, and disk size Image type changes IP rotation Credential rotation Network policy creation Enabling image streaming Network performance configuration updates Enabling gVNIC Node system configuration changes Confidential nodes Other changes, including applying updates to node labels and taints of existing node pools , don't use surge upgrades as they don't require recreating the nodes.
- If enabled, GKE uses blue-green upgrades when the following types of changes occur: Version changes (upgrades) Vertically scaling the nodes by changing the node machine attributes , including machine type, disk type, and disk size Image type changes Add or replace storage pools in a node pool Surge upgrades are used for any other updates requiring the nodes to be recreated.
- In addition to node upgrades (version changes), GKE uses short-lived upgrades for other types of node updates, similar to how surge upgrades are used.
- Surge upgrade behavior is determined by the maxSurge and maxUnavailable settings, which determine how many nodes are upgraded at the same time in a rolling window with the described steps. maxSurge : GKE creates a new surge node before removing an existing one Set maxSurge to choose the maximum number of additional, surge nodes that can be added to the node pool during an upgrade, per zone, increasing the likelihood that workloads running on the existing node can migrate to a new node immediately.

