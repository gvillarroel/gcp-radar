---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.667Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Get Site Agents"
feature_slug: "get-site-agents"
latest_feature_date: "2025-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
keywords:
  - "get"
  - "site"
  - "agents"
  - "adds"
  - "an"
  - "action"
  - "that"
  - "lists"
---

# Get Site Agents

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that lists agents for a SentinelOne site.

## Extended Definition

Adds an action that lists agents for a SentinelOne site.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)

## Supporting Pages

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if multiple rules share the same meta label tactic: exfiltration , you can have a composite rule that targets any detection where the tactic label has the value exfiltration .
- Meta labels are particularly flexible because they let you categorize rules so that a composite rule can target any detection with that label.
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.
- Detect data exfiltration attempts This involves correlating several distinct user actions that, when combined, might indicate an attempt to exfiltrate data.

### "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "IpSetIds" : [ '' , '' , '' ] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully listed available sets (is success=true): "Successfully retrieved available Trusted IP lists." The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Get all Trusted IP Lists".
- Brute force attacks are used to gain unauthorized access to your instance by guessing the RDP password." , "Id" : " ID " , "Partition" : "aws" , "Region" : "us-east-1" , "Resource" : { "InstanceDetails" : { "AvailabilityZone" : "us-east-1e" , "ImageId" : "ami- IMAGE ID " , "InstanceId" : "i- INSTANCE ID " , "InstanceState" : "running" , "InstanceType" : "t2.micro" , "LaunchTime" : "2020-05-27T08:54:03Z" , "NetworkInterfaces" : [{ "Ipv6Addresses" : [], "NetworkInterfaceId" : "eni-012d9b8a1a3b4e40a" , "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" , "PrivateIpAddresses" : [{ "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" }], "PublicDnsName" : "ec2-54-234-69-236.compute-1.amazonaws.com" , "PublicIp" : "198.51.100.236" , "SecurityGroups" : [{ "GroupId" : "sg-0fa42e04e9cd15407" , "GroupName" : "Windows Server 2016" }], "SubnetId" : "subnet-2edddf10" , "VpcId" : "vpc-48a7ac32" }], "Platform" : "windows" , "ProductCodes" : [], "Tags" : [{ "Key" : "Name" , "Value" : "CiscoAMP-win2012" }]}, "ResourceType" : "Instance" }, "SchemaVersion" : "2.0" , "Service" : { "Action" : { "ActionType" : "NETWORK CONNECTION" , "NetworkConnectionAction" : { "Blocked" : false , "ConnectionDirection" : "INBOUND" , "LocalPortDetails" : { "Port" : 3389 , "PortName" : "RDP" }, "Protocol" : "TCP" , "LocalIpDetails" : { "IpAddressV4" : "192.0.2.1" }, "RemoteIpDetails" : { "IpAddressV4" : "203.0.113.9" , "Organization" : { "Asn" : "24875" , "AsnOrg" : "Example Inc." , "Isp" : "Example Inc." , "Org" : "Example Inc." }}, "RemotePortDetails" : { "Port" : 1549 , "PortName" : "Unknown" }}}, "Archived" : false , "Count" : 5 , "DetectorId" : " DETECTOR ID " , "EventFirstSeen" : "2020-10-06T05:10:58Z" , "EventLastSeen" : "2020-10-06T05:46:59Z" , "ResourceRole" : "TARGET" , "ServiceName" : "guardduty" }, "Severity" : 2 , "Title" : "203.0.113.9 is performing RDP brute force attacks against i- INSTANCE ID ." , "Type" : "UnauthorizedAccess:EC2/RDPBruteForce" , "UpdatedAt" : "2020-10-06T06:01:46.380Z" }] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If "ErrorCode" is reported (is success=false): "Action wasn't able to get Findings details.
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "ip set id" : { "Format" : "response['Format']" , "Location" : "response['Location']" , "Name" : "response['Name']" , "Status" : "response['Status']" } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details (is success=true): "Successfully retrieved details about the following Trusted IP Lists from Amazon GuardDuty:\n{0}.".format(list of ids)" If not successful for some of the IDs (is success=true) : "Action wasn't able to retrieve details about the following Trusted IP Lists from Amazon GuardDuty:\n{0}.".format(list of ids) If no IDs are used (is success=false): "No details were retrieved about the provided Trusted IP Lists".format(list of ids)" The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Trusted IP Lists".
- Action results Script result Script result name Value options Example is success True or False is success=False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful (is success=true): "Successfully deleted the following Trusted IP lists: <ids>" If not successful for some of the IDs (is success=true): "Action wasn't able to delete the following Trusted IP Lists from Amazon GuardDuty:\n{0}.".format(list of ids)" The action should fail and stop a playbook execution: Invalid detector ID should raise an exception as well, stop the playbook and set is success to false.

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Please note, there are additional policies that match the provided filter." If no data: Print "No Policies were found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, max>1000): print "Error executing action 'List Policies.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result { "PolicyName" : "S3-read-only-bucket" , "PolicyId" : "ANPAYPE7MW7AFKUDK3HD7" , "Arn" : "arn:aws:iam::582302349248:policy/S3-read-only-bucket" , "Path" : "/" , "DefaultVersionId" : "v1" , "AttachmentCount" : 0 , "PermissionsBoundaryUsageCount" : 0 , "IsAttachable" : true , "CreateDate" : "2020-12-6T17:16:45" , "UpdateDate" : "2020-12-6T17:16:45" } Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "<Policy name> policy was successfully created" The action should fail and stop a playbook execution: If error - Policy already exists: Print "Could not create <policy name> policy.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:group/ZivGroup" , "CreateDate" : "2020-12-05 16:18:36+00:00" , "Path" : "/" , "GroupId" : "AGPAYPE7MW7AMKCWMJPMX" , "GroupName" : "ZivGroup" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available groups in AWS IAM" If no data available: Print "No Groups found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, If 'Max Groups'> 1000): print "Error executing action 'List Groups'.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:user/ziv" , "CreateDate" : "2020-12-03T12:12:20" , "Path" : "/" , "UserId" : "AIDAYPE7MW7AFMHK4WCHS" , "UserName" : "ziv" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available users in AWS IAM" If no data available: Print "No users found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, if max>10000): print "Error executing action 'List Users'.

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- Request example GET https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56 Response example { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56", "displayName": "chronicle forwarder", "config": { "uploadCompression": "false", "serverSettings": { "gracefulTimeout": 15, "drainTimeout": 10, "httpSettings": { "port": "8080", "host": "0.0.0.0", "readTimeout": "3", "readHeaderTimeout": "3", "writeTimeout": "3", "idleTimeout": "3" "routeSettings": { "availableStatusCode": "204", "readyStatusCode": "204", "unreadyStatusCode": "503" }, }, }, }, "state": "ACTIVE" } List Forwarders Lists all of the forwarders for a Google SecOps instance.
- Forwarder configuration fields The following table lists the forwarder configuration settings that you can specify using Create Forwarder and Update Forwarder.
- Response example This is an example of the response returned for the request example above. { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56", "displayName": "chronicle forwarder", "config": { "uploadCompression": "false", "serverSettings": { "gracefulTimeout": 15, "drainTimeout": 10, "httpSettings": { "port": "8080", "host": "0.0.0.0", "readTimeout": "3", "readHeaderTimeout": "3", "writeTimeout": "3", "idleTimeout": "3" "routeSettings": { "availableStatusCode": "204", "readyStatusCode": "204", "unreadyStatusCode": "503" }, }, }, }, "state": "ACTIVE" } Get Forwarder Returns a forwarder.

