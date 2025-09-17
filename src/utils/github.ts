export type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
  homepage?: string | null;
};

export async function getUserRepos(user: string) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?sort=updated&per_page=9`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!res.ok) return [] as Repo[];
    const data = (await res.json()) as Repo[];

    // Ordena por: con homepage primero, luego stars y actualización
    return data
      .filter((r) => !r.name.startsWith("."))
      .sort((a, b) => {
        const aScore = (a.homepage ? 1 : 0) + a.stargazers_count;
        const bScore = (b.homepage ? 1 : 0) + b.stargazers_count;
        return bScore - aScore;
      });
  } catch (e) {
    return [] as Repo[];
  }
}