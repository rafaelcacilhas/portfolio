---
title: C stuff
publishDate: 30 Oct 2023
description: My adventures on C land
link: "blog/c-stuff"
---

<p align="center">
  <img src="/assets/blog/c-stuff/hovertank.jpeg" width=500/>
</p>

My first programming course on college used C++. Seems like a decent standard language but I always had trouble reading actual C++ projects. There are so many libraries and the names used always confused me. In the next few years I dabbled in Python and Javascript, but I always wanted to learn C and understand what is the common ancestor from all these languages.

During my time studying Physics we mostly used FORTRAN, which is a low level language but from a different family than C. I actually really enjoyed my time using it, as I discussed on [scientific simulations]() post.

One day I stumbled on someone mentioning [The C Programming Language](https://www.libgen.is/book/index.php?md5=C684BE9C0147B68596683222502675FB) book. I opened out of curiosity and was amazed by how simple everything was; I read the whole book in two or three sittings.

I decided then to try to understand how the [Doom engine](https://github.com/id-Software/DOOM) works. Or at least the hovertank3d engine, who knows.

What I learned is that to program in C is kinda frustrating. The first compilers that I used gave me problems even for a simple Hello World program. When I finally made everything work I found out that using OpenGL in a Macbook is unreasonably hard. The only way I managed to make it work was using XCode and I dont want to use XCode.

Building the source code from other projects is way harder than I thought. I really started to miss having the ability to simply import some piece of code instead of actually having to have it in a file somewhere.

I managed to create a simple raytracer and decided it was better to leave it like this for now. I cant find the project right now and the best image that I found has only the 2D part working out. Oh well.

<p align="center" >
  <img src="/assets/blog/c-stuff/raytracer.png" width=200 />
</p>

I will probably go through the Doom source code at my own pace, but I'll not be making my raytracer in C, at least not for now, but at least I was able to see stuff like this

<p align="center" >
  <img src="/assets/blog/c-stuff/c_question.jpeg" width=500/>
</p>

Fascinating stuff.

I am eager to learn more about graphics programming. Is there a default path to start with it in 2024? I thought about going to Godot, but I think I want to start with something more fundamental. I'll probably stay in Javascript land for a while and learn some three.js
