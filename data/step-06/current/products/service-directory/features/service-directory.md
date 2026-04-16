---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.456Z"
product_name: "Service Directory"
product_slug: "service-directory"
feature_name: "Service Directory"
feature_slug: "service-directory"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd"
  - "https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd"
  - "https://docs.cloud.google.com/service-directory/docs/audit-logging"
  - "https://docs.cloud.google.com/service-directory/docs/troubleshooting"
keywords:
  - "directory"
  - "is"
  - "now"
  - "available"
  - "in"
  - "beta"
---

# Service Directory

Product: Service Directory
Coverage: MEDIUM

## Step 02 Summary

Service Directory is now available in Beta.

## Extended Definition

Service Directory is now available in Beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd)
- [https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd)
- [https://docs.cloud.google.com/service-directory/docs/audit-logging](https://docs.cloud.google.com/service-directory/docs/audit-logging)
- [https://docs.cloud.google.com/service-directory/docs/troubleshooting](https://docs.cloud.google.com/service-directory/docs/troubleshooting)

## Supporting Pages

### "Register an internal load balancer \_|\_ Service Directory \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd)
- Source ID: `site-iam-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To register a regional internal Application Load Balancer, run the gcloud compute forwarding-rules create command and set the service-directory-registration flag: gcloud beta compute forwarding-rules create FORWARDING RULE NAME \ --region= REGION \ --load-balancing-scheme=INTERNAL MANAGED \ --network= NETWORK NAME \ --address= RESERVED IP ADDRESS \ --target-https-proxy= PROXY NAME \ --target-https-proxy-region= PROXY REGION \ --ports= PORT NUMBER \ --service-directory-registration= SD SERVICE NAME Replace the following: FORWARDING RULE NAME : a name for the forwarding rule that you want to create REGION : the region to create the forwarding rule in NETWORK NAME : the network that this forwarding rule applies to RESERVED IP ADDRESS : the IP address that the forwarding rule serves PROXY NAME : the target proxy that receives the traffic PROXY REGION : the region of the proxy to operate on PORT NUMBER : a list of comma-separated ports SD SERVICE NAME : the fully qualified name of the Service Directory service where you want to register the endpoint.
- Register an internal passthrough Network Load Balancer To register an internal passthrough Network Load Balancer, run the gcloud compute forwarding-rules create command and set the service-directory-registration flag: gcloud compute forwarding-rules create FORWARDING RULE NAME \ --region= REGION \ --load-balancing-scheme=INTERNAL \ --network= NETWORK NAME \ --subnet= SUBNET NAME \ --address= RESERVED IP ADDRESS \ --ip-protocol= PROTOCOL TYPE \ --ports= PORT NUMBER \ --backend-service= BACKEND SERVICE NAME \ --backend-service-region= REGION \ --service-directory-registration= SD SERVICE NAME Replace the following: FORWARDING RULE NAME : a name for the forwarding rule that you want to create REGION : the region to create the forwarding rule in NETWORK NAME : the network that this forwarding rule applies to SUBNET NAME : the subnetwork that this forwarding rule applies to RESERVED IP ADDRESS : the IP address that the forwarding rule serves PROTOCOL TYPE : the IP protocol that the rule will serve PORT NUMBER : a list of comma-separated ports BACKEND SERVICE NAME : target backend service that receives the traffic SD SERVICE NAME : the fully qualified name of the Service Directory service where you want to register the endpoint.
- Permissions servicedirectory.endpoints.create servicedirectory.endpoints.delete Roles roles/compute.networkAdmin roles/compute.securityAdmin roles/compute.instanceAdmin Limitations Service Directory integration with internal load balancing has the following limitations: Automatic registration only applies to internal and network load balancers.
- Verify the endpoint One or more Service Directory endpoints that are created when you register an internal load balancer have the following characteristics: The endpoint has the same name as the name of the forwarding rule with the specified port number ( <forwarding rule name>-<port> ).

### "Register an external passthrough Network Load Balancer \_|\_ Service Directory\

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Register an external passthrough Network Load Balancer To register a regional external passthrough Network Load Balancer, run the gcloud compute forwarding-rules create command and set the service-directory-registration flag: gcloud beta compute forwarding-rules create FORWARDING RULE NAME \ --region= REGION \ --load-balancing-scheme=EXTERNAL \ --address= RESERVED IP ADDRESS \ --ip-protocol= PROTOCOL TYPE \ --ports= PORT NUMBER \ --backend-service= BACKEND SERVICE NAME \ --backend-service-region= REGION \ --service-directory-registration= SD SERVICE NAME Replace the following: FORWARDING RULE NAME : a name for the forwarding rule that you want to create REGION : the region to create the forwarding rule in RESERVED IP ADDRESS : the IP address that the forwarding rule serves PROTOCOL TYPE : the IP protocol that the rule is to serve PORT NUMBER : a list of comma-separated ports BACKEND SERVICE NAME : the target backend service that receives the traffic SD SERVICE NAME : the fully qualified name of the Service Directory service where you want to register the endpoint.
- Permissions servicedirectory.endpoints.create servicedirectory.endpoints.delete Roles roles/compute.networkAdmin roles/compute.securityAdmin roles/compute.instanceAdmin Limitations Service Directory integration with external passthrough Network Load Balancers has the following limitations: Automatic registration only supports external Layer 4 load balancers.
- Verify the endpoint The Service Directory endpoints that are created when you register an external passthrough Network Load Balancer have the following characteristics: The endpoint has the same name as the name of the forwarding rule with the specified port number ( <forwarding rule name>-<port> ).
- Set up forwarding rules to register an external passthrough Network Load Balancer in Service Directory You must set up a forwarding rule to register the external passthrough Network Load Balancer in Service Directory.

### Service Directory audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/audit-logging](https://docs.cloud.google.com/service-directory/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.location.Locations.GetLocation google.cloud.location.Locations.ListLocations google.cloud.servicedirectory.v1.RegistrationService.GetIamPolicy google.cloud.servicedirectory.v1.RegistrationService.GetNamespace google.cloud.servicedirectory.v1.RegistrationService.ListNamespaces google.cloud.servicedirectory.v1beta1.RegistrationService.GetIamPolicy google.cloud.servicedirectory.v1beta1.RegistrationService.GetNamespace google.cloud.servicedirectory.v1beta1.RegistrationService.ListNamespaces ADMIN WRITE google.cloud.servicedirectory.v1.RegistrationService.CreateNamespace google.cloud.servicedirectory.v1.RegistrationService.DeleteNamespace google.cloud.servicedirectory.v1.RegistrationService.SetIamPolicy google.cloud.servicedirectory.v1.RegistrationService.UpdateNamespace google.cloud.servicedirectory.v1beta1.RegistrationService.CreateNamespace google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteNamespace google.cloud.servicedirectory.v1beta1.RegistrationService.SetIamPolicy google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateNamespace DATA READ google.cloud.servicedirectory.v1.LookupService.ResolveService google.cloud.servicedirectory.v1.RegistrationService.GetEndpoint google.cloud.servicedirectory.v1.RegistrationService.GetService google.cloud.servicedirectory.v1.RegistrationService.ListEndpoints google.cloud.servicedirectory.v1.RegistrationService.ListServices google.cloud.servicedirectory.v1beta1.LookupService.ResolveService google.cloud.servicedirectory.v1beta1.RegistrationService.GetEndpoint google.cloud.servicedirectory.v1beta1.RegistrationService.GetService google.cloud.servicedirectory.v1beta1.RegistrationService.ListEndpoints google.cloud.servicedirectory.v1beta1.RegistrationService.ListServices DATA WRITE google.cloud.servicedirectory.v1.RegistrationService.CreateEndpoint google.cloud.servicedirectory.v1.RegistrationService.CreateService google.cloud.servicedirectory.v1.RegistrationService.DeleteEndpoint google.cloud.servicedirectory.v1.RegistrationService.DeleteService google.cloud.servicedirectory.v1.RegistrationService.UpdateEndpoint google.cloud.servicedirectory.v1.RegistrationService.UpdateService google.cloud.servicedirectory.v1beta1.RegistrationService.CreateEndpoint google.cloud.servicedirectory.v1beta1.RegistrationService.CreateService google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteEndpoint google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteService google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateEndpoint google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateService API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Service Directory. google.cloud.location.Locations The following audit logs are associated with methods belonging to google.cloud.location.Locations .
- The following methods don't produce audit logs: google.cloud.servicedirectory.v1.RegistrationService.TestIamPermissions google.cloud.servicedirectory.v1beta1.RegistrationService.TestIamPermissions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Filter for this method : protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.CreateEndpoint" CreateNamespace Method : google.cloud.servicedirectory.v1beta1.RegistrationService.CreateNamespace Audit log type : Admin activity Permissions : servicedirectory.namespaces.create - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteEndpoint" DeleteNamespace Method : google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteNamespace Audit log type : Admin activity Permissions : servicedirectory.namespaces.delete - ADMIN WRITE Method is a long-running or streaming operation : No.

### Troubleshooting \_|\_ Service Directory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/troubleshooting](https://docs.cloud.google.com/service-directory/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Then any DNS query to billing.example.com returns resource records that belong to the billing.example.com zone, and not the billing service in the Service Directory namespace that is associated with example.com.
- Home Documentation Distributed, hybrid, and multicloud Service Directory Guides Send feedback Troubleshooting Stay organized with collections Save and categorize content based on your preferences.
- There could be several reasons, such as the following: Confirm that you have a ServiceDirectoryRegistrationPolicy deployed in your GKE cluster for the namespace that you are trying to sync.
- There is already an existing Service Directory namespace that was created manually or by using some other integration with the same name as the GKE namespace you are trying to sync.

