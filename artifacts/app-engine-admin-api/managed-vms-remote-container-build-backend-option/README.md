# Managed VMs remote container build backend option

Product: App Engine Admin API
Feature slug: `managed-vms-remote-container-build-backend-option`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

For App Engine Managed VMs, `gcloud preview app deploy` can build containers using either a default remote Compute Engine VM or Cloud Build, configurable via `app/use_cloud_build`.

## Lifecycle

- Latest feature date: 2016-02-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- firewall
- iam
- identity
- key
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
