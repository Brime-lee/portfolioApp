import axios from 'axios';

export const fetchRepos = async (username) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/users/${username}/repos?per_page=6`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch repositories: ${error.message}`);
  }
};
