---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.090Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Component Gateway VPC Service Controls support"
feature_slug: "component-gateway-vpc-service-controls-support"
latest_feature_date: "2020-02-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/network-access"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/networking"
keywords:
  - "component"
  - "gateway"
  - "vpc"
  - "controls"
  - "supports"
  - "access"
  - "patterns"
  - "compatible"
---

# Component Gateway VPC Service Controls support

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Component Gateway supports access patterns compatible with VPC Service Controls.

## Extended Definition

Component Gateway supports access patterns compatible with VPC Service Controls.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/network-access](https://docs.cloud.google.com/dataproc-metastore/docs/network-access)
- [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Feature Component Gateway now supports VPC Service Controls .
- March 26, 2019 Feature Announcing the Alpha release of Cloud Dataproc Component Gateway , which provides secure access to web endpoints for Cloud Dataproc core and optional components without relying on SSH tunnels or modifying firewall rules to allow inbound traffic (applies to clusters created with image version 1.3.29 and later).
- July 07, 2020 Feature Announcing the General Availability (GA) release of Dataproc Component Gateway , which provides secure access to web endpoints for Dataproc default and optional components.
- May 01, 2020 Feature Announcing the Beta release of Dataproc Component Gateway , which provides secure access to web endpoints for Dataproc default and optional components.

### Configuring Network Access for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/network-access](https://docs.cloud.google.com/dataproc-metastore/docs/network-access)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure Private Service Access Dataproc Metastore uses Private Service Access to establish a private connection between your VPC network and the Google-managed service producer network where your Dataproc Metastore instance resides.
- Private Google Access: Dataproc Metastore instances often rely on Private Google Access for private communication with your VPC network.
- Verify Private Service Access Connection: In the Google Cloud console, go to Virtual Private Cloud network > VPC Network Peering .
- Understanding the following concepts is crucial for a successful setup: Shared Virtual Private Cloud: If your Managed Service for Apache Spark clusters or Managed Service for Apache Spark workloads are in a service project that uses a Shared VPC network from a host project, verify the appropriate network configurations are made in the host project.

### Dataproc Metastore networking overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next VPC Service Controls with Dataproc Metastore Dataproc Metastore Identity and Access Management (IAM) and access control Private Service Connect with Dataproc Metastore Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- VPC Service Controls restrict access to resources within the perimeter from the outside.
- On-premise networking You can connect to a Dataproc Metastore service with an on-premise environment by using Cloud VPN or Cloud Interconnect VPC Service Controls VPC Service Controls improve your ability to mitigate the risk of data exfiltration.
- This setting also lets you expose your service in a single VPC network or make your service accessible from multiple VPC networks (through the use of subnetworks ).

