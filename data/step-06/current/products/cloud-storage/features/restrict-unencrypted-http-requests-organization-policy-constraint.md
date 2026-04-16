---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.913Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Restrict unencrypted HTTP requests organization policy constraint"
feature_slug: "restrict-unencrypted-http-requests-organization-policy-constraint"
latest_feature_date: "2023-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/storage/docs/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys"
  - "https://docs.cloud.google.com/storage/docs/aws-simple-migration"
keywords:
  - "restrict"
  - "unencrypted"
  - "http"
  - "requests"
  - "organization"
  - "policy"
  - "constraint"
  - "this"
---

# Restrict unencrypted HTTP requests organization policy constraint

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

This organization policy constraint blocks unencrypted HTTP access to Cloud Storage resources.

## Extended Definition

This organization policy constraint blocks unencrypted HTTP access to Cloud Storage resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration)

## Supporting Pages

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Solution : Check with your security administrator team to see if the bucket to which you're sending requests is being affected by an organization policy that uses a custom constraint.
- For example, the Domain Restricted Sharing constraint ( constraints/iam.allowedPolicyMemberDomains ) restricts resource sharing based on the organization's domain.
- The system will look for this config file to be specified as a system property: -Djava.util.logging.config.file=${project loc:googleplus-simple-cmdline-sample}/logging.properties Set up the console handler (uncomment "level" to show more fine-grained messages) handlers = java.util.logging.ConsoleHandler java.util.logging.ConsoleHandler.level = CONFIG Set up logging of HTTP requests and responses (uncomment "level" to show) com.google.api.client.http.level = CONFIG Use logging.properties with Maven mvn -Djava.util.logging.config.file=path/to/logging.properties insert command For more information, see Pluggable HTTP Transport .
- If you continue to see this error after overriding the organization policy, then you might need to wait a few minutes for the change to take effect.

### Cloud Audit Logs with Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- REST APIs JSON API curl -X GET "https://storage.googleapis.com/storage/v1/b/example bucket/o/example object" \ -H "Authorization: Bearer ya29.AHES6ZRVmB7fkLtd1XTmq6mo0S1wqZZi3-Lh s-6Uw7p8vtgSwg" \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" XML API curl -X GET "https://storage.googleapis.com/example bucket/example object" \ -H "Authorization: Bearer ya29.AHES6ZRVmB7fkLtd1XTmq6mo0S1wqZZi3-Lh s-6Uw7p8vtgSwg" \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" Signed URL requests curl -X GET 'storage.googleapis.com/example bucket?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount.com%2F20181026%2Fus-central1%2Fstorage%2Fgoog4 request&X-Goog-Date=20181026T181309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host,x-goog-custom-audit-job,x-goog-custom-audit-user&X-Goog-Signature=247a2aa45f169edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa8496def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dcc1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c20580e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b133447032ea7abedc098d2eb14a7' \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" Note that the custom audit headers must also be included in X-Goog-SignedHeaders .
- This means that some Cloud Storage requests can generate more than one Cloud Audit Logs log.
- Audit log type Sub-type Cloud Storage operations Admin Activity ADMIN WRITE Setting bucket or managed folder IAM policies Setting object ACLs 1 Creating buckets Deleting buckets Restoring soft-deleted buckets Relocating buckets Updating bucket metadata Creating tag bindings on buckets Deleting tag bindings on buckets Creating managed folders Deleting managed folders Updating Storage Intelligence configuration for a project, a folder, or an organization Creating Rapid Cache caches Pausing Rapid Cache caches Resuming Rapid Cache caches Disabling Rapid Cache caches Updating Rapid Cache caches Creating HMAC keys Deleting HMAC keys Updating HMAC keys Cancelling long-running operations Deleting long-running operations Creating Storage Insights inventory report configurations Updating Storage Insights inventory report configurations Deleting Storage Insights inventory report configurations Creating Storage Insights dataset configurations Updating Storage Insights dataset configurations Deleting Storage Insights dataset configurations Linking Storage Insights dataset configurations Unlinking Storage Insights dataset configurations Data Access ADMIN READ Getting bucket or managed folder IAM policies Getting object ACLs Getting bucket metadata Listing buckets Listing tag bindings on buckets Listing effective tags on buckets Getting managed folder metadata Listing managed folders Getting Storage Intelligence configuration for a project, a folder, or an organization Getting Rapid Cache caches Listing Rapid Cache caches Getting HMAC keys Listing HMAC keys Getting long-running operations Listing long-running operations Getting Storage Insights inventory report configurations Listing Storage Insights inventory report configurations Getting Storage Insights inventory reports Listing Storage Insights inventory reports Getting Storage Insights dataset configurations Listing Storage Insights dataset configurations Data Access DATA READ Getting object data Getting object metadata Listing objects Getting folder metadata Listing folders Copying objects 2 Composing objects 2 Listing ongoing XML API multipart uploads Listing XML API multipart upload parts Data Access DATA WRITE Creating objects Deleting objects Deleting multiple objects using the XML API Restoring soft-deleted objects Moving objects Updating non-ACL object metadata Setting retentions for objects Overriding unlocked retentions for objects Copying objects 2 Composing objects 2 Initiating XML API multipart uploads Creating parts in an XML API multipart upload Aborting XML API multipart uploads Completing XML API multipart uploads Creating folders Deleting folders Renaming folders System Event Start of bucket relocate process 3 End of bucket relocate process 1 Admin Activity audit logs are not generated if/when ACLs are initially set at object creation.
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.

