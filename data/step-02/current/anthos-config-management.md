# Anthos Config Management

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 128
Unique features: 135

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-08-21 | Config Sync support for Secure Source Manager Git repositories |  | Config Sync now supports syncing configuration from Secure Source Manager Git repositories. |
| 2025-05-01 | nomos vet object threshold validation |  | The nomos vet command now supports a --threshold flag to validate repository object counts and prevent sync failures from etcd size limits. |
| 2025-05-01 | RootSync and RepoSync deletion metadata cleanup |  | Deleting a RootSync or RepoSync now removes its management metadata from managed objects so resources can be adopted by other managers. |
| 2024-12-05 | Config Sync custom OCI signature verification |  | Config Sync now supports custom signature verification for OCI repository-based configurations through an admission webhook. |
| 2024-12-05 | Config Sync stopSyncing field |  | Config Sync introduces the spec.configSync.stopSyncing field to pause and resume syncing behavior. |
| 2024-09-26 | Config Sync GitHub App authentication |  | Config Sync now supports GitHub App authentication for connecting to GitHub repositories. |
| 2024-08-29 | Config Sync Kustomize directory rendering beyond root |  | Config Sync can load files from directories outside the Kustomize root during rendering. |
| 2024-08-29 | Config Sync private registry image synchronization |  | Config Sync now automatically detects private registry settings and updates reconciler image references to private registry images. |
| 2024-08-29 | Config Sync watch filtering with ApplySet labels |  | Config Sync uses ApplySet labels and annotations for watch filtering to reduce reconciler Deployment memory usage. |
| 2024-05-02 | Config Sync CA certificate configuration for Helm and OCI sources |  | Config Sync now supports specifying CA certificates for Helm and OCI source types through caCertSecretRef on RootSync and RepoSync resources. |
| 2024-03-21 | Config Sync constraint template K8sPSSRunAsNonRoot |  | The Constraint Template Library added the K8sPSSRunAsNonRoot template. |
| 2024-02-22 | Config Sync Cloud Monitoring export simplification |  | Config Sync now simplifies exporting metrics to Cloud Monitoring. |
| 2024-02-22 | K8sCronJobAllowedRepos constraint template |  | Added the K8sCronJobAllowedRepos constraint template to the Constraint Template Library. |
| 2024-02-22 | K8sRestrictAdmissionController constraint template |  | Added the K8sRestrictAdmissionController constraint template to the Constraint Template Library. |
| 2024-02-22 | k8sserviceaccount authentication for OCI and Helm sync |  | Added support for the k8sserviceaccount authentication type when syncing OCI images and Helm charts hosted in Artifact Registry. |
| 2024-01-25 | K8sDisallowInteractiveTTY constraint template |  | Added the K8sDisallowInteractiveTTY constraint template to the Constraint Template Library. |
| 2023-12-11 | K8sRequireAdmissionController constraint template |  | Added the K8sRequireAdmissionController constraint template to the Constraint Template Library. |
| 2023-12-11 | known_hosts support for SSH in RootSync and RepoSync |  | Added known_hosts support for Git connections over SSH in the RootSync and RepoSync APIs. |
| 2023-12-11 | NamespaceSelector CRD spec.mode field |  | Added the NamespaceSelector CRD field spec.mode as a preview feature to select namespace-scoped resources from both declared and dynamic cluster namespaces. |
| 2023-12-11 | RootSync spec.override.namespaceStrategy field |  | Added the RootSync API field spec.override.namespaceStrategy to control implicit namespace creation behavior for missing Namespace configs. |
| 2023-12-11 | RootSync spec.override.roleRefs field |  | Added the RootSync API field spec.override.roleRefs to allow customizing root reconciler permissions beyond cluster-admin. |
| 2023-10-19 | K8sAvoidUseOfSystemMastersGroup constraint template |  | Added the K8sAvoidUseOfSystemMastersGroup constraint template to the Constraint Template Library. |
| 2023-10-19 | K8sPSPWindowsHostProcess constraint template |  | Added the K8sPSPWindowsHostProcess constraint template to the Constraint Template Library. |
| 2023-08-21 | Config Sync Helm chart version ranges |  | Config Sync now supports specifying RootSync and RepoSync spec.helm.version as a version range so the controller can pull the latest matching Helm chart version. |
| 2023-08-21 | Config Sync metrics Cloud Monitoring service account email field |  | Config Sync adds the spec.configSync.metricsGcpServiceAccountEmail field in the gcloud apply spec to simplify exporting cluster metrics to Cloud Monitoring with Workload Identity. |
| 2023-08-21 | configsync.gke.io/deletion-propagation-policy annotation |  | Added a preview configsync.gke.io/deletion-propagation-policy annotation for RootSync and RepoSync to configure foreground cascading deletion. |
| 2023-08-21 | Policy Controller NIST SP 800-190 bundle |  | Policy Controller adds the new nist-sp-800-190 policy bundle to its constraint template library. |
| 2023-08-21 | Policy Controller NIST SP 800-53-r5 bundle |  | Policy Controller adds the new nist-sp-800-53-r5 policy bundle to its constraint template library. |
| 2023-08-21 | Policy Controller NSA-CISA Kubernetes v1.2 bundle |  | Policy Controller adds the new nsa-cisa-k8s-v1.2 policy bundle to its constraint template library. |
| 2023-08-21 | RootSync and RepoSync Helm values file references |  | RootSync and RepoSync now support spec.helm.valuesFileRefs to specify Helm values files stored in ConfigMaps. |
| 2023-08-21 | RootSync and RepoSync reconciler log level override |  | RootSync and RepoSync now support a spec.override.logLevels field for configuring reconciler Pod container logging levels. |
| 2023-07-27 | Policy Controller template GkeSpotVMTerminationGrace |  | The Policy Controller constraint template library includes a new GkeSpotVMTerminationGrace template. |
| 2023-07-27 | Policy Controller template K8sPodResourcesBestPractices |  | The Policy Controller constraint template library includes a new K8sPodResourcesBestPractices template. |
| 2023-06-28 | Policy Controller template K8sRequireBinAuthZ |  | The Policy Controller constraint template library includes a new K8sRequireBinAuthZ template. |
| 2023-06-28 | Policy Controller template K8sRestrictAutomountServiceAccountTokens |  | The Policy Controller constraint template library includes a new K8sRestrictAutomountServiceAccountTokens template. |
| 2023-06-28 | Policy Controller template K8sRestrictRoleRules |  | The Policy Controller constraint template library includes a new K8sRestrictRoleRules template. |
| 2023-05-25 | Policy Controller template K8sHorizontalPodAutoscaler |  | The Policy Controller constraint template library includes a new K8sHorizontalPodAutoscaler template. |
| 2023-05-25 | RootSync Helm deploy namespace field |  | RootSync now supports the spec.helm.deployNamespace field to specify the namespace where the rendered Helm chart is deployed. |
| 2023-05-05 | ConfigManagement spec.git fields | 2024-05-15 | The `spec.git` fields on the ConfigManagement object were deprecated and are scheduled for shutdown on or after May 15, 2024; deprecated on 2024-05-15. |
| 2023-05-04 | Config Sync metric labels |  | Config Sync added new metric labels `commit` and `type` to make it easier to identify when errors are resolved. |
| 2023-05-04 | K8sContainerEphemeralStorageLimit constraint template |  | The Constraint Template Library added a new template named `K8sContainerEphemeralStorageLimit`. |
| 2023-05-04 | K8sDisallowedRepos constraint template |  | The Constraint Template Library added a new template named `K8sDisallowedRepos`. |
| 2023-05-04 | K8sRestrictNfsUrls constraint template |  | The Constraint Template Library added a new template named `K8sRestrictNfsUrls`. |
| 2023-05-04 | nomos status --name flag |  | The `nomos status` command added a `--name` flag to filter status output by RootSync or RepoSync name. |
| 2023-03-23 | AssignImage mutator |  | The `AssignImage` mutator was introduced in alpha to allow mutation of Docker image paths. |
| 2023-03-23 | VerifyDeprecatedAPI constraint template |  | The Constraint Template Library added a new template named `VerifyDeprecatedAPI`. |
| 2022-12-08 | Config Sync apply_operations controller label |  | Config Sync apply_operations metrics now include a controller label to indicate whether the operation is from the applier or the remediator. |
| 2022-12-08 | Config Sync last_sync_timestamp metric |  | Config Sync improved the last_sync_timestamp metric to prevent timeseries entries with empty commits. |
| 2022-12-08 | Config Sync metric resource tags |  | Config Sync now adds resource tags to all metrics to identify the source component. |
| 2022-12-08 | Config Sync parser/apply duration histogram bounds |  | Config Sync metrics now use expanded histogram distribution bounds for parser_duration_seconds and apply_duration_seconds to support longer durations. |
| 2022-12-08 | Config Sync reconciler_errors errorclass label |  | Config Sync now correctly supports the errorclass label on reconciler_errors metrics. |
| 2022-12-08 | K8sBlockAllIngress constraint template |  | The Constraint Template Library added the K8sBlockAllIngress template. |
| 2022-12-08 | K8sBlockCreationWithDefaultServiceAccount constraint template |  | The Constraint Template Library added a new template named `K8sBlockCreationWithDefaultServiceAccount`. |
| 2022-12-08 | K8sBlockObjectsOfType constraint template |  | The Constraint Template Library added the K8sBlockObjectsOfType template. |
| 2022-12-08 | K8sEnforceCloudArmorBackendConfig constraint template |  | The Constraint Template Library added a new template named `K8sEnforceCloudArmorBackendConfig`. |
| 2022-12-08 | K8sEnforceConfigManagement constraint template |  | The Constraint Template Library added the K8sEnforceConfigManagement template. |
| 2022-12-08 | K8sRequireDaemonsets constraint template |  | The Constraint Template Library added the K8sRequireDaemonsets template. |
| 2022-12-08 | K8sRequireDefaultDenyEgressPolicy constraint template |  | The Constraint Template Library added the K8sRequireDefaultDenyEgressPolicy template. |
| 2022-12-08 | K8sRequireValidRangesForNetworks constraint template |  | The Constraint Template Library added a new template named `K8sRequireValidRangesForNetworks`. |
| 2022-12-08 | K8sRestrictRbacSubjects constraint template |  | The Constraint Template Library added the K8sRestrictRbacSubjects template. |
| 2022-12-08 | RootSync and RepoSync apiServerTimeout field |  | A new `spec.override.apiServerTimeout` field was added to `RootSync` and `RepoSync` to set API server request timeouts. |
| 2022-10-27 | K8sBlockLoadBalancer constraint template |  | The Constraint Template Library added the K8sBlockLoadBalancer template. |
| 2022-10-27 | RootSync and RepoSync Helm values override |  | RootSync and RepoSync now support the spec.helm.values field for overriding default Helm chart values. |
| 2022-09-15 | Cloud Console Config Sync fleet sync status view |  | The Google Cloud Console now shows sync status for all fleet-registered syncs and supports drill-down to resource-level reconciliation status. |
| 2022-09-15 | Config Sync private Helm repository sync (preview) |  | Config Sync supports syncing from private Helm repositories, including OCI-based repositories, as a preview feature. |
| 2022-09-15 | Config Sync user-provided Git CA certificates |  | Config Sync now allows users to provide their own CA certificates to verify HTTPS connections to Git servers. |
| 2022-09-15 | K8sStorageClass constraint template |  | The Constraint Template Library added the K8sStorageClass template (available in Anthos Config Management 1.12.1+). |
| 2022-07-21 | K8sRequireCosNodeImage constraint template |  | The constraint template library now includes the K8sRequireCosNodeImage template. |
| 2022-06-30 | Config Sync OCI image configuration sync (preview) |  | Config Sync supports syncing configurations stored as OCI images in Artifact Registry or Container Registry as a preview feature. |
| 2022-06-30 | K8sRequiredResources constraint template |  | The constraint template library now includes the K8sRequiredResources template. |
| 2022-06-30 | RootSync and RepoSync reconcile timeout override |  | Added the spec.override.reconcileTimeout field in RootSync and RepoSync to set the reconciliation timeout for an apply group. |
| 2022-04-21 | Config Sync hidden Git metadata directory ignore list |  | Config Sync now ignores the .github and .gitlab hidden directories and the .gitlab-ci.yml hidden file. |
| 2022-04-21 | Fleet Workload Identity Git authentication for Config Sync |  | Config Sync now supports using Fleet Workload Identity to authenticate to Git repositories in Cloud Source Repositories. |
| 2022-04-21 | nomos bugreport --timeout flag |  | Added a --timeout option to the nomos bugreport command to control the cluster connection timeout. |
| 2022-03-24 | Config Sync dependency enforcement for reconciliations |  | Adds dependency enforcement so Config Sync skips applying resources until all declared dependencies are successfully applied and reconciled. |
| 2022-03-24 | config.kubernetes.io/depends-on annotation ordering |  | Introduces the config.kubernetes.io/depends-on annotation to control the apply and delete ordering of managed resources. |
| 2022-03-24 | Multiple RootSync and RepoSync objects support |  | Config Sync now supports multiple RootSync objects on a single cluster and multiple RepoSync objects in the same namespace. |
| 2022-03-24 | Nomos CLI ARM64 binaries |  | Nomos CLI ARM64 binaries for Linux and macOS are now available via gcloud and included in Anthos Config Management downloads. |
| 2022-03-24 | ResourceGroup inventory actuation and reconciliation status fields |  | ResourceGroup inventory objects now include fields for actuation status, reconciliation status, and intended actuation strategy. |
| 2022-03-24 | RootSync/RepoSync resource request override |  | Updates RootSync and RepoSync spec.override.resources to let operators override default CPU and memory requests used by reconciler deployment containers. |
| 2022-02-24 | Constraint template K8sDisallowAnonymous |  | Adds the K8sDisallowAnonymous constraint template to the template library. |
| 2022-02-24 | Constraint template K8sPSPAutomountServiceAccountTokenPod |  | Adds the K8sPSPAutomountServiceAccountTokenPod constraint template to the template library. |
| 2022-02-24 | Constraint template RestrictNetworkExclusions |  | Adds the RestrictNetworkExclusions constraint template to the template library. |
| 2021-12-09 | nomos migrate command for RootSync/RepoSync API enablement |  | Enables enabling the RootSync and RepoSync APIs through nomos migrate, allowing synchronization from single or multiple repositories. |
| 2021-12-09 | nomos status resource condition reporting |  | Enhances nomos status to surface messages from resource conditions when managed resources are not ready or healthy. |
| 2021-12-09 | pipeline_error_observed metric |  | Adds the metric pipeline_error_observed to report errors across rendering, sync, source, and readiness stages. |
| 2021-09-23 | Config Sync multi-repo Kustomize/Helm rendering |  | Adds support for rendering Kustomize configurations and Helm charts in multi-repo mode, requiring a root kustomization.yaml file in the sync directory. |
| 2021-09-23 | local-config annotation handling in Config Sync |  | Config Sync now ignores resources annotated with config.kubernetes.io/local-config: "true" during validation and apply. |
| 2021-09-23 | nomos hydrate rendering support for Kustomize and Helm |  | Enables nomos hydrate to render unstructured source and support rendering for Kustomize configurations and Helm charts. |
| 2021-09-23 | nomos vet rendering and keep-output support |  | Adds rendering support for Kustomize and Helm in nomos vet, including a --keep-output flag to retain rendered output. |
| 2021-08-26 | Anthos Policy Controller OPA Gatekeeper version update |  | Anthos Policy Controller was updated to include a newer OPA Gatekeeper build (07e2fd0); Anthos Policy Controller was updated to include a newer OPA Gatekeeper build (f6c2fe8). |
| 2021-08-26 | Config Sync git-creds proxy credential storage |  | Config Sync added support for storing HTTPS/HTTP proxy credentials in the git-creds Secret using https_proxy or http_proxy keys. |
| 2021-08-26 | RootSync/RepoSync gitSyncDepth override |  | Adds spec.override.gitSyncDepth for RootSync and RepoSync to control how many Git commits are fetched. |
| 2021-08-26 | RootSync/RepoSync noSSLVerify option |  | Adds a spec.git.noSSLVerify setting for RootSync and RepoSync to disable Git SSL certificate verification. |
| 2021-08-26 | RootSync/RepoSync resource limit override |  | Allows RootSync and RepoSync to override reconciler and git-sync container resource limits via spec.override.resources. |
| 2021-07-01 | Anthos Config Management on Google Kubernetes Engine |  | Anthos Config Management became available on Google Kubernetes Engine. |
| 2021-07-01 | Config Sync Cloud Source Repositories access via Workload Identity |  | Config Sync now supports accessing Cloud Source Repositories through a Google service account when Workload Identity is enabled. |
| 2021-07-01 | Config Sync cluster configuration replication |  | Config Sync introduced the gcloud fetch-for-apply command to copy settings from one cluster to another. |
| 2021-07-01 | Config Sync cluster selectors with CustomResourceDefinitions |  | Config Sync cluster selectors now support Kubernetes CustomResourceDefinitions. |
| 2021-07-01 | Config Sync installation via Cloud Console and gcloud on GKE |  | GKE users can now install Config Sync using the Google Cloud Console or the gcloud command-line tool. |
| 2021-07-01 | Config Sync MultiRepo resource-level status reporting |  | The nomos status command now shows resource-level status when MultiRepo is enabled. |
| 2021-06-24 | Anthos Policy Controller resource mutation support |  | Anthos Policy Controller added preview support for users to mutate resources. |
| 2021-04-05 | Config Sync multi-repository synchronization |  | The ability to sync Config Sync data from multiple Git repositories reached general availability. |
| 2021-02-25 | Hierarchy Controller hierarchical resource quotas |  | Hierarchy Controller introduced a preview of Hierarchical Resource Quotas (HRQs) for quota enforcement across namespaces and descendants. |
| 2021-01-28 | Hierarchy Controller Exceptions |  | Hierarchy Controller added Exceptions, allowing Kubernetes label selectors to control object propagation behavior. |
| 2021-01-28 | Hierarchy Controller HNC upgrade |  | Hierarchy Controller in Anthos Config Management was upgraded to include HNC v0.7.0. |
| 2021-01-28 | Hierarchy Controller v1alpha1 API | 2021-01-28 | Support for the Hierarchy Controller v1alpha1 API was removed; deprecated on 2021-01-28. |
| 2020-12-10 | Anthos Policy Controller CIS benchmark policies |  | Anthos Policy Controller added additional policies covering many CIS Kubernetes Benchmark 1.5.1 controls. |
| 2020-12-10 | Anthos Policy Controller OPA Gatekeeper version |  | Anthos Policy Controller was updated to include a newer OPA Gatekeeper build (hash: 1de87b6); Anthos Policy Controller was updated to include a newer OPA Gatekeeper build (hash: 15d56e3). |
| 2020-10-29 | Anthos Config Management multi-repository sync |  | Anthos Config Management added preview support for syncing from multiple Git repositories. |
| 2020-09-24 | Anthos Config Management Operator Binary Authorization integration |  | Anthos Config Management Operator gained the ability to enable Binary Authorization. |
| 2020-09-24 | Config Connector inclusion in Anthos Config Management |  | Anthos Config Management added Config Connector version 1.19.1; Anthos Config Management included Config Connector version 1.13.1. |
| 2020-07-23 | Hierarchy Controller launch |  | Anthos Config Management introduced Hierarchy Controller as a beta feature. |
| 2020-06-25 | Anthos Config Management AKS and EKS support |  | Anthos Config Management became generally available on AKS and EKS clusters running Kubernetes 1.16 or higher. |
| 2020-05-21 | Config Connector version 1.8.0 support |  | Anthos Config Management added support for Config Connector version 1.8.0. |
| 2020-04-23 | Policy Controller namespace exclusion |  | Policy Controller now supports configuring namespaces that bypass the admission controller. |
| 2020-02-10 | Anthos Config Management v1.2.1 general availability |  | Anthos Config Management version 1.2.1 was released as generally available for production use. |
| 2020-02-10 | Git submodule support |  | Anthos Config Management added native support for Git repositories with submodules. |
| 2020-02-10 | nomos bugreport command |  | Anthos Config Management introduced the nomos bugreport CLI command to collect logs into a zip file for support tickets. |
| 2020-02-10 | Unstructured repository mode |  | Anthos Config Management can optionally operate with unstructured repositories, with hierarchical-namespace features disabled in that mode. |
| 2019-12-20 | Anthos Config Management v1.2.0 general availability |  | Anthos Config Management version 1.2.0 was released as generally available for production use. |
| 2019-09-19 | Anthos Config Management v1.1.0 general availability |  | Anthos Config Management version 1.1.0 was released as generally available for production use. |
| 2019-09-19 | Config Connector integration (beta) |  | Anthos Config Management added beta integration with Config Connector to synchronize GCP resources from Kubernetes configuration. |
| 2019-09-19 | nomos view command | 2019-09-19 | The nomos view command was deprecated and is not included in nomos v1.1 and later; deprecated on 2019-09-19. |
| 2019-09-19 | Policy Controller (Beta) |  | Anthos Config Management added Policy Controller (Beta), a Kubernetes admission controller for policy-based checks and enforcement. |
| 2019-06-14 | Anthos Config Management 1.0.0 availability |  | Anthos Config Management 1.0.0 was released as generally available for production use. |
| 2019-06-14 | CustomResourceDefinition synchronization |  | Anthos Config Management can synchronize Kubernetes CustomResourceDefinitions. |
| 2019-06-14 | Generic Kubernetes object synchronization |  | Anthos Config Management can now synchronize any Kubernetes object type. |
| 2019-06-14 | nomos status subcommand |  | The nomos status command now provides a top-level view of Anthos Config Management state, errors, and sync status across enrolled clusters. |
| 2019-06-14 | Pre-1.0.0 Anthos Config Management versions | 2019-06-14 | Anthos Config Management versions older than 1.0.0 are no longer available; deprecated on 2019-06-14. |
| 2019-06-14 | Synchronization speed control |  | Anthos Config Management supports pausing or slowing config synchronization to reduce unintended propagation to clusters. |
| 2019-03-29 | Default and kube-* namespace synchronization |  | Anthos Config Management can now manage the default Namespace and Namespaces with names beginning with kube-. |
| 2019-03-20 | Aggregate ResourceQuotas |  | Anthos Config Management can share a ResourceQuota across multiple Namespaces using a common abstract namespace directory. |
| 2019-03-04 | Generic Kubernetes resource syncing |  | Anthos Config Management supports syncing all Kubernetes resources generically. |
| 2019-03-04 | NamespaceSelectors support |  | Anthos Config Management now supports NamespaceSelectors. |

Source file slug: `anthos-config-management.md`

