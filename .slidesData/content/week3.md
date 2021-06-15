---
title: "Week 3"
layout: "bundle"
outputs: ["Reveal"]
date: 2021-06-11T19:13:51+10:00
draft: true
---

{{< slide class="center" >}}

## Week 3

---

## [ALPACA](https://alpaca-attack.com/)

{{% section %}}

![](https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2021/06/aa-1200.png?resize=780,408)

**A**pplication **L**ayer **P**rotocol (**A**...) **C**onfusion (**A**...)

---

<img src="https://alpaca-attack.com/media/img/android-chrome-512x512.png" height="200px">

* Confusion Attack
  * MITM capability allows access to other secured services that share SSL/TLS certificates.

---

![](../week3-shared/alpaca-pokemon.jpg)

* Lots of requirements for the vulnerability to work

---

* Mitigations
  * SNI - Server Name Indication
  * ALPN - Application-Layer Protocol Negotiation
  * Unique SSL/TLS certificates - Let's Encrypt

&nbsp;  

> [alpaca-attack.com](https://alpaca-attack.com)

{{% /section %}}

---

{{< slide content="secedu.goodfaith" >}}

---

{{< slide class="center" >}}

## SUHHHHHHH
## LOOOOOOOO
## SHOOOONZZ

&nbsp;  

Challenge walkthroughs, cool things?  

> Bonus marks!!!

---

## Content Review QUIZ?

Topic: User Identity and Authentication  
Period: Week 2 - 3

Authentication is
- Validating the user is the identity they claim
Magic
Giving the user permissions/access based on their identity
The green padlock in the browser

Authorisation is
Validating the user is the identity they claim
Magic
- Giving the user permissions/access based on their identity
The green padlock in the browser

This is an example of
https://memeguy.com/photos/images/password-already-in-use-262036.png

Information Disclosure
Bad Programming

Add cookie monster
C is for ______

Cookies!



What is Hashing
- One way function
- Hash brown
- Easily reversed
- Encryption

What is a salt?
- 🧂
- 




What are ways to prevent 


Captcha
Account Lockout
Rate Limiting

---

{{< slide class="center" >}}

## More recon

> [robots.txt](https://www.google.com/robots.txt)

> [sitemap.xml](https://www.google.com/sitemap.xml)

---

## Password Reset

![](https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(9)(140).jpg)

Thanks for your birth date <3

---

## HTTPS Downgrade

{{% section %}}

* HTTPS = more difficult to intercept
* HTTP = easily interceptable

MITM: "Actually, let's use HTTP instead"

---

#### CSP

> Content Security Policy

Images, scripts, styles, etc can only be fetched from certain locations

_More on this in later weeks..._

---

#### HSTS

> HTTP Strict Transport Security

* A list of HTTPS-only sites
* [HSTS Preload List](https://hstspreload.org/)
  * Hardcoded into major web-browsers

{{% /section %}}

---

## Cookie Protection

* HTTP Only - Not accessible through JS
* Secure - Only for HTTPS
* <s>base64 encoding</s> no.

---

## OAuth

![](https://developer.atlassian.com/cloud/connect/images/connect-oauth-impersonation-flow.png)

---

