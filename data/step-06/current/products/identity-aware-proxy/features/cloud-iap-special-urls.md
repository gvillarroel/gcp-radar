---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.780Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Cloud IAP special URLs"
feature_slug: "cloud-iap-special-urls"
latest_feature_date: "2017-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/tutorial-gce"
  - "https://docs.cloud.google.com/iap/docs/configuring-reauth"
  - "https://docs.cloud.google.com/iap/docs/auth-policies"
  - "https://docs.cloud.google.com/iap/docs/enabling-on-prem-howto"
keywords:
  - "iap"
  - "special"
  - "urls"
  - "let"
  - "you"
  - "enhance"
  - "and"
  - "personalize"
---

# Cloud IAP special URLs

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Cloud IAP special URLs let you enhance and personalize an application.

## Extended Definition

Cloud IAP special URLs let you enhance and personalize an application.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
- [https://docs.cloud.google.com/iap/docs/configuring-reauth](https://docs.cloud.google.com/iap/docs/configuring-reauth)
- [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies)
- [https://docs.cloud.google.com/iap/docs/enabling-on-prem-howto](https://docs.cloud.google.com/iap/docs/enabling-on-prem-howto)

## Supporting Pages

### "Setting up IAP for Compute Engine \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apt-get -y update apt-get -y install git apt-get -y install virtualenv git clone https://github.com/GoogleCloudPlatform/python-docs-samples cd python-docs-samples/iap virtualenv venv -p python3 source venv/bin/activate pip install -r requirements.txt cat example gce backend.py sed -e "s/YOUR BACKEND SERVICE ID/ $( gcloud compute backend-services describe my-backend-service --global --format = "value(id)" ) /g" sed -e "s/YOUR PROJECT ID/ $( gcloud config get-value account tr -cd "[0-9]" ) /g" > real backend.py gunicorn real backend:app -b 0 .0.0.0:80 When you're finished updating values, click Create to create the template.
- Add the certificate to your project To add the certificate to your project, run the following commands on the VM: sudo su cd /etc/letsencrypt/live/ YOUR DOMAIN gcloud compute ssl-certificates create my-cert --certificate=fullchain.pem --private-key=privkey.pem After you've successfully created your certificate, a message appears that's similar to: Created [https://www.googleapis.com/compute/v1/projects/example-project/global/sslCertificates/my-cert] Before you continue, close the SSH session.
- Create a certificate To create a certificate, register with Let's Encrypt by running the following commands on the VM where YOUR DOMAIN is your domain name, not including the protocol: sudo pkill busybox sudo apt-get install -y certbot sudo certbot certonly --standalone -d YOUR-DOMAIN During this process, Let's Encrypt might request an email address to send a reminder when your certificate expires (by default, 3 months after it's issued).
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.

### IAP reauthentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/configuring-reauth](https://docs.cloud.google.com/iap/docs/configuring-reauth)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IAP reauthentication lets service and application owners or Google Cloud administrators require authenticated end users to reauthenticate after a specified time when accessing an IAP-protected service or application and limit how long a user can access a IAP-protected service or application before authentication is required.
- You will need the name in the following step. gcloud iap settings get [--organization=ORGANIZATION --folder=FOLDER --project=/PROJECT --resource-type=RESOURCE TYPE --service=SERVICE --version=VERSION] Replace RESOURCE NAME in the following command with the name from the previous step.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback IAP reauthentication Stay organized with collections Save and categorize content based on your preferences.
- Run the following command: gcloud iap settings set SETTING FILE [--organization= ORGANIZATION --folder= FOLDER --project=/ PROJECT --resource-type= RESOURCE TYPE --service= SERVICE --version= VERSION To set a reauthentication policy on the resources within an organization, run the following command: gcloud iap settings set SETTING FILE --organization= ORGANIZATION To set a reauthentication policy on the resources within a folder, run the following command: gcloud iap settings set SETTING FILE --folder= FOLDER To set a reauthentication policy on all web type resources within a project, run the following command: gcloud iap settings set SETTING FILE --project= PROJECT --resource-type=iap web To set a reauthentication policy on an App Engine service within a project, run the following command: gcloud iap settings set SETTING FILE --project= PROJECT --resource-type=app-engine --service= SERVICE Where SETTING FILE is: accessSettings : reauthSettings : method : "LOGIN" maxAge : "3600s" policyType : "MINIMUM" Replace the following: FOLDER : The folder ID.

### "Use authorization policies to delegate authorization to IAP and IAM \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Configure permission at the organization level organization/ ORGANIZATION Configure permission at the folder level folders/ FOLDER Configure permission at the project level projects/ PROJECT ID Configure permission for all global forwarding rules in a project projects/ PROJECT ID /forwarding rule Configure permission for all forwarding rules in a project in a region projects/ PROJECT ID /iap web/forwarding rule- REGION Configure permission for a specific global forwarding rule in a project projects/ PROJECT ID /iap web/forwarding rule/services/ SERVICE Configure permission for a specific forwarding rule in a project in a region projects/ PROJECT ID /iap web/forwarding rule- REGION /services/ SERVICE Set the authorization policy curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @policy.json \ "https://iap.googleapis.com/v1/RESOURCE NAME:setIamPolicy" For policy.json , you can create the JSON file by running the following command.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Use authorization policies to delegate authorization to IAP and IAM Stay organized with collections Save and categorize content based on your preferences.
- Create the authorization policy and enable IAP To create an authorization policy, you create a policy file that defines the target and rules, and then enable IAP on the forwarding rule.
- To delegate authorization to IAP and Identity and Access Management (IAM), you authorize traffic to a forwarding rule based on IAM or end-user identities for managed load balancers.

### "Enabling IAP for on-premises apps \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/enabling-on-prem-howto](https://docs.cloud.google.com/iap/docs/enabling-on-prem-howto)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After the deployment is complete, your on-premises connector apps appear in the Applications table and you can enable IAP.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Enabling IAP for on-premises apps Stay organized with collections Save and categorize content based on your preferences.
- Go to IAP To begin setting up your connector deployment for an on-premises app, click Connect new application and select Connect via on-prem connector .
- If you choose to let Google auto-generate and manage the certificates, it might take a few minutes for the certificates to provision.

