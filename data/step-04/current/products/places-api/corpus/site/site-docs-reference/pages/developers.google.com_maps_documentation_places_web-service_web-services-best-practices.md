---
title: "Best Practices Using Places API Web Services \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/web-services-best-practices
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/web-services-best-practices
  title: "Best Practices Using Places API Web Services \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Resources
Send feedback
Best Practices Using Places API Web Services
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Maps Platform Web Services provide geographic data for map applications and require an API key for authentication.
Building valid URLs for these services involves adhering to character limits, encoding special characters, and complying with URI specifications.
To ensure polite API usage, implement exponential backoff for retries and avoid large numbers of synchronized requests.
When processing API responses, remember that formats can vary and utilize dynamic parsing with expressions (JSON or XML with XPath).
XPath is a query language for extracting specific data from XML documents using path-like expressions to target elements and attributes.
The Google Maps Platform web services are a collection of HTTP interfaces to Google
services providing geographic data for your maps applications.
This guide describes some common practices useful for setting up your
web service
requests and processing service responses. Refer to the developer’s guide
for full documentation of the Places API.
What is a web service?
Google Maps Platform web services are an interface for requesting Maps API data from
external services and using the data within your Maps applications. These services are
designed to be used in conjunction with a map, as per the
License Restrictions
in the Google Maps Platform Terms of Service.
The Maps APIs web services use HTTP(S) requests to specific URLs, passing URL parameters and/or
JSON-format POST data as arguments to the services. Generally, these services return data in the
response body as either JSON or XML for parsing
and/or processing by your application.
A typical Places API request is generally of the
following form:
https://places.googleapis.com/v1/places/ PLACE_ID ? parameters
Note : All Places API applications require authentication.
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
output in XML or JSON. JSON responses, being already in the form of
Javascript objects, may be processed within Javascript itself
on the client.
XML responses should be processed using an XML processor
and an XML query language to address elements within the XML format.
We use XPath in the
following examples, as it is commonly supported in XML processing
libraries.
Processing XML with XPath
XML is a relatively mature structured information format used for
data interchange. Although it is not as lightweight as JSON, XML
does provide more language support and more robust tools. Code for
processing XML in Java, for example, is built into the
javax.xml packages.
When processing XML responses, you should use an appropriate
query language for selecting nodes within the XML document, rather
than assume the elements reside at absolute positions within the
XML markup. XPath
is a language syntax for uniquely describing nodes and elements
within an XML document. XPath expressions allow you to identify
specific content within the XML response document.
XPath Expressions
Some familiarity with XPath goes a long way towards developing
a robust parsing scheme. This section will focus on how elements
within an XML document are addressed with XPath, allowing you to
address multiple elements and construct complex queries.
XPath uses expressions to select elements within an XML
document, using a syntax similar to that used for directory paths.
These expressions identify elements within an XML document
tree, which is a hierarchical tree similar to that of a DOM.
Generally, XPath expressions are greedy, indicating that they
will match all nodes which match the supplied criteria.
We'll use the following abstract XML to illustrate our
examples:
<WebServiceResponse>
<status>OK</status>
<result>
<type>sample</type>
<name>Sample XML</name>
<location>
<lat>37.4217550</lat>
<lng>-122.0846330</lng>
</location>
</result>
<result>
<message>The secret message</message>
</result>
</WebServiceResponse>
Node Selection in Expressions
XPath selections select nodes . The root node
encompasses the entire document. You select this node using
the special expression " / ". Note that the root
node is not the top-level node of your XML document; actually,
it resides one level above this top-level element and includes
it.
Element nodes represent the various elements within the XML
document tree. A <WebServiceResponse> element,
for example, represents the top-level element returned in our
sample service above. You select individual nodes either via
absolute or relative paths, indicated by the presence or
absence of a leading " / " character.
Absolute path: the " /WebServiceResponse/result "
expression selects all <result> nodes that
are children of the <WebServiceResponse>
node. (Note that both of these elements descend from the root
node " / ".)
Relative path from the current context: the expression
" result " would match any <result>
elements within the current context. Generally, you shouldn't
have to worry about context, as you're usually processing web
service results via a single expression.
Either of these expressions may be augmented through addition
of a wildcard path, indicated with a double-slash (" // ").
This wildcard indicates that zero or more elements may match in the
intervening path. The XPath expression " //formatted_address ,"
for example, will match all nodes of that name in the current document.
The expression //viewport//lat would match all
<lat> elements that can trace <viewport>
as a parent.
By default, XPath expressions match all elements. You can restrict
the expression to match a certain element by providing a predicate ,
which is enclosed in square brackets ( [] ). The XPath
expression " /GeocodeResponse/result[2] always returns the
second result, for example.
Type of Expression
Root node
XPath Expression: " / "
Selection:
<WebServiceResponse>
<status>OK</status>
<result>
<type>sample</type>
<name>Sample XML</name>
<location>
<lat>37.4217550</lat>
<lng>-122.0846330</lng>
</location>
</result>
<result>
<message>The secret message</message>
</result>
</WebServiceResponse>
Absolute Path
XPath Expression: " /WebServiceResponse/result "
Selection:
<result>
<type>sample</type>
<name>Sample XML</name>
<location>
<lat>37.4217550</lat>
<lng>-122.0846330</lng>
</location>
</result>
<result>
<message>The secret message</message>
</result>
Path with Wildcard
XPath Expression: " /WebServiceResponse//location "
Selection:
<location>
<lat>37.4217550</lat>
<lng>-122.0846330</lng>
</location>
Path with Predicate
XPath Expression: " /WebServiceResponse/result[2]/message "
Selection:
<message>The secret message</message>
All direct children of the first result
XPath Expression: " /WebServiceResponse/result[1]/* "
Selection:
<type>sample</type>
<name>Sample XML</name>
<location>
<lat>37.4217550</lat>
<lng>-122.0846330</lng>
</location>
The name of a
result whose type text is "sample."
XPath Expression: " /WebServiceResponse/result[type/text()='sample']/name "
Selection:
Sample XML
It is important to note that when selecting elements, you select nodes,
not just the text within those objects. Generally, you
will want to iterate over all matched nodes and extract the text. You
may also match text nodes directly; see Text Nodes
below.
Note that XPath supports attribute nodes as well; however,
all Google Maps web services serve elements without attributes, so
matching of attributes is not necessary.
Text Selection in Expressions
Text within an XML document is specified in XPath expressions
via a text node operator. This operator " text() "
indicates extraction of text from the indicated node. For example,
the XPath expression " //formatted_address/text() " will
return all text within <formatted_address>
elements.
Type of Expression
All text nodes (including whitespace)
XPath Expression: " //text() "
Selection:
sample
Sample XML
37.4217550
-122.0846330
The secret message
Text Selection
XPath Expression: " /WebServiceRequest/result[2]/message/text() "
Selection:
The secret message
Context Sensitive Selection
XPath Expression: " /WebServiceRequest/result[type/text() = 'sample']/name/text() "
Selection:
Sample XML
Alternatively, you may evaluate an expression and return a set
of nodes and then iterate over that "node set," extracting the
text from each node. We use this approach in the example below.
For more information on XPath, consult the
XPath W3C Specification .
Evaluating XPath in Java
Java has wide support for parsing XML and using XPath expressions
within the javax.xml.xpath.* package.
For that reason, the sample code in this section uses Java to
illustrate how to handle XML and parse data from XML service responses.
To use XPath in your Java code, you will first need to instantiate
an instance of an XPathFactory and call
newXPath() on that factory to create an XPath
object. This object can then process passed XML
and XPath expressions using the evaluate() method.
When evaluating XPath expressions, make sure that you iterate
over any possible "node sets" which may be returned. Because these
results are returned as DOM nodes in Java code, you should capture
such multiple values within a NodeList object and
iterate over that object to extract any text or values from those
nodes.
The following code illustrates how to create an XPath
object, assign it XML and an XPath expression, and evaluate the
expression to print out the relevant content.
import org.xml.sax.InputSource ;
import org.w3c.dom. * ;
import javax.xml.xpath. * ;
import java.io. * ;
public class SimpleParser {
public static void main ( String [] args ) throws IOException {
XPathFactory factory = XPathFactory . newInstance ();
XPath xpath = factory . newXPath ();
try {
System . out . print ( "Web Service Parser 1.0 \n " );
// In practice , you 'd retrieve your XML via an HTTP request.
// Here we simply access an existing file .
File xmlFile = new File ( " XML_FILE " );
// The xpath evaluator requires the XML be in the format of an InputSource
InputSource inputXml = new InputSource ( new FileInputStream ( xmlFile ));
// Because the evaluator may return multiple entries , we specify that the expression
// return a NODESET and place the result in a NodeList .
NodeList nodes = ( NodeList ) xpath . evaluate ( " XPATH_EXPRESSION " , inputXml , XPathConstants . NODESET );
// We can then iterate over the NodeList and extract the content via getTextContent () .
// NOTE : this will only return text for element nodes at the returned context .
for ( int i = 0 , n = nodes . getLength (); i < n ; i ++ ) {
String nodeString = nodes . item ( i ) . getTextContent ();
System . out . print ( nodeString );
System . out . print ( " \n " );
}
} catch ( XPathExpressionException ex ) {
System . out . print ( "XPath Error" );
} catch ( FileNotFoundException ex ) {
System . out . print ( "File Error" );
}
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Google Maps Platform Web Services utilize HTTP(S) requests to access geographic data, requiring API keys and secure connections. URLs must be encoded, avoiding special characters, and adhere to a 16384-character limit. To avoid overloading, employ exponential backoff for retries and randomize request timing. Responses, in JSON or XML, are processed dynamically, and XPath is used to query XML data by selecting nodes. Java's `javax.xml.xpath.*` allows for XML processing, and multiple results are stored in a NodeList.\n"]]
