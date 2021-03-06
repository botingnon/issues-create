export const LOAD_ISSUES = 'LOAD_ISSUES';
export const SET_ISSUE = 'SET_ISSUE';
export const IS_LOADING = 'IS_LOADING';

export interface Label {
  'id': number,
  'node_id': string,
  'url': string,
  'name': string,
  'color': string,
  'default': boolean,
}

export interface User {
  'login': string,
  'id': number,
  'node_id': string,
  'avatar_url': string,
  'gravatar_id': string,
  'url': string,
  'html_url': string,
  'followers_url': string,
  'following_url': string,
  'gists_url': string,
  'starred_url': string,
  'subscriptions_url': string,
  'organizations_url': string,
  'repos_url': string,
  'events_url': string,
  'received_events_url': string,
  'type': string,
  'site_admin': boolean,
}

export interface Issue {
  'url': string,
  'repository_url': string,
  'labels_url': string,
  'comments_url': string,
  'events_url': string,
  'html_url': string,
  'id': number,
  'node_id': string,
  'number': number,
  'title': string,
  'user': User,
  'labels': Array<string | Label | any>,
  'state': string,
  'locked': boolean,
  'assignee': any,
  'assignees': Array<any>,
  'milestone': any,
  'comments': number,
  'created_at': string,
  'updated_at': string,
  'closed_at': string,
  'author_association': string,
  'body': string,
}

export interface RootState {
  loading: boolean;
  issues: Array<Issue>;
  issue: Issue|null;
}
