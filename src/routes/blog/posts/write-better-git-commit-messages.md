---
title: How to write better git commit messages
description: Learn how to write better commit messages in git. When you first start programming commits can be confusing, but by maintaining a structure in your commit messages you will eventually gain control over them
slug: write-better-git-commit-messages
date: '2023-08-07'
categories:
  - git
published: true
---

In this article I'll show what I think is the best way (simple but useful) to write git commit messages based on my experience and the projects I've worked on.

## The Problem

After working for quite some time on medium sized team projects, I've realized that when the project grows, commits start to be a problem. Commit messages start to be confusing, each developer makes them in a different way, it's not clearly specified what modifies what, sometimes commits are huge and modify several things at once among other problems that make the repository history tracking unreadable.

On the other hand, sometimes a lot of time is spent thinking about how to write commit messages. I ask myself questions like:

- What emoji should I use to make it look prettier?
- How do I write the message so that it is clear what I've done?
- Should I create several different commits with the changes?
- …

## The Solution

Basically, defining a commit message structure (**standardize** git commit messages) is the solution that has helped me to keep order in my projects, especially when the commit list is very large. It's inspired by [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to establish guidelines on which to base the commit structure. I show you how:

```
<type>: [optional icon] <message>
	
[optional body]
[optional footer(s)]
```

Firstly, a mandatory **type** indicating the type of commit. The commit type should be all lowercase. Here're some examples of types:

- `feat`: new feature
- `fix`: bug fix
- `style`: aesthetic changes (do not affect the meaning of the code)
- `refactor`: refactored code (doesn't fix bugs or add features)

And all the ones you want to use, such as `api`, `docs`, `chore`, `perf`, `test`, …

Secondly, an optional **icon**. I think it makes the commit messages prettier and visual. Here are the ones I use:

| icon | type |
| --- | --- |
| ✨ | feat |
| 🐛 | fix |
| 💄 | style |
| 🔨 | refactor |

Use the ones you like the most and which seem most representative to you. The important thing is to always use the same ones so that they have a meaning within the repository.

Thirdly, a mandatory **message** to describe the code changes. Some tips for writing good messages:

- Messages should be brief (50 characters maximum)
- Messages should be detailed enough to be easy to understand and should briefly describe the problem you solved
- Use the imperative mode with messages like `Add dark/light theme toggle`. You can use verbs such as add, fix, delete, update, refactor, …
- Capitalize the first word and don't end with punctuation marks

Fourthly, an optional **body** for further detailing that don't fit in the message due to character limitations.

Fifthly, an optional **footer(s)** to link to other commits, tasks or any extra information we want to add.

> It's important to note that each commit must cover a single task. The smaller the better, as it'll be easier to revert the commit if something goes wrong.

## Conclusion

Writing good commit messages in a standardized way will help you in both personal and team projects, to understand yourself as well as to communicate with other developers. No matter which structure you use, the important thing is to standardize the structure of commit messages. I'm sure you'll appreciate it when the repository grows.

But of course, you can't always write perfect commits. Don't block yourself  spending too much time thinking about what message to write. The key is to write it clearly and that's all.

You've seen how I write my commits, it can be done in a thousand different ways, but I hope it has helped you to learn and that you can apply it to improve your commits.