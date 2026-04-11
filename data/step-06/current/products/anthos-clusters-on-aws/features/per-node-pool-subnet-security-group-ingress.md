---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.366Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "Per-node-pool subnet security group ingress"
feature_slug: "per-node-pool-subnet-security-group-ingress"
latest_feature_date: "2023-05-04"
deprecation_date: ""
coverage_status: "NONE"
source_links:
  - ""
keywords:
  - "VPC-wide ingress rule removal"
  - "per-node-pool subnet ingress"
  - "TCP 443 and 8123"
  - "security group ingress rules"
  - "control-plane ingress restriction"
  - "restricted control-plane ingress"
  - "node-pool subnet ingress"
  - "node pool subnet CIDR"
---

# Per-node-pool subnet security group ingress

Product: Anthos clusters on AWS
Coverage: NONE

## Step 02 Summary

Control-plane ingress is restricted to node-pool subnet IP ranges on TCP 443 and 8123 instead of VPC-wide rules.

## Extended Definition

Control-plane ingress is restricted to node-pool subnet IP ranges on TCP 443 and 8123 instead of VPC-wide rules.

## Source Links

No supporting official source links were selected.

## Supporting Pages

No supporting pages passed the Step 06 ranking thresholds.

