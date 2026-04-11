---
title: "Package google.type \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.type
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.type
  title: "Package google.type \_|\_ Places API \_|\_ Google for Developers"
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
Reference
Send feedback
Package google.type
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document outlines the specifications for four data types: Date, LatLng, LocalizedText, and Money.
The Date type handles full and partial calendar dates, while LatLng represents geographical coordinates with latitude and longitude.
LocalizedText provides text translations using BCP-47 language codes, and Money stores monetary values with currency codes and amounts in units and nanos.
Each data type has specific fields with constraints and requirements for valid data representation.
Index
Date (message)
LatLng (message)
LocalizedText (message)
Money (message)
PostalAddress (message)
TimeZone (message)
Date
Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
A full date, with non-zero year, month, and day values.
A month and day, with a zero year (for example, an anniversary).
A year on its own, with a zero month and a zero day.
A year and month, with a zero day (for example, a credit card expiration date).
Related types:
google.type.TimeOfDay
google.type.DateTime
google.protobuf.Timestamp
Fields
year
int32
Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
month
int32
Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
day
int32
Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
LatLng
An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard . Values must be within normalized ranges.
Fields
latitude
double
The latitude in degrees. It must be in the range [-90.0, +90.0].
longitude
double
The longitude in degrees. It must be in the range [-180.0, +180.0].
LocalizedText
Localized variant of a text in a particular language.
Fields
text
string
Localized string in the language corresponding to language_code below.
language_code
string
The text's BCP-47 language code, such as "en-US" or "sr-Latn".
For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier .
Money
Represents an amount of money with its currency type.
Fields
currency_code
string
The three-letter currency code defined in ISO 4217.
units
int64
The whole units of the amount. For example if currencyCode is "USD" , then 1 unit is one US dollar.
nanos
int32
Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If units is positive, nanos must be positive or zero. If units is zero, nanos can be positive, zero, or negative. If units is negative, nanos must be negative or zero. For example $-1.75 is represented as units =-1 and nanos =-750,000,000.
PostalAddress
Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains.
In typical usage, an address would be created by user input or from importing existing data, depending on the type of process.
Advice on address input or editing:
Use an internationalization-ready address widget such as https://github.com/google/libaddressinput .
Users should not be presented with UI elements for input or editing of fields outside countries where that field is used.
For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478 .
Fields
revision
int32
The schema revision of the PostalAddress . This must be set to 0, which is the latest revision.
All new revisions must be backward compatible with old revisions.
region_code
string
Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
language_code
string
Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations.
If this value is not known, it should be omitted (rather than specifying a possibly incorrect default).
Examples: "zh-Hant", "ja", "ja-Latn", "en".
postal_code
string
Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (for example, state or zip code validation in the United States).
sorting_code
string
Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (for example, "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (Côte d'Ivoire).
administrative_area
string
Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. For Spain, this is the province and not the autonomous community (for example, "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. For example, in Switzerland, this should be left unpopulated.
locality
string
Optional. Generally refers to the city or town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines .
sublocality
string
Optional. Sublocality of the address. For example, this can be a neighborhood, borough, or district.
address_lines[]
string
Unstructured address lines describing the lower levels of an address.
Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country or region of the address. In places where this can vary (for example, Japan), address_language is used to make it explicit (for example, "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). In this way, the most specific line of an address can be selected based on the language.
The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines . It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved.
Creating an address only containing a region_code and address_lines and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
recipients[]
string
Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
organization
string
Optional. The name of the organization at the address.
TimeZone
Represents a time zone from the IANA Time Zone Database .
Fields
id
string
IANA Time Zone Database time zone. For example "America/New_York".
version
string
Optional. IANA Time Zone Database version number. For example "2019a".
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
