---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.750Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Anthos GKE on AWS Initial Beta Release"
feature_slug: "anthos-gke-on-aws-initial-beta-release"
latest_feature_date: "2020-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/getting-support"
keywords:
  - "initial"
  - "release"
  - "beta"
  - "made"
---

# Anthos GKE on AWS Initial Beta Release

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Anthos GKE on AWS was made available as an initial beta release.

## Extended Definition

Anthos GKE on AWS was made available as an initial beta release.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/getting-support](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/getting-support)

## Supporting Pages

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh v1.22\

- URL: [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Release version Release date End-of-life date 1.19 October 31, 2023 Unsupported (July 31, 2024) 1.18 August 3, 2023 Unsupported (June 4, 2024) 1.17 April 4, 2023 Unsupported (February 8, 2024) 1.16 February 21, 2023 Unsupported (December 11, 2023) 1.15 October 25, 2022 Unsupported (August 4, 2023) 1.14 July 20, 2022 Unsupported (April 20, 2023) 1.13 March 30, 2022 Unsupported (February 8, 2023) 1.12 December 9, 2021 Unsupported (October 25, 2022) 1.11 October 6, 2021 Unsupported (July 20, 2022) 1.10 June 24, 2021 Unsupported (March 30, 2022) 1.9 March 4, 2021 Unsupported (December 14, 2021) 1.8 December 15, 2020 Unsupported (December 14, 2021) 1.7 November 3, 2020 Unsupported (December 14, 2021) 1.6 June 30, 2020 Unsupported (March 30, 2021) 1.5 May 20, 2020 Unsupported (February 17, 2021) 1.4 December 20, 2019 Unsupported (September 18, 2020) For more information about our support policies, refer to Getting support .
- Feature GKE clusters on Google Cloud Distributed Cloud GKE Multi-Cloud Other GKE Enterprise clusters IAP integration End-user authentication Audit policies (preview) Dry-run mode Denial logging Authorization policy Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Authorization v1beta1 policy Path templating Authentication policy Peer authentication Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Auto-mTLS mTLS PERMISSIVE mode For information on enabling mTLS STRICT mode, see Configuring transport security .
- If you are using Microsoft AKS attached clusters or GKE on Azure clusters, you must set the following annotation for the gateway resource to configure health checks over TCP: service.beta.kubernetes.io/port 80 health-probe protocol : tcp Otherwise, HTTP traffic won't be accepted.
- Release version Release date Earliest end of life date 1.22 July 25, 2024 April 25, 2025 1.21 June 4, 2024 March 4, 2025 1.20 February 8, 2024 November 8, 2024 If you are on an unsupported version of Cloud Service Mesh, then you must upgrade to Cloud Service Mesh 1.20 or later.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh v1.21\

- URL: [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Release version Release date End-of-life date 1.19 October 31, 2023 Unsupported (July 31, 2024) 1.18 August 3, 2023 Unsupported (June 4, 2024) 1.17 April 4, 2023 Unsupported (February 8, 2024) 1.16 February 21, 2023 Unsupported (December 11, 2023) 1.15 October 25, 2022 Unsupported (August 4, 2023) 1.14 July 20, 2022 Unsupported (April 20, 2023) 1.13 March 30, 2022 Unsupported (February 8, 2023) 1.12 December 9, 2021 Unsupported (October 25, 2022) 1.11 October 6, 2021 Unsupported (July 20, 2022) 1.10 June 24, 2021 Unsupported (March 30, 2022) 1.9 March 4, 2021 Unsupported (December 14, 2021) 1.8 December 15, 2020 Unsupported (December 14, 2021) 1.7 November 3, 2020 Unsupported (December 14, 2021) 1.6 June 30, 2020 Unsupported (March 30, 2021) 1.5 May 20, 2020 Unsupported (February 17, 2021) 1.4 December 20, 2019 Unsupported (September 18, 2020) For more information about our support policies, refer to Getting support .
- Feature GKE clusters on Google Cloud Distributed Cloud GKE Multi-Cloud Other GKE Enterprise clusters IAP integration End-user authentication Audit policies (preview) Dry-run mode Denial logging Authorization policy Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Authorization v1beta1 policy Path templating Authentication policy Peer authentication Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Auto-mTLS mTLS PERMISSIVE mode For information on enabling mTLS STRICT mode, see Configuring transport security .
- If you are using Microsoft AKS attached clusters or GKE on Azure clusters, you must set the following annotation for the gateway resource to configure health checks over TCP: service.beta.kubernetes.io/port 80 health-probe protocol : tcp Otherwise, HTTP traffic won't be accepted.
- Release version Release date Earliest end of life date 1.22 July 25, 2024 April 25, 2025 1.21 June 4, 2024 March 4, 2025 1.20 February 8, 2024 November 8, 2024 If you are on an unsupported version of Cloud Service Mesh, then you must upgrade to Cloud Service Mesh 1.19 or later.

### Get support \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/getting-support](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/getting-support)
- Source ID: `site-docs-root-2`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version Support Policy Google supports each GKE on AWS minor version for the later of: 12 months after the initial release of the minor version.
- The release of the third subsequent minor version.

