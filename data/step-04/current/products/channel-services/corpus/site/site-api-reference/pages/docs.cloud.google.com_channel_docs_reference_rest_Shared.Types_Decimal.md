---
title: "Decimal \_|\_ Channel Services \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/Decimal
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/channel/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/Decimal
  title: "Decimal \_|\_ Channel Services \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Channel Services
APIs & Reference
Send feedback
Decimal
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal .
JSON representation
{
"value" : string
}
Fields
value
string
The decimal value, as a string.
The string representation consists of an optional sign, + ( U+002B ) or - ( U+002D ), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string should be interpreted as 0 .
The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand.
The exponent consists of the character e ( U+0065 ) or E ( U+0045 ) followed by one or more decimal digits.
Services should normalize decimal values before storing them by:
Removing an explicitly-provided + sign ( +2.5 -> 2.5 ).
Replacing a zero-length integer value with 0 ( .5 -> 0.5 ).
Coercing the exponent character to upper-case, with explicit sign ( 2.5e8 -> 2.5E+8 ).
Removing an explicitly-provided zero exponent ( 2.5E0 -> 2.5 ).
Services may perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: 2.5E-1 <-> 0.25 ). Additionally, services may preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so.
Note that only the . character is supported to divide the integer and the fraction; , should not be supported regardless of locale. Additionally, thousand separators should not be supported. If a service does support them, values must be normalized.
The ENBF grammar is:
DecimalString =
'' | [Sign] Significand [Exponent];
Sign = '+' | '-';
Significand =
Digits ['.'] [Digits] | [Digits] '.' Digits;
Exponent = ('e' | 'E') [Sign] Digits;
Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' };
Services should clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values.
Services may choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and should round the value to fit the supported scale. Alternatively, the service may error with 400 Bad Request ( INVALID_ARGUMENT in gRPC) if precision would be lost.
Services should error with 400 Bad Request ( INVALID_ARGUMENT in gRPC) if the service receives a value outside of the supported range.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-19 UTC."],[],[]]
