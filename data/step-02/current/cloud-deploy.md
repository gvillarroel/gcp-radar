# Cloud Deploy

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 42
Unique features: 47

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-23 | Cloud Deploy custom target types |  | Cloud Deploy now supports defining custom target types through user-defined actions; Cloud Deploy now supports defining custom target types and deploying to targets of those types. |
| 2026-03-23 | Cloud Deploy deploy hooks |  | Cloud Deploy now supports deploy hooks as part of task-based deployment actions; Cloud Deploy now supports preview deploy hooks to run custom actions before and/or after deployment. |
| 2026-03-23 | Cloud Deploy deployment analysis |  | Cloud Deploy now supports deployment analysis actions as part of custom task workflows. |
| 2026-03-23 | Cloud Deploy deployment verification |  | Cloud Deploy now supports deployment verification actions through user-defined tasks. |
| 2026-03-23 | Cloud Deploy performance monitoring and rollback automation |  | Cloud Deploy now supports monitoring deployed application performance with external platforms and automatically triggering rollback actions. |
| 2026-03-23 | Cloud Deploy user-defined actions |  | Cloud Deploy now supports user-defined actions implemented using tasks. |
| 2026-03-02 | Cloud Deploy regional availability in asia-southeast3 |  | Cloud Deploy is now available in the asia-southeast3 (Bangkok) region. |
| 2026-02-11 | Cloud Deploy containerized deployments to Cloud Run worker pools |  | Cloud Deploy now supports deploying containerized workloads to Cloud Run worker pools. |
| 2025-09-02 | Cloud Deploy custom organization policy constraints |  | Cloud Deploy now supports using custom Organization Policy constraints for additional control of selected Cloud Deploy resources. |
| 2025-01-13 | Cloud Deploy GKE DNS endpoint connectivity |  | Cloud Deploy now supports connecting to GKE clusters via DNS-based endpoints for private clusters. |
| 2024-11-20 | Cloud Deploy scheduled release promotion |  | Cloud Deploy now supports automatically promoting releases across targets at scheduled times. |
| 2024-10-16 | Cloud Deploy automatic rollback to latest successful rollout |  | Cloud Deploy now automatically rolls back to the most recent successful rollout. |
| 2024-10-16 | Cloud Deploy automatic rollout retry |  | Cloud Deploy now automatically retries failed rollouts. |
| 2024-10-10 | Cloud Deploy rollout blocking windows |  | Cloud Deploy now allows blocking rollouts during specified time windows using deploy policies. |
| 2024-06-28 | and kubectl |  | Cloud Deploy now supports setting debug-equivalent logging verbosity for Skaffold, gcloud, and kubectl in each target execution environment. |
| 2024-06-28 | Cloud Deploy per-target verbose logging for Skaffold |  | Cloud Deploy now supports setting debug-equivalent logging verbosity for Skaffold, gcloud, and kubectl in each target execution environment. |
| 2024-06-28 | gcloud |  | Cloud Deploy now supports setting debug-equivalent logging verbosity for Skaffold, gcloud, and kubectl in each target execution environment. |
| 2024-06-27 | Cloud Deploy deployment via GKE proxy |  | Cloud Deploy now supports deploying to Google Kubernetes Engine targets through a proxy. |
| 2023-12-18 | Cloud Deploy sample custom targets |  | Cloud Deploy adds access to sample custom target integrations, including Terraform, Infrastructure Manager, GitOps, Vertex AI, and Helm. |
| 2023-11-16 | Cloud Deploy release render failure alerts |  | Cloud Deploy now supports configuring alerts for release render failures. |
| 2023-11-13 | Cloud Deploy delivery pipeline automation |  | Cloud Deploy now supports delivery pipeline automation in preview, including automated release promotion and automated rollout phase advancement. |
| 2023-11-08 | Cloud Deploy Cloud Operations alerts configuration |  | Cloud Deploy now supports configuring Google Cloud Operations Suite alerts in the Cloud Deploy console. |
| 2023-10-23 | Cloud Deploy Cloud Run job deployments |  | Cloud Deploy can now deploy Cloud Run jobs in addition to Cloud Run services. |
| 2023-07-24 | Cloud Deploy console resource creation |  | Cloud Deploy now supports creating delivery pipelines, targets, and releases directly in the Google Cloud console. |
| 2023-07-24 | Cloud Deploy routeUpdateWaitTime for Gateway API canary deployments |  | Cloud Deploy now allows configuration of routeUpdateWaitTime for HTTPRoute propagation in GKE/Anthos Gateway API canary deployments. |
| 2023-07-17 | Cloud Deploy deploy parameters for manifests |  | Cloud Deploy now supports passing deploy parameters to manifests at the pipeline, target, and release levels (preview). |
| 2023-06-22 | Cloud Deploy canary overprovisioning prevention |  | Cloud Deploy now can prevent overprovisioning of GKE and Anthos pods during canary deployments. |
| 2023-05-16 | Cloud Deploy release security insights for container images |  | Cloud Deploy now shows security insights for container images on the release details page. |
| 2023-05-05 | Cloud Deploy in-cluster deployment verification |  | Cloud Deploy now supports deployment verification in the same cluster where the application is running for GKE and Anthos. |
| 2023-04-04 | Canary deployment strategy |  | Cloud Deploy added support for canary deployment strategies. |
| 2023-03-06 | Parallel deployment to multiple targets |  | Cloud Deploy added the ability to deploy to multiple targets simultaneously. |
| 2022-09-22 | Deployment verification |  | Cloud Deploy added support for verifying deployments. |
| 2022-09-13 | Cloud Run deployment target |  | Cloud Deploy added support for deploying applications to Cloud Run. |
| 2022-07-27 | Skaffold configuration generation for releases |  | Cloud Deploy added automatic generation of a skaffold.yaml file when creating a release from a Kubernetes manifest. |
| 2022-07-25 | Release configuration file comparison in Cloud Console |  | Cloud Deploy added the ability to view and compare Kubernetes and Skaffold configuration files for releases in the Google Cloud Console. |
| 2022-07-11 | Delivery pipeline suspension |  | Cloud Deploy added support for suspending a delivery pipeline. |
| 2022-07-11 | Permanent release abandonment |  | Cloud Deploy added the ability to permanently abandon a release. |
| 2022-06-03 | Cloud Deploy regional availability in Australia Southeast (Sydney) |  | Cloud Deploy added availability in the australia-southeast1 (Sydney) region. |
| 2022-05-10 | Configurable Cloud Build operation timeout |  | Cloud Deploy added the ability to change the timeout for Cloud Build operations. |
| 2022-02-28 | Anthos user cluster deployment target |  | Cloud Deploy added support for deploying applications to Anthos user clusters. |
| 2022-01-19 | Target rollback from delivery pipeline visualization |  | Cloud Deploy added the ability to roll back targets directly from the delivery pipeline visualization in Google Cloud Console. |
| 2022-01-17 | Automatic provenance labels for deployed resources |  | Cloud Deploy now automatically applies provenance labels to deployed resources. |
| 2022-01-12 | Cloud Deploy console deployment metrics |  | Cloud Deploy now provides deployment metrics on the Google Cloud Deploy page in Google Cloud Console. |
| 2022-01-12 | Cloud Deploy contextual documentation links |  | The Google Cloud Deploy page now shows a list of relevant documentation, including tutorials, via the Learn button for the current screen. |
| 2021-09-15 | promoteRelease API | 2021-09-15 | The promoteRelease API was removed, and release promotion must use releases.rollouts.create instead; deprecated on 2021-09-15. |
| 2021-08-20 | Configurable custom execution environments |  | Cloud Deploy now supports configuring custom execution environments for render and deploy activity, including custom pools, service accounts, and Cloud Storage buckets. |
| 2021-08-11 | Shared deployment targets |  | Cloud Deploy allows deployment targets to be shared across multiple delivery pipelines. |

Source file slug: `cloud-deploy.md`

