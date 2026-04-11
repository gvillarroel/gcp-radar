---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:03:42.252Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Batch update to firewall policy rules"
feature_slug: "batch-update-to-firewall-policy-rules"
latest_feature_date: "2025-04-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/configure-batch-updates"
  - "https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation"
  - "https://docs.cloud.google.com/firewall/docs/batch-update-overview"
keywords:
  - "batch"
  - "update"
  - "to"
  - "firewall"
  - "policy"
  - "rules"
  - "lets"
  - "you"
---

# Batch update to firewall policy rules

Product: Cloud NGFW
Coverage: LOW

## Step 02 Summary

Batch update to firewall policy rules lets you update all rules for hierarchical and network firewall policies in a single request.

## Extended Definition

Batch update to firewall policy rules lets you update all rules for hierarchical and network firewall policies in a single request.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/configure-batch-updates](https://docs.cloud.google.com/firewall/docs/configure-batch-updates)
- [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation)
- [https://docs.cloud.google.com/firewall/docs/batch-update-overview](https://docs.cloud.google.com/firewall/docs/batch-update-overview)

## Supporting Pages

### "Configure batch updates to firewall policy rules \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/configure-batch-updates](https://docs.cloud.google.com/firewall/docs/configure-batch-updates)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you are using gcloud CLI to batch update the firewall policy rules, use the following gcloud CLI commands: export-rules : lets you export the firewall policy rules configuration to a YAML file.
- Following is an example of a basic YAML file. rules: -action: allow description: test-rule1 direction: INGRESS disabled: false enableLogging: false kind: compute#firewallPolicyRule match: layer4Configs: -ipProtocol: all srcIpRanges: -192.0.2.0/24 priority: 1 ruleTupleCount: 2 -action: goto next description: default egress rule direction: EGRESS enableLogging: false kind: compute#firewallPolicyRule match: destIpRanges: -::/0 layer4Configs: -ipProtocol: all priority: 2147483644 ruleTupleCount: 2 -action: goto next description: default ingress rule direction: INGRESS enableLogging: false kind: compute#firewallPolicyRule match: layer4Configs: -ipProtocol: all srcIpRanges: -::/0 priority: 2147483645 ruleTupleCount: 2 -action: goto next description: default egress rule direction: EGRESS enableLogging: false kind: compute#firewallPolicyRule match: destIpRanges: -198.51.100.0/24 layer4Configs: -ipProtocol: all priority: 2147483646 ruleTupleCount: 2 -action: goto next description: default ingress rule direction: INGRESS enableLogging: false kind: compute#firewallPolicyRule match: layer4Configs: -ipProtocol: all srcIpRanges: -192.0.2.0/24 priority: 2147483647 ruleTupleCount: 2 Import firewall policy rules Import the rules into your firewall policy after changing the file with your required batch updates.
- Home Documentation Networking Cloud NGFW Guides Send feedback Configure batch updates to firewall policy rules Stay organized with collections Save and categorize content based on your preferences.
- If you are using REST APIs to batch update the firewall policy rules, use the patch method.

### "Configure global network firewall policy to deny egress connections to specific\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Create . gcloud To update the firewall policy, run the following command: gcloud compute network-firewall-policies rules create 500 \ --firewall-policy=fw-policy \ --direction=INGRESS \ --action=ALLOW \ --src-ip-ranges= NAT IP ADDRESS \ --layer4-configs=all \ --global-firewall-policy \ --enable-logging Replace NAT IP ADDRESS with the IP address assigned to your Cloud NAT.
- Click Create . gcloud To allow IAP access to all VM instances in the vpc-geo-location network, run the following command: To create a firewall policy, run the following command: gcloud compute network-firewall-policies create fw-policy \ --global To create a firewall rule that allows traffic to all destinations and enables logs, run the following command: gcloud compute network-firewall-policies rules create 100 \ --firewall-policy=fw-policy \ --direction=INGRESS \ --action=ALLOW \ --layer4-configs=tcp:22 \ --src-ip-ranges=35.235.240.0/20 \ --global-firewall-policy \ --enable-logging To associate the firewall policy with the VPC network, run the following command: gcloud compute network-firewall-policies associations create \ --firewall-policy=fw-policy \ --network=vpc-geo-location \ --name=pol-association-fw-rules \ --global-firewall-policy Create a firewall rule In this section, you create a firewall rule to allow ingress connection on the instance-2-sg VM.
- Click Create . gcloud To add a new rule in the fw-policy that you created in the Create a global network firewall policy section, run the following command: gcloud compute network-firewall-policies rules create 200 \ --firewall-policy=fw-policy \ --direction=EGRESS \ --action=DENY \ --dest-region-codes=SG,PL,IT \ --layer4-configs=all \ --global-firewall-policy \ --enable-logging Test the geolocation firewall rule Console After you have added the rule to block egress traffic to Singapore (SG), Poland (PL), and Italy (IT), follow these steps to test the rule: In the Google Cloud console, go to the VM instances page.
- In the Delete a firewall policy dialog, click Delete . gcloud Remove the association between the firewall policy and VPC network. gcloud compute network-firewall-policies associations delete \ --name=pol-association-fw-rules \ --firewall-policy=fw-policy \ --global-firewall-policy Note: If you set up the association between the firewall policy and the VPC network through Google Cloud console, don't use the gcloud CLI command to remove the association.

### Overview \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firewall/docs/batch-update-overview](https://docs.cloud.google.com/firewall/docs/batch-update-overview)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- You can use a single request from the Google Cloud CLI or the Compute Engine API to batch update all the firewall policy rules for hierarchical and network firewall policies.
- To configure the batch update to firewall policy rules, do the following: Export your firewall policy rules.
- Permissions Make sure that you have the following permissions to batch update the firewall policy rules.
- Using the batch updates, Cloud Next Generation Firewall provides an efficient and manageable way for you to handle firewall policy rule updates in your cloud environments.