### "Manage HMAC keys for service accounts \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Make sure the following organization policy constraints are disabled: constraints/storage.restrictAuthTypes (must be disabled for HMAC key authentication) constraints/iam.disableServiceAccountKeyCreation See Creating and managing organization policies for instructions on how to check and disable constraints.
- UpdateHmacKey ( access id , gcs :: HmacKeyMetadata (). set state ( gcs :: HmacKeyMetadata :: state inactive ())); if ( ! updated ) throw std :: move ( updated ). status (); if ( updated - > state () != gcs :: HmacKeyMetadata :: state inactive ()) { throw std :: runtime error ( "The HMAC key is active, this is unexpected" ); } std :: cout << "The HMAC key is now inactive \n Full metadata: " << updated << " \n " ; } The following sample activates an HMAC key: namespace gcs = :: google :: cloud :: storage ; using :: google :: cloud :: StatusOr ; []( gcs :: Client client , std :: string const & access id ) { StatusOr<gcs :: HmacKeyMetadata > updated = client .
- UpdateHmacKey ( access id , gcs :: HmacKeyMetadata (). set state ( gcs :: HmacKeyMetadata :: state active ())); if ( ! updated ) throw std :: move ( updated ). status (); if ( updated - > state () != gcs :: HmacKeyMetadata :: state active ()) { throw std :: runtime error ( "The HMAC key is NOT active, this is unexpected" ); } std :: cout << "The HMAC key is now active \n Full metadata: " << updated << " \n " ; } C# For more information, see the Cloud Storage C# API reference documentation .
- Use cURL to call the JSON API with a PUT hmacKeys request: curl -X PUT --data-binary @ JSON FILE NAME \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://storage.googleapis.com/storage/v1/projects/ PROJECT IDENTIFIER /hmacKeys/ ACCESS KEY ID " Where: JSON FILE NAME is the path for the file that you created in Step 2.

