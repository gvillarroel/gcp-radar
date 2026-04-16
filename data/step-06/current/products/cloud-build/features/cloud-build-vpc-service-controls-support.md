---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.872Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build VPC Service Controls support"
feature_slug: "cloud-build-vpc-service-controls-support"
latest_feature_date: "2022-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server"
keywords:
  - "used"
  - "perimeters"
  - "controls"
  - "within"
  - "added"
---

# Cloud Build VPC Service Controls support

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build can be used within VPC Service Controls perimeters for added network-based project isolation.

## Extended Definition

Cloud Build can be used within VPC Service Controls perimeters for added network-based project isolation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server)

## Supporting Pages

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Pub/Sub triggers used in additional contexts within Google Cloud may not refer to Cloud Build Pub/Sub triggers unless explicitly stated.
- Limitations Cloud Build Pub/Sub triggers are not supported when VPC Service Controls is used.
- Filters (optional): You can create filters within a trigger that determine whether or not your trigger will execute a build in response to the incoming payload by specifying filters on substitution variables.
- Filters (optional): You can create filters within a trigger that determine whether or not your trigger will execute a build in response to the incoming payload by specifying filters on substitution variables.

### "Connect to a Bitbucket Data Center host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The first 24 bits of the IP range are used as the subnet mask ( 192.0.2.0 ) while the possible hosts addresses range from 192.0.2.0 to 192.0.2.255 .
- The first 24 bits of the IP range are used as the subnet mask ( 192.0.2.0 ) while the possible hosts addresses range from 192.0.2.0 to 192.0.2.225 .
- Optional: PEERED NETWORK IP RANGE is the internal IP range that VMs can be assigned to within a peered network's allocated range.
- Optional: PEERED NETWORK IP RANGE is the internal IP range that VMs can be assigned to within a peered network's allocated range.

### "Connect to a Bitbucket Server host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The first 24 bits of the IP range are used as the subnet mask ( 192.0.2.0 ) while the possible hosts addresses range from 192.0.2.0 to 192.0.2.255 .
- The first 24 bits of the IP range are used as the subnet mask ( 192.0.2.0 ) while the possible hosts addresses range from 192.0.2.0 to 192.0.2.225 .
- Optional: PEERED NETWORK IP RANGE is the internal IP range that VMs can be assigned to within a peered network's allocated range.
- Optional: PEERED NETWORK IP RANGE is the internal IP range that VMs can be assigned to within a peered network's allocated range.

