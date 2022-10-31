const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}



module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    config.resolve.fallback = { module: false };
    return config;
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
}