### Simple migration from Amazon S3 to Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Here is the request to a bucket in Amazon S3: PUT europe/france/paris.jpg HTTP/1.1 Host: my-travel-maps.s3.amazonaws.com Date: Mon, 11 Mar 2019 23:46:19 GMT Content-Length: 888814 Content-Type: image/jpg x-amz-acl: public-read x-amz-date:20190311T192918Z x-amz-meta-reviewer: joe,jane Authorization: AWS4-HMAC-SHA256 Credential= AWS-ACCESS-KEY /20190311/us-east-1/s3/aws4 request, SignedHeaders=content-length;content-type;host;x-amz-acl;x-amz-date;x-amz-meta-reviewer, Signature= SIGNATURE Here is the request for a bucket in Cloud Storage: PUT europe/france/paris.jpg HTTP/1.1 Host: my-travel-maps.storage.googleapis.com Date: Mon, 11 Mar 2019 23:46:19 GMT Content-Length: 888814 Content-Type: image/jpg x-amz-acl: public-read x-amz-date:20190311T192918Z x-amz-meta-reviewer: joe,jane Authorization: AWS4-HMAC-SHA256 Credential= GOOG-ACCESS-ID /20190311/us-east-1/s3/aws4 request, SignedHeaders=content-length;content-type;host;x-amz-acl;x-amz-date;x-amz-meta-reviewer, Signature= SIGNATURE Here is the corresponding canonical request that was created for this request: PUT /europe/france/paris.jpg content-length:888814 content-type:image/jpg host:my-travel-maps.storage.googleapis.com x-amz-acl:public-read x-amz-date:20190311T192918Z x-amz-meta-reviewer:joe,jane content-length,content-type,host,x-amz-acl,x-amz-date,x-amz-meta-reviewer 82e3da8b3f35989512e8d428add7eca73ab0e5f36586e66fbad8e1051343cbd2 Here is the corresponding string-to-sign that was created for this request: AWS4-HMAC-SHA256 20190311T192918Z 20190311/us-east-1/s3/aws4 request 73918a5ff373d7a03e406fbf9ea35675396b06fca2af76c27a5c451fa783ef65 This request did not provide a Content-MD5 header, so an empty string is shown in the second line of the message.
- GET europe/france/paris.jpg?acl HTTP/1.1 Host: my-travel-maps.storage.googleapis.com Date: Thu, 21 Feb 2019 23:50:10 GMT Content-Type: application/xml X-Amz-Date: 20190221T235010Z Authorization: AWS4-HMAC-SHA256 Credential=GOOGMC5PDPA5JLZYQMHQHRAX/20190221/region/s3/aws4 request, SignedHeaders=host;x-amz-date, Signature=29088b1d6dfeb2549f6ff67bc3744abb7e45475f0ad60400485805415bbfc534 The response to the request includes the ACL using Amazon S3 ACL syntax. <?xml version='1.0' encoding='UTF-8'?> <AccessControlPolicy> <Owner> <ID>00b4903a972faa8bcce9382686e9129676f1cd6e5def1f5663affc2ba4652490 </ID> <DisplayName>OwnerName</DisplayName> </Owner> <AccessControlList> <Grant> <Grantee xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:type='CanonicalUser'> <ID>00b4903a972faa8bcce9382686e9129676f1cd6e5def1f5663affc2ba4652490</ID> <DisplayName>UserName</DisplayName> </Grantee> <Permission>FULL CONTROL</Permission> </Grant> </AccessControlList> </AccessControlPolicy> The following example shows a PUT request to Cloud Storage to set the ACLs for an object.
- PUT europe/france/paris.jpg?acl HTTP/1.1 Host: my-travel-maps.storage.googleapis.com Date: Thu, 21 Feb 2019 23:50:10 GMT Content-Type: application/xml Content-Length: 337 X-Amz-Date: 20190221T235010Z Authorization: AWS4-HMAC-SHA256 Credential=GOOGMC5PDPA5JLZYQMHQHRAX/20190221/region/s3/aws4 request, SignedHeaders=host;x-amz-date, Signature=29088b1d6dfeb2549f6ff67bc3744abb7e45475f0ad60400485805415bbfc534 <?xml version='1.0' encoding='utf-8'?> <AccessControlPolicy> <AccessControlList> <Grant> <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"> <EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress> </Grantee> <Permission>FULL CONTROL</Permission> </Grant> </AccessControlList> </AccessControlPolicy> Finally, in a simple migration scenario, you can also use the GOOG1 signature identifier in the Authorization header.
- Important: Because the simple migration scenario uses HMAC keys, make sure that the project you migrate to isn't subject to the restrictAuthTypes constraint for the account type you intend to use.

