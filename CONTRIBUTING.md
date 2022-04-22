### Contributing
Everyone is welcome to open pull requests and help the development. The project is a single application written in [NextJS](https://nextjs.org) this means that most developers familiar with React should have no problems understanding the codebase. 


# Branch structure 
The project uses a two-branch structure. The production website is on the `main` branch, and the code in said branch is the one that the current website is using. All development happens in the `develop` branch. `develop` can have unfinished features but the code **must** always compile (the automated pipeline checks for it). It's stll preferabble not to commit features that are work in progress. 

If you're an external developer you can fork the repository and open a new branch from `develop`. The convention for naming new branches is `feature/name-of-the-feature`. Please open your branch as soon as you start working on something so other developers can see what you're working on. The pull request should be made into `develop`.

If you're working on an existing issue please link it to your pull request.

Once you've finished the development tag one of the maintainers in the comments so a code review can be made. 

# Conventions 

All commits **must** follow the [Convntional Commits format](https://www.conventionalcommits.org/en/v1.0.0-beta.2/). We currently do not have an automated system for chcking it but please be aware that a pull request that doesn't follow them will be rejected. The main tags are:
  * feat: - For new features
  * fix: - For bug fixes
  * docs: - For changes to the documentation
  * chore: - For merges and changes that don't involve code or documentation

The project also contains a custom linter, any pull request that doesn't use it will be **rejected** (adding one to the pipeline is a wip)

Other rules:
  * All Components **must** be in their own folder inside `/components`. i.e. `/components/NewComponent`
  * Components follow a Capitalized Camel Case naming convention (`MyComponent`)
  * Functions and Variables follow a Camel Case naming convention (`myVariable`)
  * Pages follow a dash case naming convention, and should be kept to one word when possible (`page` or `new-page`)
  * Indentation is 2 spaces
