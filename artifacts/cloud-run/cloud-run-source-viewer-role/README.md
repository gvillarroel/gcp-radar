# Cloud Run Source Viewer role

Product: Cloud Run
Feature slug: `cloud-run-source-viewer-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Cloud Run Source Viewer IAM role grants permissions to view a Cloud Run service or job that is deployed from source.

## Lifecycle

- Latest feature date: 2024-06-27
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

- access (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub))
- auth (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub))
- iam (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub))
- identity (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub))
- key (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub))
- kms (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub))
- logging (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub))
- permission (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub))
- policy (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub))
- role (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub))
- security (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles)
- [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
