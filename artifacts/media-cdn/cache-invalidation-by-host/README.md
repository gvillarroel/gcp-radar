# Cache invalidation by host

Product: Media CDN
Feature slug: `cache-invalidation-by-host`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Media CDN can invalidate cached content by host, path, or tag, with tag-based invalidation supporting status codes, MIME type, and origin.

## Lifecycle

- Latest feature date: 2021-06-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))
- allow (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))
- auth (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))
- authorization (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))
- certificate (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))
- iam (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))
- identity (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))
- key (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))
- logging (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))
- permission (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))
- policy (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))
- private (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))
- token (evidence: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation), [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching), [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview), [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates))

## Official Evidence

- [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation)
- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates](https://docs.cloud.google.com/media-cdn/docs/configure-ssl-certificates)
- [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
