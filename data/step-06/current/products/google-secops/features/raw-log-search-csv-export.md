---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.719Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Raw log search CSV export"
feature_slug: "raw-log-search-csv-export"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight"
  - "https://docs.cloud.google.com/chronicle/docs/reference/search-api"
keywords:
  - "raw"
  - "log"
  - "search"
  - "csv"
  - "export"
  - "results"
  - "can"
  - "downloaded"
---

# Raw log search CSV export

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Raw log search results can be downloaded as a CSV file with selectable columns.

## Extended Definition

Raw log search results can be downloaded as a CSV file with selectable columns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Use a block comment: additional.fields["pod name"] = "kube-scheduler" / Block comments can span multiple lines. / AND additional.fields["pod name1"] = "kube-scheduler1" Use a single-line comment: additional.fields["pod name"] != "" // my single-line comment Search settings You can set the maximum number of search results in UDM search settings .
- Searching for text in Values returns results as follows: If the string is found at the beginning or end of the value, it is highlighted in the result, along with the UDM field name and the log ingestion time.

### "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- Source ID: `site-api-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Action results Script result Script result name Value options Example is succeed True or False is succeed:False Search Description You can start a search at the ArcSight Command Center from the console event channel.
- Once ran, the results of a report can be viewed in the ArcSight consoles viewer panel, saved (archived), or exported in a variety of formats.
- Copy the following content into that file. #!/bin/bash #Declare the variables: uid= SCRIPTING USER UID gid= SCRIPTING USER GID arcsight ip= ARCSIGHT IP #Install nfs-utils yum install nfs-utils -y #Create the directory that will be shared mkdir /opt/Correlations #Change the permissions chmod -R 755 /opt/Correlations/ chown -R scripting:scripting /opt/Correlations/ #Start the services and enable them to be started at boot time systemctl enable rpcbind systemctl enable nfs-server systemctl enable nfs-lock systemctl enable nfs-idmap systemctl start rpcbind systemctl start nfs-server systemctl start nfs-lock systemctl start nfs-idmap #Edit the exports file as follows echo "/opt/Correlations/ $arcsight ip(rw,sync,all squash,anonuid=$uid,anongid=$gid)">>/etc/exports #Restart the NFS service and export the path systemctl restart nfs-server exportfs -a #If FirewallD is running add the next rules: firewall-cmd --permanent --zone=public --add-service=nfs firewall-cmd --permanent --zone=public --add-service=mountd firewall-cmd --permanent --zone=public --add-service=rpc-bind firewall-cmd --reload setsebool -P nfs export all rw 1 Declare the uid , gid , and arcisght ip variables according to your environment.
- If you are using the old path and are applying the upgrade, then you need to change the permission back to the scripting user with the following steps: Before starting the upgrade, stop the NFS server service: systemctl stop nfs-server After the upgrade is complete, change the folder permissions: chmod -R 755 /opt/siemplify/Correlations/ chown -R scripting:scripting/opt/siemplify/Correlations/ systemctl start nfs-server exportfs -a To confirm that the NFS server is working correctly after the changes, check its status: systemctl status nfs-server Create and configure a user for API access Sign in to the ArcSight console.

