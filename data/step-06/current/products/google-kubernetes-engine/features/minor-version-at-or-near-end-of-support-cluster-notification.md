---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.713Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Minor version at or near end of support cluster notification"
feature_slug: "minor-version-at-or-near-end-of-support-cluster-notification"
latest_feature_date: "2025-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "minor"
  - "version"
  - "near"
  - "end"
  - "cluster"
  - "notification"
  - "warns"
  - "when"
---

# Minor version at or near end of support cluster notification

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This notification warns when a cluster is running a minor version that is at or near the end of support.

## Extended Definition

This notification warns when a cluster is running a minor version that is at or near the end of support.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Configure cluster notifications for third-party services \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack)
- Source ID: `site-docs-reference-required-5`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Slack notification is similar to the following: Master is upgrading to version 1.20.10-gke.301. cluster location: us-central1 cluster name: pubsub-cluster payload: {"resourceType":"MASTER", "operation":"operation-1632775054313-45128f4f", "operationStartTime":"2021-09-27T20:37:34.313742491Z", "currentVersion":"1.20.9-gke.1001", "targetVersion":"1.20.10-gke.301"} project id: 729788050015 type url: type.googleapis.com/google.container.v1beta1.UpgradeEvent Note: You will not receive a notification if you chose to ignore the UpgradeEvent notification type when setting up your cluster notifications.
- Deploy the Cloud Run function You can deploy the Cloud Run function using either the Google Cloud CLI or the Google Cloud console. gcloud To deploy the function, run the following command in the gke slack directory: gcloud functions deploy slackNotifier \ --gen2 \ --trigger-topic = TOPIC NAME \ --runtime = nodejs24 \ --entry-point = slackNotifier \ --region = REGION \ --source = . \ --set-env-vars = "SLACK WEBHOOK= WEBHOOK URL " Replace the following: TOPIC NAME : the name of the Pub/Sub topic you created when enabling cluster notifications .
- When GKE sends a cluster notification to Pub/Sub (the event), the function sends a message (the trigger) to the webhook URL, which in turn sends the message to the configured Slack workspace.
- Write the Cloud Run function When GKE publishes a cluster notification to a Pub/Sub topic, the event triggers Cloud Run functions to send a Slack notification.

### "Configure clusters to receive notifications via email \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email)
- Source ID: `site-docs-reference-required-5`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the following example script as a template for the message body when notifications are sent from your cluster: local message data = std . extVar ( "message data" ); local cluster name = std . extVar ( "cluster name" ); local project id = std . extVar ( "project id" ); local cluster location = std . extVar ( "cluster location" ); local type url = std . extVar ( "type url" ); local payload = std . extVar ( "payload" ); { full message : "Project ID: " + project id + "\n" + "Cluster Name: " + cluster name + "\n" + "Location: " + cluster location + "\n" + "Event Type: " + type url + "\n" + "Message: " + message data + "\n" + "Payload: " + std . manifestJson ( std . parseJson ( payload ))} Close the Data Mapping Editor once your mapping is complete.
- You can use the following sample Pub/Sub message in the Add a json value section: { "data" : "Node pool projects/my-project/locations/us-central1-c/clusters/cluster-1/nodePools/default-pool is upgrading to version 1.29.1-gke.1589017." , "attributes" : { "cluster location" : "us-central1-c" , "cluster name" : "cluster-1" , "payload" : "{\"resourceType\":\"NODE POOL\",\"operation\":\"operation-upgrade\",\"operationStartTime\":\"2024-05-07T20:09:35.528855756Z\",\"currentVersion\":\"1.28.7-gke.1026000\",\"targetVersion\":\"1.29.1-gke.1589017\",\"resource\":\"projects/my-project/locations/us-central1-c/clusters/cluster-1/nodePools/default-pool\"}" , "project id" : "my-project" , "type url" : "type.googleapis.com/google.container.v1beta1.UpgradeEvent" } } An email is sent to the email address that you have configured in the Send Email task after clicking the Test Integration button.
- Required roles To ensure that service-PROJECT NUMBER@gcp-sa-integrations.iam.gserviceaccount.com has the necessary permissions to set up email notifications for cluster notifications, ask your administrator to grant the following IAM roles to service-PROJECT NUMBER@gcp-sa-integrations.iam.gserviceaccount.com on your project: Important: You must grant these roles to service-PROJECT NUMBER@gcp-sa-integrations.iam.gserviceaccount.com, not to your user account.
- Pub/Sub Editor ( roles/pubsub.editor ) Application Integration Editor ( roles/integrations.editor ) Setup cluster notifications for your GKE cluster To use Pub/Sub to receive notifications about your GKE cluster, follow Receive cluster notifications through Pub/Sub .

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.
- Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. workloadIdentityConfig object ( WorkloadIdentityConfig ) Configuration for the use of Kubernetes Service Accounts in IAM policies. meshCertificates object ( MeshCertificates ) Configuration for issuance of mTLS keys and certificates to Kubernetes pods. costManagementConfig object ( CostManagementConfig ) Configuration for the fine-grained cost management feature. notificationConfig object ( NotificationConfig ) Notification configuration of the cluster. confidentialNodes object ( ConfidentialNodes ) Configuration of Confidential Nodes.
- UserManagedKeysConfig JSON representation { "clusterCa" : string , "etcdApiCa" : string , "etcdPeerCa" : string , "serviceAccountSigningKeys" : [ string ] , "serviceAccountVerificationKeys" : [ string ] , "aggregationCa" : string , "controlPlaneDiskEncryptionKey" : string , "controlPlaneDiskEncryptionKeyVersions" : [ string ] , "gkeopsEtcdBackupEncryptionKey" : string } Fields clusterCa string The Certificate Authority Service caPool to use for the cluster CA in this cluster. etcdApiCa string Resource path of the Certificate Authority Service caPool to use for the etcd API CA in this cluster. etcdPeerCa string Resource path of the Certificate Authority Service caPool to use for the etcd peer CA in this cluster. serviceAccountSigningKeys[] string The Cloud KMS cryptoKeyVersions to use for signing service account JWTs issued by this cluster.
- Resource usage export is disabled when this config is unspecified. authenticatorGroupsConfig object ( AuthenticatorGroupsConfig ) Configuration controlling RBAC group membership information. privateClusterConfig object ( PrivateClusterConfig ) Configuration for private cluster. databaseEncryption object ( DatabaseEncryption ) Configuration of etcd encryption. verticalPodAutoscaling object ( VerticalPodAutoscaling ) Cluster-level Vertical Pod Autoscaling configuration. shieldedNodes object ( ShieldedNodes ) Shielded Nodes configuration. releaseChannel object ( ReleaseChannel ) Release channel configuration.

