---
title: "Best Practices Using Aerial View API Web Services \_|\_ Google Maps Aerial\
  \ View API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/web-api-best-practices
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/web-api-best-practices
  title: "Best Practices Using Aerial View API Web Services \_|\_ Google Maps Aerial\
    \ View API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Aerial View API
Send feedback
Best Practices Using Aerial View API Web Services
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Maps Platform web services offer HTTP interfaces for accessing geographic data for your map applications, and are intended for use with a map, subject to license restrictions.
These services use HTTP(S) requests with URL parameters and/or JSON-format POST data as arguments, typically returning data in JSON format for your application to process.
Ensure your URLs conform to the URI specification by encoding special characters and be mindful of the 16384 character limit for URLs.
Implement exponential backoff for retrying failed requests and avoid synchronized requests to prevent overloading Google's servers.
Process web service responses dynamically using expressions to extract the specific values you need, as the response format may vary.
The Google Maps Platform web services are a collection of HTTP interfaces to Google
services providing geographic data for your maps applications.
This guide describes some common practices useful for setting up your
web service
requests and processing service responses. Refer to the developer’s guide
for full documentation of the Aerial View API.
What is a web service?
Google Maps Platform web services are an interface for requesting Maps API data from
external services and using the data within your Maps applications. These services are
designed to be used in conjunction with a map, as per the
License Restrictions
in the Google Maps Platform Terms of Service.
The Maps APIs web services use HTTP(S) requests to specific URLs, passing URL parameters and/or
JSON-format POST data as arguments to the services. Generally, these services return data in the
response body as JSON for parsing
and/or processing by your application.
Return an existing aerial video by sending an HTTP GET request to the
lookupVideo method:
https://aerialview.googleapis.com/v1/videos:lookupVideo
Pass query parameters to the request to specify the address or video ID.
Note : All Aerial View API applications require authentication.
Get more information on authentication credentials .
SSL/TLS Access
HTTPS is required for all Google Maps Platform requests that use API keys or contain user
data. Requests made over HTTP that contain sensitive data may be rejected.
Building a valid URL
You may think that a "valid" URL is self-evident, but
that's not quite the case. A URL entered within an address bar in a
browser, for example, may contain special characters (e.g.
"上海+中國" ); the browser needs to internally translate
those characters into a different encoding before transmission.
By the same token, any code that generates or accepts UTF-8 input
might treat URLs with UTF-8 characters as "valid", but would also need
to translate those characters before sending them out to a web server.
This process is called
URL-encoding or percent-encoding .
Caution : Browsers and/or services may automatically
URL-encode a request URI before sending. On APIs that use cryptographic request signing, this can
potentially invalidate the signature, if URL-encoding alters the request after signing. To avoid
this issue, always URL-encode your query string before signing the
request.
Special characters
We need to translate special characters because
all URLs need to conform to the syntax specified by the
Uniform
Resource Identifier (URI) specification. In effect, this means that URLs
must contain only a special subset of ASCII characters: the familiar
alphanumeric symbols, and some reserved characters for use as control
characters within URLs. This table summarizes these characters:
Summary of Valid URL Characters
Set characters URL usage
Alphanumeric
a b c d e f g h i j k l m
n o p q r s t u v w x y z
A B C D E F G H I J K L M
N O P Q R S T U V W X Y Z
0 1 2 3 4 5 6 7 8 9
Text strings, scheme usage ( http ), port ( 8080 ), etc.
Unreserved
- _ . ~
Text strings
Reserved
! * ' ( ) ; : @ & = + $ , / ? % # [ ]
Control characters and/or Text Strings
When building a valid URL, you must ensure that it contains only those characters shown in the
table. Conforming a URL to use this set of characters generally
leads to two issues, one of omission and one of substitution:
Characters that you wish to handle exist outside of the
above set. For example, characters in foreign languages
such as 上海+中國 need to be encoded using the
above characters. By popular convention, spaces (which are
not allowed within URLs) are often represented using the plus
'+' character as well.
Characters exist within the above set as reserved characters,
but need to be used literally.
For example, ? is used within URLs to indicate
the beginning of the query string; if you wish to use the
string "? and the Mysterions," you'd need to encode the
'?' character.
All characters to be URL-encoded are encoded
using a '%' character and a two-character hex
value corresponding to their UTF-8 character. For example,
上海+中國 in UTF-8 would be URL-encoded as
%E4%B8%8A%E6%B5%B7%2B%E4%B8%AD%E5%9C%8B . The
string ? and the Mysterians would be URL-encoded as
%3F+and+the+Mysterians or %3F%20and%20the%20Mysterians .
Common characters that need encoding
Some common characters that must be encoded are:
Unsafe character
Encoded value
Space
%20
"
%22
<
%3C
>
%3E
#
%23
%
%25
|
%7C
Converting a URL that you receive from user input is sometimes
tricky. For example, a user may enter an address as "5th&Main St."
Generally, you should construct your URL from its parts, treating
any user input as literal characters.
Additionally, URLs are limited to 16384 characters for all Google Maps Platform web services
and static web APIs. For most services, this character limit will seldom be approached. However,
note that certain services have several parameters that may result in long URLs.
Polite Use of Google APIs
Poorly designed API clients can place more load than necessary on both the Internet and
Google's servers. This section contains some best practices for clients of the APIs. Following
these best practices can help you avoid your application being blocked for inadvertent abuse of
the APIs.
Exponential Backoff
In rare cases something may go wrong serving your request; you may receive a 4XX or 5XX HTTP
response code, or the TCP connection may simply fail somewhere between your client and Google's
server. Often it is worthwhile re-trying the request as
the followup request may succeed when the original failed. However, it is important not to simply
loop repeatedly making requests to Google's servers. This looping behavior can overload the
network between your client and Google causing problems for many parties.
A better approach is to retry with increasing delays between attempts. Usually the
delay is increased by a multiplicative factor with each attempt, an approach known as
Exponential Backoff .
For example, consider an application that wishes to make this request to
the Time Zone API:
https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331161200&key= YOUR_API_KEY
The following Python example shows how to make the request with exponential backoff:
import json
import time
import urllib.error
import urllib.parse
import urllib.request
# The maps_key defined below isn't a valid Google Maps API key.
# You need to get your own API key.
# See https://developers.google.com/maps/documentation/timezone/get-api-key
API_KEY = "YOUR_KEY_HERE"
TIMEZONE_BASE_URL = "https://maps.googleapis.com/maps/api/timezone/json"
def timezone ( lat , lng , timestamp ):
# Join the parts of the URL together into one string.
params = urllib . parse . urlencode (
{ "location" : f " { lat } , { lng } " , "timestamp" : timestamp , "key" : API_KEY ,}
)
url = f " { TIMEZONE_BASE_URL } ? { params } "
current_delay = 0.1 # Set the initial retry delay to 100ms.
max_delay = 5 # Set the maximum retry delay to 5 seconds.
while True :
try :
# Get the API response.
response = urllib . request . urlopen ( url )
except urllib . error . URLError :
pass # Fall through to the retry loop.
else :
# If we didn't get an IOError then parse the result.
result = json . load ( response )
if result [ "status" ] == "OK" :
return result [ "timeZoneId" ]
elif result [ "status" ] != "UNKNOWN_ERROR" :
# Many API errors cannot be fixed by a retry, e.g. INVALID_REQUEST or
# ZERO_RESULTS. There is no point retrying these requests.
raise Exception ( result [ "error_message" ])
if current_delay > max_delay :
raise Exception ( "Too many retry attempts." )
print ( "Waiting" , current_delay , "seconds before retrying." )
time . sleep ( current_delay )
current_delay *= 2 # Increase the delay each time we retry.
if __name__ == "__main__" :
tz = timezone ( 39.6034810 , - 119.6822510 , 1331161200 )
print ( f "Timezone: { tz } " )
You should also be careful that there isn't retry code higher in the application call
chain that leads to repeated requests in quick succession.
Synchronized Requests
Large numbers of synchronized requests to Google's APIs can look like a Distributed
Denial of Service (DDoS) attack on Google's infrastructure, and be treated accordingly. To
avoid this, you should make sure that API requests are not synchronized
between clients.
For example, consider an application that displays the time in the current time zone.
This application will probably set an alarm in the client operating system waking it up at
the start of the minute so that the displayed time can be updated. The application should
not make any API calls as part of the processing associated with that alarm.
Making API calls in response to a fixed alarm is bad as it results in the API calls being
synchronized to the start of the minute, even between different devices, rather than being
distributed evenly over time. A poorly designed application doing this will produce a spike of
traffic at sixty times normal levels at the start of each minute.
Instead, one possible good design is to have a second alarm set to a randomly chosen time.
When this second alarm fires the application calls any APIs it needs and stores the
results. When the application wants to update its display at the start of the minute, it uses
previously stored results rather than calling the API again. With this approach, API calls
are spread evenly over time. Further, the API calls do not delay rendering when the display is
being updated.
Aside from the start of the minute, other common synchronization times you should be careful
not to target are at the start of an hour, and the start of each day at midnight.
Processing Responses
Note : As the exact format of individual responses with a
web service request is not guaranteed (some elements may be missing or in multiple locations),
you should never assume that the format returned for any given response will be the same for
different queries. Instead, you should process the response and select
appropriate values via expressions .
This section discusses how to extract these values dynamically from web service responses.
The Google Maps web services provide responses which are easy to
understand, but not exactly user friendly. When performing a query, rather
than display a set of data, you probably want to extract a few specific
values. Generally, you will want to parse responses from the web
service and extract only those values which interest you.
The parsing scheme you use depends on whether you are returning
output in JSON. JSON responses, being already in the form of
Javascript objects, may be processed within Javascript itself
on the client.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["Google Maps Platform web services use HTTP(S) requests to access geographic data. These services return data in JSON format for parsing. When building URLs, they must conform to URI specifications, encoding special characters using percent-encoding (e.g., `%20` for space). When using the service, retry failed requests using exponential backoff and avoid synchronizing requests across clients to prevent overloading. Always process service responses to extract needed values using expressions, as response formats can vary. Authentication via an API key is required.\n"]]
