---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.364Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "cgroup v2 default control groups"
feature_slug: "cgroup-v2-default-control-groups"
latest_feature_date: "2023-05-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes"
keywords:
  - "container runtime cgroup"
  - "cgroup v2"
  - "Linux control groups"
  - "kernel control group"
  - "control groups v2"
  - "default cgroups"
  - "cgroupv2"
  - "cgroup2"
---

# cgroup v2 default control groups

Product: Anthos clusters on AWS
Coverage: HIGH

## Step 02 Summary

Anthos clusters on AWS now use cgroupv2 as the default control group configuration.

## Extended Definition

As of the May 4, 2023 GKE on AWS update, Anthos clusters on AWS use cgroupv2 as their default control group configuration. This default applies to clusters launched with the listed versions 1.24.11-gke.1000, 1.25.7-gke.1000, and 1.26.2-gke.1001 in that release. The release notes also tie this change to an updated Ubuntu 22.04 image, which by default uses cgroupv2.

## Evidence Summary

The cited release notes explicitly state that Anthos on AWS now defaults to cgroupv2 and document the versioned release context plus Ubuntu 22.04’s default cgroupv2 behavior.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)

## Supporting Pages

### GKE on AWS release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- May 04, 2023 Announcement You can now launch clusters with the following Kubernetes versions: 1.24.11-gke.1000 1.25.7-gke.1000 1.26.2-gke.1001 Feature Updated OS image to Ubuntu 22.04. cgroupv2 is now used as the default control group configuration.
- If they do, they must be updated to use cgroupv2 .
- Ubuntu 22.04 uses cgroupv2 by default.

