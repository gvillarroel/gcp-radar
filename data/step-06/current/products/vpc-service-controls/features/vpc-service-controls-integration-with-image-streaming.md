---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.544Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "VPC Service Controls integration with Image streaming"
feature_slug: "vpc-service-controls-integration-with-image-streaming"
latest_feature_date: "2022-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange"
keywords:
  - "vpc"
  - "controls"
  - "integration"
  - "with"
  - "image"
  - "streaming"
  - "this"
  - "lets"
---

# VPC Service Controls integration with Image streaming

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

This integration lets VPC Service Controls protect Image streaming.

## Extended Definition

This integration lets VPC Service Controls protect Image streaming.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter)
- [https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange](https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 261
- Re-rank relevance: N/A

Evidence snippets:
- The integration of this product with VPC Service Controls is in Preview and is ready for broader testing and use, but is not fully supported for production environments.
- The integration of this product with VPC Service Controls is in Preview and is ready for broader testing and use, but is not fully supported for production environments.
- The integration of this product with VPC Service Controls is in Preview and is ready for broader testing and use, but is not fully supported for production environments.
- The integration of this product with VPC Service Controls is in Preview and is ready for broader testing and use, but is not fully supported for production environments.

### "Troubleshoot common issues \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting)
- Source ID: `site-docs-reference-2`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose the following command is used to list all App Engine services within a service perimeter: gcloud app services list The command returns the following output: ERROR: (gcloud.app.services.list) User [ ] does not have permission to access apps instance [ ] (or it may not exist): <!DOCTYPE html> <html lang=en> <meta charset=utf-8> <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width"> <title>Error 403 (Forbidden)!!1</title> <style> {margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px} > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo color 150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){ #logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo color 150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo color 150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){ #logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo color 150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px} </style> <a href=//www.google.com/><span id=logo aria-label=Google></span></a> <p><b>403.</b> <ins>That's an error.</ins> <p>Your client does not have permission to get URL <code>/v1/apps/ /services</code> from this server. <ins>That's all we know.</ins> This type of error is expected for services that are not supported by VPC Service Controls and not available on the restricted VIP.
- Cloud Storage access from on-premises BigQuery access from VM outside of project Cross-project BigQuery query Move Cloud Storage file inside perimeter Move Cloud Storage file outside perimeter BigQuery dataset copy from VM inside perimeter Managed Service for Apache Spark job reading from project Unsupported service with restricted VIP Log export to project outside perimeter BigQuery extract to Cloud Storage Cloud Storage access from on-premises In this example, VPC Service Controls blocks a request from an employee workstation (identified by callerIp ) to a Cloud Storage bucket in project corp-storage .
- If the caller IP address is missing or appears as an internal IP address, then this violation might be due to a Google Cloud service that isn't integrated with VPC Service Controls.
- The audit log record for the destination service (Cloud Storage) contains detailed reasons for the failure: { insertId : "1bq397kcfj1" logName : "projects/corp-resources-private/logs/cloudaudit.googleapis.com %2F policy" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { principalEmail : "storage-accessing@example.iam.gserviceaccount.com" } metadata : { @ type : "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" resourceNames : [ 0 : "projects/1004338142803" 1 : "projects/ /buckets/corp-resources-public-1" ] violationReason : "RESOURCES NOT IN SAME SERVICE PERIMETER" } methodName : "google.storage.BillingRequiredRead" requestMetadata : { callerIp : "10.5.0.4" callerNetwork : "//compute.googleapis.com/projects/perimeter-network/global/networks/ unknown " destinationAttributes : { } requestAttributes : { } } resourceName : "projects/1004338142803" serviceName : "storage.googleapis.com" status : { code : 7 details : [ 0 : { @ type : "type.googleapis.com/google.rpc.PreconditionFailure" violations : [ 0 : { type : "VPC SERVICE CONTROLS" } ] } ] message : "Request is prohibited by organization's policy" } } receiveTimestamp : "2018-12-01T19:03:05.617451586Z" resource : { labels : { method : "google.storage.BillingRequiredRead" project id : "corp-resources-private" service : "storage.googleapis.com" } type : "audited resource" } severity : "ERROR" timestamp : "2018-12-01T19:03:05.420005215Z" } From this log, it is clear that the two projects 1004338142803 ( corp-resources-private-1 ) and corp-resources-public are both being used to complete the command.

### "Troubleshoot common VPC Service Controls issues with Google Cloud services\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Egress errors from a service agent while copying Artifact Registry-owned Docker image to a project in a perimeter When you try to copy an Artifact Registry-owned image to your project that is within a VPC Service Controls perimeter, you might encounter egress errors in the logs from the service agent cloud-cicd-artifact-registry-copier@system.gserviceaccount.com .
- To resolve this issue, add an ingress rule with the aforementioned service agents access to the cloudkms.googleapis.com service in the project mentioned in the VPC Service Controls error logs.
- This page provides solutions to issues that you might encounter when using a Google Cloud service that is within a VPC Service Controls perimeter.
- Container Registry API requests blocked by VPC Service Controls despite being allowed in an ingress or egress rule If you have allowed access to Container Registry using ingress rules with the identity type field set to ANY USER ACCOUNT or ANY SERVICE ACCOUNT , access is blocked by VPC Service Controls.

### "Secure data exchange with ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange](https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Access a Google Cloud resource outside the perimeter Share data by using Pub/Sub between two organizations that use VPC Service Controls Share anonymized PHI data with partner organization Grant access to a third-party Compute Engine disk image Read a BigQuery dataset by allowing private access from a VPC network outside the perimeter Load into a Cloud Storage bucket (write) by allowing private access from a VPC network outside the perimeter Share logs in a separate perimeter by allowing projects from multiple perimeters to share logs Access a Google Cloud resource outside the perimeter The following diagram shows a Compute Engine resource inside a service perimeter that requires access to a Cloud Storage resource, which is outside the perimeter: Assume that you have defined the following perimeter: name: accessPolicies/222/servicePerimeters/Example status: resources: - projects/111 restrictedServices: - bigquery.googleapis.com - containerregistry.googleapis.com - storage.googleapis.com title: Example You need to grant read access to a Cloud Storage bucket in project 999 , which is in a different organization.
- Home Documentation Networking VPC Service Controls Guides Send feedback Secure data exchange with ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- Share data by using Pub/Sub between two organizations that use VPC Service Controls The following diagram shows two organizations, Org1 and Org2 , which use VPC Service Controls and share data by using a Pub/Sub topic: Assume that you have defined the following perimeters: Org 1 Perimeter Definition name: accessPolicies/222/servicePerimeters/Example1 status: resources: - projects/111 restrictedServices: - pubsub.googleapis.com title: Example1 Org 2 Perimeter Definition name: accessPolicies/333/servicePerimeters/Example2 status: resources: - projects/222 restrictedServices: - pubsub.googleapis.com title: Example2 To enable data exchange, Org1 must define the following egress rule that allows the subscription and save the file as org1egress.yaml : Org1: Org1's perimeter must allow a Pub/Sub subscription to project 222. echo """ - egressTo: operations: - serviceName: pubsub.googleapis.com methodSelectors: - method: Subscriber.CreateSubscription resources: - projects/222 egressFrom: identityType: ANY IDENTITY """ > org1egress.yaml Org2 must define a corresponding ingress rule allowing the subscription and save the file as org2ingress.yaml .
- What's next Configuring ingress and egress policies Context-aware access with ingress rules Ingress and egress rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

