---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:10:45.839Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "Certificate-based access for web applications"
feature_slug: "certificate-based-access-for-web-applications"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/overview"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps"
keywords:
  - "certificate"
  - "secures"
  - "trusted"
  - "applications"
  - "devices"
  - "based"
  - "access"
---

# Certificate-based access for web applications

Product: Chrome Enterprise Premium
Coverage: MEDIUM

## Step 02 Summary

Certificate-based access secures access from trusted devices to enterprise web applications running on Google Cloud.

## Extended Definition

Certificate-based access secures access from trusted devices to enterprise web applications running on Google Cloud.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/overview](https://docs.cloud.google.com/chrome-enterprise-premium/docs/overview)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)

## Supporting Pages

### "Secure access to private web applications \_|\_ Chrome Enterprise Premium\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Security Chrome Enterprise Premium Guides Send feedback Secure access to private web applications Stay organized with collections Save and categorize content based on your preferences.
- This command uses the etag from your file to ensure that you update the correct version. jq '{policy: .}' policy.json curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d @- \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications/ APPLICATION ID :setIamPolicy" Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway APPLICATION ID : the ID of the application resource Add a conditional access policy You can also set access policies with conditions.
- The following command retrieves the policy and saves it to a file named policy.json . curl \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications/ APPLICATION ID :getIamPolicy" > policy.json Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway APPLICATION ID : the ID of the application resource The command creates a policy.json file that contains the current policy.
- This command uses the etag from your file to ensure that you update the correct version. gcloud beta beyondcorp security-gateways applications set-iam-policy APPLICATION ID policy.json \ --security-gateway = SECURITY GATEWAY ID \ --project = PROJECT ID \ --location = global Replace the following: APPLICATION ID : the ID of the application resource SECURITY GATEWAY ID : the ID of the secure gateway PROJECT ID : the ID of the project where the secure gateway is configured Add a conditional access policy You can also set access policies with conditions.

### "Secure non-Google Cloud applications using the app connector \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices \ -d "{ \ 'name': '${LB PREFIX}-backend-service', \ 'service protocol': 'HTTPS', \ 'port name': 'https', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" gcurl -X PATCH https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service \ -d "{ \ 'backends': \ [{ \ 'group': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/regions/${REGION}/networkEndpointGroups/${LB PREFIX}-neg' \ }] \ }" Create a Google managed certificate for your domain by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses \ -d "{ \ 'name': '${LB PREFIX}-static-ip', \ 'ip version': 'IPV4' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates \ -d "{ \ 'name': '${LB PREFIX}-ssl-cert', \ 'managed': \ { \ 'domains': '${DOMAIN NAME}' \ }, \ 'type': 'MANAGED' \ }" LB IP=$(gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses/${LB PREFIX}-static-ip jq -r '.address') Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps \ -d "{ \ 'name': '${LB PREFIX}-map-https', \ 'default service': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies \ -d "{ \ 'name': '${LB PREFIX}-https-lb-proxy', \ 'url map': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps/${LB PREFIX}-map-https', \ 'ssl certificate': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates/${LB PREFIX}-ssl-cert' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/forwardingRules \ -d "{ \ 'name': '${LB PREFIX}-https-lb-forwarding-rule', \ target: 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies/${LB PREFIX}-https-lb-proxy', \ 'ip address': '${LB IP}', \ 'port range': '443-443', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcloud beta compute backend-services create $LB PREFIX-backend-service \ --global \ --protocol=HTTPS \ --load-balancing-scheme=EXTERNAL MANAGED gcloud beta compute backend-services add-backend $LB PREFIX-backend-service \ --global \ --network-endpoint-group=$LB PREFIX-neg \ --network-endpoint-group-region=$REGION Create a Google managed certificate for your domain by running the following commands: gcloud compute addresses create $LB PREFIX-static-ip \ --ip-version=IPV4 \ --global gcloud compute ssl-certificates create $LB PREFIX-ssl-cert \ --domains=$DOMAIN NAME \ --global LB IP="$(gcloud compute addresses describe $LB PREFIX-static-ip --global --format='value(address)')" Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcloud compute url-maps create $LB PREFIX-map-https \ --default-service=$LB PREFIX-backend-service gcloud compute target-https-proxies create $LB PREFIX-https-lb-proxy \ --url-map=$LB PREFIX-map-https \ --ssl-certificates=$LB PREFIX-ssl-cert gcloud beta compute forwarding-rules create "$LB PREFIX-https-lb-forwarding-rule" \ --global \ --target-https-proxy=$LB PREFIX-https-lb-proxy \ --address=$LB IP \ --ports=443 \ --load-balancing-scheme=EXTERNAL MANAGED After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.
- Run the following command to check the provisioning status: Show the IP address to set up in the DNS provider: echo "Load Balancer ip address - $LB IP" After you set the DNS, check whether or not the domain name resolves to the IP address by running the following command: dig $DOMAIN NAME Get the provisioning status by running the following command: echo $(gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates/${LB PREFIX}-ssl-cert \ jq -r '.name + " " + .managed.status + " " + (.managed.domainStatus keys[]) + "=" + .managed.domainStatus[]') After the SSL Certificate is provisioned, you should be able to access your application by using the DNS name.
- Run the following command to check the provisioning status: Show the IP address to set up in the DNS provider: echo "Load Balancer ip address - $LB IP" After you set the DNS, check whether or not the domain name resolves to the IP address by running the following command: dig $DOMAIN NAME Get the provisioning status by running the following command: gcloud compute ssl-certificates describe $LB PREFIX-ssl-cert \ --global \ --format="get(name,managed.status, managed.domainStatus)" After the SSL Certificate is provisioned, you should be able to access your application by using the DNS name.

### Chrome Enterprise Premium overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/overview](https://docs.cloud.google.com/chrome-enterprise-premium/docs/overview)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table compares the features of Chrome Enterprise Core with those of Chrome Enterprise Premium: The following table shows the differences between the features of Chrome Enterprise Core and what is available with Chrome Enterprise Premium: Applications and Resources Access Chrome Enterprise Core Chrome Enterprise Premium Access control to web applications on Google Cloud Platform done done Access control to SSH, RDP and TCP ports for VMs on Google Cloud done done Access control to Google Cloud Platform APIs done done Access control to Google Cloud console done done Access control to web applications on Google Cloud internal load balancing done done Access control to web applications on customer premises done Access control to web applications on AWS and Azure done Access control to SAML-based applications (login time) done Access control to Google Workspace Admin Console done Access Policies and Advanced Settings Chrome Enterprise Core Chrome Enterprise Premium Access levels using users done done Access levels using IP addresses and geolocations done done Access levels using time and date restrictions done Access levels using login credential strength done Access levels using enterprise certificates done done Access levels using device certificates done An organization-level license is required to create or modify access levels that use these attributes. done Access levels using device security postures done Access levels using Chrome security postures done Access levels using third party partner signals done Access levels using advanced expression language done Same-origin policy configuration in HTTP OPTIONS done done Custom authentication domain and 403 pages done User, Threat, and Data Protection Chrome Enterprise Core Chrome Enterprise Premium Data loss prevention w/ predefined or custom detectors (Chrome) done Malware protection w/ advanced sandboxing (Chrome) done Phishing and malicious URL protection (Chrome) done Threat and data protection alerting and reporting (Chrome) done What's next Learn more about access protection controls Learn more about threat and data protections Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Benefits to users Chrome Enterprise Premium presents a security model that allows for greater security posturing and policy for both applications and devices, while providing end users a better user experience no matter where they access from or what type of device they use to do so: For administrators: Strengthen security posture to account for dynamic changes in a user's context.
- Common use cases As end users work outside of the office more often and from many different types of devices, enterprises have common security models they are looking to extend to all users, devices, and applications: Allow non-employees to access a single web application deployed on Google Cloud or other cloud services platforms without requiring the use of a VPN.
- Context-Aware Access Controls: Enforce secure access to critical applications and resources based on user identity, device security posture, and geographic location.

