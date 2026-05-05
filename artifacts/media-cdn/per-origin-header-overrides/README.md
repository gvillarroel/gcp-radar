# Per-origin header overrides

Product: Media CDN
Feature slug: `per-origin-header-overrides`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Media CDN can manipulate headers on a per-origin basis, including host rewrites and static authorization headers for failover origins; Media CDN can manipulate headers on a per-origin basis, including host rewrites and static authorization headers for failover origins.

## Lifecycle

- Latest feature date: 2023-01-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins), [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing), [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration))
- allow (evidence: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins), [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing), [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration))
- auth (evidence: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins), [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing), [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration))
- authorization (evidence: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins), [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing), [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration))
- certificate (evidence: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins), [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing), [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration))
- identity (evidence: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins), [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing), [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration))
- key (evidence: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins), [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing), [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration))
- logging (evidence: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins), [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing), [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration))
- permission (evidence: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins), [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing), [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration))
- policy (evidence: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins), [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing), [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration))

## Official Evidence

- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration)
- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
