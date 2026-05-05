# apigee-pull-push.sh --list option

Product: Apigee hybrid
Feature slug: `apigee-pull-push-sh-list-option`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The tools/apigee-pull-push.sh utility now supports a --list (-l) option to list all images in the GCR repository.

## Lifecycle

- Latest feature date: 2022-08-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- audit (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- encrypt (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- firewall (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- logging (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push)
