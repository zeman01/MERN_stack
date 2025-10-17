//! config & setup
//* git -v / git --version -> 
//* git config --global --list  -> list all global config
//* git config --global user.name "your name" -> set git global user name
//* git config --global user.email "your email" -> set git global user email
//* git config --global init.defaultBranch "main" -> initialize default branch as main


//! initialize git repository
//*  git init => initialize git repo locally (project folder)
//* git clone <remote_repo_url>


//! connect with remote repository
//* git remote -v -> list remote repositories
//* git remote add origin <repo_url> -> connect local and remote repositories
//* git remote remove origin  => removes remote repo

//! Workflow
//TODO: Working Directory [WD]  -> Staging Area -> Local Repository -> Remote Repository

//* git status
//* git add <file_path> -> add single file to staging area / stage single file
//* git add . -> add all file to staging area / stage all file
//* git commit -m "<commit_message>" -> push stage changes to local repo
// * git push origin <branch_name>  -> push local repo to remote repo
// * git pull origin <branch_name>

//! brnach 
//* git branch    -> list all available branches
//* git branch <branch_name>  -> create new branch
//* git checkout <branch_name>  -> switch branch
//* git checkout -b <new_branch_name> =>  crate new branch + switch
//* git branch -d <branch_name>  -> delete  branch locally


// !merging
//* git pull <branch_name>
//* git merge <branch_name>

//! Stash 
// * git stash  -> store current changes to stash
// *  git stash pop -> apply stashed chnages to WD.

// git revert <commit_id>
// git revert --abort