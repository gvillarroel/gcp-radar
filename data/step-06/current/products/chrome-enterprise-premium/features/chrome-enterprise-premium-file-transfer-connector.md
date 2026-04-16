---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:10:45.824Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "Chrome Enterprise Premium file transfer connector"
feature_slug: "chrome-enterprise-premium-file-transfer-connector"
latest_feature_date: "2024-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-on-premises"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/reference/rest/v1/projects.locations.appConnectors/create"
keywords:
  - "transfer"
  - "file"
  - "connector"
  - "scanning"
  - "enables"
---

# Chrome Enterprise Premium file transfer connector

Product: Chrome Enterprise Premium
Coverage: MEDIUM

## Step 02 Summary

The Chrome Enterprise Premium file transfer connector enables scanning of files transferred between different file systems on ChromeOS.

## Extended Definition

The Chrome Enterprise Premium file transfer connector enables scanning of files transferred between different file systems on ChromeOS.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-on-premises](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-on-premises)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/reference/rest/v1/projects.locations.appConnectors/create](https://docs.cloud.google.com/chrome-enterprise-premium/docs/reference/rest/v1/projects.locations.appConnectors/create)

## Supporting Pages

### "Secure non-Google Cloud applications using the app connector \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- Source ID: `site-iam-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the following line to the credential source object in the client library configuration file: "imdsv2 session token url": "http://169.254.169.254/latest/api/token" On the remote agent VM, run the following commands in the bce-connctl CLI: bce-connctl config set project $PROJECT ID bce-connctl config set region $REGION bce-connctl config set connector $CONNECTOR NAME Run the following command to restart the agent and have it pick up the credentials: sudo systemctl restart beyondcorp On your Cloud Shell or gcloud CLI endpoint, set the required environment variable by running the following command: SERVICE ACCOUNT= my-service-account Replace the following: my-service-account : the Google Cloud service account associated with the external identity.
- To change the connectors associated with a connection, run the following command: gcurl -X PATCH \ https://beyondcorp.googleapis.com/v1/projects/${PROJECT ID}/locations/${REGION}/appConnections/${CONNECTION NAME}?update mask=connectors \ -d "{ \ 'connectors': ['projects/${PROJECT ID}/locations/${REGION}/appConnectors/${CONNECTOR NAME}'], \ }" You can verify the update by running the following command and checking the connectors field of the output: gcurl https://beyondcorp.googleapis.com/v1/projects/${PROJECT ID}/locations/${REGION}/appConnections/${CONNECTION NAME} Proxy Support for proxies was introduced in early 2024 and requires changes to the BeyondCorp systemd file.
- Create an app gateway by running the following command: gcurl https://beyondcorp.googleapis.com/v1/projects/${PROJECT ID}/locations/${REGION}/appGateways?app gateway id=${GATEWAY NAME} \ -d "{ \ 'type': 'TCP PROXY', \ 'display name': '${CONNECTION NAME}' \ }" Specify an app gateway in a create connection call by running the following command: gcurl https://beyondcorp.googleapis.com/v1/projects/${PROJECT ID}/locations/${REGION}/appConnections?app connection id=${CONNECTION NAME} \ -d "{ \ 'application endpoint': \ { \ 'host': '${APP HOST}', \ 'port': '${APP PORT}' \ }, \ 'gateway': { 'app gateway' : 'projects/${PROJECT ID}/locations/${REGION}/appGateways/${GATEWAY NAME}'}, \ 'connectors':['projects/${PROJECT ID}/locations/${REGION}/appConnectors/${CONNECTOR NAME}'], \ 'type': 'TCP PROXY', \ 'display name': '${CONNECTION NAME}' \ Next steps See VPC Service Controls for information about securing a VPC.
- Create an app gateway by running the following command: gcloud beta beyondcorp app gateways create $GATEWAY NAME \ --project=$PROJECT ID --location=$REGION --display-name=$GATEWAY NAME Specify an app gateway in a create connection call by running the following command: gcloud beta beyondcorp app connections create $CONNECTION NAME \ --project=$PROJECT ID \ --location=$REGION \ --application-endpoint=$APP ENDPOINT \ --type=tcp \ --connectors=$CONNECTOR NAME \ --display-name=$CONNECTION NAME \ --app-gateway=$GATEWAY NAME API Set the required environment variables by running the following command: CONNECTOR NAME= CONNECTOR NAME CONNECTION NAME= CONNECTION NAME GATEWAY NAME= GATEWAY NAME PROJECT ID= PROJECT ID REGION= REGION APP ENDPOINT= APP HOST : APP PORT Replace the following: CONNECTOR NAME : the name of the connector, defined in an earlier step.

### "Securing non-Google Cloud applications using the On-Prem Connector \_|\_\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-on-premises](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-on-premises)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Chrome Enterprise Premium Guides Send feedback Securing non-Google Cloud applications using the On-Prem Connector Stay organized with collections Save and categorize content based on your preferences.
- Note: If your on-premises endpoint is an IP address, consider using a hybrid connectivity network endpoint group directly with a load balancer instead of using the IAP on-premises connector.
- This page explains how to secure an HTTP or HTTPS based, on-premises app outside of Google Cloud with Identity-Aware Proxy (IAP) by deploying an IAP connector.
- Go to IAP To begin setting up your connector deployment for an on-premises app, click Connect new application and select Connect via on-prem connector .

### "Method: projects.locations.appConnectors.create \_|\_ Chrome Enterprise\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/reference/rest/v1/projects.locations.appConnectors/create](https://docs.cloud.google.com/chrome-enterprise-premium/docs/reference/rest/v1/projects.locations.appConnectors/create)
- Source ID: `site-api-reference`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The resource project name of the AppConnector location using the form: projects/{projectId}/locations/{locationId} Authorization requires the following IAM permission on the specified resource parent : beyondcorp.appConnectors.create Query parameters Parameters appConnectorId string Optional.
- Home Documentation Security Chrome Enterprise Premium Send feedback Method: projects.locations.appConnectors.create Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://beyondcorp.googleapis.com/v1/{parent=projects/ /locations/ }/appConnectors The URL uses gRPC Transcoding syntax.
- Request body The request body contains an instance of AppConnector .

