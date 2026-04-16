---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.422Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution resource labeling"
feature_slug: "bare-metal-solution-resource-labeling"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/order-bms-resources"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-security"
  - "https://docs.cloud.google.com/iam/docs/overview"
keywords:
  - "organize"
  - "labeling"
  - "resource"
  - "users"
---

# Bare Metal Solution resource labeling

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Users can organize Bare Metal Solution resources by labels and apply labels to servers, networks, storage volumes, and NFS storage.

## Extended Definition

Users can organize Bare Metal Solution resources by labels and apply labels to servers, networks, storage volumes, and NFS storage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)

## Supporting Pages

### Order Bare Metal Solution resources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- You can use procurements to order the following Bare Metal Solution resources: Servers ( available server configurations ) Storage ( available storage choices ) Partner Interconnect bandwidth To procure any other Bare Metal Solution resource, contact Google Cloud sales .
- As your resources are procured, you can provision them through the following options and start using them: Google Cloud console intake form Create a network UI Create a storage volume UI Create an NFS volume UI What's next Deploy your Bare Metal Solution environment .
- After you've executed a simplified, one-time Bare Metal Solution Order Form, you can order your Bare Metal Solution resources online by creating procurements through the Google Cloud console.
- The following pages show you the pods that contain your existing resources: Servers Networks Volumes NFS Shares If you're unsure about which pod to select, contact Google Cloud Sales .

### "IAM overview \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- Source ID: `site-iam-reference`
- Final score: 67
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Policy inheritance Google Cloud has container resources—such as projects, folders, and organizations—that let you organize your resources in a parent-child hierarchy.
- Allow policies are directly attached to some Google Cloud resources, which are organized hierarchically —for example, projects contain service-specific resources.
- These container resources are organized hierarchically, which lets child resources inherit the policies of their parent resources.
- Advanced access control In addition to allow policies, IAM provides the following access control mechanisms to help you refine who has access to what resources: Additional policy types : IAM offers the following policy types in addition to allow policies: Deny policies : Deny policies prevent principals from using certain permissions, even if they're granted a role with the permission.

### "Provide security for enterprise workloads in a Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Figure 5: VPC peering and the Bare Metal Solution environment As shown in Figure 6 , use a shared VPC architecture to allow resources from different projects to access the Bare Metal Solution servers.
- Home Documentation Distributed, hybrid, and multicloud Bare Metal Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- If you need to allow or deny access to specific resources, use firewall policies to restrict the default behavior that permits access to all Bare Metal Solution resources.
- As shown in Figure 5 , use VPC peering to enable resources running in a different VPC in the same project or a different project to access the Bare Metal Solution servers.

