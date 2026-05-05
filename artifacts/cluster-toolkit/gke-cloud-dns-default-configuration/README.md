# GKE cloud DNS default configuration

Product: Cluster Toolkit
Feature slug: `gke-cloud-dns-default-configuration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The gke-cluster module defaults cloud_dns_config to KUBE_DNS with CoreDNS support.

## Lifecycle

- Latest feature date: 2026-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files))
- allow (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files))
- iam (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files))
- logging (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files))
- permission (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files))
- private (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files))
- role (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster), [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files))

## Official Evidence

- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/cluster-deployment-files)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint)
