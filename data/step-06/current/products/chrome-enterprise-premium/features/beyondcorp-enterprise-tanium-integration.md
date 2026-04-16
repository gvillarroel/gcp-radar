---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:10:45.855Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "BeyondCorp Enterprise Tanium integration"
feature_slug: "beyondcorp-enterprise-tanium-integration"
latest_feature_date: "2021-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/cs-overview"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/intune-overview"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector"
keywords:
  - "collect"
  - "tanium"
  - "integration"
  - "allows"
  - "real"
  - "time"
  - "beyondcorp"
---

# BeyondCorp Enterprise Tanium integration

Product: Chrome Enterprise Premium
Coverage: MEDIUM

## Step 02 Summary

The Tanium integration allows BeyondCorp Enterprise to collect real-time device data from Tanium for policy-based device management and access control.

## Extended Definition

The Tanium integration allows BeyondCorp Enterprise to collect real-time device data from Tanium for policy-based device management and access control.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/cs-overview](https://docs.cloud.google.com/chrome-enterprise-premium/docs/cs-overview)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/intune-overview](https://docs.cloud.google.com/chrome-enterprise-premium/docs/intune-overview)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)

## Supporting Pages

### "Overview of Chrome Enterprise Premium and Falcon ZTA integration \_|\_ Google\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/cs-overview](https://docs.cloud.google.com/chrome-enterprise-premium/docs/cs-overview)
- Source ID: `site-iam-reference`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When to use Chrome Enterprise Premium and Falcon ZTA integration Use this integration when you want to collect the real-time information about the devices in your organization using Falcon ZTA, and use this information to manage your devices and control access to your organizational resources using Chrome Enterprise Premium.
- In this integration, Falcon ZTA collects the real-time device information using its built-in solution, CrowdStrike's Falcon sensor, and provides this information to Chrome Enterprise Premium.
- Home Documentation Security Chrome Enterprise Premium Guides Send feedback Overview of Chrome Enterprise Premium and Falcon ZTA integration Stay organized with collections Save and categorize content based on your preferences.
- The following diagram shows how Chrome Enterprise Premium works with Falcon ZTA: What's next Set up Chrome Enterprise Premium and Falcon ZTA integration Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Overview of Chrome Enterprise Premium integration with Microsoft Intune\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/intune-overview](https://docs.cloud.google.com/chrome-enterprise-premium/docs/intune-overview)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When to use Chrome Enterprise Premium integration with Intune Use this integration when you want to collect the real-time information about the devices in your organization using Intune, and use this information to manage your devices and control access to your organizational resources using Chrome Enterprise Premium.
- In this integration, Intune collects the real-time device information and provides this information to Chrome Enterprise Premium.
- Home Documentation Security Chrome Enterprise Premium Guides Send feedback Overview of Chrome Enterprise Premium integration with Microsoft Intune Stay organized with collections Save and categorize content based on your preferences.
- The following diagram shows how Chrome Enterprise Premium works with Intune: What's next Set up Chrome Enterprise Premium integration with Intune Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Secure non-Google Cloud applications using the app connector \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- Source ID: `site-iam-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command on the remote agent VM to install the remote agent: curl https://raw.githubusercontent.com/GoogleCloudPlatform/beyondcorp-applink/main/bash-scripts/install-beyondcorp-runtime -o ./install-beyondcorp-runtime && chmod +x ./install-beyondcorp-runtime && ./install-beyondcorp-runtime To add the bce-connctl alias to your shell, run the following command: source /.bce alias Set the required environment variables by running the following commands: PROJECT ID= my-project REGION= us-central1 CONNECTOR NAME= my-connector Replace the following: my-project : the Google Cloud project ID. us-central1 : the region in which to deploy the connection and gateways. my-connector : the name of the connector.
- Grant the Google Cloud service account the BeyondCorp Connection Agent role by running the following command: gcloud projects add-iam-policy-binding $PROJECT ID \ --member="serviceAccount:$SERVICE ACCOUNT" \ --role="roles/beyondcorp.connectionAgent" Run the following command to create the Google Cloud app connector resource. gcloud alpha beyondcorp app connectors create $CONNECTOR NAME \ --project=$PROJECT ID \ --location=$REGION \ --member="serviceAccount:$SERVICE ACCOUNT" \ --display-name=$CONNECTOR NAME After the app connector resource is created, the remote agent runtime syncs the connector configuration automatically.
- Verify the remote agent installation: Run the following command to ensure the service is running: sudo systemctl status beyondcorp The remote agent consists of three Docker containers: bce-control-runtime , bce-logagent , and bce-connector .
- Create an app gateway by running the following command: gcurl https://beyondcorp.googleapis.com/v1/projects/${PROJECT ID}/locations/${REGION}/appGateways?app gateway id=${GATEWAY NAME} \ -d "{ \ 'type': 'TCP PROXY', \ 'display name': '${CONNECTION NAME}' \ }" Specify an app gateway in a create connection call by running the following command: gcurl https://beyondcorp.googleapis.com/v1/projects/${PROJECT ID}/locations/${REGION}/appConnections?app connection id=${CONNECTION NAME} \ -d "{ \ 'application endpoint': \ { \ 'host': '${APP HOST}', \ 'port': '${APP PORT}' \ }, \ 'gateway': { 'app gateway' : 'projects/${PROJECT ID}/locations/${REGION}/appGateways/${GATEWAY NAME}'}, \ 'connectors':['projects/${PROJECT ID}/locations/${REGION}/appConnectors/${CONNECTOR NAME}'], \ 'type': 'TCP PROXY', \ 'display name': '${CONNECTION NAME}' \ Next steps See VPC Service Controls for information about securing a VPC.

