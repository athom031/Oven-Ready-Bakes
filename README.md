# Oven-Ready-Bakes

### Website Tutorial Start

**Install needed Software**

- Code Environment - [VS Code Studio](https://code.visualstudio.com/download)
- Node.js
    - `npm` is used a lot in react. It's basically just a bunch of packages that are already out there for you to use rather than you having to do it yourself. We use `npm` to run someone else's work that manages locally hosting your website, building it for production, or just a neat project/API someone else has made.
    - It's possible you already have node, try running this in your command line:
        `npm -v`.
        - If that code gives you back a version number then you have some version of node on your laptop. ie:
        ```
        thomaalex@thomaalex-mbp Oven-Ready-Bakes % npm -v
        9.6.7
        ```
    - If you don't have npm when you run that code, you can go through the download process [HERE](https://nodejs.org/en/download)
    - Even if you have downloaded it, it's possible that you don't have latest version of npm so run this again in command line: `npm install -g npm`

**Let's get current website working locally**

- Clone the Repo
```
git clone https://github.com/athom031/Oven-Ready-Bakes.git
```
*Example of working clone*
```
thomaalex@thomaalex-mbp Desktop % git clone https://github.com/athom031/Oven-Ready-Bakes.git
Cloning into 'Oven-Ready-Bakes'...
remote: Enumerating objects: 86, done.
remote: Counting objects: 100% (86/86), done.
remote: Compressing objects: 100% (61/61), done.
remote: Total 86 (delta 23), reused 80 (delta 20), pack-reused 0
Receiving objects: 100% (86/86), 211.53 KiB | 1.11 MiB/s, done.
Resolving deltas: 100% (23/23), done.
```
- All of the npm packages we use throughout our project are available online already. So for efficiency purposes the packages we use are never actually uploaded to github. The idea is that as long as the code knows where to get the packages, they can install it, so we're going to do just that.
    - First direct yourself wherever you cloned the Repo, for me it's currently in Desktop/Oven-Ready-Bakes
    ```
    thomaalex@thomaalex-mbp FakeDirectory % cd
    thomaalex@thomaalex-mbp ~ % cd Desktop/Oven-Ready-Bakes
    ```
    - Now we're going to tell npm to go fetch all the packages we know we use in the project (if you're curious the code goes through `package.json` for all these packages)
    ```
    npm i
    ```
- Now we have all of the packages we need to run the project, just to check the current status of the website, let's host it locally. We're not uploading the website anywhere it's just available to us on our local ports.
```
npm start
```
- Now it should open the website automatically but in case it doesn't let's go to our browser to: `http://localhost:3000/` and you should see the very skeleteon looking website!
- And so now we are locally hosting a website of the code we have on our laptop (not the code thats on github). So if you were to open your repository in codehub and change the code, we should see those changes in the local website as well.
```
thomaalex@thomaalex-mbp Oven-Ready-Bakes % code .
```
- This should open our project in VS code.
- [`Users/thomaalex/Desktop/Oven-Ready-Bakes/src/components/Home/Home.js`](https://github.com/athom031/Oven-Ready-Bakes/blob/main/src/components/Home/Home.js)
    - If I change the code originally in this file, I should see these changes reflect on the home screen

**Adding Changes to Github**

To be continued ...
