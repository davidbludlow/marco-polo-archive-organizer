# The Marco Polo Archive Organizer

This helps you organize your polos (video messages) created with the Marco Polo app. If you do not pay for unlimited storage in Marco Polo, then eventually your polos will be put in the "Trash" in the app. You can download them from the trash, but they come in a bunch of annoying zip files. This program will will take take the polos out of the zip files, organize them into folders by conversation, **and delete the zip files, afterwards.**

## How To Mass Download Polos The Most Easily

1. Wait until your polos are old enough that they are put in the "Trash" but not to old enough that they are permanently deleted.
2. In the Marco Polo app click on

<image src="./supplemental-docs/pictures/screenshot-1.jpg" width="200px" /> then

<image src="./supplemental-docs/pictures/screenshot-2.jpg" width="200px" /> then

<image src="./supplemental-docs/pictures/screenshot-3.jpg" width="200px" /> then

<image src="./supplemental-docs/pictures/screenshot-4.jpg" width="200px" /> then

<image src="./supplemental-docs/pictures/screenshot-5.jpg" width="200px" /> then

<image src="./supplemental-docs/pictures/screenshot-6.jpg" width="200px" /> then

<image src="./supplemental-docs/pictures/screenshot-7.jpg" width="200px" />

3. Repeat that for each conversation. Start with the most important conversations, because there may be a limit to how many conversations you can download per day.
3. Wait for the email(s) to arrive. Go to the link in the email.
4. Make sure the URL of the page starts with "marcopolo.me", so you know you are not being scammed.
5. Enter in your phone number to verify that you are you.
6. Download all the zip files. If there are many zip files, you may want to use a download manager like [DownThemAll](https://www.downthemall.org/). (Note: I have not personally checked the code of DownThemAll, so I cannot guarantee that it isn't spyware in disguise, but I can say that it makes it very easy and fast to reliably download every link on a page. I just recommend that you disable or uninstall it when you are no longer using it, since I cannot be 100% sure of it's safety.)

**Warning:** These zip files may contain only your side of the conversation, if your friends have their settings set to not allow people to download their polos. Check it!

## Extracting/Organizing The Polos

Now you should have a bunch of zip files like:

- John_A_1_of_4.zip
- John_A_2_of_4.zip
- John_A_3_of_4.zip
- John_A_4_of_4.zip
- David_L_1_of_1.zip

Then this program will extract the polos from those zip files and adds them
to folders with names like:

- John_A
- David_L

The program will delete each zip file after it is done pulling the polos out of it.

There are two ways to run this program:

<details>
<summary id="option1">Option 1: The harder, recommended way (click to expand)</summary>

Here, you will run the program with Deno. This is the recommended way to run the program, because it is safer for you. If you run a program with [Deno](https://deno.land) you can be confident that the program will not have the permission/power to harm your computer or your data, unless you give it permission to do so.

1. Put all the downloaded zip files in a folder that doesn't have any non-Marco-Polo zip files in it.
2. Make a copy of the folder, just in case something goes wrong. (I don't think anything will go wrong.)
3. Install Deno. (See [here](https://docs.deno.com/runtime/manual/getting_started/installation) for instructions.)
4. Open a terminal. (On Windows, you can do this by pressing the Windows key and typing "powershell" then pressing enter.)
6. Copy and paste
```PowerShell
deno run https://raw.githubusercontent.com/davidbludlow/marco-polo-archive-organizer/main/extract-polos.ts
```

into the terminal, then press enter. If it says it doesn't know what "deno" is, then maybe restart your terminal or maybe you didn't install Deno correctly.
7. When it asks, tell it where the folder with the zip files is.
8. When it asks for permission to read or write that folder, say yes.
9. After waiting for the program to finish, check each conversation and make sure that both sides of the conversation are there! If not, then call your friend and ask them to change their Marco Polo settings to allow other people to download their polos.
</details>

<details>
<summary id="option2">Option 2: The lazy way (click to expand)</summary>

This way is easier, but it is not recommended, because it involves running some program that you downloaded from the internet. The program isn't a virus, but you

1. Put all the downloaded zip files in a folder that doesn't have any non-Marco-Polo zip files in it.
2. Make a copy of the folder, just in case something goes wrong. (I don't think anything will go wrong.)
3. If you are on Windows, download the program [extract-polos.exe](extract-polos.exe). If you are on Mac, then do Option 1, because, even though I could have easily created a Mac version of the program, I didn't, because I don't have a Mac to test it on. If you are running Linux, then you are probably too smart to do Option 2. It is not worth the trouble that it would take to run this program on a mobile device.
4. Put the extract-polos.exe inside of the folder with the zip files.
5. Run extract-polos.exe.
7. After waiting for the program to finish, check each conversation and make sure that both sides of the conversation are there! If not, then call your friend and ask them to change their Marco Polo settings to allow other people to download their polos.
</details>
