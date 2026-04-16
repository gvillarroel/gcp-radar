---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.311Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Pub/Sub cluster notification filtering"
feature_slug: "pub-sub-cluster-notification-filtering"
latest_feature_date: "2022-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "filter"
  - "filtering"
  - "notification"
  - "cluster"
---

# Pub/Sub cluster notification filtering

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can filter Pub/Sub cluster notifications by notification type.

## Extended Definition

GKE can filter Pub/Sub cluster notifications by notification type.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Configure cluster notifications for third-party services \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack)
- Source ID: `site-docs-reference-required-5`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The isAllowedType function is provided to enable basic filtering of notifications by the type URL.
- SLACK WEBHOOK ; const webhook = new IncomingWebhook ( url ); // Optionally filter what notification types to forward to Slack. // If empty, all types will be allowed. const allowedTypeURLs = []; // Register a CloudEvent callback with the Functions Framework that will // be executed when the Pub/Sub trigger topic receives a // message. functions . cloudEvent ( 'slackNotifier' , pubSubEvent = > { const data = decode ( pubSubEvent . data . message . data ); // Send message to Slack. if ( isAllowedType ( pubSubEvent . data . message . attributes )) { const message = createSlackMessage ( data , pubSubEvent . data . message . attributes ); ( async () = > { await webhook . send ( message ); })(). catch (( e ) = > { console . log ( e ); }); } }); // decode decodes a pubsub event message from base64. const decode = ( data ) = > { return Buffer . from ( data , 'base64' ). toString (); } // isAllowedType can be used to filter out messages that don't match the // allowed type URLs.
- The Slack notification is similar to the following: Master is upgrading to version 1.20.10-gke.301. cluster location: us-central1 cluster name: pubsub-cluster payload: {"resourceType":"MASTER", "operation":"operation-1632775054313-45128f4f", "operationStartTime":"2021-09-27T20:37:34.313742491Z", "currentVersion":"1.20.9-gke.1001", "targetVersion":"1.20.10-gke.301"} project id: 729788050015 type url: type.googleapis.com/google.container.v1beta1.UpgradeEvent Note: You will not receive a notification if you chose to ignore the UpgradeEvent notification type when setting up your cluster notifications.
- Required roles To get the permissions that you need to set up Slack notifications for cluster notifications, ask your administrator to grant you the following IAM roles on your project: Cloud Functions Developer ( roles/cloudfunctions.developer ) Kubernetes Engine Admin ( roles/container.admin ) To ensure that the Compute Engine default service account has the necessary permissions to invoke the Cloud Run function, ask your administrator to grant the Cloud Functions Invoker ( roles/cloudfunctions.invoker ) IAM role to the Compute Engine default service account on your project.

