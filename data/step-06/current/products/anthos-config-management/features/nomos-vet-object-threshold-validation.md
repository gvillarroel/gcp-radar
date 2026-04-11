---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.204Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos vet object threshold validation"
feature_slug: "nomos-vet-object-threshold-validation"
latest_feature_date: "2025-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
keywords:
  - "etcd size limit"
  - "sync failure prevention"
  - "object threshold validation"
  - "object-count validation"
  - "nomos vet --threshold"
  - "repository object count"
  - "threshold flag"
  - "nomos threshold"
---

# nomos vet object threshold validation

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

The nomos vet command now supports a --threshold flag to validate repository object counts and prevent sync failures from etcd size limits.

## Extended Definition

The nomos vet command now supports a --threshold flag to validate repository object counts and prevent sync failures from etcd size limits.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Applying an object larger than this limit causes one of the following errors, depending on object size: etcdserver: request is too large rpc error: code = ResourceExhausted desc = trying to send message larger than max Request entity too large: limit is 3145728 To protect against ResourceGroup objects exceeding the Kubernetes size limit, you can use the nomos vet --threshold to validate the number of objects in your source repository.
- Passing the --threshold flag will cause the vet command to error if the number of objects in your source repository exceeds the threshold.
- To enforce the threshold, use the nomos vet --threshold command in a source repository presubmit check or git pre-commit hook .
- By default, the server-side etcd size limit is 1.5 MiB.

