import 'server-only';

import { Octokit } from '@octokit/rest';
import { cache } from 'react';

export async function getTweetCount() {
  if (!process.env.TWITTER_API_TOKEN) {
    return 0;
  }

  const response = await fetch(
    `https://api.twitter.com/2/users/by/username/leeerob?user.fields=public_metrics`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    }
  );

  const { data } = await response.json();
  return Number(data.public_metrics.tweet_count);
}

export const getRepoCount = cache(async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const req = await octokit.request('GET /users/{owner}', {
    owner: 'Nathaniel-Nemenzo',
    // repo: 'leerob.io',
  });

  return req.data.public_repos;
});
