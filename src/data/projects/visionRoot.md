---
title: Vision Root
publishDate: 01 Mar 2021
description: a software house.
image: "/assets/projects/visionRootLogo.png"
link: "/projects/visionRoot"
---

![Illustration of woman using a computer receiving likes](/assets/projects/visionroot.png)

Vision Root was a software house start-up company in Viçosa. I was the fifth engineer when I was hired and we soon grew to six. We had several projects and I worked in a few of them, where I was able to acquire experience in several technologies, which I will list in more details down bellow.

Most of the projects were made in React, although we mantained the <a href="https://inmediam.com.br/" target="blank"> InMediam </a> website, which was made in Laravel.

Down bellow I'll discuss in more details two projects that allowed me to learn a lot.

## <a name="top"></a> Table of Contents

- [Appice](#Appice)
- [TremVip](#TremVip)

---

## <a name="Appice"></a>Appice

Appice is an app that is focused on helping women keep their Apice cycles. The frontend was made using React Native, which allowed me to learn the basics of and made me learn the basics of mobile development and transfer my React knowledge into it.

The backend was written in node, although I do not recall if we used any frameworks. It was common for us to use Nest.js, but I do not remember if it was used in this particular project. This backend was also accessed by a website, which had all the relevant dashboards for keeping track of the app.

<img src="/assets/projects/appice-intro.jpg" width="200" alt="Appice auth screen" />
<img src="/assets/projects/appice-main.jpg" width="200" alt="Appice main screen" />

I built most of the auth system using the company <a href="https://www.keycloak.org/" target="blank"> Keycloak </a> settings. This app had several categories of different users:

- Patients
- Doctors
- Admins

which had vastly different access to data. Keycloak helps in doing these auths and autorizations, although it is quite complicated to configure and the documentation is not the best I have read.

The client had all the design figured out and it was quite a pleasure to reconstruct everything into a working app

## <a name="TremVip"></a>TremVip

![TremVip](/assets/projects/tremvip.png)

TremVip is an online ticket store for events in Viçosa. We created it using Next, in particular its e-shop template. In this project I learnt the basics of Next and SSR and also its integration to the backend using GraphQL.
The products of the store were digital tickets, each one being encoded into a QR-Code that could be read by a separated app.
[[Top]](#top)
