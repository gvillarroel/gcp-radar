---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.189Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Upgrade operation complete cluster notification"
feature_slug: "upgrade-operation-complete-cluster-notification"
latest_feature_date: "2025-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "operation"
  - "complete"
  - "sent"
  - "notification"
  - "upgrade"
  - "cluster"
  - "when"
---

# Upgrade operation complete cluster notification

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This notification is sent when a GKE upgrade operation completes.

## Extended Definition

This notification is sent when a GKE upgrade operation completes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Configure clusters to receive notifications via email \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email)
- Source ID: `site-docs-reference-required-5`
- Final score: 205
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the following example script as a template for the message body when notifications are sent from your cluster: local message data = std . extVar ( "message data" ); local cluster name = std . extVar ( "cluster name" ); local project id = std . extVar ( "project id" ); local cluster location = std . extVar ( "cluster location" ); local type url = std . extVar ( "type url" ); local payload = std . extVar ( "payload" ); { full message : "Project ID: " + project id + "\n" + "Cluster Name: " + cluster name + "\n" + "Location: " + cluster location + "\n" + "Event Type: " + type url + "\n" + "Message: " + message data + "\n" + "Payload: " + std . manifestJson ( std . parseJson ( payload ))} Close the Data Mapping Editor once your mapping is complete.
- You can use the following sample Pub/Sub message in the Add a json value section: { "data" : "Node pool projects/my-project/locations/us-central1-c/clusters/cluster-1/nodePools/default-pool is upgrading to version 1.29.1-gke.1589017." , "attributes" : { "cluster location" : "us-central1-c" , "cluster name" : "cluster-1" , "payload" : "{\"resourceType\":\"NODE POOL\",\"operation\":\"operation-upgrade\",\"operationStartTime\":\"2024-05-07T20:09:35.528855756Z\",\"currentVersion\":\"1.28.7-gke.1026000\",\"targetVersion\":\"1.29.1-gke.1589017\",\"resource\":\"projects/my-project/locations/us-central1-c/clusters/cluster-1/nodePools/default-pool\"}" , "project id" : "my-project" , "type url" : "type.googleapis.com/google.container.v1beta1.UpgradeEvent" } } An email is sent to the email address that you have configured in the Send Email task after clicking the Test Integration button.
- Required roles To ensure that service-PROJECT NUMBER@gcp-sa-integrations.iam.gserviceaccount.com has the necessary permissions to set up email notifications for cluster notifications, ask your administrator to grant the following IAM roles to service-PROJECT NUMBER@gcp-sa-integrations.iam.gserviceaccount.com on your project: Important: You must grant these roles to service-PROJECT NUMBER@gcp-sa-integrations.iam.gserviceaccount.com, not to your user account.
- Pub/Sub Editor ( roles/pubsub.editor ) Application Integration Editor ( roles/integrations.editor ) Setup cluster notifications for your GKE cluster To use Pub/Sub to receive notifications about your GKE cluster, follow Receive cluster notifications through Pub/Sub .

### "Configure cluster notifications for third-party services \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack)
- Source ID: `site-docs-reference-required-5`
- Final score: 197
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Slack notification is similar to the following: Master is upgrading to version 1.20.10-gke.301. cluster location: us-central1 cluster name: pubsub-cluster payload: {"resourceType":"MASTER", "operation":"operation-1632775054313-45128f4f", "operationStartTime":"2021-09-27T20:37:34.313742491Z", "currentVersion":"1.20.9-gke.1001", "targetVersion":"1.20.10-gke.301"} project id: 729788050015 type url: type.googleapis.com/google.container.v1beta1.UpgradeEvent Note: You will not receive a notification if you chose to ignore the UpgradeEvent notification type when setting up your cluster notifications.
- After you've completed deployment of the Cloud Run function, you will receive a Slack notification whenever GKE sends a cluster notification.
- Deploy the Cloud Run function You can deploy the Cloud Run function using either the Google Cloud CLI or the Google Cloud console. gcloud To deploy the function, run the following command in the gke slack directory: gcloud functions deploy slackNotifier \ --gen2 \ --trigger-topic = TOPIC NAME \ --runtime = nodejs24 \ --entry-point = slackNotifier \ --region = REGION \ --source = . \ --set-env-vars = "SLACK WEBHOOK= WEBHOOK URL " Replace the following: TOPIC NAME : the name of the Pub/Sub topic you created when enabling cluster notifications .
- When GKE sends a cluster notification to Pub/Sub (the event), the function sends a message (the trigger) to the webhook URL, which in turn sends the message to the configured Slack workspace.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.
- AutoprovisioningNodePoolDefaults JSON representation { "oauthScopes" : [ string ] , "serviceAccount" : string , "upgradeSettings" : { object ( UpgradeSettings ) } , "management" : { object ( NodeManagement ) } , "minCpuPlatform" : string , "diskSizeGb" : integer , "diskType" : string , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "bootDiskKmsKey" : string , "imageType" : string , // Union field insecure kubelet readonly port enabled can be only one of the // following: "insecureKubeletReadonlyPortEnabled" : boolean // End of list of possible types for union field // insecure kubelet readonly port enabled . } Fields oauthScopes[] string Scopes that are used by NAP when creating node pools. serviceAccount string The Google Cloud Platform Service Account to be used by the node VMs. upgradeSettings object ( UpgradeSettings ) Specifies the upgrade settings for NAP created node pools management object ( NodeManagement ) Specifies the node management options for NAP created node-pools. minCpuPlatform (deprecated) string This item is deprecated!
- BlueGreenInfo JSON representation { "phase" : enum ( Phase ) , "blueInstanceGroupUrls" : [ string ] , "greenInstanceGroupUrls" : [ string ] , "bluePoolDeletionStartTime" : string , "greenPoolVersion" : string } Fields phase enum ( Phase ) Current blue-green upgrade phase. blueInstanceGroupUrls[] string The resource URLs of the managed instance groups associated with blue pool. greenInstanceGroupUrls[] string The resource URLs of the managed instance groups associated with green pool. bluePoolDeletionStartTime string Time to start deleting blue pool to complete blue-green upgrade, in RFC3339 text format. greenPoolVersion string Version of green pool.
- BestEffortProvisioning JSON representation { "enabled" : boolean , "minProvisionNodes" : integer } Fields enabled boolean When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes minProvisionNodes integer Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved.

