---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.569Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Access error unique identifier"
feature_slug: "access-error-unique-identifier"
latest_feature_date: "2019-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access"
keywords:
  - "access"
  - "error"
  - "unique"
  - "identifier"
  - "this"
  - "generates"
  - "for"
  - "denied"
---

# Access error unique identifier

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

This feature generates a unique identifier for denied requests so you can locate the corresponding VPC Service Controls log entry.

## Extended Definition

This feature generates a unique identifier for denied requests so you can locate the corresponding VPC Service Controls log entry.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer)
- [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting)
- [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access)

## Supporting Pages

### "Diagnose an access denial in violation analyzer \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer)
- Source ID: `site-docs-reference-2`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- The violation analyzer might display the following evaluation statuses in the troubleshooting result: Status Description check circle Granted This status indicates that the perimeter component allows the evaluated access request. error Denied This status indicates that the perimeter component denies the evaluated access request. info Not applicable This status indicates that the perimeter component doesn't restrict the resource or service from the evaluated access request or doesn't enforce the VPC accessible services feature. warning Unsupported or Unknown This status indicates that the perimeter component uses features or attributes that the violation analyzer doesn't support.
- Principal: The violation analyzer redacts the email address of a principal with ... (for example, cl...o@gm...m ), except in the following scenarios: When you are from the same organization as the access-denied principal.
- In this section, you can view the following information: The Involved in evaluation row shows only the services involved in this violation and not accessible from network endpoints inside the selected perimeter.
- In this section, you can view the following information: A list of all resources involved in this access denial event: The Resources accessed column displays all involved resources protected by the perimeter.

### VPC Service Controls audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- For example, RESOURCE NOT IN SAME SERVICE PERIMETER means that the resources being accessed don't belong to the same service perimeter. metadata.securityPolicyInfo The name of the service perimeter for which the violation occurred and the unique identifier of the organization to which the perimeter belongs. metadata.egressViolations An egress violation usually occurs when a request fails because the source is protected by a service perimeter and the target resource is outside the perimeter.
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fpolicy folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fsystem event folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fpolicy billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fsystem event billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fpolicy organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fsystem event organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fpolicy Note: The part of the log name following /logs/ must be URL-encoded.
- To find audit logs for VPC Service Controls, use the following queries in the Logs Explorer: Query description Expression Violation details based on a denial ID log id ( "cloudaudit.googleapis.com/policy" ) severity = ERROR resource . type = "audited resource" protoPayload . metadata . "@type" = "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" protoPayload . metadata . vpcServiceControlsUniqueId = " UNIQUE ID " Replace UNIQUE ID with the unique ID of the denial.
- For more information, see Dry run mode for service perimeters . metadata.vpcServiceControlsTroubleshootToken A troubleshooting token that lets you diagnose the violation using the violation analyzer . metadata.vpcServiceControlsUniqueId The Unique Identifier of the VPC Service Controls violation described in the record. metadata.violationReason The reason for the violation.

