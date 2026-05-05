# K8sRequiredResources constraint template

Product: Anthos Config Management
Feature slug: `k8srequiredresources-constraint-template`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This constraint template enforces required resource requests or limits on Kubernetes workloads.

## Lifecycle

- Latest feature date: 2022-06-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart))
- constraint (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart)
