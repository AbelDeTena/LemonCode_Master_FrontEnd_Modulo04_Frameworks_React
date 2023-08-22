export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface UsersResponse {
  users: GitHubUser[];
}

export interface ApiResponse {
  data: GitHubUser[];
  loading: boolean;
  error: Error | null;
  setError: (error: Error | null) => void;
}

export interface ListProps {
  organization: string;
  setOrganization: (organization: string) => void;
  data: GitHubUser[];
  loading: boolean;
  error: Error | null;
  setError: (error: Error | null) => void;
}