### "Troubleshoot common issues \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- A VM that belongs to project A (which can be a Google Kubernetes Engine node) attempts to access a protected resource in project B but the connection fails, and the following audit log record is generated in project B: { "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "code": 7, "message": "Request is prohibited by organization's policy. vpcServiceControlsUniqueIdentifier: kmpY9Fgfuhgi2NE90lURjFWuiS1nGRqxCw4L12HdW8h46Un - LZw", "details": [ { "@type": "type.googleapis.com/google.rpc.PreconditionFailure", "violations": [ { "type": "VPC SERVICE CONTROLS", "description": "kmpY9Fgfuhgi2NE90lURjFWuiS1nGRqxCw4L12HdW8h46Un - LZw" } ] } ] }, "authenticationInfo": { "principalEmail": "my-user@example.iam.gserviceaccount.com", "serviceAccountKeyName": "//iam.googleapis.com/projects/my-project/serviceAccounts/my-user@example.iam.gserviceaccount.com/keys/<code><var>ACCOUNT KEY</var></code>" }, "requestMetadata": { "callerIp": "gce-internal-ip", "requestAttributes": {}, "destinationAttributes": {} }, "serviceName": "cloudfunctions.googleapis.com", "methodName": "google.cloud.functions.v1.CloudFunctionsService.ListFunctions", "resourceName": "<code><var>PROJECT ID 1</var></code>", "metadata": { "violationReason": "NETWORK NOT IN SAME SERVICE PERIMETER", "resourceNames": [ "projects/<code><var>PROJECT ID 2</var></code>/locations/-" ], "securityPolicyInfo": { "servicePerimeterName": "accessPolicies/<code><var>ACCESS POLICY</var></code>/servicePerimeters/us sandbox", "organizationId": "<code><var>ORGANIZATION ID</var></code>" }, "deviceState": "Unknown", "vpcServiceControlsUniqueId": "kmpY9Fgfuhgi2NE90lURjFWuiS1nGRqxCw4L12HdW8h46Un - LZw", "ingressViolations": [ { "targetResource": "projects/<code><var>PROJECT ID 1</var></code>", "servicePerimeter": "accessPolicies/<code><var>ACCESS POLICY</var></code>/servicePerimeters/<code><var>PERIMETER NAME</var></code>", "source": "<code><var>PROJECT ID 2</var></code>" } ], "@type": "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" } }, "insertId": "tzf7fd103i", "resource": { "type": "audited resource", "labels": { "service": "cloudfunctions.googleapis.com", "method": "google.cloud.functions.v1.CloudFunctionsService.ListFunctions", "project id": "<code><var>PROJECT ID 2</var></code>" } }, "timestamp": "2024-04-02T19:56:10.770681816Z", "severity": "ERROR", "logName": "projects/<code><var>PROJECT ID 2</var></code>/logs/cloudaudit.googleapis.com%2Fpolicy", "receiveTimestamp": "2024-04-02T19:56:11.463811603Z" } The callerIp resource does not record an external IP address.
- The following audit log record is generated: { insertId : "4gbh6pe8jld7" logName : "projects/corp-resources-private/logs/cloudaudit.googleapis.com %2F data access" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { principalEmail : "storage-accessing@example.iam.gserviceaccount.com" } methodName : "jobservice.jobcompleted" requestMetadata : { callerIp : "10.5.0.4" callerNetwork : "//compute.googleapis.com/projects/perimeter-network/global/networks/ unknown " callerSuppliedUserAgent : "google-api-python-client/1.6.5 (gzip),gzip(gfe)" destinationAttributes : { } requestAttributes : { } } resourceName : "projects/corp-resources-private/jobs/bqjob r47ee34109d02b41 000001676b27157c 1" serviceData : { @ type : "type.googleapis.com/google.cloud.bigquery.logging.v1.AuditData" jobCompletedEvent : { eventName : "extract job completed" job : { jobConfiguration : { extract : { destinationUris : [ 0 : "gs://corp-resources-public-1/export.txt" ] sourceTable : { datasetId : "babynames" projectId : "corp-resources-private" tableId : "yob2000" } } } jobName : { jobId : "bqjob r47ee34109d02b41 000001676b27157c 1" location : "US" projectId : "corp-resources-private" } jobStatistics : { createTime : "2018-12-01T19:03:03.908Z" endTime : "2018-12-01T19:03:05.494Z" startTime : "2018-12-01T19:03:04.013Z" } jobStatus : { additionalErrors : [ 0 : { code : 7 message : "Access Denied: BigQuery BigQuery: Permission denied while writing data." } ] error : { code : 7 message : "Access Denied: BigQuery BigQuery: Permission denied while writing data." } state : "DONE" } } } } serviceName : "bigquery.googleapis.com" status : { code : 7 message : "Access Denied: BigQuery BigQuery: Permission denied while writing data." } } receiveTimestamp : "2018-12-01T19:03:05.532169998Z" resource : { labels : { project id : "corp-resources-private" } type : "bigquery resource" } severity : "ERROR" timestamp : "2018-12-01T19:03:05.503Z" } In this audit log record, storage-accessing@example.iam.gserviceaccount.com is identified as the identity attempting to run the operation.
- For example, suppose the following command is used to list all App Engine services within a service perimeter: gcloud app services list The command returns the following output: ERROR: (gcloud.app.services.list) User [ ] does not have permission to access apps instance [ ] (or it may not exist): <!DOCTYPE html> <html lang=en> <meta charset=utf-8> <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width"> <title>Error 403 (Forbidden)!!1</title> <style> {margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px} > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo color 150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){ #logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo color 150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo color 150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){ #logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo color 150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px} </style> <a href=//www.google.com/><span id=logo aria-label=Google></span></a> <p><b>403.</b> <ins>That's an error.</ins> <p>Your client does not have permission to get URL <code>/v1/apps/ /services</code> from this server. <ins>That's all we know.</ins> This type of error is expected for services that are not supported by VPC Service Controls and not available on the restricted VIP.
- The audit log record for the destination service (Cloud Storage) contains detailed reasons for the failure: { insertId : "1bq397kcfj1" logName : "projects/corp-resources-private/logs/cloudaudit.googleapis.com %2F policy" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { principalEmail : "storage-accessing@example.iam.gserviceaccount.com" } metadata : { @ type : "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" resourceNames : [ 0 : "projects/1004338142803" 1 : "projects/ /buckets/corp-resources-public-1" ] violationReason : "RESOURCES NOT IN SAME SERVICE PERIMETER" } methodName : "google.storage.BillingRequiredRead" requestMetadata : { callerIp : "10.5.0.4" callerNetwork : "//compute.googleapis.com/projects/perimeter-network/global/networks/ unknown " destinationAttributes : { } requestAttributes : { } } resourceName : "projects/1004338142803" serviceName : "storage.googleapis.com" status : { code : 7 details : [ 0 : { @ type : "type.googleapis.com/google.rpc.PreconditionFailure" violations : [ 0 : { type : "VPC SERVICE CONTROLS" } ] } ] message : "Request is prohibited by organization's policy" } } receiveTimestamp : "2018-12-01T19:03:05.617451586Z" resource : { labels : { method : "google.storage.BillingRequiredRead" project id : "corp-resources-private" service : "storage.googleapis.com" } type : "audited resource" } severity : "ERROR" timestamp : "2018-12-01T19:03:05.420005215Z" } From this log, it is clear that the two projects 1004338142803 ( corp-resources-private-1 ) and corp-resources-public are both being used to complete the command.

