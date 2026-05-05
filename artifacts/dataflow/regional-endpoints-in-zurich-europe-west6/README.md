# Regional endpoints in Zurich (europe-west6)

Product: Dataflow
Feature slug: `regional-endpoints-in-zurich-europe-west6`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

This feature provides Dataflow regional endpoints in Zurich europe-west6.

## Lifecycle

- Latest feature date: 2020-11-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- auth (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- authorization (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- certificate (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- encrypt (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- firewall (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- iam (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- identity (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- key (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- kms (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- logging (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- permission (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- policy (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- private (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- role (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- security (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))
- token (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control)
- [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params)
- [https://docs.cloud.google.com/dataflow/docs/resources/locations](https://docs.cloud.google.com/dataflow/docs/resources/locations)
