---
title: "Search \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/reference/search-api
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/reference/search-api
  title: "Search \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Search
This document explains how you can use the Backstory Search API to programmatically access your security data directly through API calls to the Google Security Operations platform, which stores and processes that data. This is the same security data presented
in the Google SecOps UI through your Google SecOps customer account.
Note: There are two differences between data in the Google SecOps UI and data returned by the Search API:
The Alerts page in the Google SecOps UI doesn't show alerts produced by configuration-based normalizer (CBN) parsers. These alerts are returned by the Search API.
The capability to access security data through API calls lets you develop new
applications or modify existing applications to retrieve and process all your security
data stored in Google SecOps.
Get API authentication credentials
Your Google Security Operations representative will provide you with a Google Developer
Service Account Credential to enable the API client to communicate with the API.
You also must provide the Auth Scope when initializing your API client. OAuth 2.0 uses
a scope to limit an application's access to an account. When an application requests a scope,
the access token issued to the application is limited to the scope granted.
Use the following scope to initialize your Backstory API client:
https://www.googleapis.com/auth/chronicle-backstory
Python example
The following Python example demonstrates how to use the OAuth2 credentials
and HTTP client using google.oauth2 and googleapiclient .
# Imports required for the sample - Google Auth and API Client Library Imports.
# Get these packages from https://pypi.org/project/google-api-python-client/ or run $ pip
# install google-api-python-client from your terminal
from google.auth.transport import requests
from google.oauth2 import service_account
SCOPES = ['https://www.googleapis.com/auth/chronicle-backstory']
# The apikeys-demo.json file contains the customer's OAuth 2 credentials.
# SERVICE_ACCOUNT_FILE is the full path to the apikeys-demo.json file
# ToDo: Replace this with the full path to your OAuth2 credentials
SERVICE_ACCOUNT_FILE = '/customer-keys/apikeys-demo.json'
# Create a credential using the Google Developer Service Account Credential and Backstory API
# Scope.
credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
# Build a requests Session Object to make authorized OAuth requests.
http_session = requests.AuthorizedSession(credentials)
# Your endpoint GET|POST|PATCH|etc. code will vary below
# Reference List example (for US region)
url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER_SHA256'
# You might need another regional endpoint for your API call; see
# https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional_endpoints
# requests GET example
response = http_session.request("GET", url)
# POST example uses json
body = {
"foo": "bar"
}
response = http_session.request("POST", url, json=body)
# PATCH example uses params and json
params = {
"foo": "bar"
}
response = http_session.request("PATCH", url, params=params, json=body)
# For more complete examples, see:
# https://github.com/chronicle/api-samples-python/
Examples (in Python) for making OAuth authenticated requests to the Backstory API are provided for each API call referenced in this document.
Search API query submission rate limits
The Search API enforces limits on the number of requests that you can send to the Google SecOps platform. If you reach or exceed the query submission rate limit, the Backstory
API server returns HTTP 429 (RESOURCE_EXHAUSTED) to the caller. When developing applications for
the Backstory API, Google SecOps recommends that you enforce query submission rate limits within your system to avoid
resource exhaustion. These limits apply to all Backstory APIs,
including Search, Customer Management, and Tooling.
The following query submission rate limits are enforced, measured in
queries per second (QPS) or queries per hour (QPH):
API
API Method
Limit
Search
List Alerts
1 QPS
ListEvents
1 QPS
ListIocs
1 QPS
ListIocDetails
1 QPS
ListAssets
5 QPS
ListAssetAliases
1 QPS
ListUserAliases
1 QPS
udmSearch
360 QPH
GetLog
60 QPS
GetEvent
60 QPS
See the detailed list of the Backstory API query limits .
UDM search timeout limits
The query timeout limit for a UDM search is different when you send it using the
UI or an API.
UDM search timeout limits:
Timeout for queries sent from the UI: 1 hour
Timeout for queries sent from an API: 10 minutes
If your search query reaches the timeout limit, you need to reduce the scope of the search. The simplest way to do this is by reducing the time range.
Note: For statistics and aggregations in search, use
Chronicle API UDM Search .
Frequently asked questions
How Do You Specify Time?
For the methods requiring time values, enter time using the time standard defined in RFC 3339. Time is represented by the span of UTC time since Unix epoch 1970-01-01T00:00:00Z.
What is the Page Size Property?
For each API call, you can specify the page_size property to limit the maximum number of returned results. As there's no next page token, to limit the volume of data returned, specify a narrower time range.
What Is an Artifact?
An artifact is an identifier like a website domain, file hash, or IP address that is used to identify a malicious website, file, or computer system that might be contacted or used by a device in your environment.
Artifacts can be any of the following:
Domain name
Destination IP address
File hash (MD5, SHA1, SHA256)
What is an Asset?
An asset is a system within your enterprise that might have been affected by a security incident.
Assets are identified by any of the following:
Hostname
IP address
MAC address
Product ID
Regional Endpoints
Google SecOps provides regional endpoints for each API.
São Paulo — https://southamerica-east1-backstory.googleapis.com
Canada — https://northamerica-northeast2-backstory.googleapis.com
Dammam — https://me-central2-backstory.googleapis.com
Doha — https://me-central1-backstory.googleapis.com
Europe Multi-Region — https://europe-backstory.googleapis.com
Frankfurt — https://europe-west3-backstory.googleapis.com
Jakarta — https://asia-southeast2-backstory.googleapis.com
Johannesburg — https://africa-south1-backstory.googleapis.com
London — https://europe-west2-backstory.googleapis.com
Mumbai — https://asia-south1-backstory.googleapis.com
Paris — https://europe-west9-backstory.googleapis.com
Warsaw — https://europe-central2-backstory.googleapis.com
Singapore — https://asia-southeast1-backstory.googleapis.com
Sydney — https://australia-southeast1-backstory.googleapis.com
Tel Aviv — https://me-west1-backstory.googleapis.com
Tokyo — https://asia-northeast1-backstory.googleapis.com
Turin — https://europe-west12-backstory.googleapis.com
United States Multi-Region — https://backstory.googleapis.com
Zurich — https://europe-west6-backstory.googleapis.com
The following example shows the Europe multi-region endpoint for the listalerts method:
https://europe-backstory.googleapis.com/v1/alert/listalerts
Strings in APIs require URL-encoding
All special characters in string-type API parameters (such as + ) must be URL-encoded; otherwise, the request will return a 400 error.
Search API reference
GetLog
Returns a single raw log given the UID for the event.
Request
GET https://backstory.googleapis.com/v1/events/log:get/?name={UID}
Sample request
https://backstory.googleapis.com/v1/events/log:get/?name=AAAAAFRjuBh0IYHHdk85GXpvBBoAAAAABQAAAAEAAAA=
URL parameters
Parameter names
Value
Description
name
string
The metadata.id for a Google SecOps Unified Data Model (UDM) event. For example, AAAAAFRjuBh0IYHHdk85GXpvBBoAAAAABQAAAAEAAAA= . The metadata.id is also shown in the Event Viewer in the Google SecOps UI.
Sample Response
{
"log": {
"sourceProduct": "Security System",
"logBytes": "MTkyLjE2OC44Ni4yNAk0MDg1MAczNjkuMjU0LjE2OS4yNTQJODAJR0VUCTE2OS4yNTQuMTY5LjI1NAkvY23tcHV0ZU1ldGFkYXRhL3YxL2luc3RjymNlL2F0dHJpYnV0ZXMvZ29vYnVudHUtcHJvdmlzaW9uaW5nLXVzZXIJZ2Nsb3VkLWdvbGFuZy8wLjE=",
"type": "INTERNAL_WEBPROXY"
}
}
GetEvent
Returns a single event given the UID for the event.
Request
GET https://backstory.googleapis.com/v1/event:get?name={UID}
Sample request
https://backstory.googleapis.com/v1/event:get?name=ABCDEF1ghiJKlmnOpqrs2tuv3wXYYYYYZZABCD4ABCD=
URL parameters
Parameter names
Value
Description
name
string
The metadata.id for a Google SecOps Unified Data Model (UDM) event. For example, ABCDEF1ghiJKlmnOpqrs2tuv3wXYYYYYZZABCD4ABCD= . The metadata.id is also shown in the Event Viewer in the Google SecOps UI.
Sample Response
{
"udm": {
"metadata": {
"productLogId": "12abc345-abcd-678e-9012-fg3456789hij",
"eventTimestamp": "2023-01-24T21:40:00Z",
"eventType": "NETWORK_CONNECTION",
"vendorName": "Palo Alto Networks",
"productName": "ABCD",
"productEventType": "TRAFFIC - start",
"ingestedTimestamp": "2023-01-24T21:40:05.710838Z",
"id": "ABCDEF1ghiJKlmnOpqrs2tuv3wXYYYYYZZABCD4ABCD="
},
"principal": {
"hostname": "abc",
"ip": [
"192.0.2.1"
],
"port": 50000,
"mac": [
"12:34:56:7a:b8:c9"
],
"asset": {
"productObjectId": "1859c98c-923d-4db0-a549-aee312a35dd9",
"hostname": "abc",
"ip": [
"192.0.2.1"
],
"mac": [
"12:34:56:7a:b8:c9"
],
"hardware": [
{
"manufacturer": "Apple",
"model": "MacBook Pro (14-inch, 2021)"
}
],
"platformSoftware": {
"platform": "MAC",
"platformVersion": "macOS Monterey 12.2"
},
"type": "LAPTOP"
}
},
"target": {
"hostname": "github.com",
"port": 60000
},
"securityResult": [
{
"action": [
"ALLOW"
]
}
],
"network": {
"sentBytes": "54321",
"receivedBytes": "54123",
"ipProtocol": "TCP",
"sessionId": "123456"
}
}
}
ListAssets
Lists all the assets that accessed the specified artifact in your enterprise within
the specified time period. ListAssets includes the first and last time the assets accessed
the artifact. This call returns a maximum of 100 assets per request. You can specify
a narrower time period to reduce the number of assets returned.
Request
GET https://backstory.googleapis.com/v1/artifact/listassets?start_time=time&end_time=time&artifact.type=value&page_size=size
Sample request
https://backstory.googleapis.com/v1/artifact/listassets?start_time=2019-10-15T00:00:00Z&end_time=2019-10-17T00:00:00Z&artifact.domain_name=www.altostrat.com&page_size=1
URL parameters
Parameter name
Value
Description
artifact.domain_name
domain name
Specify the artifact indicator associated with the assets. You can only specify a single artifact. Specify one of the following artifact indicators:
domain name
destination IP address
file hash (one of MD5, SHA1, SHA256)
artifact.destination_ip_address
destination IP address
artifact.hash_md5
MD5 hash
artifact.hash_sha1
SHA1 hash
artifact.hash_sha256
SHA256 hash
start_time
time
Start time for your request.
end_time
time
End time for your request.
page_size
integer
Specify the maximum number of assets to return. You can specify between 1 and 100. The default is 100.
Response
This method responds with a list of the assets associated with the artifact, as well as a URI to link to asset view in the Google SecOps user interface.
The following asset indicators identify an asset:
Hostname
IP address
MAC address
Product ID
Sample response
{
assets: [
{
asset: {
hostname: "rick"
},
firstSeenArtifactInfo: {
artifactIndicator: {
domainName: "www.altostrat.com"
},
seenTime: "2018-09-14T20:10:27.157476Z"
},
lastSeenArtifactInfo: {
artifactIndicator: {
domainName: "www.altostrat.com"
},
seenTime: "2019-10-24T22:04:04.327829Z"
}
},
{
asset: {
hostname: "morty"
},
firstSeenArtifactInfo: {
artifactIndicator: {
domainName: "www.altostrat.com"
},
seenTime: "2019-06-17T21:22:44.812738Z"
},
lastSeenArtifactInfo: {
artifactIndicator: {
domainName: "www.altostrat.com"
},
seenTime: "2019-10-24T20:40:54.846676Z"
}
}],
uri: ["https://sample.backstory.chronicle.security/domainResults?domain=
altostrat.com&selectedList=DomainViewDistinctAssets&whoIsTimestamp=
2020-01-08T21%3A09%3A13.000Z"]
}
Python sample code
def call_list_assets():
# Imports required for the sample - Google Auth and API Client Library Imports.
# Get these packages from https://pypi.org/project/google-api-python-client/ or
# run $ pip install google-api-python-client from your terminal
import os
from google.oauth2 import service_account
from googleapiclient import _auth
# Constants
SCOPES = ['https://www.googleapis.com/auth/chronicle-backstory']
# Change to the location you placed your JSON file.
SERVICE_ACCOUNT_FILE = os.path.join(os.environ['HOME'], 'bk_credentials.json')
# Create a credential using the Google Developer Service Account Credential and Backstory API scope.
credentials = service_account.Credentials.from_service_account_file(
SERVICE_ACCOUNT_FILE, scopes=SCOPES)
# Build an HTTP client which can make authorized OAuth requests.
http_client = _auth.authorized_http(credentials)
# Construct the URL
BACKSTORY_API_V1_URL = 'https://backstory.googleapis.com/v1'
LIST_ASSETS_URL = '{}/artifact/listassets?start_time=2019-10-15T00:00:00Z&end_time=2019-10-17T00:00:00Z&artifact.domain_name=
www.altostrat.com&page_size=1'.format(BACKSTORY_API_V1_URL)
# Make a request
response = http_client.request(LIST_ASSETS_URL, 'GET')
# Parse the response
if response[0].status == 200:
assets = response[1]
# List of Assets returned for further processing
print(assets)
else:
# An error occurred. See the response for details.
err = response[1]
print(err)
ListAssetAliases
Lists all the aliases of an asset in an enterprise for the specified asset identifier and time period.
Request
GET https://backstory.googleapis.com/v1/alias/listassetaliases?start_time=time&end_time=time&asset.type=value&page_size=size
Sample request
https://backstory.googleapis.com/v1/alias/listassetaliases?start_time=2022-01-01T00:00:00Z&end_time=2022-10-01T00:00:00Z&asset.hostname=www.altostrat.com&page_size=1
URL parameters
Parameter name
Value
UDM field
Description
asset.hostname
string
entity.asset.hostname
Specify the asset indicator associated with the assets. You can only specify a single asset.
Specify one of the following asset indicators:
hostname
IP address
MAC address
product ID
asset.asset_ip_address
Asset IP address
entity.asset.ip
asset.mac
Asset MAC address
entity.asset.mac
asset.product_id
integer
entity.asset.asset_id
start_time
time
NA
Start time of your request.
end_time
time
NA
End time for your request.
page_size
integer
NA
Specify the maximum number of aliases to return. You can specify between 1 and 10,000. The default is 10,000.
Response
This method responds with a list of the aliases associated with the asset for
the duration, which is specified by the start time and end time in the request.
The following asset indicators identify an asset:
Hostname
IP address
MAC address
Product ID
Sample response
{
"aliases": [
{
"metadata": {
"interval": {
"startTime": "2022-09-28T00:00:00Z",
"endTime": "2022-10-01T00:00:00Z"
}
},
"entity": {
"asset": {
"hostname": "www"
}
}
},
{
"metadata": {
"interval": {
"startTime": "2022-01-01T00:00:00Z",
"endTime": "2022-09-28T00:00:00Z"
}
},
"entity": {
"asset": {
"hostname": "www.altostrat.com"
}
}
},
{
"metadata": {
"interval": {
"startTime": "2022-01-01T00:00:00Z",
"endTime": "2022-09-28T00:00:00Z"
}
},
"entity": {
"asset": {
"hostname": "www"
}
}
}
]
}
Python sample code
def call_list_asset_aliases():
# Imports required for the sample - Google Auth and API Client Library Imports.
# Get these packages from https://pypi.org/project/google-api-python-client/ or
# run $ pip install google-api-python-client from your terminal
import os
from google.oauth2 import service_account
from googleapiclient import _auth
# Constants
SCOPES = ['https://www.googleapis.com/auth/chronicle-backstory']
# Change to the location you placed your JSON file.
SERVICE_ACCOUNT_FILE = os.path.join(os.environ['HOME'], 'bk_credentials.json')
# Create a credential using Google Developer Service Account Credential and Backstory API scope.
credentials = service_account.Credentials.from_service_account_file(
SERVICE_ACCOUNT_FILE, scopes=SCOPES)
# Build an HTTP client which can make authorized OAuth requests.
http_client = _auth.authorized_http(credentials)
# Construct the URL
BACKSTORY_API_V1_URL = 'https://backstory.googleapis.com/v1'
LIST_ASSET_ALIASES_URL = '{}/alias/listassetaliases?start_time=2022-01-01T00:00:00Z&end_time=
2022-10-01T00:00:00Z&asset.hostname=www.altostrat.com&page_size=1'.format(BACKSTORY_API_V1_URL)
# Make a request
response = http_client.request(LIST_ASSET_ALIASES_URL, 'GET')
# Parse the response
if response[0].status == 200:
aliases = response[1]
# List of aliases returned for further processing
print(aliases)
else:
# An error occurred. See the response for details.
err = response[1]
print(err)
ListEvents
Lists all the events discovered within your enterprise on a particular device within the specified time range.
If you receive the maximum number of events you specified using the page_size parameter (or 10,000, the default), there might still be more events within your Google SecOps account. You can narrow the time range and issue the call again to ensure you have visibility into all possible events.
Request
GET https://backstory.googleapis.com/v1/asset/listevents?start_time=time&page_size=size&end_time=time&reference_time=time&asset.indicator=indicator
Sample request
https://backstory.googleapis.com/v1/asset/listevents?start_time=2019-11-17T20:37:00Z&page_size=10&end_time=2019-11-18T20:37:00Z&reference_time=2019-11-17T20:37:00Z&asset.hostname=enterprise.service.altostrat.com
URL parameters
Parameter name
Value
Description
asset._indicator
string
Specify the indicator for the asset that you're investigating. The indicator can be any of the following:
hostname
asset_ip_address
mac address
product_id (combined product ID type and product ID value, for example CS:1234-5678)
start_time
time
Start time for your request.
end_time
time
End time for your request.
reference_time
time
Specify the reference time for the asset that you're investigating.
page_size
integer
Specify the maximum number of events to return. You can specify between 1 and 10,000. The default is 10,000.
Response
{
"events": [
{
"metadata": {
"eventTimestamp": "2019-11-18T20:36:58.069290Z",
"collectedTimestamp": "2019-11-18T20:36:58.069290Z",
"eventType": "NETWORK_DNS"
},
"principal": {
"hostname": "enterprise.service.example.com",
"ip": ["203.0.113.100"]
},
"target": {
"ip": ["10.0.2.8"]
},
"network": {
"applicationProtocol": "DNS",
"dns": {
"questions": [
{
"name": "www.altostrat.com",
"type": 1
}
],
"answers": [
{
"name": "www.altostrat.com",
"type": 1,
"class": 1,
"data": "203.0.113.100"
}
]
}
}
},
{
"metadata": {
"eventTimestamp": "2019-11-18T20:36:58.069290Z",
"collectedTimestamp": "2019-11-18T20:36:58.069290Z",
"eventType": "NETWORK_DHCP"
},
"principal": {
"ip": ["10.0.2.8"]
},
"target": {
"ip": ["198.51.152"]
},
"network": {
"applicationProtocol": "DHCP"
}
},
{
"metadata": {
"eventTimestamp": "2019-11-18T20:36:58.069290Z",
"collectedTimestamp": "2019-11-18T20:36:58.069290Z",
"eventType": "NETWORK_HTTP"
},
"principal": {
"ip": ["10.0.2.18"]
},
"target": {
"hostname": "www.altostrat.com",
"url": "http://www.altostrat.com/robots.txt"
},
"network": {
"ipProtocol": "HTTP",
"http": {
"method": "METHOD_GET",
"responseCode": 200
}
}
}
]
uri: ["https://sample.backstory.chronicle.security/assetResults?assetIdentifier=
sample_asset&referenceTime=2019-12-18T18%3A40%3A34.965Z&selectedList=AssetViewTimeline&
startTime=2019-12-18T17%3A20%3A35.445Z&endTime=2019-12-18T19%3A20%3A35.445Z"]
}
Python sample code
def call_list_events():
# Imports required for the sample - Google Auth and API Client Library Imports.
# Get these packages from https://pypi.org/project/google-api-python-client/
# or run $ pip install google-api-python-client from your terminal
import os
from google.oauth2 import service_account
from googleapiclient import _auth
# Constants
SCOPES = ['https://www.googleapis.com/auth/chronicle-backstory']
# Change to the location you placed your JSON file.
SERVICE_ACCOUNT_FILE = os.path.join(os.environ['HOME'], 'bk_credentials.json')
# Create a credential using Google Developer Service Account Credential and Backstory API scope.
credentials = service_account.Credentials.from_service_account_file(
SERVICE_ACCOUNT_FILE, scopes=SCOPES)
# Build an HTTP client that can make authorized OAuth requests.
http_client = _auth.authorized_http(credentials)
# Construct the URL
BACKSTORY_API_V1_URL = 'https://backstory.googleapis.com/v1'
LIST_EVENTS_URL = '{}/asset/listevents?start_time=2019-11-17T20:37:00Z&page_size=10&end_time=
2019-11-18T20:37:00Z&reference_time=2019-11-17T20:37:00Z&asset.hostname=
enterprise.service.altostrat.com'.format(BACKSTORY_API_V1_URL)
# Make a request
response = http_client.request(LIST_EVENTS_URL, 'GET')
# Parse the response
if response[0].status == 200:
asset_events = response[1]
# List of events returned for further processing
print(asset_events)
else:
# An error occurred, please see the response detail
err = response[1]
print(err)
ListIoCs
Lists all the IoCs discovered within your enterprise within the specified time range. If you receive the maximum number of IoCs you specified using the page_size parameter (or 10,000, the default), there might still be more IoCs discovered in your Google SecOps account. You might want to narrow the time range and issue the call again to ensure you have visibility on all possible IoCs.
Request
GET https://backstory.googleapis.com/v1/ioc/listiocs?start_time=time&page_size=size
Sample request
https://backstory.googleapis.com/v1/ioc/listiocs?start_time=2019-10-15T20:37:00Z&page_size=1
URL parameters
Parameter name
Value
Description
start_time
time
Start time for your request.
page_size
integer
Specify the maximum number of IoCs to return. You can specify between 1 and 10,000. The default is 10,000.
Note: IoCs returned by this method are the IoCs that were discovered by Google SecOps within the specified time range in your enterprise environment. There might be IoCs within your data that were present before their discovery by Google SecOps.
Response
{
matches: [{
artifact: {
domainName: "www.example.com"
},
firstSeenTime: "2018-05-25T20:47:11.048998Z",
iocIngestTime: "2019-08-14T21:00:00Z",
lastSeenTime: "2019-10-24T16:19:46.880830Z",
sources: [{
category: "Spyware Reporting Server",
confidenceScore: {
intRawConfidenceScore: 0,
normalizedConfidenceScore: "Low"
},
rawSeverity: "Medium",
source: "ET Intelligence Rep List"
}],
uri: ["https://sample.backstory.chronicle.security/assetResults?assetIdentifier=sample_asset&
referenceTime=2019-12-18T18%3A40%3A34.965Z&selectedList=AssetViewTimeline&
startTime=2019-12-18T17%3A20%3A35.445Z&endTime=2019-12-18T19%3A20%3A35.445Z"]
}],
moreDataAvailable: true
}
Python sample code
def call_list_iocs():
# Imports required for the sample - Google Auth and API Client Library Imports.
# Get these packages from https://pypi.org/project/google-api-python-client/
# or run $ pip install google-api-python-client from your terminal
import os
from google.oauth2 import service_account
from googleapiclient import _auth
# Constants
SCOPES = ['https://www.googleapis.com/auth/chronicle-backstory']
# Change to the location you placed your JSON file.
SERVICE_ACCOUNT_FILE = os.path.join(os.environ['HOME'], 'bk_credentials.json')
# Create a credential using the Google Developer Service Account Credential and Backstory API scope.
credentials = service_account.Credentials.from_service_account_file(
SERVICE_ACCOUNT_FILE, scopes=SCOPES)
# Build an HTTP client which can make authorized OAuth requests.
http_client = _auth.authorized_http(credentials)
# Construct the URL
BACKSTORY_API_V1_URL = 'https://backstory.googleapis.com/v1'
LIST_IOCS_URL = '{}/ioc/listiocs?start_time=2019-10-15T20:37:00Z&page_size=1'.format(BACKSTORY_API_V1_URL)
# Make a request
response = http_client.request(LIST_IOCS_URL, 'GET')
# Parse the response
if response[0].status == 200:
iocs = response[1]
# List of IoCs returned for further processing
print(iocs)
else:
# An error occurred. See the response for details.
err = response[1]
print(err)
ListIoCDetails
Returns the threat intelligence associated with an artifact. The threat intelligence information is obtained from your enterprise security systems and from IoC partners of Google (for example, the DHS threat feed).
Request
GET https://backstory.googleapis.com/v1/artifact/listiocdetails?artifact.type=<value>
Sample request
https://backstory.googleapis.com/v1/artifact/listiocdetails?artifact.domain_name=www.altostrat.com
URL parameters
Parameter name
Value
Description
artifact.domain_name
domain name
Specify the artifact indicator associated with the assets. You can only specify
a single artifact. The artifact indicator must either be a domain name or an IP address.
artifact.destination_ip_address
destination IP address
Response
{
sources: [{
addresses: [{
domain: "www.altostrat.com",
port: [80]
}],
category: "Spyware Reporting Server",
confidenceScore: {strRawConfidenceScore: "25"},
firstActiveTime: "2013-08-04T00:00:00Z",
lastActiveTime: "2019-08-13T00:00:00Z",
rawSeverity: "Medium",
sourceUrl:"http://tools.emergingthreats.net/docs/ET%20Intelligence%20Rep%20List%20Tech%20Description.pdf"
}],
uri: ["https://sample.backstory.chronicle.security/domainResults?
domain=altostrat.com&selectedList=DomainViewDistinctAssets&
whoIsTimestamp=2020-01-09T01%3A29%3A59.526Z"
]
}
Python sample code
def call_list_ioc_details():
# Imports required for the sample - Google Auth and API Client Library Imports.
# Get these packages from https://pypi.org/project/google-api-python-client/
# or run $ pip install google-api-python-client from your terminal
import os
from google.oauth2 import service_account
from googleapiclient import _auth
# Constants
SCOPES = ['https://www.googleapis.com/auth/chronicle-backstory']
# Change to the location you placed your JSON file.
SERVICE_ACCOUNT_FILE = os.path.join(os.environ['HOME'], 'bk_credentials.json')
# Create a credential using the Google Developer Service Account Credential and Backstory API scope.
credentials = service_account.Credentials.from_service_account_file(
SERVICE_ACCOUNT_FILE, scopes=SCOPES)
# Build an HTTP client which can make authorized OAuth requests.
http_client = _auth.authorized_http(credentials)
# Construct the URL
BACKSTORY_API_V1_URL = 'https://backstory.googleapis.com/v1'
LIST_IOC_DETAILS_URL = '{}/artifact/listiocdetails?artifact.domain_name=www.altostrat.com'
.format(BACKSTORY_API_V1_URL)
# Make a request
response = http_client.request(LIST_IOC_DETAILS_URL, 'GET')
# Parse the response
if response[0].status == 200:
iocs = response[1]
# List of sources returned for further processing
print(iocs)
else:
# An error occurred. See the response for details.
err = response[1]
print(err)
ListUserAliases
Lists all the aliases of a user in an enterprise for a specified user identifier and time period.
Request
GET https://backstory.googleapis.com/v1/alias/listuseraliases?start_time=time&end_time=time&user.type=value&page_size=size
Sample request
https://backstory.googleapis.com/v1/alias/listassetaliases?start_time=2022-01-01T00:00:00Z&end_time=2022-12-17T00:00:00Z&user.username=alex&page_size=1
URL parameters
Parameter name
Value
UDM field
Description
user.email
email
entity.user.email
Specify the user indicator associated with the user. You can only specify a single user. Specify one of the following user indicators:
email
username
Windows SID
employee ID
product object ID
user.username
string
entity.user.userid
user.windows_sid
string
entity.user.windows_sid
user.employee_id
string
entity.user.employee_id
user.product_object_id
string
entity.user.product_object_id
start_time
time
NA
Start time for your request.
end_time
time
NA
End time for your request.
page_size
integer
NA
Specify the maximum number of assets to return. You can specify between 1 and 10,000. The default is 10,000.
Response
This method responds with a list of the aliases associated with the user for the duration, which is specified by the start time and end time in the request.
The aliases are identified by the user indicator and can be any of the following:
Email
Username
Windows SID
Employee ID
Product Object ID
{
"userAliases": [
{
"metadata": {
"productEntityId": "55555555555",
"collectedTimestamp": "2022-02-12T00:02:34.131589Z",
"entityType": "USER",
"creationTimestamp": "2022-02-12T00:02:34.131589Z",
"interval": {
"startTime": "2022-02-12T00:02:34.131589Z",
"endTime": "2022-02-12T00:23:43.905549Z"
}
},
"entity": {
"user": {
"userid": "alex",
"userDisplayName": "Alex",
"productObjectId": "55555555555",
"title": "Software Engineer",
"companyName": "Example Organization"
}
}
},
{
"metadata": {
"productEntityId": "eb92626a-5d9e-40fd-931d-dfebd1422441",
"collectedTimestamp": "2022-03-03T20:36:24.208983Z",
"entityType": "USER",
"creationTimestamp": "2022-03-03T20:36:24.208983Z",
"interval": {
"startTime": "2022-03-03T20:36:24.208983Z",
"endTime": "2022-03-03T20:48:12.714821Z"
}
},
"entity": {
"user": {
"userid": "alex",
"userDisplayName": "Alex",
"productObjectId": "eb92626a-5d9e-40fd-931d-dfebd1422441",
"title": "Software Engineer",
"companyName": "Example Organization"
}
},
"relations": [
{
"entity": {
"hostname": "alex",
"asset": {
"productObjectId": "1859c98c-923d-4db0-a549-aee312a35dd9",
"hostname": "alex"
}
},
"entityType": "ASSET",
"relationship": "OWNS"
}
]
}
]
}
Python sample code
def call_list_user_aliases():
# Imports required for the sample - Google Auth and API Client Library Imports.
# Get these packages from https://pypi.org/project/google-api-python-client/ or
# run $ pip install google-api-python-client from your terminal
import os
from google.oauth2 import service_account
from googleapiclient import _auth
# Constants
SCOPES = ['https://www.googleapis.com/auth/chronicle-backstory']
# Specify the location where you stored the JSON file.
SERVICE_ACCOUNT_FILE = os.path.join(os.environ['HOME'], 'bk_credentials.json')
# Create a credential using Google Developer Service Account Credential and Backstory API scope.
credentials = service_account.Credentials.from_service_account_file(
SERVICE_ACCOUNT_FILE, scopes=SCOPES)
# Build an HTTP client which can make authorized OAuth requests.
http_client = _auth.authorized_http(credentials)
# Construct the URL
BACKSTORY_API_V1_URL = 'https://backstory.googleapis.com/v1'
LIST_USER_ALIASES_URL = '{}/alias/listuseraliases?start_time=2019-10-15T00:00:00Z&end_time=
2022-12-17T00:00:00Z&user.username=alex&page_size=1'.format(BACKSTORY_API_V1_URL)
# Make a request
response = http_client.request(LIST_USER_ALIASES_URL, 'GET')
# Parse the response
if response[0].status == 200:
aliases = response[1]
# List of aliases returned for further processing
print(aliases)
else:
# An error occurred. See the response for details.
err = response[1]
print(err)
udmSearch
This method enables customers to programmatically complete a UDM Search query and retrieve matches.
Note: The maximum time window (start time to end time) is 90 days.
Request
GET https://backstory.googleapis.com/v1/events:udmSearch?query=<query>&time_range.start_time=<start_time>&time_range.end_time=<end_time>&limit=<limit>
Parameters
Parameter Name
Type
Description
query
string
UDM search query.
time_range.start_time
ISO 8601 format
Inclusive start time.
time_range.end_time
ISO 8601 format
Exclusive end time.
limit
integer
(Optional) The maximum number of matched events to return. Must be less than or equal to 10,000.
Response
The API responds with a list of matched UDM events (up to the limit).
Response Fields
Field
Description
events
List of matched UDM events.
moreDataAvailable
Set to true if the limit was reached and more matches exist.
Sample Request
https://backstory.googleapis.com/v1/events:udmSearch?query=metadata.event_type+%3D+%22NETWORK_CONNECTION%22+and+principal.hostname%3D%22jdx%22&time_range.start_time=2022-08-04T00%3A00%3A00Z&time_range.end_time=2022-08-04T01%3A00%3A00Z&limit=100
Sample Response
{
"events": [
{
"name": "00000000c5fd1146ce52d833659247f68b82009d000000000500000000000000",
"udm": {
"metadata": {
"eventTimestamp": "2022-09-14T00:59:59.567051Z",
"eventType": "NETWORK_CONNECTION",
"ingestedTimestamp": "2022-09-14T01:00:20.783486Z",
"id": "AAAAAMX9EUbOUtgzZZJH9ouCAJ0AAAAABQAAAAAAAAA="
},
"principal": {
"ip": [
"10.9.8.7"
],
},
"target": {
"ip": [
"74.125.197.190"
],
"port": 443
}
}
},
{
"name": "000000000f8e8dc25f873448a3b51ed3e81af0d900000000050000001c000000",
"udm": {
"metadata": {
"eventTimestamp": "2022-09-14T00:59:59.567051Z",
"eventType": "NETWORK_CONNECTION",
"ingestedTimestamp": "2022-09-14T01:00:20.071428Z",
"id": "AAAAAA+OjcJfhzRIo7Ue0+ga8NkAAAAABQAAABwAAAA="
},
"principal": {
"ip": [
"10.9.8.7"
]
},
"target": {
"ip": [
"74.125.135.103"
],
"port": 443
}
}
}
]
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