### "Set up a VPC Service Controls perimeter for a Virtual Private Cloud network\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following command requires the google.storage.buckets.list permission which is denied by your perimeter. gcloud storage ls gs://solutions-public-assets/vpcsc-tutorial/ The output is similar to the following: "ERROR: (gcloud.storage.cp) Request is prohibited by organization's policy." This response demonstrates that your perimeter denies internal traffic from listing objects in the external bucket, indicating that the egress policy narrowly allows explicitly specified methods.
- For example, the following command uses the Resource Manager service, which is not configured in the VPC accessible services allowlist. gcloud projects describe PROJECT ID The output is similar to the following: "ERROR: (gcloud.projects.list) PERMISSION DENIED: Request is prohibited by organization's policy." Your Compute Engine instance and other network endpoints can only request services that are configured in the VPC accessible services allowlist.
- From Cloud Shell, create a firewall rule that allows SSH traffic to your VPC network by allowing ingress from the 35.235.240.0/20 IP address range that's used by the IAP for TCP forwarding service: gcloud compute firewall-rules create demo-allow-ssh \ --direction = INGRESS \ --priority = 1000 \ --network = restricted-vpc \ --action = ALLOW \ --rules = tcp:22 \ --source-ranges = 35 .235.240.0/20 Start an SSH session to this instance: gcloud compute ssh demo-vm --zone = ZONE Verify that you have successfully connected to the demo-vm instance by confirming that the command-line prompt has changed to show the hostname of your instance: username @demo - vm : $ If the previous command fails, you might see an error message similar to the following: "[/usr/bin/ssh] exited with return code [255]" In this case, the Compute Engine instance might not have completed booting up.
- This sample creates an access level for the user identity that you're currently using to run the tutorial. export USERNAME = $( gcloud config list account --format "value(core.account)" ) cat <<EOF > user spec.yaml - members: - user: $USERNAME EOF gcloud access-context-manager levels create single user level \ --title = "single-user access level" \ --basic-level-spec = user spec.yaml \ --policy = $POLICY ID gcloud access-context-manager perimeters update demo perimeter \ --add-access-levels = single user level \ --policy = $POLICY ID From Cloud Shell, run the following command again to attempt to create a VM: gcloud compute instances create demo-vm \ --machine-type = e2-micro \ --subnet = restricted-subnet \ --scopes = https://www.googleapis.com/auth/cloud-platform \ --no-address This time, the request works.

