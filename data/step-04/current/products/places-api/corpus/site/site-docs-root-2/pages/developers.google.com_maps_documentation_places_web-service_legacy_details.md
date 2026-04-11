---
title: "Place Details (Legacy) \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/details
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/details
  title: "Place Details (Legacy) \_|\_ Places API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

This product or feature is in Legacy status. For more information about the Legacy status see Legacy products and features . To migrate to the Places API (New), see the Migration guide .
Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Legacy
Send feedback
Place Details (Legacy)
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Note: Server-side and client-side libraries
The Places API is also available with the
Java Client,
Python Client, Go Client and Node.js Client for Google Maps Services .
The Places API and the client libraries are for
use in server applications.
If you're building a client-side
application, take a look at the
Places SDK for Android (New) , the
Places SDK for iOS (New) , and the
Places Library, Maps JavaScript API .
Once you have a place_id from a place search, you can
request more details about a particular establishment or
point of interest by initiating a Place Details (Legacy) request. A Place Details (Legacy)
request returns more comprehensive information about the indicated place
such as its complete address, phone number, user rating and reviews.
Place Details (Legacy) requests
A Place Details (Legacy) request is an HTTP URL of the following form:
https://maps.googleapis.com/maps/api/place/details/ output ? parameters
where output may be either of the following values:
json (recommended) indicates output in JavaScript Object
Notation (JSON)
xml indicates output as XML
Certain parameters are required to initiate a search request. As is
standard in URLs, all parameters are separated using the ampersand
( & ) character. Below is a list of the parameters and their
possible values.
Required parameters
place_id
A textual identifier that uniquely identifies a place, returned from a
Place Search . For more information about place IDs, see the
place ID overview .
Optional parameters
fields
Caution: Place Search requests and Place Details requests don't return
the same fields. Place Search requests return a subset of the fields that
are returned by Place Details requests. If the field you want is not
returned by Place Search, you can use Place Search to get a
place_id , then use that Place ID to make a Place Details
request. For more information on the fields that are unavailable in a
Place Search request, see
Places API fields support .
Use the fields parameter to specify a comma-separated list of place data
types to return. For example:
fields=formatted_address,name,geometry . Use a forward slash
when specifying compound values. For example:
opening_hours/open_now .
Fields are divided into three billing categories:
Basic ,
Contact , and
Atmosphere .
Basic, Contact, and Atmosphere SKUs are charged in addition to the base SKU (Places
Details, Find Place, Nearby Search, or Text Search) for the request that triggered them. For
more information, see the
pricing sheet .
Basic
The Basic category includes the following fields:
address_components , adr_address ,
business_status , formatted_address ,
geometry , icon , icon_mask_base_uri ,
icon_background_color , name ,
permanently_closed ( deprecated ), photo , place_id , plus_code ,
type , url , utc_offset ,
vicinity , wheelchair_accessible_entrance .
Contact
The Contact category includes the following fields:
current_opening_hours , formatted_phone_number ,
international_phone_number , opening_hours ,
secondary_opening_hours , website
Atmosphere
The Atmosphere category includes the following fields:
curbside_pickup , delivery , dine_in ,
editorial_summary , price_level ,
rating , reservable , reviews ,
serves_beer , serves_breakfast ,
serves_brunch , serves_dinner ,
serves_lunch , serves_vegetarian_food ,
serves_wine , takeout ,
user_ratings_total .
Note: Attributions, html_attributions , are
always returned with every call, regardless of whether the field has been
requested.
language
The language in which to return results.
See the
list of supported languages . Google often updates the supported languages, so this list may not be
exhaustive.
If language is not supplied, the API attempts to use the
preferred language as specified in the
Accept-Language header.
The API does its best to provide a street address that is readable for
both the user and locals. To achieve that goal, it returns street
addresses in the local language, transliterated to a script readable by
the user if necessary, observing the preferred language. All other
addresses are returned in the preferred language. Address components are
all returned in the same language, which is chosen from the first
component.
If a name is not available in the preferred language, the API uses the
closest match.
The preferred language has a small influence on the set of results that
the API chooses to return, and the order in which they are returned. The
geocoder interprets abbreviations differently depending on language,
such as the abbreviations for street types, or synonyms that may be
valid in one language but not in another. For example, utca and
tér are synonyms for street in Hungarian.
region
The region code, specified as a
ccTLD ("top-level domain")
two-character value. Most ccTLD codes are identical to ISO 3166-1 codes,
with some notable exceptions. For example, the United Kingdom's ccTLD is
"uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the
entity of "The United Kingdom of Great Britain and Northern Ireland").
reviews_no_translations
Specify reviews_no_translations=true to disable translation
of reviews; specify reviews_no_translations=false to enable
translation of reviews. Reviews are returned in their original language.
If omitted, or passed with no value, translation of reviews is enabled. If
the language parameter was specified in the request, use the
specified language as the preferred language for translation. If
language is omitted, the API attempts to use the
Accept-Language header as the preferred language.
reviews_sort
The sorting method to use when returning reviews. Can be set to
most_relevant (default) or newest .
For most_relevant (default), reviews are sorted by
relevance; the service will bias the results to return reviews
originally written in the preferred language.
For newest , reviews are sorted in chronological order; the
preferred language does not affect the sort order.
Google recommends that you display how the reviews are being sorted to the
end user.
sessiontoken
A random string which identifies an autocomplete
session
for billing purposes.
The session begins when the user starts typing a query, and concludes when
they select a place and a call to Place Details is made. Each session can
have multiple queries, followed by one place selection. The API key(s)
used for each request within a session must belong to the same Google
Cloud Console project. Once a session has concluded, the token is no
longer valid; your app must generate a fresh token for each session. If
the sessiontoken parameter is omitted, or if you reuse a
session token, the session is charged as if no session token was provided
(each request is billed separately).
We recommend the following guidelines:
Use session tokens for all autocomplete sessions.
Generate a fresh token for each session. Using a version 4 UUID is
recommended.
Ensure that the API key(s) used for all Place Autocomplete and Place
Details requests within a session belong to the same Cloud Console
project.
Be sure to pass a unique session token for each new session. Using the
same token for more than one session will result in each request being
billed individually.
Warning: If you don't specify at least one field
with a request, or if you omit the fields parameter from a
request, ALL possible fields will be returned, and you will be billed
accordingly. This applies only to Place Details (Legacy) requests.
Place Details (Legacy) example
The following example requests the details of a place by
place_id , and includes the name , rating ,
and formatted_phone_number fields:
Shell
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name%2Crating%2Cformatted_phone_number&key=YOUR_API_KEY'
HTTP
https://maps.googleapis.com/maps/api/place/details/json
?fields=name%2Crating%2Cformatted_phone_number
&place_id=ChIJN1t_tDeuEmsRUsoyG83frY4
&key=YOUR_API_KEY
Note that you'll need to replace the key in this example with your own API
key in order for the request to work in your application.
Place Details (Legacy) response
Place Details (Legacy) responses are returned in the format indicated by the
output flag within the request's URL path.
JSON
{
"html_attributions" : [],
"result" :
{
"address_components" :
[
{ "long_name" : "48" , "short_name" : "48" , "types" : [ "street_number" ] },
{
"long_name" : "Pirrama Road" ,
"short_name" : "Pirrama Rd" ,
"types" : [ "route" ],
},
{
"long_name" : "Pyrmont" ,
"short_name" : "Pyrmont" ,
"types" : [ "locality" , "political" ],
},
{
"long_name" : "City of Sydney" ,
"short_name" : "City of Sydney" ,
"types" : [ "administrative_area_level_2" , "political" ],
},
{
"long_name" : "New South Wales" ,
"short_name" : "NSW" ,
"types" : [ "administrative_area_level_1" , "political" ],
},
{
"long_name" : "Australia" ,
"short_name" : "AU" ,
"types" : [ "country" , "political" ],
},
{
"long_name" : "2009" ,
"short_name" : "2009" ,
"types" : [ "postal_code" ],
},
],
"adr_address" : " 48 Pirrama Rd , Pyrmont NSW 2009 , Australia " ,
"business_status" : "OPERATIONAL" ,
"formatted_address" : "48 Pirrama Rd, Pyrmont NSW 2009, Australia" ,
"formatted_phone_number" : "(02) 9374 4000" ,
"geometry" :
{
"location" : { "lat" : -33.866489 , "lng" : 151.1958561 },
"viewport" :
{
"northeast" :
{ "lat" : -33.8655112697085 , "lng" : 151.1971156302915 },
"southwest" :
{ "lat" : -33.86820923029149 , "lng" : 151.1944176697085 },
},
},
"icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" ,
"icon_background_color" : "#7B9EB0" ,
"icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet" ,
"international_phone_number" : "+61 2 9374 4000" ,
"name" : "Google Workplace 6" ,
"opening_hours" :
{
"open_now" : false ,
"periods" :
[
{
"close" : { "day" : 1 , "time" : "1700" },
"open" : { "day" : 1 , "time" : "0900" },
},
{
"close" : { "day" : 2 , "time" : "1700" },
"open" : { "day" : 2 , "time" : "0900" },
},
{
"close" : { "day" : 3 , "time" : "1700" },
"open" : { "day" : 3 , "time" : "0900" },
},
{
"close" : { "day" : 4 , "time" : "1700" },
"open" : { "day" : 4 , "time" : "0900" },
},
{
"close" : { "day" : 5 , "time" : "1700" },
"open" : { "day" : 5 , "time" : "0900" },
},
],
"weekday_text" :
[
"Monday: 9:00 AM – 5:00 PM" ,
"Tuesday: 9:00 AM – 5:00 PM" ,
"Wednesday: 9:00 AM – 5:00 PM" ,
"Thursday: 9:00 AM – 5:00 PM" ,
"Friday: 9:00 AM – 5:00 PM" ,
"Saturday: Closed" ,
"Sunday: Closed" ,
],
},
"photos" :
[
{
"height" : 3024 ,
"html_attributions" :
[
" Cynthia Wei " ,
],
"photo_reference" : "Aap_uEC6jqtpflLS8GxQqPHBjlcwBf2sri0ZErk9q1ciHGZ6Zx5HBiiiEsPEO3emtB1PGyWbBQhgPL2r9CshoVlJEG4xzB71QMhGBTqqeaCNk1quO3vTTiP50aM1kmOaBQ-DF1ER7zpu6BQOEtnusKMul0m4KA45wfE3h6Xh2IxjLNzx-IiX" ,
"width" : 4032 ,
},
{
"height" : 3264 ,
"html_attributions" :
[
" Heyang Li " ,
],
"photo_reference" : "Aap_uECyRjHhOQgGaKTW6Z3ZfTEaDhNc44m0F6GrNSFIMffixwI5xqD35QhecdzVY-FUuDtVE1huu8-2HkxgI9Gwvy6W18fU-_E3UUkdSFBQqGK8_slKlT8BZZc66sTX53IEcTDrZfT-E5_YUBYBOm13yxOTOfWfEDABhaxCGC5Hu_XYh0fI" ,
"width" : 4912 ,
},
{
"height" : 3036 ,
"html_attributions" :
[
" Anna Linetsky " ,
],
"photo_reference" : "Aap_uEAumTzSdhRHDutPAj6wVPSZZmBV-brI6TPFwI0tcQlbSR74z44mUPr4aXMQKck_AzHaKmbfR3P2c1qsu45i1RQPHrcpIXxrA78FmDjCdWYYZWUnFozdcmEj9OQ_V0G08adpKivMKZyeaQ1NuwRy9GhSopeKpzkzkFZG5vXMYPPSgpa1" ,
"width" : 4048 ,
},
{
"height" : 4016 ,
"html_attributions" :
[
" Jonah Dell " ,
],
"photo_reference" : "Aap_uECC7cSbDkh-TdmXr6m5d5pgVXJmvXg8dF2jzhL0b0Ko4CtnVll6-tIvdz7vhbCsd3hl2u9EgZ4Y30FBxKmFcimfeYUgW2XJyv8JY5IYGuXsKkCLqpV3QH9dIGwoUv2uX0eosDsUsTN2DOlyOasUgVxcYqzIzEmrL5ofIssThQWZeozD" ,
"width" : 6016 ,
},
{
"height" : 3024 ,
"html_attributions" :
[
" Anthony Huynh " ,
],
"photo_reference" : "Aap_uEDTdw58CglFmZZAR9iZ05x3y2oK9r5_dRqKWnbZKSS9gs6gp9AeBa1QDvBL6dzZyQAZfN8H2Eppu6y4NBaPOp-GkulZYiKRM7Yww8sUEv-8dmcq35Tx38pe4LEX2wIicFkQHedRgMc0FfV9aFtgosQ5ps5-HCjJSApg8eLGyuxxqPm9" ,
"width" : 4032 ,
},
{
"height" : 3024 ,
"html_attributions" :
[
" Jasen Baker " ,
],
"photo_reference" : "Aap_uEAGqslqZPhZUk0T2Y6l7mkCYnY7JN9li4g5NkZsE0N4Cdy7_cZ-fZWyV02VhpQR4Ph4fLUL6_WTXrlGMXXzUJXUcSmSTs2d_Dzf3Q_A1y07Dm-vtv7pS3JXsWyrWETGIoT1pIj81PPdUc1vlR2i3GFMWAbx9rCC472ZJclY8JlvMg-x" ,
"width" : 4032 ,
},
{
"height" : 3024 ,
"html_attributions" :
[
" Jeremy Hsiao " ,
],
"photo_reference" : "Aap_uEBaGxeN90YFjD-AUjxZqM44kpMcICKKBBhb0RQQS7DHHFaay8RRAwjWsAt8GEmmB5QnxrbQWHU3TwhVXXHP0m-YNp9Ds3ihpiFan0moNv4QB7kern5cfjWhhrWe8B0dz_vYvmPssJE24P-24YfWWHubOo0L2MjQyueZfDv57N_RvDZk" ,
"width" : 4032 ,
},
{
"height" : 1515 ,
"html_attributions" :
[
" Andrew W " ,
],
"photo_reference" : "Aap_uEBDzJlmTeNUreMop6_hkC1HKTCRLyPs5fikJi58qCejtkWp5PIM6vzNN3HErkSWUwnamTr_WLyT7jXMAIdByR-hx8dG-OHjj5JxzmcPvuT_VeVLmdSbNPeIlpmp6EUcPOhaVrhEKojSd44QXkl0za29eZ0oj1KDOnAsGxmhanDFW7lI" ,
"width" : 2048 ,
},
{
"height" : 3024 ,
"html_attributions" :
[
" Jeremy Hsiao " ,
],
"photo_reference" : "Aap_uEBvYFpzCDQzvQ0kdBxxB70lTkLbTM0yH3xF-BCHsb7DQ63cuWnutvwv8oVLDSbA14_kns3WVlEInTyy2elvmH5lzQteb6zzRu3exkwE65_55TgJqdLO7RYYiPFliWk4ocszn9nn5ELv5uP2BQmqr9QET5vwgxR-0eshyVmcdM42jb39" ,
"width" : 4032 ,
},
{
"height" : 4032 ,
"html_attributions" :
[
" Jeremy Hsiao " ,
],
"photo_reference" : "Aap_uECQynuD_EnSnbz8sJQ6-B6uR-j2tuu4Z1tuGUjq8xnxFDk-W8OdeLzWBX8suNKTCsPlkzTqC22BXf_hX33XclGPL4SS9xnPmHcMrLoUl0H_xHYevFvT17Hgw5DZpSyVmLvDvxzzJ1rsZTh55QwopmAty083a1r1ZIfL32iXh_q8FUas" ,
"width" : 3024 ,
},
],
"place_id" : "ChIJN1t_tDeuEmsRUsoyG83frY4" ,
"plus_code" :
{
"compound_code" : "45MW+C8 Pyrmont NSW, Australia" ,
"global_code" : "4RRH45MW+C8" ,
},
"rating" : 4 ,
"reference" : "ChIJN1t_tDeuEmsRUsoyG83frY4" ,
"reviews" :
[
{
"author_name" : "Luke Archibald" ,
"author_url" : "https://www.google.com/maps/contrib/113389359827989670652/reviews" ,
"language" : "en" ,
"profile_photo_url" : "https://lh3.googleusercontent.com/a-/AOh14GhGGmTmvtD34HiRgwHdXVJUTzVbxpsk5_JnNKM5MA=s128-c0x00000000-cc-rp-mo" ,
"rating" : 1 ,
"relative_time_description" : "a week ago" ,
"text" : "Beautiful building with a great view." ,
"time" : 1652286798 ,
},
{
"author_name" : "Tevita Taufoou" ,
"author_url" : "https://www.google.com/maps/contrib/105937236918123663309/reviews" ,
"language" : "en" ,
"profile_photo_url" : "https://lh3.googleusercontent.com/a/AATXAJwZANdRSSg96QeZG--6BazG5uv_BJMIvpZGqwSz=s128-c0x00000000-cc-rp-mo" ,
"rating" : 1 ,
"relative_time_description" : "6 months ago" ,
"text" : "Conference rooms were well equipped." ,
"time" : 1637215605 ,
},
{
"author_name" : "Jordy Baker" ,
"author_url" : "https://www.google.com/maps/contrib/102582237417399865640/reviews" ,
"language" : "en" ,
"profile_photo_url" : "https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo" ,
"rating" : 1 ,
"relative_time_description" : "4 months ago" ,
"text" : "The staff is very friendly." ,
"time" : 1641389490 ,
},
{
"author_name" : "Prem Rathod" ,
"author_url" : "https://www.google.com/maps/contrib/115981614018592114142/reviews" ,
"language" : "en" ,
"profile_photo_url" : "https://lh3.googleusercontent.com/a/AATXAJyEQpqs4YvPPzMPG2dnnRTFPC4jxJfn8YXnm2gz=s128-c0x00000000-cc-rp-mo" ,
"rating" : 1 ,
"relative_time_description" : "4 months ago" ,
"text" : "The location is convenient and easy to find." ,
"time" : 1640159655 ,
},
{
"author_name" : "Husuni Hamza" ,
"author_url" : "https://www.google.com/maps/contrib/102167316656574288776/reviews" ,
"language" : "en" ,
"profile_photo_url" : "https://lh3.googleusercontent.com/a/AATXAJwRkyvoSlgd06ahkF9XI9D39o6Zc_Oycm5EKuRg=s128-c0x00000000-cc-rp-mo" ,
"rating" : 5 ,
"relative_time_description" : "7 months ago" ,
"text" : "A modern and impressive facility." ,
"time" : 1633197305 ,
},
],
"types" : [ "point_of_interest" , "establishment" ],
"url" : "https://maps.google.com/?cid=10281119596374313554" ,
"user_ratings_total" : 939 ,
"utc_offset" : 600 ,
"vicinity" : "48 Pirrama Road, Pyrmont" ,
"website" : "http://google.com/" ,
},
"status" : "OK" ,
}
XML
<?xml version="1.0" encoding="UTF-8"?>
<PlaceDetailsResponse>
<status>OK</status>
<result>
<name>Google Workplace 6</name>
<vicinity>48 Pirrama Road, Pyrmont</vicinity>
<type>point_of_interest</type>
<type>establishment</type>
<formatted_phone_number>(02) 9374 4000</formatted_phone_number>
<formatted_address>48 Pirrama Rd, Pyrmont NSW 2009, Australia</formatted_address>
<address_component>
<long_name>48</long_name>
<short_name>48</short_name>
<type>street_number</type>
</address_component>
<address_component>
<long_name>Pirrama Road</long_name>
<short_name>Pirrama Rd</short_name>
<type>route</type>
</address_component>
<address_component>
<long_name>Pyrmont</long_name>
<short_name>Pyrmont</short_name>
<type>locality</type>
<type>political</type>
</address_component>
<address_component>
<long_name>City of Sydney</long_name>
<short_name>City of Sydney</short_name>
<type>administrative_area_level_2</type>
<type>political</type>
</address_component>
<address_component>
<long_name>New South Wales</long_name>
<short_name>NSW</short_name>
<type>administrative_area_level_1</type>
<type>political</type>
</address_component>
<address_component>
<long_name>Australia</long_name>
<short_name>AU</short_name>
<type>country</type>
<type>political</type>
</address_component>
<address_component>
<long_name>2009</long_name>
<short_name>2009</short_name>
<type>postal_code</type>
</address_component>
<geometry>
<location>
<lat>-33.8664890</lat>
<lng>151.1958561</lng>
</location>
<viewport>
<southwest>
<lat>-33.8682092</lat>
<lng>151.1944177</lng>
</southwest>
<northeast>
<lat>-33.8655113</lat>
<lng>151.1971156</lng>
</northeast>
</viewport>
</geometry>
<rating>4.0</rating>
<url>https://maps.google.com/?cid=10281119596374313554</url>
<icon>https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png</icon>
<reference>ChIJN1t_tDeuEmsRUsoyG83frY4</reference>
<international_phone_number>+61 2 9374 4000</international_phone_number>
<website>http://google.com/</website>
<review>
<time>1652286798</time>
<text>Beautiful building with a great view.</text>
<author_name>Luke Archibald</author_name>
<author_url>https://www.google.com/maps/contrib/113389359827989670652/reviews</author_url>
<rating>1.0</rating>
<language>en</language>
<profile_photo_url>https://lh3.googleusercontent.com/a-/AOh14GhGGmTmvtD34HiRgwHdXVJUTzVbxpsk5_JnNKM5MA=s128-c0x00000000-cc-rp-mo</profile_photo_url>
<relative_time_description>a week ago</relative_time_description>
</review>
<review>
<time>1637215605</time>
<text>Conference rooms were well equipped.</text>
<author_name>Joe Schmoe</author_name>
<author_url>https://www.google.com/maps/contrib/105937236918123663309/reviews</author_url>
<rating>1.0</rating>
<language>en</language>
<profile_photo_url>https://lh3.googleusercontent.com/a/AATXAJwZANdRSSg96QeZG--6BazG5uv_BJMIvpZGqwSz=s128-c0x00000000-cc-rp-mo</profile_photo_url>
<relative_time_description>6 months ago</relative_time_description>
</review>
<review>
<time>1641389490</time>
<text>The staff is very friendly.</text>
<author_name>Jordy Baker</author_name>
<author_url>https://www.google.com/maps/contrib/102582237417399865640/reviews</author_url>
<rating>1.0</rating>
<language>en</language>
<profile_photo_url>https://lh3.googleusercontent.com/a/AATXAJwgg1tM4aVA4nJCMjlfJtHtFZuxF475Vb6tT74S=s128-c0x00000000-cc-rp-mo</profile_photo_url>
<relative_time_description>4 months ago</relative_time_description>
</review>
<review>
<time>1640159655</time>
<text>The location is convenient and easy to find.</text>
<author_name>Prem Rathod</author_name>
<author_url>https://www.google.com/maps/contrib/115981614018592114142/reviews</author_url>
<rating>1.0</rating>
<language>en</language>
<profile_photo_url>https://lh3.googleusercontent.com/a/AATXAJyEQpqs4YvPPzMPG2dnnRTFPC4jxJfn8YXnm2gz=s128-c0x00000000-cc-rp-mo</profile_photo_url>
<relative_time_description>4 months ago</relative_time_description>
</review>
<review>
<time>1633197305</time>
<text>A modern and impressive facility.</text>
<author_name>Husuni Hamza</author_name>
<author_url>https://www.google.com/maps/contrib/102167316656574288776/reviews</author_url>
<rating>5.0</rating>
<language>en</language>
<profile_photo_url>https://lh3.googleusercontent.com/a/AATXAJwRkyvoSlgd06ahkF9XI9D39o6Zc_Oycm5EKuRg=s128-c0x00000000-cc-rp-mo</profile_photo_url>
<relative_time_description>7 months ago</relative_time_description>
</review>
<opening_hours>
<open_now>false</open_now>
<period>
<open>
<day>1</day>
<time>0900</time>
</open>
<close>
<day>1</day>
<time>1700</time>
</close>
</period>
<period>
<open>
<day>2</day>
<time>0900</time>
</open>
<close>
<day>2</day>
<time>1700</time>
</close>
</period>
<period>
<open>
<day>3</day>
<time>0900</time>
</open>
<close>
<day>3</day>
<time>1700</time>
</close>
</period>
<period>
<open>
<day>4</day>
<time>0900</time>
</open>
<close>
<day>4</day>
<time>1700</time>
</close>
</period>
<period>
<open>
<day>5</day>
<time>0900</time>
</open>
<close>
<day>5</day>
<time>1700</time>
</close>
</period>
<weekday_text>Monday: 9:00 AM – 5:00 PM</weekday_text>
<weekday_text>Tuesday: 9:00 AM – 5:00 PM</weekday_text>
<weekday_text>Wednesday: 9:00 AM – 5:00 PM</weekday_text>
<weekday_text>Thursday: 9:00 AM – 5:00 PM</weekday_text>
<weekday_text>Friday: 9:00 AM – 5:00 PM</weekday_text>
<weekday_text>Saturday: Closed</weekday_text>
<weekday_text>Sunday: Closed</weekday_text>
</opening_hours>
<utc_offset>600</utc_offset>
<photo>
<photo_reference>Aap_uEDT4DC26Lk_VoI6CvsZl1NzU7BOPjEyqEHlf8tCA0hFtlrsI1Tmed_LmjSUQghWnZq-E7SsYZSlvGP0X5ZAfH6w0Tmw6biO4PPI8BTPwvo6FqLfZgC2RGNQyI81HRnJGB3ZJUAYEXvxBfA_upEcsITxk52joPkK9d7cfFptY0z-Oy7Y</photo_reference>
<width>4032</width>
<height>3024</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/117600448889234589608&quot;&gt;Cynthia Wei&lt;/a&gt;</html_attribution>
</photo>
<photo>
<photo_reference>Aap_uEAPNVkxDxxHa0aRFAkA2gMygFUuaKujSSv-zdad_vuaxTkaDHgX-aVPeNATp7VEgwqa3A3QutoeKdDd6aGZPBPCLl8XTf1vYckEBxIWEXZjFlMXK2TwIVfe4qa6O31AbYQQ5TCrEs9nz2fuBBWJwifTiKIIrv4NrEpQok6i8nnn8xKS</photo_reference>
<width>4912</width>
<height>3264</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/102493344958625549078&quot;&gt;Heyang Li&lt;/a&gt;</html_attribution>
</photo>
<photo>
<photo_reference>Aap_uEBXOmqXNblj10HJavekmUNyUwccggfNN9KVE9TjYcU9HXkBHdvnwfYHDx3dfrjJJwnN8yooP-5412iJNRk8cwUbAVYbD2326cfiJJ3oK6pOrAi1oBmCYuAwKTHnX3EQvSbheVhJZPNDHlT5TjKcwfwAb80eyLB2UNyWl3Y6D7YS7ZSf</photo_reference>
<width>4048</width>
<height>3036</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/104829437842034782235&quot;&gt;Anna Linetsky&lt;/a&gt;</html_attribution>
</photo>
<photo>
<photo_reference>Aap_uEAWyGsK1fp3SE73xICq8FJNlrVVqRk8E6YfMiz-o8IJj1vESmuDj4NnPDP4S2kWFrfoBpqw9lmXBGxtYo6nPMySfBAcRIbdEg0ko4dcdzsBvo6cRUz9XpmlcoptCpIAKEb6f7Bh_OD0zFntYbTz-pLdQ9ZHB8tBvTb3kzfTdK2Du0yC</photo_reference>
<width>6016</width>
<height>4016</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/107755640736541028674&quot;&gt;Jonah Dell&lt;/a&gt;</html_attribution>
</photo>
<photo>
<photo_reference>Aap_uEAxbn61tx1hwCo3kUMd2KPlWaBkrFhXHxsZDgkYxpJqc-ZYC6U0MH6urfbHVrwmMoosOG0G39anmR68B7p2Up3AACxTa21vCopSL6-RHIphVsBhfhOrFMlGNqBDEsnmY15X0FzzNMKASXqmqtzBphiRyGhAFKfRs3Js1ymXP_FWjqzT</photo_reference>
<width>4032</width>
<height>3024</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/115886271727815775491&quot;&gt;Anthony Huynh&lt;/a&gt;</html_attribution>
</photo>
<photo>
<photo_reference>Aap_uEClwnjuvgS58OknaXxZeVGf5ydyG6U6lO9srr8FU7tPoZ4DvqQo-GUeemssC11tzDBUMWit4ILWF-GmlRfIHS8FuAtttOgp2wvgPhs-ADUrznLRXYKBRkNQnRLEIA1PBgJN9Eev8tFWxpY_jBMklkEUZJRjm-mk9R0bSKSelpPgMYAz</photo_reference>
<width>4032</width>
<height>3024</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/102939237947063969663&quot;&gt;Jasen Baker&lt;/a&gt;</html_attribution>
</photo>
<photo>
<photo_reference>Aap_uEBvISYtwjSgTQntTJJ_-XhPUF4CVCQF3wxM0FjcQJuzomYLfZWFlIWsOgXhwt2Sd8K6OqFrSP8XHHrBaqQJHD-om-H_wfRLVmiAoQa8QG5oxt540AucTMP4H2QfhTXngqEoNuOcbb-xo2l01OPUetTdIZQ3S6U5s2iyGrHpTs3qz8CH</photo_reference>
<width>4032</width>
<height>3024</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/100678816592586275978&quot;&gt;Jeremy Hsiao&lt;/a&gt;</html_attribution>
</photo>
<photo>
<photo_reference>Aap_uEB2cYxbKE7uIXQ_IhX3TvZHDcFHXjWSwezoiwP3eWlfIDTWwq3xtsYZY7QSrhR2d9s1eWmZlM5zr9iHlC_n0gsJXNeRcfd2JjuLFaNuC7VfpeIsdQchhOybG0drJ2CxzD187Az-Foip-6MutDA22LINPw0Iyc_yT04WbxQDxhiwu2Cn</photo_reference>
<width>2048</width>
<height>1515</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/112343109286948028063&quot;&gt;Andrew W&lt;/a&gt;</html_attribution>
</photo>
<photo>
<photo_reference>Aap_uEBJyLgeilgow1JnoKW83IBsl8CPkmryN8nGYtBzzLaiLjFicWxC1YPQusM-_Fvfb1bkbuShrzjXmHCOp5HoBgJsgit8o0HPYWgjSwrdySqde1BgfKbwS-TWbPg_dwTnVR8LrVPxa_vpLzNlx1b-WpDZo3-_KvxH2GARhVrcvWkvMYD0</photo_reference>
<width>4032</width>
<height>3024</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/100678816592586275978&quot;&gt;Jeremy Hsiao&lt;/a&gt;</html_attribution>
</photo>
<photo>
<photo_reference>Aap_uEADyMSxLevgbLWCJeHA8kIN3w6-JcndbuHvTB0oqR-IlWbml4bbYmR-_iYU15HBh8xi3w5hZ455pda6m-BlLCscr6g_Zc5FmBOHW56IsZF3Pxif5UmeGZSsg3WIjHCoL-JyndN0nkfyzS31E05tZi61RfXQ2UPY2_5ceKYua5U6d5Zd</photo_reference>
<width>3024</width>
<height>4032</height>
<html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/100678816592586275978&quot;&gt;Jeremy Hsiao&lt;/a&gt;</html_attribution>
</photo>
<adr_address>&lt;span class=&quot;street-address&quot;&gt;48 Pirrama Rd&lt;/span&gt;, &lt;span class=&quot;locality&quot;&gt;Pyrmont&lt;/span&gt; &lt;span class=&quot;region&quot;&gt;NSW&lt;/span&gt; &lt;span class=&quot;postal-code&quot;&gt;2009&lt;/span&gt;, &lt;span class=&quot;country-name&quot;&gt;Australia&lt;/span&gt;</adr_address>
<user_ratings_total>939</user_ratings_total>
<place_id>ChIJN1t_tDeuEmsRUsoyG83frY4</place_id>
<plus_code>
<global_code>4RRH45MW+C8</global_code>
<compound_code>45MW+C8 Pyrmont NSW, Australia</compound_code>
</plus_code>
<icon_background_color>#7B9EB0</icon_background_color>
<business_status>OPERATIONAL</business_status>
<icon_mask_base_uri>https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet</icon_mask_base_uri>
</result>
</PlaceDetailsResponse>
JSON and XML responses each contain the following elements:
PlacesDetailsResponse
Field
Required
Type
Description
html_attributions
required
Array<string>
May contain a set of attributions about this listing which must be
displayed to the user (some listings may not have attribution).
result
required
Place
Contains the detailed information about the place requested.
See Place for more information.
status
required
PlacesDetailsStatus
Contains the status of the request, and may contain debugging
information to help you track down why the request failed.
See PlacesDetailsStatus for more
information.
info_messages
optional
Array<string>
When the service returns additional information about the request
specification, there may be an additional
info_messages field within the response object. This
field is only returned for successful requests. It may not always be
returned, and its content is subject to change.
In a JSON response, these are represented as root elements. In an XML
response, these appear as top-level elements beneath <PlaceDetailsResponse> .
PlacesDetailsStatus
Status codes returned by service.
OK indicating the API request was successful.
ZERO_RESULTS indicating that the referenced location,
place_id , was valid but no longer refers to a valid result.
This may occur if the establishment is no longer in business.
NOT_FOUND indicating that that the referenced location,
place_id , was not found in the Places database.
INVALID_REQUEST indicating the API request was malformed.
OVER_QUERY_LIMIT indicating any of the following:
You have exceeded the QPS limits.
Billing has not been enabled on your account.
The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
The provided method of payment is no longer valid (for example, a credit
card has expired).
See the
Maps FAQ
for more information about how to resolve this error.
REQUEST_DENIED indicating that your request was denied,
generally because:
The request is missing an API key.
The key parameter is invalid.
UNKNOWN_ERROR indicating an unknown error.
Place
Attributes describing a place. Not all attributes will be available for all
place types.
Field
Required
Type
Description
address_components
optional
Array< AddressComponent >
An array containing the separate components applicable to this
address.
See AddressComponent for more
information.
adr_address
optional
string
A representation of the place's address in the
adr microformat .
business_status
optional
string
Indicates the operational status of the place, if it is a business.
If no data exists, business_status is not returned.
The allowed values include: OPERATIONAL ,
CLOSED_TEMPORARILY , and CLOSED_PERMANENTLY
curbside_pickup
optional
boolean
Specifies if the business supports curbside pickup.
current_opening_hours
optional
PlaceOpeningHours
Contains the hours of operation for the next seven days (including
today). The time period starts at midnight on the date of the
request and ends at 11:59 pm six days later. This field includes the
special_days subfield of all hours, set for dates that
have exceptional hours.
See PlaceOpeningHours for more
information.
delivery
optional
boolean
Specifies if the business supports delivery.
dine_in
optional
boolean
Specifies if the business supports indoor or outdoor seating
options.
editorial_summary
optional
PlaceEditorialSummary
Contains a summary of the place. A summary is comprised of a textual
overview, and also includes the language code for these if
applicable. Summary text must be presented as-is and can't be
modified or altered.
See PlaceEditorialSummary for
more information.
formatted_address
optional
string
A string containing the human-readable address of this place.
Often this address is equivalent to the postal address. Note that
some countries, such as the United Kingdom, don't allow
distribution of true postal addresses due to licensing restrictions.
The formatted address is logically composed of one or more address
components. For example, the address "111 8th Avenue, New York, NY"
consists of the following components: "111" (the street number),
"8th Avenue" (the route), "New York" (the city) and "NY" (the US
state).
Don't parse the formatted address programmatically. Instead you
should use the individual address components, which the API response
includes in addition to the formatted address field.
formatted_phone_number
optional
string
Contains the place's phone number in its
local format .
geometry
optional
Geometry
Contains the location and viewport for the location.
See Geometry for more information.
icon
optional
string
Contains the URL of a suggested icon which may be displayed to the
user when indicating this result on a map.
icon_background_color
optional
string
Contains the default HEX color code for the place's category.
icon_mask_base_uri
optional
string
Contains the URL of a recommended icon, minus the
.svg or .png file type extension.
international_phone_number
optional
string
Contains the place's phone number in international format.
International format includes the country code, and is prefixed with
the plus, +, sign. For example, the international_phone_number for
Google's Sydney, Australia office is +61 2 9374 4000 .
name
optional
string
Contains the human-readable name for the returned result. For
establishment results, this is usually the
canonicalized business name.
opening_hours
optional
PlaceOpeningHours
Contains the regular hours of operation.
See PlaceOpeningHours for more
information.
permanently_closed
optional
boolean
permanently_closed is deprecated.
Use business_status to get the operational status of
businesses.
photos
optional
Array< PlacePhoto >
An array of photo objects, each containing a reference to an image.
A request may return up to ten photos. More information about place
photos and how you can use the images in your application can be
found in the
Place Photos
documentation.
See PlacePhoto for more information.
place_id
optional
string
A textual identifier that uniquely identifies a place. To retrieve
information about the place, pass this identifier in the
place_id field of a Places API request. For more
information about place IDs, see the
place ID overview .
plus_code
optional
PlusCode
An encoded location reference, derived from latitude and longitude
coordinates, that represents an area: 1/8000th of a degree by
1/8000th of a degree (about 14m x 14m at the equator) or smaller.
Plus codes can be used as a replacement for street addresses in
places where they don't exist (where buildings are not numbered or
streets are not named). See
Open Location Code
and plus codes .
See PlusCode for more information.
price_level
optional
number
The price level of the place, on a scale of 0 to 4. The exact amount
indicated by a specific value will vary from region to region. Price
levels are interpreted as follows:
0 Free
1 Inexpensive
2 Moderate
3 Expensive
4 Very Expensive
rating
optional
number
Contains the place's rating, from 1.0 to 5.0, based on aggregated
user reviews.
reference
optional
string
reference is deprecated.
reservable
optional
boolean
Specifies if the place supports reservations.
reviews
optional
Array< PlaceReview >
A JSON array of up to five reviews. By default, the reviews are
sorted in order of relevance. Use the
reviews_sort request parameter to control sorting.
For most_relevant (default), reviews are sorted by
relevance; the service will bias the results to return reviews
originally written in the preferred language.
For newest , reviews are sorted in chronological
order; the preferred language does not affect the sort order.
Google recommends indicating to users whether results are ordered by
most_relevant or newest .
See PlaceReview for more information.
scope
optional
string
scope is deprecated.
secondary_opening_hours
optional
Array< PlaceOpeningHours >
Contains an array of entries for the next seven days including
information about secondary hours of a business. Secondary hours are
different from a business's main hours. For example, a restaurant
can specify drive through hours or delivery hours as its secondary
hours. This field populates the type subfield, which
draws from a predefined list of opening hours types (such as
DRIVE_THROUGH , PICKUP , or
TAKEOUT ) based on the types of the place. This field
includes the special_days subfield of all hours, set
for dates that have exceptional hours.
See PlaceOpeningHours for more
information.
serves_beer
optional
boolean
Specifies if the place serves beer.
serves_breakfast
optional
boolean
Specifies if the place serves breakfast.
serves_brunch
optional
boolean
Specifies if the place serves brunch.
serves_dinner
optional
boolean
Specifies if the place serves dinner.
serves_lunch
optional
boolean
Specifies if the place serves lunch.
serves_vegetarian_food
optional
boolean
Specifies if the place serves vegetarian food.
serves_wine
optional
boolean
Specifies if the place serves wine.
takeout
optional
boolean
Specifies if the business supports takeout.
types
optional
Array<string>
Contains an array of feature types describing the given result. See
the list of
supported types .
url
optional
string
Contains the URL of the official Google page for this place. This
will be the Google-owned page that contains the best available
information about the place. Applications must link to or embed this
page on any screen that shows detailed results about the place to
the user.
user_ratings_total
optional
number
The total number of reviews, with or without text, for this place.
utc_offset
optional
number
Contains the number of minutes this place's current timezone is
offset from UTC. For example, for places in Sydney, Australia during
daylight saving time this would be 660 (+11 hours from UTC), and for
places in California outside of daylight saving time this would be
-480 (-8 hours from UTC).
vicinity
optional
string
For establishment ( types:["establishment", ...])
results only, the vicinity field contains a simplified
address for the place, including the street name, street number, and
locality, but not the province/state, postal code, or country.
For all other results, the vicinity field contains the
name of the narrowest political ( types:["political", ...] ) feature that is present in the address of the result.
This content is meant to be read as-is. Don't programmatically
parse the formatted address.
website
optional
string
The authoritative website for this place, such as a business'
homepage.
wheelchair_accessible_entrance
optional
boolean
Specifies if the place has an entrance that is
wheelchair-accessible.
PlaceEditorialSummary
Contains a summary of the place. A summary is comprised of a textual overview,
and also includes the language code for these if applicable. Summary text must
be presented as-is and can't be modified or altered.
Field
Required
Type
Description
language
optional
string
The language of the previous fields. May not always be present.
overview
optional
string
A medium-length textual summary of the place.
PlaceOpeningHours
An object describing the opening hours of a place.
Field
Required
Type
Description
open_now
optional
boolean
A boolean value indicating if the place is open at the current time.
periods
optional
Array< PlaceOpeningHoursPeriod >
An array of opening periods covering seven days, starting from
Sunday, in chronological order.
See
PlaceOpeningHoursPeriod for
more information.
special_days
optional
Array< PlaceSpecialDay >
An array of up to seven entries corresponding to the next seven
days.
See PlaceSpecialDay for more
information.
type
optional
string
A type string used to identify the type of secondary hours (for
example, DRIVE_THROUGH , HAPPY_HOUR ,
DELIVERY , TAKEOUT , KITCHEN ,
BREAKFAST , LUNCH , DINNER ,
BRUNCH , PICKUP ,
SENIOR_HOURS ). Set for
secondary_opening_hours only.
weekday_text
optional
Array<string>
An array of strings describing in human-readable text the hours of
the place.
PlaceOpeningHoursPeriod
Field
Required
Type
Description
open
required
PlaceOpeningHoursPeriodDetail
Contains a pair of day and time objects describing when the place
opens.
See
PlaceOpeningHoursPeriodDetail
for more information.
close
optional
PlaceOpeningHoursPeriodDetail
May contain a pair of day and time objects describing when the place
closes. If a place is always open, the close section will be missing
from the response. Clients can rely on always-open being represented
as an open period containing day with value 0 and time
with value 0000 , and no close .
See
PlaceOpeningHoursPeriodDetail
for more information.
PlaceSpecialDay
Field
Required
Type
Description
date
optional
string
A date expressed in RFC3339 format in the local timezone for the
place, for example 2010-12-31.
exceptional_hours
optional
boolean
True if there are exceptional hours for this day. If
true , this means that there is at least one exception
for this day. Exceptions cause different values to occur in the
subfields of current_opening_hours and
secondary_opening_hours such as periods ,
weekday_text , open_now . The exceptions
apply to the hours, and the hours are used to generate the other
fields.
PlaceOpeningHoursPeriodDetail
Field
Required
Type
Description
day
required
number
A number from 0–6, corresponding to the days of the week, starting
on Sunday. For example, 2 means Tuesday.
time
required
string
May contain a time of day in 24-hour hhmm format. Values are in the
range 0000–2359. The time will be reported in the place's time zone.
date
optional
string
A date expressed in RFC3339 format in the local timezone for the
place, for example 2010-12-31.
truncated
optional
boolean
True if a given period was truncated due to a seven-day cutoff,
where the period starts before midnight on the date of the request
and/or ends at or after midnight on the last day. This property
indicates that the period for open or close can extend past this
seven-day cutoff.
PlacePhoto
A photo of a Place. The photo can be accessed using the
Place Photo
API using an url in the following pattern:
https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=photo_reference&key=YOUR_API_KEY
See
Place Photos
for more information.
Field
Required
Type
Description
height
required
number
The height of the photo.
html_attributions
required
Array<string>
The HTML attributions for the photo.
photo_reference
required
string
A string used to identify the photo when you perform a Photo
request.
width
required
number
The width of the photo.
PlaceReview
A review of the place submitted by a user.
Field
Required
Type
Description
author_name
required
string
The name of the user who submitted the review. Anonymous reviews are
attributed to "A Google user".
rating
required
number
The user's overall rating for this place. This is a whole number,
ranging from 1 to 5.
relative_time_description
required
string
The time that the review was submitted in text, relative to the
current time.
time
required
number
The time that the review was submitted, measured in the number of
seconds since since midnight, January 1, 1970 UTC.
author_url
optional
string
The URL to the user's Google Maps Local Guides profile, if
available.
language
optional
string
An IETF language code indicating the language of the returned
review.This field contains the main language tag only, and not the
secondary tag indicating country or region. For example, all the
English reviews are tagged as 'en', and not 'en-AU' or 'en-UK' and
so on.This field is empty if there is only a rating with no review
text.
original_language
optional
string
An IETF language code indicating the original language of the
review. If the review has been translated, then
original_language != language .This field
contains the main language tag only, and not the secondary tag
indicating country or region. For example, all the English reviews
are tagged as 'en', and not 'en-AU' or 'en-UK' and so on.This field
is empty if there is only a rating with no review text.
profile_photo_url
optional
string
The URL to the user's profile photo, if available.
text
optional
string
The user's review. When reviewing a location with Google Places,
text reviews are considered optional. Therefore, this field may be
empty. Note that this field may include basic HTML markup. For
example, the entity reference &amp; may represent
an ampersand character.
translated
optional
boolean
A boolean value indicating if the review was translated from the
original language it was written in.If a review has been translated,
corresponding to a value of true, Google recommends that you
indicate this to your users. For example, you can add the following
string, "Translated by Google", to the review.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
