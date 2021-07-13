---
title: "Week 7"
layout: "bundle"
outputs: ["Reveal"]
date: 2021-07-13T17:15:27+10:00
draft: true
---

{{< slide class="center" >}}

## Week 7

---

{{< slide content="secedu.goodfaith" >}}

---

Client Side

* Generic term... anything on the client

Useful things?
* localstorage
* sessionstorage
* cookies


site != origin

What is an origin?

Scheme + Host + Port



Site = next subdomain . publicsuffix

a public suffix can be multi part (i.e. github.io is a single public suffix)

all cross site requests are cross origin
but not all cross origin requests are cross site





SameSite

Strict - No cookie is sent
Lax - Cookie sent if top nav, Only sent during GET requests, not for JS
None - Cookies always sent

Google Chrome new set it to Lax