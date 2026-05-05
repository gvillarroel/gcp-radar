# Cloud Build CMEK support

Product: Cloud Build
Feature slug: `cloud-build-cmek-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Build added support for customer-managed encryption keys (CMEK) for compliance.

## Lifecycle

- Latest feature date: 2019-06-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview), [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition), [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build))
- encrypt (evidence: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview), [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition), [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build))
- key (evidence: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview), [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition), [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build))
- private (evidence: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview), [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition), [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build))
- secret (evidence: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview), [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition), [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build))
- token (evidence: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview), [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition), [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build))

## Official Evidence

- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition)
- [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