### Search \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Response { "events": [ { "metadata": { "eventTimestamp": "2019-11-18T20:36:58.069290Z", "collectedTimestamp": "2019-11-18T20:36:58.069290Z", "eventType": "NETWORK DNS" }, "principal": { "hostname": "enterprise.service.example.com", "ip": ["203.0.113.100"] }, "target": { "ip": ["10.0.2.8"] }, "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "www.altostrat.com", "type": 1 } ], "answers": [ { "name": "www.altostrat.com", "type": 1, "class": 1, "data": "203.0.113.100" } ] } } }, { "metadata": { "eventTimestamp": "2019-11-18T20:36:58.069290Z", "collectedTimestamp": "2019-11-18T20:36:58.069290Z", "eventType": "NETWORK DHCP" }, "principal": { "ip": ["10.0.2.8"] }, "target": { "ip": ["198.51.152"] }, "network": { "applicationProtocol": "DHCP" } }, { "metadata": { "eventTimestamp": "2019-11-18T20:36:58.069290Z", "collectedTimestamp": "2019-11-18T20:36:58.069290Z", "eventType": "NETWORK HTTP" }, "principal": { "ip": ["10.0.2.18"] }, "target": { "hostname": "www.altostrat.com", "url": "http://www.altostrat.com/robots.txt" }, "network": { "ipProtocol": "HTTP", "http": { "method": "METHOD GET", "responseCode": 200 } } } ] uri: ["https://sample.backstory.chronicle.security/assetResults?assetIdentifier= sample asset&referenceTime=2019-12-18T18%3A40%3A34.965Z&selectedList=AssetViewTimeline& startTime=2019-12-18T17%3A20%3A35.445Z&endTime=2019-12-18T19%3A20%3A35.445Z"] } Python sample code def call list events(): Imports required for the sample - Google Auth and API Client Library Imports.
- Sample Request https://backstory.googleapis.com/v1/events:udmSearch?query=metadata.event type+%3D+%22NETWORK CONNECTION%22+and+principal.hostname%3D%22jdx%22&time range.start time=2022-08-04T00%3A00%3A00Z&time range.end time=2022-08-04T01%3A00%3A00Z&limit=100 Sample Response { "events": [ { "name": "00000000c5fd1146ce52d833659247f68b82009d000000000500000000000000", "udm": { "metadata": { "eventTimestamp": "2022-09-14T00:59:59.567051Z", "eventType": "NETWORK CONNECTION", "ingestedTimestamp": "2022-09-14T01:00:20.783486Z", "id": "AAAAAMX9EUbOUtgzZZJH9ouCAJ0AAAAABQAAAAAAAAA=" }, "principal": { "ip": [ "10.9.8.7" ], }, "target": { "ip": [ "74.125.197.190" ], "port": 443 } } }, { "name": "000000000f8e8dc25f873448a3b51ed3e81af0d900000000050000001c000000", "udm": { "metadata": { "eventTimestamp": "2022-09-14T00:59:59.567051Z", "eventType": "NETWORK CONNECTION", "ingestedTimestamp": "2022-09-14T01:00:20.071428Z", "id": "AAAAAA+OjcJfhzRIo7Ue0+ga8NkAAAAABQAAABwAAAA=" }, "principal": { "ip": [ "10.9.8.7" ] }, "target": { "ip": [ "74.125.135.103" ], "port": 443 } } } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following asset indicators identify an asset: Hostname IP address MAC address Product ID Sample response { assets: [ { asset: { hostname: "rick" }, firstSeenArtifactInfo: { artifactIndicator: { domainName: "www.altostrat.com" }, seenTime: "2018-09-14T20:10:27.157476Z" }, lastSeenArtifactInfo: { artifactIndicator: { domainName: "www.altostrat.com" }, seenTime: "2019-10-24T22:04:04.327829Z" } }, { asset: { hostname: "morty" }, firstSeenArtifactInfo: { artifactIndicator: { domainName: "www.altostrat.com" }, seenTime: "2019-06-17T21:22:44.812738Z" }, lastSeenArtifactInfo: { artifactIndicator: { domainName: "www.altostrat.com" }, seenTime: "2019-10-24T20:40:54.846676Z" } }], uri: ["https://sample.backstory.chronicle.security/domainResults?domain= altostrat.com&selectedList=DomainViewDistinctAssets&whoIsTimestamp= 2020-01-08T21%3A09%3A13.000Z"] } Python sample code def call list assets(): Imports required for the sample - Google Auth and API Client Library Imports.
- The artifact indicator must either be a domain name or an IP address. artifact.destination ip address destination IP address Response { sources: [{ addresses: [{ domain: "www.altostrat.com", port: [80] }], category: "Spyware Reporting Server", confidenceScore: {strRawConfidenceScore: "25"}, firstActiveTime: "2013-08-04T00:00:00Z", lastActiveTime: "2019-08-13T00:00:00Z", rawSeverity: "Medium", sourceUrl:"http://tools.emergingthreats.net/docs/ET%20Intelligence%20Rep%20List%20Tech%20Description.pdf" }], uri: ["https://sample.backstory.chronicle.security/domainResults? domain=altostrat.com&selectedList=DomainViewDistinctAssets& whoIsTimestamp=2020-01-09T01%3A29%3A59.526Z" ] } Python sample code def call list ioc details(): Imports required for the sample - Google Auth and API Client Library Imports.

