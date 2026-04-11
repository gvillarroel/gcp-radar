---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:30:05.299Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "Chrome Enterprise Premium file transfer connector"
feature_slug: "chrome-enterprise-premium-file-transfer-connector"
latest_feature_date: "2024-08-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps"
keywords:
  - "chrome"
  - "enterprise"
  - "premium"
  - "file"
  - "transfer"
  - "connector"
  - "the"
  - "enables"
---

# Chrome Enterprise Premium file transfer connector

Product: Chrome Enterprise Premium
Coverage: LOW

## Step 02 Summary

The Chrome Enterprise Premium file transfer connector enables scanning of files transferred between different file systems on ChromeOS.

## Extended Definition

The Chrome Enterprise Premium file transfer connector enables scanning of files transferred between different file systems on ChromeOS.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes](https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)

## Supporting Pages

### Chrome Enterprise Premium release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes](https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- August 01, 2024 Feature Generally available : The Chrome Enterprise Premium file transfer connector.
- July 18, 2024 Feature Generally Available : Chrome OCR for Chrome Enterprise Premium You can now scan text in image (BMP, GIF, JPEG, PNG, and TIFF) files and images in PDFs for sensitive content with optical character recognition (OCR).
- July 11, 2024 Feature Generally available : Chrome Enterprise Premium watermarking You can now display a custom watermark on web pages that match the data protection rules that you set.
- Feature Generally Available : Generative AI URL Category for Chrome Enterprise Premium You can now use the Generative AI URL category when creating Chrome DLP rules.

### "Secure non-Google Cloud applications using the app connector \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set up a convenient alias to use your access token: alias gcurl="curl -H 'Authorization: Bearer ${ACCESS TOKEN}' -H 'Content-Type: application/json'" Enable the API by running the following command: gcurl https://serviceusage.googleapis.com/v1/projects/${PROJECT NUMBER}/services/beyondcorp.googleapis.com:enable -d "{}" Installing an app connector remote agent You must deploy an app connector remote agent VM for every network environment that hosts an application that you want to protect with Chrome Enterprise Premium.
- After you successfully create an app connection and assign it to a remote agent (connector), go to the remote agent VM, and run run-post-install-checks with the following command: sudo /var/beyondcorp/scripts/run-post-install-checks The script prints a success message if everything is in order. run-diagnostics run-diagnostics is a script installed in /var/beyondcorp/scripts/ that diagnoses common issues on the remote agent VM and prints a report that you can share with the Chrome Enterprise Premium support team.
- After you create the connection, run the following commands to retrieve the gateway URIs: GATEWAY URI=$(gcurl https://beyondcorp.googleapis.com/v1/projects/${PROJECT NUMBER}/locations/${REGION}/appConnections/${CONNECTION NAME} jq -r '.gateway.uri') The Chrome Enterprise Premium app connector uses Private Service Connect to link the consumer project to the managed resources in Google managed projects.
- After you create the connection, run the following commands to retrieve the gateway URIs: GATEWAY URI="$(gcloud alpha beyondcorp app connections describe $CONNECTION NAME --project=$PROJECT ID --location=$REGION --format='get(gateway.uri)')" The Chrome Enterprise Premium app connector uses Private Service Connect to link the consumer project to the managed resources in Google-managed projects.

### "Secure access to private web applications \_|\_ Chrome Enterprise Premium\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here is an example condition you can adapt: device.chrome.management state == ChromeManagementState.CHROME MANAGEMENT STATE PROFILE MANAGED Install the Chrome Enterprise Premium extension The Chrome Enterprise Premium extension is an integral part of a secure gateway, and it helps with authentication.
- Required roles Ask your administrator to grant the following roles: Cloud BeyondCorp Admin ( roles/beyondcorp.admin ) to set up Chrome Enterprise Premium on the project Access Context Manager Admin ( roles/accesscontextmanager.policyAdmin ) to read and add new access levels Service Usage Viewer ( roles/serviceusage.serviceUsageViewer ) to use the Google Cloud console Learn more about Identity and Access Management (IAM) roles .
- Create a secure gateway A Chrome Enterprise Premium secure gateway is a fundamental building block for establishing secure connections to your applications. console To create a secure gateway, do the following: In the Google Cloud console, go to the secure gateway page.
- Accessing the application in Chrome The Chrome Enterprise Premium extension is required to direct traffic through the secure gateway.

