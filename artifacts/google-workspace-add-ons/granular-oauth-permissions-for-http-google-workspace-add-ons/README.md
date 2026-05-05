# Granular OAuth permissions for HTTP Google Workspace add-ons

Product: Google Workspace add-ons
Feature slug: `granular-oauth-permissions-for-http-google-workspace-add-ons`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

HTTP Google Workspace add-ons can use granular OAuth consent so users can authorize individual OAuth scopes.

## Lifecycle

- Latest feature date: 2025-05-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/workspace/add-ons/guides/alternate-runtimes](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes), [https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments](https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments), [https://developers.google.com/workspace/add-ons/overview](https://developers.google.com/workspace/add-ons/overview), [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type))
- auth (evidence: [https://developers.google.com/workspace/add-ons/guides/alternate-runtimes](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes), [https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments](https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments), [https://developers.google.com/workspace/add-ons/overview](https://developers.google.com/workspace/add-ons/overview), [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type))
- authorization (evidence: [https://developers.google.com/workspace/add-ons/guides/alternate-runtimes](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes), [https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments](https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments), [https://developers.google.com/workspace/add-ons/overview](https://developers.google.com/workspace/add-ons/overview), [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type))
- encrypt (evidence: [https://developers.google.com/workspace/add-ons/guides/alternate-runtimes](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes), [https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments](https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments), [https://developers.google.com/workspace/add-ons/overview](https://developers.google.com/workspace/add-ons/overview), [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type))
- iam (evidence: [https://developers.google.com/workspace/add-ons/guides/alternate-runtimes](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes), [https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments](https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments), [https://developers.google.com/workspace/add-ons/overview](https://developers.google.com/workspace/add-ons/overview), [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type))
- identity (evidence: [https://developers.google.com/workspace/add-ons/guides/alternate-runtimes](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes), [https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments](https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments), [https://developers.google.com/workspace/add-ons/overview](https://developers.google.com/workspace/add-ons/overview), [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type))
- key (evidence: [https://developers.google.com/workspace/add-ons/guides/alternate-runtimes](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes), [https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments](https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments), [https://developers.google.com/workspace/add-ons/overview](https://developers.google.com/workspace/add-ons/overview), [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type))
- permission (evidence: [https://developers.google.com/workspace/add-ons/guides/alternate-runtimes](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes), [https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments](https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments), [https://developers.google.com/workspace/add-ons/overview](https://developers.google.com/workspace/add-ons/overview), [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type))
- role (evidence: [https://developers.google.com/workspace/add-ons/guides/alternate-runtimes](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes), [https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments](https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments), [https://developers.google.com/workspace/add-ons/overview](https://developers.google.com/workspace/add-ons/overview), [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type))
- token (evidence: [https://developers.google.com/workspace/add-ons/guides/alternate-runtimes](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes), [https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments](https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments), [https://developers.google.com/workspace/add-ons/overview](https://developers.google.com/workspace/add-ons/overview), [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type))

## Official Evidence

- [https://developers.google.com/workspace/add-ons/guides/alternate-runtimes](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes)
- [https://developers.google.com/workspace/add-ons/overview](https://developers.google.com/workspace/add-ons/overview)
- [https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments](https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments)
- [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type)
