# Apigee hybrid

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 57
Unique features: 62

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-12-19 | apigee-guardrails IAM service account |  | Apigee Hybrid v1.16.0 introduces an apigee-guardrails Google IAM service account used by the apigee-operator during installation and upgrade to validate required APIs. |
| 2025-12-19 | Seccomp Profiles |  | Apigee Hybrid supports Seccomp Profiles for runtime components to limit container system calls to the host kernel, improving container security posture. |
| 2025-10-12 | and setup fees for monetization |  | Apigee Hybrid monetization now supports recurring fees, top-up fees, and setup fees; Apigee Hybrid monetization now supports recurring fees, top-up fees, and setup fees. |
| 2025-10-12 | Recurring |  | Apigee Hybrid monetization now supports recurring fees, top-up fees, and setup fees; Apigee Hybrid monetization now supports recurring fees, top-up fees, and setup fees. |
| 2025-10-12 | SanitizeModelResponse policy |  | Apigee Hybrid supports the SanitizeModelResponse policy for LLM/GenAI workloads to sanitize responses from large language models. |
| 2025-10-12 | SanitizeUserPrompt policy |  | Apigee Hybrid supports the SanitizeUserPrompt policy for LLM/GenAI workloads to sanitize incoming prompts and reduce prompt-injection and jailbreak risks. |
| 2025-10-12 | SemanticCacheLookup policy |  | Apigee Hybrid adds support for the SemanticCacheLookup policy for LLM/GenAI workloads to look up semantically similar cached responses. |
| 2025-10-12 | SemanticCachePopulate policy |  | Apigee Hybrid adds support for the SemanticCachePopulate policy for LLM/GenAI workloads to store responses in the semantic cache. |
| 2025-10-12 | top-up |  | Apigee Hybrid monetization now supports recurring fees, top-up fees, and setup fees; Apigee Hybrid monetization now supports recurring fees, top-up fees, and setup fees. |
| 2025-06-04 | Large message payload support |  | Apigee Hybrid supports API message payloads up to 30 MB and allows configuration per environment or for the entire installation; Apigee Hybrid supports API message payloads up to 30 MB, configurable via runtime resource settings. |
| 2025-05-29 | Apigee Classic UI | 2025-08-29 | The Apigee Classic UI is being shut down as management transitions to the Google Cloud console; deprecated on 2025-08-29. |
| 2025-04-14 | Data residency support for Apigee data collectors |  | Apigee and Apigee Hybrid data collectors now support data residency (DRZ) compliance for supported subscription and pay-as-you-go organizations. |
| 2025-03-27 | Client IP resolution |  | Apigee Hybrid adds client IP resolution functionality in versions 1.14.0 and later. |
| 2024-12-16 | Apigee Hybrid analytics and debug data pipeline |  | Introduces a new analytics and debug data pipeline that allows hybrid runtime components to write data directly to the control plane. |
| 2024-12-16 | Cassandra credential rotation |  | Apigee Hybrid v1.14 introduces rotation of Cassandra credentials in Kubernetes secrets and supports rollback before cleanup job initiation for both Vault and Kubernetes secrets. |
| 2024-12-16 | Enhanced per-environment proxy limits |  | Adds higher per-environment API proxy and resource limits for new Apigee Hybrid organizations, including automatic partitioning into replica sets when more than 50 proxies are deployed. |
| 2024-12-16 | Forward proxy allowlist access |  | Apigee Hybrid forward proxy now allows pass-through access to allowlisted URLs, requiring allowlists only for googleapis.com endpoints on the proxy server. |
| 2024-12-16 | Metrics-based autoscaling via customAutoscaling.enabled |  | Provides a configuration toggle (customAutoscaling.enabled) to enable or disable metrics-based autoscaling for Apigee Hybrid runtime services. |
| 2024-12-16 | Upgrade backup guardrails |  | Adds guardrail checks that verify backups are enabled and completed before an Apigee Hybrid upgrade can proceed. |
| 2024-10-04 | Apigee Hybrid analytics and debug data pipeline for data residency |  | Requires data residency-enabled hybrid organizations on v1.13.x to use the new control-plane analytics and debug data pipeline and enables it through control plane access and overrides configuration. |
| 2024-10-04 | Automatic Cassandra credential rotation in HashiCorp Vault |  | Adds support for automatic rotation of Cassandra credentials when credentials are stored in HashiCorp Vault. |
| 2024-08-23 | Apigee Operator namespace placement |  | Moves the Apigee Operator to run in the same Kubernetes namespace as other hybrid components instead of the apigee-system namespace. |
| 2024-08-23 | Apigee-watcher leader election |  | Enables leader election for the apigee-watcher component to coordinate runtime behavior with a single active replica set. |
| 2024-08-23 | External secret store support for Apigee Hybrid secrets |  | Adds support for storing additional Apigee secrets such as AX hash salt, Redis password, and encryption keys in an external secret store like HashiCorp Vault. |
| 2024-08-23 | Improved Apigee Hybrid backup and restore system |  | Introduces a new backup and restore system that removes pod exec and ClusterRole requirements, uses fewer service accounts, and replaces the apigee-cassandra-backup-utility image with apigee-hybrid-cassandra-client. |
| 2024-04-17 | apigeectl command-line tool | 2025-04-17 | Deprecates the apigeectl command-line tool for Apigee Hybrid, with support ending for v1.10 and v1.11; deprecated on 2025-04-17. |
| 2024-04-17 | Artifact Registry-hosted Java callout JAR dependencies |  | The JAR dependencies required for creating Java callouts are now securely hosted in Artifact Registry. |
| 2024-04-17 | Custom contract encryption key support for new Apigee hybrid installations |  | You can now configure a custom contractEncryptionKey when creating new Apigee hybrid installations. |
| 2024-04-17 | Hybrid proxy and target endpoint monitoring metrics suite |  | Apigee hybrid 1.12 adds a new set of metrics for monitoring both proxies and target endpoints. |
| 2024-04-17 | ProxyV2 and TargetV2 metrics suite | 2025-04-17 | Deprecates the Proxyv2 and Targetv2 metrics suite, with support ending for hybrid v1.10 and v1.11; deprecated on 2025-04-17. |
| 2024-04-17 | Runtime service creation guardrails validation |  | Hybrid 1.12 validates required conditions before allowing Runtime services to be created to help enforce guardrails. |
| 2024-04-17 | Service account key storage in HashiCorp Vault for Apigee hybrid |  | Hybrid v1.12 adds support for storing service account keys in HashiCorp Vault. |
| 2024-04-17 | Workload Identity Federation authentication for Apigee hybrid on AKS and EKS |  | Apigee hybrid now supports Workload Identity Federation for component authentication in Kubernetes environments on AKS and EKS. |
| 2023-11-17 | Advanced API Security Actions in Apigee hybrid |  | Apigee hybrid now includes the Advanced API Security Actions feature from Apigee Advance API Security. |
| 2023-11-17 | HashiCorp Vault integration for Cassandra credentials in Apigee hybrid |  | As of v1.11.0, Apigee hybrid supports storing Cassandra credentials in HashiCorp Vault, with this integration available as a preview feature. |
| 2023-11-17 | HeaderName support for Authentication bearer token header customization |  | Apigee hybrid adds the HeaderName element under Authentication so ServiceCallout, ExternalCallout, and TargetEndpoint configurations can use a custom header for bearer tokens. |
| 2023-11-17 | Hybrid cluster management via Helm or apigeectl |  | Starting in v1.11.0, Apigee hybrid supports installing and managing clusters using either Helm or apigeectl, but not both simultaneously. |
| 2023-06-30 | AppGroups |  | AppGroups support in Apigee hybrid allows grouping apps managed by the same teams, with availability introduced as a preview feature in version 1.10. |
| 2023-06-30 | Automated Issue Surfacing (AIS) |  | Automated Issue Surfacing (AIS) is a new Apigee hybrid runtime tool that scans the cluster via kubectl and surfaces issues with detailed, troubleshooting-linked error messages. |
| 2023-06-30 | Environment-level scaling for Apigee hybrid components |  | Apigee hybrid added environment-specific scaling controls in overrides.yaml, including replica count settings for Runtime, Synchronizer, and UDCA per environment. |
| 2023-06-30 | Pre-install cluster readiness check job for Apigee hybrid |  | Starting in v1.10, Apigee hybrid provides a pre-install Cluster Check Kubernetes job to validate cluster readiness before runtime installation. |
| 2023-02-01 | CSI backup and restore |  | CSI backup and restore enables encrypted cloud-storage snapshots of hybrid data using Container Storage Interface snapshots. |
| 2023-02-01 | Custom Apigee Ingress access log formats |  | Apigee hybrid introduced custom log formats for Apigee Ingress access logs to support configurable log output. |
| 2023-02-01 | Customer-installed Anthos Service Mesh | 2023-02-01 | Support for customer-installed Anthos Service Mesh in Apigee hybrid was deprecated, with Apigee Ingress gateway becoming the supported ingress option; deprecated on 2023-02-01. |
| 2023-02-01 | Kubernetes network policies for Cassandra and Redis |  | New Kubernetes network policies were added to secure Cassandra and Redis pods inside Apigee hybrid clusters. |
| 2023-02-01 | Per-virtual-host ingress gateway targeting |  | Apigee hybrid allows mapping separate Apigee Ingress gateways to specific virtual hosts for more granular traffic routing and isolation. |
| 2022-08-22 | Apigee hybrid Anthos Service Mesh version support (1.13) |  | Apigee hybrid 1.8 added support for Anthos Service Mesh version 1.13 on supported platforms. |
| 2022-08-22 | Apigee hybrid Anthos version support (1.12) |  | Apigee hybrid 1.8 added support for Anthos version 1.12 on supported platforms. |
| 2022-08-22 | Apigee hybrid Kubernetes version support (1.23) |  | Apigee hybrid 1.8 added support for Kubernetes version 1.23 on supported platforms. |
| 2022-08-22 | Apigee ingress gateway |  | Apigee hybrid 1.8 adds an ingress gateway feature to manage ingress for a hybrid installation without requiring Anthos Service Mesh. |
| 2022-08-22 | apigee-pull-push.sh --list option |  | The tools/apigee-pull-push.sh utility now supports a --list (-l) option to list all images in the GCR repository. |
| 2022-08-22 | apigeectl --v verbosity option |  | Apigee hybrid added the apigeectl --v option to control log verbosity, matching kubectl's verbosity flag format. |
| 2022-08-22 | apigeectl --verbose option | 2022-08-22 | The apigeectl --verbose option has been deprecated and superseded by the --v verbosity option; deprecated on 2022-08-22. |
| 2022-08-22 | KVM pagination |  | KVM CRUD APIs in Apigee hybrid gained pagination support for key value map operations. |
| 2022-08-22 | Organization-level UDCA |  | Apigee hybrid added support for configuring UDCA at the organization level instead of only at the environment level. |
| 2022-04-18 | Apigee Deployer IAM role | 2022-12-02 | The Apigee Deployer IAM role was deprecated and replaced by the Apigee Environment Admin role; deprecated on 2022-12-02. |
| 2022-04-18 | Custom metrics scaling |  | Apigee hybrid v1.7.0 introduces custom metrics scaling via the metrics:appStackdriverExporter and metrics:proxyStackdriverExporter configuration properties. |
| 2022-04-18 | GraphQL policy JSON payload support |  | The GraphQL policy now supports JSON-encoded payloads. |
| 2022-04-18 | MessageLogging Cloud Logging support |  | Apigee hybrid v1.7.0 adds Cloud Logging support to the MessageLogging policy element. |
| 2022-04-18 | mTLS for Cassandra client-node communication |  | Apigee hybrid now supports mTLS between Cassandra clients (MART, Sync, and MP) and Cassandra nodes. |
| 2022-04-18 | OAuthV2 JWT access token support |  | Apigee hybrid v1.7.0 adds OAuthV2 JWT operations to generate, verify, and refresh JWT-compliant access tokens. |
| 2022-04-18 | PublishMessage policy |  | Apigee hybrid v1.7.0 adds the PublishMessage policy, allowing API proxy flows to publish messages to Google Cloud Pub/Sub. |

Source file slug: `apigee-hybrid.md`

