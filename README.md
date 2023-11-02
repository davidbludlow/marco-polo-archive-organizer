# The Marco Polo Archive Organizer

This helps you organize your polos (video messages) created with the [Marco Polo](https://marcopolo.me) app. If you do not pay for unlimited storage in Marco Polo, then eventually your polos will be put in the "Trash" in the app. You can download them from the trash, but they come in a bunch of annoying zip files. This program will take the polos out of the zip files, organize them into folders by conversation, **and delete the zip files, afterward.**

## How To Mass Download Polos The Most Easily

1. Wait until your polos are old enough that they are put in the "Trash" but not too old that they are permanently deleted.
2. In the Marco Polo app click on

   <image src="./supplemental-docs/pictures/screenshot-1.jpg" width="200px" /> then

   <image src="./supplemental-docs/pictures/screenshot-2.jpg" width="200px" /> (If you don't see that, then update Marco Polo, or maybe you are paying for unlimited storage) then

   <image src="./supplemental-docs/pictures/screenshot-3.jpg" width="200px" /> then

   <image src="./supplemental-docs/pictures/screenshot-4.jpg" width="200px" /> then

   <image src="./supplemental-docs/pictures/screenshot-5.jpg" width="200px" /> then

   <image src="./supplemental-docs/pictures/screenshot-6.jpg" width="200px" /> then

   <image src="./supplemental-docs/pictures/screenshot-7.jpg" width="200px" />

3. Repeat that for each conversation. Start with the most important conversations, because there may be a limit to how many conversations you can download per day.
4. Wait for the email(s) to arrive. Go to the link in the email.
5. Make sure the URL of the page starts with "marcopolo.me", so you know you are not being scammed.
6. Enter your phone number to verify that you are you.
7. Download all the zip files. If there are many zip files, you may want to use a download manager browser extension like [DownThemAll](https://www.downthemall.org/). DownThemAll makes it fast and easy to reliably download every link on a page.

**Warning:** These zip files may contain only your side of the conversation if your friends have their settings set to not allow other people to download their polos. Check it!

## Extracting/Organizing The Polos

Now you should have a bunch of zip files like:

- John_A_1_of_4.zip
- John_A_2_of_4.zip
- John_A_3_of_4.zip
- John_A_4_of_4.zip
- David_L_1_of_1.zip

This program will extract the polos from those zip files and add them
to folders with names like:

- John_A
- David_L

The program will delete each zip file after it is done pulling the polos out of it.

There are two ways to run this program:

<details>
<summary id="option1">Option 1: The harder, recommended way (click to expand)</summary>

Here, you will run the program with Deno. This is the recommended way to run the program because it is safer for you. If you run a program with [Deno](https://deno.land) you can be confident that the program will not have the permission/power to harm your computer or your data, unless you give it permission to do so. It can't even send your data over the internet without your permission.

1. Put all the downloaded zip files in a folder that doesn't have any non-Marco-Polo zip files in it.
2. Make a copy of the folder, just in case something goes wrong. (I don't think anything will go wrong.)
3. Look over the names of the files. If you have two correspondents with the same first name and last initial, then the program will probably mix their polos. Manually separate them before running the program.
4. Install Deno. Deno is small and harmless to install. It is well-respected for its security features. See [here](https://docs.deno.com/runtime/manual/getting_started/installation#download-and-install) for install instructions, but those instructions are a bit weird, so here are some hints:
   - There isn't a normal installer file to install Deno that you download normally. Instead, you run a command in your terminal.
   - Open up a terminal. On Windows, you can do this by pressing the Windows key and typing "powershell" then pressing enter. On Mac, you can do this by pressing the Command key and the space bar at the same time, then typing "terminal" then pressing enter.
   - When looking at the [the Deno install instructions](https://docs.deno.com/runtime/manual/getting_started/installation#download-and-install) make sure you click on "Windows" or "macOS" depending on what kind of computer you have.
   - The website will show you a bunch of options of commands that you can run to install Deno. Pick the first one, unless you happen to like and understand one of the other commands better. For example, if you have Windows, then paste `irm https://deno.land/install.ps1 | iex` into your terminal and press enter.
5. Open a terminal (if you don't already have one open).
6. Copy and paste
   ```
   deno run https://raw.githubusercontent.com/davidbludlow/marco-polo-archive-organizer/main/extract-polos.ts
   ```
   into the terminal, then press enter. If it says it doesn't know what "deno" is, then maybe restart your terminal or maybe you didn't install Deno correctly.
7. When it asks, tell it where the folder with the zip files is.
8. When it asks for permission to read or write that folder, say yes.
9. After waiting for the program to finish, check each conversation and make sure that both sides of the conversation are there! If not, then call your friend and ask them to change their Marco Polo settings to allow other people to download their polos.

</details>

<details>
<summary id="option2">Option 2: The lazy way (click to expand)</summary>

This way is easier, but it is not recommended, because it involves running some program that you downloaded from the internet. This program isn't a virus, but how do you know that?

1. Put all the downloaded zip files in a folder that doesn't have any non-Marco-Polo zip files in it.
2. Make a copy of the folder, just in case something goes wrong. (I don't think anything will go wrong.)
3. Look over the names of the files. If you have two correspondents with the same first name and last initial, then the program will probably mix their polos. Manually separate them before running the program.
4. If you are on Windows, download the program [extract-polos.exe](https://github.com/davidbludlow/marco-polo-archive-organizer/raw/main/extract-polos.exe?download=). If you are on Mac, then do Option 1, because, even though I could have easily created a Mac version of the program, I didn't, because I don't have a Mac to test it on. If you are running Linux, then you are probably too smart to do Option 2. It is not worth the trouble that it would take to run this program on a mobile device.
5. Move extract-polos.exe into the folder with the zip files.
6. Run extract-polos.exe.
7. After waiting for the program to finish, check each conversation and make sure that both sides of the conversation are there! If not, then call your friend and ask them to change their Marco Polo settings to allow other people to download their polos.

</details>
