import React from "react";
import { GitHubUser } from "./model";

export function UseApiDetail({ id }: { id: string }): GitHubUser {
  const [memberData, setMemberData] = React.useState(null);

  React.useEffect(() => {
    async function fetchMemberData() {
      try {
        const response = await fetch(`https://api.github.com/user/${id}`);
        if (response.ok) {
          const data = await response.json();
          setMemberData(data);
        } else {
          console.error("Error fetching member data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    }

    fetchMemberData();
  }, []);

  return memberData;
}
