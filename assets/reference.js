var commandData = {
    "config": {
        "name": "config",
        "type": "Setup & Config",
        "fav": false,
        "short": "View or set repo & global options",
        "flags": "--list (list all variables set)",
        "long": "",
        "reference": "https://git-scm.com/docs/git-config",
        "keywords": [
      "config",
      "configuration",
      "setup"
    ]
    },
    "help": {
        "name": "help",
        "type": "Setup & Config",
        "fav": true,
        "short": "Display help info about Git",
        "flags": "--guide or -g (list useful guides)",
        "long": "This is where you go for quick help. It functions exactly the same as git --help. Additionally, you can change the behavior and default format of help using the config command (see reference).",
        "reference": "https://git-scm.com/docs/git-help",
        "keywords": "help",
        "examples": [
            {
                "title": "no options",
                "flags": "",
                "desc": "list common Git commands",
                "code": "git help"

    }, {
                "title": "ALL",
                "flags": "--all, -a",
                "desc": "lists all available commands",
                "code": "git help --all"

    }, {
                "title": "GUIDE",
                "flags": "--guide, -g",
                "desc": "list useful Git guide",
                "code": "git help --guide"

    }, {
                "title": "<command_name>",
                "flags": "",
                "desc": "list info for a particular command",
                "code": "git help clone"

    }, {
                "title": "INFO",
                "flags": "--info, -i",
                "desc": "use option to display in info format",
                "code": "git help -i clone"

    }, {
                "title": "MAN",
                "flags": "--man, -m",
                "desc": "display in manual format; produces the same result as man <command-name>. for example man git-clone",
                "code": "git help --man clone"

    }, {
                "title": "WEB",
                "flags": "--web, -w",
                "desc": "displays manual page for command in HTML format",
                "code": "git help --web clone"

    }]
    },
    "init": {
        "name": "init",
        "type": "Project Admin",
        "fav": true,
        "short": "Create a Git repo or reinitialize one",
        "flags": '"I don\'t need no stinkin\' flags"',
        "long": "<code>git init</code> is how you start using get. This command creates an empty Git repository - basically a .git directory with subdirectories for objects, refs/heads, refs/tags, and template files.  An initial HEAD file that references the HEAD of the master branch is also created. Often after initializing your repo, you will add all your files ( <code>git add .</code> ) so they can be tracked, then commit them ( <code>git commit</code> ).",
        "reference": "https://git-scm.com/docs/git-init",
        "keywords": [
      "init",
      "initialize",
      "create",
      "repo",
      "bare"
    ]
    },
    "clone": {
        "name": "clone",
        "type": "Project Admin",
        "fav": true,
        "short": "Clone a repository into a new directory",
        "flags": "--bare (make a bare version of a repo)",
        "long": "Instead of creating an empty repo (git init), use <code>git clone [repo_url]</code> to clone an existing repo. Cloning gives you full copy of all data, including every version of every file for the history of the project. Check out the reference at the end for more info on repo urls.<br>The clone command has a lot more flags that are not listed in the examples, that are not used very often. See reference below for more info.",
        "reference": "https://git-scm.com/docs/git-clone",
        "keywords": [
      "clone",
      "copy",
      "bare",
      "url"
    ],
        "examples": [{
                "title": "Clone a Repo",
                "flags": "",
                "desc": "Basic use of clone command: <code>git clone [repo-url] </code>. If you don't want your repo/directory named the same you can specify it: <code>git clone [repo-url] [repo-name]</code>",
                "code": "git clone https://github.com/theJoi/joisCoolProject myCoolProject"
    },
            {
                "title": "BARE",
                "flags": "--bare",
                "desc": "Make your cloned repo a bare repo. Check out this article if you're not sure what a bare repo is: <a href='http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository'>What is a bare git repository?</a>",
                "code": "git clone --bare my_project my_project.git"
    },
            {
                "title": "QUIET",
                "flags": "--quiet, -q",
                "desc": "Do your cloning quietly (progess not reported)",
                "code": "git clone -q joi@joiwilliams.com/gits/shhhh"
    },
            {
                "title": "VERBOSE",
                "flags": "--verbose, -v",
                "desc": "Do your cloning loudly (verbose progress reported)",
                "code": "git clone -v file:///C:/gits/I-like-my-reports-verbose"
    },
            {
                "title": "NO CHECKOUT",
                "flags": "--no-checkout, -n",
                "desc": "Refrain from automatically checking out HEAD after cloning.",
                "code": "git clone -n file:///C:/gits/I-wanna-do-it-myself"
    },
            {
                "title": "ORIGIN",
                "flags": "--origin [name], -o [name]",
                "desc": "Instead of using the remote name <code>origin</code> call it whatever you want.",
                "code": "git clone --origin not-the-origin"
    },
            {
                "title": "BRANCH",
                "flags": "--branch [name], -b [name]",
                "desc": "Instead of having the HEAD point to the same branch as the cloned repo, pick your branch. If that branch doesn't exist git will create it.",
                "code": "git clone -b git://Public/publicRepo myRepo -b myBranch"
    }]
    },
    "git": {
        "name": "git",
        "type": "Git",
        "fav": true,
        "short": "All Hail Git!",
        "flags": "--help, --version",
        "long": "Obviously you need git to use git. Precede all commands with the command <code>git</code>. In addition, use this command to get info about git and set some configurations. Here's a couple examples, for more see the reference.",
        "reference": "https://git-scm.com/docs/git",
        "keywords": "",
        "examples": [

            {
                "title": "VERSION",
                "flags": "--version",
                "desc": "Print the version of git you're using.",
                "code": "git --version"
    },
            {
                "title": "HELP",
                "flags": "--help",
                "desc": "Get help. Works exactly like <code>git help</code>",
                "code": [
        "git --help",
        "git --help --all"
      ]
    },
            {
                "title": "BARE",
                "flags": "--bare",
                "desc": "Treat this repo as a bare repo.",
                "code": "git --bare"
    }
  ]
    }
};
