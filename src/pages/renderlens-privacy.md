---
layout: ../layouts/AboutLayout.astro
title: "Privacy Policy - RenderLens JavaScript SEO Inspector"
description: "Privacy policy for RenderLens, a Chrome extension that compares initial HTML responses with JavaScript-rendered DOM content for technical SEO analysis."
---

**Last updated: October 9, 2026**

RenderLens – JavaScript SEO Inspector is a browser extension designed to help SEO professionals, developers, and website owners identify differences between a webpage's initial HTML response and its JavaScript-rendered DOM.

This policy explains what information the extension accesses, how it is used, how it is stored, and when information may be shared with third-party services.

### Information RenderLens Accesses

When you use RenderLens to inspect a webpage, the extension may access:

- **Website URLs:** The URL of the webpage being inspected.
- **Initial HTML response:** The HTML retrieved from the webpage to compare its original response with the rendered version.
- **Rendered webpage content:** Information available in the page DOM, including page titles, meta descriptions, canonical URLs, headings, links, structured data, and other SEO-related elements.

This information is used to provide the extension's core functionality: analyzing JavaScript rendering and identifying potential technical SEO issues.

### How Information Is Used

RenderLens uses the information it accesses to:

- Compare the initial HTML response with the rendered DOM.
- Identify SEO elements that are missing, added, or changed after JavaScript execution.
- Display technical SEO inspection results to the user.
- Help diagnose rendering, crawlability, and indexability issues.

RenderLens does not use inspected webpage content for advertising, profiling, creditworthiness assessment, or unrelated purposes.

### Local Processing and Storage

RenderLens processes inspection data within the browser extension. The captured HTML response is temporarily held in the extension's in-memory cache and associated with the relevant browser tab.

The extension does not operate a separate application server or database to store inspected webpage content. The cached response is removed when the associated tab is closed, and in-memory data may be cleared when the extension's background service worker restarts.

RenderLens does not intentionally transmit inspected HTML or rendered DOM content to a developer-operated analytics server.

### Network Requests

To retrieve the initial HTML response, RenderLens makes a separate request to the URL being inspected. This request may use the browser's existing credentials for that website, and the website's server may receive the request as part of its normal operation.

The response is processed by the extension for comparison with the rendered DOM. Pages requiring authentication may return account-specific or otherwise private content.

### Third-Party Services

RenderLens may provide links to external validation tools, such as Google's Rich Results Test or Schema.org Validator, for additional structured-data checks.

If you choose to open an external validation tool, the relevant webpage URL may be shared with that third-party service. Those services operate under their own privacy policies and terms. RenderLens does not control how third-party services process information you submit to them.

### Data Sharing and Sale

RenderLens does not sell inspected webpage content or browsing information.

The extension does not intentionally share inspected HTML or rendered DOM content with the developer or other third parties through a separate backend service. Information may be sent to a third-party validation service when you explicitly choose to open that service, as described above.

The website being inspected may receive the extension's HTML request as described in the Network Requests section.

### Data Security

RenderLens limits its handling of inspection data to what is needed to provide its SEO analysis features. Since inspected content may be sensitive, users should exercise caution when inspecting private, authenticated, or confidential webpages.

### Your Choices

You control when you use RenderLens to inspect webpages. You can stop an inspection by closing the relevant tab or stop further access by disabling or uninstalling the extension.

Avoid using the extension on pages containing confidential or sensitive information unless you understand the implications of inspecting that content.

### Changes to This Policy

This privacy policy may be updated when RenderLens changes or when clarification is needed. Updates will be published on this page, with the revised date shown at the top.

### Contact

For questions about this privacy policy or RenderLens, please contact the website owner through [SEO GEO](https://seogeo.in/).
