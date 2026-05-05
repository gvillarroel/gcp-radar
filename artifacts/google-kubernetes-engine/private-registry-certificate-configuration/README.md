# Private registry certificate configuration

Product: Google Kubernetes Engine
Feature slug: `private-registry-certificate-configuration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE can use a containerd configuration file to access private image registries that use private certificates.

## Lifecycle

- Latest feature date: 2024-04-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2))
- private (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig), [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ContainerdConfig)
