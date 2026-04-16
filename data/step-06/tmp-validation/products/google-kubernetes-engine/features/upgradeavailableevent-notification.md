---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.382Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "UpgradeAvailableEvent notification"
feature_slug: "upgradeavailableevent-notification"
latest_feature_date: "2021-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email"
keywords:
  - "upgradeavailableevent"
  - "notification"
  - "generally"
  - "available"
---

# UpgradeAvailableEvent notification

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The UpgradeAvailableEvent notification is generally available.

## Extended Definition

The UpgradeAvailableEvent notification is generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email)

## Supporting Pages

### "Configure cluster notifications for third-party services \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack)
- Source ID: `site-docs-reference-required-5`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You cannot verify setup manually for the SecurityBulletinEvent or the UpgradeAvailableEvent notification types.
- SLACK WEBHOOK ; const webhook = new IncomingWebhook ( url ); // Optionally filter what notification types to forward to Slack. // If empty, all types will be allowed. const allowedTypeURLs = []; // Register a CloudEvent callback with the Functions Framework that will // be executed when the Pub/Sub trigger topic receives a // message. functions . cloudEvent ( 'slackNotifier' , pubSubEvent = > { const data = decode ( pubSubEvent . data . message . data ); // Send message to Slack. if ( isAllowedType ( pubSubEvent . data . message . attributes )) { const message = createSlackMessage ( data , pubSubEvent . data . message . attributes ); ( async () = > { await webhook . send ( message ); })(). catch (( e ) = > { console . log ( e ); }); } }); // decode decodes a pubsub event message from base64. const decode = ( data ) = > { return Buffer . from ( data , 'base64' ). toString (); } // isAllowedType can be used to filter out messages that don't match the // allowed type URLs.
- The output is similar to the following: Deploying function… availableMemoryMb: 256 entryPoint: slackNotifier environmentVariables: SLACK WEBHOOK: https://hooks.slack.com/services/… eventTrigger: eventType: google.pubsub.topic.publish failurePolicy: {} resource: projects/ PROJECT ID /topics/ TOPIC NAME service: pubsub.googleapis.com labels: deployment-tool: cli-gcloud name: projects/ PROJECT ID /locations/us-central1/functions/slackNotifier runtime: nodejs10 serviceAccountEmail: PROJECT ID @appspot.gserviceaccount.com sourceUploadUrl: https://storage.googleapis.com/… status: ACTIVE timeout: 60s updateTime: 'YYYY-MM-DDThh:mm:ssZ' versionId: '1' Console Go to the Cloud Run functions page in the Google Cloud console.
- The Slack notification is similar to the following: Master is upgrading to version 1.20.10-gke.301. cluster location: us-central1 cluster name: pubsub-cluster payload: {"resourceType":"MASTER", "operation":"operation-1632775054313-45128f4f", "operationStartTime":"2021-09-27T20:37:34.313742491Z", "currentVersion":"1.20.9-gke.1001", "targetVersion":"1.20.10-gke.301"} project id: 729788050015 type url: type.googleapis.com/google.container.v1beta1.UpgradeEvent Note: You will not receive a notification if you chose to ignore the UpgradeEvent notification type when setting up your cluster notifications.

### "Configure clusters to receive notifications via email \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-email)
- Source ID: `site-docs-reference-required-5`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if your project is named my-project and you named your topic gke-notifications , enter: projects/my-project/topics/gke-notifications To view all the available topics in your Google Cloud project, see the Topic name column in Topics .
- Use the following example script as a template for the message body when notifications are sent from your cluster: local message data = std . extVar ( "message data" ); local cluster name = std . extVar ( "cluster name" ); local project id = std . extVar ( "project id" ); local cluster location = std . extVar ( "cluster location" ); local type url = std . extVar ( "type url" ); local payload = std . extVar ( "payload" ); { full message : "Project ID: " + project id + "\n" + "Cluster Name: " + cluster name + "\n" + "Location: " + cluster location + "\n" + "Event Type: " + type url + "\n" + "Message: " + message data + "\n" + "Payload: " + std . manifestJson ( std . parseJson ( payload ))} Close the Data Mapping Editor once your mapping is complete.
- Required roles To ensure that service-PROJECT NUMBER@gcp-sa-integrations.iam.gserviceaccount.com has the necessary permissions to set up email notifications for cluster notifications, ask your administrator to grant the following IAM roles to service-PROJECT NUMBER@gcp-sa-integrations.iam.gserviceaccount.com on your project: Important: You must grant these roles to service-PROJECT NUMBER@gcp-sa-integrations.iam.gserviceaccount.com, not to your user account.
- Pub/Sub Editor ( roles/pubsub.editor ) Application Integration Editor ( roles/integrations.editor ) Setup cluster notifications for your GKE cluster To use Pub/Sub to receive notifications about your GKE cluster, follow Receive cluster notifications through Pub/Sub .

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- To get a notification as soon as a patch is available for your specific cluster, use cluster notifications .
- To receive a Pub/Sub notification when a patch is available for your channel, enable cluster notifications .
- To receive a Pub/Sub notification when a patch is available for your channel, enable cluster notifications .
- The following patched GKE versions are available: 1.26.15-gke.1090004 1.26.15-gke.1191001 1.26.15-gke.1300001 1.26.15-gke.1320002 1.26.15-gke.1381001 1.26.15-gke.1390001 1.26.15-gke.1404002 1.26.15-gke.1469001 1.27.13-gke.1070002 1.27.13-gke.1166001 1.27.13-gke.1201002 1.27.14-gke.1022001 1.27.14-gke.1042001 1.27.14-gke.1059002 1.27.14-gke.1100002 1.27.15-gke.1012003 1.28.9-gke.1069002 1.28.9-gke.1209001 1.28.9-gke.1289002 1.28.10-gke.1058001 1.28.10-gke.1075001 1.28.10-gke.1089002 1.28.10-gke.1148001 1.28.11-gke.1019001 1.29.4-gke.1043004 1.29.5-gke.1060001 1.29.5-gke.1091002 1.29.6-gke.1038001 1.30.1-gke.1329003 1.30.2-gke.1023004 To check whether a patch is available in your cluster zone or region, run the following command: gcloud container get-server-config --location= LOCATION Replace LOCATION with your zone or region.

