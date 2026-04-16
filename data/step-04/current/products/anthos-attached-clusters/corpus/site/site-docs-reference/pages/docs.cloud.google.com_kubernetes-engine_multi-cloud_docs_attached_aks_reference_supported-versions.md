---
title: "Supported Kubernetes cluster versions \_|\_ GKE attached clusters \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions
  title: "Supported Kubernetes cluster versions \_|\_ GKE attached clusters \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE attached clusters
Reference
Send feedback
Supported Kubernetes cluster versions
Stay organized with collections
Save and categorize content based on your preferences.
Each GKE attached clusters release comes with Kubernetes version notes. These
are similar to release notes but are specific to a Kubernetes version
and may offer more technical detail.
GKE attached clusters supports the following Kubernetes versions:
Kubernetes 1.34
1.34.0-gke.1
Breaking Change: GKE attached clusters no longer validate that the
anthos.googleapis.com service is enabled when creating or updating a cluster.
Attached clusters are now included in the GKE Standard tier,
so this validation is no longer required.
Feature: The Connect Agent for Attached clusters now uses the svc.id.goog
workload identity pool by default. You don't need to take any action
because the agent is automatically authorized on the server side.
Security Fixes
Fixed CVE-2025-12817
Fixed CVE-2025-12818
Fixed CVE-2025-9230
Fixed CVE-2025-9232
Kubernetes 1.33
1.33.0-gke.2
Breaking Change: GKE attached clusters no longer validate that the
anthos.googleapis.com service is enabled when creating or updating a cluster.
Attached clusters are now included in the GKE Standard tier,
so this validation is no longer required.
Security Fixes
Fixed CVE-2025-12817
Fixed CVE-2025-12818
Fixed CVE-2025-9230
Fixed CVE-2025-9232
1.33.0-gke.1
Security Fixes
Fixed CVE-2025-32988
Fixed CVE-2025-32989
Fixed CVE-2025-32990
Fixed CVE-2025-3576
Fixed CVE-2025-4802
Fixed CVE-2025-6395
Fixed CVE-2025-8713
Fixed CVE-2025-8714
Fixed CVE-2025-8715
Kubernetes 1.32
1.32.0-gke.3
Breaking Change: GKE attached clusters no longer validate that the
anthos.googleapis.com service is enabled when creating or updating a cluster.
Attached clusters are now included in the GKE Standard tier,
so this validation is no longer required.
Security Fixes
Fixed CVE-2025-12817
Fixed CVE-2025-12818
Fixed CVE-2025-9230
Fixed CVE-2025-9232
1.32.0-gke.2
Security Fixes
Fixed CVE-2025-32988
Fixed CVE-2025-32989
Fixed CVE-2025-32990
Fixed CVE-2025-3576
Fixed CVE-2025-4802
Fixed CVE-2025-6395
Fixed CVE-2025-8713
Fixed CVE-2025-8714
Fixed CVE-2025-8715
1.32.0-gke.1
Feature: You can now customize Kubernetes labels and tolerations for Google-owned system components on your attached clusters. For more information see:
Customize system components on AKS clusters
Customize system components on EKS clusters
Customize system components on CNCF conformant clusters
Security Fixes
Fixed CVE-2023-4039
Fixed CVE-2024-13176
Fixed CVE-2024-26462
Fixed CVE-2025-0395
Fixed CVE-2025-1390
Fixed CVE-2025-24528
Fixed CVE-2025-31115
Fixed CVE-2025-4207
Kubernetes 1.31
1.31.0-gke.5
Security Fixes
Fixed CVE-2025-32988
Fixed CVE-2025-32989
Fixed CVE-2025-32990
Fixed CVE-2025-3576
Fixed CVE-2025-4802
Fixed CVE-2025-6395
Fixed CVE-2025-8713
Fixed CVE-2025-8714
Fixed CVE-2025-8715
1.31.0-gke.4
Feature: You can now customize Kubernetes labels and tolerations for Google-owned system components on your attached clusters. For more information see:
Customize system components on AKS clusters
Customize system components on EKS clusters
Customize system components on CNCF conformant clusters
Security Fixes
Fixed CVE-2023-4039
Fixed CVE-2024-13176
Fixed CVE-2024-26462
Fixed CVE-2025-0395
Fixed CVE-2025-1390
Fixed CVE-2025-24528
Fixed CVE-2025-31115
Fixed CVE-2025-4207
1.31.0-gke.3
Security Fixes
Fixed CVE-2020-13529
Fixed CVE-2021-33560
Fixed CVE-2022-4899
Fixed CVE-2023-5678
Fixed CVE-2024-0727
Fixed CVE-2024-12133
Fixed CVE-2024-12243
Fixed CVE-2024-2511
Fixed CVE-2024-4741
Fixed CVE-2024-5535
Fixed CVE-2024-9143
Fixed CVE-2025-1094
1.31.0-gke.2
Security Fixes
Fixed CVE-2024-10976
Fixed CVE-2024-10977
Fixed CVE-2024-10978
Fixed CVE-2024-10979
1.31.0-gke.1
Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: anthos.googleapis.com . For details, see Google Cloud requirements .
Feature: The gcloud beta container fleet memberships get-credentials command
uses a preview feature of the Connect gateway that lets you run the kubectl port-forward command. For more information, see
Limitations
in the Connect gateway documentation.
Feature: Added the option to disable Cloud Monitoring. In the API, set
cluster.monitoring_config.cloud_monitoring_config.enabled to false to
disable Cloud Monitoring. Note that you can't use the Metrics Explorer
when Cloud Monitoring is disabled.
Security Fixes
Fixed CVE-2019-18276
Fixed CVE-2020-1751
Fixed CVE-2023-39318
Fixed CVE-2023-39319
Fixed CVE-2023-39323
Fixed CVE-2023-39325
Fixed CVE-2023-39326
Fixed CVE-2023-3978
Fixed CVE-2023-40577
Fixed CVE-2023-44487
Fixed CVE-2023-45142
Fixed CVE-2023-45285
Fixed CVE-2023-45288
Fixed CVE-2023-45918
Fixed CVE-2023-48795
Fixed CVE-2024-24557
Fixed CVE-2024-24786
Fixed CVE-2024-24789
Fixed CVE-2024-24790
Fixed CVE-2024-29018
Fixed CVE-2024-33599
Fixed CVE-2024-33600
Fixed CVE-2024-33601
Fixed CVE-2024-33602
Fixed CVE-2024-41110
Fixed CVE-2024-6104
Fixed GHSA-jq35-85cj-fj4p
Fixed GHSA-m425-mq94-257g
Kubernetes 1.30
1.30.0-gke.7
Feature: You can now customize Kubernetes labels and tolerations for Google-owned system components on your attached clusters. For more information see:
Customize system components on AKS clusters
Customize system components on EKS clusters
Customize system components on CNCF conformant clusters
Security Fixes
Fixed CVE-2023-4039
Fixed CVE-2024-13176
Fixed CVE-2024-26462
Fixed CVE-2025-0395
Fixed CVE-2025-1390
Fixed CVE-2025-24528
Fixed CVE-2025-31115
Fixed CVE-2025-4207
1.30.0-gke.6
Security Fixes
Fixed CVE-2020-13529
Fixed CVE-2021-33560
Fixed CVE-2022-4899
Fixed CVE-2023-5678
Fixed CVE-2024-0727
Fixed CVE-2024-12133
Fixed CVE-2024-12243
Fixed CVE-2024-2511
Fixed CVE-2024-4741
Fixed CVE-2024-5535
Fixed CVE-2024-9143
Fixed CVE-2025-1094
1.30.0-gke.5
Security Fixes
Fixed CVE-2024-10976
Fixed CVE-2024-10977
Fixed CVE-2024-10978
Fixed CVE-2024-10979
1.30.0-gke.4
Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com . For details, see Google Cloud requirements .
1.30.0-gke.3
Breaking Change: GKE attached clusters validate that the following required services are enabled when creating
or updating attached clusters: gkeconnect.googleapis.com ,
gkehub.googleapis.com , kubernetesmetadata.googleapis.com ,
logging.googleapis.com . For details, see Google Cloud requirements .
Security Fixes:
Fixed CVE-2023-47108
Fixed CVE-2024-28834
Fixed CVE-2024-28835
Fixed CVE-2024-9143
Fixed GHSA-87m9-rv8p-rgmg
Fixed GHSA-mh55-gqvf-xfwm
1.30.0-gke.2
Security Fixes:
Fixed CVE-2023-47108
Fixed CVE-2024-7348
1.30.0-gke.1
Security Fixes:
Fixed CVE-2024-0553
Fixed CVE-2024-0567
Fixed CVE-2024-37370
Fixed CVE-2024-37371
Kubernetes 1.29
1.29.0-gke.9
Security Fixes
Fixed CVE-2020-13529
Fixed CVE-2021-33560
Fixed CVE-2022-4899
Fixed CVE-2023-5678
Fixed CVE-2024-0727
Fixed CVE-2024-12133
Fixed CVE-2024-12243
Fixed CVE-2024-2511
Fixed CVE-2024-4741
Fixed CVE-2024-5535
Fixed CVE-2024-9143
Fixed CVE-2025-1094
1.29.0-gke.8
Security Fixes
Fixed CVE-2024-10976
Fixed CVE-2024-10977
Fixed CVE-2024-10978
Fixed CVE-2024-10979
1.29.0-gke.7
Breaking Change: GKE attached clusters validate that the following required services are enabled when creating or updating attached clusters: cloudresourcemanager.googleapis.com , monitoring.googleapis.com . For details, see Google Cloud requirements .
1.29.0-gke.6
Breaking Change: GKE attached clusters validate that the following required services are enabled when creating
or updating attached clusters: gkeconnect.googleapis.com ,
gkehub.googleapis.com , kubernetesmetadata.googleapis.com ,
logging.googleapis.com . For details, see Google Cloud requirements .
Security Fixes:
Fixed CVE-2023-47108
Fixed CVE-2024-28834
Fixed CVE-2024-28835
Fixed CVE-2024-9143
Fixed GHSA-87m9-rv8p-rgmg
Fixed GHSA-mh55-gqvf-xfwm
1.29.0-gke.5
Security Fixes:
Fixed CVE-2023-47108
Fixed CVE-2024-7348
1.29.0-gke.4
Security Fixes:
Fixed CVE-2024-0553
Fixed CVE-2024-0567
Fixed CVE-2024-37370
Fixed CVE-2024-37371
1.29.0-gke.3
Security Fixes:
Fixed CVE-2023-5981
Fixed CVE-2024-0985
Fixed CVE-2024-2961
Fixed CVE-2024-33599
Fixed CVE-2024-33600
Fixed CVE-2024-33601
Fixed CVE-2024-33602
1.29.0-gke.2
Breaking Change: Starting from Kubernetes 1.29, clusters require outbound HTTPS connectivity to the domain kubernetesmetadata.googleapis.com . Please ensure that your proxy server and/or firewall configuration allows this traffic. You also need to enable the Kubernetes Metadata API, which can be enabled in the Google Cloud console .
Feature: Removed the requirement for connectivity to the domain opsconfigmonitoring.googleapis.com . This domain was previously required for logging and monitoring but is no longer needed for Kubernetes 1.29 and later. You should remove this domain from your firewall and/or proxy server configuration.
Bug Fix: Fixed an issue where the Fluentbit agent can become unresponsive and stop ingesting logs into Cloud Logging. Added a mechanism to detect and automatically restart the agent when this occurs.
1.29.0-gke.1
Breaking Change: Starting from Kubernetes 1.29, clusters require outbound HTTPS connectivity to the domain kubernetesmetadata.googleapis.com . Please ensure that your proxy server and/or firewall configuration allows this traffic. You also need to enable the Kubernetes Metadata API, which can be enabled in the Google Cloud console .
Feature: Removed the requirement for connectivity to the domain opsconfigmonitoring.googleapis.com . This domain was previously required for logging and monitoring but is no longer needed for Kubernetes 1.29 and later. You should remove this domain from your firewall and/or proxy server configuration.
Bug Fix: Fixed an issue where the Fluentbit agent can become unresponsive and stop ingesting logs into Cloud Logging. Added a mechanism to detect and automatically restart the agent when this occurs.
Kubernetes 1.28
1.28.0-gke.9
Security Fixes:
Fixed CVE-2023-47108
Fixed CVE-2024-28834
Fixed CVE-2024-28835
Fixed CVE-2024-9143
Fixed GHSA-87m9-rv8p-rgmg
Fixed GHSA-mh55-gqvf-xfwm
1.28.0-gke.8
Security Fixes:
Fixed CVE-2023-47108
Fixed CVE-2024-7348
1.28.0-gke.7
Security Fixes:
Fixed CVE-2024-0553
Fixed CVE-2024-0567
Fixed CVE-2024-37370
Fixed CVE-2024-37371
1.28.0-gke.6
Security Fixes:
Fixed CVE-2023-5981
Fixed CVE-2024-0985
Fixed CVE-2024-2961
Fixed CVE-2024-33599
Fixed CVE-2024-33600
Fixed CVE-2024-33601
Fixed CVE-2024-33602
1.28.0-gke.5
Security Fixes:
1.28.0-gke.4
Security Fixes:
1.28.0-gke.3
Security Fixes:
Fixed CVE-2023-39326 .
Fixed CVE-2023-44487 .
Fixed CVE-2023-45142 .
Fixed CVE-2023-45285 .
Fixed CVE-2023-48795 .
1.28.0-gke.2
Bug Fix: Fixed an intermittent authorization failure when using Google Groups.
1.28.0-gke.1
Breaking Change: Starting from 1.28, clusters require outbound HTTPS connectivity to {GCP_LOCATION}-gkemulticloud.googleapis.com . Ensure your proxy server and/or firewall allows for this traffic.
Feature: Removed the need to explicitly add Google IAM bindings for most features.
No longer need to add any bindings for gke-system/gke-telemetry-agent when creating a cluster.
No longer need to add any bindings for gmp-system/collector or gmp-system/rule-evaluator when enabling managed data collection for Google Managed Service for Prometheus.
No longer need to add any bindings for gke-system/binauthz-agent when enabling binary authorization.
Bug Fix: Enhanced Cloud Logging's ingestion of logs from Anthos attached clusters:
Fixed an issue in timestamp parsing.
Assigned the correct severity level to the anthos-metadata-agent 's error logs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
