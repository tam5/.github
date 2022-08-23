module.exports = async ({github, context, core}) => {
  const {SHA} = process.env
  const commit = await github.rest.repos.getCommit({
    owner: context.repo.owner,
    repo: context.repo.repo,
    ref: `${SHA}`
  })

  console.log({
    github, context, core, commit, SHA, env: process.env
  })

  core.exportVariable('author', commit.data.commit.author.email)
}
