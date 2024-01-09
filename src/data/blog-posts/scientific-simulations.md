---
title: Scientific Simulations
publishDate: 30 Nov 2021
description: How I learned programming
---

![Illustration of woman using a meditation app](/assets/blog/casual-life-3d-meditation-crystal.webp)

2011 was my first year in college, studying Physics. By the second semester I was having my Programming 101 course and started on a project to simulate some networks.

The course was trivial enough, we used C++ and learned the basics of syntax, algorithms and flow control. I had some prior knowledge from trying to mess with ActionScript / Macromedia Flash a few years before, so this was quite a breeze.

But parallel to this my teacher posed me the following problem: we have a network of individuals in one dimension, each one having a left and a right neighbor. Some of them might are infected and each unit of time one of two things may happen:

- Infect one of its neighbors (/lambda % of the time)
- Gets cured ( (100 - /lambda) % of the time))

And we wanna see what happens in a large network (L around 10ˆ6) after a lot of iterations. He said I could do this in any language I wanted and that he in particular used FORTRAN. Knowing that the majority of the department also used FORTRAN I joined on this idea.

I actually really like it? Its a strong typed language and I would constantly consider what sized integer or float I was going to need. The only thing that I was annoyed by was that we could not create an array without defining its size. Stuff like

const myArray[50] = []

By default you couldnt even do it like this without the compiler screaming at you

const arraySize = 50
const myArray[arraySize] = []

But I remember there being a way to make the example above working, although it took me a while to figure it out.

Using FORTRAN I learned a lot of mathematical methods to simulate stuff. Random number generators, Fast Fourier Transforms and stuff like that. I added to my github some stuff I did in a course on my PhD.

I also learned the basics of Python, but I did not understand the fuss around it. Got used to FORTRAN and had no reason to use anything different. Then I graduated and reencountered the Web Development and Javascript...
