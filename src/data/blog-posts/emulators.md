---
title: Emulators
publishDate: 18 Nov 2023
description: Something about emulators.
link: "blog/emulators"
---

![Illustration of woman using a computer receiving likes](/assets/blog/casual-life-3d-likes.webp)

My life took a turn at 7, when my ant gave me a CD containing the emulators and ROMs to all the consoles that existed until them. I spent my childhood playing random SNES and Gameboy games, trying them out because the name had a cool word or for any other reason. This passion never went away, since later we would be able to emulate PS2 and Gamecube. The stream of good games to meet never ended.

I remember playing Pokemon Blue and remember that the emulator had a funny name. Something like NO$GB? The game had a cool overlay and some cute colors. Many years later I went back to play Pokemon Blue again. I was shocked when I find out that the game was black and white. My memory failed me that hard? It was clearly not a Gameboy Color game, maybe I was mistaking it with Pokemon Yellow? No, that could not be. It had that random overlay and I remember that it was a different one from Pokemon Red, I could not be dreaming this. This was when I found out that there's this thing called SuperGameboy, which was basically a Super Nintendo Cartridge that allowed you to play Gameboy games on the Super Nintendo and gave them some basic colors and overlay. Then I realized that I had no idea of how these emulators, which I knew my whole life, actually worked.

If we one of these old consoles, like the Gameboy, its basically a fancy calculator, right? It has some kind of processor and a basic display. The cartridge is a set of basic instructions to the processor and the circuit makes everything work. Since these are basic circuits, does this mean we can simulate them on code and make the instructions all work? That's... amazing! We can create a virtual circuit identical to the physical Gameboy so that it can read the instructions of the cartridge. You only need to know everything about how the original circuit works.

Thats easy enough, right? The Gameboy has an 8-bit processor, which means it can understand values up to 2^8 = 256. It has 8 registers, which are like 8-bit memory space that it can access and around 100 different operations that it can do with the values saved on them. Everything else is memory. It can use two registers to read up values up to 256\*256 so it can access memory from 0x0000 to 0xFFFF. The 0x in the beginning means we are dealing with memory. Or hexadecimal values. Idk.

So yeah, everyhing is memory. Did you press a button? This will trigger the circuit to write on a specific memory space the value 1. On each frame the console will read this memory space to know if you are pressing something.Based on that it will save other values to other spaces and this will be converted as Ash walking in Pallet Town with that iconic music. This is awesome and I need to learn more.
