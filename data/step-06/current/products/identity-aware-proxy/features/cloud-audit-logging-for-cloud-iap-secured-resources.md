---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.781Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Cloud Audit Logging for Cloud IAP-secured resources"
feature_slug: "cloud-audit-logging-for-cloud-iap-secured-resources"
latest_feature_date: "2017-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/audit-log-howto"
  - "https://docs.cloud.google.com/iap/docs/managing-access"
  - "https://docs.cloud.google.com/iap/docs/tutorial-gce"
  - "https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto"
keywords:
  - "audit"
  - "logging"
  - "for"
  - "iap"
  - "secured"
  - "resources"
  - "records"
  - "activity"
---

# Cloud Audit Logging for Cloud IAP-secured resources

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Cloud Audit Logging records activity for resources secured by Cloud IAP.

## Extended Definition

Cloud Audit Logging records activity for resources secured by Cloud IAP.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/audit-log-howto](https://docs.cloud.google.com/iap/docs/audit-log-howto)
- [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
- [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)

## Supporting Pages

### Identity-Aware Proxy audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/audit-log-howto](https://docs.cloud.google.com/iap/docs/audit-log-howto)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filter for this method : protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.ListTunnelDestGroups" SetIamPolicy Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.SetIamPolicy Audit log type : Admin activity Permissions : iap.web.setIamPolicy - ADMIN WRITE iap.webServiceVersions.setIamPolicy - ADMIN WRITE iap.webServices.setIamPolicy - ADMIN WRITE iap.webTypes.setIamPolicy - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.GetIamPolicy" SetIamPolicy Method : google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.SetIamPolicy Audit log type : Admin activity Permissions : iap.webServiceVersions.setIamPolicy - ADMIN WRITE iap.webServices.setIamPolicy - ADMIN WRITE iap.webTypes.setIamPolicy - ADMIN WRITE Method is a long-running or streaming operation : No.
- Permission type Methods ADMIN READ google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIamPolicy google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIapSettings google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.GetIamPolicy ADMIN WRITE google.cloud.iap.v1.IdentityAwareProxyAdminService.SetIamPolicy google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.SetIamPolicy DATA READ google.cloud.iap.v1.IdentityAwareProxyAdminService.GetTunnelDestGroup google.cloud.iap.v1.IdentityAwareProxyAdminService.ListTunnelDestGroups DATA WRITE google.cloud.iap.v1.IdentityAwareProxyAdminService.CreateTunnelDestGroup google.cloud.iap.v1.IdentityAwareProxyAdminService.DeleteTunnelDestGroup google.cloud.iap.v1.IdentityAwareProxyAdminService.UpdateIapSettings google.cloud.iap.v1.IdentityAwareProxyAdminService.UpdateTunnelDestGroup google.cloud.iap.v1.IdentityAwareProxyAdminService.ValidateIapAttributeExpression API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Identity-Aware Proxy. google.cloud.iap.v1.IdentityAwareProxyAdminService The following audit logs are associated with methods belonging to google.cloud.iap.v1.IdentityAwareProxyAdminService .
- The following methods don't produce audit logs: google.cloud.iap.v1.IdentityAwareProxyOAuthService.CreateBrand google.cloud.iap.v1.IdentityAwareProxyOAuthService.CreateIdentityAwareProxyClient google.cloud.iap.v1.IdentityAwareProxyOAuthService.DeleteIdentityAwareProxyClient google.cloud.iap.v1.IdentityAwareProxyOAuthService.GetBrand google.cloud.iap.v1.IdentityAwareProxyOAuthService.GetIdentityAwareProxyClient google.cloud.iap.v1.IdentityAwareProxyOAuthService.ListBrands google.cloud.iap.v1.IdentityAwareProxyOAuthService.ListIdentityAwareProxyClients google.cloud.iap.v1.IdentityAwareProxyOAuthService.ResetIdentityAwareProxyClientSecret google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.TestIamPermissions Fields The logs only contain information about the access levels that a user has met.

### "Manage access to IAP-secured resources \_|\_ Identity-Aware Proxy \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- Source ID: `site-iam-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Path https://iap.googleapis.com/v1/projects/ PROJECT NUMBER /iap web/appengine- APP ID / services/ APP SERVICE ID /versions/ VERSION ID iap.webServiceVersions.getIamPolicy iap.webServiceVersions.setIamPolicy Every IAP-secured VM instance in the project This is the same as the All Tunnel Resources checkbox on the IAP admin page.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Manage access to IAP-secured resources Stay organized with collections Save and categorize content based on your preferences.
- Role Includes permission(s) Description IAP-Secured Web App User ( roles/iap.httpsResourceAccessor ) iap.webServiceVersions.accessViaIAP Grants access to App Engine and Compute Engine resources.
- Before you begin Before you begin, you'll need the following: An IAP-secured resource to which you want to add individual or group access.

### "Setting up IAP for Compute Engine \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- After you finish setting up IAP for Compute Engine, you can clean up the resources that you created on Google Cloud so you aren't billed for them in the future.
- See the License for the specific language governing permissions and limitations under the License. apt-get -y update apt-get -y install git apt-get -y install virtualenv git clone https://github.com/GoogleCloudPlatform/python-docs-samples cd python-docs-samples/iap virtualenv venv -p python3 source venv/bin/activate pip install -r requirements.txt cat example gce backend.py sed -e "s/YOUR BACKEND SERVICE ID/ $( gcloud compute backend-services describe my-backend-service --global --format = "value(id)" ) /g" sed -e "s/YOUR PROJECT ID/ $( gcloud config get-value account tr -cd "[0-9]" ) /g" > real backend.py gunicorn real backend:app -b 0 .0.0.0:80 When you're finished updating values, click Create to create the template.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Set up IAP To set up IAP for your project, follow these steps: In the Google Cloud console, go to the Security > Identity-Aware Proxy page and select the project that you want to enable IAP for.

### "Setting up context-aware access with Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Audit Logs and access levels Enabling Cloud Audit Logs for your IAP-secured project lets you see authorized and unauthorized access requests.
- See Managing access to IAP-secured resources for more information about using the IAM API to manage access policies.
- The following is an example of an edited policy.json file that binds the iap.httpsResourceAccessor role to two users, granting them access to the IAP-secured resources.
- The following is an example of an edited policy.json file that binds the iap.httpsResourceAccessor role to two users, granting them access to the IAP-secured resources.

