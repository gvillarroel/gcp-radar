---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.676Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Special-character escaping in UDM Search"
feature_slug: "special-character-escaping-in-udm-search"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
keywords:
  - "special"
  - "character"
  - "escaping"
  - "udm"
  - "search"
  - "supports"
  - "characters"
  - "backslashes"
---

# Special-character escaping in UDM Search

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

UDM Search supports escaping special characters with backslashes and double quotes.

## Extended Definition

UDM Search supports escaping special characters with backslashes and double quotes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For example: principal.hostname != "http-server" nocase principal.hostname = "JDoe" nocase principal.hostname = /dns-server-[0-9]+/ nocase Escape characters in strings : Escape special characters with a backslash, as follows: Use \\ to escape a backslash (\).
- For example: metadata.product name = "Google Cloud VPC Flow Logs" Case-insensitive strings : Use the nocase operator to match any combination of uppercase and lowercase characters in a string.
- View aggregated results For statistics-based searches, Google SecOps supports large aggregated result sets.
- Search large result sets Google SecOps supports returning and navigating up to 1 million results.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Param data types STRING Return type STRING Code samples Example 1 This example returns an empty string. strings.extract hostname("") = "" Example 2 random string, not a URL strings.extract hostname("1234") = "1234" Example 3 multiple backslashes strings.extract hostname("\\\\") = "" Example 4 non-English characters handled gracefully strings.extract hostname("http://例子.卷筒纸.中国") = "例子.卷筒纸.中国" Example 5 handling URIs strings.extract hostname("mailto:?to=&subject=&body=") = "mailto" Example 6 multiple characters before actual URL strings.extract hostname(" \t !$5 ^)&dahgsdfs;http://www.google.com") = "www.google.com" Example 7 special characters in URI # strings.extract hostname("test#@google.com") = "test" Example 8 special characters in URL # strings.extract hostname("https://test#@google.com") = "test" strings.from base64 Supported in: Rules Search strings.from base64(base64 encoded string) Description Function converts a base64 encoded STRING value to a raw binary BYTES value.
- Param data types STRING Return type STRING Code samples Example 1 This example shows an empty string strings.extract domain("") = "" Example 2 random string, not a URL strings.extract domain("1234") = "" Example 3 multiple backslaches strings.extract domain("\\\\") = "" Example 4 non-alphabet characters handled gracefully strings.extract domain("http://例子.卷筒纸.中国") = "卷筒纸.中国" Example 5 handling URIs strings.extract domain("mailto:?to=&subject=&body=") = "" Example 6 multiple characters before actual URL strings.extract domain(" \t !$5 ^)&dahgsdfs;http://www.google.com") = "google.com" Example 7 special characters in URI # strings.extract domain("test#@google.com") = "" Example 8 special characters in URL # strings.extract domain("https://test#@google.com") = "" Example 9 positive test case strings.extract domain("https://google.co.in") = "google.co.in" strings.extract hostname Supported in: Rules Search strings.extract hostname(string) Description Extracts the hostname from a string.
- Example: split string with default The following example splits the string using the default delimiter, which is a comma. strings.split("a,b,c,d") = ["a", "b", "c", "d"] Example: split string with colon The following example splits the string at each colon ( : ). strings.split("a:b:c:d", ":") = ["a", "b", "c", "d"] Example: missing delimiter The following example is missing the delimiter in the string value. strings.split("a,b,c,d", ":") = ["a,b,c,d"] Example: empty delimiter The following example has an empty delimiter string. strings.split("abc", "") = ["a", "b", "c"] strings.to lower Supported in: Rules Search strings.to lower(stringText) Description This function takes an input string and returns a string after changing all characters to lowercase Param data types STRING Return type STRING Code samples Example 1 The following example returns true . "test@google.com" = strings.to lower($e.network.email.to) strings.to upper Supported in: Rules Search strings.to upper(string val) Description Returns the original string with all alphabetic characters in uppercase.
- Example 1 In the following example, the same string is passed as the input string and the cutset, which results in an empty string. strings.trim("str", "str") // "" Example 2 In the following example, an empty string is passed as the cutset, which results in the original string str because there are no characters specified in the cutset to remove. strings.trim("str", "") = "str" Example 3 In the following example, the function yields an empty string because the input string is already empty and there are no characters to remove. strings.trim("", "str") = "" Example 4 In the following example, the function yields str because the trim function removes the following: trailing whitespace in "a aastraa aa " the characters specified in the cutset (space, a) strings.trim("a aastraa aa ", " a") = "str" strings.url decode Supported in: Rules Search strings.url decode(url string) Description Given a URL string, decode the escape characters and handle UTF-8 characters that have been encoded.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference-required-1`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response integration metadata Name The Name should correspond to the product name with which the integration is going to be integrated and shouldn't contain any special characters.
- Avoid using special characters and try to limit the action parameter name to 2-4 words.
- Avoid using special characters and try to limit the action parameter name to 2-4 words.
- Avoid using special characters and try to limit the action parameter name to 2-4 words.