### "Configure clusters to receive notifications via email \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email)
- Source ID: `site-docs-reference-required-5`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the following example script as a template for the message body when notifications are sent from your cluster: local message data = std . extVar ( "message data" ); local cluster name = std . extVar ( "cluster name" ); local project id = std . extVar ( "project id" ); local cluster location = std . extVar ( "cluster location" ); local type url = std . extVar ( "type url" ); local payload = std . extVar ( "payload" ); { full message : "Project ID: " + project id + "\n" + "Cluster Name: " + cluster name + "\n" + "Location: " + cluster location + "\n" + "Event Type: " + type url + "\n" + "Message: " + message data + "\n" + "Payload: " + std . manifestJson ( std . parseJson ( payload ))} Close the Data Mapping Editor once your mapping is complete.
- Required roles To ensure that service-PROJECT NUMBER@gcp-sa-integrations.iam.gserviceaccount.com has the necessary permissions to set up email notifications for cluster notifications, ask your administrator to grant the following IAM roles to service-PROJECT NUMBER@gcp-sa-integrations.iam.gserviceaccount.com on your project: Important: You must grant these roles to service-PROJECT NUMBER@gcp-sa-integrations.iam.gserviceaccount.com, not to your user account.
- Pub/Sub Editor ( roles/pubsub.editor ) Application Integration Editor ( roles/integrations.editor ) Setup cluster notifications for your GKE cluster To use Pub/Sub to receive notifications about your GKE cluster, follow Receive cluster notifications through Pub/Sub .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Configure clusters to receive notifications via email Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "description" : string , "initialNodeCount" : integer , "nodeConfig" : { object ( NodeConfig ) } , "masterAuth" : { object ( MasterAuth ) } , "loggingService" : string , "monitoringService" : string , "network" : string , "clusterIpv4Cidr" : string , "addonsConfig" : { object ( AddonsConfig ) } , "subnetwork" : string , "nodePools" : [ { object ( NodePool ) } ] , "locations" : [ string ] , "enableKubernetesAlpha" : boolean , "alphaClusterFeatureGates" : [ string ] , "resourceLabels" : { string : string , ... } , "labelFingerprint" : string , "legacyAbac" : { object ( LegacyAbac ) } , "networkPolicy" : { object ( NetworkPolicy ) } , "ipAllocationPolicy" : { object ( IPAllocationPolicy ) } , "masterAuthorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "binaryAuthorization" : { object ( BinaryAuthorization ) } , "autoscaling" : { object ( ClusterAutoscaling ) } , "networkConfig" : { object ( NetworkConfig ) } , "defaultMaxPodsConstraint" : { object ( MaxPodsConstraint ) } , "resourceUsageExportConfig" : { object ( ResourceUsageExportConfig ) } , "authenticatorGroupsConfig" : { object ( AuthenticatorGroupsConfig ) } , "privateClusterConfig" : { object ( PrivateClusterConfig ) } , "databaseEncryption" : { object ( DatabaseEncryption ) } , "verticalPodAutoscaling" : { object ( VerticalPodAutoscaling ) } , "shieldedNodes" : { object ( ShieldedNodes ) } , "releaseChannel" : { object ( ReleaseChannel ) } , "workloadIdentityConfig" : { object ( WorkloadIdentityConfig ) } , "meshCertificates" : { object ( MeshCertificates ) } , "costManagementConfig" : { object ( CostManagementConfig ) } , "notificationConfig" : { object ( NotificationConfig ) } , "confidentialNodes" : { object ( ConfidentialNodes ) } , "identityServiceConfig" : { object ( IdentityServiceConfig ) } , "selfLink" : string , "zone" : string , "endpoint" : string , "initialClusterVersion" : string , "currentMasterVersion" : string , "currentNodeVersion" : string , "createTime" : string , "status" : enum ( Status ) , "statusMessage" : string , "nodeIpv4CidrSize" : integer , "servicesIpv4Cidr" : string , "instanceGroupUrls" : [ string ] , "currentNodeCount" : integer , "expireTime" : string , "location" : string , "enableTpu" : boolean , "tpuIpv4CidrBlock" : string , "conditions" : [ { object ( StatusCondition ) } ] , "autopilot" : { object ( Autopilot ) } , "id" : string , "loggingConfig" : { object ( LoggingConfig ) } , "monitoringConfig" : { object ( MonitoringConfig ) } , "nodePoolAutoConfig" : { object ( NodePoolAutoConfig ) } , "podAutoscaling" : { object ( PodAutoscaling ) } , "etag" : string , "fleet" : { object ( Fleet ) } , "securityPostureConfig" : { object ( SecurityPostureConfig ) } , "controlPlaneEndpointsConfig" : { object ( ControlPlaneEndpointsConfig ) } , "enableK8sBetaApis" : { object ( K8sBetaAPIConfig ) } , "enterpriseConfig" : { object ( EnterpriseConfig ) } , "secretManagerConfig" : { object ( SecretManagerConfig ) } , "compliancePostureConfig" : { object ( CompliancePostureConfig ) } , "gkeAutoUpgradeConfig" : { object ( GkeAutoUpgradeConfig ) } , "anonymousAuthenticationConfig" : { object ( AnonymousAuthenticationConfig ) } , "scheduleUpgradeConfig" : { object ( ScheduleUpgradeConfig ) } , "managedOpentelemetryConfig" : { object ( ManagedOpenTelemetryConfig ) } , "managedMachineLearningDiagnosticsConfig" : { object ( ManagedMachineLearningDiagnosticsConfig ) } , // Union field node pool defaults can be only one of the following: "nodePoolDefaults" : { object ( NodePoolDefaults ) } // End of list of possible types for union field node pool defaults . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field user managed keys config can be only one of the following: "userManagedKeysConfig" : { object ( UserManagedKeysConfig ) } // End of list of possible types for union field user managed keys config . // Union field rbac binding config can be only one of the following: "rbacBindingConfig" : { object ( RBACBindingConfig ) } // End of list of possible types for union field rbac binding config . } Fields name string The name of this cluster.
- Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. workloadIdentityConfig object ( WorkloadIdentityConfig ) Configuration for the use of Kubernetes Service Accounts in IAM policies. meshCertificates object ( MeshCertificates ) Configuration for issuance of mTLS keys and certificates to Kubernetes pods. costManagementConfig object ( CostManagementConfig ) Configuration for the fine-grained cost management feature. notificationConfig object ( NotificationConfig ) Notification configuration of the cluster. confidentialNodes object ( ConfidentialNodes ) Configuration of Confidential Nodes.
- PubSub JSON representation { "enabled" : boolean , "topic" : string , "filter" : { object ( Filter ) } } Fields enabled boolean Enable notifications for Pub/Sub. topic string The desired Pub/Sub topic to which notifications will be sent by GKE.
- Format is projects/{project}/topics/{topic} . filter object ( Filter ) Allows filtering to one or more specific event types.

