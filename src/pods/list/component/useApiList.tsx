import React from "react";

import { GitHubUser, ApiResponse } from "./model";

export const useApiList = ({
  organization,
}: {
  organization: string;
}): ApiResponse => {
  const url = `https://api.github.com/orgs/${organization}/members`;
  const [data, setData] = React.useState<GitHubUser[]>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: Response = await fetch(url);

        if (!response.ok){
          const errorMessage = `Network response was not ok: ${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }

        const jsonData: GitHubUser[] = await response.json();
        setData(jsonData);
      } catch (error) {
        const customError = new Error("An error occurred");
        setError(customError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error, setError };
};
